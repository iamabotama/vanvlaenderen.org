import { useTranslation } from 'react-i18next';
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

// Muted grey used for the wider-cohort stacked node — it's a non-progenitor
// aggregate, deliberately desaturated relative to the five progenitor cards.
const COHORT_GREY = '#9ca3af';

// ── Layout ─────────────────────────────────────────────────────────────────
//   Row 1 (y = 30):   Louis II de Male, centered horizontally (lm.x = 460
//                     puts the card centre at x = 570 which aligns with
//                     the row-2 midpoint of the five progenitor cards).
//   Row 2 (y = 195):  Five direct-bastard surname-bearing sons plus, at
//                     row 2 right, the wider-cohort stacked card. Five
//                     progenitor cards w=180 h=150 with 15px gaps at
//                     x = 90 / 285 / 480 / 675 / 870 (right edge 1050).
//                     Wider-cohort stack at x = 1065, w=130 h=138; with
//                     +12/+12 stacked-paper offset its bounding box ends
//                     at x = 1207 / y = 345, comfortably inside the new
//                     1240×460 viewBox.
//
//   Phase 2 (May 2026): viewBox widened 1140→1240 and tallened 440→460
//                       to accommodate the wider-cohort stack and its
//                       click-to-open hint label. Long bottom annotation
//                       retired; the eighteen-count claim now lives in
//                       the panel intro only to avoid duplication.
// ───────────────────────────────────────────────────────────────────────────

