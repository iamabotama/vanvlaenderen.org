import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './FamilyCallout.module.css';

/**
 * "If you're a Van Vlaenderen…" — friendly per-page summary box.
 *
 * Sits under the hero, beside the untouched scholarly apparatus, and speaks
 * to name-bearers in warm second person: what this page shows, why it matters
 * to someone who carries the name, and (via the standing closer) that the
 * we're-all-related hypothesis is testable through the DNA project.
 *
 * Design rules (per Workflow/callout-box-copy-packet-2026-07-03.md, approved
 * 2026-07-16): one reusable component, same look everywhere; 3–5 sentences;
 * NO citations inside the box — the cited work stands beside it, unsoftened;
 * every box ends with the identical closer line linking to /dna.
 */
export default function FamilyCallout({ textKey }: { textKey: string }) {
  const { t } = useTranslation();
  return (
    <aside className={styles.callout}>
      <div className={styles.heading}>{t('family_callout.heading')}</div>
      <p className={styles.body}>{t(textKey)}</p>
      <p className={styles.closer}>
        <Link to="/dna" className={styles.closerLink}>{t('family_callout.closer')}</Link>
      </p>
    </aside>
  );
}
