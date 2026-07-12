/**
 * check-i18n.mjs
 *
 * Build gate for src/i18n/locales/{en,nl}.json. Exits non-zero (fails the
 * build) on any of:
 *
 *   1. EN/NL key parity break  - every key in one locale must exist in the other.
 *
 *   2. Canonical person-name drift in NL - the canonical forms are the route
 *      names: "Louis Friese", "Jan sans terre", "Loys le Hase". A localized
 *      form (e.g. "Jan zonder Land", "Lodewijk de Vriese") is legitimate ONLY
 *      where en.json also uses it in the SAME key (enumerated lists, "known as"
 *      glosses, verbatim quotes). So for each localized token we compare the
 *      set of nl.json keys containing it against the set of en.json keys
 *      containing it, and flag any NL-only key as drift.
 *
 *   3. Non-canonical evidence-tier wording in NL - prose tier mentions must
 *      match the badge labels (research.method_*_label): "Direct geattesteerd",
 *      "Sterk gecorroboreerd", "Waarschijnlijk", "Hypothese". English labels
 *      left untranslated, or Dutch synonyms, are flagged.
 *
 *   5. HTML markup in a string rendered as plain text - a value containing
 *      <em>, <a>, &ldquo; etc. only renders as markup when the call site uses
 *      dangerouslySetInnerHTML={{ __html: t(key) }}. A bare {t(key)} in JSX
 *      text position escapes it, so the visitor sees the literal tags. Three
 *      keys were shipping that way (victor.military_p1 showed "<em>De Vlaamse
 *      Gids</em>"; louis_friese.questions_cadet_body rendered an entire <a>
 *      link as text), fixed 2026-07-12. Only JSX text position is flagged: a
 *      t() in an object literal (e.g. the cohort-sidebar tiles) is passed to
 *      DiagramEngine, which does render it via __html, and is not an error.
 *
 *   4. Duplicate keys within the same object - JSON.parse silently keeps the
 *      LAST occurrence, so an earlier duplicate key is a silently dead string
 *      (the name.notes_source_5 Anselme-note incident, fixed 2026-07-02).
 *      Detected by a minimal raw-text JSON walk, since parsing can't see it.
 *
 * Background: memory/skill "nl-i18n-canonical-names". Run by `pnpm build` and
 * by the deploy CI, so drift cannot reach main. Pure ESM, no dependencies.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname  = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.resolve(__dirname, '../src/i18n/locales')

const en = JSON.parse(fs.readFileSync(path.join(localesDir, 'en.json'), 'utf8'))
const nl = JSON.parse(fs.readFileSync(path.join(localesDir, 'nl.json'), 'utf8'))

function flatten(obj, prefix = '', out = {}) {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k
    if (v && typeof v === 'object' && !Array.isArray(v)) flatten(v, key, out)
    else out[key] = v
  }
  return out
}
const keysWith = (flat, token) =>
  Object.entries(flat)
    .filter(([, v]) => typeof v === 'string' && v.includes(token))
    .map(([k]) => k)

const EN = flatten(en)
const NL = flatten(nl)
const errors = []

// --- 1. key parity ---
const enKeys = new Set(Object.keys(EN))
const nlKeys = new Set(Object.keys(NL))
const missingInNl = [...enKeys].filter(k => !nlKeys.has(k))
const extraInNl   = [...nlKeys].filter(k => !enKeys.has(k))
const fmt = (a) => a.slice(0, 12).join(', ') + (a.length > 12 ? ` … (+${a.length - 12})` : '')
if (missingInNl.length) errors.push(`EN keys missing from nl.json (${missingInNl.length}): ${fmt(missingInNl)}`)
if (extraInNl.length)   errors.push(`nl.json keys not in en.json (${extraInNl.length}): ${fmt(extraInNl)}`)

// --- 2. canonical name drift (localized forms must mirror EN per-key) ---
const NAME_TOKENS = [
  'Lodewijk de Vriese',
  'Lodewijk de Fries',
  'Lodewijk de Haze',
  "Lodewijk 'de Haze'",
  'Lodewijk &ldquo;de Haze&rdquo;',
  'Jan zonder Land',
]
for (const token of NAME_TOKENS) {
  const enSet  = new Set(keysWith(EN, token))
  const nlOnly = keysWith(NL, token).filter(k => !enSet.has(k))
  if (nlOnly.length) {
    errors.push(
      `Name drift: "${token}" in nl.json key(s) where en.json uses the canonical form -> ${nlOnly.join(', ')}`
    )
  }
}

// --- 4. duplicate keys within the same object (raw-text walk) ---
function findDuplicateKeys(raw, fileLabel) {
  // Minimal JSON walker: tracks object nesting + key sets per object.
  // Assumes valid JSON (JSON.parse above already guarantees it).
  const dups = []
  const stack = []            // one Set of seen keys per open object
  const pathStack = []        // key path to current position
  let i = 0, pendingKey = null
  const n = raw.length
  while (i < n) {
    const c = raw[i]
    if (c === '"') {
      // read string
      let j = i + 1, s = ''
      while (j < n) {
        if (raw[j] === '\\') { s += raw[j] + raw[j + 1]; j += 2; continue }
        if (raw[j] === '"') break
        s += raw[j]; j++
      }
      // is it a key? next non-ws char is ':'
      let k = j + 1
      while (k < n && /\s/.test(raw[k])) k++
      if (raw[k] === ':' && stack.length) {
        const seen = stack[stack.length - 1]
        const p = pathStack.concat(s).filter(Boolean).join('.')
        if (seen.has(s)) dups.push(`${fileLabel}: duplicate key "${p}" (earlier occurrence is silently dead)`)
        seen.add(s)
        pendingKey = s
        i = k + 1
        continue
      }
      i = j + 1
      continue
    }
    if (c === '{') { stack.push(new Set()); pathStack.push(pendingKey ?? ''); pendingKey = null }
    else if (c === '}') { stack.pop(); pathStack.pop() }
    else if (c === '[') { pendingKey = null }
    i++
  }
  return dups
}
for (const [label, file] of [['en.json', 'en.json'], ['nl.json', 'nl.json']]) {
  const raw = fs.readFileSync(path.join(localesDir, file), 'utf8')
  errors.push(...findDuplicateKeys(raw, label))
}

// --- 3. non-canonical evidence-tier wording in NL ---
const BANNED_NL_TIER = [
  'Directly Attested',
  'Strongly Corroborated',
  'Rechtstreeks geattesteerd',
  'rechtstreeks geattesteerd',
  'sterk bevestigd',
]
for (const bad of BANNED_NL_TIER) {
  const hits = keysWith(NL, bad)
  if (hits.length) {
    errors.push(
      `Tier wording: "${bad}" in nl.json should use the badge label (Direct geattesteerd / Sterk gecorroboreerd) -> ${hits.join(', ')}`
    )
  }
}

// --- 5. HTML markup in a string that the call site renders as plain text ---
// A value with tags/entities only renders as markup through
// dangerouslySetInnerHTML={{ __html: t(key) }}. A bare {t(key)} sitting in JSX
// text position escapes it and the tags show literally.
const HAS_MARKUP = /<\/?[a-z][a-z0-9]*\s*[^>]*>|&[a-z]+;/
const srcDir = path.resolve(__dirname, '../src')
const tsxFiles = []
;(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (e.name.endsWith('.tsx')) tsxFiles.push(p)
  }
})(srcDir)

for (const file of tsxFiles) {
  const src = fs.readFileSync(file, 'utf8')
  for (const m of src.matchAll(/\{\s*t\('([A-Za-z0-9_.]+)'\)\s*\}/g)) {
    // JSX text position only: the preceding non-whitespace char closes a tag.
    // (`__html: t(key)` and `expanded: t(key)` are both excluded by this test.)
    if (!src.slice(0, m.index).trimEnd().endsWith('>')) continue
    const value = EN[m[1]]
    if (typeof value === 'string' && HAS_MARKUP.test(value)) {
      errors.push(
        `Escaped markup: ${path.basename(file)} renders "${m[1]}" as plain text, but the string contains HTML `
        + `-- the tags will show literally. Use <p dangerouslySetInnerHTML={{ __html: t('${m[1]}') }} /> or strip the markup.`
      )
    }
  }
}

if (errors.length) {
  console.error('\n✗ i18n check FAILED:\n' + errors.map(e => '  - ' + e).join('\n'))
  console.error('\nSee nl-i18n-canonical-names. Localized name forms are allowed only in keys where en.json also uses them (glosses, verbatim quotes, enumerated lists).\n')
  process.exit(1)
}
console.log(`✓ i18n check passed (${enKeys.size} keys; EN/NL parity, canonical names, tier vocabulary, no escaped markup)`)
