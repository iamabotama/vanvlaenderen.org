/**
 * Type definitions for the Cohort Sidebar component.
 *
 * Renders the full 11-individuated cohort from Despars's master passage
 * (Cronijcke Vol III, p. 114–115, entry A.1) on the Research page,
 * between the OverviewDiagram and the Branch Cards.
 *
 * Four visual states distinguish the documented relationships between
 * each cohort member and the surname's continuation:
 *
 *   lineage       — ↓  Documented continuing line; clickable to line page
 *   undocumented  — ?  Lineage past this person undocumented
 *   no_issue      — †  Documented no issue (positive evidence of terminus)
 *   married_out   — ×  Daughter who carried the name only in marriage
 */

import type { ResearchSubpage } from '../../hooks/useNav';

export type CohortState = 'lineage' | 'undocumented' | 'no_issue' | 'married_out';

export interface CohortEntry {
  /** Stable identifier; used as React key and as the i18n caption-key suffix. */
  id: string;
  /** Display name, language-neutral medieval form. */
  name: string;
  /** Visual state and bucket. */
  state: CohortState;
  /** Navigation target for clickable lineage entries; only set when state is 'lineage'. */
  route?: ResearchSubpage;
  /** Marks daughter entries, which render under the Daughters subheading. */
  daughter?: boolean;
}
