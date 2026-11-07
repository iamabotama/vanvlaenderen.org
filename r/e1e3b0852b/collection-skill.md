> **Collection skill — snapshot for pasting into a thread.** Last synced 2026-11-07 from the canonical source `Van Vlaenderen research/Skills/vanvlaenderen-record-collection/SKILL.md`. The Drive home is the edit source; run `pnpm sync:skill` to refresh this snapshot. `sha256:bf1b3d233f973947`

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
  folio or testament, a leenregister / fief or attestation entry, transcribe/translate a register page, add an event, the
  research tracker / research_progress, the events / event_participants /
  event_sources tables, or EVT_/PER_/SRC_/PRG_ ids. Curators write after an
  in-chat review; contributors (e.g. Connie on Claude Pro) draft proposals for
  curator review. Do NOT use for the findings or source-note layers; this is the
  structured vital-records layer only.
---
<!-- skill-revision: 2026-11-06.ecc5acd4 -->

<!-- Revised 2026-11-05 (late night): rail 21 added (every payload carries _skill_revision, the revision id
near the top of this file; apply.mjs and validate-batch.mjs refuse a payload built against
another revision or none). Cause: on 5 Nov a thread built eight records against a stale synced copy of this
skill while the canonical file had been revised twice. Detail: Operational/apply-path-safety-2026-11-05.md. -->

<!-- Revised 2026-11-05 (night): three apply-failures from the lead-reads batch (Michael, approved
22:41 PT). Rail 13: surname is required, not just name_as_written. Rail 19: the permitted field and
reason lists, and that a rejected flag set does not fail its record. Roles and write path: applying a
batch file through the editor leaves it unstamped. Detail:
Operational/overnight-runs/2026-11-05/lead-reads/lead-reads-report-2026-11-06.md (appendix). -->

