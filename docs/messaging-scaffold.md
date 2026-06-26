# Messaging Scaffold — vanvlaenderen.org front door (PROPOSED, pending Michael sign-off)

**Status:** Phase 0 deliverable of the 2026-06 editorial pass (`docs/editorial-pass-2026-06-handoff.md`). This is a *site-facing distillation* that **cites** the corpus findings; it does **not** redefine them. Every page audit and rewrite in Phases 1–3 measures against this document. Nothing here is to be asserted on the site until the page-level audit (Phase 1) and the one open finding flagged in §3 land.

**Authoring note.** Built from the findings index, ARCHITECTURE.md, the terminology-scaffold and west-flemish companion material, and the cohort / Nicopolis / Nevers findings (read 2026-06-13). Internal traceability cites findings slugs; per ARCHITECTURE §3.2 those slugs are for build plans and commit messages only and **never** render on the page (the page cites the underlying source documents).

---

## 0. The spine (state it once, canonically)

> **The comital TITLE was extinguished; the SURNAME outlived it.**

This is the single organizing thesis of the front door. It is both emotionally compelling (for family) and analytically sharp (for scholars), and it turns on a distinction critics routinely blur — so the site must keep title and surname rigorously apart (see the terminology standard below):

- The **comital title** was extinguished: no legitimate male heir to Louis II de Male, so the county passed to Burgundy through Margaret of Male (married Philip the Bold 1369; Louis II d. 1384). The *title* left the family.
- The **titled van Vlaenderen–Praet line** lost its title too: its last recorded male, Lodewijk V, died sonless 31 October 1591, after which the *lordship* descended maternally to men of other surnames, none of whom became "van Vlaenderen" ([[findings-praet-vlaenderen-line-1591-terminus-2026-06-05]]).
- The **surname**, carried by comital natural children and their cadet descendants, is a separate object. Its disappearances from the record are **documentary silence** (gaps in surviving sources), *not* demonstrated extinction.

### Terminology standard — title vs surname (do not conflate; critics do)

Use these words precisely, every time:

