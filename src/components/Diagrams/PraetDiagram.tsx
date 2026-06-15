import { useTranslation } from 'react-i18next';
import LineageDiagram, { C, type DiagramDef } from './DiagramEngine';

// ─────────────────────────────────────────────────────────────────────────────
// The House of Flanders-Praet — Seven Generations
//
// Locked visual rules (diagram thread, April 2026):
//   • Row = generation. No exceptions.
//   • Color encodes record confidence ONLY. Legend has 5 entries:
//       Comital source     orange  #e8812a   (C.root)
//       Directly Attested  green   #4ade80
//       Strongly           blue    #60a5fa   (C.blue)
//       Probable           amber   #fbbf24
//       Hypothesis         red     #f87171
//   • Line status is conveyed by glyph below the card:
//       †    confirmed terminal (source states no issue)
//       ?    source silent on descendants
//       ×    surname not transmitted (line may continue under another surname)
//   • Research focus is signalled by a gold ★ badge top-right of the card.
//   • No stacking in this diagram. Horizontal row for every sibling group.
//
// Phase 2 changes (May 2026):
//   • Le Frison Nicopolis date 28 Sep → 25 Sep 1396.
//   • Marie van Ghistelle absorbed into Le Frison's body copy (no separate
//     node). Widow-continuation rendered as wrapped annotation right of card.
//   • Daughters who married out (Ioanna, Margareta, Lisbette) reclassified
//     from ev:'unknown' (?) → ev:'married-out' (×).
//   • Node heights bumped to fix text overflow; viewBox height extended.
//   • Legend split into two rows: confidence keys + glyph keys.
//
// Phase 3 changes (June 2026) — collateral continuation drawn explicitly:
//   • The line did NOT end at Jan II (d. 10 Dec 1545): that ends only the
//     SENIOR direct line. The lordship and surname passed to Joos's cadet
//     branch — Joos (d. bef. 30 Nov 1545) → Jacob (Praet + Woestijne by act of
//     25 Sept 1550; d. 1566) → Lodewijk V (d. sonless 31 Oct 1591 in exile,
//     last male — the surname ends). New nodes 'jacob' and 'l5'.
//   • Joos death date corrected (June 2026): before 30 Nov 1545 — the
//     Honnelede wardship file (RAB TBO 184 nrs. 21300–21302) names him
//     posthumously, earliest account year beginning St. Andrew's Day 1545.
//     Verhoustraete's printed "1553" cites the same bundle and is corrected
//     against the primary. (Earlier corrections: "after 1526" → 1553.)
//   • Lodewijk III date corrected to New Year's 1490 (the "1488" reading is
//     a conflation with Lodewijk II's death year — logged known error).
//   • Lodewijk IV carries the 1555-vs-1558 death-year cross-flag
//     (Verhoustraete/Vredius 1555 vs Gailliard tombstone "obiit MDLVIII";
//     project preference 1558, held at Probable). Never 1556.
//   • Two-Jacques discipline: the 15th-c. "Jaques de Flandre" (Damhouder's
//     list) is distinct from Jacob van Vlaanderen (Joos's son) and did not
//     inherit; his identification is not established.
//
// Source of record:
//   Vredius (Olivier de Wree), Genealogia Comitum Flandriae, Tabula XVI &
//   Tabula XIX, direct reading April 2026.
//   Collateral continuation + 1591 terminus: Verhoustraete, "De heren van
//   Praet te Oedelem," Jaarboek 1967 (Bos en Beverveld), pp. 101–113;
//   Serrure 1863 (Vaderlandsch Museum Deel 5); Valkeneers & Soen 2014;
//   RAB TBO 184 nrs. 21300–21302 (Honnelede wardship file, 1545–49).
// ─────────────────────────────────────────────────────────────────────────────

const LINE = '#5a6378';

// Row y-coordinates (one per generation) — Phase 2 expanded for breathing room.
// Iteration 2: Louis II h bumped 76→92 (dates were wrapping under tag pill);
// gens 2–7 shifted down to maintain ≥32px gaps for bezier curve clearance;
// Lodewijk IV h bumped 108→120 to clear GOLDEN FLEECE 1531 tag; viewBox h
// bumped 960→1000 so Jan II's † glyph isn't pressed against the legend.
const Y_GEN1 = 30;
const Y_GEN2 = 156;
const Y_GEN3 = 304;
const Y_GEN4 = 430;
const Y_GEN5 = 566;
const Y_GEN6 = 702;
const Y_GEN7 = 856;