<!-- Revised 2026-11-05: name fields (Michael, decisions of 3 and 5 Nov). Rail 4 reworded (name_as_written
is the only verbatim field; given/surname are the editor's standard forms, Q1 and Q-B), rail 17 narrowed (a
given-only child keeps its given name; brackets never import another person's word, Q3 and Q-A), rail 19
extended (derived fields travel with a rename; a new participant needs a surname or [not recorded], Q-D and
Q-F), Phase A step 4 notes "given/surname from the AGATHA index" (Q7). Added the participant key
name_provenance (written, carried, inferred, placeholder; Q2): stated on every participant whose surname is
not in name_as_written; inert until the provenance migration is applied, refused-if-missing after it.
Specs: Operational/participant-name-fields-cleanup-spec-2026-11-03.md and -2026-11-05.md. -->

<!-- Revised 2026-11-05: rail 20 added (what reaches Michael during data gathering:
irreversible, blocking, or about to be used; the rest stays a flag). -->

<!-- Revised 2026-11-04 (late evening): review flags (Michael, "go" 21:23 PT). Rail 15 rewritten
(names: no number of machine reads settles a name; digits: two agreeing blind reads beat the index),
rail 19 added (_review_flags on every record and plan; never emit overwrite; read locking flags
first), amend-plans paragraph (ruling lock) and Roles section (contributor amend proposals).
Spec: Operational/review-flags-and-amend-proposals-spec-2026-11-04.md. -->

<!-- Revised 2026-11-04: rail 12a added (civil acts dated by the act, Michael).
Revised 2026-10-30: rail 7 replaced (Michael, plan a). The living-person gate
now follows the Belgian civil-status access periods (in force 1 Jan 2025): births
and baptisms enter after MORE than 100 years, marriages after MORE than 75; deaths
and burials are not gated. People inside an admitted act who may still be living
are entered (rail 16) and flagged "possibly living" in notes, never given a PER
row, never published. Same rule in the editor and the DB trigger
reject_living_event. Also: amend plans can now be pasted in the records editor. -->

<!-- Revised 2026-10-26 (evening): rail 18 added. Every AGATHA source carries
sources[].bookpart_id, the tracker volume it cites; a volume's "found" status is
now DERIVED from records citing its bookpart (view v_volume_found), and the manual
found tick box is retired. -->

<!-- Revised 2026-10-26 (later): rail 17 added. name_as_written is always given
name(s) first, then the surname exactly as the clerk spelled it ("Jean Vanvlaenderen",
"Pierre François Vlaenderen (Van)"), never in the index's surname-first column order,
and always carries the surname even when the cell or act body gives only the given
name (take it from the ditto, margin or heading). Spelling stays verbatim: Michael
chose to keep joined forms like "Vanvlaender" as written. -->

<!-- Revised 2026-10-26: paste contract gains optional fields (no contract_version
bump): participants[].status and person_id, event.source_locator, and a
description for a NEW source row (source_category, source_subtype, repository,
short_citation, full_citation, reliability). A new source is no longer silently
filed as an AGATHA parish register: outside vital and fiscal record types the
RPC refuses an undescribed new source. Rail 16 added: every person the act names
enters the record (parents, spouses, witnesses, guardians, kin, sureties,
counterparties, neighbours, previous and following holders), never omitted. -->

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
  `municipality_id`, `parish_id`, `record_subtype` (e.g. `fief_holding`, `staet`;
  must be in `events_record_subtype_check`), `source_locator` (folio / section /
  entry), `transcription`, `translation`, `summary`, `needs_source`,
  `fully_sourced`, `notes`.
- `event_participants` - one row per person in an event. Columns: `event_id`,
  `role` (child/deceased/subject/secondary/officiant/father/mother/bride/groom/
  godfather/godmother/godparent/witness/mentioned), `person_id` (nullable - set it
  only when the curator has named the PER row; the RPC links it on insert), `name_as_written`, `given`,
  `surname`, `canonical_surname`, `status` (unreconciled/reconciled/not_tracked:
  `not_tracked` for people who are not Van Vlaenderen bearers, `reconciled` only
  with a `person_id`), `notes`. `participant_id` auto-generated.
- `event_sources` - one row per citation. Columns: `event_id`, `source_id`
  (`SRC_NNNN`, nullable), `role` (index/original_record/derivative), `locator`,
  `url`, `url_level` (register/folio), `notes`. `event_source_id` auto-generated.
- `sources` - register-level shelfmarks. `source_id` (`SRC_NNNN`),
  `short_citation`, `full_citation`, `source_category`, `source_subtype`,
  `repository`, `reliability`, `inventory_reference`.
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
  Applying a batch FILE through the editor's paste field leaves that file unstamped:
  `_applied_as` is written back only by `apply-batch.mjs`, and the editor writes nothing
  to disk and nothing to `Workflow/apply-batch.log`. A file applied by paste and then
  re-run through the script re-applies every record in it. Apply a file with the script,
  or stamp it by hand from the live ids afterwards, matching on a unique field such as
  `date_iso` (Michael, 5 Nov 2026, after seven records were nearly duplicated that way).
- Contributor (Connie, Claude Pro browser): paste -> Parse & preview -> Submit.
  Her Submit lands a row in the `proposals` queue (RLS pins it to her role).
  Michael then reviews and applies it; that apply step is the validation pass and
  runs the intake-validation discipline.

Contributors also file **amend proposals** from the records editor (Propose a change on a
record, or Propose on a review flag): the participant and field, the value read,
confidence, and the image read (AGATHA URL or Drive path). The proposal goes to the queue;
the curator accepts (the amendment runs through `amend_record`, closes the flag, and is
undoable) or rejects with a reason the contributor sees. Nothing a contributor writes lands
in a record's notes; the curator's generated note names the proposal and the change.

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
    "source_locator": "f. 23v",
    "transcription": "…verbatim…",
    "translation": "…english…",
    "summary": "…",
    "needs_source": 0,
    "fully_sourced": 1,
    "notes": "…"
  },
  "participants": [
    {"role":"groom","name_as_written":"Joannes van Vlaenderen","given":"Joannes","surname":"van Vlaenderen","canonical_surname":"Van Vlaenderen","notes":null},
    {"role":"bride","name_as_written":"Maria de Smet","given":"Maria","surname":"de Smet","status":"not_tracked","notes":null},
    {"role":"witness","name_as_written":"Petrus de Vos","given":"Petrus","surname":"de Vos","status":"not_tracked","notes":null},
    {"role":"father","name_as_written":"Livini","given":"Livinus","surname":"van Vlaenderen","canonical_surname":"Van Vlaenderen","name_provenance":"inferred","notes":"named only as 'filius Livini'; surname inferred from the groom's"}
  ],
  "sources": [
    {"role":"index","register":"BE-A0514 / 1075 / 000 / 01355","locator":"p. 141, reg. 6","url":"https://…/0_0040_r","url_level":"folio","bookpart_id":"54314","notes":"…"},
    {"role":"original_record","register":"BE-A0514 / 1075 / 000 / 01357","locator":"f. 23v","url":"https://…/0_0147","url_level":"folio","bookpart_id":"54344","notes":"…"}
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
changes. The 2026-10-26 fields (`status`, `person_id`, `source_locator`, new-source
description) are optional additions, so the version stays 1.

Resolution is server-side in the RPC: prefer `*_name` fields. A
`municipality_name` is resolved to its id and a missing municipality is rejected,
never auto-created; a `parish_name` missing under that municipality is created
and reported. A `sources[].register` shelfmark is matched to `sources` by
`inventory_reference` (or `short_citation`) and reused. Absent, a `SRC_` row is
created, and what it says depends on what you give it:

- **Describe a new source whenever it is not an AGATHA parish register.** Add
  `source_category` and `repository` (both, or neither), and where known
  `source_subtype`, `short_citation`, `full_citation`, `reliability`. These are
  used only when the row is created; an existing source ignores them.
- Undescribed, a new source is defaulted only for vital types (baptism,
  civil_birth, marriage, civil_marriage, burial, civil_death, death,
  index_entry: `parish` / `Rijksarchief Belgie (AGATHA)`) and fiscal types
  (estate_record, tax_roll, census: `fiscal` / `Rijksarchief Gent`, flagged
  "check them"). For any other type (attestation, feudal acts, office records,
  ...) the RPC refuses the record until the source is described or created.

Participants: `status` and `person_id` are honoured. Omit `status` and it is
`reconciled` when a `person_id` is given, otherwise `unreconciled`. The RPC
refuses an unknown PER id, `reconciled` without a `person_id`, and a
`person_id` with `not_tracked`. Contributors leave `person_id` out; linking is
the curator's decision.

A non-AGATHA source, described (example):

```json
{"role":"original_record","register":"Leenhof van de Burg van Brugge TBO 15, nr 65","locator":"f. 213r","url":null,"url_level":"folio",
 "source_category":"administrative","source_subtype":"leenregister","repository":"Rijksarchief Brugge","reliability":"high",
 "short_citation":"Rijksarchief Brugge, Leenhof van de Burg van Brugge (Toegang TBO 15), nr 65 (leenregister of the Burg of Bruges)"}
```

**Amend plans (curator).** To change an EXISTING event (add a transcription,
an original_record source, participant notes, a corrected name), emit an amend
plan instead of a new record: `{"_kind":"amend","target_event_id":"EVT_…",
"source_key":"<unique key>","note":"…","event_if":{…},"event_set":{…},
"participants_update":[{"participant_id":…,"set":{…},"append_notes":"…"}],
"participants_add":[…],"sources_add":[…]}`. Paste one plan or an array into the
same records-editor field (or run `Workflow/apply-batch.mjs`); it goes to the
`amend_record` RPC, is logged in `event_amendments` and is idempotent per
source_key. `transcription`, `translation`, `source_locator` and existing
`given`/`surname` are fill-only: the RPC skips them if already filled, so say in
the plan's note when a hand edit is needed. A field the curator has ruled on (a closed review flag) is skipped
too and reported as locked; only the curator's own paths (`resolve_review_flag`,
`accept_amend_proposal`, or a plan he wrote himself with `overwrite`) change it. A plan may
carry `_review_flags` (rail 19); they are raised after it applies. After applying, the editor offers the
source-flag recompute. `participants_add` and `participants_update` do not take `name_provenance` yet
(the B2 build adds it); say in the plan's note when a row's surname is inferred, so the stamp can follow.

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
- `name_provenance` on every participant whose `surname` does not occur (letters
  only, case ignored) in `name_as_written`: `inferred` when the surname comes from
  a named relative or from household position; `carried` only when the source
  wrote it for this person by ditto, index column, margin or block head AND it has
  been carried into `name_as_written` (rail 17). Omit the key when the surname is
  in `name_as_written` (the database stamps `written`); a rail-13 literal is stamped
  `placeholder` automatically. Any other mismatch is refused by `apply_full_record`
  once the provenance migration is live; before it the key is stored nowhere and
  ignored. Never state `written` or `carried` for a surname that is not in the name.
