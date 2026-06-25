# Phase 2 Packet 1 — Research page: Nevers + cluster text (EXECUTION HANDOFF)

**For:** a fresh thread that applies these i18n string edits, runs the gates, and pushes from Michael's machine.
**From:** the editorial-pass thread, 2026-06-13. Approved by Michael (cluster re-map, Hypothesis footing for pre-Maleani, terminology standard, footnote-the-chronology, gloss-the-jargon).
**Scope:** `src/i18n/locales/en.json` + `nl.json`, `research.*` keys only. No component changes (the map swap and the family on-ramp are separate packets).

## Hard gates (do not skip)

- **No push without Michael's explicit in-chat approval.** Land on `mvf` (or a `site-update-2026-06` branch), then mvf→main only on approval. Sandbox git is unreliable (CRLF phantom + index.lock) — do real git ops on Michael's machine; use `git diff --ignore-cr-at-eol` to see true diffs.
- **`pnpm check:i18n` must pass**, then `pnpm build` + `pnpm lint` green before any merge.
- On-page citations name **source documents**, never findings slugs. (The justifying finding goes in the commit body only.)
- EN + NL edited in the **same commit**; new/changed NL strings are drafts → flag for native Flemish review (standing queue item).

## Commit message

```
Research page: tier pre-Maleani Nevers material to Hypothesis; fix cluster map; terminology standard

- Reframe Guy of Richebourg / Louis de Nevers material from established to Hypothesis footing;
  move the parentage chronology to footnote [6]; fix the "(d. 1322)" error (Louis de Crécy d. 1346).
- Re-map the three surviving clusters to Meetjesland (Victor +Praet) / French Flanders (Drincham)
  / Brabant (Praet); present Robrecht's Ypres line as extinguished, not a surviving cluster.
- Finish the 4->5 lines migration in the notes; apply the title-vs-surname terminology standard;
  gloss "toponymic"/"referent" on first use.

Per findings-guy-richebourg-parentage-1331-chronology-2026-06-13,
findings-praet-vlaenderen-line-1591-terminus-2026-06-05, and docs/messaging-scaffold.md.
```

---

## The edits (EN authoritative; NL draft — verify with check:i18n)

### `research.hero_lead_p1` — gloss "toponymic" on first appearance
Find the opening sentence "…as a hereditary surname are not toponymic." and gloss it:
EN: "…as a hereditary surname are **not toponymic — that is, not simply a 'from Flanders' label of geographic origin.** They cluster within…"
NL: "…als erfelijke familienaam zijn **niet toponymisch — dat wil zeggen, niet louter een 'uit Vlaanderen'-etiket van geografische herkomst.** Zij clusteren binnen…"

### `research.tldr_body_p1`
**EN:** Encountered without context, &lt;em&gt;van Vlaenderen&lt;/em&gt; appears to mean simply &ldquo;from Flanders&rdquo; — a merely toponymic name (one built from a place-name), like &lt;em&gt;van Gent&lt;/em&gt; or &lt;em&gt;van Brugge&lt;/em&gt;. The documentary record tells a more specific story. Within the comital house of Flanders, &lt;em&gt;van Vlaenderen / de Flandres&lt;/em&gt; worked as a dynastic marker — a heritable house-name carried by acknowledged natural children, on the model of &lt;em&gt;de France&lt;/em&gt;, which identified the French king's bastard children. It is toponymic in &lt;em&gt;form&lt;/em&gt; — built from a region-name — but its &lt;em&gt;referent&lt;/em&gt; (what the name points to) was the house, not a place of origin. The clearest, best-documented expression of the pattern is the bastard cohort of Louis II de Male, set out below; the project's working hypothesis is that the convention reaches back earlier in the same dynasty, though those earlier attributions are debated and offered as hypotheses under test.

