# Lions of Flanders — Analysis Sessions Log
*Running record of AI-assisted analysis findings*
*Last updated: April 19, 2026*

This document records findings from AI-assisted analysis sessions — deduplication exercises, onomastic sweeps, database queries, and structured data analysis. Each entry records the input, method, findings, and research implications. This is a working log, not a publication record.

---

## Session 3 — April 19, 2026
### Vredius Direct-Reading Validation (Three-Phase)
**Input:** Two high-resolution PDFs of Vredius, *Genealogia Comitum Flandriae* — Pars Secunda (Bruges 1643). Vol 1+2 combined PDF (514 pp) and Vol 2 standalone PDF (516 pp). Also: Table XVI rasterization at 4240×6704 (vol 1 p. 134).
**Tool:** Claude Opus 4.7 (pdftoppm rasterization at 300 DPI; pdftotext for searching; direct page-by-page reading)
**Method:** Systematic validation of the pre-trip "supplement" document (which contained secondary transcriptions of Vredius material) against the actual 1643 print. Three phases: (1) Victor charter nucleus pp. 283-289; (2) Louis I Cressiacensis cohort pp. 267-275 and Louis II Maleani cohort pp. 275-289; (3) Vol 2 material including 1555 Lodewyc Aalter tomb and Jan van Ursele 1489 Mechelen charter.

#### Finding 1 — All five Victor charters confirmed verbatim
The 1420 marriage contract (Jeanne de Gavre via Claisone MS), the 1427 Ghent charter (Middle Dutch text, Alix van Boyeghem + Gertrud Liendekins + Margriete Haelshuuts), the 1430 testament (Robert of Elverdinghe + Karle as executors "beede sijn broeders"), the 1441 charter (Victor "wijlen" / deceased, 18 lb. gr. each son, 10 March 1441), and the 1446 Adam transaction (18 March 1446) are all present in Vredius and match the supplement's reading. Vredius's heading says "1426" for the 1427 charter due to Ghent civic year start; the charter's own Dutch conclusion gives 12 May 1427.

#### Finding 2 — Victor's lordship is "Orsele/Vrsele", not "Desele"
The supplement and FMG transcriptions render the 1441 charter's lordship as "Desele ende van Wesseghem." Direct reading of the Vredius print (p. 286) shows "Orsele ende van Wesseghem" — an alternative spelling of Ursele. The "Desele" reading is an OCR artifact: the Middle Dutch blackletter capital V/U is easily misread as D. All references in Vredius point to Ursel.

#### Finding 3 — Praet branch 16th-century dates corrected
Two significant date errors in the previous site content stood corrected against the Aalter tomb inscriptions quoted in Vredius pp. 277-279 and 387-388:
- Jossine van Praet (wife of Lodewijk IV) died **10 December 1546**, not 1535. Grimarez's "1555" for her death date appears to be a scribal error; the Middle Dutch tomb text is primary.
- Jan II van Vlaenderen (son of Lodewijk IV) died **10 December 1545** — exactly ten years before his father. The legitimate Praet male line was extinct a decade before the 1555 Lodewyc himself died.
- Lodewijk II (d. 1488) has two conflicting day-of-death readings in Vredius itself: the Aalter tomb says St. Bavo's day (1 October); de l'Espinoy says St. Bartholomew's day (24 August). The year is firm; the day is disputed.
- Lodewijk III (d. 1488 per Grimarez, 1490 per tomb) — roughly two-year discrepancy, possibly reflecting the Easter-style year-change convention.

#### Finding 4 — Three-tier Count Louis distinction
Vredius's Table XVI uses three distinct labels for three different Counts Louis:
- **"Nivernensis"** = Louis I Count of Nevers (d. 1322) — Victor's great-grandfather in the bastard line; NEVER Count of Flanders
- **"Cressiacensis"** = Louis of Crécy / Louis I of Flanders (d. 1346) — Victor's grandfather in the bastard line
- **"Maleanus"** = Louis of Male / Louis II of Flanders (d. 1384) — Victor's father

Victor's uncles in the bastard line (Guido, Baudouin, Robert-of-Ghent d. 1360, Tristram/Ruflard/Lancelot/Percevall/Guy knight roster, Maria, Catharina) are all attested under the "Nothi Ludovici Cressiacensis" header. Isabella of Somergem (d. 1365) is under "Notha Ludovici Comitis Nivernensis" — making her Victor's great-aunt, not aunt.

#### Finding 5 — Aalter as Praet burial anchor across three generations
The Aalter (Haltre/Altere) church was the Praet branch burial site across at least three generations: the 1488 Ludovicus of Praet and his wife Marie van Brugge; the 1504 Isabella of Burgundy (via her husband Lodewijk III); and the 1545/1546/1555 cohort of Jan II, Jossine van Praet, and Lodewijk IV. Aalter sits in the Meetjesland, roughly 12-15 km from Ursel/Wessegem — this reframes the Praet branch as a plausible geographic bridge candidate to the later Meetjesland Van Vlaenderen cluster (separate from the Victor-descent hypothesis).

#### Finding 6 — Jan van Ursele 1489 Mechelen appointment is not filiated
The 1489 Margaret of York charter appointing Jan van Ursele as Drossard of Mechelen is present in Vredius (Vol 2 pp. 382-383) with Maximilian/Philip's Middle Dutch confirmation. However, it appears in Tabula XIX (the ducal household table), NOT under any Louis-II-bastard header. Vredius does not link Jan van Ursele to any known Van Vlaendren bastard line. The supplement correctly treats him as a "possible" descendant via toponymic surname; the charter establishes only his appointment as a Burgundian-Habsburg official, not his filiation.

#### Finding 7 — 1469 vs 1409 date for Baudouin guardianship
The supplement cites "Regesta partitionum Gandensium anni 1409" for the guardianship of Baudouin's three minor sons Willem/Loyken/Ghielynken by Peter. The actual Vredius print (p. 272) reads **anno 1469**. Both dates are problematic: 1469 is implausible (Baudouin documented 1351; his minor sons could not be 118 years later); 1409 is a plausible emendation but not present in the print. Either Vredius made a printing error or a prior transcriber silently corrected it. **Defer treatment on the site** until the Ghent archival fonds can confirm the correct year.

**Article impact:**
- Pass 1 factual corrections applied to VictorDossierPage, PraetLineageDossierPage, LouisFrieseLineagePage, SurnameOriginsPage, and bibliography.json.
- Pass 2 (narrative reframing) pending: "Adam in Maldegem" framing needs retirement; Aalter/Praet as Meetjesland bridge candidate needs surfacing; Robert of Elverdinghe's natural sons (Jean legitimized 1448, Karle of Gruterssale d. 1491) need to be added as a fourth hypothesis on GapDossier.
- De Vos 2008 UGent thesis (rug01:001282057) independently places Adam in Ghent ecclesiastical court in 1447 (nullified marriage to Agnes sKokers, widow of Daniel van Maldeghem). "Elisabeth van Maldeghem" is a confabulation; Adam was in Ghent, not in Meetjesland.

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