- every participant role corresponds to a column the source actually has (rail 10).
- every person the act names is a participant (rail 16): parents, spouses,
  godparents, witnesses, guardians, kin, sureties, counterparties, neighbours,
  previous and following holders. Non-bearers get `status: "not_tracked"`.
- `status` is one of unreconciled / reconciled / not_tracked; `reconciled` only
  with a `person_id`; no `person_id` with `not_tracked`.
- a new source that is not an AGATHA parish register carries `source_category`
  and `repository` (with `short_citation` and `reliability` where known).
- at least one source with a `url`, OR `event.needs_source` set to `1` (an
  index-only lead with no record yet is allowed, but must say so explicitly).
- on an index source, a `locator` carrying page AND register book (rail 11).
- every AGATHA source carries `bookpart_id` for the volume it cites (rail 18).
- `fully_sourced: 1` ONLY with a folio url AND a transcription/translation.
- access-period gate (rail 7): a baptism/civil_birth must be MORE than 100 years
  old and a marriage/civil_marriage MORE than 75 years old (measured to the day
  when the act's full date is known, else the whole year must be past). Otherwise
  do not emit. Deaths/burials are exempt.

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
   Vlaenders, etc. - consult `surname_variants`; for pre-1600 or French/Latin-register
   material also run the grep block in
   `Research Findings/companion-memos/name-variant-search-register.md` - the
   de Flandre(s)/de Flandria forms are in tracked scope). Indexes may be one volume or
   split by year/decade, and several volumes may split the ALPHABET across the same
   years; scan every interval. Per hit capture: name as written, the other names the
   columns actually give (father's given, mother's surname+given — and no more),
   date, **page number AND its superscript register book**, index image URL.
