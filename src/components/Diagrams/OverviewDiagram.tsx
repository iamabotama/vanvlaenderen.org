import LineageDiagram, { C, type DiagramDef } from './DiagramEngine';

// ── Evidence-level colors (aligned with site-wide reliability badges) ──────
//   Directly Attested     → green  #4ade80
//   Strongly Corroborated → blue   #60a5fa
//   Probable              → yellow #fbbf24
//   Hypothesis            → red    #f87171
//   Line Ends             → grey   #9ca3af  (omitted from legend — no terminations on this diagram)
const EVIDENCE = {
  attested:     '#4ade80',
  corroborated: '#60a5fa',
  probable:     '#fbbf24',
  hypothesis:   '#f87171',
};

// Neutral connection color — line membership is now conveyed by column
// position rather than colored connectors. Keeps the evidence palette
// as the only color-coded signal.
const LINE = '#5a6378';

// ── Layout ─────────────────────────────────────────────────────────────────
//   Row 1 (y = 30):   Louis II de Male, centered (lm.x = 460 puts center
//                     at x=570, matching the row 2 midpoint).
//   Row 2 (y = 195):  Five direct-bastard surname-bearing sons.
//                     Re-centered within viewBox 1140 so left and right
//                     margins are symmetric: each node 180 wide, 15px
//                     gaps, 90px margins. Coordinates 90 / 285 / 480 /
//                     675 / 870.
//
//   Canvas 1140 × 440 at 1:1. Phase 2 promotes Loys "le Hase" from a
//   terminated-line entry into a row 2 progenitor card; Others stacked
//   card and terminated-lines expansion retired (non-progenitor cohort
//   handled on the cohort sidebar elsewhere on the Research page).
// ───────────────────────────────────────────────────────────────────────────