**NL (draft):** Wie zonder context met &lt;em&gt;van Vlaenderen&lt;/em&gt; in aanraking komt, denkt aan een eenvoudige plaatsaanduiding — &ldquo;uit Vlaanderen&rdquo; — een louter toponymische naam (gevormd uit een plaatsnaam), zoals &lt;em&gt;van Gent&lt;/em&gt; of &lt;em&gt;van Brugge&lt;/em&gt;. Het documentaire bestand vertelt een specifieker verhaal. Binnen het grafelijke huis van Vlaanderen werkte &lt;em&gt;van Vlaenderen / de Flandres&lt;/em&gt; als dynastiek merkteken — een erfelijke huisnaam gedragen door erkende natuurlijke kinderen, naar het model van &lt;em&gt;de France&lt;/em&gt;, dat de bastaardkinderen van de Franse koning aanduidde. De naam is toponymisch van &lt;em&gt;vorm&lt;/em&gt; — gevormd uit een streeknaam — maar de &lt;em&gt;referent&lt;/em&gt; (datgene waarnaar de naam verwijst) was het huis, niet een plaats van herkomst. De duidelijkste, best gedocumenteerde uitdrukking van dit patroon is het bastaardcohort van Lodewijk van Male, hieronder uiteengezet; de werkhypothese van het project is dat de conventie verder teruggaat in dezelfde dynastie, al zijn die vroegere toeschrijvingen betwist en worden ze als hypothesen ter toetsing aangeboden.

### `research.tldr_body_p2`
**EN:** The function intensifies sharply under Louis de Male, whose substantial bastard cohort produces most of the documentary record we have. After 1384, the Dampierre comital &lt;em&gt;title&lt;/em&gt; was extinguished — it passed out of the family to Burgundy through Margaret of Male — while the bastard descendants carried the surname forward. The 1522 epitaph of Joncheer Antheunis van Vlaenderen, gheseyt van Praet (Gailliard p. 260) shows a Praet-line individual still carrying both names a century and a half later. But the convention itself appears to predate the de Male cohort, and the families carrying it cluster inside the historic County rather than appearing as migrants from its borders. The argument is laid out below.

**NL (draft):** De functie intensifieert sterk onder Lodewijk van Male, wiens omvangrijke bastaardcohort het grootste deel van het documentaire bestand voortbrengt dat we hebben. Na 1384 was de Dampierre-grafelijke &lt;em&gt;titel&lt;/em&gt; uitgedoofd — hij ging via Margaretha van Male over naar Bourgondië, buiten de familie — terwijl de bastaardafstammelingen de familienaam voortdroegen. Het grafschrift uit 1522 voor Joncheer Antheunis van Vlaenderen, gheseyt van Praet (Gailliard p. 260) toont een individu uit de Praet-lijn dat anderhalve eeuw later beide namen nog droeg. Maar de conventie zelf lijkt ouder te zijn dan het cohort van Van Male, en de families die haar dragen clusteren binnen het historische graafschap in plaats van als migranten vanaf zijn grenzen te verschijnen. Het argument wordt hieronder uiteengezet.

### `research.four_lines_p1`
**EN:** Five of Louis de Male's natural sons founded surname-bearing lines: Lodewijk de Haze (Wessegem and Elverdinghe-Vlamertinghe, killed at Nicopolis 1396, line ending in the second generation), Victor (Wessegem and Ursel after 1398), Lodewijk de Fries (Praet and Woestine), Jan sans Terre (Drincham), and Robrecht (Elverdinghe and Vlamertinghe after 1396). All five used &lt;em&gt;van Vlaenderen&lt;/em&gt; — and the variants &lt;em&gt;van Vlaendren, de Flandre, de Flandres&lt;/em&gt; — as a hereditary surname. Four of the five lines carry forward beyond the second generation, and the surname surfaces in later records as three geographic clusters: the &lt;strong&gt;Meetjesland and Ghent hinterland&lt;/strong&gt; (Victor's line, with the Praet line also seated at Aalter), &lt;strong&gt;French Flanders around Cassel&lt;/strong&gt; (the Drincham line), and &lt;strong&gt;Brabant near Brussels&lt;/strong&gt; (the Praet line through its Brabantine marriages). Robrecht's line, traced through Caspar and Karel to Karel's daughter (c. 1491–1505), is documented but extinguished and does not appear as a later cluster; Lodewijk de Haze's line ended in the second generation.

