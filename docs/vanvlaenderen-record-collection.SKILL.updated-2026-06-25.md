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
  (jsonb, structured index/record coverage per record class), `notes`.
- `proposals` - contributor submission queue. Curator reviews and applies.

ID minting: `EVT_`/`SRC_`/`PER_` ids are `PREFIX_` + zero-padded(4) of (current
max + 1). The `apply_full_record` RPC (see "Output format") mints these for you on
the full-record path; if you write directly, query the max before inserting.
`event_participants` and `event_sources` use auto identity keys - never supply them.

## Roles and write path

The skill always produces the SAME artifact: one complete structured record -
event fields + full participant list + sources + transcription/translation +
the proposed tracker-cell change. How it lands differs:

- Curator (Michael, Cowork desktop): after showing the proposed record in chat
  for approval, write it to the live tables and update the tracker.
- Contributor (Connie, Claude Pro browser): do NOT write to the live tables and
  do NOT use a raw database credential. Hand her the completed structured record
  and have her submit it through the records editor while logged in as a
  contributor; it lands in the `proposals` queue, where RLS pins it to her role.
  Michael then reviews and applies it - that apply step is the validation pass,
  and it runs the intake-validation discipline.

Either way the human approves before anything reaches the live tables. The queue
is the validation pass for contributed data; the in-chat review is the gate for
the curator's own.

## Output format (paste pipeline)

