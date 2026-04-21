# Pass 2 Site Corrections Backlog

*Running list of site-side corrections identified during Pass 2 (Vredius direct-reading and narrative calibration work) plus the residue of Pass 3 (source visibility). Most items have been closed in shipping patches; the remaining open items are tracked below.*

**Status:** Pass 2 substantively closed; Pass 3 phases A/B/D shipped, Phase C deferred. Backlog now tracks residual items.
**Last updated:** 2026-04-21

---

## Correction 1 — "Johan I's Seven Documented Children" is wrong ✅ CLOSED

Closed by the expanded Correction 1 patch deployed 2026-04-20. Final surface of the fix touched: `PraetLineageDossierPage.tsx` (heading, children list, correction note, Lodewijk II section expansion, cadet connections, extinction prose), `LouisFrieseLineagePage.tsx` (sr-only, heading, intro, 7-row table rebuilt as 5-row, correction note, dossier card description), `GapDossierPage.tsx` (Praet line intro, Buylaert note), `src/components/Diagrams/PraetDiagram.tsx` (Johan I body, Jean/Josse node bodies, connections array: removed wrong `j1→jean` and `j1→josse` edges, added correct `l2→jean` and `l2→josse` edges, label updated), `src/i18n/locales/en.json` and `nl.json` (dossier_praet_lineage_desc). Also caught and fixed: "Jacomina de Wilde" → "Jacqueline de Wilde" for site convention, "Meßire" → "Messire" for public-site style.

Original analysis below, retained for reference:

**Source of finding:** Vredius Tabula XVI pp. 278–279 direct reading (April 2026). The 1442 Ghent partition names **three** minor children of Johan I: Lodewijk II, Lisbette (Isabella, who later married Waleran de Landas), and Landrada (the canoness). Two additional adult daughters can be inferred from the *sorores Ludovici Patris* structural grouping and the Gaillard attribution "fille de Meßire Iean de Praet & de la Woestine" for Ioanna-m-Pouckes: Ioanna (married Jean of Pouckes 1446) and Margareta (married Louis de Bailleul). Total: **five documented children, not seven.**

**Key correction:** Jean de Flandre d. 6 September 1523 (Heer van Onlede, Beveren) and Josse de Flandre d. after 1526 are **not** Johan I's children. The Beveren tomb explicitly identifies Jean's father as "Meßire **Loys** de Flandres" — Lodewijk II. Both Jean and Josse belong to Lodewijk II's generation, per Damhouder's six-child list on Vredius p. 278.

**Affected pages and lines:**

- `src/pages/PraetLineageDossierPage.tsx`:
  - Line 115 — heading "Johan I's Seven Documented Children" → "Johan I's Five Documented Children"
  - Line 117 — body prose currently lists (a) Lodewijk II, (b) Jean de Flandre d. 1523, (c) Josse de Flandre d. after 1526, (d) Jeanne, (e) Marguerite, (f) Isabelle, (g) Landrade. Remove (b) and (c); reorder remaining; move Jean and Josse to Lodewijk II's children section
  - Line 123–124 — "Josse de Flandre is a documented cadet branch of Johan I's line" → "cadet branch of Lodewijk II's line"
  - Line 175 — heading "Josse de Flandre (son of Johan I, d. after 1526)" → "Josse de Flandre (son of Lodewijk II, d. after 1526)"
  - Line 200 — "Josse de Flandre (son of Johan I) represents a documented cadet branch" → "son of Lodewijk II"

- `src/pages/LouisFrieseLineagePage.tsx`:
  - Line 76 (sr-only diagram caption) — "Johan I van Vlaenderen… had seven documented children: Jean de Flandre… Josse de Flandre… Lodewijk II… Jeanne… and three further daughters Marguerite, Isabelle, and Landrade" → rewrite to give Johan I five children (Lodewijk II, Isabella, Landrada, Jeanne, Marguerite) and add a separate clause on Lodewijk II having six documented children per Damhouder including Jean de Flandre d. 1523 and Josse de Flandre d. after 1526
  - Lines 104, 110, 116, 124 — table rows for Jean de Flandre, Josse de Flandre, Jeanne de Flandre, Louis de Bailleul-husband — review for parent-attribution errors
  - Line 209 — "Johan I's seven children" → "Johan I's five children"
  - Line 252 — Buylaert citation: verify wording is consistent with the corrected parentage attribution

