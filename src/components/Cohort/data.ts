/**
 * The eleven individuated cohort members from Despars's master passage
 * (Cronijcke Vol III, p. 114–115, entry A.1): nine bastard sons and two
 * natural daughters of Louis II de Male, ordered as Despars enumerates them.
 *
 * State classifications are research-determined; rationale is documented in
 * findings-despars-cronijcke-cross-reference-2026-05-18.md and elaborated
 * in the i18n caption keys.
 */

import type { CohortEntry } from './types';

export const cohortEntries: CohortEntry[] = [
  {
    id: 'dhase',
    name: 'Mer Lodewijck "dHase"',
    state: 'lineage',
    route: 'loys-le-hase',
  },
  {
    id: 'rodolf',
    name: 'Mer Rodolf (Rufelaert)',
    state: 'no_issue',
  },
  {
    id: 'colaert',
    name: 'Mer Colaert',
    state: 'no_issue',
  },
  {
    id: 'devriese',
    name: 'Mer Lodewijck "de Vriese"',
    state: 'lineage',
    route: 'louis-friese',
  },
  {
    id: 'sansterre',
    name: 'Mer Jan "zonder Landt"',
    state: 'lineage',
    route: 'drincham-dossier',
  },
  {
    id: 'hector',
    name: 'Mer Hector',
    state: 'undocumented',
  },
  {
    id: 'robrecht',
    name: 'Mer Robrecht',
    state: 'lineage',
    route: 'robrecht',
  },
  {
    id: 'karel',
    name: 'Mer Charles',
    state: 'no_issue',
  },
  {
    id: 'victor',
    name: 'Mer Victor',
    state: 'lineage',
    route: 'victor',
  },
  {
    id: 'johanne',
    name: 'Vrau Johanne',
    state: 'married_out',
    daughter: true,
  },
  {
    id: 'margriete',
    name: 'Vrau Margriete',
    state: 'married_out',
    daughter: true,
  },
];
