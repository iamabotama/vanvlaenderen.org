import LineageDiagram, { C, type DiagramDef } from './DiagramEngine';

const diagram: DiagramDef = {
  viewBox: '0 0 920 520',
  nodes: [
    { id: 'lm', x: 360, y: 18, cfg: { name: 'Louis II de Male', dates: 'Count of Flanders \u00b7 1330\u20131384', body: "Father of Victor van Vlaenderen by his mistress Margaretha Haelshuuts \u2014 the only named mistress in the primary sources.", src: 'FMG MedLands [817,841]', color: C.root, ev: 'direct', w: 200, h: 55 } },
    { id: 'vic', x: 352, y: 118, cfg: { name: 'Victor van Vlaenderen', dates: 'd. before 10 Mar 1442', tag: "SEIGNEUR D'URSELE ET WESSEGHEM", body: "Natural son of Louis de Male. Burgundian admiral; captain of Biervliet. Testament 1430 names brothers Robert and Karel as executors. Married Jeanne de Gavre 1420.", src: 'FMG MedLands [841\u2013845]', color: C.victor, ev: 'direct', w: 215, h: 74 } },
    { id: 'lod', x: 55, y: 250, cfg: { name: 'Lodewyc van Vlaendren', dates: 'fl. 1427\u20131442', tag: 'BY ALIX VAN BOYEGHEM', body: "Natural son. Named in charters of 1427 and 1441. Married Jacqueline de Wilde (-Apr 1482, bur Oostborch).", src: 'FMG MedLands [846,847]', color: C.victor, ev: 'direct', w: 165, h: 72 } },
    { id: 'jan_s', x: 372, y: 250, cfg: { name: 'Janne van Vlaendren', dates: 'fl. 1427\u20131442', tag: 'BY ALIX VAN BOYEGHEM', body: "Natural son. Named in charters of 1427 and 1441. No further records identified.", src: 'FMG MedLands [851,852]', color: C.victor, ev: 'direct', w: 165, h: 72 } },
    { id: 'adam', x: 660, y: 244, cfg: { name: 'Adam van Vlaendren', dates: 'fl. 1427 \u2013 18 Mar 1447 N.S.', tag: 'RESEARCH FOCUS', body: "Natural son by Gertrud Lindekens. Named in all three charters. Active donor in 1446 charter: \u2018Adam van Vlandren natuerlicke sone va mer Victor van Vlaendren, Rudder, Heer van Orsele en van Wesseghem.\u2019 Margriete Aelfhuuts still active patroness in 1446.", src: 'FMG MedLands [853\u2013855]; Vredius (1643) pp.285\u2013287', color: C.focus, ev: 'focus', focus: true, w: 190, h: 80 } },
    { id: 'josse_l', x: 18, y: 372, cfg: { name: 'Josse van Vlaenderen', dates: 'died young, bur Oostborch', body: "Son of Lodewyc. Died young. Cannot be the 1547 Brugse Vrije testator. Confirms the name Josse was in use in Victor\u2019s direct line in the mid-to-late 15th century.", src: 'FMG MedLands [849]; Bethune (1900) p.356', color: C.victor, ev: 'direct', w: 158, h: 50 } },
    { id: 'marg', x: 196, y: 372, cfg: { name: 'Margareta van Vlaenderen', dates: 'fl. 1478\u20131486', body: "Daughter of Lodewyc. Married firstly Lodewijk van Baenst Heer van Santvelde; secondly Adriaan van Schouteten Heer van Erpe. Documented in charters 1478 and 1486.", src: 'FMG MedLands [850]; Vredius (1643) p.287', color: C.victor, ev: 'direct', w: 162, h: 50 } },
    { id: 'gap', x: 660, y: 376, cfg: { name: 'EVIDENTIARY GAP', dates: 'c.1447 \u2013 1547  (~100 years)', body: "No documented generational link found. Archival targets: cijnsboeken and leenboeken (Ambacht Ursel / Maldegem), Staten van Goed, Raad van Vlaanderen (Rijksarchief Gent).", src: 'Research hypothesis', color: C.red, ev: 'hypo', w: 185, h: 50 } },
    { id: 'joos', x: 660, y: 462, cfg: { name: 'Joos van Vlaenderen', dates: 'fl. 1547', body: "Testator, Brugse Vrije 1548. First confirmed early modern bearer. Chronologically consistent with Adam\u2019s descent but no direct link demonstrated.", src: 'Staten van Goed, Brugse Vrije 1548 (TBO 184, bundle 21300)', color: C.blue, ev: 'parish', w: 185, h: 50 } },
  ],
  connections: [
    { from: 'lm', to: 'vic', color: C.victor },
    { from: 'vic', to: 'lod', color: C.victor },
    { from: 'vic', to: 'jan_s', color: C.victor },
    { from: 'vic', to: 'adam', color: C.focus },
    { from: 'lod', to: 'josse_l', color: C.victor },
    { from: 'lod', to: 'marg', color: C.victor },
    { from: 'adam', to: 'gap', color: C.red, dashed: true },
    { from: 'gap', to: 'joos', color: C.blue, dashed: true },
  ],
  legendItems: [
    { color: '#4ade80', label: 'Directly attested (charter)' },
    { color: C.focus, label: 'Research focus \u2014 bridge candidate' },
    { color: '#f87171', label: 'Evidentiary gap (c.1447\u20131547)' },
    { color: C.blue, label: 'Early modern \u2014 parish records' },
  ],
};

export default function VictorDiagram() {
  return (
    <LineageDiagram
      diagram={diagram}
      title="Victor van Vlaenderen \u2014 Documented Line and Evidentiary Gap"
      subtitle="Victor van Vlaenderen Page"
    />
  );
}
