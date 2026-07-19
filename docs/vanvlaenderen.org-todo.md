# vanvlaenderen.org — Website To-Do & Changelog
*Last updated: July 19, 2026*
*Repository: github.com/iamabotama/vanvlaenderen.org · Branch: main*

---

## 🔴 BACKLOG — HIGH PRIORITY

### Citations & Source Links (Research Pages)
The research dossier pages currently have Notes & Bibliography sections with reference numbers, but most entries lack live hyperlinks to digitally accessible sources. The goal is that every Directly Attested and Strongly Corroborated claim either links inline to a digitised source or has a numbered reference with a working URL.

**VictorDossierPage** (`/research/victor-dossier`)
- [ ] FMG MedLands — link all `[FMG NNN]` footnote numbers to the specific anchor on fmg.ac where available
- [ ] Inventaris Onroerend Erfgoed (Hof van Wessegem) — ref 2 already has link, verify it's still live: https://inventaris.onroerenderfgoed.be/erfgoedobjecten/33384
- [ ] Ursel, een Meetjeslands dorp — ref 3 link: https://mijnplatteland.com/meetjesland/ursel/
- [ ] Vredius (1643) *Sigilla Comitum Flandriae* — add Internet Archive link: https://archive.org/details/bub_gb_CNSBZDBvNV4C
- [ ] DBNL sources (Degryse, UGent corsair study) — verify existing links are live
- [ ] Bethune (1900) *Epitaphes* — not digitally accessible; flag as print-only

**PraetDossierPage** (`/research/praet-dossier`)
- [ ] Audit all source citations — identify which have URLs and which are print-only
- [ ] Wikipedia Louis of Praet — add inline link
- [ ] Pattou *Bâtards de Flandres* — add link: http://racineshistoire.free.fr/LGN/PDF/Flandre-B%E2tards.pdf
- [ ] Remmé Genealogie Online — add link: https://www.genealogieonline.nl/en/genealogie-richard-remme/I97902.php

**PraetLineageDossierPage** (`/research/praet-lineage-dossier`)
- [ ] Same audit as Praet dossier — link Pattou, FMG, Wikipedia, Buylaert Academia.edu

**VictorLineagePage** (`/research/victor`)
- [ ] Audit inline citations — FMG refs, 1441/42 charter note, Wessegem references
- [ ] Add link to Brugse Vrije TBO 184 via AGATHA portal where accessible

**ResearchPage** (`/research`)
- [ ] Crystallisation paragraph sources — add inline links to Wikipedia (Louis II, Count of Flanders) and Pattou

### New Content Pages
- [ ] `/research/methodology` — add Warlop *Flemish Nobility Before 1300* entry once acquisition confirmed (currently reading list only; no direct citation)
- [ ] `/research/bibliography` — add CLM entry once obtained
- [ ] Consider `/research/attestations` — a dedicated page mapping all known Van Vlaenderen attestations chronologically with bucket classifications and source links (longer term)

---

## 🟡 BACKLOG — MEDIUM PRIORITY