**NL (draft):** Vijf van Lodewijk van Males natuurlijke zonen stichtten familienaam-dragende lijnen: Lodewijk de Haze (Wessegem en Elverdinghe-Vlamertinghe, gesneuveld bij Nicopolis 1396, lijn eindigend in de tweede generatie), Victor (Wessegem en Ursel na 1398), Lodewijk de Fries (Praet en Woestine), Jan sans Terre (Drincham), en Robrecht (Elverdinghe en Vlamertinghe na 1396). Alle vijf gebruikten &lt;em&gt;van Vlaenderen&lt;/em&gt; — en de varianten &lt;em&gt;van Vlaendren, de Flandre, de Flandres&lt;/em&gt; — als erfelijke familienaam. Vier van de vijf lijnen lopen voorbij de tweede generatie door, en de familienaam verschijnt in latere bronnen als drie geografische clusters: het &lt;strong&gt;Meetjesland en het Gentse ommeland&lt;/strong&gt; (de lijn van Victor, met de Praet-lijn eveneens gevestigd te Aalter), &lt;strong&gt;Frans-Vlaanderen rond Kassel&lt;/strong&gt; (de Drincham-lijn), en &lt;strong&gt;Brabant bij Brussel&lt;/strong&gt; (de Praet-lijn via haar Brabantse huwelijken). Robrechts lijn, getraceerd via Caspar en Karel tot Karels dochter (ca. 1491–1505), is gedocumenteerd maar uitgedoofd en verschijnt niet als een later cluster; de lijn van Lodewijk de Haze eindigde in de tweede generatie.

### `research.four_lines_p2`
**EN:** Beyond Louis de Male, the same hereditary pattern appears to reach earlier in the dynasty — a working hypothesis still under test, not a settled claim. Guy van Vlaenderen lord of Richebourg appears in the 1331 banneret list of Flanders, with his line traceable to 1503; his exact parentage within the comital house is debated [6]. A generation earlier still, Jan van Vlaenderen is named in 1304–1305 peace negotiations as paternal half-brother of Count Robrecht III de Béthune — a natural son of Guy de Dampierre — and Robrecht III's own natural daughter Elisabeth (also Isabella) van Lierde is acknowledged in a 1324 dowry act as &lt;em&gt;vrouwe van Zomergem&lt;/em&gt;, though styled &lt;em&gt;van Lierde&lt;/em&gt;, not &lt;em&gt;van Vlaenderen&lt;/em&gt;. The house-name also recurs across legitimate Dampierre cadet branches: the lords of Cassel from 1275, of Dendermonde from 1313, the counts of Namur from 1331. If these earlier attestations hold, the same heritable house-name runs across several generations and multiple descent lines within one comital house — the pattern a dynastic referent predicts and a place-of-origin label does not.

**NL (draft):** Voorbij Lodewijk van Male lijkt hetzelfde erfelijke patroon verder terug te reiken in de dynastie — een werkhypothese die nog wordt getoetst, geen vaststaande claim. Guy van Vlaenderen heer van Richebourg verschijnt in de bannerettenlijst van Vlaanderen van 1331, met zijn lijn traceerbaar tot 1503; zijn precieze afstamming binnen het grafelijke huis is betwist [6]. Nog een generatie eerder wordt Jan van Vlaenderen in vredesonderhandelingen van 1304–1305 genoemd als halfbroer langs vaderszijde van graaf Robrecht III van Béthune — een natuurlijke zoon van Guy van Dampierre — en Robrecht III's eigen natuurlijke dochter Elisabeth (ook Isabella) van Lierde wordt in een dotale akte van 1324 erkend als &lt;em&gt;vrouwe van Zomergem&lt;/em&gt;, hoewel gestyled als &lt;em&gt;van Lierde&lt;/em&gt;, niet &lt;em&gt;van Vlaenderen&lt;/em&gt;. De huisnaam herhaalt zich ook in wettige Dampierre-zijtakken: de heren van Kassel vanaf 1275, van Dendermonde vanaf 1313, de graven van Namen vanaf 1331. Als deze vroegere attestaties standhouden, loopt dezelfde erfelijke huisnaam over meerdere generaties en meerdere afstammingslijnen binnen één grafelijk huis — het patroon dat een dynastieke referent voorspelt en een plaats-van-herkomst-etiket niet.

### `research.notes_intro`
EN: change "the **three** documented bastard lines" → "the **five** documented bastard lines".
NL: change "de **drie** gedocumenteerde bastaardlijnen" → "de **vijf** gedocumenteerde bastaardlijnen".