4. Seed one event per hit at index level: `event_type`, `date_text`/`year` from
   the index, `municipality_name`, `parish_name`, a `summary` noting it is from
   the index, `needs_source=1`, `fully_sourced=0`; an `event_sources` row with
   `role='index'`, the index image `url`, the register shelfmark; and
   `event_participants` for the names the index gives, `status='unreconciled'`,
   each with the note "given/surname from the AGATHA index" and no `name_provenance`
   key (the index writes the surname next to the name, so the default `written`
   applies; the note marks the values as provisional until the act is read).
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
4. Canonical surname + V/v. `name_as_written` is the only verbatim field: the
   source's spelling, spacing and capitalisation for this person in this act.
   `given` and `surname` are the editor's standard forms: one form per name, case
   regularised, particle separated, abbreviations expanded, Latin genitives in the
   nominative. Where the index and the act give the same name in variant spellings
   (Broeckaert / Brockaert, Vlaendere / Vlaenderen), the standard form stands and
   nothing is rewritten. The act governs only where the index and the act give
   different names (Laren / Laroij, Wulgaerts / Walgaerts); then `given`/`surname`
   follow the act. All-capital index forms are case-fixed, not re-spelled. Set
   `canonical_surname='Van Vlaenderen'` on any spelling variant; it is the only
   collapse to a single form. Standard form means the regularised representation of
   the letters the clerk wrote (case, particle, abbreviation, grammatical case), never
   a re-spelling: a variant spelling of a bearer's surname (van Vlanderen, Vlaendere,
   Deflandre) stays in `surname`, and `canonical_surname` alone collapses it (Michael,
   6 Nov 2026). `Van Vlaenderen` free-standing; `van Vlaenderen` as a
   particle in a Latin/Dutch phrase.
5. Capture gaps. Missing or undigitized year ranges go in
   `research_progress.coverage` as per-segment registers (`available:false`).