- `src/i18n/locales/en.json` and `nl.json` — search for "seven children" or "zeven kinderen" in Praet-line contexts, correct to five

**Scope note:** Cascading renumbering required wherever the list "(a) Lodewijk II (b) Jean (c) Josse (d) Jeanne (e) Marguerite (f) Isabelle (g) Landrade" appears — after removing (b) and (c), the letters/numbers shift.

**Caveat to carry into corrections:** Buylaert 2011 verification (the handoff thread `docs/research-threads/post-1545-van-vlaenderen-praet.md` Priority 1) may further refine this — if Buylaert places Jean and Josse differently, we may need additional adjustment. Recommend: hold Correction 1 site patch until Buylaert verification is in hand, OR deploy with a clear "research in progress" note acknowledging that Buylaert may further refine.

---

## Correction 2 — "Francoise van Praet van Moerkerke" entry is in the wrong line

**Source of finding:** Wikipedia entry on Lodewijk van Praet van Moerkerken (1471–1537) <https://nl.wikipedia.org/wiki/Lodewijk_van_Praet_van_Moerkerken>. Francoise van Praet (c. 1505 – 6 October 1562, m. Wessel VI van den Boetzelaer 1519) is documented as daughter of Lodewijk van Praet van Moerkerken — who is from the **Netherlands-based Praet-van-Moerkerken line**, not the Flemish Van Vlaenderen-Praet line. The Van Vlaenderen-Praet line and the Praet-Moerkerken line are related via the Praet baronial family, but Francoise is not descended from Louis Friese → Johan I → Lodewijk II or any subsequent Van Vlaenderen generation.

**Affected pages:**

- `src/pages/PraetLineageDossierPage.tsx`:
  - Line 184 — "Nederland's Adelsboek (1908) records Wessel van Boetzelaer married c.1519 'Francina van Praet.' The Lauwens genealogical study (2010) records 'Francoise van Praet van Moerkerken… Her precise generation within the Praet-Moerkerke line requires further investigation." — this needs clearer framing: Francoise is in the Praet-Moerkerken line (Netherlands), not the Van Vlaenderen-Praet line (Flanders). Separate but related. Should be framed as a related-lines note, not as Van Vlaenderen-Praet descent

**Scope note:** Medium-priority. The current site framing is cautious ("requires further investigation"), but now that we have the identification it should be corrected.

---

## Correction 3 — Post-1545 generation is missing entirely

**Source of finding:** Huygens Vrouwenlexicon entry on Catharina van Boetzelaer. See handoff document `docs/research-threads/post-1545-van-vlaenderen-praet.md` for full detail.

**Current site framing** treats the legitimate Van Vlaenderen-Praet male line as extinct in 1545, via Jan II's childless death. This is what Vredius/Grimarez explicitly report. However, **post-Vredius evidence** establishes at least one more generation:

- Jacob van Vlaanderen, vrijheer van Praet, heer van Beveren en Onlede (m. 1552 Catharina van Boetzelaer, d. before 1566)
- A son, Lodewijk van Vlaanderen, minor in 1567, in exile from Flanders with his mother after February 1568

**Decision needed:** Whether to surface this on the live site now (based on the Huygens evidence alone) or to wait for Buylaert / Decavele verification before updating. The project lead (Michael) has indicated a preference for verification before site correction, so this is currently deferred pending the outcome of the handoff research thread.

**If surfaced after verification:** The `PraetLineageDossierPage` needs a new section covering the Jacob-Catharina-son-Lodewijk generation, with appropriate research-in-progress framing if the thread has not closed.

---

## Style Rule — Surname rendering (*Van* / *van* convention)

**Source of finding:** Discussion 20 April 2026 during Pass 2 narrative calibration. The V/v convention is inconsistent across different periods of record-keeping and across different bearers of the name; a site-wide rule was formalised to reconcile historical fidelity with respect for each individual's own recorded form.

**Rule: contextual historical fidelity — render each name as its own records render it.**