### `research.notes_source_1_text`
EN: change "Primary-source attestation for the **four bastard lines (Victor, Jan sans terre, Louis Friese, Robrecht)**" → "Primary-source attestation for the **five bastard lines (Victor, Jan sans terre, Louis Friese, Robrecht, and Loys le Hase)**" (rest unchanged).
NL: "…voor de **vijf bastaardlijnen (Victor, Jan sans terre, Louis Friese, Robrecht, en Loys le Hase)**" (rest unchanged).

### `research.notes_source_6_text` — now the chronology footnote
**EN:** Guy van Vlaenderen lord of Richebourg is named in the 1331 banneret list of Flanders (F. Buylaert, &lt;em&gt;Repertorium van de Vlaamse adel&lt;/em&gt;, Ghent: Academia Press, 2011, p. 738, citing M. Vandermaesen, &ldquo;Le droit de livrée à la cour de Louis, comte de Flandre, en 1331,&rdquo; in &lt;em&gt;Secretum Scriptorum: Liber Alumnorum Walter Prevenier&lt;/em&gt;, Leuven: Garant, 1999, pp. 279–306). His parentage is unsettled: Vandermaesen and Vredius (&lt;em&gt;Genealogia Comitum Flandriae&lt;/em&gt;, Tabula XVI) group him among the natural sons of &ldquo;Louis de Nevers / de Crécy,&rdquo; while Despars's &lt;em&gt;Cronijcke&lt;/em&gt; (De Jonghe ed., Vol. II) makes him a bastard of Robert of Cassel (d. 1331). A man of banneret rank in 1331 cannot be a son of Louis I de Nevers de Crécy (b. c. 1304, d. 1346), so the chronology points to Robert III de Béthune's generation — the conflict reflects the long-standing ambiguity between the two men called &ldquo;Louis of Nevers.&rdquo; The line continues to Guy II and his daughter Margriete (leenhoudster at the Gentse Oudburg, 1503; Buylaert p. 739).

**NL (draft):** Guy van Vlaenderen heer van Richebourg wordt genoemd in de bannerettenlijst van Vlaanderen van 1331 (F. Buylaert, &lt;em&gt;Repertorium van de Vlaamse adel&lt;/em&gt;, Gent: Academia Press, 2011, p. 738, daarbij M. Vandermaesen citerend, &ldquo;Le droit de livrée à la cour de Louis, comte de Flandre, en 1331,&rdquo; in &lt;em&gt;Secretum Scriptorum: Liber Alumnorum Walter Prevenier&lt;/em&gt;, Leuven: Garant, 1999, pp. 279–306). Zijn afstamming is onzeker: Vandermaesen en Vredius (&lt;em&gt;Genealogia Comitum Flandriae&lt;/em&gt;, Tabula XVI) rekenen hem tot de natuurlijke zonen van &ldquo;Lodewijk van Nevers / de Crécy,&rdquo; terwijl Despars' &lt;em&gt;Cronijcke&lt;/em&gt; (ed. De Jonghe, dl. II) hem een bastaard van Robert van Kassel (gest. 1331) maakt. Een man van bannerettenrang in 1331 kan geen zoon zijn van Lodewijk I van Nevers de Crécy (geb. ca. 1304, gest. 1346), zodat de chronologie wijst op de generatie van Robrecht III van Béthune — het conflict weerspiegelt de oude ambiguïteit tussen de twee mannen die &ldquo;Lodewijk van Nevers&rdquo; heten. De lijn loopt door tot Guy II en zijn dochter Margriete (leenhoudster van de Gentse Oudburg, 1503; Buylaert p. 739).

---

## Notes for the executor

- **Canonical-name gate:** `four_lines_p1` keeps the gloss forms (Lodewijk de Haze, Lodewijk de Fries, Jan sans Terre) — it is on the check-i18n exemption list. `notes_source_1_text` is NOT exempt → use the canonical route forms (Loys le Hase, Jan sans terre, Louis Friese). Both EN and NL must use the same token per key, or `check:i18n` fails.
- **Bibliography:** add De Raadt 1898 and Vandermaesen 1999 to `public/data/bibliography.json` if not already present (separate small packet B-1/B-2 in the audit; can ride along here since notes_source_6 now cites Vandermaesen on the page).
- **Do not** touch the `ResearchMap` component or the cluster map image — that's Packet 2 (map → Geneanet-style 1600 snapshot), already drafted at `public/new_images/van-vlaenderen-clusters-1600.svg`.
- After build is green, present per-page redline diffs to Michael; push only on his explicit approval.
