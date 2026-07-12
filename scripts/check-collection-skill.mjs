/**
 * check-collection-skill.mjs
 *
 * The records editor serves public/r/e1e3b0852b/collection-skill.md so the browser
 * (and Connie, on Claude Pro, who has no filesystem) can copy the current collection
 * skill. That file is a SNAPSHOT. The canonical source is in Google Drive:
 *
 *   …/Van Vlaenderen research/Skills/vanvlaenderen-record-collection/SKILL.md
 *
 * Two copies drift. Until now the only thing preventing drift was someone remembering
 * to re-export — which is the kind of discipline that fails quietly. This makes it loud.
 *
 * The catch: CI cannot see Google Drive. So the check has two modes.
 *
 *   DRIFT MODE   (Drive is reachable — i.e. Michael's machine)
 *     Byte-compares the snapshot body against the canonical SKILL.md.
 *     FAILS the build on any difference. This is the real check.
 *
 *   INTEGRITY MODE (Drive is absent — i.e. CI)
 *     Cannot verify freshness, so it verifies what it can:
 *       - the snapshot exists and is not truncated
 *       - it carries the "Last synced YYYY-MM-DD" header
 *       - the body matches the SHA-256 recorded in that header
 *     The digest is written by DRIFT MODE, so a snapshot exported on Michael's
 *     machine arrives in CI self-verifying. A hand-edited snapshot fails here.
 *
 * Fix a drift failure by re-exporting:  pnpm sync:skill
 *
 * Runs in `pnpm build`; standalone via `pnpm check:skill`.
 */
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SNAPSHOT  = path.resolve(__dirname, '../public/r/e1e3b0852b/collection-skill.md')

// Canonical home. Override with VV_RESEARCH_ROOT if the Drive letter/path differs.
const RESEARCH_ROOT = process.env.VV_RESEARCH_ROOT
  || 'C:/Users/MikeVF/My Drive/Ancestry VF Family/Van Vlaenderen research'
const CANONICAL = path.join(RESEARCH_ROOT, 'Skills/vanvlaenderen-record-collection/SKILL.md')

const SYNC = process.argv.includes('--sync')
const die  = (msg) => { console.error('❌  Collection-skill check FAILED:\n   ' + msg); process.exit(1) }

const sha = (s) => crypto.createHash('sha256').update(s, 'utf8').digest('hex').slice(0, 16)
const norm = (s) => s.replace(/\r\n/g, '\n').trimEnd() + '\n'   // CRLF-proof: the repo is on Windows

function header(date, digest) {
  return `> **Collection skill — snapshot for pasting into a thread.** Last synced ${date} from the `
    + 'canonical source `Van Vlaenderen research/Skills/vanvlaenderen-record-collection/SKILL.md`. '
    + 'The Drive home is the edit source; run `pnpm sync:skill` to refresh this snapshot. '
    + `\`sha256:${digest}\`\n\n`
}
const HDR_RE = /^> \*\*Collection skill.*?Last synced (\d{4}-\d{2}-\d{2}).*?`sha256:([0-9a-f]{16})`\s*\n\n/s

// ---------------------------------------------------------------- sync (re-export)
if (SYNC) {
  if (!fs.existsSync(CANONICAL)) die(`cannot sync — canonical skill not found at:\n   ${CANONICAL}`)
  const body   = norm(fs.readFileSync(CANONICAL, 'utf8'))
  const date   = new Date().toISOString().slice(0, 10)
  fs.writeFileSync(SNAPSHOT, header(date, sha(body)) + body, 'utf8')
  console.log(`✓ collection-skill snapshot re-exported (${date}, sha256:${sha(body)})`)
  process.exit(0)
}

// ---------------------------------------------------------------- check
if (!fs.existsSync(SNAPSHOT)) die(`snapshot missing at ${SNAPSHOT}`)
// Normalise FIRST, then match and strip. Git checks this file out with CRLF on
// Windows (core.autocrlf), and HDR_RE ends in `\s*\n\n` — which cannot match raw
// `\r\n\r\n`. Stripping the header from the raw string therefore silently left it
// in the body, inflating it by the header's length and failing every check.
const snap = norm(fs.readFileSync(SNAPSHOT, 'utf8'))

const m = HDR_RE.exec(snap)
if (!m) {
  die('the snapshot has no sync header, or it is malformed.\n'
    + '   Expected a leading blockquote with "Last synced YYYY-MM-DD" and a `sha256:…` digest.\n'
    + '   Run `pnpm sync:skill` to regenerate it from Drive.')
}
const [, syncedOn, recordedDigest] = m
const snapBody = norm(snap.replace(HDR_RE, ''))   // snap is already normalised above

if (fs.existsSync(CANONICAL)) {
  // DRIFT MODE — the real check.
  const canonBody = norm(fs.readFileSync(CANONICAL, 'utf8'))
  if (canonBody !== snapBody) {
    die('the served snapshot no longer matches the canonical skill in Drive.\n'
      + `   canonical : ${CANONICAL}  (sha256:${sha(canonBody)}, ${canonBody.length} bytes)\n`
      + `   snapshot  : collection-skill.md  (sha256:${sha(snapBody)}, ${snapBody.length} bytes, synced ${syncedOn})\n`
      + '\n   The editor would serve a stale skill to Connie. Fix with:  pnpm sync:skill')
  }
  if (recordedDigest !== sha(snapBody)) {
    die('the snapshot body does not match its own recorded digest — it was hand-edited.\n'
      + '   The Drive copy is canonical. Fix with:  pnpm sync:skill')
  }
  console.log(`✓ collection skill in sync with Drive (synced ${syncedOn}, sha256:${recordedDigest})`)
} else {
  // INTEGRITY MODE — CI. Freshness is unverifiable; self-consistency is not.
  if (recordedDigest !== sha(snapBody)) {
    die('the snapshot body does not match the digest in its own header.\n'
      + `   header says sha256:${recordedDigest}, body hashes to sha256:${sha(snapBody)}.\n`
      + '   Either it was hand-edited or it is truncated. Re-export on the Drive machine: pnpm sync:skill')
  }
  console.log(`✓ collection skill snapshot self-consistent (synced ${syncedOn}, sha256:${recordedDigest})`)
  console.log('  note: Drive not reachable here, so staleness vs the canonical SKILL.md was NOT checked.')
}
