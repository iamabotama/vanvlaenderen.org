# vanvlaenderen-record-collection — §5 skill update (paste pipeline)

Authored 2026-06-25. The paste pipeline (`docs/records-editor-paste-pipeline-spec-2026-06-25.md`)
is built and live in the DB; the editor change is staged on `mvf`. The skill now
needs the §5 edits below. The in-session skill cache is read-only, so apply these
on the host: edit
`…/skills/vanvlaenderen-record-collection/SKILL.md` (or via Settings → Capabilities),
then this addendum can be deleted.

---

## 1. Add a new section "Output format (paste pipeline)"

Insert after the "Roles and write path" section. Exact text to add:

```markdown
## Output format (paste pipeline)

The skill's deliverable is one fenced ```json block — a single object the records
editor's **Paste a full record (JSON)** field parses, previews, and submits. Emit
exactly this shape (omit keys you have no value for; do not invent values):

​```json
{
  "event": {
    "event_type": "marriage",
    "date_text": "6 April 1739",
    "date_iso": "1739-04-06",
    "date_precision": "day",
    "year": 1739,
    "municipality_id": "MUN_0089",
    "parish_id": "PAR_0046",
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
​```

Resolution is done server-side by the `apply_full_record` RPC: prefer `*_id`
fields; a `municipality_name`/`parish_name` is resolved by canonical name (a
missing municipality is rejected, never auto-created; a missing parish is created
and reported). A `sources[].register` shelfmark is matched to `sources` by
`inventory_reference`; absent, a `SRC_` row is created (category `parish`,
repository `Rijksarchief Belgie (AGATHA)`). `tracker` is optional.

### Min bar — refuse to emit an incomplete record

This is the skill's own gate (the editor and the RPC re-check it). Before emitting,
require all of:

- `event.event_type` non-empty.
- a date: `event.year` OR `event.date_text`.
- ≥1 participant with `role` + `name_as_written`.
- ≥1 source with a `url`, OR `event.needs_source` set to `1` (an index-only lead
  with no record yet is allowed, but must say so explicitly).
- living-person gate: if the type is birth-ish (`baptism`/`civil_birth`/`marriage`/
  `civil_marriage`) and the year is within ~100 years, do not emit (deaths/burials
  are exempt).

If something is missing, do NOT emit the JSON. Name what is missing and ask the
human for it.

### Role behaviour

- Curator (Michael, Cowork): may write directly to the live tables after an in-chat
  review (as today), OR emit the JSON block for the paste field — the editor's
  curator Submit applies it via `apply_full_record` and keeps a proposal row.
- Contributor (Connie, Claude Pro): always emit the JSON block. She pastes it into
  the records editor while logged in; it lands in `proposals` (`kind='full_record'`)
  for the curator to apply. Tracker-only changes she emits as a `progress_update`
  payload (`{municipality_id, set, coverage}`) the same way.
```

> Note: the literal ```` ``` ```` fences above are shown with a zero-width marker
> (`​`) only so they nest inside this addendum. Strip the marker when pasting —
> the skill should show plain ```` ```json ```` fences.

---

## 2. Switch coverage capture to the structured field

`research_progress.coverage` (jsonb) now exists, so coverage no longer goes in the
notes string.

- **Edit step A2 (currently lines ~113–114).** Replace:
  > Until a structured coverage field exists, write it into
  > `research_progress.notes`, e.g. `index 1685-1796; records: none 1580-1610,
  > digitizing 1611-1664 & 1697-1705`.

  with:
  > Write it into the structured `research_progress.coverage` jsonb via the
  > `tracker.coverage` field, keyed by record class, e.g.
  > `{"parish_birth":{"index":"1685-1796","record_gaps":["1580-1610","1611-1664","1697-1705"]}}`.
  > Reserve `notes` for prose that does not fit the structured shape.

- **Edit the table-of-columns bullet for `research_progress`** (currently lines
  ~57–59) to add `coverage` (jsonb) after `civil_death`.

---

## 3. (Optional) cross-reference

Add to the "The model you are writing into" preamble a one-line pointer that the
full-record submission path is the `apply_full_record` RPC (spec:
`docs/records-editor-paste-pipeline-spec-2026-06-25.md`).
