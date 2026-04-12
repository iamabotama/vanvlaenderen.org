import { useTranslation } from 'react-i18next';
import styles from './InnerPage.module.css';
import aboutStyles from './AboutPage.module.css';
import michaelConstanceCanal from '../assets/images/michael-constance-canal.jpg';
import { useNav } from '../hooks/useNav';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  const { goTo } = useNav();
  const { t } = useTranslation();
  return (
    <div className={styles.page}>
      <Helmet>
        <title>About — Lions of Flanders Project | vanvlaenderen.org</title>
        <meta name="description" content="About the Lions of Flanders project: Michael and Constance Van Flandern's 15-year research into Flemish heritage, archival fieldwork in Belgium, and the path from Bassevelde to America." />
        <link rel="canonical" href="https://vanvlaenderen.org/about" />
        <meta property="og:title" content="About — Lions of Flanders Project" />
        <meta property="og:description" content="Fifteen years of research into a Flemish family name. Archival fieldwork in Ghent, Bruges, and the Meetjesland." />
        <meta property="og:url" content="https://vanvlaenderen.org/about" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ── Text-only Hero ────────────────────────────────────────── */}
      <div className={styles.textHero}>
        <div className={styles.eyebrow}>{t('about.hero_eyebrow')}</div>
        <h1>{t('about.hero_title')}</h1>
        <div className="gold-rule" />
        <p className={styles.heroLead}>
          {t('about.hero_lead')}
        </p>
      </div>

      <div className={styles.content}>

        <section className={styles.section}>
          <h2>{t('about.scope_heading')}</h2>
          <p>
            {t('about.scope_intro')}
          </p>
          <p>
            {t('about.scope_sources')}
          </p>
        </section>

        <div className={aboutStyles.sourcesList}>
          <div className={aboutStyles.sourceItem}>
            <div className={aboutStyles.sourceLabel}>{t('about.source_parish')}</div>
            <div className={aboutStyles.sourceDesc}>
              {t('about.source_parish_desc')}
            </div>
          </div>
          <div className={aboutStyles.sourceItem}>
            <div className={aboutStyles.sourceLabel}>{t('about.source_estate')}</div>
            <div className={aboutStyles.sourceDesc}>
              {t('about.source_estate_desc')}
            </div>
          </div>
          <div className={aboutStyles.sourceItem}>
            <div className={aboutStyles.sourceLabel}>{t('about.source_land')}</div>
            <div className={aboutStyles.sourceDesc}>
              {t('about.source_land_desc')}
            </div>
          </div>
          <div className={aboutStyles.sourceItem}>
            <div className={aboutStyles.sourceLabel}>{t('about.source_dna')}</div>
            <div className={aboutStyles.sourceDesc}>
              {t('about.source_dna_desc')}
            </div>
          </div>
        </div>

        <section className={styles.section}>
          <p>
            {t('about.methodology_note')}
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => goTo('research')}
              style={{
                background: 'none',
                border: '1px solid rgba(232,184,48,0.35)',
                borderRadius: '4px',
                color: 'var(--gold)',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-ui)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.5rem 1.1rem',
              }}
            >
              Research Overview &rarr;
            </button>
            <button
              onClick={() => goToResearch('methodology')}
              style={{
                background: 'none',
                border: '1px solid rgba(232,184,48,0.35)',
                borderRadius: '4px',
                color: 'var(--gold)',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-ui)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.5rem 1.1rem',
              }}
            >
              Methodology &amp; Sources &rarr;
            </button>
          </div>
        </section>

        <section className={styles.section}>
          <h2>{t('about.origins_heading')}</h2>
          <p>
            {t('about.origins_body')}
          </p>
        </section>

        <div className={aboutStyles.photoContainer}>
          <img
            src={michaelConstanceCanal}
            alt="Michael and Constance conducting field research in East Flanders"
            className={aboutStyles.photo}
          />
          <div className={aboutStyles.photoCaption}>
            {t('about.photo_caption')}
          </div>
        </div>

        <section className={styles.section}>
          <h2>{t('about.goals_heading')}</h2>
          <p>
            {t('about.goals_intro')}
          </p>
          <p>
            {t('about.goals_seeking')}
          </p>
        </section>

        <div className={aboutStyles.collaborationGrid}>
          <div className={aboutStyles.collaborationCard}>
            <div className={aboutStyles.collaborationTitle}>{t('about.collab_historians')}</div>
            <div className={aboutStyles.collaborationDesc}>
              {t('about.collab_historians_desc')}
            </div>
          </div>
          <div className={aboutStyles.collaborationCard}>
            <div className={aboutStyles.collaborationTitle}>{t('about.collab_dna')}</div>
            <div className={aboutStyles.collaborationDesc}>
              {t('about.collab_dna_desc')}
            </div>
          </div>
          <div className={aboutStyles.collaborationCard}>
            <div className={aboutStyles.collaborationTitle}>{t('about.collab_family')}</div>
            <div className={aboutStyles.collaborationDesc}>
              {t('about.collab_family_desc')}
            </div>
          </div>
        </div>

        <section className={styles.section}>
          <p>
            {t('about.closing')}
          </p>
        </section>

        <section className={styles.section}>
          <h2>{t('about.lineage_cta_heading')}</h2>
          <p>
            {t('about.lineage_cta_body')}
          </p>
          <button 
            className={styles.ctaBox}
            onClick={() => goTo('lineage')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, width: '100%', textAlign: 'center' }}
          >
            <div className={styles.ctaText}>
              {t('about.lineage_cta_link')}
            </div>
          </button>
        </section>

        <button 
          className={styles.ctaBox}
          onClick={() => goTo('contact')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, width: '100%', textAlign: 'center' }}
        >
          <div className={styles.ctaText}>
            {t('about.contact_cta_body')}
          </div>
          <div className={styles.ctaNote}>
            {t('about.contact_cta_note')}
          </div>
        </button>
      </div>
    </div>
  );
}
