import LineageDiagram, { C, type DiagramDef } from './DiagramEngine';

// ─────────────────────────────────────────────────────────────────────────────
// Jan "sans terre" van Vlaenderen — The Drincham Line (Five Generations)
//
// Vredius scope: Gen 1 Jan sans terre (Nicopolis 1396) → Gen 2 Jan of
// Drincham (m. Isabella de Ghistelles) → Gen 3 four brothers (Jan III,
// Jacques, Loys, Francq) → Gen 4 Jan III's children. Jacques de Drincham
// carries the research-focus star badge because his Veurne epitaph is the
// best-documented artifact of the entire Drincham line.
//
// Phase 2 changes (May 2026):
//   • Jan sans terre Nicopolis date 28 Sep → 25 Sep 1396.
//   • Wilhelmine de Nevele absorbed into Jan sans terre body copy (no
//     separate node). Widow-continuation rendered as wrapped annotation
//     right of card.
//   • Node heights bumped to fix text overflow.
//   • Bottom annotation centred with maxWidth wrap.
//   • Legend split into two rows: confidence keys + glyph keys.
//
// June 2026 (Donche consolidation):
//   • 1393 Broekburg relief-waiver annotation added right of jst (Margareta
//     van Male remitting her half-brother's relief — Donche p. 556, citing
//     ADN Lille B 421).
//   • Founding filiation jst → j2 softened to Probable per the consolidated
//     reading (Despars confirms Jan at Drincham but not the son; filiation
//     rests on the Vredius–Donche transmission pending the ADN B-series).
//   • Bottom annotation extended: Donche (2006) carries the line to six
//     generations (Simon; Margareta van Drincham, gezegd van Vlaanderen,
//     d. c. 1529–30) and records the Praet line's 1551 purchase attempt.
//   • "Ive de Luu" removed as Jan sans terre's mother (June 2026): the claim
//     was unsupported — the project's Vredius source note has no such record,
//     and Ive sLuus/sLuis is the documented mother of ROBRECHT (Béthune
//     p. 233). Jan's mother is treated as not securely identified.
//   • jst → j2 connector recolored to Probable amber to match the filiation
//     tier (node fill stays green: the man's existence is attested).
// ─────────────────────────────────────────────────────────────────────────────

const LINE = '#5a6378';

// Iteration 2 (2026-05-19): Louis II h bumped 76→92 (dates were wrapping
// into the HOUSE OF DAMPIERRE tag area); gens 2–5 shifted down by 16px to
// preserve bezier-curve gap; viewBox h grown accordingly. ← arrows added to
// both right-of-jst annotations for explicit visual association.
const Y_GEN1 = 40;
const Y_GEN2 = 166;
const Y_GEN3 = 348;
const Y_GEN4 = 518;
const Y_GEN5 = 690;

const G4_C1 = 170, G4_C2 = 430, G4_C3 = 680, G4_C4 = 940;
const G5_C1 = 80,  G5_C2 = 218, G5_C3 = 380;