### Content Improvements
- [ ] **Name page** — add variant form section linking the four-bucket analysis to the spelling variants list; clarify that *de Flandre* / *de Flandria* / *Deflandre* are covered by the same framework
- [ ] **Name page** — update CBG Familienamenbank note: WFB2 entry is now confirmed as purely PlN classification; update any hedging language that implied the entry was unknown
- [ ] **Research Overview** — add link to `/research/bibliography` from the crystallisation paragraph source notes
- [ ] **About page** — add Methodology & Sources link in project scope section (noted in handoff doc)
- [ ] **Lineage page** — audit archive deep-links; verify all AGATHA / FamilySearch links still resolve
- [ ] **All research pages** — add `<time dateTime="">` markup to "Updated April 2026" dates for Schema.org compatibility
- [ ] **DNA page** — Geneanet heat maps integration. Embed the 1600–present and 1900–present surname heat maps alongside "Where the Research Stands" to visually ground the three-cluster claim. Resolve Geneanet licensing/attribution first. Higher priority than other DNA-page visuals.
- [ ] **Site-wide language pass** — full Dutch review by a Flemish native speaker (Connie, Pieter, or Rik). Particular attention to DNA-page technical terminology (*niet-paterniteitsgebeurtenissen*, *private varianten*, *niet-coderende regio's*, *haplogroep* usage), new About-page translations (April 18 pass), and the Research-page three-lines / Toponymic Paradox content.
- [ ] **ResearchMap update** — add Louis de Male as progenitor point plus the three son lordships (Ursel/Wessegem for Victor, Drincham/Cassel for Jan sans terre, Praet for Louis Friese). The Drincham pin is currently missing entirely.
- [ ] **Four Functions article (`/name/surname-origins`)** — optional clarity pass. Article is intellectually sound but long (540 lines) with structural redundancy: the French Flanders / Volckerinckhove cluster is discussed across four separate sections (Distribution Data observations, Testing Bastard-Line, Testing Pure Toponymy, Volckerinckhove Question). The individual-vs-distributional distinction (line 442) deserves more prominent placement. Optional tightening to reduce length by ~20% without changing substance.
- [ ] **"Last updated" tags on dossier pages** — only the Research page currently surfaces a user-visible date (via `research.dossier_updated`). Dossier pages (Victor, Praet, Drincham) have `dateModified` in schema.org JSON-LD but nothing rendered. Add visible date strip. Design decision needed: manual i18n dates vs. git-derived.

### Technical
- [ ] **Code splitting** — Vite build warns that the single JS bundle exceeds 500KB. Split at route level using `React.lazy()` per page component to reduce initial load. Low urgency but worth doing before the site grows further.
- [x] **Schema.org markup** — `ScholarlyArticle` + `BreadcrumbList` JSON-LD live on all three dossier pages. ✅ April 12, 2026
- [ ] **French locale (fr)** — backlogged pending Lille/French Flanders research content. Add to i18n infrastructure when content is ready; no architectural change required.
- [ ] **`/research/methodology`** — Augustyn & Thoen (1987) entry notes the article is not widely available; if a digitised copy is located, add link.

### SEO / Crawlability
- [ ] Verify Gemini can now crawl research content — Gemini requested a reassessment once crawl blocks were removed and content was prerendered. Run a test crawl and check whether `/research/victor-dossier` content is visible.
- [ ] Submit sitemap.xml to Google Search Console: https://vanvlaenderen.org/sitemap.xml
- [ ] Submit sitemap.xml to Bing Webmaster Tools

---

## 🟢 BACKLOG — LONGER TERM

- [ ] **`/research/attestations`** — dedicated chronological attestation page: every known Van Vlaenderen record mapped with date, location, source, bucket classification, and link. Derived from the Citation Chain Status table in the research todo. Highly crawlable; strong SEO signal for scholarly searches.
- [x] **Gap dossier** — `/research/gap-dossier` live. Two upper anchors (Victor + Praet), 1517 Knesselare charter, TBO 184, three hypotheses, Y-DNA handoff. ✅ April 12, 2026
- [x] **Private docs page** — `/docs` live. Three tabs: Research Notes, Website Backlog, Belgium Research Plan. Not indexed, not in sitemap, blocked in robots.txt. ✅ April 12, 2026 — `.sr-only` diagram summaries live on all three diagram pages. ✅ April 12, 2026
- [ ] **Image alt text audit** — all manuscript and heraldic images should have specific descriptive alt text (e.g. "Heraldic shields from the Cronike Van Vlaenderen, 15th century manuscript, BnF" not "heraldic image").
- [ ] **`/research/zeeland`** — possible future page if Zeeland thread develops (Laureys Arentsz, Arent van Vlaenderen). Skeleton only until primary sources are in hand.
- [ ] **Constance's research** — Goal 2 thread (comital connection) may generate new dossier content once Rijksarchief Gent results are processed.
- [ ] **Research database query frontend** — once the research DB is migrated to a hosted SQL backend (see `lions-of-flanders-todo.md` → Research Infrastructure), build a protected vanvlaenderen.org query interface that exposes parameterised queries to the public while blocking bulk scraping. Requirements: per-IP rate limits, query allow-listing (no arbitrary SQL), no raw table dumps, opaque pagination tokens, attestation-level access only. Endpoint name and IA placement TBD; downstream of the DB migration.

---

## 📋 CHANGELOG

### July 19, 2026 — External-review response wave: Packets A–C (A+B DEPLOYED; C staged on mvf)
Response to the external scholarly review (2026-07), prioritized plan agreed in chat.

**Packet A — Research overview calibration (DEPLOYED)**
- `src/i18n/locales/en.json` + `nl.json` — `research.hero_subhead`, `hero_lead_p1`, `paradox_body`, `conclusion_p1`: removed "unbroken documentary use from at least 1275" and "distributional signature of continuous patrilineal descent"; hereditary-surname claims scoped to Louis de Male natural-children lines (late 14th c. onward); 1275 recast as house-name usage among legitimate Dampierre cadet branches; continuity across usages labeled a working hypothesis; conclusion adds the no-documentary-bridge statement matching the gap dossier; "bastards" → "acknowledged natural children" with period-term parenthetical at first use. `src/pageMeta.ts` `/research` description recalibrated to match.
- NL strings are drafts → native Flemish review queue.

**Packet B — Bibliography prerender fix (DEPLOYED)**
- `public/data/bibliography.json` → `src/data/bibliography.json`; `BibliographyPage` now imports it statically, so all 95 entries render into the prerendered HTML (page: ~8 KB shell → 182 KB content; crawlers/screen readers/no-script now see the full bibliography). `scripts/prerender.mjs` copies the file to `dist/data/` so the machine-readable `/data/bibliography.json` endpoint stays live. `tsconfig.app.json` +resolveJsonModule; README contributor instructions updated. **Standing note: the `vanvlaenderen-site-update` skill still says bibliography additions go in `public/data/` — update to `src/data/`.**

**Packet C — Four Functions table resync + Victor date basis (STAGED on mvf)**
- `surname_origins.tier1_r4_*` (Loys le Hase): grant corrected to Wessegem/Ursel/Oostburg 9 April 1372 (Moelaert 1973; component dates cell 1370→1372); descendants updated from "one son Renaud (Feb 1397 only)" to the four documented natural children (Hector, Regnault, Kathelijne, Joanna) per the Loys dossier.
- `surname_origins.tier1_r5_*` (Robrecht): "None. De Wrée … sans generation" replaced with the reconciled reading — no legitimate issue (De Wrée; Anastasie's ex Roberto verò nullos) vs three natural sons with dossier tiers (Jean Directly Attested; Caspar hypothesis; Karel Strongly Corroborated). Resolves the review's "critical contradiction" #1 without silently choosing a side.
- `surname_origins.tier1_r6_*` (Karel): "parentage unresolved" updated to the dossier's Strongly Corroborated filius M'her Robrecht reading; senior-Karel (Despars position 8) disambiguation noted. Structural option (move Karel to Tier 2) deferred to a later packet.
- Victor death date: `research.diagram_sr_text` "died before 1442" and `victor.territorial_p1` harmonized — last attested 1430 testament; 1431 = lordship-reversion year, explicitly labeled the basis of the working death date. Diagram label "(† 1431)" retained.
- Remaining external-review packets tracked in chat plan: D (calibration sweep: "rules out", "probable founding event", 551 figure, "documented founding line" → candidate, Vredius/Espinoy provenance), E (claim register, methodology conventions, R-FT1573 clarification, corrections log, boilerplate consolidation).

### June 25, 2026 — Records editor: paste-record pipeline (full multi-participant records) *(DB live; editor STAGED on mvf — pending gates + push approval)*
Built the paste-record pipeline per `docs/records-editor-paste-pipeline-spec-2026-06-25.md` so a full, multi-participant, transcribed record can be submitted from a single fenced-JSON paste field, routed through the `proposals` queue, and applied atomically.

Database (applied live to Supabase as tracked migration `paste_pipeline_apply_full_record`):
- Widened `proposals_kind_check` to add `full_record` and `progress_update`.
- `apply_full_record(payload jsonb)` — `SECURITY DEFINER`, asserts `app_role()='curator'`, re-checks the §2 min-bar, resolves municipality (by id/name, never auto-created), parish (by id/name, **creates** `PAR_` if missing), and sources (by `inventory_reference`/`short_citation`, **creates** `SRC_` if missing); mints the next `EVT_` and inserts `events` + `event_participants[]` + `event_sources[]` + optional `research_progress` set/coverage, all in one transaction. Returns the new event id + created-id flags. The existing `reject_living_event` trigger still guards births/marriages <100y.
- `apply_progress_update(payload jsonb)` — curator-applied tracker-only update (contributor-submitted `progress_update` proposals).
- Helpers `next_padded_id()` and `_apply_tracker()` (the latter `SECURITY INVOKER`, so a direct contributor call is RLS-blocked).
- Verified live (all rolled back, no test rows committed): Afsnee marriage round-trip = EVT-equivalent with 5 participants + 2 sources + tracker coverage merge; min-bar rejection; index-only lead (`needs_source=1`) accepted; parish auto-create; contributor `apply_full_record` raises.

Editor (`public/r/e1e3b0852b/index.html`, on mvf):
- New **Paste a full record (JSON)** card on the Add tab (legacy single-field quick form kept). Parse → min-bar re-validation → read-only preview (event line, participant table, source list, tracker change) → Submit.
- Curator Submit = insert-then-apply (`apply_full_record` RPC, proposal row marked `applied` for the audit trail); contributor Submit = `proposals` row (`kind='full_record'`). `applyProposal`/`reviewProp` extended for `full_record` + `progress_update`; legacy `new_record`/`correction` paths unchanged.
- **Single canonical source (changed this session):** the editor's source of truth is now the repo file `public/r/e1e3b0852b/index.html` alone. The former Drive master (`…/Database/supabase/records-editor.html`) and the one-way `scripts/update-records-editor.sh` sync were retired — the un-versioned master could silently revert repo edits, and its only real value (truncation/syntax verification) is already covered by `scripts/check-static-assets.mjs` in `pnpm build`/CI. Edit the repo file directly (host file tools are reliable; the sandbox shell mount is not).
- Skill §5 (`vanvlaenderen-record-collection`) update delivered as a whole-file drop-in replacement: `docs/vanvlaenderen-record-collection.SKILL.updated-2026-06-25.md` (replaces the entire SKILL.md — no surgical edits).

### June 23, 2026 — Records database portal published + torn-file mitigations + corpus integrity sweep
Published the auth-gated records editor on the site and hardened the pipeline against a recurring silent file-truncation problem.

Records portal:
- The Supabase records editor (`Database/supabase/records-editor.html` in the research tree) is now hosted as a static page at the unindexed path `/r/e1e3b0852b/` (`public/r/e1e3b0852b/index.html`), with a `noindex,nofollow` meta. Supabase Auth + RLS is the real access guard (no `anon` policy exists); the obscure URL is bonus only. Linked from a new **Database** tab on the private `/docs` page (commits `343d54f`, `f718da3`).
- `robots.txt` now disallows `/r/` **and** `/docs`. The shipped robots.txt is generated by `scripts/prerender.mjs writeRobots()`, which had been overwriting the `public/robots.txt` copy — so `/docs` had never actually been disallowed in production until now. Both are kept in sync.

Torn-file mitigations (root cause: the Cowork sandbox mount can serve stale/truncated reads of large files, which silently shipped a 446-of-739-line editor to production twice; `public/` assets aren't parsed by the bundler, so nothing caught it):
- `scripts/check-static-assets.mjs` — new build/CI guard (wired into `pnpm build`, also `pnpm check:assets`). Fails the build if any `public/**/*.html` has NUL bytes, is a full document missing `</html>`, has unbalanced `<script>` tags, or contains an inline script with a syntax error. Truncation now blocks the deploy instead of going live.
- `scripts/update-records-editor.sh` — host-side editor sync (copies from the Drive source on the local machine, never the sandbox; injects noindex; self-verifies). `.gitattributes` added to force LF on `*.sh`.
- `Workflow/integrity-sweep.mjs` (research tree) — on-demand corpus scan vs a baseline manifest; flags NUL-corrupted, zero-length, and significantly shrunken files. Run on the local machine, not in Cowork.

Corpus integrity finding: the first sweep flagged **9 zero-length `.md` files**, evidence of a ~May 26 sync incident that batch-zeroed files. 5 had intact canonical copies elsewhere (content safe) and their empty stubs were deleted. 4 have no copy and are pending Google Drive version-history recovery: `Research Reading List/terminolgy.md` (priority — important doc, being recovered), and three old 2026-05-26 handoffs (`2026-05-26.md`, `Workflow/drive-ui-sweep-2026-05-26-phase1.md`, `Workflow/handoff-for-new-chat-2026-05-26.md`) — opportunistic recovery only; likely headed for archive or deletion regardless.

### June 14, 2026 — Editorial wave: Research/Name Nevers reframing + historical cluster map *(STAGED on mvf — pending gates + push approval)*
Two packets. Packet A's text edits were prepared, stashed during a concurrent-thread git operation (`stash@{0}`), and restored; the map (Packet B) was reworked mid-stream to a fixed-base + transparent-overlay design (a separate thread's redesign, folded in here).

Packet A (Research-page text + bibliography):
- `src/i18n/locales/en.json` + `nl.json` — `research.*`: reframed the Guy of Richebourg / Louis de Nevers material from established to **Hypothesis** footing; moved the parentage chronology into footnote `notes_source_6_text` (Vandermaesen vs Despars conflict + the banneret-rank chronology argument); corrected "(d. 1322)" → Louis de Crécy d. 1346; re-mapped the surviving clusters to Meetjesland+Ghent / French Flanders (Cassel) / Brabant, Robrecht's Ypres line shown extinguished; finished four→five in the notes; glossed "toponymic"/"referent". NL strings are drafts → native Flemish review queue.
- `public/data/bibliography.json` — added `de-raadt-1898-sceaux-armories` and `vandermaesen-1999-droit-de-livree` (both `cited_via_intermediary`); bumped `lastUpdated`.

Packet B (cluster map — fixed base + transparent heat overlays):
- `src/components/TimelineClusterMap.tsx` — a fixed antique base map (`flandria-comitatus-1600.jpg`, loads once) with three stacked transparent heat overlays (`van-vlaenderen-heat-{pre1500,16thc,1600}.png`) that cross-fade on toggle; EN+NL captions, legend, Geneanet credit via the `clusterMap.*` i18n namespace. SSR-safe, renders directly (prerenders).
- `src/pages/ResearchPage.tsx` + `NamePage.tsx` — swapped the DB-driven Leaflet `ResearchMap` for `<TimelineClusterMap />`; the database map is framed as a future release.
- Assets: the base was re-delivered clean (the repo copy had arrived 45 bytes short, baking a ~28px gray tear into the earlier baked composites); the lightweight transparent overlays (~10–25 KB each) replace the ~240 KB baked composites, which are superseded.

### April 25, 2026 — DNA page citation cleanup: Larmuseau name removed, bibliography deep-link wired
Following the project's authorial policy that genealogical-genetics researchers are to be referenced via citation links rather than named in article prose, the two surviving "Larmuseau et al. (2013)" mentions on the DNA page have been removed and replaced with internal links to the bibliography. The cuckoldry paper (Proc. R. Soc. B 280: 20132400, doi:10.1098/rspb.2013.2400) was previously cited inline on the DNA page but absent from the bibliography itself; it has now been added to Section D as `larmuseau-2013-cuckoldry` (status `consulted`, full DOI URL).

File-level changes:
- `public/data/bibliography.json` — new entry `larmuseau-2013-cuckoldry` in Section D (Genetic Genealogy and Y-DNA Methodology), placed alongside the existing `larmuseau-2013-flanders` entry.
- `src/pages/BibliographyPage.tsx` — added hash-anchor scroll-into-view useEffect using `useLocation`, gated on `data` availability via `requestAnimationFrame`. Required because react-router-dom v6 `nav()` does not auto-scroll to hash, and a direct page load with hash fires before the async bibliography fetch completes. All `EntryCard` ids are now reachable via `/research/bibliography#<id>` deep-links.
- `src/pages/DnaPage.tsx` — replaced two external DOI `<a href>` blocks (testing predictions "Source:" line and notes section [3]) with `<button onClick={() => nav('/research/bibliography#larmuseau-2013-cuckoldry')}>` styled to match existing internal-nav patterns (matches `notes_source_2` button styling).
- `src/i18n/locales/en.json` — rewrote `dna.testing_p_mixed_source_text` and `dna.notes_source_3_text` to drop the "Larmuseau et al. (2013)," prefix; added new `dna.notes_source_3_linktext` ("Full citation in bibliography →") matching the established pattern of source 2 and source 4 linktexts.
- `src/i18n/locales/nl.json` — Dutch parity for the same three keys (`testing_p_mixed_source_text`, `notes_source_3_text`, new `notes_source_3_linktext` rendered as "Volledige citatie in bibliografie →").

The bibliography is now the single canonical surface for citation attribution. Reader experience: clicking the citation in either prose location lands on the highlighted entry in the bibliography, where the full author list, journal, DOI, and analytic note are visible in context.

### April 25, 2026 — Bibliography refresh + housekeeping pass
Added WFZ entry to bibliography Section C (`debrabandere-wfz-2009`, full PDF via naamkunde.net, status consulted). Refreshed GYSS. 1999 (`gysseling-debrabandere-1999-vier-ambachten`) note to incorporate the April 2026 search finding: zero Bucket 4 hits across V-section entries 407–408 and the broader 3,000+ mention corpus, supporting the conclusion that Van Vlaenderen is not an indigenous Zeeuws-Vlaanderen surname formation. Removed two stale backlog entries: the WFB2 "add entry" item (already shipped April 11) and the "OverviewDiagram still shows only two branches" item (Phase 1 diagrams overhaul shipped April 21, commit `27a5f70`). Added longer-term backlog item for the protected research-database query frontend, downstream of the DB SQL migration tracked in `lions-of-flanders-todo.md`. Two big structural questions (research-section IA consolidation; Louis II de Male dossier) remain tracked in `pass-2-site-corrections-backlog.md` rather than duplicated here. `bibliography.json` `lastUpdated` bumped to 2026-04-25.

### April 17–18, 2026 — Editorial calibration pass: Name/DNA/Research realignment + reliability badges + i18n cleanup
Six-commit block addressing internal editorial contradictions across the three top-level pages, closing Dutch translation gaps, migrating hardcoded English to i18n, adding structured citations, and making evidence-level classifications visible.

**Context.** The DNA page rewrite of April 17 morning (commit `6af1f7b`, previous entry) introduced a three-hypothesis frame that was immediately inconsistent with the Four Functions article's two-level position on toponymy (falsified at the cluster level, possible for individual outlier bearers). This pass realigned the DNA page and, in the process, caught and fixed comparable calibration drift on Name and Research.

**Name page — alignment with Four-Bucket analysis (commit `402bb69`):**
- Rewrote `history_p2` to remove self-contradicting hedge ("conventional toponymic explanation remains entirely plausible") that undercut the Four-Bucket section following it. New paragraph previews the four-function framework and states the actual finding: small number of documented family lines clustering inside Flanders in the 1384 crystallization generation.
- Added Notes and Sources section with 4 citations (Vredius/FMG MedLands, Four Functions cross-link, Debrabandere WFB2, Geneanet).
- Removed 3 orphaned `intro_*` keys from pre-2026 two-branch structure.

**DNA page Pass 1 — two-hypothesis reframe (commit `f45aec9`):**
- Collapsed three hypotheses to two (shared comital origin vs. multiple unrelated comital origins). Both within the comital framework; both genuinely discriminable by Y-DNA.
- Added toponymy acknowledgment paragraph aligning with Four Functions' two-level position — ruled out at cluster level, possible for individual outliers.
- Corrected Hypothesis 1 attribution factual error: Louis de Male's three natural sons (Victor / Jan sans terre / Louis Friese), not Victor's three sons.
- Added inline dossier links on first mention of Victor, Jan sans terre, Louis Friese.
- Added Notes and Sources section (Vredius/FMG, Four Functions cross-link, Larmuseau 2013 DOI, FTDNA Discover R-FT1573 link).
- Replaced naked CTA button with proper `ctaBox` + `.joinTeamBtn` pattern matching Name page. Added CTA copy committing to 48-hour response.

**DNA page Pass 2 — recruitment restructure (commit `9d37ff1`):**
- New "How to Participate" block after "Where the Research Stands" — gold-left-border callout with three numbered steps (Y-DNA test selection, group project, get in touch) and centered "Join the Team" button. Readers can act within the first screen.
- Converted static DNA type cards (Y-DNA / Autosomal / mtDNA) to interactive accordions with "Already tested?" / "Considering testing?" follow-up content. ARIA-compliant keyboard-operable toggles.
- Removed the four-card services grid entirely. Ancestry/23andMe/MyHeritage no longer featured as peer recommendations; FTDNA is sole recommendation, in the Participate block.
- Autosomal-tester fallback preserved as "Already tested elsewhere?" note in Participate block — reaches broader audience without diluting primary ask.

**Research page Pass 4 — full i18n migration + accessibility framing (commit `841ef14`):**
- Option A migration: every hardcoded English body string moved to `research.*` i18n keys. Closed the Dutch-visitor regression where the core three-lines thesis was rendering in English despite NL toggle.
- New plain-English TL;DR callout ("Why the Name Matters") between dossier header and Three Lines section. Calibrated to stay in two-level toponymy position; does not overclaim.
- Reframed Four Functions teaser from "The Analytical Framework" (methodological warning) to "The Toponymic Paradox" (offensive argument). Body leads with geographic paradox: a surname meaning "from Flanders" used most heavily inside Flanders.
- Added Notes and Sources section with 4 citations (Vredius, FMG, Four Functions, Nieus 2021). Nieus citation uses measured language ("provides historical depth") rather than "proves" — 12th-century sigillography is context for 14th-century naming, not proof.
- Updated `conclusion_p1` to reflect current three-line research priorities: Adam–Meetjesland 1447–1568 documentary gap, Y-DNA cross-cluster comparison, specific archival targets (RAG Staten van Goed Ambacht Assenede I & II, Landboek/Leenhof, ADN Cassel castellany).
- Removed 12 stale keys from pre-April-15 two-branch structure (`intro_*`, `branches_*`, `branch_victor_*`, `branch_louis_*`, `significance_*`). en/nl parity maintained at 83 keys.

**Site-wide i18n cleanup (commit `8db0c7f`):**
- Deleted 183 orphaned i18n keys across 10 namespaces that weren't referenced anywhere in source: `about.*` (11), `common.*` (6), `contact.*` (14), `dna.*` (31 including the 9 services_* keys Pass 2 deferred), `footer.*` (3), `history.*` (11, entire namespace from deleted /history route), `home.*` (5), `louis_friese.*` (11), `mill.*` (18), `name.*` (33), `nav.*` (1 — nav.lineage), `victor.*` (39).
- Added 30 Dutch About translations. Previously EN-only; Dutch visitors were getting English fallback for hero lead, scope description, sources, methodology note, project origins, goals, collaboration categories, closing, contact CTA.
- Final state: 483 keys in each locale, zero orphans, zero parity gaps, zero single-locale stragglers.
- Net file size: en.json 89KB → 68KB (−21KB dead weight); nl.json 91KB → 71KB (net of 30 new translations).
- Bundle reduction: main JS chunk went from ~1054KB to ~1014KB after cleanup.

**Reliability badges on top-level pages (commit `aff53d0`):**
- 6 inline evidence-level badges added across Name / DNA / Research using the established dossier-page pattern (`researchStyles.evidenceLevel` + color-coded `.levelX` classes). No new CSS; reuses existing styling.
- **Research page (1):** "Three Lines, Three Clusters" → Strongly Corroborated.
- **Name page (2):** "History of a Surname" → Strongly Corroborated; "What 'Van Vlaenderen' Was Doing in Medieval Documents" → Directly Attested.
- **DNA page (3):** "Where the Research Stands" → Directly Attested; "What We're Testing" → Hypothesis; "The Zeeland Thread" → Hypothesis.
- No new i18n keys — reuses existing `research.method_*_label` keys with EN/NL parity.
- Sections deliberately NOT badged: hero sections (editorial voice), pull quotes (rhetorical), TL;DR and Toponymic Paradox teasers (accessibility framing), navigation/directory sections, conclusions, CTAs, educational content, privacy sections, Notes and Sources. Placement is strategic, not decorative.

**Review handling pattern.** Two AI-generated reviews (Principal PM style, Larmuseau-style) during the session pushed for rhetorical escalation — "impossible" framings on toponymy, "proves" language on Nieus, "claim to the comital bloodline" rhetoric. Specific suggestions walked back the calibration deliberately established in Name page pass. Pattern: accept structural/visual suggestions (TL;DR callout, heat-map surfacing, accessibility framing), reject overclaim-y copy. Calibrated alternatives retained for TL;DR and Toponymic Paradox framing.

**Deferred to backlog:**
- OverviewDiagram SVG three-branch update (component still shows two branches).
- Four Functions article clarity pass (article is sound but long; ~20% tightening possible).
- Dutch native-speaker review, now with expanded scope covering new About-page and Research-page translations.
- ResearchMap update to show Louis de Male + three sons (Drincham pin missing entirely).
- Last-updated tags on dossier pages (design decision needed: manual i18n dates vs git-derived).
- Geneanet heat maps integration on DNA page.

### April 17, 2026 — DNA page rewrite: three-hypothesis frame + privacy section
Substantial content update to `/dna` to convert the page from general invitation to structured research protocol. Work done in response to editorial feedback (Larmuseau-style critique) and discussion of the Four Functions, Three Clusters framework.

**Content changes (`DnaPage.tsx`, `en.json`, `nl.json`):**
- New section *Where the Research Stands* — discloses the reference Big Y-700 result on haplogroup **R-FT1573**, attributes it to the documented American line descending from Charles Louis Van Vlaenderen of Bassevelde (emigrated 1875), notes collateral modern distribution across Germany / Netherlands / England / USA, and frames the singleton-tester problem as the recruitment motivation.
- New section *What We're Testing* — reframed from initial two-hypothesis draft to **three-hypothesis Option C**: (1) shared origin with regional substructure [comital hypothesis, names Victor in testable-not-explanatory frame]; (2) multiple unrelated origins via comital-association mechanism; (3) independent toponymic adoption [explicitly weakened by Four Functions analysis]. Each hypothesis paired with its predicted Y-DNA pattern. Cross-link to `/name/surname-origins` inline in hypothesis 3.
- NPE framing retained with live citation to Larmuseau et al. (2013), *Proc. Roy. Soc. B* 280: 20132400 (DOI link, styled as small italic source line under the mixed-patterns paragraph).
- Rewritten *Van Vlaenderen Genetic Genealogy Project* section — concrete sample-size targets (5–10 unrelated lines for first answer, 15–20 for regional substructure), recommends joining existing Flanders-Flemish and Benelux FTDNA projects, states intent to form dedicated Van Vlaenderen subgroup once numbers support it.
- New *About Participation and Privacy* section — explicit statements on Y-DNA non-coding content (no medical info), data control, no individual publication without consent, aggregate-findings-only disclosure policy.
- Meta description updated — removed over-confident "case for a single common ancestor" framing in favor of hypothesis-testing language.

**i18n work:**
- Backfilled 33 Dutch translations for keys the component was already using but that were missing from `nl.json` (silent English fallback bug — Dutch DNA page was broken below the hero).
- Added Dutch equivalents for all new English keys.
- en/nl `dna.*` now at full key parity (97 keys each).
- 22 legacy orphaned `dna.*` keys flagged for future cleanup (see Content Improvements backlog).

**Technical:**
- Added `useNavigate` hook to `DnaPage.tsx` for inline cross-link to Surname Origins page.
- Styling reuses the established gold-underlined button pattern from `DrinchamDossierPage.tsx`.
- No new dependencies, no routing changes, no structural impact on build or prerender.

**Deferred to backlog:**
- Geneanet heat maps (1600–present + 1900–present) integration into the page.
- Three-hypothesis prediction visualization (SVG tree topologies).
- Full site Dutch language review.
- Orphaned `dna.*` key cleanup.

### April 13, 2026 — Citation corrections + selective scholarly tone pass

**Factual corrections (taken without reservation)**
- Victor dossier ref 6 (*Corvers en zeeschuimers*): author corrected from "Brouwers, D.D." → **Tailler, Margaux**; year 2012 → **2011**; supervisor Jan Dumolyn added. Same fix applied to VictorLineagePage.
- bibliography.json *Cronike van Vlaenderen*: unverified Gallica ARK replaced with confirmed Utrecht University Repository link
- NamePage spelling variants: removed duplicate "Van Vlaenderen" entry
- Note: Buylaert [881, 882] = *Repertorium van de Vlaamse adel* (2011) confirmed via FMG citation pattern — citation stands as-is

**Legitimate softening (taken)**
- Homepage hypothesis two: "circumstantial evidence" → "merits further investigation, but at present remains a hypothesis requiring additional archival and genetic evidence"
- Homepage hypothesis one: "single common ancestor" → adds "within the early modern documentary period" to prevent overreach
- DNA page: "almost certainly share a common paternal ancestor" → "closely matching Y-DNA results — particularly at the terminal SNP level — may share a relatively recent common paternal ancestor" (scientific accuracy)
- DNA page: "compelling possibility" → "raises the possibility" ("compelling" implies conclusion)
- Victor lineage gap: internal date inconsistency fixed — "Adam, fl. 1441" → "last confirmed 1447"
- Victor lineage gap: "strongest available non-genealogical evidence" → "one of the strongest available forms of indirect evidence"
- NamePage Wessegem village note: "Baptism and marriage registers" → "Medieval territorial and seigneurial references associated with the Ursel area" (historically imprecise as stated)
- NamePage Cronike caption: "Direct documentary evidence of the Van Vlaenderen name" → reframed as contextual/political evidence (the shields refer to counts, not the surname family — caption was genuinely misleading)

**Deliberately preserved (feedback declined)**
- ResearchPage crystallisation paragraph: "not a geographic descriptor, but a marker of comital illegitimate descent" — this is the site's central interpretive argument; over-hedging flattens it
- Victor pull quote: "most direct documented link" — pull quotes are assertive by convention
- Name page four-bucket conclusion: "often the progenitor" and "it makes its persistence meaningful" — these are in an explicitly argumentative section
- DNA pull quote: "Genealogy without genetics is like a map without a compass" — public-facing page, acceptable
- Mill page: "craft passed from father to son" — evocative and not inaccurate

### April 12, 2026 — Citation audit across all three dossiers + bibliography

**Vredius edition correction (critical)**
- Identified that Vredius published two separate works: *Sigilla Comitum Flandriae* (1639, seals study) and *Genealogia Comitum Flandriae, Pars secunda* (1643, genealogical proofs). Bastard-line charter evidence is in the 1643 *Genealogia*, not the 1639 *Sigilla*
- Victor dossier ref 1: corrected title from *Sigilla* → *Genealogia, Pars secunda* (1643); was already citing correct year
- Praet dossier: corrected both inline text and ref 3 from *Sigilla* (1639) → *Genealogia* (1643); added two-work clarification note
- bibliography.json Vredius entry: corrected title, publisher, URL → Royal Collection Trust catalogue (1639 Internet Archive link removed — pointed to wrong work)

**Archival signatures added**
- bibliography.json Brugse Vrije entry: full signature added — RAB, Brugse Vrije, TBO 184, nrs. 21300 (1547) and 21302 (1549), case ref 2026/0451
- Victor dossier ref 1: RAG research lead note added — *Curiae partitionum Gandensium* may correspond to RAG Jaarregisters van de Keure or Staten van Goed series

**Additional fixes**
- Praet dossier ref 4: Espinoy Gallica link added (ark:/12148/bpt6k1180858, BnF shelfmark M-1432)
- Praet lineage dossier ref 5: Nederland's Adelsboek — Scribd replaced with Internet Archive link
- Praet lineage dossier ref 6: Buylaert — proper citation added (*Repertorium van de Vlaamse adel*, Academia Press, 2011 + *Eeuwen van ambitie*, 2010; UGent library link)
- Victor dossier ref 4 + Praet lineage ref 2: Bethune *Epitaphes* flagged as print only, held at KBR Brussels and Ghent University Library
- Victor dossier ref 6: *Corvers en zeeschuimers* given full author attribution (Brouwers, D.D., UGent thesis 2012)
- bibliography.json *Cronike van Vlaenderen*: corrected to 1531 Vorsterman *Excellente Cronike van Vlaenderen* with proper Gallica ARK
-
- ### April 12, 2026 — Build fix, new pages live, branch cleanup, gap dossier, docs page

**Bug fix — root cause of build failures**
- JSON-LD schema curly braces inside TSX template literals were breaking Vite compilation
- Fix: wrapped all JSON-LD blocks in `dangerouslySetInnerHTML` (`a27ed3b`)
- Secondary issues resolved in same pass: `MethodologyPage.tsx` had never been committed; `App.tsx` was missing routes for `/research/bibliography` and `/research/methodology`; prerender template corruption bug fixed

**New pages now live**
- `/research/bibliography` — 22 annotated entries, colour-coded badges, access links; `public/data/bibliography.json` is now the source of truth for bibliography entries
- `/research/methodology` — transcription/translation methodology + curated reading list; nav link live from `/research`
- `/research/gap-dossier` — gap dossier: two upper anchors (Victor's line, Praet line), 1517 Knesselare charter, TBO 184 records, three working hypotheses (A/B/C), Y-DNA handoff to DNA page; Gemini scribal language note added to Hypothesis B
- `/docs` — private working documents page (not indexed, not in sitemap, blocked in robots.txt); three tabs: Research Notes, Website Backlog, Belgium Research Plan (PII-curated); uses react-markdown + remark-gfm; bare app shell served (SSR skipped)

**Cross-linking complete** (per docs spec)
- Reference cards on Research overview link to Bibliography, Methodology, and Gap Dossier
- Full Bibliography linked from all three dossiers
- Methodology & Sources linked from About page

**Schema**
- `ScholarlyArticle` + `BreadcrumbList` JSON-LD live on VictorDossierPage, PraetDossierPage, PraetLineageDossierPage, GapDossierPage

**Accessibility**
- `.sr-only` diagram summaries live on VictorDiagram, PraetDiagram, OverviewDiagram

**Branch cleanup**
- `dist/` removed from main branch tracking
- `mvf-v2` deleted (remote + local)
- `mvf` reset to match `main` exactly

**Bug fix — Research page navigation**
- `useNav.ts` was missing `methodology`, `bibliography`, and `gap-dossier` from `ResearchSubpage` type and `RESEARCH_PATHS` map

**Dependencies added**
- `react-markdown` ^10.1.0
- `remark-gfm` ^4.0.1
- `src/vite-env.d.ts` added to declare `?raw` imports



**Bug fix — root cause of build failures**
- JSON-LD schema curly braces inside TSX template literals were breaking Vite compilation
- Fix: wrapped all JSON-LD blocks in `dangerouslySetInnerHTML` (`a27ed3b`)
- Secondary issues resolved in same pass: `MethodologyPage.tsx` had never been committed; `App.tsx` was missing routes for `/research/bibliography` and `/research/methodology`; prerender template corruption bug fixed

**New pages now live**
- `/research/bibliography` — 22 annotated entries, colour-coded badges, access links; `public/data/bibliography.json` is now the source of truth for bibliography entries
- `/research/methodology` — transcription/translation methodology + curated reading list; nav link live from `/research`

**Cross-linking complete** (per docs spec)
- Reference cards on Research overview link to Bibliography
- Full Bibliography linked from all three dossiers
- Methodology & Sources linked from About page

**Schema**
- `ScholarlyArticle` + `BreadcrumbList` JSON-LD live on VictorDossierPage, PraetDossierPage, PraetLineageDossierPage

**Accessibility**
- `.sr-only` diagram summaries live on VictorDiagram, PraetDiagram, OverviewDiagram

**Branch cleanup**
- `dist/` removed from main branch tracking
- `mvf-v2` deleted (remote + local)
- `mvf` reset to match `main` exactly

**Bug fix — Research page navigation**
- `useNav.ts` was missing `methodology` and `bibliography` from `ResearchSubpage` type and `RESEARCH_PATHS` map
- Links on Research page were falling back to `/research` instead of navigating to new pages

### April 11, 2026 — Major rearchitecture + content sprint

**Architecture**
- Replaced hash-based routing with React Router v7 (BrowserRouter + Routes)
- 15 routes now have proper URL paths: `/`, `/mill`, `/name`, `/dna`, `/research` + 6 sub-routes, `/lineage`, `/about`, `/contact`
- Added SSG prerender pipeline: each route bakes to `dist/<route>/index.html` with real HTML content at build time
- Eliminated Manus deployment dependency — deploy pipeline is self-contained GitHub Actions on `main` branch
- Created `useNav` hook replacing all `onNavigate`/`onNav` callback props across every page component
- Nav.tsx now self-manages active state from `useLocation`

**SEO**
- Per-page title, description, canonical URL, and Open Graph tags on all 15 routes (via `pageMeta.ts` registry)
- `sitemap.xml` auto-generated by prerender script with priority/changefreq per route
- `robots.txt` with explicit `Allow` directives for GPTBot and Claude-Web
- `index.html` upgraded with full OG, Twitter Card, and Schema.org WebSite structured data
- SSR guards: FamilyTreeCanvas returns null in Node; ResearchMap (Leaflet) lazy-loaded

**Content — Handoff edits (VVL_Manus_Handoff.docx)**
- Edit 1-A: Replaced unsupported Praet cadet claim in Research Overview card
- Edit 1-B: Added crystallisation insight paragraph to Research Overview (surname emerges at dynastic extinction point, 1384)
- Edit 2-A: Replaced "Survival of Surname" section in Louis Friese pages with hedged open-question text (EN + NL)
- Edit 2-B: Removed Rootenberg/Swanepoel citation (no documented Van Vlaenderen connection)
- Edit 3-A: Not required — Joos framing already correctly hedged in current codebase

**New pages**
- `/research/methodology` — transcription and translation methodology (verbatim from VVL_Methodology_Manus.docx) + curated reading list with acquisition links (6 thematic groups)
- `/research/bibliography` — 22 annotated entries in two sections: Primary Sources & Finding Aids, Scholarly Literature. Colour-coded source type badges, access links throughout.

**Name page — four-bucket framework**
- Added analytical section "What Van Vlaenderen Was Doing in Medieval Documents" addressing the toponymic dismissal
- Four-bucket taxonomy: Governmental phrase / Feudal titulature / Official staff / Hereditary surname
- Explicitly covers French variants (de Flandre, de Flandres)
- Bucket 3→4 transition mechanism noted (office-holder's son inherits name, not office)
- Map caption clarification: map plots locations, not pre-classified surname attestations
- Bucket 4 row highlighted in gold with subtle box-shadow
- Bilingual EN + NL

---

### Pre-April 11, 2026 — Prior sessions (summary)

- React 19 + Vite + TypeScript scaffold built
- i18n infrastructure: react-i18next, EN/NL locale files, DeepL sync script
- All core page components: HomePage, MillPage, NamePage, DnaPage, ResearchPage, VictorLineagePage, LouisFrieseLineagePage, VictorDossierPage, PraetDossierPage, PraetLineageDossierPage, AboutPage, ContactPage, LineagePage
- FamilyTreeCanvas procedural background animation
- ResearchMap (Leaflet) interactive map
- VictorDiagram, PraetDiagram, OverviewDiagram SVG components
- Lineage page: 14 generations from Jeremiah (~1575) to present with TypeScript types and archive deep-links
- About page copy developed collaboratively
- Initial multilingual implementation

---
*See github.com/iamabotama/vanvlaenderen.org/commits/main for full commit history.*
