import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import styles from './InnerPage.module.css';

/**
 * LicensePage
 *
 * Human-readable statement of how the project's license (CC BY 4.0 for research
 * content, MIT for code) applies to the different kinds of material on the site.
 * Linked from the site Footer. Addresses the scholarly-citation nuance around
 * primary-source transcriptions explicitly, because a naive "CC BY 4.0" line in
 * the Footer doesn't communicate the distinction between project-authored
 * analysis and project-transcribed primary sources.
 */
export default function LicensePage() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{`${t('license.page_title')} — Van Vlaenderen`}</title>
        <meta name="description" content={t('license.meta_description')} />
        <link rel="canonical" href="https://vanvlaenderen.org/license" />
      </Helmet>

      <div className={styles.inner}>
        <h1>{t('license.heading')}</h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2.5rem', maxWidth: '680px', lineHeight: 1.7 }}>
          {t('license.intro')}
        </p>

        <section className={styles.section}>
          <h2>{t('license.research_heading')}</h2>
          <p>{t('license.research_body1')}</p>
          <p>{t('license.research_body2')}</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--gold)' }}
            >
              {t('license.cc_by_link_label')}
            </a>
          </p>
        </section>

        <section className={styles.section}>
          <h2>{t('license.transcriptions_heading')}</h2>
          <p>{t('license.transcriptions_body1')}</p>
          <p>{t('license.transcriptions_body2')}</p>
        </section>

        <section className={styles.section}>
          <h2>{t('license.code_heading')}</h2>
          <p>{t('license.code_body')}</p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <a
              href="https://github.com/iamabotama/vanvlaenderen.org/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--gold)' }}
            >
              {t('license.mit_link_label')}
            </a>
          </p>
        </section>

        <section className={styles.section}>
          <h2>{t('license.third_party_heading')}</h2>
          <p>{t('license.third_party_body')}</p>
        </section>

        <section className={styles.section}>
          <h2>{t('license.contact_heading')}</h2>
          <p>{t('license.contact_body')}</p>
        </section>

        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', marginTop: '3rem' }}>
          {t('license.last_reviewed')}
        </p>
      </div>
    </div>
  );
}
