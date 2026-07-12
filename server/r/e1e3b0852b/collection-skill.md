> **Collection skill — snapshot for pasting into a thread.** Last synced 2026-07-12 from the canonical source `Van Vlaenderen research/Skills/vanvlaenderen-record-collection/SKILL.md`. The Drive home is the edit source; run `pnpm sync:skill` to refresh this snapshot. `sha256:14e102b69178cf49`

---
name: vanvlaenderen-record-collection
description: >
  Two-phase workflow and write discipline for collecting Van Vlaenderen vital
  records from AGATHA (Rijksarchief Belgie) into the records database for the Van Vlaenderen / Lions of Flanders
  project. Read BEFORE any AGATHA index sweep, record transcription/translation
  for the DB, new event/participant/source insert, or research-tracker status
  change. Triggers on: collect/harvest records, AGATHA, the records editor at
  /r/, an AGATHA index or register, scan a parish, baptism/marriage/death or
  civil records, staten van goed / landboek / medieval
  folio or testament, transcribe/translate a register page, add an event, the
  research tracker / research_progress, the events / event_participants /
  event_sources tables, or EVT_/PER_/SRC_/PRG_ ids. Curators write after an
  in-chat review; contributors (e.g. Connie on Claude Pro) draft proposals for
  curator review. Do NOT use for the findings or source-note layers; this is the
  structured vital-records layer only.
---

<!-- Revised 2026-07-11 after the Ertvelde repair, which found 74 people in the
database who never existed, 17 wrong records, and 2 baptisms missing. Four rails
added (rails 10-13): TRANSCRIBE ONLY THE COLUMNS THE SOURCE HAS (never invent a
godparent); the register citation is page + BOOK, never page alone; date_text is
verbatim and date_iso is derived (Roman months land two months later than the
digit); a participant is never blank - use [illegible] or [not recorded]. Also:
fully_sourced now means exactly one thing, WE HAVE THE ACT. Prior (2026-06-30):
bulk-array output; tracker block RETIRED; preserve SOURCE ORDER (never reorder).
Prior (2026-06-26): paste pipeline canonical for both roles; contributors use
NAMES not IDs; per-segment coverage shape. -->

# Van Vlaenderen record collection

Discipline for turning AGATHA archival material into rows in the live records
database. The DB is the structured vital-records layer (people, events, their
participants and sources), distinct from the findings and source-note layers.
Connie's tracker and the public site's record views both read from it, so
completeness and honesty here are load-bearing.

This skill exists because the records editor's add form captures only one
principal per event and no transcription, so records were arriving incomplete
(a baptism with only the child, no parents or godparents). The skill carries the
judgment the form can't: reading an index, capturing coverage gaps,
transcribing, extracting the full cast, and reconciling index against record.