- **Title extinction** — a comital or seigneurial *title* leaves the family. Datable and provable (the comital title 1384; the Praet lordship 1591). This is what the diagram **star ("Comital line")** marks. It happens by one of two mechanisms, and the reason it does **not** carry the surname with it is the same in both: a *title* is freely heritable, a *surname* is not. Flemish fiefs descended by **proximity of blood, passing freely through women, with no agnatic (male-line) preference** ([[noble-status-descent-test-memo]], citing Heirbaut *Over Lenen en Families* and de Waele 2019):
  1. **The title passes through a woman** (daughter or niece) to a man who keeps his own surname — the comital title in 1384 (via Margaret of Male to Burgundy) and the Praet lordship after 1591 (through female links to Baudry van Roisin, de Longueval, de Mouchy…, none of whom became "van Vlaenderen") — [[findings-praet-vlaenderen-line-1591-terminus-2026-06-05]].
  2. **The title reverts to the count and is regranted** to a different family — the Elverdinghe-Vlamertinghe and Wessegem-Ursel lordships repeatedly revert and are regranted ([[findings-elverdinghe-lordship-succession-2026-06-13]]); forfeiture (e.g. Gerard de Moor's lands to Loys) is a sub-case. The surname only ever passes agnatically, so the title and the name part ways. *(This title-heredity material is good "curious reader" content — a footnote-level explanation of why an extinct title says nothing about the surname.)*
- **Line Ends** *(the project's existing evidence tier — use it, don't coin a parallel)* — a source attests the last male of a **traced/titled** line died **sonless** (Lodewijk V, 31 Oct 1591; Jan *zonder gheneratie*, 1545). This is the strong, documented "no male issue to carry the surname *in that line*." It is **not** a claim that every agnatic descendant died out — untraced or non-inheriting cadets fall under documentary silence ([[findings-praet-cadet-survival-untraced-frontier-2026-06-05]] makes exactly this distinction: title-loss ≠ biological extinction).
- **Documentary silence** — the surname stops appearing in surviving sources. A gap, **never** equated with extinction; cadet branches "terminate in silence" without our knowing they died out.
- **Surname survival / continuity** — the heritable name persists in bearers and records.

Banlist: do **not** write "the line went extinct" unqualified — it is exactly the title/surname conflation the argument exists to refute.

Yet the surname, carried by comital natural children and their descendants, outlived both the line and the titles that produced it. Michael's diagram change expresses this visually: the **star** glyph moves from "focus" to **"comital line"** (confirmed 2026-06-13). Precise reading: the star tracks the **title**, which went extinct within the family; it says **nothing** about the *surname's* survivability, which is carried by cadet branches that often terminate in documentary *silence* (a gap in the record), not necessarily biological extinction. The diagrams should read title-extinction against surname-survival, never implying the surname died with the star (DiagramEngine.tsx; see §6).

**Discipline:** state the spine once, in the canonical wording above. Do not re-coin it page by page (count/framing drift starts there).

---

## 1. The progenitor count — what each number means (do NOT flatten)

The site uses several different numbers that are mostly **correct and distinct**. A naive "make all counts equal" pass introduces errors. This is the **progenitor-framing** question; it is **separate** from the onomastic genesis question (§4) and must not be conflated with it.

| Number | Canonical meaning | Site footing | Source anchor (findings, internal) |
| --- | --- | --- | --- |
| **nine** | Louis II de Male's documented bastard **sons** — the cohort | Background figure; cite carefully (see source tension below) | [[findings-despars-cronijcke-cross-reference-2026-05-18]] (Despars A.1, Vol. III pp. 114–115: nine bastard sons + two natural daughters) |
| **five** | The **five direct bastard sons who are surname-bearing line-founders / progenitors** — the thesis count, and the site's five line pages | THE number for the Name page and Research overview | [[findings-comital-bastard-cohort-2026-05-16]] (four lines, adds Robrecht) + [[findings-loys-le-hase-de-haze-identification-2026-05-18]] (Loys le Hase = fifth line) + [[findings-nicopolis-triad-line-founders-2026-05-20]] |
| **three** | Context-specific, **both legitimate, leave them**: (a) the Nicopolis trio who died together 25 Sept 1396 — Louis Friese, Loys le Hase, Jan sans terre; AND/OR (b) the three adult bastard sons named in the 1384 deathbed testament | Leave; never "correct" toward five | [[findings-nicopolis-triad-line-founders-2026-05-20]] |
| **four** | **Line-local** second generation (e.g. Loys's four documented children; Jan's four documented sons in Vredius Tabula XVI) | Leave; line-local, not the progenitor count | [[findings-loys-le-hase-de-haze-identification-2026-05-18]] |

**The five progenitors (canonical names + the site's five line pages):**

1. **Louis "le Frison" / Lodewijk de Vriese** → Praet–Woestine line (slug `louis-friese`) — [[findings-le-frison-nicopolis-survival-line-continuation-2026-05-18]]
2. **Jan sans terre / Jan zonder Land** → Drincham line (slug `jan-sans-terre`) — [[findings-jan-sans-terre-nicopolis-survival-line-continuation-2026-05-18]], [[findings-vvl-gezegd-van-drincham-line-2026-06-05]]
3. **Loys "le Hase" / Lodewijk de Haze** (slug `loys-le-hase`) — [[findings-de-haze-comital-host-1382-1385-2026-06-05]]
4. **Victor van Vlaenderen**, heer van Wessegem en Ursel (slug `victor`) — [[findings-victor-children-cadzand-1441-2026-06-04]]
5. **Robrecht van Vlaenderen**, heer van Elverdinghe-Vlamertinghe (slug `robrecht`) — [[findings-bethune-p233-robrecht-mother-ive-sluus-2026-06-09]]

**Two precision notes the rewrite must honor (so we are not embarrassed by our own findings):**

- The site phrase is **"Five Van Vlaenderen Progenitors" / "five direct bastards"** (existing diagram strings). "Progenitor / direct-bastard line-founder" is the defensible word. Be careful with "five **surviving** lines": **Loys le Hase's** four natural children carry his name and holdings but **do not establish a continuing line** ([[findings-loys-le-hase-de-haze-identification-2026-05-18]]). Five **progenitors**; line-**continuation** varies by line.
- The **nine** vs **seven** tension: Despars A.1 gives nine bastard *sons*; the Vredius/Verhoustraete roster transmits *seven* sons + four daughters = eleven natural children ([[findings-verhoustraete-maleani-roster-cohort-witness-2026-06-05]], a transmission of Vredius, not an independent witness). If the site states "nine," it should be sourced to Despars and not silently contradicted by an eleven-children passage elsewhere. Prefer "nine documented bastard sons (Despars)" with the eleven-children roster as the fuller family picture, not a competing count.

**The genuine drift to fix** (per handoff Appendix A): the Research overview (`research.*`) is mid-migration 4 → 5 — `four_lines_heading` now reads "Five Lines" while the key names stay `four_lines_*` and `research.four_lines_p1` carries **both** "Five of Louis de Male's natural sons" **and** "four lines." Finish the migration (copy + key names where safe). Confirm `research.diagram_title` "Five Van Vlaenderen Progenitors," `research.diagram_caption` "five direct bastards," and `research.hero_lead_p2` "Five of his direct natural sons" are the intended canonical five, then align the rest of `research.*` and the diagram legend.

---

## 2. Geography — comital cities, with the Meetjesland as the lineage's home

The argument's geographic spine is **interior comital circuit, not edge / diaspora** (terminology scaffold §F, observation 1 — the confound-proof observation: preservation bias can hide a diffuse signal, it cannot invent an interior cluster). The front door currently over-relies on the **Meetjesland** (Home: "Meetjesland" ×6; Bruges / Ypres / Brussels ×0). Rebalance.

- **The comital cities** are where the medieval bearers and the bastard lordships cluster: **Bruges** (Praet; the dual-surname tombstones), **Ypres** (Robrecht's Elverdinghe-Vlamertinghe; Caspar's Ypres career 1453–64; the 1306/1376 baljuwsrekeningen bearers), **Ghent** (the Vredius A.33→A.2 convention-shift records; Ghent-adjacent bearers), **Kortrijk** (Jaquemaerde 1426; the weeskamer cluster), and **later Brussels** (the Habsburg-era Praet officeholders, e.g. Louis of Praet). This is the geographic / argumentative expansion the front door must reflect.
- **The Meetjesland** (Eeklo, Bassevelde, Waarschoot, Zomergem, Aalter) is the **lineage's home** — the documented Meetjesland→American direct line and the Woestijne/Praet *bastardgoed* footprint ([[findings-woestijne-bassevelde-aalter-unified-geography-2026-05-22]]). Keep it as the *lineage* anchor; do not let it stand in for the whole *field*-level geography.

**Caution for any geographic claim (carry into the rewrite):** post-1585 Holland/Zeeland "van Vlaenderen" are **presumptively refugee-toponymic** (the diaspora pole) and are **non-diagnostic** for comital survival on the name alone (terminology scaffold §F note, 2026-06-06; [[findings-philips-vvl-mijnsheerenland-holland-lead-2026-06-06]] §4a). Do not present diaspora bearers as comital-line survivors.

### The three surviving clusters (heatmap-confirmed, multi-progenitor)

The Geneanet 1600 heatmap (Michael, 2026-06-13) confirms **three** surviving clusters, matching the Four Functions article and the Overview diagram. Clusters may carry **more than one candidate progenitor** (Michael's directive) — strict 1:1 is wrong:

- **Meetjesland / Gent** (Sleidinge 300, Oostwinkel 159, Waarschoot, Evergem, Zomergem, Aalter, Eeklo): **Victor** (primary — Ursel/Wessegem; son Adam at Ghent 1447) **+ Praet / Louis Friese** (Aalter Vrijhof by 1516; Waarschoot/Bassevelde bastardgoed — [[findings-woestijne-bassevelde-aalter-unified-geography-2026-05-22]]). A pre-Maleani territorial echo (Isabella van Lierde, *vrouwe van Zomergem* + Eeklo) sits in the same zone at **Hypothesis** tier — territorial, not a descent claim.
- **French Flanders / Cassel** (Volckerinckhove 571, Renescure): **Drincham / Jan sans terre** (primary; a possible secondary Function-3 founder is an open hypothesis).
- **Brabant / Brussels** (Wambeek 39, the smallest, least-attested): **Praet / Louis Friese** (via Brabantine marriages — Gruithuyse, Bourgogne).

**Praet straddles Meetjesland and Brabant** — which is why the site's `research.four_lines_p1` put it in the Meetjesland. The genuine error there is naming the third cluster "Ypres quarter (Robrecht)": Robrecht's Ypres line is **extinguished** (≈1505) and shows **no** cluster on the 1600 heatmap. Loys le Hase founded no continuing line (no cluster). Zeeland appears only by 1700 (the diaspora thread above).

---

## 3. Pre-Maleani comital bastards (Louis de Nevers and earlier) — investigation result and recommended footing

**The question (handoff §3, §4b).** Whether the candidate pool should include the bastards of **Louis I de Nevers** (Count of Flanders 1322–1346) — and, raised by Michael 2026-06-13, the generations around **Robert III de Béthune** (Count 1305–1322) — one or two comital generations *before* Louis II de Male, and at what footing. Michael's decision rule: documented surname-bearing **descent** → equal footing with Louis II's line-founders; record **silent** on surname-bearing descent → **Hypothesis** tier only.

**Genealogy note (so the page doesn't misstate it).** Robert III de Béthune is Louis I de Nevers's **grandfather**, not father: Robert III → Louis of Nevers the elder (d. 1322) → Louis I de Nevers (d. 1346) → Louis II de Male. Robert III is Louis II de Male's great-grandfather. Robert III himself uses *"van Vlaendren"* of his own person, 1309–10 Aardenburg ([[findings-west-flemish-attestations-1410-1493-2026-04-21]]).

**Robert III's generation — bastards bearing the name, on both sides of him** (all via Despars Vol. II, [[findings-despars-cronijcke-cross-reference-2026-05-18]]):

- **Jan van Vlaenderen**, bastard of **Guy de Dampierre** (Robert III's father), Robert III's *"halve broedere van zijn vaders weghe,"* 1304–05 — one generation above Robert III.
- **Mer Guy van Vlaenderen, heere van Rijckenburch**, bastard of **Robert of Cassel** (Robert III's legitimate son, d. 1331), c. 1331 — Robert III's grandson via a legitimate son.
- **Isabella van Lierde**, most likely Robert III's own natural **daughter** (standard *suer de bas* reading; "Louis of Nevers the elder" stays open) — but styled *van Lierde*, not van Vlaenderen, and childless ([[findings-isabella-van-lierde-filiation-2026-06-13]]).

A bastard **son of Robert III himself** bearing *van Vlaenderen* with a continuing surname line is **not** in the corpus. **Discrepancy to resolve in the future finding:** "Guy van Vlaenderen heere van Rijckenburch" (Despars: bastard of Robert of Cassel) appears to be the same man FMG/Cawley calls **"Guy de Rickenbourg"** and assigns as the *one* natural son of Louis I de Nevers — same name, conflicting parentage.

**Louis I de Nevers's generation — what the corpus and FMG/Cawley show:**

- **Hendrik van Vlaenderen**, "bastaard van Lodewijk van Nevers," holding coastal Zeeland-Flemish land (De Flou Vol. 16 col. 554, citing Roos *aanteekeningen* 145). **Probable; source chain unverified** ([[findings-hendrik-vvl-bastaard-lodewijk-nevers-2026-05-22]]). He bears the name, but no continuing descent line is documented, and the c. 1440 framing sits awkwardly against Louis I's 1346 death.
- **Rufflaert / Rufelaert de Flandre**, bastard of Louis I de Nevers, 1363 Ypres (de Smet) — cross-linked to the "Rufelaert" → "Rodolph van Vlaenderen" surname evolution ([[findings-de-smet-corpus-chronicorum-flandriae-bastard-cohort-2026-06-04]] §3; [[findings-rodolph-surname-evolution-2026-05-22]]). Bears the name; again no documented continuing descent line.
- **FMG / Cawley, *Medieval Lands*** gives Louis I de Nevers **only one** natural son — **Guy de Rickenbourg** — who does **not** bear "van Vlaenderen" ([[findings-medlands-fmg-robrecht-maternal-line-victor-testament-2026-06-04]], Finding 3). It carries neither Hendrik nor Rufflaert.
- **Isabella van Lierde** is Louis I de Nevers's natural **sister**, not his child; she is styled *van Lierde*, not *van Vlaenderen*, and was childless by Mirabello ([[findings-isabella-van-lierde-filiation-2026-06-13]]; [[findings-louis-i-comital-bastard-line-2026-04-21]]). A **parallel** case of the pattern, not an ancestral or surname-bearing one.

**Recommendation (for Michael's call):** across the whole pre-Maleani span (Dampierre → Béthune → Nevers), the record documents individual comital *bearers* of the name at Probable-or-weaker tiers and shows the bastard-naming practice was old and continuous, but it is **silent on a continuing surname-bearing descent line** before Louis II de Male. By Michael's own decision rule this lands at **Hypothesis tier** — present the pre-Maleani candidates (Louis de Nevers and the Béthune/Dampierre bastards) as a Hypothesis-tier extension that pushes the *practice* one to two comital generations earlier, **not** at equal footing with Louis II de Male's five line-founders.

**Two flags:**
1. The "**five bastards of Louis de Nevers**" framing is **not corroborated** — FMG gives one natural son; the corpus adds two name-bearers at Probable/weak tiers. Do **not** adopt a "five Nevers bastards" count. (The well-supported "five" belongs to Louis II de Male's line-founders, §1.)
2. **Assert nothing on the site** until a dedicated finding lands. That finding's verification step must include a **direct FMG/Cawley re-pull** (the web fetch failed this session; the datum here is via the project's 2026-06-04 MedLands read) and the **Roos-manuscript chain** for Hendrik. Sequenced early, but it does not block the rest of the audit.

---

## 4. Onomastic genesis (field vs lineage) — keep SEPARATE from the count

This is a **different question** from §1 and must never be merged with it. The progenitor count (§1) is prosopographic: *how many of Louis II's bastards founded lines.* The genesis question is onomastic: *how many independent founders the surname has as a name.* (Terminology scaffold §E, the load-bearing distinction.)

- **Field-genesis** ("Van Vlaenderen as a surname across Flanders generally") is **not diffuse** — the distributional evidence places it toward the **narrow** end; within "narrow," monogenetic and oligogenetic both remain open and the project prefers neither pending Y-DNA.
- **Lineage-genesis** (one descent line — the Meetjesland→American line, R-FT1573) may be monogenetic.
- The claim on the site is **never** "Van Vlaenderen is one comital family" (indefensible). It is: "the field is narrower than a diffuse provenance-name predicts, and this one lineage within it may trace to a comital-bastard founder."
- **Y-DNA tests the lineage, never the surname** — so the family funnel (§5) and the multi-tester / Antheunisz collaboration are the right instruments, not a surname argument.

The Name page's four-functions / clusters content and the Research overview should keep the count (§1) and the genesis (§4) visibly distinct.

---

## 5. The 1300s–1400s surname footprint (the "clusters" framing)

The early footprint shows the surname in use **before and around** the bastard cohort's crystallization, in the interior comital circuit:

- **Robert III de Béthune uses "van Vlaendren" of himself**, 1309–10 Aardenburg (Debrabandere WFZ via CBG Familienamenbank) — the surname as a **comital self-identifier** before the bastard lines adopted it ([[findings-west-flemish-attestations-1410-1493-2026-04-21]]).
- **Eight confirmed hereditary bearers, 1306–1426**, all in interior comital-circuit cities — **not nine** (1280 Catharina is situational, not hereditary; "Willaumes Half-Vlaenderen" is a **separate name-family**, Debrabandere §233) ([[findings-eight-bearer-baljuwsrekeningen-1306-1426-2026-05-28]], [[findings-half-vlaenderen-separate-name-family-2026-06-05]]).
- The **convention shift** from descriptive comital modifier to heritable surname, c. 1388–1420 (Vredius A.33 → A.2; the Rodolph career B.6 → B.22) ([[findings-vredius-a2-a33-convention-shift-2026-05-22]], [[findings-rodolph-surname-evolution-2026-05-22]]).
- **Candidate / pending clusters** — present as evidence of *continuous interior presence*, not as settled comital identifications: the **Tielt** *stadsrekeningen* 1410–1432 (Victor / Janne / Robbrecht — identifications primary-source-pending on Moors 2009) and the **Kortrijk / Moeskroen / Deerlijk** weeskamer 1453–1493 (status uncertain) ([[findings-west-flemish-attestations-1410-1493-2026-04-21]]).

**Rewrite rule:** the early clusters demonstrate an interior, comital-circuit footprint and a name in heritable use across the 1300s–1400s; they do **not** license naming individual Tielt/weeskamer bearers as confirmed comital figures on the public site (the Moors-page reads are not yet in hand).

---

## 6. Per-audience message priorities

Every proposed change is tagged with its primary audience and must serve that audience's funnel.

**Curious Van Vlaenderen extended family** — engage through compelling, approachable content; build trust; solicit engagement. The spine (§0) is the emotional hook: a line that ended, a name that survived to reach them. Funnel → participation in the **Y-DNA study** and extended family-tree building. Keep the entry approachable; the rigor lives one click deeper.

**Scholars** — engage through compelling content; win trust with **well-resourced claims**, **visible evidence tiers**, and **clear, rigorously applied method**. Cite source documents, not internal scaffolding (§7). Hold the **Larmuseau-facing collaborative tone** (ARCHITECTURE §3.8): we refine / qualify / complete his source chain for the comital cohort specifically; we never "rebut" or "defeat" him. Funnel → critique of content/method/conclusions, endorsement as a trusted source, and participation in DNA study design and publication.

The spine serves both at once — that is why it is the organizing thesis.

---

## 7. Standing name / tier / citation conventions (binding on every rewrite)

These are non-negotiable and are enforced by the build gate and the `vanvlaenderen-site-update` skill:

- **V/v rule:** `Van Vlaenderen` free-standing or sentence-initial; `van Vlaenderen` as a particle in Middle-Dutch / Latinate context (ARCHITECTURE §3.6).
- **Canonical names (build-gated, EN/NL per-key parity):** **Louis Friese**, **Jan sans terre**, **Loys le Hase** (plus Victor, Robrecht). `scripts/check-i18n.mjs` / `pnpm check:i18n` enforces; NL mirrors EN per key (glosses/quotes excepted). See memory `nl-i18n-canonical-names`.
- **Evidence tiers = badge labels** and must match the finding's tier: Directly Attested / Strongly Corroborated / Probable / Hypothesis (NL: Direct geattesteerd / Sterk gecorroboreerd / Waarschijnlijk / Hypothese). The orange **Comital-Source** variant is diagram-only.
- **Sources, not findings, on the page:** on-page citations name the underlying source documents (archive shelfmarks, published works) copied from the finding's §3 citation block. **Findings slugs never render on the site** (ARCHITECTURE §3.2; memory `site-cites-sources-not-findings`).
- **Never invent archival references.** Every on-page citation is copied from a finding's source-citation block, not reconstructed.
- **One quote per secondary source per page, < 15 words**; primary Middle Dutch / Latin preserved verbatim where quoted (ARCHITECTURE §3.5).

---

## 8. What this scaffold locks (the measuring stick for Phase 1)

1. The **spine** wording (§0), used once and not re-coined.
2. The **count taxonomy** 9 / 5 / 3 / 4 with the five named progenitors and the two precision notes (§1).
3. The **geography rebalance** — comital cities up, Meetjesland as the lineage's home, diaspora caution (§2).
4. The **Louis de Nevers footing** — Hypothesis tier, no "five Nevers bastards," nothing on the site until the finding lands (§3).
5. The **count ≠ genesis** firewall (§1 vs §4).
6. The **clusters** as continuous-interior-presence evidence, not named-bearer identifications (§5).
7. The **per-audience funnels** (§6) and the **standing conventions** (§7).

**Open for Michael before Phase 1:** (a) confirm the Louis de Nevers **Hypothesis** footing in §3; (b) confirm "nine documented bastard sons (Despars)" as the canonical phrasing of the cohort number in §1; (c) confirm the spine wording in §0.
