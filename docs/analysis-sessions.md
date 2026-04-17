# Lions of Flanders — Analysis Sessions Log
*Running record of AI-assisted analysis findings*
*Last updated: April 16, 2026*

This document records findings from AI-assisted analysis sessions — deduplication exercises, onomastic sweeps, database queries, and structured data analysis. Each entry records the input, method, findings, and research implications. This is a working log, not a publication record.

---

## Session 2 — April 2026
### Geneanet Pre-1500 Deduplication
**Input:** Full Geneanet result set for Van Vlaenderen / variant forms, pre-1500 entries, pasted by Constance
**Tool:** ChatGPT (Constance)
**Method:** Systematic deduplication of user-contributed tree entries, grouping by cluster and confidence level

#### Finding 1 — The 551 Collapses to Five
The entire Volckerinckhove/Renescure cluster reduces to approximately **5 unique individuals** after deduplication:
- Catherine / Catharina van Vlaenderen (c.1405–1450/60) × Rémi Drieux
- Baudouin / Balduinus van Vlaenderen (c.1380–1440) — probable father
- Margaretha de Mols — wife of Baudouin
- Nicolas Feuts / van Huysen — second husband tradition (may be same person)

All remaining ~546 entries are copies of this small cluster replicated across noble genealogical trees. Confirms the methodological caveat in the Four Functions article: Geneanet counts are clustering signals, not population estimates.

**Article impact:** Incorporated into Four Functions v5 methodological caveat. Once Catherine's connection to the Drincham line is confirmed from a primary source, the caveat should be updated to cite this as a specific worked example.

#### Finding 2 — Van Staederen Aliasing: Warning Flag
Catherine appears in some trees as *Catherine van Staederen* and in others as *Catherine van Vlaenderen*. Staederen = Staden, near Ypres, West Flanders — 40–50km from Volckerinckhove/Cassel. These are almost certainly two different women:
- **Catherine van Vlaenderen**: Volckerinckhove/Cassel zone, probable Drincham bastard line connection
- **Catherine van Staederen**: Staden/Ypres zone, possible connection to Karel van Vlaenderen (Lord of Grutersale, Langemark) or Robert [Roeland] (Burgrave of Ypres) branches

**Status:** Unverified. If confirmed as a conflation, the Volckerinckhove cluster reduces from ~5 to ~3 unique individuals.
**Action:** Search West Flanders records (Ypres/Langemark area) for Catherine van Staederen independently.

#### Finding 3 — Louise van Vlaenderen-Drincham
Named individual surfaced in the Drincham/Cassel thread of results. Not found in de Wrée's documented Drincham line, though de Wrée notes unnamed daughters at Generation 2/3. Hyphenated form *van Vlaenderen-Drincham* is unusual and potentially significant if authentic.
**Status:** Unverified. Requires primary source.
**Action:** Check de Wrée Vol. 2 pp.281–283; check Archives Départementales du Nord (Lille).

#### Finding 4 — Arnoldus × De Jaeghere (HIGHEST PRIORITY)
Geneanet entry shows Arnoldus van Vlaenderen × Maria de Jaeghere, dated c.1490. Documented line has Arnoldus "Aert" × Maeyken De Yaeghere, married Waarschoot 1620, died Oostwinkel 1666. De Yaeghere and de Jaeghere are the same surname.

Three interpretations:
1. **Date error** — Geneanet user guessed c.1490 birth for the 1620 Arnoldus. Most common error type.
2. **Two generations** — genuine earlier Arnoldus × De Jaeghere c.1490, separate individual, potentially first named bridge candidate for the 1447–1568 gap (**highest consequence**).
3. **Impossible** — c.1490 as birth date for the 1620 Arnoldus would make him ~130 at marriage. Eliminated.

**Status:** Unverified. Interpretation 2 would place a named Van Vlaenderen individual in the Meetjesland c.1490 — right generation to be a son or grandson of Adam (last attested 1447).
**Action:** Search parish record database and Waarschoot/Oostwinkel/Meetjesland records for any Van Vlaenderen × De Jaeghere pairing before 1600.

**Grand total from deduplication:** ~23 high-confidence unique surname bearers (pre-1500) plus ~15–20 copied dynastic nobles = ~40 unique individuals from what Geneanet presents as 551+ entries.

---

## Session 1 — April 2026
### Gysseling Vier Ambachten Onomastic Sweep
**Input:** Gysseling & Debrabandere, *Persoonsnamen in de vier ambachten, 14e en 15e eeuw* (GYSS. 1999), KCTD 71 (1999), pp. 491–588
**Tool:** Direct index scan (Michael)
**Method:** Systematic scan of V-section entries (394–417, pages 565–569) and all *vlaen / flandr / flandria* occurrences in the document

#### Finding 5 — Zero Bucket 4 Hits in Zeeuws-Vlaanderen
The alphabetical sequence at the critical juncture:
```
407. Vlaminc → 408. Vlascopere, de → 409. Vliete, van den
```
No entry for *Vlaenderen, van* or any orthographic variant. The gap is structural, not a scanning artifact — if a hereditary surname bearer existed in the source material, Debrabandere would have lemmatized it here.

All *vlaen / flandr / flandria* occurrences in the document, by bucket:
| Page | Text | Bucket |
|------|------|--------|
| 492 | de Vier Ambachten geographic/institutional description | 1 |
| 492 | "baeliu in de Virambacht" (1292) | 1 |
| 494 | "Rijksvlaanderen" — imperial fief terminology | 2 |
| 495 | Abbreviation VA = Vier Ambachten (archive sigil) | 1 |
| 407 | Entry Vlaminc: 1319 Clais Vlamijnc, Bh. (RG) — ethnic nickname "Fleming" | 3/BN |
| 514 | "Fernandi comitis Flandrie et Hainonie" (1219) — Ferrand of Portugal, Count of Flanders | 2 |
| 515 | "dominus Sigerus de Gandavo … prefati scabini de Hassenede" (GA 42) — Van Gent entry, not Van Vlaenderen | 1 |

**Bucket 4 (hereditary surname) hits: zero.**

**Coverage:** This index covers every scabinus, scoutate, and maenre record that Gysseling extracted from the Sint-Baafsabdij, Sint-Pietersabdij, Rijke Gasthuis, Nieuwenbosse, Sint-Janskerk, and Karthuizers Gent fonds for the entire Zeeuws-Vlaanderen region, roughly 1240–1500. Together with the earlier Hulster Ambacht article (DEBR. 1999), this represents north of 3,000 individual mentions.

**Conclusion:** Van Vlaenderen is not an indigenous Zeeuws-Vlaanderen surname formation. It arrives into Bassevelde/Assenede from elsewhere — most likely via the Ghent hinterland, consistent with the 1568 Franciscus attestation in Ghent parish records. The Vier Ambachten records do not bridge the 1447–1568 gap; they rule out the gap being bridged here.

**Best remaining bridge candidates:** Staten van Goed RAG (Ambacht Assenede I & II) and the Landboek/Leenhof records — neither indexed by Gysseling for this onomasticon.

**Article impact:** Incorporated into Four Functions v5 article (Zeeland cluster observation, Tier 2 Lodewijc entry, bastard-line testing section, conclusions, research priorities). Also added to Victor dossier cross-link paragraph.

---

*Add new sessions above this line, most recent first.*