Two people use it. Michael is the curator; Connie is a contributor working from
Claude Pro in a browser. The write path differs by role (see "Roles and write
path"), but the collection process and discipline are identical for both.

## The model you are writing into

Live Supabase project `shqixhfbtrzybicfmxnv`. Relevant tables:

- `events` - one row per archival record. Key columns: `event_id` (`EVT_NNNN`),
  `event_type`, `date_text`, `date_iso`, `date_precision`, `year`,
  `municipality_id`, `parish_id`, `transcription`, `translation`, `summary`,
  `needs_source`, `fully_sourced`, `notes`.
- `event_participants` - one row per person in an event. Columns: `event_id`,
  `role` (child/deceased/subject/secondary/officiant/father/mother/bride/groom/
  godfather/godmother/godparent/witness/mentioned), `person_id` (nullable - leave
  null unless reconciling to a tracked person), `name_as_written`, `given`,
  `surname`, `canonical_surname`, `status` (unreconciled/reconciled/not_tracked),
  `notes`. `participant_id` auto-generated.
- `event_sources` - one row per citation. Columns: `event_id`, `source_id`
  (`SRC_NNNN`, nullable), `role` (index/original_record/derivative), `locator`,
  `url`, `url_level` (register/folio), `notes`. `event_source_id` auto-generated.
- `sources` - register-level shelfmarks. `source_id` (`SRC_NNNN`),
  `short_citation`, `full_citation`, `source_category`, `source_subtype`,
  `repository`, `inventory_reference`.
- `research_progress` - the tracker. One row per municipality (`PRG_NNNN`),
  columns `arrondissement`, `municipality`, `parish_birth`, `parish_marriage`,
  `parish_death`, `civil_birth`, `civil_marriage`, `civil_death`, `coverage`
  (jsonb, structured per-segment coverage - see "Coverage shape"), `notes`.
- `proposals` - contributor submission queue. Curator reviews and applies.
  Carries an optional `submitter_note` (a freeform note to the curator that
  travels with the submission and is never merged into the record).

ID minting: `EVT_`/`SRC_`/`PER_` ids are `PREFIX_` + zero-padded(4) of (current
max + 1). The `apply_full_record` RPC (see "Output format") mints these for you on
the full-record path; if you write directly, query the max before inserting.
`event_participants` and `event_sources` use auto identity keys - never supply them.

## Roles and write path

The skill always produces the SAME artifact: one complete structured record -
event fields + full participant list + sources + transcription/translation +
the proposed tracker-cell change. The write path differs by role, but the
deliverable and the discipline are identical.

The canonical write path for BOTH roles is the records editor's **Paste a full
record (JSON)** field: paste the JSON, click **Parse & preview**, then **Submit**.

- Curator (Michael, Cowork desktop): paste -> Parse & preview -> Submit. The
  curator's Submit applies the record atomically via the `apply_full_record` RPC
  and keeps a proposal row for the audit trail. The in-chat review before pasting
  is the gate.
- Contributor (Connie, Claude Pro browser): paste -> Parse & preview -> Submit.
  Her Submit lands a row in the `proposals` queue (RLS pins it to her role).
  Michael then reviews and applies it; that apply step is the validation pass and
  runs the intake-validation discipline.

Contributors never need live IDs and never touch a database credential. They
supply canonical NAMES (`municipality_name`, `parish_name`); the RPC resolves
them server-side. The schema lives in this skill, not in a live connector read -
a contributor's Claude reads the skill, not the database.

The Supabase connector is a CURATOR-ONLY tool, used for orientation reads
(existing events, parish ids, current tracker state) and for reviewing/applying
queued proposals. It is NOT a write path for new records: do not bypass the
paste pipeline with raw INSERTs. (The `apply_full_record` RPC is curator-gated
and will reject a connector session anyway: "only the curator may apply".)

Either way the human approves before anything reaches the live tables. The queue
is the validation pass for contributed data; the in-chat review is the gate for
the curator's own.

## Output format (paste pipeline)

The deliverable for a full record is one fenced ```json block - a single object
the records editor's **Paste a full record (JSON)** field parses, previews, and
submits. Emit exactly this shape (omit keys you have no value for; never invent
values). Supply NAMES, not IDs:

```json
{
  "contract_version": 1,
  "event": {
    "event_type": "marriage",
    "date_text": "6 April 1739",
    "date_iso": "1739-04-06",
    "date_precision": "day",
    "year": 1739,
    "municipality_name": "Aalter",
    "parish_name": "Sint-Cornelius",
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
    {"role":"index","register":"BE-A0514 / 1075 / 000 / 01355","locator":"p. 141, reg. 6","url":"https://…/0_0040_r","url_level":"folio","notes":"…"},
    {"role":"original_record","register":"BE-A0514 / 1075 / 000 / 01357","locator":"f. 23v","url":"https://…/0_0147","url_level":"folio","notes":"…"}
  ]
}
```

**`fully_sourced` means exactly one thing: WE HAVE THE ACT.** Set it to `1` only
when BOTH are true — a folio-level source with a real `url`, AND a
`transcription` or `translation`. An index link is not the act. A shelfmark with
no locator and no url is not a citation. If you do not have the act, the record is
`needs_source: 1, fully_sourced: 0`, and that is an honest, valuable row.
(This was recomputed corpus-wide on 2026-07-11: 570 records claimed
`fully_sourced`; only 137 actually had the act.)

**Bulk entry (a whole index sweep in one paste).** To submit many records at once,
emit a JSON **array** of these record objects — `[ { …record… }, { …record… }, … ]` —
and paste it once. The editor validates every record, previews them as a list, and
applies them all in one go. Keep the array in the **same order as the source index**
(see Discipline rails — never reorder). A single record may still be pasted as one
object.

`contract_version` (integer) stamps the record-contract version; the editor
validates it on paste and warns/rejects on mismatch so a stale skill can't
submit a shape the editor no longer accepts. Bump it only when this JSON shape
changes.

Resolution is server-side in the RPC: prefer `*_name` fields. A
`municipality_name` is resolved to its id and a missing municipality is rejected,
never auto-created; a `parish_name` missing under that municipality is created
and reported. A `sources[].register` shelfmark is matched to `sources` by
`inventory_reference`; absent, a `SRC_` row is created (category `parish`,
repository `Rijksarchief Belgie (AGATHA)`).

**No tracker block.** Do NOT emit a `tracker` / `progress_update` block — it is
retired and the editor ignores it. Search status is set per volume in the tracker
(the curator toggles an index or register), and marking an index `complete`
cascades to the registers it covers automatically (`apply_index_clear`). Coverage
is never written through the record paste.

### Min bar - refuse to emit an incomplete record

This is the skill's own gate (the editor and the RPC re-check it). Before emitting,
require all of:

- `event.event_type` non-empty.
- a date: `event.year` OR `event.date_text`.
- `event.municipality_name` (or `municipality_id`) AND `event.parish_name`
  (or `parish_id`) on any FOUND record, so the pasted block is self-contained
  for name resolution.
- at least one participant with `role` + `name_as_written` — and every participant
  row named, `[illegible]`, or `[not recorded]`. Never blank (rail 13).
- every participant role corresponds to a column the source actually has (rail 10).
- at least one source with a `url`, OR `event.needs_source` set to `1` (an
  index-only lead with no record yet is allowed, but must say so explicitly).
- on an index source, a `locator` carrying page AND register book (rail 11).
- `fully_sourced: 1` ONLY with a folio url AND a transcription/translation.
- living-person gate: if the type is birth-ish (baptism/civil_birth/marriage/
  civil_marriage) and the year is within ~100 years, do not emit (deaths/burials
  are exempt).

A zero-found sweep emits no record JSON - only the `progress_update` (tracker)
payload. If something is missing on a found record, do NOT emit the JSON. Name
what is missing and ask the human for it.

## Capturing AGATHA pages (runtime-agnostic)

Do not depend on automated browsing - Connie has no Claude-in-Chrome on Pro. The
human navigates AGATHA themselves (logged in) and supplies the page image URL
plus a screenshot or close-up of the relevant rows; the skill works from those.
If Claude-in-Chrome is available (Cowork) it may drive navigation, but it is
never required. Never screen-scrape AGATHA via bash/curl/requests.

Lift `municipality_name` and `parish_name` straight from the AGATHA results
header the human is already sending (e.g. "Aalter" / "Sint-Cornelius") - the
contributor types nothing. Take them verbatim; the RPC resolves them and the
curator catches any AGATHA-vs-DB spelling drift at apply.

## The process is two phases

A record enters in two stages. The model supports this: an event can exist first
as an index lead (source role `index`, `needs_source=1`) and later be enriched
into a full record (source role `original_record`, transcription/translation/
participants, `fully_sourced=1`).

### Phase A - index sweep (per municipality / parish / record-type)

Goal: establish coverage, find every Van Vlaenderen mention, seed one lead per
hit, update the tracker. A zero-found sweep is a valid, valuable result.

1. Confirm the record type and source (see "Record types"). For parish records:
   AGATHA `https://agatha.arch.be/en/search/genealogie/PR` -> municipality ->
   parish -> tick the index for the record class. The human opens these and
   supplies URLs/screenshots.
2. Capture coverage from the **register-list screenshot**. Always request a
   screenshot of the AGATHA register list (the rows with Document type /
   Starting year / Ending year columns and any red "Not available" badges). It is
   the source of truth for coverage and gaps: which registers exist, their year
   spans, which are digitized ("View") vs undigitized ("Not available"), and
   which spans an index actually covers. Distinguish index rows from record rows -
   they have different spans (e.g. records can exist for years the index does not
   cover, so those acts are unindexed and were never actually searched). Write all
   of this into the structured `research_progress.coverage` jsonb via
   `tracker.coverage` (see "Coverage shape"). Reserve `notes` for prose that does
   not fit the structured shape. Absence of records is NOT absence of Van
   Vlaenderens - capture the gap so later searches revisit.
3. **Read the column headers first** and write them down (see "Reading an index").
   Then scan for the surname and every variant (Van Vlaenderen, Vlaenderen,
   Vlaenders, etc. - consult `surname_variants`). Indexes may be one volume or
   split by year/decade, and several volumes may split the ALPHABET across the same
   years; scan every interval. Per hit capture: name as written, the other names the
   columns actually give (father's given, mother's surname+given — and no more),
   date, **page number AND its superscript register book**, index image URL.
4. Seed one event per hit at index level: `event_type`, `date_text`/`year` from
   the index, `municipality_name`, `parish_name`, a `summary` noting it is from
   the index, `needs_source=1`, `fully_sourced=0`; an `event_sources` row with
   `role='index'`, the index image `url`, the register shelfmark; and
   `event_participants` for the names the index gives, `status='unreconciled'`.
   Emit ALL the hits from one index as a single JSON **array** in the index's row
   order (bulk entry — one paste, one Submit). If the curator used the volume's
   **"Add record here"** in the tracker, the municipality, parish, class, span and
   register link are already pinned, so the pasted records need only carry what
   those leave blank.
5. Update the tracker per the status table below.

### Phase B - record extraction (per lead)

Goal: enrich each lead into a complete, transcribed record.

1. From the lead's date/page/book, the human navigates to the register volume
   and page and supplies the page image URL plus a screenshot.
2. Produce a transcription AND an English translation. Zoom on uncertain words
   and reconcile letter by letter. Preserve the Latin/Middle-Dutch verbatim;
   mark illegible/uncertain readings explicitly (`[surname lost]`, `Petrus(?)`).
3. Extract the full participant list - every person and role the ACT records
   (marriage: groom, bride, both witnesses, officiant; baptism: child, father,
   mother, godfather, godmother, officiant). This is the step the add form cannot
   do, and it is the step where the register — unlike the index — genuinely does
   give you godparents. Any role the act does not record gets `[not recorded]`,
   not a blank and not a guess.
4. Reconcile index against record. Where they disagree, the record (the original
   act) governs; note the index version in `notes`. Where the record is
   illegible but the index is clear, keep the index value and flag it.
5. Amend the event: set `transcription`, `translation`, a clean `summary`; add an
   `event_sources` row `role='original_record'`, page image `url`,
   `url_level='folio'`, a real `locator`; set `needs_source=0`, `fully_sourced=1`
   — this is the moment, and the ONLY moment, that flag becomes true, because it
   is the moment we have the act. Insert the full participant set (replacing thin
   index-only participants). Mark the matching register segment
   `cleared:true, via:"page-by-page"` in coverage.
6. Update the tracker status. Repeat for each lead.

## Coverage shape (per-segment)

A single status cell cannot honestly describe a record class that is a patchwork
of register segments with different availability and different search methods.
Store, per class, the index rows and the register rows from the register-list
screenshot, each register flagged for whether it has been cleared (searched):

```json
"parish_marriage": {
  "indexes":   [ {"span":"1696-1796","checked":true,"result":"none"} ],
  "registers": [
    {"span":"1580-1658","available":false,"cleared":false,"note":"Not available (undigitized)"},
    {"span":"1659-1696","available":true,"indexed":false,"cleared":false,"note":"acts exist, NO index - needs page-by-page"},
    {"span":"1696-1796","available":true,"indexed":true,"cleared":true,"via":"index","result":"none"}
  ]
}
```

- `indexes[]`: `span`, `checked` (did we read it), `result` (`none` | `found` |
  `redundant`). Note the hit in `result`/an extra field when found.
- `registers[]`: `span`, `available` (digitized on AGATHA), `indexed` (covered by
  a checked index), `cleared` (searched - via that index, or page-by-page), `via`
  (`index` | `page-by-page`), `result`, `note`.

The uncleared, available segments are the to-do list: they are exactly "what has
not been completed." Undigitized (`available:false`) segments stay visible so
they get revisited if AGATHA digitizes them, but they do not block completion.

The tracker UX renders only the rolled-up status cell by default, with an
expand/collapse disclosure for this per-segment detail, to stay uncluttered.

## Status decision table (research_progress cells)

Set the rolled-up cell for the record class just worked. The rollup is derived
from the coverage segments:

- Index scanned, surname NOT in it, and an available register still uncleared
  (e.g. an unindexed digitized span) -> `In progress`. There is still searchable
  material; do not call it done.
- Index scanned, surname NOT in it, and every available register cleared -> use
  `Complete (0 found)` only if the clearing was real (records read, or fully
  covered by the checked index); otherwise `None Listed`.
- Index scanned, Van Vlaenderen found, record not yet pulled -> `present`.
- Records scanned/extracted, found and entered -> `Complete (found)`.
- Records fully scanned, none found -> `Complete (0 found)`.
- Partly worked -> `In progress`. Untouched -> `Not Started`.

Note (resolves the prior status-table vs worked-example conflict): reserve
`Complete (0 found)` for a class whose available registers have actually been
cleared. A bare index sweep that found nothing but leaves an available-but-
unindexed register unsearched is `In progress`, not `Complete (0 found)`. Use
`None Listed` for "surname absent from the index we read" when there is no
remaining searchable material to flag.

A municipality whose every cell is `Complete (0 found)`/`None Listed` with zero
held records is a confirmed dead-end and drops out of the tracker's "exclude
municipalities without Van Vlaenderen" filter.

## Reading an index (the four ways it goes wrong)

An alphabetical index is a TABLE. Before reading a single name, read the **column
headers** and write them down. Everything below follows from getting that right.

### 1. Transcribe only the columns the source actually has

If the index has columns *child · father's given name · mother's surname + given
name · date · register page*, then it records **no godparent**. If a godparent
appears in your output, you have shifted a column.

This is not hypothetical. The Ertvelde ingest split the mother's cell in two: her
surname stayed on the `mother` row and her **given name was spun off into a
phantom `godparent`** — and then stamped `canonical_surname: "Van Vlaenderen"`.
That put **74 people into the database who never existed**, each of them actually
some other family's mother wearing our surname, and compiled them into 74 false
`godparent_of` relationships.

**Rule: a role you emit must correspond to a column the source has.** If the index
gives you three names, emit three participants — not four. When a cell is empty,
that is a fact about the source; see rail 13.

### 2. The register citation is page + BOOK

The last column is usually a page number **with a small superscript**. The
superscript identifies **which register volume**. A page number alone is not a
citation, because page 141 exists in every book.

Ertvelde has two children both indexed at "page 141": one at **141⁶**, one at
**141¹**. Different fathers, different mothers, different registers, a year apart
— two children. Stored as bare "141", they looked like a duplicate of each other.
Meanwhile two entries at **91³ and 91³** *were* one act indexed twice.

**Rule: capture the superscript.** Put it in `locator` as `p. 141, reg. 6`. If you
cannot read the superscript, say so — do not drop it and do not infer it from the
year.

### 3. Ditto marks (`id`) are a decision, not a transcription

`id` means "same as the row above" and it appears in every column, sometimes
several to a row (`id id id` in a mother column repeats all three of her names).
Resolving them is where parentage errors are born: two Ertvelde children had been
attached to the wrong father by a mis-resolved ditto, and nothing in the database
would ever have flagged it, because a wrong father is perfectly well-formed data.

**Rule: when presenting an index back to the human, show BOTH** — the literal cell
(`id`) and your resolved value, marked as resolved. Let them check the chain.

### 4. The clerk's hand beats yours

On the Ertvelde validation, Michael's reading of the *dates* was right and mine was
wrong six times out of six (1-vs-7, 4-vs-5, 8-vs-3). Where an existing record and
your reading disagree on a **number**, assume you are wrong and ask. Where they
disagree on **structure** — who is the child, which register — the record is the
weaker party, because that is where ingest bugs live.

## Discipline rails (non-negotiable)

1. Never invent. Names, dates, shelfmarks, URLs come only from what is in front
   of you. Illegible -> flag it (`[...]`, `(?)`), never guess a fill.
2. Tier honestly. Keep `needs_source`/`fully_sourced` honest so the data shows
   its own provenance; an index lead is weaker than a transcribed record.
3. AGATHA URLs are page-level. One index page or register folio holds many
   entries, so distinct events legitimately share a `url`. NEVER use URL-equality
   to detect or merge duplicates - dedup only on record identity (date +
   principal + parents/spouse + roles) and legacy source row. A shared
   `original_record` folio url plus a fuzzy name match is a strong duplicate
   INDICATOR (the editor surfaces it at preview), but never an auto-merge.
4. Canonical surname + V/v. Set `canonical_surname='Van Vlaenderen'` on any
   spelling variant; keep `name_as_written`/`surname` verbatim. `Van Vlaenderen`
   free-standing; `van Vlaenderen` as a particle in a Latin/Dutch phrase.
5. Capture gaps. Missing or undigitized year ranges go in
   `research_progress.coverage` as per-segment registers (`available:false`).
6. Approve before writing. Both roles paste -> Parse & preview -> Submit; the
   curator's Submit applies, a contributor's Submit queues for the curator's
   apply. Never raw-INSERT around the pipeline.
7. No living individuals. Births/marriages within ~100 years are blocked;
   deaths/burials are allowed. Honor the editor's gate.
8. Submitter notes are not record content. A note to the curator rides on the
   proposal (`submitter_note`), never inside the event; promote anything worth
   keeping into the record's own `notes` consciously.
9. Preserve source order. When transcribing a list or index for the human to
   validate, keep the EXACT order of the source image — never sort by name, year,
   or anything. They validate row-by-row against the scan, so reordering breaks
   that. Carry that same order through to the record array you emit (bulk entry).
10. Emit only the roles the source records. A participant role must correspond to
   a column the source actually has. If the index has no godparent column, emit
   no godparent. See "Reading an index" §1 — this rail exists because breaking it
   put 74 fictional people in the database.
11. Cite page AND book. `locator` reads `p. 141, reg. 6`. A bare page number is not
   a citation and must never be used to judge whether two records are the same act.
12. `date_text` is verbatim; `date_iso` is derived. Put exactly what the clerk
   wrote in `date_text` (`19 8ber 1787`) and the machine date in `date_iso`
   (`1787-10-19`). **The Roman-numeral months are Latin ordinals from a calendar
   that began in March, so they land TWO months later than the digit suggests:
   7ber = September, 8ber = October, 9ber = November, Xber/10ber = December.**
   Read naively as July/August/September/October, every one is two months early.
   Set `date_precision` to `day`/`month`/`year` — never pad a date you do not have.
13. A participant is never blank. If a name cannot be supplied, say which kind of
   nothing it is:
   - `"name_as_written": "[illegible]"` — the name IS in the act, but unreadable.
   - `"name_as_written": "[not recorded]"` — the act names nobody in this role.
   A blank row asserts neither and is indistinguishable from "nobody has looked
   yet". These two literals are the only acceptable placeholders; the editor and
   the integrity check both know them.

## Record types (v1 scope + extension hooks)

v1 is fully specified for parish records (baptism/marriage/death). The same
two-phase shape applies to the others, but sources/fields/indexes differ -
extend deliberately:

- Civil registers (1796+) - AGATHA "Civil status registers"; declarant +
  witnesses with ages/occupations. Confirm the legacy `event_type` convention
  for civil birth before inserting.
- Staten van goed / landboek / medieval folios & testaments - different
  repositories, no AGATHA index; richer prosopography, weaker vital data. Specify
  per-type fields with the user before first use; add a section here once fixed.

## Archiving (deferred capability)

Long-term goal: store both the AGATHA URL and a file-share copy of each index/
record image per source, for resilience and offline transcription. Until that
storage exists, record the AGATHA URL in `event_sources.url` and note the intent.

## Worked example (Aalter, Sint-Cornelius - 2026-06-26)

Phase A, marriages: register-list screenshot shows the alphabetical marriage
index covers 1696-1796, marriage acts are digitized 1659-1796, and 1580-1658 is
"Not available". The index has no Van Vlaenderen. Because the 1659-1696 acts are
digitized but unindexed (never actually searched), the cell is `In progress`, not
`Complete (0 found)` - coverage records the uncleared 1659-1696 segment as the
to-do. Phase A, deaths: the 1660-1796 death index has one hit, "Van Vlaenderen,
Marie, 11 March 1683, p.84 no.1" (a second 1765-1796 index is redundant). Seed a
burial lead (`needs_source=1`), cell -> `present`. The act sits in the available
1660-1696 register, so it is pullable in Phase B. A near-match surfaced at review
- an existing burial of "Marie" 1682 in Oostwinkel - judged a different person
(different parish + date): the duplicate check informs, the human decides.
