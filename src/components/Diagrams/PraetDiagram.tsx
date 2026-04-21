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
//       none person has descendants in the diagram, or descendants documented
//     Glyphs are implemented engine-side via the ev prop:
//       ev: 'ends'     → †   (grey tooltip badge post-patch)
//       ev: 'unknown'  → ?
//   • Research focus is signalled by a gold ★ badge top-right of the card,
//     NOT a color. Used for nodes of outsized research value. Engine-side
//     via `focus: true` — see DiagramEngine patch for the star render.
//   • No stacking in this diagram. Horizontal row for every sibling group.
//
// Source of record:
//   Vredius (Olivier de Wree), Genealogia Comitum Flandriae, Tabula XVI &
//   Tabula XIX, direct reading April 2026. FMG MedLands [817, 864–895].
// ─────────────────────────────────────────────────────────────────────────────

const LINE = '#5a6378';

// Row y-coordinates (one per generation)
const Y_GEN1 = 30;
const Y_GEN2 = 130;
const Y_GEN3 = 230;
const Y_GEN4 = 348;
const Y_GEN5 = 478;
const Y_GEN6 = 628;
const Y_GEN7 = 760;

// Gen 4 column centres (5 children of Johan I)
const G4_C1 = 170;   // Ioanna
const G4_C2 = 330;   // Margareta — inferential, blue stroke
const G4_C3 = 500;   // Lodewijk II — heir
const G4_C4 = 720;   // Lisbette
const G4_C5 = 880;   // Landrada — canoness, †

// Gen 5 column centres (6 children of Lodewijk II)
const G5_C1 = 120;   // Louise
const G5_C2 = 280;   // Jaques
const G5_C3 = 440;   // Lodewijk III — heir
const G5_C4 = 600;   // Jean — †
const G5_C5 = 760;   // Josse — line survives
const G5_C6 = 920;   // Iehenne

const NODE_W = 120;
const NODE_H_STD = 76;
const NODE_H_HEIR = 86;

const nx = (cx: number, w: number = NODE_W) => cx - w / 2;