// Gen 4 column centres (5 children of Johan I)
const G4_C1 = 170;
const G4_C2 = 330;
const G4_C3 = 500;
const G4_C4 = 720;
const G4_C5 = 880;

// Gen 5 column centres (6 children of Lodewijk II)
const G5_C1 = 120;
const G5_C2 = 280;
const G5_C3 = 440;
const G5_C4 = 600;
const G5_C5 = 760;
const G5_C6 = 920;

const NODE_W = 120;
const NODE_H_STD = 90;
const NODE_H_HEIR = 102;

const nx = (cx: number, w: number = NODE_W) => cx - w / 2;

const diagram: DiagramDef = {
  // Phase 3: height 1000 → 1060 so the Gen-7 Lodewijk V card, its † glyph,
  // and the wrapped post-1591 succession annotation clear the legend.
  viewBox: '0 0 1120 1060',

  nodes: [
    // ── Gen 1 ────────────────────────────────────────────────────────────
    {
      id: 'lm',
      x: 484,
      y: Y_GEN1,
      cfg: {
        name: 'Louis II de Male',
        titleHeld: 'Count of Flanders',
        dates: 'Count of Flanders · 1330–1384',
        tag: 'HOUSE OF DAMPIERRE',
        body: "In 1373 purchased the leengoed of Praet in Oedelem from the van Praet family, then granted it to his natural son Louis Friese. His death in 1384 marks the generation in which van Vlaenderen crystallises as a heritable surname among his bastard descendants.",
        src: 'Vredius, Tab. XVI; Lauwens (2010)',
        color: C.root,
        ev: 'direct',
        w: 152,
        h: 92,
      },
    },

    // ── Gen 2 ────────────────────────────────────────────────────────────
    {
      id: 'fri',
      x: 464,
      y: Y_GEN2,
      cfg: {
        name: 'Louis Friese van Vlaenderen',
        titleHeld: 'Lord of Praet & Woestine',
        dates: 'c.1350 – 25 Sep 1396 · Nicopolis',
        tag: 'LORD OF PRAET & WOESTINE',
        body: "Natural son of Louis de Male by a daughter of Monsieur de Borre. Granted Praet c.1373. Twice married: first wife (unnamed, connected with La Woestine), then Marie van Ghistelle, Dame de Roosbeke et Sweveghem. Killed at Nicopolis 25 September 1396 alongside half-brothers Loys 'le Hase' and Jan sans terre.",
        src: 'Vredius, Tab. XVI & (1643) pp. 276–277; Espinoy (1631), Livre 2, Ch. XXXI, p. 68; Gailliard, Bruges et le Franc T. I p. 257',
        color: '#4ade80',
        ev: 'direct',
        w: 192,
        h: 116,
      },
    },

    // ── Gen 3 ────────────────────────────────────────────────────────────
    {
      id: 'j1',
      x: 474,
      y: Y_GEN3,
      cfg: {
        name: 'Johan I van Vlaenderen',
        titleHeld: 'Lord of Praet',
        dates: 'd. after 10 Sep 1439',
        tag: 'LORD OF PRAET',
        body: "Son of Louis Friese and Marie van Ghistelle. Échevin du Franc 1393. Named at the battle of Brouwershaven (13 January 1426) in Philip the Good's Holland-Zeeland campaign, alongside Jan van Egmond — 'Jan van Vlaendren, de heere Van Praet' in the Kronyk van Jan van Dixmude; independently 'Jan van Vlaenderen, die heere van Praet ende van der Woestijne' in Despars. Issued own charter as Lord of Praet 10 Sep 1439. Married Johanna van Reygersvliet. Five documented children named individually in the Gen 4 row below.",
        src: 'Vredius (1643) p. 277 (Collecta Damhouderii fol. 276 T); Espinoy (1631), Livre 2, Ch. XXXI, p. 68; Gailliard T. I p. 257; de Smet, Recueil des chroniques de Flandre, T. III p. 39 (Kronyk van Jan van Dixmude); Despars, Cronijcke Vol. III pp. 298–299',
        color: '#4ade80',
        ev: 'direct',
        w: 172,
        h: 92,
      },
    },

    // ── Gen 4 — Johan I's five children ──────────────────────────────────
    {
      id: 'ioanna',
      x: nx(G4_C1),
      y: Y_GEN4,
      cfg: {
        name: 'Ioanna\nde Flandre',
        dates: 'm. 1446',
        body: "Daughter of Johan I. Married Jean Seigneur de Pouckes, Vicomte d'Ypres. Documented in charters of 24 January 1441 and a further document of 1446. Not to be confused with her niece Iehenne (Gen 5, daughter of Lodewijk II).",
        src: "Vredius (1643) p. 278 (1446 partition record); 24 Jan 1441 charter: Buylaert (2011) p. 567, as cited in C. Cawley, 'Medieval Lands', FMG",
        color: '#4ade80',
        ev: 'married-out',
        w: NODE_W,
        h: NODE_H_STD,
      },
    },
    {
      id: 'margareta',
      x: nx(G4_C2),
      y: Y_GEN4,
      cfg: {
        name: 'Margareta\nde Flandre',
        dates: 'm. Louis de Bailleul',
        body: "Daughter of Johan I — attribution structurally inferential from the 'sorores Ludovici Patris' heading on Vredius p. 278 rather than directly textual. Treated here as Strongly Corroborated pending direct consultation of Buylaert (2011).",
        src: 'Vredius (1643) p. 278 (Grimarez MS)',
        color: C.blue,
        ev: 'married-out',
        w: NODE_W,
        h: NODE_H_STD,
      },
    },
    {
      id: 'l2',
      x: nx(G4_C3),
      y: Y_GEN4,
      cfg: {
        name: 'Lodewijk II\nvan Vlaenderen',
        dates: 'd. 24 Aug / 1 Oct 1488',
        titleHeld: 'Lord of Praet',
        tag: 'LORD OF PRAET',
        body: "Son of Johan I. Married Louise de Bruges, daughter of Jan van de Aa Heer van Gruuthuse. Death in 1488 confirmed by the Aalter tomb epitaph; two primary sources disagree on the day — de l'Espinoy records St. Bartholomew (24 Aug), the Aalter tomb itself records St. Bavo (1 Oct). Six documented children, named individually in the Gen 5 row below.",
        src: 'Vredius p. 277–278 (Aalter tomb); Espinoy (1631)',
        color: '#4ade80',
        ev: 'direct',
        w: NODE_W,
        h: NODE_H_HEIR,
      },
    },
    {
      id: 'lisbette',
      x: nx(G4_C4),
      y: Y_GEN4,
      cfg: {
        name: 'Lisbette\nde Flandre',
        dates: 'm. Waleran de Landas',
        body: "Daughter of Johan I. Married Waleran, Lord of Landas and Warlain. Named under guardianship with Lodewijk II and Landrada in the March 1442 Ghent partition following Johan I's death.",
        src: 'Vredius (1643) p. 279 (Grimarez MS)',
        color: '#4ade80',
        ev: 'married-out',
        w: NODE_W,
        h: NODE_H_STD,
      },
    },
    {
      id: 'landrada',
      x: nx(G4_C5),
      y: Y_GEN4,
      cfg: {
        name: 'Landrada\nde Flandre',
        dates: 'canoness, Mons Ste-Waudru',
        body: "Daughter of Johan I. Canoness at the collegiate chapter of Saint-Waudru in Mons; never married. Line terminates by vocation.",
        src: 'Vredius (1643) p. 279 (Grimarez MS)',
        color: '#4ade80',
        ev: 'ends',
        w: NODE_W,
        h: NODE_H_STD,
      },
    },

    // ── Gen 5 — Lodewijk II's six children ───────────────────────────────
    {
      id: 'louise',
      x: nx(G5_C1),
      y: Y_GEN5,
      cfg: {
        name: 'Louise\nde Flandre',
        dates: 'fl. 15th c.',
        body: "Daughter of Lodewijk II by Louise de Bruges. Named in Damhouder's list of the six children (Vredius p. 278) but with no further biographical detail.",
        src: 'Damhouder via Vredius p. 278',
        color: '#4ade80',
        ev: 'unknown',
        w: NODE_W,
        h: NODE_H_STD,
      },
    },
    {
      id: 'jaques',
      x: nx(G5_C2),
      y: Y_GEN5,
      cfg: {
        name: 'Jaques\nde Flandre',
        dates: 'fl. 15th c.',
        body: "Son of Lodewijk II by Louise de Bruges per Damhouder's list of the six children (Vredius p. 278); no further biographical detail, and his identification is not established. He did not inherit Praet (it passed to his brother Lodewijk III). Not to be confused with Jacob van Vlaanderen (d. 1566), Joos's son one generation later, who received Praet and Woestijne in 1550 — see the Gen 6 row.",
        src: 'Damhouder via Vredius p. 278',
        color: '#4ade80',
        ev: 'unknown',
        w: NODE_W,
        h: NODE_H_STD,
      },
    },
    {
      id: 'l3',
      x: nx(G5_C3),
      y: Y_GEN5,
      cfg: {
        name: 'Lodewijk III\nvan Vlaenderen',
        dates: "d. New Year's 1490",
        titleHeld: 'Lord of Praet',
        tag: 'LORD OF PRAET',
        body: "Son of Lodewijk II. Married Isabelle de Bourgogne (d. 12 Nov 1504, bur Gent). Died at New Year's 1490 per the Aalter tomb inscription (a Monday in 1490, buried beside his father). Grimarez's '1 January 1488' is a conflation with his father Lodewijk II's death year (1488) — a logged known error, not a competing date.",
        src: 'Vredius p. 279 (Aalter tomb)',
        color: '#4ade80',
        ev: 'direct',
        w: NODE_W,
        h: NODE_H_HEIR,
      },
    },
    {
      id: 'jean',
      x: nx(G5_C4),
      y: Y_GEN5,
      cfg: {
        name: 'Jean\nde Flandre',
        titleHeld: 'Heer van Onlede & Beveren',
        dates: 'd. 6 Sep 1523',
        body: "Son of Lodewijk II. Heer van Onlede en Beveren bij Roeselare; Grand Bailiff of Bruges and the Brugse Vrije. Died without surviving male issue; lordships passed to brother Josse in 1523.",
        src: 'Beveren tomb via Vredius p. 280',
        color: '#4ade80',
        ev: 'ends',
        w: NODE_W,
        h: NODE_H_STD,
      },
    },
    {
      id: 'josse',
      x: nx(G5_C5),
      y: Y_GEN5,
      cfg: {
        name: 'Joos (Josse)\nvan Vlaenderen',
        dates: 'd. bef. 30 Nov 1545',
        titleHeld: 'Heer van Onlede, Beveren & Wijchuize',
        tag: 'CADET — LINE CONTINUES',
        body: "Son of Lodewijk II. Inherited Onlede, Beveren, and Wijchuize after his brother Jean's death in 1523. Married Martina van Moerkerke; died before 30 November 1545 — his sons' wardship file names him posthumously, its earliest account year beginning St. Andrew's Day 1545 (the older printed death-year 1553 rests on the same bundle and is corrected against the original). When the senior line failed (Jan II d. 10 Dec 1545), the lordship and surname passed to his branch: his son Jacob received Praet and Woestijne in 1550 — the collateral continuation drawn below.",
        src: "Damhouder via Vredius p. 278; Verhoustraete, 'De heren van Praet te Oedelem,' Jaarboek 1967, pp. 101–113; Serrure 1863 (Vaderlandsch Museum Deel 5); RAB TBO 184 nrs. 21300–21302",
        color: '#4ade80',
        ev: 'direct',
        w: NODE_W,
        h: NODE_H_HEIR,
      },
    },
    {
      id: 'iehenne',
      x: nx(G5_C6),
      y: Y_GEN5,
      cfg: {
        name: 'Iehenne\nde Flandre',
        dates: 'fl. 15th c.',
        body: "Daughter of Lodewijk II by Louise de Bruges. Named in Damhouder's list (Vredius p. 278). Distinct from her aunt Ioanna (Johan I's daughter, m. Pouckes) — the two Jeannes are in adjacent generations and must not be conflated.",
        src: 'Damhouder via Vredius p. 278',
        color: '#4ade80',
        ev: 'unknown',
        w: NODE_W,
        h: NODE_H_STD,
      },
    },

    // ── Gen 6 — Lodewijk IV (research focus — star badge) ────────────────
    {
      id: 'l4',
      x: nx(G5_C3, 136),
      y: Y_GEN6,
      cfg: {
        name: 'Lodewijk IV\nvan Vlaenderen',
        dates: 'd. 1555/1558 · m. Jossine van Praet',
        tag: 'GOLDEN FLEECE 1531',
        body: "Grand Bailiff of Ghent and Bruges. Stadtholder of Holland, Zeeland and Utrecht 1544–46. Advisor to Emperor Charles V. The Aalter tomb preserves his full titulature. 1517 charter: holds 6 fiefs at Knesselare from the Wessegem seigneurie — direct territorial link to the Meetjesland. Death year cross-flagged: Vredius and Verhoustraete print 1555, but Gailliard reports the Aalter tombstone reading 'obiit MDLVIII' (1558); project working preference 1558, held at Probable.",
        src: "Vredius p. 387 (Aalter tomb); Verhoustraete 1967; Gailliard, Bruges et le Franc, T. I p. 261; 1517 charter: De Raadt, Sceaux armoriés, I (1898) p. 456, as cited in C. Cawley, 'Medieval Lands', FMG",
        color: '#4ade80',
        ev: 'direct',
        titleHeld: 'Lord of Praet',
        w: 136,
        h: 120,
      },
    },

    // ── Gen 6 — Jacob (collateral heir; Praet + Woestijne 1550) ──────────
    {
      id: 'jacob',
      x: nx(G5_C5, 136),
      y: Y_GEN6,
      cfg: {
        name: 'Jacob\nvan Vlaanderen',
        dates: 'd. 17 Aug 1566',
        tag: 'PRAET & WOESTIJNE 1550',
        titleHeld: 'Lord of Praet & Woestine',
        body: "Son of Joos — Lodewijk IV's nearest heir after the senior line failed in 1545. Received Woestijne and Praet at Aalter by act of 25 September 1550; married Catharina van Boetzelaer 1551/52; died 17 August 1566, buried Beveren. Not to be confused with the 15th-century 'Jaques de Flandre' of Damhouder's list (Gen 5), who did not inherit.",
        src: "Verhoustraete 1967, pp. 101–113; Valkeneers & Soen, 'Praet, Bronkhorst en Boetzelaer' (2014); RAB TBO 184 nrs. 21300–21302",
        color: C.blue,
        ev: 'direct',
        w: 136,
        h: 108,
      },
    },

    // ── Gen 7 — Jan II (senior direct line ends) ─────────────────────────
    {
      id: 'j2',
      x: nx(G5_C3, 136),
      y: Y_GEN7,
      cfg: {
        name: 'Jan II\nvan Vlaenderen',
        titleHeld: 'Heer van Woestine, Elverdinghe & Vlamertinghe',
        dates: 'd. 10 Dec 1545',
        body: "Only surviving son of Lodewijk IV (a younger son Jan d. 1543). Heer van Woestine, Elverdinghe, and Vlamertinghe. Predeceased his father, dying without issue. Widow Jacqueline de Bourgogne remarried and died in childbirth 1556. His death ends the senior direct male line only — the lordship and surname passed to the collateral branch of Joos, whose son Jacob received Praet and Woestijne in 1550.",
        src: 'Vredius p. 388 (Aalter tomb); Verhoustraete 1967',
        color: '#4ade80',
        ev: 'ends',
        w: 136,
        h: 96,
      },
    },

    // ── Gen 7 — Lodewijk V (last male; the surname ends, 1591) ───────────
    {
      id: 'l5',
      x: nx(G5_C5, 136),
      y: Y_GEN7,
      cfg: {
        name: 'Lodewijk V\nvan Vlaanderen',
        dates: 'b. 1559 – d. 31 Oct 1591',
        tag: 'LAST MALE — SURNAME ENDS',
        titleHeld: 'Lord of Praet',
        body: "Son of Jacob. Calvinist; married Maria van Marnix, who died childless in 1580. Sold the encumbered Praet/Aalter estate before his death; died sonless on All Saints' Eve, 31 October 1591, in exile — the last male of the line. The surname ends; the title passes through female links to men of other surnames.",
        src: 'Verhoustraete 1967, pp. 101–113 (post-1591 succession pp. 109–112); Valkeneers & Soen (2014)',
        color: C.blue,
        ev: 'ends',
        w: 136,
        h: 110,
      },
    },
  ],

  connections: [
    { from: 'lm', to: 'fri',       color: LINE },
    { from: 'fri', to: 'j1',       color: LINE },
    { from: 'j1', to: 'ioanna',    color: LINE },
    { from: 'j1', to: 'margareta', color: LINE },
    { from: 'j1', to: 'l2',        color: LINE },
    { from: 'j1', to: 'lisbette',  color: LINE },
    { from: 'j1', to: 'landrada',  color: LINE },
    { from: 'l2', to: 'louise',    color: LINE },
    { from: 'l2', to: 'jaques',    color: LINE },
    { from: 'l2', to: 'l3',        color: LINE },
    { from: 'l2', to: 'jean',      color: LINE },
    { from: 'l2', to: 'josse',     color: LINE },
    { from: 'l2', to: 'iehenne',   color: LINE },
    { from: 'l3', to: 'l4',        color: LINE },
    { from: 'l4', to: 'j2',        color: LINE },
    { from: 'josse', to: 'jacob',  color: LINE },
    { from: 'jacob', to: 'l5',     color: LINE },
  ],

  labels: [
    { x: 560, y: 413, text: "JOHAN I'S FIVE CHILDREN",   color: '#8a8f9e', size: 10 },
    { x: 500, y: 549, text: "LODEWIJK II'S SIX CHILDREN", color: '#8a8f9e', size: 10 },
  ],

  annotations: [
    // NEW Phase 2: widow-continuation annotation right of Le Frison, wrapped
    {
      x: 670,
      y: 214,
      maxWidth: 430,
      text: "← Line continues through widow Marie van Ghistelle (Dame de Roosbeke et Sweveghem) and son Johan I — échevin du Franc 1393, knighted at Brouwershaven 1426.",
      color: '#d4a830',
    },
    // Phase 3: maxWidth added so this no longer collides with the new
    // Jacob card at G5_C5 in the same row.
    {
      x: G5_C3 + 80,
      y: Y_GEN6 + 40,
      maxWidth: 160,
      text: '← 1517: 6 fiefs at Knesselare (Meetjesland)',
      color: '#d4a830',
    },
    // Phase 3: post-1591 title succession — the title hops through women to
    // men of other surnames; the surname does not follow (Verhoustraete
    // pp. 109–112, Directly Attested).
    {
      x: G5_C5 + 80,
      y: Y_GEN7 + 30,
      maxWidth: 270,
      text: '← After 1591 the Praet-Woestijne title descends by proximity of blood through women to men of other surnames — Baudry van Roisin (1592), then de Longueval, de Mouchy, Thesart, von Salm, de Lalaing, de Rubempré. None became van Vlaenderen: the surname tracks the patriline, the title does not.',
      color: '#d4a830',
    },
  ],

  legendItems: [
    { color: C.root,    label: 'Comital source' },
    { color: '#4ade80', label: 'Directly Attested' },
    { color: C.blue,    label: 'Strongly Corroborated' },
    { color: '#fbbf24', label: 'Probable' },
    { color: '#f87171', label: 'Hypothesis' },
    { glyph: '†',                       label: 'No issue documented',          forceBreakBefore: true },
    { glyph: '?', glyphStyle: 'circle', label: 'Source silent on descendants' },
    { glyph: '×', glyphStyle: 'circle', label: 'Surname not transmitted' },
  ],
};

export default function PraetDiagram() {
  const { t } = useTranslation();
  return (
    <LineageDiagram
      diagram={diagram}
      title={t('louis_friese.diagram_title')}
      subtitle={t('louis_friese.diagram_subtitle')}
    />
  );
}
