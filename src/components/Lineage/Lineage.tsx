import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { AncestorRecord, EvidenceStatus } from './types';
import { vanVlaenderenLineage } from './data';
import styles from './Lineage.module.css';

// ─── Status config ────────────────────────────────────────────────────────────

const STATUS_COLOR: Record<EvidenceStatus, string> = {
  documented: 'var(--status-documented)',
  partial:    'var(--status-partial)',
  inferred:   'var(--status-inferred)',
  modern:     'var(--status-modern)',
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function RecordBadge({
  type,
  record,
}: {
  type: 'birth' | 'marriage' | 'death';
  record?: { label: string; url?: string };
}) {
  const { t } = useTranslation();
  if (!record) return null;

  const label = t(`lineage.record_${type}`);
  const content = (
    <span className={`${styles.badge} ${styles[`badge_${type}`]}`}>
      {label}
    </span>
  );

  if (record.url) {
    return (
      <a
        href={record.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.badgeLink}
        title={`${t('lineage.view_archive')}: ${record.label}`}
        aria-label={`${label}: ${record.label} — ${t('lineage.view_archive')}`}
      >
        {content}
        <span className={styles.badgeLinkIcon} aria-hidden="true">↗</span>
      </a>
    );
  }

  return <span title={record.label} aria-label={`${label}: ${record.label}`}>{content}</span>;
}

function DetailPanel({ ancestor }: { ancestor: AncestorRecord }) {
  const { t } = useTranslation();

  const rows = [
    { label: t('lineage.detail_born'),     value: ancestor.born },
    { label: t('lineage.detail_parish'),   value: ancestor.parish },
    { label: t('lineage.detail_birth'),    value: ancestor.birthRecord?.label,    url: ancestor.birthRecord?.url },
    { label: t('lineage.detail_marriage'), value: ancestor.marriageRecord?.label },
    { label: t('lineage.detail_death'),    value: ancestor.deathRecord?.label },
    { label: t('lineage.detail_status'),   value: t(`lineage.status_${ancestor.status}`) },
  ].filter(r => r.value);

  return (
    <div className={styles.detail} role="region" aria-label={ancestor.name}>
      <h3 className={styles.detailName}>{ancestor.name}</h3>
      <dl className={styles.detailGrid}>
        {rows.map(row => (
          <div key={row.label} className={styles.detailRow}>
            <dt className={styles.detailLabel}>{row.label}</dt>
            <dd className={styles.detailValue}>
              {row.url ? (
                <a
                  href={row.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.archiveLink}
                >
                  {row.value}
                  <span aria-hidden="true"> ↗</span>
                </a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
      {ancestor.comment && (
        <p className={styles.detailComment}>{ancestor.comment}</p>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function LineagePage() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<number | null>(null);

  const activeAncestor = vanVlaenderenLineage.find(a => a.id === activeId) ?? null;

  const handleSelect = (id: number) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <main className={styles.page}>
      {/* Page header */}
      <header className={styles.header}>
        <h1 className={styles.title}>{t('lineage.page_title')}</h1>
        <p className={styles.intro}>{t('lineage.page_intro')}</p>
      </header>

      {/* Nieus cultural context note */}
      <div style={{
        maxWidth: '780px',
        margin: '0 auto 1.5rem',
        padding: '1rem 1.5rem',
        background: 'rgba(232,184,48,0.04)',
        border: '1px solid rgba(232,184,48,0.18)',
        borderRadius: '4px',
        fontSize: '0.875rem',
        color: 'var(--text-muted)',
        lineHeight: 1.7,
      }}>
        The surname Van Vlaenderen — <em>from Flanders</em> — was anything but generic in a noble context. The black lion on gold that defines Flemish heraldic identity had been the comital seal device since at least 1163, when Count Philip of Alsace placed it on his seal matrix, sparking a wave of imitation across the Flemish nobility. In medieval Flanders, territorial designations functioned as dynastic and political language: scholarly research on twelfth-century noble sigillography has shown that aristocratic families used visual and symbolic culture tied to territory as an explicit marker of identity and claim. To carry the name <em>van Vlaenderen</em> in an elite milieu was to carry that symbolism.{' '}
        <span style={{ fontStyle: 'italic', opacity: 0.75 }}>Nieus, "Aristocratic seal ownership in twelfth-century Flanders," 2021, pp. 23–26.</span>
      </div>
      <div className={styles.legend} role="list" aria-label={t('lineage.legend_label')}>
        {(['documented', 'partial', 'inferred', 'modern'] as EvidenceStatus[]).map(s => (
          <div key={s} className={styles.legendItem} role="listitem">
            <span
              className={styles.legendDot}
              style={{ background: STATUS_COLOR[s] }}
              aria-hidden="true"
            />
            <span>{t(`lineage.status_${s}`)}</span>
          </div>
        ))}
        <span className={styles.legendHint}>{t('lineage.click_hint')}</span>
      </div>

      {/* Tree */}
      <div className={styles.tree} role="list" aria-label={t('lineage.tree_label')}>
        {vanVlaenderenLineage.map((ancestor, index) => {
          const isActive = activeId === ancestor.id;
          const isFirst  = index === 0;
          const isLast   = index === vanVlaenderenLineage.length - 1;

          return (
            <div key={ancestor.id} className={styles.row} role="listitem">
              {/* Generation label */}
              <span className={styles.genLabel} aria-label={`${t('lineage.generation')} ${ancestor.generation}`}>
                {ancestor.generation}
              </span>

              {/* Vertical connector line */}
              <div
                className={styles.connector}
                aria-hidden="true"
                data-first={isFirst || undefined}
                data-last={isLast || undefined}
              />

              {/* Ancestor card */}
              <button
                className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
                style={{ '--status-color': STATUS_COLOR[ancestor.status] } as React.CSSProperties}
                onClick={() => handleSelect(ancestor.id)}
                aria-pressed={isActive}
                aria-expanded={isActive}
                aria-controls={isActive ? `detail-${ancestor.id}` : undefined}
              >
                <span className={styles.cardName}>{ancestor.name}</span>
                {ancestor.born && (
                  <span className={styles.cardDate}>
                    {t('lineage.born_prefix')} {ancestor.born}
                  </span>
                )}
                <span className={styles.cardParish}>{ancestor.parish}</span>
                <span className={styles.badgeRow} aria-label={t('lineage.records_available')}>
                  <RecordBadge type="birth"    record={ancestor.birthRecord} />
                  <RecordBadge type="marriage" record={ancestor.marriageRecord} />
                  <RecordBadge type="death"    record={ancestor.deathRecord} />
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Detail panel — shown below tree when a card is selected */}
      {activeAncestor && (
        <div id={`detail-${activeAncestor.id}`}>
          <DetailPanel ancestor={activeAncestor} />
        </div>
      )}

      {/* Source note */}
      <p className={styles.sourceNote}>
        {t('lineage.source_note')}{' '}
        <a
          href="https://agatha.arch.be"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.archiveLink}
        >
          Rijksarchief Gent (AGATHA)
        </a>
        {t('lineage.source_note_2')}
      </p>
    </main>
  );
}
