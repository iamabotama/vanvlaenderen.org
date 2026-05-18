import LineageDiagram, { C, type DiagramDef } from './DiagramEngine';

// ── Evidence-level colors (aligned with site-wide reliability badges) ──────
//   Directly Attested     → green  #4ade80
//   Strongly Corroborated → blue   #60a5fa
//   Probable              → yellow #fbbf24
//   Hypothesis            → red    #f87171
//   Line Ends             → grey   #9ca3af
const EVIDENCE = {
  attested:     '#4ade80',
  corroborated: '#60a5fa',
  probable:     '#fbbf24',
  hypothesis:   '#f87171',
  lineEnds:     '#9ca3af',
};

// Neutral connection color — line membership is now conveyed by column
// position rather than colored connectors. Keeps the evidence palette
// as the only color-coded signal.
const LINE = '#5a6378';

// ── Layout ─────────────────────────────────────────────────────────────────
//   Row 1 (y = 30):   Louis II de Male, centered
//   Row 2 (y = 195):  Victor · Jan sans terre · Louis Friese · Robrecht · Others
//                     (four surname-bearing bastard sons + one stacked card
//                      for the remaining terminated bearer Loys "le Hase")
//
//   Canvas 960 × 440 at 1:1. Designed to fit the Research page content
//   column (max-width ~820px) with minimal scaling. Below MIN_SCALE (0.65)
//   the engine enables horizontal scroll for mobile viewports.
//
// ───────────────────────────────────────────────────────────────────────────

const diagram: DiagramDef = {
  viewBox: '0 0 960 440',

  nodes: [
    // ── Row 1 — Louis II de Male ───────────────────────────────────────────
    {
      id: 'lm',
      x: 370,
      y: 30,
      cfg: {
        name: 'Louis II de Male',
        dates: 'Count of Flanders · 1330–1384',
        tag: 'HOUSE OF DAMPIERRE',
        body: 'Last Count of Flanders from the House of Dampierre. De Lichtervelde (1935) documents at least eighteen of his natural children. Four of his natural sons founded surname-bearing lines; his daughters bore the name in marriage but did not transmit it forward. His death in 1384 marks the generation in which van Vlaenderen crystallises as a heritable surname — at the precise moment the Dampierre comital title itself was extinguished.',
        src: 'Vredius, Tab. XVI; de Lichtervelde (1935) pp. 49–58; FMG MedLands [817]',
        color: C.root,
        ev: 'direct',
        w: 220,
        h: 76,
      },
    },

    // ── Row 2 — Four progenitor sons (featured) + stacked card ─────────────
    {
      id: 'vic',
      x: 20,
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
      },
    },
    {
      id: 'jst',
      x: 215,
      y: 195,
      cfg: {
        name: 'Jan "sans terre"\nvan Vlaenderen',
        dates: 'd. 28 Sep 1396 · Nicopolis',
        tag: 'DRINCHAM',
        body: 'Natural son of Louis de Male. Granted Drincham castle near Cassel in 1383. Killed at Nicopolis (1396). Four documented generations in French Flanders through the 1470s — the proposed progenitor of the Volckerinckhove / French Flanders surname cluster.',
        src: 'Vredius, Tab. XVI (fol. 281); de l\'Espinoy (1631); FMG MedLands [836–840]',
        color: EVIDENCE.attested,
        ev: 'direct',
        w: 180,
        h: 130,
      },
    },
    {
      id: 'fri',
      x: 410,
      y: 195,
      cfg: {
        name: 'Louis "Friese"\nvan Vlaenderen',
        dates: 'c.1350 – 28 Sep 1396 · Nicopolis',
        tag: 'PRAET & WOESTINE',
        body: 'Natural son of Louis de Male. Lord of Praet and Woestine. Killed at Nicopolis (1396). Founded the House of Flanders-Praet — six documented generations using van Vlaenderen as a hereditary surname. The proposed progenitor of the Brabant surname cluster.',
        src: 'Vredius, Tab. XVI; FMG MedLands [864–869]',
        color: EVIDENCE.attested,
        ev: 'direct',
        w: 180,
        h: 130,
      },
    },
    {
      id: 'rob',
      x: 605,
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
      },
    },
    {
      id: 'others',
      x: 810,
      y: 195,
      cfg: {
        name: 'Other Documented\nLines',
        dates: '1 bearer · line terminated',
        tag: 'CLICK TO EXPAND',
        color: EVIDENCE.lineEnds,
        variant: 'stacked',
        expandsTo: 'terminated-lines',
        w: 130,
        h: 130,
      },
    },
  ],

  connections: [
    // Louis de Male → four progenitor sons (solid, neutral)
    { from: 'lm', to: 'vic', color: LINE },
    { from: 'lm', to: 'jst', color: LINE },
    { from: 'lm', to: 'fri', color: LINE },
    { from: 'lm', to: 'rob', color: LINE },
    // Louis de Male → stacked "Other Documented Lines" card (dashed — subordinates)
    { from: 'lm', to: 'others', color: LINE, dashed: true },
  ],

  labels: [],

  annotations: [
    {
      x: 30,
      y: 378,
      text: "At least eighteen of Louis de Male\u2019s natural children are documented (de Lichtervelde, 1935). At least four of his natural sons",
      color: '#d0d4dc',
    },
    {
      x: 30,
      y: 406,
      text: "propagated van Vlaenderen as a hereditary surname; his daughters bore the name in marriage but did not transmit it forward.",
      color: '#d0d4dc',
    },
  ],

  legendItems: [
    { color: C.root,                 label: 'Comital source' },
    { color: EVIDENCE.attested,      label: 'Directly Attested' },
    { color: EVIDENCE.corroborated,  label: 'Strongly Corroborated' },
    { color: EVIDENCE.probable,      label: 'Probable' },
    { color: EVIDENCE.hypothesis,    label: 'Hypothesis' },
    { color: EVIDENCE.lineEnds,      label: 'Line Ends' },
  ],

  expansions: [
    {
      id: 'terminated-lines',
      heading: 'Other documented lines — terminated bearer',
      entries: [
        {
          name: 'Loys "le Hase" van Vlaenderen',
          dates: 'd. 28 Sep 1396 · Nicopolis',
          body: 'One son (Renaud, 1397); no further record.',
          src: 'Vredius, Tab. XVI; de l\'Espinoy (1631)',
        },
      ],
    },
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