const diagram: DiagramDef = {
  viewBox: '0 0 1140 440',

  nodes: [
    // ── Row 1 — Louis II de Male ───────────────────────────────────────────
    {
      id: 'lm',
      x: 460,
      y: 30,
      cfg: {
        name: 'Louis II de Male',
        dates: 'Count of Flanders · 1330–1384',
        tag: 'HOUSE OF DAMPIERRE',
        body: 'Last Count of Flanders from the House of Dampierre. De Lichtervelde (1935) documents at least eighteen of his natural children. Five of his natural sons founded surname-bearing lines; his daughters bore the name in marriage but did not transmit it forward. His death in 1384 marks the generation in which van Vlaenderen crystallises as a heritable surname — at the precise moment the Dampierre comital title itself was extinguished.',
        src: 'Vredius, Tab. XVI; P. de Lichtervelde (1935) pp. 48–58; FMG MedLands [817]',
        color: C.root,
        ev: 'direct',
        w: 220,
        h: 76,
      },
    },

    // ── Row 2 — Five surname-bearing direct bastards ───────────────────────
    {
      id: 'vic',
      x: 90,
      y: 195,
      cfg: {
        name: 'Victor\nvan Vlaenderen',
        dates: 'd. before 10 Mar 1442',
        tag: 'URSEL & WESSEGEM',
        body: 'Natural son of Louis de Male. Lord of Ursel and Wessegem in the Meetjesland. Burgundian admiral; captain of Biervliet. Three natural sons documented across three primary charters (1427, 1441, 1446). The proposed progenitor of the Belgian / Meetjesland surname cluster.',
        src: 'Vredius, Tab. XVI; FMG MedLands [841–855]',
        color: EVIDENCE.attested,
        ev: 'direct',
        w: 180,
        h: 130,
        continuation: true,
      },
    },
    {
      id: 'jst',
      x: 285,
      y: 195,
      cfg: {
        name: 'Jan "sans terre"\nvan Vlaenderen',
        dates: 'd. 25 Sep 1396 · Nicopolis',
        tag: 'DRINCHAM',
        body: 'Natural son of Louis de Male. Granted Drincham castle near Cassel in 1383. Killed at Nicopolis (1396). Four documented generations in French Flanders through the 1470s — the proposed progenitor of the Volckerinckhove / French Flanders surname cluster.',
        src: 'Vredius, Tab. XVI (fol. 281); de l\'Espinoy (1631); FMG MedLands [836–840]',
        color: EVIDENCE.attested,
        ev: 'direct',
        w: 180,
        h: 130,
        continuation: true,
      },
    },
    {
      id: 'fri',
      x: 480,
      y: 195,
      cfg: {
        name: 'Louis "Friese"\nvan Vlaenderen',
        dates: 'c.1350 – 25 Sep 1396 · Nicopolis',
        tag: 'PRAET & WOESTINE',
        body: 'Natural son of Louis de Male. Lord of Praet and Woestine. Killed at Nicopolis (1396). Founded the House of Flanders-Praet — six documented generations using van Vlaenderen as a hereditary surname. The proposed progenitor of the Brabant surname cluster.',
        src: 'Vredius, Tab. XVI; FMG MedLands [864–869]',
        color: EVIDENCE.attested,
        ev: 'direct',
        w: 180,
        h: 130,
        continuation: true,
      },
    },
    {
      id: 'loys',
      x: 675,
      y: 195,
      cfg: {
        name: 'Loys "le Hase"\nvan Vlaenderen',
        dates: 'b. after 1361 – d. 25 Sep 1396 · Nicopolis',
        tag: 'WESSEGEM, URSEL,\nELVERDINGHE & VLAMERTINGHE',
        body: 'Natural son of Louis de Male; the earliest-endowed of the direct bastards (Wessegem grant 1372). Lord of Wessegem, Ursel, Oostburg, Elverdinghe-Vlamertinghe, Schuurveld, and Vake. Captain of Biervliet 1385. Killed at Nicopolis alongside half-brothers Louis Friese and Jan sans terre. Four documented natural children — Hector, Regnault, Kathelijne, Joanna — but no continuing line. His Wessegem and Ursel seigniories passed to Victor at the 1398 ducal regrant; his Elverdinghe-Vlamertinghe lordship passed to Robrecht.',
        src: 'Despars, Cronijcke Vol. III (six narrative attestations 1380–1396); Moelaert (1973) pp. 226–229; Rogghé (1968) p. 252; Lichtervelde (1935)',
        color: EVIDENCE.attested,
        ev: 'direct',
        w: 180,
        h: 130,
        continuation: true,
      },
    },
    {
      id: 'rob',
      x: 870,
      y: 195,
      cfg: {
        name: 'Robrecht\nvan Vlaenderen',
        dates: 'd. 21 Jan 1434',
        tag: 'ELVERDINGHE &\nVLAMERTINGHE',
        body: 'Natural son of Louis de Male. Lord of Elverdinghe and Vlamertinghe just outside Ypres; Viscount of Ypres jure uxoris through his 1419 marriage to Anastasie d\'Oultre. Three documented natural sons — Jean (legitimized 1448), Caspar (active 1453–1464 as bailiff), and Karel (d. 1491) — carried the surname through the Ypres quarter until Karel\'s daughter, the last documented bearer.',
        src: 'Vredius, Tab. XVI; Buylaert (2011) pp. 752–753; Tamboryn, Geschiedenis van Elverdinghe',
        color: EVIDENCE.attested,
        ev: 'direct',
        w: 180,
        h: 130,
        continuation: true,
      },
    },
  ],

  connections: [
    // Louis de Male → five progenitor sons (solid, neutral)
    { from: 'lm', to: 'vic',  color: LINE },
    { from: 'lm', to: 'jst',  color: LINE },
    { from: 'lm', to: 'fri',  color: LINE },
    { from: 'lm', to: 'loys', color: LINE },
    { from: 'lm', to: 'rob',  color: LINE },
  ],

  labels: [],

  annotations: [
    {
      x: 90,
      y: 408,
      text: "At least eighteen of Louis de Male's natural children are documented (Lichtervelde, 1935). Five of his natural sons propagated van Vlaenderen as a hereditary surname; one (Loys 'le Hase') ended in the second generation, four continued, and his daughters bore the name in marriage without transmitting it.",
      color: '#d0d4dc',
      maxWidth: 960,
    },
  ],

  legendItems: [
    { color: C.root,                label: 'Comital source' },
    { color: EVIDENCE.attested,     label: 'Directly Attested' },
    { color: EVIDENCE.corroborated, label: 'Strongly Corroborated' },
    { color: EVIDENCE.probable,     label: 'Probable' },
    { color: EVIDENCE.hypothesis,   label: 'Hypothesis' },
    { glyph: '↓', label: 'Has its own line page', forceBreakBefore: true },
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