6. Approve before writing. Both roles paste -> Parse & preview -> Submit; the
   curator's Submit applies, a contributor's Submit queues for the curator's
   apply. Never raw-INSERT around the pipeline.
7. Access periods, and no living people published (Michael, 2026-10-30). The
   gate follows the Belgian civil-status access periods (law in force 1 Jan
   2025): births and baptisms enter after MORE than 100 years, marriages after
   MORE than 75; deaths and burials are not gated. The editor and the DB trigger
   both enforce it. An admitted act can still name people who may be alive (a
   1950 marriage names the bride and legitimated children): enter every one of
   them (rail 16), add "possibly living (b. c. YYYY)" to the participant notes
   for anyone born within 100 years with no known death, never create or link a
   PER row for them, and never carry them to the site or any outbound document
   (ARCHITECTURE §3.10). The database is sign-in only; that is why names may
   stay in the record.
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
12a. Civil acts are dated by the ACT (Michael, 4 Nov 2026; ARCHITECTURE §3.12.5). For a
   civil_birth, civil_marriage or civil_death the event's `date_text`/`date_iso` is
   the day the act was drawn up, which is what the AGATHA index gives. When the act
   states a different birth or death day ("geboren op gisteren", "overleden den
   eenentwintigsten"), put that day in the summary and the principal's notes, never
   in the event date, and never re-date an index lead to the event day.
13. A participant is never blank. If a name cannot be supplied, say which kind of
   nothing it is:
   - `"name_as_written": "[illegible]"` — the name IS in the act, but unreadable.
   - `"name_as_written": "[not recorded]"` — the act names nobody in this role.
   A blank row asserts neither and is indistinguishable from "nobody has looked
   yet". These two literals are the only acceptable placeholders; the editor and
   the integrity check both know them.
   **`surname` is required too, not just `name_as_written`** (Michael, 5 Nov 2026;
   this is the rule rail 19 already pointed here for). `apply_full_record` refuses a
   named participant that carries only `given` and `name_as_written`, and the whole
   record fails with it. The field still takes the editor's standard form, not the
   verbatim one (rail 4). Where part of the surname cannot be read, give the standard
   form of the legible part and mark the gap in place (`"surname": "van [illegible] van
   Vooren"`), so the legible part stays searchable; a bare `[illegible]` only where none
   of it can be read, and `[not recorded]` where the act names no surname. A participant
   whose `name_as_written` is itself one of the two placeholders still needs the
   `surname` field set to the matching placeholder.
14. French Republican dates are dates. Records from **an 1 to an 14** (1792-1805)
   are dated in the Republican calendar: `an 5`, `5 Vendémiaire an 8`,
   `1er Brumaire an 10`. Months run **Vendémiaire, Brumaire, Frimaire, Nivôse,
   Pluviôse, Ventôse, Germinal, Floréal, Prairial, Messidor, Thermidor,
   Fructidor**. Each year begins around **22 September**, so *an 8* straddles 1799
   and 1800 — a Republican year is NOT a calendar year.
   - Put the Republican date verbatim in `date_text`; put the Gregorian conversion
     in `date_iso`. If only the year is given (`an 5`), set `date_precision: year`
     and **leave `date_iso` null** rather than inventing a day.
   - **`an 5` is not a page number and 1691 is not a year.** A past ingest read the
     Kaprijke page column as the year and produced three "17th-century" baptisms
     that were actually 1797-1801. If a "year" looks like a page number, check the
     column.
   - **AGATHA classifies Napoleonic-era registers as PARISH records** (Michael,
     2026-07-11). Do NOT reclassify them as civil, and do not move them out of
     parish coverage.
15. Distrust agreement, yours and the other reader's (Michael, 4 Nov 2026). On this
   project's hands:
   - A DIGIT read once by Claude never beats the stored value (twelve straight
     disagreements resolved against Claude in 2026). Two independent BLIND reads that
     agree do beat the index (17 of 17 right, Oedelem, 4 Nov 2026): the readers' value
     is stored and the index value goes in a closed `corroborated` flag.
   - A NAME is different: on 4 Nov 2026 two blind readers agreed with each other and
     were wrong four times (O008, O037, O043, O173). No number of machine reads settles
     a name. When your reading differs from the index or the stored form, KEEP the
     stored form, emit a `name_vs_index` flag with your reading as `alt_value`, and let
     a human look at the image.
   Do not build a finding on a flagged value, digit or name.
16. Every named person enters the record (Michael, 2026-10-26). Rail 10 stops you
   inventing people; this rail stops you dropping them. Parents, spouses and
   witnesses are what lineages are rebuilt from, so every person the act or its
   margin names becomes a participant: parents, spouses, children, godparents,
   witnesses, guardians (voochden), kin and friends (maghen ende vrienden),
   sureties, counterparties, previous and following holders, neighbours, and the
   officiant or schepenen where the act names them. A doubtful name goes in
   bracketed as written; a non-bearer gets `status: "not_tracked"`; never
   omitted. A role the schema lacks (guardian, surety, counterparty, neighbour)
   is `secondary` (or `mentioned`) with the real role in `notes`. Lines that hold
   names are transcribed, never only summarised "for sense".
17. `name_as_written` is given name first, then the surname as written (Michael,
   2026-10-26). Indexes list people surname first; do not copy that column order
   into the field. Write "Jean Vanvlaenderen", not "Vanvlaenderen Jean", and
   "Pierre François Vlaenderen (Van)", not "Vlaenderen (Van), Pierre François".
   Keep the clerk's spelling, spacing and capitalisation exactly ("Vanvlaender",
   "henri", "VanVlaenderen" stay as written); only the ORDER is normalised. The
   field holds what the source writes for this person, no more. When the cell or
   the act gives this person only a given name (a birth act that names the child
   "Henricus"), `name_as_written` is that given name alone and `surname` carries the
   relative's surname; say in the participant's `notes` where it came from (it is
   inferred). A surname enters `name_as_written` only through a device that names
   this person: a ditto in the same row, an index column, a margin entry for this
   person, or a family-block head line in a compiler's abstract. Brackets complete a
   word the source wrote for this person ("Vlaend[eren]"); they never import a word
   written for someone else ("Livini [van Vlaenderen]" is wrong when the act gives
   only "Livini"). A surname belongs to the name it is written against, by grammar
   and not by role: in "Carolus van Vlaender f. Livini" it is the child's and the
   father's is inferred; in "filius Livini van Vlaenderen" it is the father's and the
   child's is inferred. `given` and `surname` hold the two parts separately, in the
   standard forms of rail 4; `canonical_surname` is still "Van Vlaenderen". The
   inference is stated structurally as well as in the notes: such a participant
   carries `"name_provenance": "inferred"` (values: written, carried, inferred,
   placeholder; see the min bar), so the notes say where the surname came from and
   the column says what kind of value it is. Identity linking (ARCHITECTURE
   S3.12.6) weighs an inferred surname below a written one.
