import LineageDiagram, { C, type DiagramDef } from './DiagramEngine';

// Layout strategy:
// - Johan I's five documented children: Lodewijk II (the heir, in the Gen 3 row),
//   plus Jeanne, Marguerite/Isabelle/Landrade (as combined card) — the Gen 3 sibling row.
// - Lodewijk II's children Jean and Josse (Gen 4 cadet branches) — positioned in
//   a new row below Lodewijk II, flanking the main descent to Lodewijk III.
// - Main descent continues: Lodewijk III (Gen 4 main line) → Lodewijk IV → Jan II.
// - Canvas widened to 1100px to accommodate the Gen 3 horizontal spread.
// - ViewBox height increased to 1140px to accommodate the new Gen 4 cadet row.

const ROW_Y = 370;
const CADET_ROW_Y = 510;
const NODE_W = 180;
const GAP = 25;
const START_X = 40;

// X positions for the Gen 3 row (center X3) and Gen 4 cadet row (X2, X4 flanking)
const X1 = START_X;
const X2 = X1 + NODE_W + GAP;
const X3 = X2 + NODE_W + GAP; // center column — main descent line
const X4 = X3 + NODE_W + GAP;

const diagram: DiagramDef = {
  viewBox: '0 0 1100 1140',
  nodes: [
    {
      id: 'lm', x: X3, y: 18,
      cfg: {
        name: 'Louis II de Male', dates: 'Count of Flanders · 1330–1384',
        body: "In 1373 purchased the leengoed of Praet in Oedelem from the van Praet family, then granted it to his natural son Louis Friese.",
        src: 'FMG MedLands [817]; Lauwens (2010)',
        color: C.root, ev: 'direct', w: 200, h: 65,
      },
    },
    {
      id: 'fri', x: X3 - 5, y: 125,
      cfg: {
        name: 'Louis Friese van Vlaenderen', dates: 'c.1350 – 28 Sep 1396',
        tag: 'LORD OF PRAET & WOESTINE',
        body: "Natural son of Louis de Male by a daughter of Monsieur de Borre. Praet granted c.1373. Married (2nd) Marie van Gistel. Killed at Nicopolis.",
        src: 'FMG MedLands [864–869]; Vredius (1643); Espinoy (1631)',
        color: C.praet, ev: 'direct', w: 210, h: 84,
      },
    },
    {
      id: 'j1', x: X3, y: 250,
      cfg: {
        name: 'Johan I van Vlaenderen', dates: 'd. after 10 Sep 1439',
        tag: 'LORD OF PRAET',
        body: "Son of Louis Friese. Issued own charter as Lord of Praet 10 Sep 1439. Married Johanna van Reygersvliet. Had five documented children (see sibling row below).",
        src: 'FMG MedLands [872,873,875]',
        color: C.praet, ev: 'direct', w: 200, h: 82,
      },
    },
    // ── Gen 4 Cadet Row: Lodewijk II's sons Jean & Josse (cadet branches) ──
    {
      id: 'jean', x: X2, y: CADET_ROW_Y,
      cfg: {
        name: 'Jean de Flandre', dates: 'd. 6 Sep 1523',
        body: "Son of Lodewijk II (grandson of Johan I). Heer van Onlede en Beveren. Grand Bailiff of Bruges. Married Marguerite Boulengier.",
        src: 'FMG MedLands [879,880]',
        color: C.blue, ev: 'direct', w: NODE_W, h: 60,
      },
    },
    {
      id: 'josse', x: X4, y: CADET_ROW_Y,
      cfg: {
        name: 'Josse de Flandre', dates: 'd. after 1526',
        tag: 'LINE TO 1592',
        body: "Son of Lodewijk II (grandson of Johan I). Inherited lordships of Onlede, Bevere and Wijchuize from his brother Jean in 1523. Married Martina van Moerkerke. Multiple children; family survived to at least 1592.",
        src: 'FMG MedLands [881,882]; Buylaert',
        color: C.blue, ev: 'direct', w: NODE_W, h: 74,
      },
    },
    // ── The Gen 3 Sibling Row: Johan I's five children (Lodewijk II + four others) ──
    {
      id: 'l2', x: X3, y: ROW_Y,
      cfg: {
        name: 'Lodewijk II van Vlaenderen', dates: 'd. 24 Aug 1488',
        tag: 'LORD OF PRAET, WOESTINE, BEVERE',
        body: "Son of Johan I. Married Louise de Bruges, daughter of Jan van de Aa Heer van Gruuthuse. Death confirmed by epitaph at Aeltere.",
        src: 'FMG MedLands [876,878]; Bethune (1900)',
        color: C.praet, ev: 'direct', w: 200, h: 82,
      },
    },
    {
      id: 'jeanne', x: X2, y: ROW_Y,
      cfg: {
        name: 'Jeanne de Flandre', dates: 'd. after 1446',
        body: "Daughter of Johan I. Married Jean Seigneur de Poucques, Vicomte d'Ypres. Documented in charter 24 Jan 1441 and document 1446.",
        src: 'FMG MedLands [883–885]',
        color: C.blue, ev: 'direct', w: NODE_W, h: 60,
      },
    },
    {
      id: 'oth', x: X4, y: ROW_Y,
      cfg: {
        name: 'Marguerite · Isabelle\nLandrade de Flandre', dates: 'fl. c.1440s–60s',
        body: "Three further daughters of Johan I. Marguerite married Louis de Bailleul; Isabelle married Waleran de Landas; Landrade became Canoness at Mons Sainte-Waudru.",
        src: 'FMG MedLands [886,887,888]; Vredius (1643)',
        color: C.blue, ev: 'strong', w: NODE_W, h: 72,
      },
    },
    // ── Continuation of Main Line ────────────────────────────────────────
    {
      id: 'l3', x: X3, y: 650,
      cfg: {
        name: 'Lodewijk III van Vlaenderen', dates: 'd. 1 Jan 1490',
        tag: 'LORD OF PRAET',
        body: "Son of Lodewijk II. Married Isabelle de Bourgogne (d. 12 Nov 1504, bur Gent). Death 1 January 1490 confirmed by epitaph at Aeltere.",
        src: 'FMG MedLands [889,890]; Bethune (1900)',
        color: C.praet, ev: 'direct', w: 200, h: 82,
      },
    },
    {
      id: 'l4', x: X3 - 6, y: 770,
      cfg: {
        name: 'Lodewijk IV van Vlaenderen', dates: 'd. 1556',
        tag: 'KNIGHT OF THE GOLDEN FLEECE 1531',
        body: "Grand Bailiff of Ghent and Bruges. Stadtholder Holland & Zeeland 1544–46. Advisor to Charles V. 1517 charter: holds 6 fiefs at Knesselare from the Wessegem seigneurie — direct Meetjesland territorial connection.",
        src: 'FMG MedLands [891–893]; Valkeneers & Soen (2015); Wikipedia',
        color: C.focus, ev: 'focus', focus: true, w: 212, h: 88,
      },
    },
    {
      id: 'j2', x: X3, y: 900,
      cfg: {
        name: 'Jan II van Vlaenderen', dates: 'd. 10 Dec 1545',
        tag: 'LEGITIMATE LINE ENDS',
        body: "Only son of Lodewijk IV. Predeceased father without issue. Widow Jacqueline de Bourgogne remarried and died in childbirth 1556.",
        src: 'FMG MedLands [894,895]; epitaph Aeltere',
        color: C.red, ev: 'ends', w: 200, h: 76,
      },
    },
  ],
  connections: [
    { from: 'lm',  to: 'fri', color: C.praet },
    { from: 'fri', to: 'j1',  color: C.praet },
    // Johan I to his five documented children
    { from: 'j1',  to: 'l2',    color: C.praet },
    { from: 'j1',  to: 'jeanne', color: C.blue },
    { from: 'j1',  to: 'oth',   color: C.blue },
    // Lodewijk II to his children Jean and Josse (Gen 4 cadet row)
    { from: 'l2',  to: 'jean',  color: C.blue },
    { from: 'l2',  to: 'josse', color: C.blue },
    // Descent from Lodewijk II (main line)
    { from: 'l2',  to: 'l3',  color: C.praet },
    { from: 'l3',  to: 'l4',  color: C.praet },
    { from: 'l4',  to: 'j2',  color: C.red },
  ],
  labels: [
    { x: X3, y: 350, text: "CHILDREN OF JOHAN I (SIBLINGS)", color: '#f0e8d0' },
    { x: X3, y: 490, text: "CADET BRANCHES OF LODEWIJK II", color: '#f0e8d0' },
  ],
  annotations: [
    { x: X3 + 220, y: 820, text: '\u2190 1517: 6 fiefs at Knesselare (Meetjesland)', color: C.focus },
  ],
  legendItems: [
    { color: '#4ade80', label: 'Directly attested (charter or epitaph)' },
    { color: '#fbbf24', label: 'Strongly corroborated' },
    { color: C.blue, label: 'Documented cadet branch' },
    { color: '#f87171', label: 'Legitimate line ends' },
  ],
};

export default function PraetDiagram() {
  return (
    <LineageDiagram
      diagram={diagram}
      title="The House of Flanders-Praet — Six Generations"
      subtitle="Louis Friese / Praet Line"
    />
  );
}
