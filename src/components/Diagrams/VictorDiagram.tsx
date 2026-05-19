import LineageDiagram, { C, type DiagramDef } from './DiagramEngine';

// ─────────────────────────────────────────────────────────────────────────────
// Victor van Vlaenderen — Documented Line
//
// Four generations of direct natural descent, medieval scope only. Adam's
// last attestation (1447) ends the direct documentary line. Phase 2 adds
// Isabelle van Vlaenderen as a fourth gen-3 sibling on the matrilineal
// side — the chronicle-attested bridge to Nicolaes Despars's wife Anne
// Avesoete (m. 1549). The full six-generation matrilineal chain lives in
// the Despars Compendium; Isabelle anchors the bridge on this diagram.
//
// Locked visual rules: see PraetDiagram.tsx header for full rationale.
//   Color = record confidence.
//   Glyph below card = descendant status (†, ?, ×).
//   Star badge = research focus (on Adam).
// ─────────────────────────────────────────────────────────────────────────────

const LINE = '#5a6378';

const diagram: DiagramDef = {
  viewBox: '0 0 1100 660',

  nodes: [
    // ── Gen 1: Louis II de Male ──────────────────────────────────────────
    {
      id: 'lm',
      x: 384,
      y: 40,
      cfg: {
        name: 'Louis II de Male',
        dates: 'Count of Flanders · 1330–1384',
        body: "Father of Victor van Vlaenderen by his mistress Margaretha Haelshuuts — the only named mistress in the primary sources.",
        src: 'FMG MedLands [817, 841]',
        color: C.root,
        ev: 'direct',
        w: 152,
        h: 56,
      },
    },

    // ── Gen 2: Victor van Vlaenderen ─────────────────────────────────────
    {
      id: 'vic',
      x: 334,
      y: 140,
      cfg: {
        name: 'Victor van Vlaenderen',
        dates: 'd. 1431, Saint-Omer',
        tag: "SEIGNEUR D'URSELE ET WESSEGHEM",
        body: "Natural son of Louis de Male. Burgundian admiral; captain of Biervliet. Testament 1430 names brothers Robert and Karel as executors. Married Jeanne de Gavre 1420. Three natural sons documented across three primary charters (1427, 1441, 1446) by two mistresses: Lodewyc and Janne by Alix van Boyeghem; Adam by Gertrud Lindekens. Nicolaes Despars's Cronijcke (Vol. III pp. 114–115) names a fourth child, Isabelle, the matrilineal ancestress of the chronicler's wife — see her node and the Despars Compendium for the descent chain.",
        src: 'FMG MedLands [841–845]; Vredius (1643) pp.285–287; Despars Cronijcke Vol. III pp. 114–115',
        color: '#4ade80',
        ev: 'direct',
        w: 252,
        h: 96,
      },
    },

    // ── Gen 3: Three documented natural sons + Isabelle (matrilineal) ────
    {
      id: 'lod',
      x: 86,
      y: 288,
      cfg: {
        name: 'Lodewyc\nvan Vlaendren',
        dates: 'fl. 1427–1442 · by Alix van Boyeghem',
        tag: 'CHARTERS 1427 · 1441',
        body: "Natural son of Victor. Named in charters of 1427 and 1441. Married Jacqueline de Wilde (-Apr 1482, bur Oostborch). Two documented children shown in Gen 4.",
        src: 'FMG MedLands [846, 847]',
        color: '#4ade80',
        ev: 'direct',
        w: 188,
        h: 112,
      },
    },
    {
      id: 'jan_s',
      x: 366,
      y: 288,
      cfg: {
        name: 'Janne\nvan Vlaendren',
        dates: 'fl. 1427–1442 · by Alix van Boyeghem',
        tag: 'CHARTERS 1427 · 1441',
        body: "Natural son of Victor. Named in charters of 1427 and 1441. No further records identified — source silent on marriage, children, or death date.",
        src: 'FMG MedLands [851, 852]',
        color: '#4ade80',
        ev: 'unknown',
        w: 188,
        h: 112,
      },
    },
    {
      id: 'adam',
      x: 642,
      y: 288,
      cfg: {
        name: 'Adam\nvan Vlaendren',
        dates: 'fl. 1427 – 18 Mar 1447 N.S. · by Gertrud Lindekens',
        tag: 'LAST ATTESTATION 1447',
        body: "Natural son of Victor. Named in all three charters; active donor in the 1446 charter: 'Adam van Vlandren natuerlicke sone va mer Victor van Vlaendren, Rudder, Heer van Orsele en van Wesseghem.' Margriete Aelfhuuts still active patroness in 1446. No further records after 1447 — source silent on whether he had descendants. The central research question of this project.",
        src: 'FMG MedLands [853–855]; Vredius (1643) pp.285–287',
        color: '#4ade80',
        ev: 'unknown',
        focus: true,
        w: 196,
        h: 112,
      },
    },
    {
      // Phase 2 NEW: matrilineal bridge to Despars (chronicle attestation only)
      id: 'isabelle',
      x: 870,
      y: 288,
      cfg: {
        name: 'Isabelle\nvan Vlaenderen',
        dates: 'fl. 15th c. · m. Symoen de Wijndt',
        tag: 'DESPARS CHRONICLE',
        body: "Daughter of Victor named in Nicolaes Despars's Cronijcke Vol. III pp. 114–115. Despars (chronicler, c. 1562–1592) traces a six-generation matrilineal descent from Isabelle to his own wife Anne Avesoete (m. 1549). Not named in Vredius or in the charter cohort of 1427/1441/1446 — sourced only through Despars's family-anchored chronicle account. Probable tier pending direct read of Vol. III pp. 114–115 in the 1840 De Jonghe edition.",
        src: 'Despars, Cronijcke van den Lande ende Graefscepe van Vlaenderen, Vol. III pp. 114–115 (De Jonghe ed., 1840)',
        color: '#fbbf24',
        ev: 'direct',
        w: 200,
        h: 112,
      },
    },

    // ── Gen 4 — Lodewyc's two documented children ────────────────────────
    {
      id: 'josse_l',
      x: 50,
      y: 458,
      cfg: {
        name: 'Josse\nvan Vlaenderen',
        dates: 'died young, bur Oostborch',
        body: "Son of Lodewyc. Died young and is buried at Oostborch near his mother Jacqueline de Wilde. Line terminates.",
        src: 'FMG MedLands [849]; Bethune (1900) p.356',
        color: '#4ade80',
        ev: 'ends',
        w: 120,
        h: 86,
      },
    },
    {
      id: 'marg',
      x: 190,
      y: 458,
      cfg: {
        name: 'Margareta\nvan Vlaenderen',
        dates: 'fl. 1478–1486',
        body: "Daughter of Lodewyc. Married firstly Lodewijk van Baenst Heer van Santvelde; secondly Adriaan van Schouteten Heer van Erpe.",
        src: 'FMG MedLands [850]; Vredius (1643) p.287',
        color: '#4ade80',
        ev: 'married-out',
        w: 120,
        h: 86,
      },
    },
  ],

  connections: [
    { from: 'lm', to: 'vic',      color: LINE },
    { from: 'vic', to: 'lod',     color: LINE },
    { from: 'vic', to: 'jan_s',   color: LINE },
    { from: 'vic', to: 'adam',    color: LINE },
    { from: 'vic', to: 'isabelle', color: LINE },
    { from: 'lod', to: 'josse_l', color: LINE },
    { from: 'lod', to: 'marg',    color: LINE },
  ],

  labels: [
    { x: 180, y: 450, text: "LODEWYC'S TWO DOCUMENTED CHILDREN", color: '#8a8f9e', size: 10 },
  ],

  annotations: [
    // NEW Phase 2: Wessegem regrant context — wrapped, right of Victor's node
    {
      x: 600,
      y: 188,
      maxWidth: 480,
      text: 'Wessegem & Ursel acquired 11 April 1398 by ducal regrant from half-brother Loys "le Hase" (d. Nicopolis 1396) — ADN B 1604 fol. 184. Not a direct paternal grant from Louis de Male.',
      color: '#d4a830',
    },
    // NEW Phase 2: Despars descent bridge — wrapped, below Isabelle
    {
      x: 870,
      y: 425,
      maxWidth: 210,
      text: "Despars's wife Anne Avesoete (m. 1549) descends through six generations from Isabelle. Full chain in the Despars Compendium.",
      color: '#8a8f9e',
    },
    // Existing bottom annotation — wrapped + centred
    {
      x: 550,
      y: 620,
      align: 'center',
      maxWidth: 800,
      text: "After 1486, Victor's documented line is no longer attested in surviving primary sources. For the 15th → 16th century evidentiary gap and the candidate bridges to the modern Meetjesland cluster, see the Gap Dossier.",
      color: '#8a8f9e',
    },
  ],

  legendItems: [
    { color: C.root,    label: 'Comital source' },
    { color: '#4ade80', label: 'Directly Attested' },
    { color: '#60a5fa', label: 'Strongly Corroborated' },
    { color: '#fbbf24', label: 'Probable' },
    { color: '#f87171', label: 'Hypothesis' },
    { glyph: '†',                       label: 'No issue documented',          forceBreakBefore: true },
    { glyph: '?', glyphStyle: 'circle', label: 'Source silent on descendants' },
    { glyph: '×', glyphStyle: 'circle', label: 'Surname not transmitted' },
  ],
};

export default function VictorDiagram() {
  return (
    <LineageDiagram
      diagram={diagram}
      title="Victor van Vlaenderen — Documented Line"
      subtitle="Victor van Vlaenderen Page"
    />
  );
}