const diagram: DiagramDef = {
  viewBox: '0 0 1120 956',

  nodes: [
    // ── Gen 1: Louis II de Male ──────────────────────────────────────────
    {
      id: 'lm',
      x: 484,
      y: Y_GEN1,
      cfg: {
        name: 'Louis II de Male',
        dates: 'Count of Flanders · 1330–1384',
        tag: 'HOUSE OF DAMPIERRE',
        body: "Last Count of Flanders from the House of Dampierre. Father of Jan sans terre. De l'Espinoy identifies Jan as the fifth natural son of Louis de Male.",
        src: "Vredius, Tab. XVI; de l'Espinoy (1631), Livre 2, Ch. XXXI, pp. 69–70",
        color: C.root,
        ev: 'direct',
        w: 152,
        h: 92,
      },
    },

    // ── Gen 2: Jan sans terre ────────────────────────────────────────────
    // Phase 2: Wilhelmine de Nevele info absorbed into body
    {
      id: 'jst',
      x: 434,
      y: Y_GEN2,
      cfg: {
        name: 'Jan "sans terre" van Vlaenderen',
        dates: 'd. 25 Sep 1396 · Nicopolis',
        tag: 'LORD OF DRINCHAM · GRANT 1383',
        body: "Natural son of Louis de Male; his mother is not securely identified. On 22 November 1383 Louis de Male granted him the castle and lordship of Drincham near Cassel, confiscated from Jean de Scheurvelde. Married Wilhelmine de Nevele at Arras c. 1388 — daughter of Guillaume de Nevele and Wilhelmine de Halewyn, Dame de Lichtervelde du chef de sa mère. Killed at the Battle of Nicopolis alongside half-brothers Loys 'le Hase' and Louis Friese.",
        src: "Vredius, Tab. XVI (fol. 281); de l'Espinoy (1631); Lichtervelde (1935) p. 51 fn 1",
        color: '#4ade80',
        ev: 'direct',
        w: 252,
        h: 136,
      },
    },

    // ── Gen 3: Jan II of Drincham (single heir) ──────────────────────────
    {
      id: 'j2',
      x: 434,
      y: Y_GEN3,
      cfg: {
        name: 'Jan van Vlaenderen',
        dates: 'Lord of Drincham · m. Isabella de Ghistelles',
        tag: 'LORD OF DRINCHAM',
        body: "Heir of Jan sans terre and Wilhelmine de Nevele per the Vredius–Donche transmission; the founding filiation is graded Probable pending the ADN Lille B-series record (see annotation). Active 1419 as lord of Drincham at Furnes castellany alongside uncles Victor and Robert (ADN B 43124 fol. 41r°). Married Isabella de Ghistelles, Dame de Vissaert. The 1466 Houtem tomb of his daughter Maria names him 'Mer Jans van Vlandres gheseit Drincham' (Donche p. 567). His heraldic arms — quartered with Ghistelles, bearing a canton of Flanders and Luxembourg — pass through him to his son Jacques de Drincham.",
        src: 'Vredius, Tab. XVI; ADN B 43124 fol. 41r°; Lichtervelde (1935) p. 56 fn 2; Donche, Vlaamse Stam 42/6 (2006) pp. 557–559, 567',
        color: '#4ade80',
        ev: 'direct',
        w: 252,
        h: 126,
      },
    },

    // ── Gen 4: Four sons ─────────────────────────────────────────────────
    {
      id: 'j3',
      x: G4_C1 - 72,
      y: Y_GEN4,
      cfg: {
        name: 'Jan\nvan Vlaenderen',
        dates: 'Lord of Drincham',
        tag: 'LORD OF DRINCHAM',
        body: "Son of Jan II of Drincham. Married Isabella de Vernieulles. Two sons (Philippe, who died unmarried, and Jan, who was legitimated at Arras) plus three unnamed daughters — all named in Vredius.",
        src: 'Vredius, Tab. XVI',
        color: '#4ade80',
        ev: 'direct',
        w: 144,
        h: 136,
      },
    },
    {
      id: 'jacques',
      x: G4_C2 - 72,
      y: Y_GEN4,
      cfg: {
        name: 'Jacques\nde Drincham',
        dates: 'd. 10 Apr 1459 · m. Guillemette de Bambeke',
        tag: 'BAILIFF OF VEURNE',
        body: "Son of Jan II of Drincham. Chamberlain and Counsellor to Philip the Good, Duke of Burgundy. Bailiff of Veurne at his death 10 April 1459. The Veurne church epitaph (preserved in Gaillard, quoted in Vredius) is the most concrete physical evidence for the entire Drincham line. Sources do not record whether he had children.",
        src: 'Vredius, Tab. XVI (Veurne epitaph via Gaillard)',
        color: '#4ade80',
        ev: 'unknown',
        focus: true,
        w: 144,
        h: 136,
      },
    },
    {
      id: 'loys',
      x: G4_C3 - 72,
      y: Y_GEN4,
      cfg: {
        name: 'Loys\nde Drincham',
        dates: 'fl. 15th c. · line not traced beyond Vredius',
        body: "Son of Jan II of Drincham. Named by Vredius as a further son but with no further biographical detail recorded. Line not traced beyond this generation in the source.",
        src: 'Vredius, Tab. XVI',
        color: '#4ade80',
        ev: 'unknown',
        w: 144,
        h: 136,
      },
    },
    {
      id: 'francq',
      x: G4_C4 - 72,
      y: Y_GEN4,
      cfg: {
        name: 'Francq\nde Drincham',
        dates: 'fl. 15th c. · line not traced beyond Vredius',
        body: "Son of Jan II of Drincham. Named by Vredius as a further son but with no further biographical detail recorded. Line not traced beyond this generation in the source.",
        src: 'Vredius, Tab. XVI',
        color: '#4ade80',
        ev: 'unknown',
        w: 144,
        h: 136,
      },
    },

    // ── Gen 5: Jan III's children ────────────────────────────────────────
    {
      id: 'philippe',
      x: G5_C1 - 48,
      y: Y_GEN5,
      cfg: {
        name: 'Philippe\nde Flandres',
        dates: 'died unmarried',
        body: "Son of Jan III. Died unmarried per Vredius. Line terminates.",
        src: 'Vredius, Tab. XVI',
        color: '#4ade80',
        ev: 'ends',
        w: 96,
        h: 92,
      },
    },
    {
      id: 'jan_leg',
      x: G5_C2 - 48,
      y: Y_GEN5,
      cfg: {
        name: 'Jan\nde Flandres',
        dates: 'legitimated at Arras',
        body: "Son of Jan III × Isabella de Vernieulles. Received a letter of legitimation from the Duke of Burgundy at Arras. Last documented member of the Drincham line in Vredius.",
        src: 'Vredius, Tab. XVI',
        color: '#4ade80',
        ev: 'unknown',
        w: 96,
        h: 92,
      },
    },
    {
      id: 'daughters',
      x: G5_C3 - 48,
      y: Y_GEN5,
      cfg: {
        name: '3 unnamed\ndaughters',
        dates: 'fl. 15th c. per Vredius',
        body: "Three unnamed daughters of Jan III × Isabella de Vernieulles. Named as a count only — no individual biographies, no marriages recorded.",
        src: 'Vredius, Tab. XVI',
        color: '#4ade80',
        ev: 'unknown',
        w: 96,
        h: 92,
      },
    },
  ],

  connections: [
    { from: 'lm', to: 'jst',           color: LINE },
    // jst → j2 drawn in Probable amber: the man's existence is attested
    // (1419 Furnes castellany), but the founding filiation itself is graded
    // Probable — see the amber annotation right of j2. Node fill stays
    // attested-green because color encodes record confidence for the person.
    { from: 'jst', to: 'j2',           color: '#fbbf24' },
    { from: 'j2', to: 'j3',            color: LINE },
    { from: 'j2', to: 'jacques',       color: LINE },
    { from: 'j2', to: 'loys',          color: LINE },
    { from: 'j2', to: 'francq',        color: LINE },
    { from: 'j3', to: 'philippe',      color: LINE },
    { from: 'j3', to: 'jan_leg',       color: LINE },
    { from: 'j3', to: 'daughters',     color: LINE },
  ],

  labels: [
    { x: 560, y: 500, text: "JAN II OF DRINCHAM'S FOUR DOCUMENTED SONS", color: '#8a8f9e', size: 10 },
    { x: 230, y: 672, text: "JAN III'S DOCUMENTED CHILDREN",             color: '#8a8f9e', size: 10 },
  ],

  annotations: [
    {
      x: 696,
      y: 216,
      maxWidth: 408,
      text: '← 22 November 1383: castle & lordship of Drincham, near Cassel — confiscation from Jean de Scheurvelde, granted to Jan as comital endowment.',
      color: '#8a8f9e',
    },
    // NEW Phase 2: widow-continuation annotation right of Jan sans terre, wrapped
    {
      x: 696,
      y: 262,
      maxWidth: 408,
      text: '← Line continues through widow Wilhelmine de Nevele and a documented son active 1419 as lord of Drincham — ADN B 43124 fol. 41r°.',
      color: '#d4a830',
    },
    // NEW June 2026: 1393 Broekburg relief waiver — comital recognition
    {
      x: 696,
      y: 308,
      maxWidth: 408,
      text: "← 1393 Broekburg relief account: Margareta van Male orders the receiver to take no money from 'Messire de Drincham' — comital recognition of her half-brother (Donche p. 556, citing ADN Lille B 421).",
      color: '#d4a830',
    },
    // NEW June 2026: founding-filiation tier note — right of j2
    {
      x: 700,
      y: 400,
      maxWidth: 400,
      text: '← Founding filiation (Jan sans terre → Jan) graded Probable: Despars confirms Jan sans terre at Drincham but does not name the son; the filiation rests on the Vredius–Donche transmission pending the ADN Lille B-series record.',
      color: '#fbbf24',
    },
    // Bottom annotation — centred with wrap
    {
      x: 560,
      y: 886,
      align: 'center',
      maxWidth: 880,
      text: 'After c.1473, the Drincham line is no longer documented in de Wrée. Donche (2006) extends it to six generations — through Simon van Drincham (bailiff of Veurne 1477–86) to Margareta van Drincham, gezegd van Vlaanderen (d. c. 1529–30) — with the Praet line attempting to buy the Drincham seat in 1551. For the evidentiary gap into the French Flanders cluster, see the Gap Dossier.',
      color: '#8a8f9e',
    },
  ],

  legendItems: [
    { color: C.root,    label: 'Comital source' },
    { color: '#4ade80', label: 'Directly Attested' },
    { color: C.blue,    label: 'Strongly Corroborated' },
    { color: '#fbbf24', label: 'Probable' },
    { color: '#f87171', label: 'Hypothesis' },
    { glyph: '†',                       label: 'No issue documented',          forceBreakBefore: true },
    { glyph: '?', glyphStyle: 'circle', label: 'Source silent on descendants' },
    { glyph: '×', glyphStyle: 'circle', label: 'Surname not transmitted' },
  ],
};

export default function JanDrinchamDiagram() {
  return (
    <LineageDiagram
      diagram={diagram}
      title="The Drincham Line — Five Generations"
      subtitle='Jan "sans terre" van Vlaenderen Page'
    />
  );
}