18. Every AGATHA source names its volume (Michael, 2026-10-26). Put the tracker
   volume's AGATHA bookpart number in `sources[].bookpart_id` (digits only, e.g.
   `"62860"`): the index book for an `index` source, the register for an
   `original_record` source. It is the number in the volume's AGATHA link,
   `https://agatha.arch.be/en/search/genealogie/{bookpart}`; the curator's Claude
   reads it from `research_coverage.segments[].bookpart_id`, and the editor fills it
   in automatically when the record is added with **Add record here** pinned to that
   volume. A tracker volume shows **found** only because records cite its bookpart
   (view `v_volume_found`), so "found" means *found in this index or register*, never
   *some record falls in these years*: overlapping spans and parallel copies cannot
   leak a find into the wrong volume. There is no manual found flag any more. If you
   cannot tell which volume a source belongs to, leave `bookpart_id` out and say so;
   do not guess from the year.
19. Record review owed; never hold for it (Michael, 4 Nov 2026). Every record and amend
   plan you emit may carry `"_review_flags": [ { "participant_index": 0 | "participant_id": 123
   | (none, for the act), "field": "...", "reason": "...", "stored_value": "...",
   "alt_value": "...", "evidence": {...} } ]`. Raise one for: a field you marked uncertain or
   gave alternatives for (`reader_uncertain`); two reads that differ (`readers_disagree`); a
   name that differs from the index even when the two readers agree (`name_vs_index`); a
   date, age or act number from one read with no index value (`digit_single_read`); a
   which-act, which-column or struck-entry call (`structure`). `evidence` carries the
   readers' values and confidence, the index value, the image URL or Drive path and folio,
   never image bytes. The pipeline raises the flags after the record applies; a flag never
   stops anything. `field` must be one of `name_as_written`, `given`, `surname`,
   `canonical_surname`, `role`, `date_text`, `date_iso`, `year`, `age`, `birth_date`,
   `death_date`, `act_number`, `structure`, `other`, and `reason` one of the eight named
   above (`review_flags_field_check`, `review_flags_reason_check`); anything else is
   rejected. **A rejected flag set does not fail its record**: on 5 Nov 2026 a flag with
   `field: "summary"` was dropped while its record applied, leaving EVT_6464 flagless and
   the run's tally silent about it, so after a batch check `review_flags` by event id
   rather than trusting the console count. A fact about the act that fits no field name is
   `structure` or `other`, never a field invented for it; a birth or death day read off the
   act is `birth_date` / `death_date`. Never emit `overwrite` in a plan: it changes a filled name field or a
   field the curator ruled on, and apply-batch refuses it. Before building plans, read the
   locking flags for your target events (`select * from review_flags where locks and
   event_id in (...)`) and drop any line that touches a locked field; list them in the
   review file under "locked". A plan that changes `name_as_written` on a row with a
   filled `surname` states the derived fields that follow (`given`, `surname`,
   `canonical_surname`) or says in its `note` why they stay. In a review-flag
   resolution or a proposal acceptance, give them in the same call (`p_given`,
   `p_surname`, `p_canonical_surname` on `resolve_review_flag`; `p_derived` on
   `accept_amend_proposal`): both refuse a rename that would leave the stored
   surname pointing at a name the new value no longer contains. A new participant
   needs a surname; if the act names none, the surname is `[not recorded]`
   (rail 13).

