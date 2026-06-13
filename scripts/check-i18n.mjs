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

if (errors.length) {
  console.error('\n✗ i18n check FAILED:\n' + errors.map(e => '  - ' + e).join('\n'))
  console.error('\nSee nl-i18n-canonical-names. Localized name forms are allowed only in keys where en.json also uses them (glosses, verbatim quotes, enumerated lists).\n')
  process.exit(1)
}
console.log(`✓ i18n check passed (${enKeys.size} keys; EN/NL parity, canonical names, tier vocabulary OK)`)
