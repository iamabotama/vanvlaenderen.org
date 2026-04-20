# Pass 2 Site Corrections Backlog

*Running list of site-side corrections identified during Pass 2 (Vredius direct-reading and narrative calibration work). Accumulated here as they surface during the research-record work in `docs/primary-source-notes/vredius-1643-genealogia.md`, to be tackled as a single consolidated site-correction patch after the research record is complete.*

**Status:** Open, accumulating
**Last updated:** 2026-04-19

---

## Correction 1 — "Johan I's Seven Documented Children" is wrong

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

## Instructions for closing this backlog

When the Vredius research record is complete (all batches of `docs/primary-source-notes/vredius-1643-genealogia.md` filled in) and the above corrections are agreed to, draft a single consolidated site-correction patch covering all accumulated items. Validate JSX structure, JSON integrity, and i18n key parity for Dutch and English before submitting.