- **Medieval and early-modern figures (14th–16th century charters):** *lowercase* *van* following a given name or title. This matches what every primary-source charter we have transcribed actually shows (106 lowercase instances vs 0 uppercase in the Vredius record after a given name), and matches academic genealogy citation conventions (Buylaert, FMG, Valkeneers & Soen, Lauwens).
  - *Victor van Vlaenderen*, *Margareta van Vlaendren*, *M'her Robrecht van Vlaendren*, *Lodewijk II van Vlaenderen*, *Louis Friese van Vlaenderen*, *Jan sans terre van Vlaenderen*

- **18th-century parish-register figures and later, through the 1796 civil-register threshold:** follow the original source where known. Where the Napoleonic civil register or later Belgian records capitalise *Van*, preserve *Van*. Where an 18th-century priest wrote lowercase in his hand, preserve lowercase.

- **Modern and contemporary family members:** render as they themselves are/were legally recorded on civil documents.
  - *Michael Van Flandern*, *Tom Van Flandern*, *Robert Van Flandern*, *Charles Louis Van Vlaenderen* (19th-century Bassevelde-to-America line, pending verification of his actual civil-register form)

- **Surname as standalone noun, adjective, or plural:** *capital* *Van* regardless of period.
  - *the Van Vlaenderen project*, *Van Vlaenderen researchers*, *a Van Vlaenderen of Bassevelde*, *the Van Vlaenderens of the Meetjesland*

- **Sentence start:** always capital.

- **Latin charter contexts:** preserve the Latin form when quoting originals — *Victor de Flandria*, *Lodovicus Flandrensis* — and translate to the modern form in surrounding prose.

**Why this rule rather than a uniform one:**

- A uniform *Van* site-wide (modern Belgian civil-register style) would be incorrect for the medieval/early-modern figures, whose primary sources consistently use lowercase
- A uniform *van* site-wide would override the project lead's own legally recorded name, and would impose medieval Dutch convention on a 20th/21st-century American family name that was legally fixed with capital *V*

**Scope of changes needed in the existing site:**

- **No change required** for medieval dossier copy — the dossier pages already render medieval figures with lowercase *van*, which matches the rule
- **Audit needed** in the research-notes document `docs/primary-source-notes/vredius-1643-genealogia.md` — approximately a dozen places where authorial English prose writes "Van Vlaenderen" (capital V) for a specific medieval individual after their given name. These should be corrected to lowercase. Low priority; does not affect the live site
- **No change required** for standalone surname uses across the site — "the Van Vlaenderen surname," "Van Vlaenderen project," etc. already follow the rule
- **Future pages** covering the 19th-century emigration line or contemporary family members should use capital *Van* per the modern-records clause, once we've verified the exact civil-register form for Charles Louis and the generations between

**Scope note:** This rule should be honoured in all new site content from this point forward. It is formalised here so future contributors have a single place to reference the convention.

---

## Correction 4 — Lodewijk IV death-year consistency (1555 vs 1556) ✅ CLOSED

Closed in two shipping patches: the Correction 4 + SSR alignment patch (deployed 2026-04-20) addressed ten site locations, and the Correction 5 diagram-layout patch (deployed 2026-04-20, commit `52bdb18`) carried the `1555 → 1556` fix in the Lodewijk IV PraetDiagram card as part of the restructure. Verbatim primary-source quotations (notably the Aalter tomb inscription *"die starf 1555"* on PraetLineageDossier) preserved unchanged; a scholarly-note paragraph immediately below the tomb quote explains the 1555-vs-1556 discrepancy and cites Valkeneers & Soen 2015 plus the Flemish Easter-style year convention.

Collateral fix shipped with Correction 4: `src/pageMeta.ts` alignment with the Pass 2 Helmet metadata. Audit discovered that the Pass 2 metadata refresh had updated only per-page `<Helmet>` content but not the SSR source-of-truth in `pageMeta.ts`, meaning search crawlers and social-media card readers had been seeing the pre-Pass-2 metadata. All 7 affected pages now have aligned pageMeta.ts entries matching the Helmet strings. JSON-LD ScholarlyArticle blocks on 7+ pages also brought into alignment.

---

## Correction 5 — PraetDiagram layout (Jean and Josse visually in wrong generation) ✅ CLOSED

