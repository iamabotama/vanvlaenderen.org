import LineageDiagram, { C, type DiagramDef } from './DiagramEngine';

// Layout strategy:
// - Main line (Louis de Male → Louis Friese → Johan I → Lodewijk II → III → IV → Jan II)
//   is centred on x≈490 to leave room for cadets on the left.
// - Cadets (Jean, Josse, Jeanne, Marguerite·Isabelle·Landrade) are siblings of Lodewijk II —
//   all children of Johan I at the SAME generation. They are arranged in a horizontal row
//   at the same y-level as Lodewijk II (y=370).
// - Each cadet gets an individual line from Johan I (no lines between cadets).
// - Canvas widened to 1100px to accommodate the horizontal spread.

const CADET_Y = 370;  // same y as Lodewijk II — same generation
const CADET_W = 155;  // cadet node width
const CADET_H_BASE = 50;
const CADET_GAP = 14; // horizontal gap between cadet nodes

// Four cadets, total width = 4*155 + 3*14 = 662px
// Place them starting at x=18, ending at x=18+662=680
// Main line starts at x=450 (well to the right of the cadets)
const C1_X = 18;
const C2_X = C1_X + CADET_W + CADET_GAP;          // 187
const C3_X = C2_X + CADET_W + CADET_GAP;          // 356
const C4_X = C3_X + CADET_W + CADET_GAP;          // 525 — overlaps main line, shift right
// Actually recalculate with main line at x=700 to keep cadets fully left
// Main line centred at x=820 (node w=200, so left edge at 720)
// Cadets: 4 nodes * 155 + 3 * 14 = 662px wide, starting at x=18 → ends at 680
// Gap between last cadet right edge (680) and main line left edge (720) = 40px — fine

const ML = 720; // main line left edge (node w=200)