20. What reaches Michael during data gathering (Michael, 5 Nov 2026). Every
   uncertainty is already safe in the database as an open review flag, so a batch
   report puts a decision in front of him only when one of three things is true:
   - **Irreversible**: a void, delete, merge or retire of a record or person.
   - **Blocking**: the next batch cannot run until it is decided.
   - **About to be used**: the value is going into a finding, the site or an
     outbound document.
   Everything else stays a flag and waits for a flag-review session, worked in
   bulk by type (all disputed dates in one sitting, all name variants in another)
   when he chooses. People seen on a page but not entered go into the run's leads
   file for the next sweep thread, never into his list. Each item that does reach
   him is one line of context, the image link with the act's position on the
   page, a recommendation, and what happens if he does nothing. Batch the
   irreversibles so one "go" covers them. Never spawn a thread to resolve flags
   unless he asks for the review session.

21. Stamp every payload with the skill revision (Michael, 5 Nov 2026). Copies of this
   skill drift: the canonical file in Skills/, the synced plugin copy, the site snapshot and Connie's
   upload are not updated together, and a thread that reads an old copy builds payloads that break
   rules it never saw. The canonical file carries a revision id on a line near the top,
   `<!-- skill-revision: YYYY-MM-DD.xxxxxxxx -->`, derived from the file's own content by
   `node "Workflow/skill-revision.mjs" stamp`. Before building anything, read the revision line of the
   copy you were given. If it has none, it is not the canonical file: stop and ask for the canonical
   one. Put the id you read into every record and every amend plan as `"_skill_revision": "YYYY-MM-DD.xxxxxxxx"`
   (the editor ignores the key; apply-batch strips it). Optionally add `"_payload_kind": "record"` or
   `"amend"`. `Workflow/apply.mjs` and `Workflow/validate-batch.mjs` refuse a payload with no stamp or a
   stamp that differs from the canonical file, so a stale copy is caught at the door, not after the
   apply. Never copy a stamp from another payload or invent one; if you did not read the revision
   line yourself, leave the key out and say so. A contributor's payload carries the revision of the
   copy she was given; a mismatch means "refresh your skill copy", not that the reading is wrong.

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