Closed by the Correction 5 diagram-layout patch, deployed 2026-04-20, commit `52bdb18`. Jean and Josse nodes moved from the Gen 3 sibling row to a new Gen 4 cadet row below Lodewijk II (new `CADET_ROW_Y = 510` constant); Jeanne and the Marguerite/Isabelle/Landrade card rebalanced to fill the Gen 3 row; Lodewijk III/IV/Jan II shifted down to make vertical room; viewBox height bumped 1000 → 1140; hedging notes ("diagram position shows him alongside...") removed from Jean and Josse card bodies now that the visual position is structurally correct; label reverted to clean "CHILDREN OF JOHAN I (SIBLINGS)" with new "CADET BRANCHES OF LODEWIJK II" label below. Also folded in Correction 4 for this file (Lodewijk IV d. 1555 → 1556 with Valkeneers & Soen citation).

---

## Instructions for closing this backlog

This backlog is now substantively closed for the Pass 2 corrections identified through the Vredius direct-reading exercise. Corrections 1, 4, and 5 have shipped; Corrections 2 and 3 are deferred pending external research inputs.

---

## Post-Pass-3 residual items

These surfaced during Pass 3 source-visibility deployment (phases A, B, and D shipped 2026-04-20; Phase C deferred) or were newly identified as collateral fixes needed after those deployments.

### Pass 3 Phase C — inline source links across dossiers

The bibliography-page anchor IDs needed for inline source links are now in place (Phase A shipped with stable IDs for every entry), so Phase C is unblocked and can start whenever. Scope: pepper the existing prose across dossier pages with `<a href="/research/bibliography#vredius-1643">Vredius (1643)</a>`-style links where the site currently cites a source in prose without a link. Largest-surface item on the remaining backlog; probably split into two or three smaller per-page-cluster patches for reviewable chunks. Not blocking anything.

### HomePage footer-strip harmonisation (the doubling fix)

**Source of finding:** Pass 3 Phase B Footer deployment, 2026-04-20. The new sitewide Footer component, when rendered on the HomePage, creates visual duplication with an existing footer-like element already in the home-page layout. Needs either (a) suppression of the HomePage's existing element when the new Footer is active, or (b) restyling one of them so they read as complementary rather than duplicative. Low priority but user-visible on the site's most-visited page — worth an early fix in the next patch cycle.

### Dutch review of the new license page copy

**Source of finding:** Pass 3 Phase D shipped 2026-04-20 with `/license` page copy in both English (en.json) and Dutch (nl.json). The English copy has been through project-lead review; the Dutch parallel has not. A Dutch-speaker review pass on the `footer` and `license` nl.json sections is appropriate before considering Phase D fully complete. Low urgency; no errors identified yet, but content-QA should close the loop.

### Research-section IA consolidation (the "one dossier per figure" question)

**Source of finding:** 2026-04-21, during the Phase 1 diagrams deploy. Project lead asked: *"why do we have multiple dossiers for any of these figures instead of 1 each that include their lineage?"*

The research section currently has an inconsistent pattern across the three principal founding figures:

- **Victor van Vlaenderen** — two pages: `VictorLineagePage` (`/research/victor`, hub + diagram + headline content) and `VictorDossierPage` (`/research/victor-dossier`, deeper archival treatment). No explicit "Victor Lineage Detail" page; the gen-by-gen information lives in scattered sections of the two.
- **Louis Friese / Praet line** — three pages: `LouisFrieseLineagePage` (`/research/louis-friese`, hub + diagram + headline content), `PraetDossierPage` (`/research/praet-dossier`, confusingly named — its content is entirely Louis Friese's personal biography, not the Praet lineage), and `PraetLineageDossierPage` (`/research/praet-lineage-dossier`, gen-by-gen table + generation notes + cadet connections + extinction). The current `PraetDossierPage` is effectively a "Louis Friese archival dossier" that duplicates material from `LouisFrieseLineagePage`.
- **Jan sans terre van Vlaenderen** — one page: `DrinchamDossierPage` (`/research/drincham-dossier`), covers identity + 1383 grant + four generations + descent all in one.

The Drincham page is the cleanest reader experience of the three. It names the principal figure in the page title and hero, puts his biographical identification up front, anchors the lineage diagram directly under that identification, and walks through the dynastic events and descendants in a single continuous document. A visiting peer learns everything the site has on the Drincham line without clicking through multiple pages that partially repeat each other.

Victor and Louis Friese/Praet should likely be restructured to match this pattern:

- **One page per principal figure**, named for the figure, containing: (1) hero + identity, (2) interactive lineage diagram, (3) dynastic/biographical narrative, (4) generation-by-generation detail where warranted, (5) archival dossier / evidence tables / bibliography references.
- Consolidate `PraetDossierPage` into `LouisFrieseLineagePage` (move Louis Friese's biographical content up into the hub, keep it all under the name "Louis Friese van Vlaenderen" which is who the page is actually about).
- Optionally absorb `PraetLineageDossierPage` into the same page as a lower section, OR keep it as a deliberate "deep-detail" link-off for readers who want the generation-by-generation table view.
- Audit the Victor line similarly: if `VictorDossierPage` duplicates material already present on `VictorLineagePage`, merge; if it carries genuinely distinct archival-dossier content (charter transcriptions, evidence tables), decide whether that belongs in the hub page or on a lower-detail sub-page.

**Caveats worth thinking about before execution:**

1. **Route redirects.** Collapsing `/research/praet-dossier` into `/research/louis-friese` means external links to the old URL will 404 unless a redirect (at the router level) or a content stub (a page that links to the new canonical) is shipped. Low-risk but needs doing.
2. **JSON-LD canonical attribution.** Each page currently ships its own `ScholarlyArticle` block with its own `headline`, `description`, `url`. Consolidation means fewer distinct ScholarlyArticle entries, which changes what Google Scholar and rich-results parsers see.
3. **Sitemap and Footer nav.** The Footer's bibliography link and the Sources nav tab are independent; they don't anchor to individual dossier pages. The Research overview page's card grid does link to specific dossiers — those cards will need updating.
4. **i18n key parity.** Moving content between pages often means moving `t()` keys between sections of en.json/nl.json. Parity must be preserved through the move.

**Scope:** medium-to-large. Probably a multi-patch consolidation rather than a single cleanup — likely (a) first merge `PraetDossierPage` into `LouisFrieseLineagePage`, (b) then decide about `PraetLineageDossierPage` retention, (c) then audit Victor for similar consolidation.

**Not blocking.** The site reads fine today. This is a quality-of-reading improvement, not a correctness fix.

### Louis II de Male dossier (new page)

**Source of finding:** 2026-04-21, same conversation. Louis II de Male (1330–1384), Count of Flanders, is the named common ancestor of all three surname-carrying lines (Victor, Louis Friese/Praet, Jan sans terre) and is referenced in passing prose across HomePage, NamePage, ResearchPage, VictorDossier, DrinchamDossier, GapDossier, LouisFrieseLineage, and the Overview and Praet and Drincham diagrams. He currently has no dedicated page.

A **Louis II de Male dossier** would:

- anchor the "bastard-line hypothesis" by naming its shared source
- consolidate the Vredius Tabula XVI Cohort 3 material currently scattered across three line-dossiers
- treat the natural-children cohort as a group (Ive de Luu's children, the daughter-of-Monsieur-de-Borre's children, the various mothers), which the site presently has to handle repetitively on each line page
- give the Research section its natural root node — readers currently work upward to Louis de Male from whichever specific line they landed on; a dedicated page would let them work downward from him as the branching point

**Scope decisions to make before building:**

- Is this a *biographical* dossier of Louis de Male himself (reign, marriage to Margaret of Brabant, conflict with Ghent, Nicopolis-grandchildren), or a *progenitor* dossier focused on his natural children and the surname-carrying lines that descend from them? The site's existing needs point more toward progenitor-scoped content; biographical depth can be left to Wikipedia / FMG references.
- Slot in the research-section IA: top of the card grid on the Research overview? Linked from the bastard-line reference in the Home page's two-mechanism hypothesis?
- Same five-section template as Drincham/Victor/Friese (identity + diagram + dynastic narrative + detail + references)? Or a different template reflecting the progenitor framing?

**Not blocking.** Best done after the IA consolidation above so the site has settled on its one-page-per-figure pattern before a new figure page is added.

---

## Deferred — pending external research inputs

- **Correction 2** (Françoise van Praet van Moerkerken reframe) — pending Buylaert 2011 verification
- **Correction 3** (post-1545 Praet generation page-level coverage) — pending Decavele 2004 + Buylaert 2011 scans from Pascal van Vlaenderen
- **V/v capital audit** on `docs/primary-source-notes/vredius-1643-genealogia.md` — low priority; doesn't affect the live site