The deliverable for a full record is one fenced ```json block - a single object
the records editor's **Paste a full record (JSON)** field parses, previews, and
submits. The curator's Submit applies it atomically via the `apply_full_record`
RPC (keeping a proposal row for the audit trail); a contributor's Submit lands a
`proposals` row (`kind='full_record'`). Emit exactly this shape (omit keys you
have no value for; never invent values):

```json
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
```

Resolution is server-side in the RPC: prefer `*_id` fields; a `municipality_name`
or `parish_name` is resolved by canonical name (a missing municipality is
rejected, never auto-created; a missing parish is created and reported). A
`sources[].register` shelfmark is matched to `sources` by `inventory_reference`;
absent, a `SRC_` row is created (category `parish`, repository
`Rijksarchief Belgie (AGATHA)`). `tracker` is optional. A contributor's
tracker-only change is emitted as a `progress_update` payload
(`{municipality_id, set, coverage}`) and applied the same way.

### Min bar - refuse to emit an incomplete record

This is the skill's own gate (the editor and the RPC re-check it). Before emitting,
require all of:

- `event.event_type` non-empty.
- a date: `event.year` OR `event.date_text`.
- at least one participant with `role` + `name_as_written`.
- at least one source with a `url`, OR `event.needs_source` set to `1` (an
  index-only lead with no record yet is allowed, but must say so explicitly).
- living-person gate: if the type is birth-ish (baptism/civil_birth/marriage/
  civil_marriage) and the year is within ~100 years, do not emit (deaths/burials
  are exempt).

If something is missing, do NOT emit the JSON. Name what is missing and ask the
human for it.

## Capturing AGATHA pages (runtime-agnostic)

Do not depend on automated browsing - Connie has no Claude-in-Chrome on Pro. The
human navigates AGATHA themselves (logged in) and supplies the page image URL
plus a screenshot or close-up of the relevant rows; the skill works from those.
If Claude-in-Chrome is available (Cowork) it may drive navigation, but it is
never required. Never screen-scrape AGATHA via bash/curl/requests.

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
2. Record coverage and gaps. Note (a) the year span the index covers and (b) the
   year span the records cover, including missing/not-available and
   still-digitizing ranges. Absence of records is NOT absence of Van Vlaenderens
   - capture the gap so later searches revisit. Write it into the structured
   `research_progress.coverage` jsonb via the `tracker.coverage` field, keyed by
   record class, e.g.
   `{"parish_birth":{"index":"1685-1796","record_gaps":["1580-1610","1611-1664","1697-1705"]}}`.
   Reserve `notes` for prose that does not fit the structured shape.
3. Scan the index for the surname and every variant (Van Vlaenderen, Vlaenderen,
   Vlaenders, etc. - consult `surname_variants`). Indexes may be one volume or
   split by year/decade; scan every interval. Per hit capture: name as written,
   spouse/partner if shown, date, page number, book number, index image URL.
4. Seed one event per hit at index level: `event_type`, `date_text`/`year` from
   the index, `municipality_id`, `parish_id`, a `summary` noting it is from the
   index, `needs_source=1`, `fully_sourced=0`; an `event_sources` row with
   `role='index'`, the index image `url`, the register `source_id`; and
   `event_participants` for the names the index gives, `person_id` null,
   `status='unreconciled'`.
5. Update the tracker per the status table below.

### Phase B - record extraction (per lead)

Goal: enrich each lead into a complete, transcribed record.

1. From the lead's date/page/book, the human navigates to the register volume
   and page and supplies the page image URL plus a screenshot.
2. Produce a transcription AND an English translation. Zoom on uncertain words
   and reconcile letter by letter. Preserve the Latin/Middle-Dutch verbatim;
   mark illegible/uncertain readings explicitly (`[surname lost]`, `Petrus(?)`).
3. Extract the full participant list - every person and role (marriage: groom,
   bride, both witnesses, officiant; baptism: child, father, mother, godfather,
   godmother, officiant). This is the step the add form cannot do.
4. Reconcile index against record. Where they disagree, the record (the original
   act) governs; note the index version in `notes`. Where the record is
   illegible but the index is clear, keep the index value and flag it.
5. Amend the event: set `transcription`, `translation`, a clean `summary`; add an
   `event_sources` row `role='original_record'`, page image `url`,
   `url_level='folio'`; set `needs_source=0`, `fully_sourced=1`; insert the full
   participant set (replacing thin index-only participants).
6. Update the tracker status. Repeat for each lead.

## Status decision table (research_progress cells)

Set the cell for the record class just worked:

- Index scanned, surname NOT in the index -> `None Listed`.
- Index scanned, Van Vlaenderen found, record not yet pulled -> `present`.
- Records scanned/extracted, found and entered -> `Complete (found)`.
- Records fully scanned, none found -> `Complete (0 found)`.
- Partly worked -> `In progress`. Untouched -> `Not Started`.

`Complete (found)`/`Complete (0 found)` are the found/empty split; both read as
"scanned". A municipality whose every cell is `Complete (0 found)`/`None Listed`
with zero held records is a confirmed dead-end and drops out of the tracker's
"exclude municipalities without Van Vlaenderen" filter.

## Discipline rails (non-negotiable)

1. Never invent. Names, dates, shelfmarks, URLs come only from what is in front
   of you. Illegible -> flag it (`[...]`, `(?)`), never guess a fill.
2. Tier honestly. Keep `needs_source`/`fully_sourced` honest so the data shows
   its own provenance; an index lead is weaker than a transcribed record.
3. AGATHA URLs are page-level. One index page or register folio holds many
   entries, so distinct events legitimately share a `url`. NEVER use URL-equality
   to detect or merge duplicates - dedup only on record identity (date +
   principal + parents/spouse + roles) and legacy source row.
4. Canonical surname + V/v. Set `canonical_surname='Van Vlaenderen'` on any
   spelling variant; keep `name_as_written`/`surname` verbatim. `Van Vlaenderen`
   free-standing; `van Vlaenderen` as a particle in a Latin/Dutch phrase.
5. Capture gaps. Missing or undigitized year ranges go in `research_progress.coverage`.
6. Approve before writing. Curator: show the proposed record in chat, then write.
   Contributor: submit to the proposals queue; the curator's apply is the gate.
7. No living individuals. Births/marriages within ~100 years are blocked;
   deaths/burials are allowed. Honor the editor's gate.

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

## Worked example (Afsnee, Sint-Jan-Baptist)

Index sweep: baptisms -> none (`parish_birth='Complete (0 found)'`); deaths ->
none (`parish_death='Complete (0 found)'`); marriages -> one hit, "Joannes Van
Vlaenderen met Clement Maria Joanna, 6 April 1739, p.147 bk.2" (index image
`.../01355_000/0_0040_r`) -> `parish_marriage='present'`, seed a marriage event.
Record extraction: register `.../01357_000/0_0147`; the Latin act reads "6
Aprilis anni 1739 ... contraxerunt matrimonium Joannes van Vlaenderen et Joanna
Maria Clement coram me et testibus Mattheo van Vlaenderen et Claudina Clement. P.
Fockaert pbr pastor." Participants: groom Joannes van Vlaenderen, bride Joanna
Maria Clement, witnesses Mattheus van Vlaenderen and Claudina Clement, officiant
P. Fockaert. Amend with transcription/translation/participants and the
`original_record` source -> `parish_marriage='Complete (found)'`.
