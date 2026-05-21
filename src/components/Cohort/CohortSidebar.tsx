import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Cohort.module.css';
import { cohortEntries } from './data';
import type { CohortEntry, CohortState } from './types';

const GLYPH: Record<CohortState, string> = {
  lineage: '↓',
  undocumented: '?',
  no_issue: '†',
  married_out: '×',
};

const STATE_CLASS: Record<CohortState, string> = {
  lineage: styles.stateLineage,
  undocumented: styles.stateUndocumented,
  no_issue: styles.stateNoIssue,
  married_out: styles.stateMarriedOut,
};

interface EntryRowProps {
  entry: CohortEntry;
  caption: string;
}

function EntryRow({ entry, caption }: EntryRowProps) {
  const isClickable = entry.state === 'lineage' && Boolean(entry.route);
  const wrapperClass = [
    styles.entry,
    STATE_CLASS[entry.state],
    isClickable ? styles.entryClickable : '',
  ]
    .filter(Boolean)
    .join(' ');

  const inner = (
    <>
      <span className={styles.entryGlyph} aria-hidden="true">
        {GLYPH[entry.state]}
      </span>
      <span className={styles.entryName}>{entry.name}</span>
      <span className={styles.entryCaption}>{caption}</span>
    </>
  );

  return (
    <li className={styles.entryItem}>
      {isClickable ? (
        <Link
          to={entry.route!}
          className={wrapperClass}
          aria-label={`${entry.name} — ${caption}`}
        >
          {inner}
        </Link>
      ) : (
        <div className={wrapperClass}>{inner}</div>
      )}
    </li>
  );
}

export default function CohortSidebar() {
  const { t } = useTranslation();

  const sonEntries = cohortEntries.filter((e) => !e.daughter);
  const daughterEntries = cohortEntries.filter((e) => e.daughter);

  const renderEntry = (entry: CohortEntry) => {
    const caption = t(`research.cohort_entry_${entry.id}_caption`);
    return <EntryRow key={entry.id} entry={entry} caption={caption} />;
  };

  return (
    <section
      className={styles.container}
      aria-labelledby="cohort-sidebar-heading"
    >
      <h2 id="cohort-sidebar-heading" className={styles.heading}>
        {t('research.cohort_heading')}
      </h2>

      <p
        className={styles.intro}
        dangerouslySetInnerHTML={{ __html: t('research.cohort_intro_p1') }}
      />
      <p
        className={styles.intro}
        dangerouslySetInnerHTML={{ __html: t('research.cohort_intro_p2') }}
      />

      <div className={styles.legend} aria-label={t('research.cohort_legend_aria')}>
        <span className={styles.legendItem}>
          <span className={styles.legendGlyph} style={{ color: 'var(--gold)' }}>↓</span>
          {t('research.cohort_legend_lineage')}
        </span>
        <span className={styles.legendItem}>
          <span className={styles.legendGlyph}>?</span>
          {t('research.cohort_legend_undocumented')}
        </span>
        <span className={styles.legendItem}>
          <span className={styles.legendGlyph}>†</span>
          {t('research.cohort_legend_no_issue')}
        </span>
        <span className={styles.legendItem}>
          <span className={styles.legendGlyph}>×</span>
          {t('research.cohort_legend_married_out')}
        </span>
      </div>

      <ul className={styles.list}>
        {sonEntries.map(renderEntry)}
      </ul>

      <div className={styles.daughtersHeading}>
        {t('research.cohort_daughters_subheading')}
      </div>

      <ul className={styles.list}>
        {daughterEntries.map(renderEntry)}
      </ul>
    </section>
  );
}
