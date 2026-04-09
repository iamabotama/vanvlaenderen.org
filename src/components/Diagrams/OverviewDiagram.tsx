import LineageDiagram, { C, type DiagramDef } from './DiagramEngine';

const diagram: DiagramDef = {
  viewBox: '0 0 920 580',
  nodes: [
    { id: 'lm', x: 350, y: 20, cfg: { name: 'Louis II de Male', dates: 'Count of Flanders · 1330–1384', tag: 'HOUSE OF DAMPIERRE · LAST COUNT', body: "Fathered at least 13 illegitimate children. His death in 1384 ended Dampierre rule — the moment van Vlaenderen crystallises as a heritable surname among his bastard children.", src: 'Wikipedia; FMG MedLands [817]', color: C.root, ev: 'direct', w: 220, h: 76 } },
    { id: 'vic', x: 90, y: 145, cfg: { name: 'Victor van Vlaenderen', dates: 'd. before 10 Mar 1442', tag: 'LORD OF URSEL & WESSEGEM', body: "Natural son of Louis de Male. Lord of Ursel and Wessegem. Burgundian admiral; captain of Biervliet. Three natural sons documented in primary charters 1427–1447.", src: 'FMG MedLands [841–855]', color: C.victor, ev: 'direct', w: 185, h: 76 } },
    { id: 'lod', x: 18, y: 275, cfg: { name: 'Lodewyc van Vlaendren', dates: 'fl. 1427–1442', body: "Natural son by Alix van Boyeghem. Married Jacqueline de Wilde. Son Josse died young; daughter Margareta married into noble families.", src: 'FMG MedLands [846–850]', color: C.victor, ev: 'direct', w: 155, h: 55 } },
    { id: 'jan', x: 188, y: 275, cfg: { name: 'Janne van Vlaendren', dates: 'fl. 1427–1442', body: "Natural son by Alix van Boyeghem. No records after 1442.", src: 'FMG MedLands [851,852]', color: C.victor, ev: 'direct', w: 150, h: 55 } },
    { id: 'adam', x: 360, y: 268, cfg: { name: 'Adam van Vlaendren', dates: 'fl. 1427 – 18 Mar 1447 N.S.', tag: 'RESEARCH FOCUS', body: "Natural son by Gertrud Lindekens. Named in all three charters (1427, 1441, 1446). Active donor in the 1446/1447 charter: 'Adam van Vlandren natuerlicke sone va mer Victor van Vlaendren, Rudder, Heer van Orsele en van Wesseghem.' Last confirmed 15th-century bearer.", src: 'FMG MedLands [853–855]; Vredius (1443) pp.285–287', color: C.focus, ev: 'focus', focus: true, w: 168, h: 74 } },
    { id: 'gap', x: 360, y: 390, cfg: { name: 'EVIDENTIARY GAP', dates: 'c.1447 – 1547', body: "~100 years between Adam (last confirmed 1447) and Joos (1547). Archival targets: cijnsboeken, leenboeken, and Staten van Goed (Ambacht Ursel / Maldegem).", src: 'Research hypothesis; Rijksarchief Gent', color: C.red, ev: 'hypo', w: 168, h: 50 } },
    { id: 'joos', x: 360, y: 472, cfg: { name: 'Joos van Vlaenderen', dates: 'fl. 1547', body: "Testator, Brugse Vrije 1547. Earliest confirmed early modern bearer. No direct genealogical link to Adam yet demonstrated.", src: 'Staten van Goed, Brugse Vrije 1548 (TBO 184, bundle 21300)', color: C.blue, ev: 'parish', w: 168, h: 50 } },
    { id: 'fri', x: 648, y: 145, cfg: { name: 'Louis Friese van Vlaenderen', dates: 'c.1350 – 28 Sep 1396', tag: 'LORD OF PRAET & WOESTINE', body: "Natural son of Louis de Male. Killed at Nicopolis. Founded the House of Flanders-Praet — six generations using van Vlaenderen as hereditary surname.", src: 'FMG MedLands [864–869]', color: C.praet, ev: 'direct', w: 195, h: 76 } },
    { id: 'j1', x: 653, y: 268, cfg: { name: 'Johan I van Vlaenderen', dates: 'd. after 10 Sep 1439', body: "Own charter as Lord of Praet 10 Sep 1439. Seven documented children.", src: 'FMG MedLands [872,873]', color: C.praet, ev: 'direct', w: 185, h: 55 } },
    { id: 'l4', x: 653, y: 368, cfg: { name: 'Lodewijk IV van Vlaenderen', dates: 'd. 1555', tag: 'GOLDEN FLEECE 1531', body: "Grand Bailiff of Ghent and Bruges. Advisor to Charles V. 1517 charter: holds 6 fiefs at Knesselare from Wessegem seigneurie — Meetjesland territorial link.", src: 'FMG MedLands [891–893]; Wikipedia', color: C.focus, ev: 'focus', focus: true, w: 185, h: 74 } },
    { id: 'j2', x: 653, y: 480, cfg: { name: 'Jan II van Vlaenderen', dates: 'd. 10 Dec 1545', tag: 'LEGITIMATE LINE ENDS', body: "Only son of Lodewijk IV. Predeceased father without issue. Legitimate Praet male line ends here.", src: 'FMG MedLands [894,895]; epitaph Aeltere', color: C.red, ev: 'ends', w: 185, h: 66 } },
  ],
  connections: [
    { from: 'lm', to: 'vic', color: C.victor },
    { from: 'lm', to: 'fri', color: C.praet },
    { from: 'vic', to: 'lod', color: C.victor },
    { from: 'vic', to: 'jan', color: C.victor },
    { from: 'vic', to: 'adam', color: C.focus },
    { from: 'adam', to: 'gap', color: C.red, dashed: true },
    { from: 'gap', to: 'joos', color: C.blue, dashed: true },
    { from: 'fri', to: 'j1', color: C.praet },
    { from: 'j1', to: 'l4', color: C.praet, dashed: true },
    { from: 'l4', to: 'j2', color: C.red },
  ],
  labels: [
    { x: 183, y: 125, text: "VICTOR'S LINE", color: C.victor },
    { x: 745, y: 125, text: 'PRAET LINE', color: C.praet },
  ],
  annotations: [
    { x: 460, y: 108, text: '13 documented illegitimate children — two surname-bearing lines shown', color: '#f0e8d0' },
    { x: 680, y: 346, text: '(Lodewijk II and III — see Diagram 3)', color: '#d0d4dc' },
  ],
  legendItems: [
    { color: C.root, label: 'Comital source' },
    { color: C.victor, label: "Victor's line" },
    { color: C.praet, label: 'Praet line' },
    { color: '#4ade80', label: 'Directly attested' },
    { color: C.focus, label: 'Research focus' },
    { color: '#f87171', label: 'Unproven / line ends' },
    { color: C.blue, label: 'Parish-record era' },
  ],
};

export default function OverviewDiagram() {
  return (
    <LineageDiagram
      diagram={diagram}
      subtitle="Research Overview"
    />
  );
}