const diagram: DiagramDef = {
  viewBox: '0 0 1060 700',
  nodes: [
    // ── Main line ──────────────────────────────────────────────────────────
    {
      id: 'lm', x: ML, y: 18,
      cfg: {
        name: 'Louis II de Male', dates: 'Count of Flanders · 1330–1384',
        body: "In 1373 purchased the leengoed of Praet in Oedelem from the van Praet family, then granted it to his natural son Louis Friese.",
        src: 'FMG MedLands [817]; Lauwens (2010)',
        color: C.root, ev: 'direct', w: 200, h: 55,
      },
    },
    {
      id: 'fri', x: ML, y: 118,
      cfg: {
        name: 'Louis Friese van Vlaenderen', dates: 'c.1350 – 28 Sep 1396',
        tag: 'LORD OF PRAET & WOESTINE',
        body: "Natural son of Louis de Male by a daughter of Monsieur de Borre. Praet granted c.1373. Married (2nd) Marie van Gistel. Killed at Nicopolis.",
        src: 'FMG MedLands [864–869]; Vredius (1643); Espinoy (1631)',
        color: C.praet, ev: 'direct', w: 210, h: 74,
      },
    },
    {
      id: 'j1', x: ML, y: 240,
      cfg: {
        name: 'Johan I van Vlaenderen', dates: 'd. after 10 Sep 1439',
        tag: 'LORD OF PRAET',
        body: "Son of Louis Friese. Issued own charter as Lord of Praet 10 Sep 1439. Married Johanna van Reygersvliet. Had seven documented children.",
        src: 'FMG MedLands [872,873,875]',
        color: C.praet, ev: 'direct', w: 200, h: 72,
      },
    },
    {
      id: 'l2', x: ML, y: 370,
      cfg: {
        name: 'Lodewijk II van Vlaenderen', dates: 'd. 24 Aug 1488',
        tag: 'LORD OF PRAET, WOESTINE, BEVERE',
        body: "Son of Johan I. Married Louise de Bruges, daughter of Jan van de Aa Heer van Gruuthuse. Death confirmed by epitaph at Aeltere.",
        src: 'FMG MedLands [876,878]; Bethune (1900)',
        color: C.praet, ev: 'direct', w: 200, h: 72,
      },
    },
    {
      id: 'l3', x: ML, y: 490,
      cfg: {
        name: 'Lodewijk III van Vlaenderen', dates: 'd. 1 Jan 1490',
        tag: 'LORD OF PRAET',
        body: "Son of Lodewijk II. Married Isabelle de Bourgogne (d. 12 Nov 1504, bur Gent). Death 1 January 1490 confirmed by epitaph at Aeltere.",
        src: 'FMG MedLands [889,890]; Bethune (1900)',
        color: C.praet, ev: 'direct', w: 200, h: 72,
      },
    },
    {
      id: 'l4', x: ML - 3, y: 572,
      cfg: {
        name: 'Lodewijk IV van Vlaenderen', dates: 'd. 1555',
        tag: 'KNIGHT OF THE GOLDEN FLEECE 1531',
        body: "Grand Bailiff of Ghent and Bruges. Stadtholder Holland & Zeeland 1544–46. Advisor to Charles V. 1517 charter: holds 6 fiefs at Knesselare from the Wessegem seigneurie — direct Meetjesland territorial connection.",
        src: 'FMG MedLands [891–893]; Wikipedia',
        color: C.focus, ev: 'focus', focus: true, w: 212, h: 78,
      },
    },
    {
      id: 'j2', x: ML, y: 662,
      cfg: {
        name: 'Jan II van Vlaenderen', dates: 'd. 10 Dec 1545',
        tag: 'LEGITIMATE LINE ENDS',
        body: "Only son of Lodewijk IV. Predeceased father without issue. Widow Jacqueline de Bourgogne remarried and died in childbirth 1556.",
        src: 'FMG MedLands [894,895]; epitaph Aeltere',
        color: C.red, ev: 'ends', w: 200, h: 66,
      },
    },

    // ── Cadet siblings — same generation as Lodewijk II ───────────────────
    // All at y = CADET_Y (370), arranged left-to-right
    {
      id: 'jean', x: C1_X, y: CADET_Y,
      cfg: {
        name: 'Jean de Flandre', dates: 'd. 6 Sep 1523',
        body: "Son of Johan I. Heer van Onlede en Beveren. Grand Bailiff of Bruges. Married Marguerite Boulengier.",
        src: 'FMG MedLands [879,880]',
        color: C.blue, ev: 'direct', w: CADET_W, h: CADET_H_BASE,
      },
    },
    {
      id: 'josse', x: C2_X, y: CADET_Y,
      cfg: {
        name: 'Josse de Flandre', dates: 'd. after 1526',
        tag: 'LINE TO 1592',
        body: "Son of Johan I. Inherited lordships of Onlede, Bevere and Wijchuize 1523. Married Martina van Moerkerke. Multiple children; family survived to at least 1592.",
        src: 'FMG MedLands [881,882]; Buylaert',
        color: C.blue, ev: 'direct', w: CADET_W, h: 64,
      },
    },
    {
      id: 'jeanne', x: C3_X, y: CADET_Y,
      cfg: {
        name: 'Jeanne de Flandre', dates: 'd. after 1446',
        body: "Daughter of Johan I. Married Jean Seigneur de Poucques, Vicomte d'Ypres. Documented in charter 24 Jan 1441 and document 1446.",
        src: 'FMG MedLands [883–885]',
        color: C.blue, ev: 'direct', w: CADET_W, h: CADET_H_BASE,
      },
    },
    {
      id: 'oth', x: C4_X, y: CADET_Y,
      cfg: {
        name: 'Marguerite · Isabelle\nLandrade de Flandre', dates: 'fl. c.1440s–60s',
        body: "Three further daughters of Johan I. Marguerite married Louis de Bailleul; Isabelle married Waleran de Landas; Landrade became Canoness at Mons Sainte-Waudru.",
        src: 'FMG MedLands [886,887,888]; Vredius (1643)',
        color: C.blue, ev: 'strong', w: CADET_W, h: 62,
      },
    },
  ],
  connections: [
    // Main line — vertical chain
    { from: 'lm',  to: 'fri', color: C.praet },
    { from: 'fri', to: 'j1',  color: C.praet },
    { from: 'j1',  to: 'l2',  color: C.praet },
    { from: 'l2',  to: 'l3',  color: C.praet },
    { from: 'l3',  to: 'l4',  color: C.praet },
    { from: 'l4',  to: 'j2',  color: C.red },
    // Cadet branches — each is a direct child of Johan I, no inter-cadet lines
    { from: 'j1', to: 'jean',  color: C.blue },
    { from: 'j1', to: 'josse', color: C.blue },
    { from: 'j1', to: 'jeanne', color: C.blue },
    { from: 'j1', to: 'oth',   color: C.blue },
  ],
  labels: [
    // Label sits above the cadet row, centred over the four nodes
    // Centre of cadet row: (C1_X + C4_X + CADET_W) / 2 ≈ (18 + 525 + 155) / 2 = 349
    { x: 349, y: 350, text: 'CADET BRANCHES FROM JOHAN I', color: C.praet },
  ],
  annotations: [
    { x: 650, y: 618, text: '← 1517: 6 fiefs at Knesselare (Meetjesland)', color: C.focus },
  ],
  legendItems: [
    { color: '#4ade80', label: 'Directly attested (charter or epitaph)' },
    { color: '#fbbf24', label: 'Strongly corroborated' },
    { color: C.blue, label: 'Documented cadet branch (same generation as Lodewijk II)' },
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