export default function OverviewDiagram() {
  const { t } = useTranslation();

  const diagram: DiagramDef = {
    viewBox: '0 0 1240 460',

    nodes: [
      // ── Row 1 — Louis II de Male ─────────────────────────────────────────
      {
        id: 'lm',
        x: 460,
        y: 30,
        cfg: {
          name: 'Louis II de Male',
          dates: 'Count of Flanders · 1330–1384',
          tag: 'HOUSE OF DAMPIERRE',
          body: 'Last Count of Flanders from the House of Dampierre. De Lichtervelde (1935) documents at least eighteen of his natural children. Five of his natural sons founded surname-bearing lines; his daughters bore the name in marriage but did not transmit it forward. His death in 1384 marks the generation in which van Vlaenderen crystallises as a heritable surname — at the precise moment the Dampierre comital title itself was extinguished.',
          src: 'Vredius, Tab. XVI; P. de Lichtervelde (1935) pp. 48–58',
          color: C.root,
          ev: 'direct',
          w: 220,
          h: 76,
        },
      },

      // ── Row 2 — Five surname-bearing direct bastards ─────────────────────
      {
        id: 'vic',
        x: 90,
        y: 195,
        cfg: {
          name: 'Victor\nvan Vlaenderen',
          dates: 'd. 1431, Saint-Omer',
          tag: 'URSEL & WESSEGEM',
          body: 'Natural son of Louis de Male. Lord of Ursel and Wessegem in the Meetjesland. Burgundian admiral; captain of Biervliet. Three natural sons documented across three primary charters (1427, 1441, 1446). The proposed progenitor of the Belgian / Meetjesland surname cluster.',
          src: "Vredius, Tab. XVI & (1643) pp. 285–287; de l'Espinoy (1631), Livre 2, Ch. XXXI, p. 69",
          color: EVIDENCE.attested,
          ev: 'direct',
          w: 180,
          h: 150,
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
          src: 'Vredius, Tab. XVI (fol. 281); de l\'Espinoy (1631)',
          color: EVIDENCE.attested,
          ev: 'direct',
          w: 180,
          h: 150,
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
          src: "Vredius, Tab. XVI & (1643) pp. 276–277; de l'Espinoy (1631), Livre 2, Ch. XXXI, p. 68",
          color: EVIDENCE.attested,
          ev: 'direct',
          w: 180,
          h: 150,
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
          tag: 'WESSEGEM, URSEL,\nELVERDINGHE &\nVLAMERTINGHE',
          body: 'Natural son of Louis de Male; the earliest-endowed of the direct bastards (Wessegem grant 1372). Lord of Wessegem, Ursel, Oostburg, Elverdinghe-Vlamertinghe, Schuurveld, and Vake. Captain of Biervliet 1385. Killed at Nicopolis alongside half-brothers Louis Friese and Jan sans terre. Four documented natural children — Hector, Regnault, Kathelijne, Joanna — but no continuing line. His Wessegem and Ursel seigniories passed to Victor at the 1398 ducal regrant; his Elverdinghe-Vlamertinghe lordship passed to Robrecht.',
          src: 'Despars, Cronijcke Vol. III (six narrative attestations 1380–1396); Moelaert (1973) pp. 226–229; Rogghé (1968) p. 252; Lichtervelde (1935)',
          color: EVIDENCE.attested,
          ev: 'direct',
          w: 180,
          h: 150,
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
          body: 'Natural son of Louis de Male. Lord of Elverdinghe and Vlamertinghe just outside Ypres; Viscount of Ypres jure uxoris through his 1419 marriage to Anastasie d\'Oultre. Three documented natural sons — Jean (legitimized 1448), Caspar (active 1453–1464 as bailiff), and Karel II (d. 1491) — carried the surname through the Ypres quarter until Karel\'s daughter, the last documented bearer.',
          src: 'Vredius, Tab. XVI; Buylaert (2011) pp. 752–753; Tamboryn, Geschiedenis van Elverdinghe',
          color: EVIDENCE.attested,
          ev: 'direct',
          w: 180,
          h: 150,
          continuation: true,
        },
      },

      // ── Row 2 right — Wider-cohort stacked node ──────────────────────────
      // Click-to-expand stack that opens the wider-cohort panel below.
      // Sized smaller than the five progenitor cards (w=130 vs 180) and
      // tinted grey to read as a non-progenitor aggregate.
      {
        id: 'wider_cohort',
        x: 1065,
        y: 195,
        cfg: {
          name: t('research.cohort_sidebar.stack_label'),
          color: COHORT_GREY,
          variant: 'stacked',
          expandsTo: 'wider_cohort',
          w: 130,
          h: 138,
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
      // Louis de Male → wider cohort (solid, neutral) — same connector
      // style as the progenitors; the stack visualisation alone carries
      // the "not a single individual" signal.
      { from: 'lm', to: 'wider_cohort', color: LINE },
    ],

    labels: [
      // Click-to-open hint below the wider-cohort stack. Positioned at the
      // stack's horizontal centre (x = 1065 + 130/2 = 1130) just below the
      // stacked-paper bottom edge (stack bbox bottom ≈ 345).
      {
        x: 1130,
        y: 360,
        text: t('research.cohort_sidebar.click_hint'),
        color: '#9ca3af',
        size: 11,
      },
    ],

    annotations: [],

    legendItems: [
      { color: C.root,                label: 'Comital source' },
      { color: EVIDENCE.attested,     label: 'Directly Attested' },
      { color: EVIDENCE.corroborated, label: 'Strongly Corroborated' },
      { color: EVIDENCE.probable,     label: 'Probable' },
      { color: EVIDENCE.hypothesis,   label: 'Hypothesis' },
      { glyph: '↓', label: 'Has its own line page', forceBreakBefore: true },
    ],

    expansions: [
      {
        id: 'wider_cohort',
        heading: t('research.cohort_sidebar.heading'),
        intro: t('research.cohort_sidebar.intro'),
        stateLegend: [
          { color: '#c4a55a', label: t('research.cohort_sidebar.state_strong_candidate') },
          { color: '#9ca3af', label: t('research.cohort_sidebar.state_no_issue_documented') },
        ],
        entries: [
          // ── Testament 1384 layer ───────────────────────────────────────
          {
            name: t('research.cohort_sidebar.tile.margriete_i.name'),
            collapsed: t('research.cohort_sidebar.tile.margriete_i.collapsed'),
            expanded: t('research.cohort_sidebar.tile.margriete_i.expanded'),
            layer: t('research.cohort_sidebar.layer_testament'),
            state: 'no_issue_documented',
            uncertain: true,
          },
          {
            name: t('research.cohort_sidebar.tile.margriete_ii.name'),
            collapsed: t('research.cohort_sidebar.tile.margriete_ii.collapsed'),
            expanded: t('research.cohort_sidebar.tile.margriete_ii.expanded'),
            layer: t('research.cohort_sidebar.layer_testament'),
            state: 'no_issue_documented',
          },
          // ── Vredius layer ─────────────────────────────────────────────
          {
            name: t('research.cohort_sidebar.tile.pieter.name'),
            collapsed: t('research.cohort_sidebar.tile.pieter.collapsed'),
            expanded: t('research.cohort_sidebar.tile.pieter.expanded'),
            layer: t('research.cohort_sidebar.layer_vredius'),
            state: 'no_issue_documented',
          },
          {
            name: t('research.cohort_sidebar.tile.margriete_iii.name'),
            collapsed: t('research.cohort_sidebar.tile.margriete_iii.collapsed'),
            expanded: t('research.cohort_sidebar.tile.margriete_iii.expanded'),
            layer: t('research.cohort_sidebar.layer_vredius'),
            state: 'no_issue_documented',
          },
          {
            name: t('research.cohort_sidebar.tile.johanna.name'),
            collapsed: t('research.cohort_sidebar.tile.johanna.collapsed'),
            expanded: t('research.cohort_sidebar.tile.johanna.expanded'),
            layer: t('research.cohort_sidebar.layer_vredius'),
            state: 'no_issue_documented',
            uncertain: true,
          },
          {
            name: t('research.cohort_sidebar.tile.beatrice.name'),
            collapsed: t('research.cohort_sidebar.tile.beatrice.collapsed'),
            expanded: t('research.cohort_sidebar.tile.beatrice.expanded'),
            layer: t('research.cohort_sidebar.layer_vredius'),
            state: 'no_issue_documented',
            uncertain: true,
          },
          // ── Lichtervelde archival layer ───────────────────────────────
          {
            name: t('research.cohort_sidebar.tile.katherine_i.name'),
            collapsed: t('research.cohort_sidebar.tile.katherine_i.collapsed'),
            expanded: t('research.cohort_sidebar.tile.katherine_i.expanded'),
            layer: t('research.cohort_sidebar.layer_lichtervelde'),
            state: 'no_issue_documented',
            uncertain: true,
          },
          {
            name: t('research.cohort_sidebar.tile.katherine_ii.name'),
            collapsed: t('research.cohort_sidebar.tile.katherine_ii.collapsed'),
            expanded: t('research.cohort_sidebar.tile.katherine_ii.expanded'),
            layer: t('research.cohort_sidebar.layer_lichtervelde'),
            state: 'no_issue_documented',
            uncertain: true,
          },
          // ── Despars-only layer ────────────────────────────────────────
          {
            name: t('research.cohort_sidebar.tile.rodolf.name'),
            collapsed: t('research.cohort_sidebar.tile.rodolf.collapsed'),
            expanded: t('research.cohort_sidebar.tile.rodolf.expanded'),
            layer: t('research.cohort_sidebar.layer_despars'),
            state: 'no_issue_documented',
          },
          {
            name: t('research.cohort_sidebar.tile.colaert.name'),
            collapsed: t('research.cohort_sidebar.tile.colaert.collapsed'),
            expanded: t('research.cohort_sidebar.tile.colaert.expanded'),
            layer: t('research.cohort_sidebar.layer_despars'),
            state: 'no_issue_documented',
          },
          {
            name: t('research.cohort_sidebar.tile.hector.name'),
            collapsed: t('research.cohort_sidebar.tile.hector.collapsed'),
            expanded: t('research.cohort_sidebar.tile.hector.expanded'),
            layer: t('research.cohort_sidebar.layer_despars'),
            state: 'strong_candidate',
          },
          {
            name: t('research.cohort_sidebar.tile.karel_senior.name'),
            collapsed: t('research.cohort_sidebar.tile.karel_senior.collapsed'),
            expanded: t('research.cohort_sidebar.tile.karel_senior.expanded'),
            layer: t('research.cohort_sidebar.layer_despars'),
            state: 'strong_candidate',
          },
          // ── Gosnay (outside the three-state schema, gold left accent) ──
          {
            name: t('research.cohort_sidebar.gosnay.name'),
            collapsed: t('research.cohort_sidebar.gosnay.collapsed'),
            expanded: t('research.cohort_sidebar.gosnay.expanded'),
            outsideSchema: true,
          },
        ],
      },
    ],
  };

  return (
    <LineageDiagram
      diagram={diagram}
      title={t('research.diagram_title')}
      subtitle={t('research.diagram_subtitle')}
    />
  );
}
