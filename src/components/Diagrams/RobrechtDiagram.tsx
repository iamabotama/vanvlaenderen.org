import LineageDiagram, { C, type DiagramDef } from './DiagramEngine';

// ─────────────────────────────────────────────────────────────────────────────
// Robrecht van Vlaenderen — Documented Line
//
// Three generations, medieval scope only. Robrecht (d. 1434) had three
// documented natural sons in the Ypres quarter: Jean (legitimized 1448
// by Burgundian ducal diploma), Caspar (active 1453–1464 as bailiff),
// and Karel (d. 1491, the Langemark epitaph names him filius M'her
// Robrecht). Karel's daughter married Omarus de Crane; she is the last
// documented bearer of the surname in this line.
//
// Visual conventions:
//   Color = record confidence (matches site-wide reliability palette).
//   Glyph below card = descendant status (†, ?, ×).
//   Star badge = research focus (on Karel).
//   Dashed connection = parentage Hypothesis (rob → caspar).
//   Diploma tag variant = state-issued legitimization (jean).
// ─────────────────────────────────────────────────────────────────────────────

const LINE = '#5a6378';

const diagram: DiagramDef = {
  viewBox: '0 0 920 640',

  nodes: [
    // ── Gen 1: Louis II de Male ──────────────────────────────────────────
    {
      id: 'lm',
      x: 384,
      y: 40,
      cfg: {
        name: 'Louis II de Male',
        dates: 'Count of Flanders · 1330–1384',
        body: "Father of Robrecht van Vlaenderen. The 1419 marriage of Robrecht to Anastasie d'Oultre at Ypres took place in the presence of the future Philip the Good, two days after the assassination of John the Fearless at Montereau.",
        src: 'FMG MedLands [817]; Buylaert (2011) pp. 752–753',
        color: C.root,
        ev: 'direct',
        w: 152,
        h: 56,
      },
    },

    // ── Gen 2: Robrecht van Vlaenderen ───────────────────────────────────
    {
      id: 'rob',
      x: 334,
      y: 140,
      cfg: {
        name: 'Robrecht van Vlaenderen',
        dates: 'd. 21 Jan 1434',
        tag: 'ELVERDINGHE &\nVLAMERTINGHE',
        body: "Natural son of Louis de Male. Lord of Elverdinghe and Vlamertinghe as a direct paternal grant (active there from 1412). Burgundian raed ende camerlinck (councillor and chamberlain) to Dukes John the Fearless and Philip the Good. Married Anastasie d'Oultre at Ypres on 12 September 1419, acquiring the title Vicomte d'Ypres jure uxoris. The marriage produced no legitimate children. His wooden tomb in the Elverdinge parish church bore a Middle Dutch inscription naming him \"Roelandt van Vlaenderen\" (likely Robrecht, per Tamboryn).",
        src: 'Buylaert (2011) pp. 752–753; Vredius (1643) pp. 283–284; Tamboryn, Geschiedenis van Elverdinghe, pp. 23–24',
        color: '#4ade80',
        ev: 'direct',
        w: 252,
        h: 96,
      },
    },

    // ── Gen 3: Three natural sons ────────────────────────────────────────
    {
      id: 'jean',
      x: 86,
      y: 288,
      cfg: {
        name: 'Jean\nde Flandres',
        dates: 'fl. 1448 · by Marie de le Voerde',
        tag: 'HESDIN DIPLOMA 1448',
        tagVariant: 'diploma',
        body: "Acknowledged natural son of Robrecht by Marie de le Voerde. Formally legitimized by Burgundian ducal diploma at Hesdin on 31 July 1448. The diploma names him \"Jean de Flandres, filz naturel & illegitime de feu Robert, bastard de Flandres, procreé & engendré du corps de Damoiselle Marie de le Voerde.\" No further career record; the diploma stands as a state-recognized primary attestation.",
        src: 'Vredius (1643) pp. 283–284; ARA Archives de la Chambre des Comptes',
        color: '#4ade80',
        ev: 'unknown',
        w: 188,
        h: 112,
      },
    },
    {
      id: 'caspar',
      x: 366,
      y: 288,
      cfg: {
        name: 'Caspar\nvan Vlaenderen',
        dates: 'fl. 1453–1464',
        body: "Career documented across two bailiwicks: bailiff of Elverdinghe-Vlamertinghe (2 Jan 1453 – 16 Sep 1457, the same territories Robrecht had held), then bailiff of Ypres (2 Jan 1462 – 6 May 1464). Councillor of the city of Ypres in 1458, 1460, 1461. Attended the Feast of the Pheasant at Lille on 18 March 1454 as \"messire Gaspard de Flandres\" alongside Loys de Flandres of the Praet line. Descent as son of Robrecht is not stated in any primary source; the brothers hypothesis rests on territorial-administrative continuity.",
        src: 'Buylaert (2011) p. 758; ARA Rekenkamer nrs. 13928–43, 14540–50; KBR Fonds Merghelynck nr. 102–3',
        color: '#f87171',
        ev: 'unknown',
        w: 188,
        h: 112,
      },
    },
    {
      id: 'karel',
      x: 642,
      y: 288,
      cfg: {
        name: 'Karel\nvan Vlaenderen',
        dates: 'd. 15 Sep 1491',
        tag: 'GRUTERSALE',
        body: "Lord of Grutersale, knight, fief-holder of the Burg of Veurne (1472) and of the Ypres feudal court (1474). Listed on the nobility roll \"tYpre ende int Yperssche\" in February 1481. The Langemark epitaph (Vredius p. 288, via the Gaillard MS) names him filius M'her Robrecht and gives his death as 15 September 1491. His wife Catharine de Verdeghem (Lady of Dadizele) is buried in an adjacent tomb at Langemark.",
        src: 'Buylaert (2011) p. 758; Vredius (1643) p. 288 (via Gaillard MS); ARA Rekenkamer nrs. 1086, 1111, 21845',
        color: C.blue,
        ev: 'direct',
        focus: true,
        w: 196,
        h: 112,
      },
    },

    // ── Gen 4: Karel's daughter ──────────────────────────────────────────
    {
      id: 'daughter',
      x: 670,
      y: 458,
      cfg: {
        name: "Karel's daughter",
        dates: 'm. Omarus de Crane',
        body: "The last documented bearer of the surname in Robrecht's line. Vredius p. 288 records that Omarus de Crane (Eques, d. 16 August 1485, buried at Langemark beside Karel's tomb) had married \"een dochter van M'her Charles van Vlaendren, Rudder, Heere van Grutersale.\" Her first name is not preserved. After her marriage into the de Crane family, the surname is not carried forward in this branch.",
        src: 'Vredius (1643) p. 288 (via Gaillard MS)',
        color: '#4ade80',
        ev: 'married-out',
        w: 140,
        h: 86,
      },
    },
  ],

  connections: [
    { from: 'lm', to: 'rob', color: LINE },
    { from: 'rob', to: 'jean', color: LINE },
    // Caspar's parentage is Hypothesis — dashed line.
    { from: 'rob', to: 'caspar', color: LINE, dashed: true },
    { from: 'rob', to: 'karel', color: LINE },
    { from: 'karel', to: 'daughter', color: LINE },
  ],

  labels: [],

  annotations: [
    {
      x: 603,
      y: 420,
      text: "↑ Langemark tomb: filius M'her Robrecht",
      color: '#d4a830',
    },
    {
      x: 30,
      y: 600,
      text: "Caspar's 1453–1457 baljuwship of Elverdinghe-Vlamertinghe covered the exact territories Robrecht held until 1434.",
      color: '#8a8f9e',
    },
  ],

  legendItems: [
    { color: C.root,    label: 'Comital source' },
    { color: '#4ade80', label: 'Directly Attested' },
    { color: C.blue,    label: 'Strongly Corroborated' },
    { color: '#f87171', label: 'Hypothesis' },
    { glyph: '†',                       label: 'No issue documented' },
    { glyph: '?', glyphStyle: 'circle', label: 'Source silent on descendants' },
    { glyph: '×', glyphStyle: 'circle', label: 'Surname not transmitted' },
  ],
};

export default function RobrechtDiagram() {
  return (
    <LineageDiagram
      diagram={diagram}
      title="Robrecht van Vlaenderen — Documented Line"
      subtitle="Robrecht van Vlaenderen Page"
    />
  );
}