const diagram: DiagramDef = {
  viewBox: '0 0 1120 860',

  nodes: [
    // ── Gen 1 ────────────────────────────────────────────────────────────
    {
      id: 'lm',
      x: 484,
      y: Y_GEN1,
      cfg: {
        name: 'Louis II de Male',
        dates: 'Count of Flanders · 1330–1384',
        tag: 'HOUSE OF DAMPIERRE',
        body: "In 1373 purchased the leengoed of Praet in Oedelem from the van Praet family, then granted it to his natural son Louis Friese. His death in 1384 marks the generation in which van Vlaenderen crystallises as a heritable surname among his bastard descendants.",
        src: 'Vredius, Tab. XVI; FMG MedLands [817]; Lauwens (2010)',
        color: C.root,
        ev: 'direct',
        w: 152,
        h: 76,
      },
    },

    // ── Gen 2 ────────────────────────────────────────────────────────────
    {
      id: 'fri',
      x: 464,
      y: Y_GEN2,
      cfg: {
        name: 'Louis Friese van Vlaenderen',
        dates: 'c.1350 – 28 Sep 1396 · Nicopolis',
        tag: 'LORD OF PRAET & WOESTINE',
        body: "Natural son of Louis de Male by a daughter of Monsieur de Borre. Granted Praet c.1373. Twice married: first wife (unnamed, connected with La Woestine), then Marie van Gistel. Killed at Nicopolis alongside his brothers Louis le Haeze and Jean sans terre.",
        src: 'Vredius, Tab. XVI; FMG MedLands [864–869]; Espinoy (1631)',
        color: '#4ade80',
        ev: 'direct',
        w: 192,
        h: 84,
      },
    },

    // ── Gen 3 ────────────────────────────────────────────────────────────
    {
      id: 'j1',
      x: 474,
      y: Y_GEN3,
      cfg: {
        name: 'Johan I van Vlaenderen',
        dates: 'd. after 10 Sep 1439',
        tag: 'LORD OF PRAET',
        body: "Son of Louis Friese. Issued own charter as Lord of Praet 10 Sep 1439. Married Johanna van Reygersvliet. Five documented children, named individually in the Gen 4 row below.",
        src: 'FMG MedLands [872, 873, 875]',
        color: '#4ade80',
        ev: 'direct',
        w: 172,
        h: 76,
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
        src: 'FMG MedLands [883–885]',
        color: '#4ade80',
        ev: 'unknown',
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
        src: 'Vredius MS via FMG MedLands [886]; Grimarez',
        color: C.blue,
        ev: 'unknown',
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
        tag: 'LORD OF PRAET',
        body: "Son of Johan I. Married Louise de Bruges, daughter of Jan van de Aa Heer van Gruuthuse. Death in 1488 confirmed by the Aalter tomb epitaph; two primary sources disagree on the day — de l'Espinoy records St. Bartholomew (24 Aug), the Aalter tomb itself records St. Bavo (1 Oct). Six documented children, named individually in the Gen 5 row below.",
        src: 'Vredius p. 277–278; FMG MedLands [876, 878]; Bethune (1900)',
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
        src: 'FMG MedLands [887]',
        color: '#4ade80',
        ev: 'unknown',
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
        src: 'FMG MedLands [888]',
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
        body: "Daughter of Lodewijk II by Louise de Bruges. Named in Damhouder's list of the six children (Vredius p. 278) but with no further biographical detail in the sources reviewed.",
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
        body: "Son of Lodewijk II by Louise de Bruges. Named in Damhouder's list of the six children (Vredius p. 278) but with no further biographical detail in the sources reviewed.",
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
        dates: 'd. 1488 / 1490',
        tag: 'LORD OF PRAET',
        body: "Son of Lodewijk II. Married Isabelle de Bourgogne (d. 12 Nov 1504, bur Gent). Two primary sources disagree by two years — Grimarez records 1 January 1488, the Aalter tomb inscription records a Monday in 1490. The discrepancy may reflect Easter-style year-change conventions.",
        src: 'Vredius p. 279; FMG MedLands [889, 890]; Bethune (1900)',
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
        dates: 'd. 6 Sep 1523',
        body: "Son of Lodewijk II. Heer van Onlede en Beveren bij Roeselare; Grand Bailiff of Bruges and the Brugse Vrije. Died without surviving male issue; lordships passed to brother Josse in 1523.",
        src: 'Beveren tomb via Vredius p. 280; FMG MedLands [879]',
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
        name: 'Josse\nde Flandre',
        dates: 'd. after 1526',
        tag: 'LINE TO 1592',
        body: "Son of Lodewijk II. Inherited Onlede, Beveren, and Wijchuize after his brother Jean's death in 1523. Married Martina van Moerkerke; his cadet branch survived to at least 1592 per Buylaert. The most significant documented cadet branch of the Praet line.",
        src: 'Damhouder via Vredius p. 278; Buylaert via FMG MedLands [881, 882]',
        color: '#4ade80',
        ev: 'direct',
        w: NODE_W,
        h: NODE_H_STD,
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
        dates: 'd. 1556 · m. Jossine van Praet',
        tag: 'GOLDEN FLEECE 1531',
        body: "Grand Bailiff of Ghent and Bruges. Stadtholder of Holland and Zeeland 1544–46. Advisor to Emperor Charles V. The Aalter tomb preserves his full titulature. 1517 charter: holds 6 fiefs at Knesselare from the Wessegem seigneurie — direct territorial link to the Meetjesland.",
        src: 'Vredius p. 387; FMG MedLands [891–893]; Valkeneers & Soen (2015)',
        color: '#4ade80',
        ev: 'direct',
        focus: true,
        w: 136,
        h: 94,
      },
    },

    // ── Gen 7 — Jan II (legitimate line ends) ────────────────────────────
    {
      id: 'j2',
      x: nx(G5_C3, 136),
      y: Y_GEN7,
      cfg: {
        name: 'Jan II\nvan Vlaenderen',
        dates: 'd. 10 Dec 1545',
        body: "Only son of Lodewijk IV. Heer van Woestine, Elverdinghe, and Vlamertinghe. Predeceased his father by approximately a decade, dying without issue. Widow Jacqueline de Bourgogne remarried and died in childbirth 1556. Legitimate Praet male line extinct 1545.",
        src: 'Vredius p. 388; FMG MedLands [894, 895]',
        color: '#4ade80',
        ev: 'ends',
        w: 136,
        h: 82,
      },
    },
  ],

  connections: [
    { from: 'lm', to: 'fri', color: LINE },
    { from: 'fri', to: 'j1', color: LINE },
    { from: 'j1', to: 'ioanna', color: LINE },
    { from: 'j1', to: 'margareta', color: LINE },
    { from: 'j1', to: 'l2', color: LINE },
    { from: 'j1', to: 'lisbette', color: LINE },
    { from: 'j1', to: 'landrada', color: LINE },
    { from: 'l2', to: 'louise', color: LINE },
    { from: 'l2', to: 'jaques', color: LINE },
    { from: 'l2', to: 'l3', color: LINE },
    { from: 'l2', to: 'jean', color: LINE },
    { from: 'l2', to: 'josse', color: LINE },
    { from: 'l2', to: 'iehenne', color: LINE },
    { from: 'l3', to: 'l4', color: LINE },
    { from: 'l4', to: 'j2', color: LINE },
  ],

  labels: [
    { x: 560, y: 340, text: "JOHAN I'S FIVE CHILDREN", color: '#8a8f9e', size: 10 },
    { x: 500, y: 470, text: "LODEWIJK II'S SIX CHILDREN", color: '#8a8f9e', size: 10 },
  ],

  annotations: [
    {
      x: G5_C3 + 80,
      y: Y_GEN6 + 40,
      text: '← 1517: 6 fiefs at Knesselare (Meetjesland)',
      color: '#d4a830',
    },
  ],

  legendItems: [
    { color: C.root,    label: 'Comital source' },
    { color: '#4ade80', label: 'Directly Attested' },
    { color: C.blue,    label: 'Strongly Corroborated' },
    { color: '#fbbf24', label: 'Probable' },
    { color: '#f87171', label: 'Hypothesis' },
  ],
};

export default function PraetDiagram() {
  return (
    <LineageDiagram
      diagram={diagram}
      title="The House of Flanders-Praet — Seven Generations"
      subtitle="Louis Friese / Praet Line"
    />
  );
}
