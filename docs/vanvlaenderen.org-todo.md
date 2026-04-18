# vanvlaenderen.org — Website To-Do & Changelog
*Last updated: April 17, 2026*
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
- [ ] `/research/bibliography` — add WFB2 entry now that CBG access is confirmed:
  - Author: Debrabandere, Frans
  - Full entry via: cbgfamilienamen.nl (search Van Vlaenderen, WFB2 documentation tab) — **Note: CBG version is based on author's post-2003 manuscript with improvements; more current than the printed edition**
  - Foreword/apparatus PDF: https://www.cbgfamilienamen.nl/nfb/aanhangsels/wfb-voorwerk.pdf
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
- [ ] **DNA page** — three-hypothesis prediction visualization. Small SVG figure showing the three predicted Y-DNA outcomes (shared deep haplogroup with regional sub-clusters; unrelated haplogroups; unrelated haplogroups + no comital ties). Needs to be legible at mobile widths, SSR-safe, with descriptive alt text. Follow-up after heat map integration.
- [ ] **Site-wide language pass** — full Dutch review by a Flemish native speaker (Connie, Pieter, or Rik). Particular attention to new DNA-page technical terminology: *niet-paterniteitsgebeurtenissen*, *private varianten*, *niet-coderende regio's*, *haplogroep* usage. Also opportunity to audit older nl.json entries for drift.
- [ ] **i18n cleanup** — audit and remove unreferenced legacy `dna.*` keys (`intro_heading`, `what_heading`, `science_title`, `goals_title`, `participation_title`, `results_heading`, `cta_text`, `haplogroup_label`, `haplogroup_value`, `science_p1/p2`, `goal_1/2/3`, `participation_p1/p2`, `intro_body`, `what_body`, `privacy_body`, `results_body`, `cta`). Component now references 75 of 97 dna.* keys; 22 are orphaned from earlier page iterations.

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

---

## 📋 CHANGELOG

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
