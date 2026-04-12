# vanvlaenderen.org — Website To-Do & Changelog
*Last updated: April 11, 2026*
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

### Technical
- [ ] **Code splitting** — Vite build warns that the single JS bundle exceeds 500KB. Split at route level using `React.lazy()` per page component to reduce initial load. Low urgency but worth doing before the site grows further.
- [ ] **Schema.org markup** — add `ScholarlyArticle` or `ArchiveComponent` JSON-LD to research dossier pages. Currently only `WebSite` schema is on the homepage. Research pages deserve `Article` with `dateModified`, `author`, and `citation` properties.
- [ ] **French locale (fr)** — backlogged pending Lille/French Flanders research content. Add to i18n infrastructure when content is ready; no architectural change required.
- [ ] **`/research/methodology`** — Augustyn & Thoen (1987) entry notes the article is not widely available; if a digitised copy is located, add link.

### SEO / Crawlability
- [ ] Verify Gemini can now crawl research content — Gemini requested a reassessment once crawl blocks were removed and content was prerendered. Run a test crawl and check whether `/research/victor-dossier` content is visible.
- [ ] Submit sitemap.xml to Google Search Console: https://vanvlaenderen.org/sitemap.xml
- [ ] Submit sitemap.xml to Bing Webmaster Tools

---

## 🟢 BACKLOG — LONGER TERM

- [ ] **`/research/attestations`** — dedicated chronological attestation page: every known Van Vlaenderen record mapped with date, location, source, bucket classification, and link. Derived from the Citation Chain Status table in the research todo. Highly crawlable; strong SEO signal for scholarly searches.
- [ ] **Hidden text summaries for diagrams** — the family tree diagrams (VictorDiagram, PraetDiagram, OverviewDiagram) are SVG/canvas and opaque to crawlers. Add visually-hidden `<p>` summaries listing the key lineage data for each diagram.
- [ ] **Image alt text audit** — all manuscript and heraldic images should have specific descriptive alt text (e.g. "Heraldic shields from the Cronike Van Vlaenderen, 15th century manuscript, BnF" not "heraldic image").
- [ ] **`/research/zeeland`** — possible future page if Zeeland thread develops (Laureys Arentsz, Arent van Vlaenderen). Skeleton only until primary sources are in hand.
- [ ] **Constance's research** — Goal 2 thread (comital connection) may generate new dossier content once Rijksarchief Gent results are processed.

---

## 📋 CHANGELOG

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
