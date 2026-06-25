/**
 * check-static-assets.mjs
 *
 * Guards against truncated / corrupted static HTML in public/ reaching a deploy.
 * Files under public/ are copied verbatim by Vite and are NOT parsed by the
 * bundler, so a torn copy (e.g. the records editor at public/r/) would otherwise
 * ship to production silently. This is the gap that let a 446-of-739-line
 * records-editor.html go live twice.
 *
 * For every public/ ** /*.html it checks:
 *   - no NUL bytes               (classic torn-write / corruption marker)
 *   - if the file opens as a full document (<!doctype html> or <html>), it must
 *     end with </html>           (truncation sentinel; fragments are exempt)
 *   - every inline <script> (no src=) compiles without a syntax error
 *     (a truncated script leaves an unterminated function — exactly the failure
 *     mode that broke editor login)
 *
 * Runs as part of `pnpm build` (so CI blocks a bad deploy) and standalone via
 * `pnpm check:assets`. Exits non-zero with a per-file report on any failure.
 */
import fs from 'fs'
import path from 'path'
import vm from 'vm'
import { fileURLToPath } from 'url'

const __dirname  = path.dirname(fileURLToPath(import.meta.url))
const publicDir  = path.resolve(__dirname, '../public')

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, out)
    else if (e.isFile() && p.toLowerCase().endsWith('.html')) out.push(p)
  }
  return out
}

const problems = []
const files = fs.existsSync(publicDir) ? walk(publicDir) : []

for (const file of files) {
  const rel = path.relative(publicDir, file).replace(/\\/g, '/')
  const buf = fs.readFileSync(file)

  if (buf.includes(0)) {
    problems.push(`${rel}: contains NUL byte(s) — file is corrupted/torn`)
  }

  const text = buf.toString('utf8')

  // Truncation sentinel — only for self-declared full documents.
  const isFullDoc = /^﻿?\s*(<!doctype html|<html[\s>])/i.test(text)
  if (isFullDoc && !/<\/html>\s*$/i.test(text)) {
    problems.push(`${rel}: opens as a full HTML document but does not end with </html> — likely truncated`)
  }

  // Unbalanced <script> tags catch truncation mid-script even in fragments
  // (and even when no </html> sentinel applies). Count every opener/closer.
  const opens  = (text.match(/<script\b/gi)   || []).length
  const closes = (text.match(/<\/script\s*>/gi) || []).length
  if (opens !== closes) {
    problems.push(`${rel}: ${opens} <script> opener(s) vs ${closes} </script> closer(s) — unbalanced, likely truncated`)
  }

  // Inline <script> syntax — skip <script src=...> and empty blocks.
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi
  let m, i = 0
  while ((m = re.exec(text))) {
    if (/\bsrc\s*=/i.test(m[1] || '')) continue
    const code = m[2]
    if (!code.trim()) continue
    i++
    try {
      // Wrap in an async IIFE so top-level await is permitted. Compile only —
      // vm.Script never executes the code, it just throws on a syntax error.
      new vm.Script(`(async()=>{${code}\n})`, { filename: `${rel}#script${i}` })
    } catch (err) {
      problems.push(`${rel}: inline <script> #${i} has a syntax error — ${err.message}`)
    }
  }
}

if (problems.length) {
  console.error('❌  Static asset check FAILED:')
  for (const p of problems) console.error('   - ' + p)
  console.error(`\n${problems.length} problem(s). Build blocked to avoid shipping corrupted/truncated files.`)
  process.exit(1)
}

console.log(`✓ static asset check passed (${files.length} HTML file${files.length === 1 ? '' : 's'} OK)`)
