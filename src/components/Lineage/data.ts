import type { AncestorRecord } from './types';

/**
 * vanVlaenderenLineage
 *
 * Ordered most-recent → oldest (Generation I → XIV).
 * This is the single source of truth for the /lineage page.
 *
 * STATUS KEY
 *   documented — verified record exists (✓ in source spreadsheet)
 *   partial     — some records exist, others missing
 *   inferred    — dates approximate or derived; no direct record
 *   modern      — living or recent generation; no archival record expected
 *
 * ARCHIVE LINKS
 *   Use full AGATHA deep-link URLs where available:
 *   https://agatha.arch.be/data/images/{collection}/{path}
 */
export const vanVlaenderenLineage: AncestorRecord[] = [
  {
    id: 0,
    generation: 'I',
    name: 'Michael & Constance Van Flandern',
    born: '',          // birth years intentionally omitted — living persons
    parish: 'United States',
    status: 'modern',
    comment: 'The researchers — American descendants of Charles Louis Van Vlaenderen.',
  },
  {
    id: 1,
    generation: 'II',
    name: 'Tom Van Flandern',
    born: '1940',
    parish: 'Cleveland, OH',
    status: 'modern',
    birthRecord: { label: '1940 Cleveland, OH' },
  },
  {
    id: 2,
    generation: 'III',
    name: 'Robert Van Flandern',
    born: '1915',
    parish: 'Cleveland, OH',
    status: 'modern',
    birthRecord: { label: '1915 Cleveland, OH' },
  },
  {
    id: 3,
    generation: 'IV',
    name: 'Charles A. Van Vlaenderen',
    born: '1881',
    parish: 'Fort Wayne, IN',
    status: 'partial',
    birthRecord: { label: '1881 Fort Wayne, IN' },
    comment: 'First generation born in America.',
  },
  {
    id: 4,
    generation: 'V',
    name: 'Charles Louis Van Vlaenderen',
    born: 'Jun 13, 1854',
    parish: 'Bassevelde',
    status: 'documented',
    birthRecord:    { label: '1854 Bassevelde (Assenede)' },
    marriageRecord: { label: 'Ancestry.com' },
    deathRecord:    { label: 'Ancestry.com' },
    comment: 'Emigrated from Bassevelde to America in 1875. Married Jacqueline Vermaas.',
  },
  {
    id: 5,
    generation: 'VI',
    name: 'Egidius Van Vlaenderen',
    born: '~1793',
    parish: 'Bassevelde',
    status: 'partial',
    birthRecord: { label: '1793 Bassevelde' },
    marriageRecord: { label: '1822 Bassevelde (Assenede)' },
    deathRecord: { label: '1868 Bassevelde (Assenede)' },
  },
  {
    id: 6,
    generation: 'VII',
    name: 'Franciscus Van Vlaenderen',
    born: 'Apr 1, 1769',
    parish: 'Bassevelde',
    status: 'documented',
    birthRecord: { label: '1769 Bassevelde' },
    marriageRecord: { label: '~1792' },
    deathRecord: { label: '1836 Bassevelde (Assenede)' },
    comment: 'Marriage date approximate.',
  },
  {
    id: 7,
    generation: 'VIII',
    name: 'Livinus Van Vlaenderen',
    born: 'Jan 28, 1740',
    parish: 'Bouchout',
    status: 'documented',
    birthRecord: { label: '1740 Bouchout' },
    marriageRecord: { label: '1763 Bassevelde (Assenede)' },
    deathRecord: { label: '1783 Bassevelde (Assenede)' },
    comment: 'Born in Bouchout; married into Bassevelde parish.',
  },
  {
    id: 8,
    generation: 'IX',
    name: 'Petrus Van Vlaenderen',
    born: 'Sep 11, 1714',
    parish: 'Bassevelde',
    status: 'documented',
    birthRecord: { label: '1714 Bassevelde' },
    marriageRecord: { label: '1739 Boekhoute (Assenede)' },
    deathRecord: { label: 'Sep 2, 1783' },
  },
  {
    id: 9,
    generation: 'X',
    name: 'Petrus (Raphael) Van Vlaenderen',
    born: 'Aug 8, 1685',
    parish: 'Bassevelde',
    status: 'documented',
    birthRecord: {
      label: '1685 Bassevelde',
      url: 'https://agatha.arch.be/data/images/514/514_1075_000_01458_000/0_0154_r',
    },
    marriageRecord: { label: '1710 Bassevelde (Assenede)' },
    deathRecord: { label: '1727?' },
    comment:
      'Death date uncertain. Birth record viewable in Rijksarchief Gent via AGATHA.',
  },
  {
    id: 10,
    generation: 'XI',
    name: 'Livinus Van Vlaenderen',
    born: 'Jul 7, 1658',
    parish: 'Waarschoot (Sint-Gislenus)',
    status: 'documented',
    birthRecord: { label: '1658 Waarschoot: Sint-Gislenus' },
    marriageRecord: { label: '1684 Bassevelde (Assenede)' },
    deathRecord: { label: '1694 Bassevelde (Assenede)' },
    comment:
      "Moved to Bassevelde by 1684 — the family's arrival in Bassevelde parish.",
  },
  {
    id: 11,
    generation: 'XII',
    name: 'Petrus Van Vlaenderen',
    born: 'Jul 16, 1634',
    parish: 'Oostwinkel (Zomergem)',
    status: 'partial',
    birthRecord: { label: '1634 Oostwinkel (Zomergem)' },
    marriageRecord: { label: '1655 Waarschoot: Sint-Gislenus' },
  },
  {
    id: 12,
    generation: 'XIII',
    name: 'Noe Van Vlaenderen',
    born: '~1605–1610',
    parish: 'Oostwinkel',
    status: 'inferred',
    birthRecord: { label: '~1605–1610' },
    marriageRecord: { label: '~1632' },
    deathRecord: { label: '1664 Oostwinkel' },
    comment: 'Earliest documented Oostwinkel ancestor. Birth and marriage dates inferred.',
  },
  {
    id: 13,
    generation: 'XIV',
    name: 'Jeremiah Van Vlaendern',
    born: '~1575',
    parish: 'Unknown',
    status: 'inferred',
    birthRecord: { label: '~1575' },
    marriageRecord: { label: '~1600' },
    comment:
      'Earliest known ancestor. All dates inferred. Note spelling variant — no final -e in surname.',
  },
];
