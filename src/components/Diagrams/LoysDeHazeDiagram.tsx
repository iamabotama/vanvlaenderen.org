import LineageDiagram, { C, type DiagramDef } from './DiagramEngine';

// ─────────────────────────────────────────────────────────────────────────────
// Loys "le Hase" van Vlaenderen — Documented Line
//
// The senior direct-bastard of Louis II de Male, the earliest-endowed
// (Wessegem grant 1372) and the most chronicled (six dated narrative
// attestations in Despars Vol. III, 1380–1396). Four documented natural
// children but no continuing line; the line is a "line ends here" story
// by design.
//
// Locked visual rules: see PraetDiagram.tsx header for full rationale.
//   Color = record confidence.
//   Glyph below card = descendant status (†, ?, ×).
//   Star badge = research focus (on Loys).
// ─────────────────────────────────────────────────────────────────────────────

const EVIDENCE = {
  attested:     '#4ade80',
  probable:     '#fbbf24',
};

const LINE = '#5a6378';

const diagram: DiagramDef = {
  viewBox: '0 0 960 730',

  nodes: [
    // ── Row 1 — Louis II de Male ─────────────────────────────────────────
    {
      id: 'lm',
      x: 370,
      y: 30,
      cfg: {
        name: 'Louis II de Male',
        dates: 'Count of Flanders · 1330–1384',
        tag: 'HOUSE OF DAMPIERRE',
        body: "Last Count of Flanders from the House of Dampierre. See the Research overview for the full direct-bastard cohort.",
        src: 'Vredius, Tab. XVI; P. de Lichtervelde (1935) pp. 48–58',
        color: C.root,
        ev: 'direct',
        w: 220,
        h: 76,
      },
    },

    // ── Row 2 — Loys "le Hase" van Vlaenderen ───────────────────────────
    {
      id: 'loys',
      x: 370,
      y: 200,
      cfg: {
        name: 'Loys "le Hase"\nvan Vlaenderen',
        dates: 'b. after 1361 – d. 25 Sep 1396 · Nicopolis',
        tag: 'WESSEGEM · URSEL · OOSTBURG\nELVERDINGHE & VLAMERTINGHE\nSCHUURVELD · VAKE',
        body: "Natural son of Louis de Male; the earliest-endowed of the direct bastards. Wessegem grant 1372 (ADN B 1273 stuk 10535). Six dated chronicle attestations in Despars Vol. III, 1380–1396 — the densest profile of any direct bastard outside Victor. Mustered as 'le Hase de Flandre' in the French royal host of 1382 (Roosebeke campaign); Captain of Biervliet 1385 with brother Hector; named 'Loys, bastard de Flandre, dict le Haze' among the noble guarantors of the Peace of Tournai, December 1385, in two independent recensions (French and Dutch). Married a daughter of the house of Landas (L'Espinoy lib. 2 cap. 38, primary-source not yet directly consulted — Hypothesis tier on that source). Killed at Nicopolis alongside half-brothers Louis Friese and Jan sans terre, 25 September 1396. Four documented natural children; no continuing line. Seigniories redistributed at his death: Wessegem & Ursel to Victor (regrant 11 Apr 1398, ADN B 1604 fol. 184); Elverdinghe-Vlamertinghe to Robrecht.",
        src: "Despars, Cronijcke Vol. III (six narrative attestations 1380–1396); de Smet, Recueil des chroniques de Flandre, T. III p. 278 (1382 host) and T. IV p. 311 (Tournai 1385); Excellente Cronike van Vlaenderen (Vorsterman 1531), fol. lxxvi; Moelaert (1973) pp. 226–229, (1978) pp. 6–56; Rogghé (1968) pp. 252–253; Lichtervelde (1935) pp. 48–58; ADN B 1273 stuk 10535; ADN B 1604 fol. 184",
        color: EVIDENCE.attested,
        ev: 'direct',
        focus: true,
        w: 220,
        h: 180,
      },
    },

    // ── Row 3 — Loys's four documented natural children ─────────────────
    // Centred row: 4 nodes × 180px + 3 × 20px gaps = 780px content; margins
    // 90px each side within 960-wide canvas.
    {
      id: 'hector',
      x: 90,
      y: 440,
      cfg: {
        name: 'Hector',
        dates: 'fl. 1396 onward',
        tag: 'FIEF OF BORTSANT',
        body: 'Natural son of Loys, raised at Wessegem ("sheren bastaerde Hector te Ursele", Moelaert 1973 p. 228). Distinct from the elder Hector of Voorhoute (a Maleani direct bastard, master-list position 6 in Despars A.1). Probable tier — second-generation, not yet directly named in 1419 primary records.',
        src: 'Moelaert (1973) p. 228; Rogghé (1968) p. 253',
        color: EVIDENCE.probable,
        ev: 'ends',
        w: 180,
        h: 110,
      },
    },
    {
      id: 'regnault',
      x: 290,
      y: 440,
      cfg: {
        name: 'Regnault\n(Reinierken)',
        dates: 'fl. 1396 onward',
        tag: 'FIEF OF LE VAKE',
        body: 'Natural son of Loys. Raised at Wessegem; baptism attended by his Loo-based mother (Moelaert 1978). Probable tier.',
        src: 'Moelaert (1978) pp. 6–56; Rogghé (1968) p. 253',
        color: EVIDENCE.probable,
        ev: 'ends',
        w: 180,
        h: 110,
      },
    },
    {
      id: 'kathelijne',
      x: 490,
      y: 440,
      cfg: {
        name: 'Kathelijne',
        dates: 'fl. 1396 onward',
        tag: 'LE HENEEDE ·\nOOSTKERKE HOUSE',
        body: 'Natural daughter of Loys. Joint tenant with Joanna of a house in Oostkerke parish and of the Le Heneede fief. 30-goud-franc annuity on Ninove receipts. Possibly the daughter at the 22 October 1419 Furnes wedding. Probable tier.',
        src: 'Moelaert (1978); Rogghé (1968) p. 253; Lichtervelde (1935) p. 56 fn 2',
        color: EVIDENCE.probable,
        ev: 'ends',
        w: 180,
        h: 110,
      },
    },
    {
      id: 'joanna',
      x: 690,
      y: 440,
      cfg: {
        name: 'Joanna',
        dates: 'fl. 1396 onward · m. Jan van Prijzeel',
        tag: 'LE HENEEDE ·\nOOSTKERKE HOUSE',
        body: 'Natural daughter of Loys. Joint tenant with Kathelijne (Oostkerke house, Le Heneede fief). Married Jan van Prijzeel. Possibly the daughter at the 22 October 1419 Furnes wedding. Probable tier.',
        src: 'Moelaert (1978); Rogghé (1968) p. 253; Lichtervelde (1935) p. 56 fn 2',
        color: EVIDENCE.probable,
        ev: 'ends',
        w: 180,
        h: 110,
      },
    },
  ],

  connections: [
    { from: 'lm', to: 'loys', color: LINE },
    { from: 'loys', to: 'hector',     color: LINE },
    { from: 'loys', to: 'regnault',   color: LINE },
    { from: 'loys', to: 'kathelijne', color: LINE },
    { from: 'loys', to: 'joanna',     color: LINE },
  ],

  labels: [
    // Centred over the four-children row (between Loys and the children row).
    { x: 480, y: 425, text: "LOYS'S FOUR DOCUMENTED NATURAL CHILDREN", color: '#8a8f9e', size: 10 },
  ],

  annotations: [
    {
      x: 480,
      y: 595,
      align: 'center',
      maxWidth: 880,
      text: "Loys de Haze's seigniories at his 1396 death: Wessegem & Ursel reverted to the duke, regranted to half-brother Victor 11 Apr 1398 (ADN B 1604 fol. 184); Elverdinghe-Vlamertinghe passed to half-brother Robrecht; Vake to Regnault; Bortsant to Hector; Le Heneede + Oostkerke house to Kathelijne & Joanna.",
      color: '#d0d4dc',
    },
    {
      x: 480,
      y: 685,
      align: 'center',
      maxWidth: 880,
      text: "Plus a 22 October 1419 wedding of 'Myns heren s'Haze dochter' (Katelijne or Joanna) at Furnes, attended by uncles Victor and Robert — ADN B 43124 fol. 44v° and 58r°, via Lichtervelde 1935 p. 56 fn 2. Husband not yet identified.",
      color: '#8a8f9e',
    },
  ],

  legendItems: [
    { color: C.root,                label: 'Comital source' },
    { color: EVIDENCE.attested,     label: 'Directly Attested' },
    { color: EVIDENCE.probable,     label: 'Probable' },
    { glyph: '†',                       label: 'No issue documented',          forceBreakBefore: true },
    { glyph: '?', glyphStyle: 'circle', label: 'Source silent on descendants' },
    { glyph: '×', glyphStyle: 'circle', label: 'Surname not transmitted' },
  ],
};

export default function LoysDeHazeDiagram() {
  return (
    <LineageDiagram
      diagram={diagram}
      title='Loys "le Hase" van Vlaenderen — Documented Line'
      subtitle='Loys "le Hase" — the Senior Direct Bastard'
    />
  );
}
