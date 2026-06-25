# Records editor — paste-record pipeline (build spec)

Status: spec, ready to build. Authored 2026-06-25.
Scope: extend the records editor (`public/r/e1e3b0852b/index.html`) + the DB so a
full, multi-participant, transcribed record can be submitted from a single paste
field, routed through the `proposals` queue, and applied atomically. This is the
piece that lets Connie (contributor, Claude Pro web) collect records that the
curator validates on apply.

Companion: the `vanvlaenderen-record-collection` skill produces the record block
this pipeline ingests. Decisions already made with Michael: **fenced JSON**
interchange format; **min-info bar authoritative in the skill, re-checked in the
editor**; contributor → proposals queue, curator apply = validation pass.

## 1. Interchange format (fenced JSON)

The skill emits one fenced ```json block: a single object the editor parses.

```json
{
  "event": {
    "event_type": "marriage",
    "date_text": "6 April 1739",
    "date_iso": "1739-04-06",
    "date_precision": "day",
    "year": 1739,
    "municipality_id": "MUN_0089",
    "municipality_name": "Afsnee (Gent)",
    "parish_id": "PAR_0046",
    "parish_name": "Sint-Jan-Baptist",
    "transcription": "…verbatim…",
    "translation": "…english…",
    "summary": "…",
    "needs_source": 0,
    "fully_sourced": 1,
    "notes": "…"
  },
  "participants": [
    {"role":"groom","name_as_written":"Joannes van Vlaenderen","given":"Joannes","surname":"van Vlaenderen","canonical_surname":"Van Vlaenderen","notes":null}
  ],
  "sources": [
    {"role":"index","register":"BE-A0514 / 1075 / 000 / 01355","url":"https://…/0_0040_r","url_level":"folio","notes":"…"},
    {"role":"original_record","register":"BE-A0514 / 1075 / 000 / 01357","url":"https://…/0_0147","url_level":"folio","notes":"…"}
  ],
  "tracker": {
    "municipality_id":"MUN_0089",
    "set": {"parish_marriage":"Complete (found)"},
    "coverage": {"parish_marriage":{"index":"1665-1793"}}
  }
}
```

Resolution rules (applied server-side, see §4):
- `municipality_id` preferred; if only `municipality_name`, resolve by canonical
  name. No match → reject with a clear message (do not auto-create municipalities).
- `parish_id` preferred; if only `parish_name` + a municipality, resolve; if no
  match, create the parish (`PAR_` next id) and flag it in the apply result.
- `sources[].register` is the shelfmark (`inventory_reference`/`short_citation`).
  Look up `sources` by `inventory_reference`; create a `SRC_` row if absent
  (category `parish`, subtype per record class, repository `Rijksarchief Belgie
  (AGATHA)`).
- `tracker` is optional; `set` writes status cells, `coverage` writes the
  `research_progress.coverage` jsonb (added 2026-06-25).

## 2. Min-info bar

Authoritative copy lives in the skill (so it is identical across runtimes); the
editor re-validates on parse as a backstop and names what is missing.

Required to submit:
- `event.event_type` non-empty.
- a date: `event.year` OR `event.date_text`.
- ≥1 participant with `role` + `name_as_written`.
- ≥1 source with a `url`, OR `event.needs_source === 1` set explicitly
  (an index-only lead with no record yet is allowed, but must say so).
- living-person gate: reuse the existing rule — if the type is birth-ish and
  `year > NOW-100`, block (deaths/burials exempt).

On failure the editor lists each missing item and does not enable Submit.

## 3. Editor UI (Add tab)

Add a second path alongside the existing single-field form (keep that for quick
one-offs):

- A `Paste record (JSON)` `<textarea>` + a `Parse` button.
- On Parse: `JSON.parse`; on error show the parse error. Run the min-bar check.
  Render a read-only **preview**: event summary line, a participant table
  (role / name / canonical), the source list, and the tracker change. Show any
  min-bar failures inline.
- `Submit`:
  - contributor → insert one row into `proposals` (`kind='full_record'`,
    `payload` = the parsed object). RLS already lets contributors insert.
  - curator → call the apply RPC directly (§4), or insert-then-apply for a
    uniform audit trail (recommend insert-then-apply so every record has a
    proposal row).
- After submit, clear the field and flash success.

## 4. Apply path — Postgres RPC (recommended)

Do NOT apply multi-table writes from the client in several round-trips (partial-
write risk). Add a `SECURITY DEFINER` function:

`apply_full_record(payload jsonb) returns jsonb`

- Asserts `app_role() = 'curator'` (authz server-side; raises otherwise).
- Resolves municipality (by id/name), parish (id/name, create if missing),
  sources (by register, create if missing) — minting `PAR_`/`SRC_` ids inside
  the function.
- Mints the next `EVT_` id; inserts `events`, then `event_participants[]`, then
  `event_sources[]`, then the optional `research_progress` `set`/`coverage`.
- Returns the created `event_id` + any created parish/source ids + flags
  (e.g. "created parish PAR_xxxx").
- All in one statement/transaction → atomic.

`applyProposal` for `kind='full_record'` becomes: call `apply_full_record` with
the proposal payload, then mark the proposal `applied`. Extend the editor's
`APPLY_FIELDS`/`applyProposal` switch accordingly. Keep the legacy single-
participant `new_record` path working.

Contributor status-only edits (since inline tracker edit is curator-only): let
contributors submit a `kind='progress_update'` proposal carrying
`{municipality_id, set, coverage}`; the curator applies it the same way.

## 5. Skill updates (vanvlaenderen-record-collection)

- Add an "Output format" section: emit exactly the §1 JSON in a fenced block,
  and state the §2 min bar as the skill's own gate (refuse to emit an
  incomplete record; prompt the human for what's missing).
- Switch coverage capture from the notes string to the `tracker.coverage` field
  (the `research_progress.coverage` jsonb now exists).
- Role behaviour: curator may write directly (as today) OR emit JSON for the
  paste field; contributor always emits JSON for the paste field → proposals.

## 6. Test plan

- Round-trip the Afsnee marriage JSON through Parse → preview → (curator) apply;
  confirm it reproduces EVT_1456-equivalent rows (new event id) with 5
  participants + 2 sources + tracker change.
- Contributor submit lands a `proposals` row; curator apply creates the record
  and marks it applied; a second apply is a no-op/blocked.
- Min-bar: a payload missing all sources and without `needs_source=1` is
  rejected with a clear message; an index-only lead with `needs_source=1` passes.
- Parish auto-create path: a record naming a not-yet-existing parish creates it
  and reports the new id.
- RLS: a contributor cannot call `apply_full_record` (raises); cannot write
  `research_progress` directly.

## 7. Deploy

Editor edits land on `mvf` → `pnpm build` → review → merge `main` → push (CI
deploys). The RPC + any policy go in via a tracked migration. Sequence the
migration before the editor deploy so the client never calls a missing RPC.
