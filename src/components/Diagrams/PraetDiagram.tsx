import LineageDiagram, { C, type DiagramDef } from './DiagramEngine';

const diagram: DiagramDef = {
  viewBox: '0 0 920 720',
  nodes: [
    { id: 'lm', x: 360, y: 18, cfg: { name: 'Louis II de Male', dates: 'Count of Flanders \u00b7 1330\u20131384', body: "In 1373 purchased the leengoed of Praet in Oedelem from the van Praet family, then granted it to his natural son Louis Friese.", src: 'FMG MedLands [817]; Lauwens (2010)', color: C.root, ev: 'direct', w: 200, h: 55 } },
    { id: 'fri', x: 355, y: 120, cfg: { name: 'Louis Friese van Vlaenderen', dates: 'c.1350 \u2013 28 Sep 1396', tag: 'LORD OF PRAET & WOESTINE', body: "Natural son of Louis de Male by a daughter of Monsieur de Borre. Praet granted c.1373. Married (2nd) Marie van Gistel. Killed at Nicopolis.", src: 'FMG MedLands [864\u2013869]; Vredius (1643); Espinoy (1631)', color: C.praet, ev: 'direct', w: 210, h: 74 } },
    { id: 'j1', x: 360, y: 240, cfg: { name: 'Johan I van Vlaenderen', dates: 'd. after 10 Sep 1439', tag: 'LORD OF PRAET', body: "Son of Louis Friese. Issued own charter as Lord of Praet 10 Sep 1439. Married Johanna van Reygersvliet. Had seven documented children.", src: 'FMG MedLands [872,873,875]', color: C.praet, ev: 'direct', w: 200, h: 72 } },
    { id: 'l2', x: 360, y: 358, cfg: { name: 'Lodewijk II van Vlaenderen', dates: 'd. 24 Aug 1488', tag: 'LORD OF PRAET, WOESTINE, BEVERE', body: "Son of Johan I. Married Louise de Bruges, daughter of Jan van de Aa Heer van Gruuthuse. Death confirmed by epitaph at Aeltere.", src: 'FMG MedLands [876,878]; Bethune (1900)', color: C.praet, ev: 'direct', w: 200, h: 72 } },
    { id: 'l3', x: 360, y: 476, cfg: { name: 'Lodewijk III van Vlaenderen', dates: 'd. 1 Jan 1490', tag: 'LORD OF PRAET', body: "Son of Lodewijk II. Married Isabelle de Bourgogne (d. 12 Nov 1504, bur Gent). Death 1 January 1490 confirmed by epitaph at Aeltere.", src: 'FMG MedLands [889,890]; Bethune (1900)', color: C.praet, ev: 'direct', w: 200, h: 72 } },
    { id: 'l4', x: 354, y: 555, cfg: { name: 'Lodewijk IV van Vlaenderen', dates: 'd. 1555', tag: 'KNIGHT OF THE GOLDEN FLEECE 1531', body: "Grand Bailiff of Ghent and Bruges. Stadtholder Holland & Zeeland 1544\u201346. Advisor to Charles V. 1517 charter: holds 6 fiefs at Knesselare from the Wessegem seigneurie \u2014 direct Meetjesland territorial connection.", src: 'FMG MedLands [891\u2013893]; Wikipedia', color: C.focus, ev: 'focus', focus: true, w: 212, h: 78 } },
    { id: 'j2', x: 360, y: 648, cfg: { name: 'Jan II van Vlaenderen', dates: 'd. 10 Dec 1545', tag: 'LEGITIMATE LINE ENDS', body: "Only son of Lodewijk IV. Predeceased father without issue. Widow Jacqueline de Bourgogne remarried and died in childbirth 1556.", src: 'FMG MedLands [894,895]; epitaph Aeltere', color: C.red, ev: 'ends', w: 200, h: 66 } },
    // Cadet branches
    { id: 'jean', x: 30, y: 326, cfg: { name: 'Jean de Flandre', dates: 'd. 6 Sep 1523', body: "Son of Johan I. Heer van Onlede en Beveren. Grand Bailiff of Bruges. Married Marguerite Boulengier.", src: 'FMG MedLands [879,880]', color: C.blue, ev: 'direct', w: 150, h: 50 } },
    { id: 'josse', x: 30, y: 396, cfg: { name: 'Josse de Flandre', dates: 'd. after 1526', tag: 'LINE TO 1592', body: "Son of Johan I. Inherited lordships of Onlede, Bevere and Wijchuize 1523. Married Martina van Moerkerke. Multiple children; family survived to at least 1592.", src: 'FMG MedLands [881,882]; Buylaert', color: C.blue, ev: 'direct', w: 150, h: 64 } },
    { id: 'jeanne', x: 30, y: 478, cfg: { name: 'Jeanne de Flandre', dates: 'd. after 1446', body: "Daughter of Johan I. Married Jean Seigneur de Poucques, Vicomte d\u2019Ypres. Documented in charter 24 Jan 1441 and document 1446.", src: 'FMG MedLands [883\u2013885]', color: C.blue, ev: 'direct', w: 150, h: 50 } },
    { id: 'oth', x: 30, y: 546, cfg: { name: 'Marguerite \u00b7 Isabelle\nLandrade de Flandre', dates: 'fl. c.1440s\u201360s', body: "Three further daughters of Johan I. Marguerite married Louis de Bailleul; Isabelle married Waleran de Landas; Landrade became Canoness at Mons Sainte-Waudru.", src: 'FMG MedLands [886,887,888]; Vredius (1643)', color: C.blue, ev: 'strong', w: 150, h: 62 } },
  ],
  connections: [
    { from: 'lm', to: 'fri', color: C.praet },
    { from: 'fri', to: 'j1', color: C.praet },
    { from: 'j1', to: 'l2', color: C.praet },
    { from: 'l2', to: 'l3', color: C.praet },
    { from: 'l3', to: 'l4', color: C.praet },
    { from: 'l4', to: 'j2', color: C.red },
    { from: 'j1', to: 'jean', color: C.blue },
    { from: 'j1', to: 'josse', color: C.blue },
    { from: 'j1', to: 'jeanne', color: C.blue },
    { from: 'j1', to: 'oth', color: C.blue },
  ],
  labels: [
    { x: 152, y: 228, text: 'CADET BRANCHES FROM JOHAN I', color: C.praet + '77' },
  ],
  annotations: [
    { x: 580, y: 600, text: '\u2190 1517: 6 fiefs at Knesselare (Meetjesland)', color: C.focus + 'aa' },
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
      title="The House of Flanders-Praet \u2014 Six Generations"
      subtitle="Louis Friese / Praet Line"
    />
  );
}
