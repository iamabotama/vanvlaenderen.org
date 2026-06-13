import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptHeraldry from '../assets/images/heraldic/cronike-van-vlaenderen-counts-heraldry.jpg';
import { JanDrinchamDiagram } from '../components/Diagrams';
import { Helmet } from 'react-helmet-async';

export default function JanSansTerreLineagePage() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{`${t('jan_sans_terre.page_title')} | vanvlaenderen.org`}</title>
        <meta name="description" content={t('jan_sans_terre.meta_description')} />
        <link rel="canonical" href="https://vanvlaenderen.org/research/jan-sans-terre" />
        <meta property="og:title" content={t('jan_sans_terre.og_title')} />
        <meta property="og:description" content={t('jan_sans_terre.og_description')} />
        <meta property="og:url" content="https://vanvlaenderen.org/research/jan-sans-terre" />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────── */}
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${manuscriptHeraldry})`, backgroundPosition: 'center center' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen &middot; Genealogical Research</div>
          <h1 dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.intro_heading') }} />
          <div className="gold-rule" />
          <p className={styles.heroLead} dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.hero_lead') }} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>Jan &ldquo;sans terre&rdquo; van Vlaenderen Dossier</h2>
          <div className={researchStyles.dossierMeta}>Updated June 2026</div>
        </div>

        {/* ── Intro ──────────────────────────────────────── */}
        <section className={styles.section}>
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.intro_p1') }} />
        </section>

        {/* ── Career and 1383 Drincham Grant ─────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('jan_sans_terre.career_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.career_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.career_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.career_evidence') }} />
        </section>

        {/* ── Marriage at Arras ────────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('jan_sans_terre.marriage_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.marriage_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.marriage_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.marriage_evidence') }} />
        </section>

        {/* ── 1393 Broekburg Relief Waiver ─────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('jan_sans_terre.relief_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.relief_p1') }} />
          <blockquote className={styles.pullQuote} style={{ fontStyle: 'italic' }}>
            {t('jan_sans_terre.relief_quote')}
          </blockquote>
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
            {t('jan_sans_terre.relief_quote_gloss')}
          </p>
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.relief_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.relief_evidence') }} />
        </section>

        {/* ── Death at Nicopolis ───────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('jan_sans_terre.nicopolis_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.nicopolis_p1') }} />
          <blockquote className={styles.pullQuote} style={{ fontStyle: 'italic' }}>
            {t('jan_sans_terre.nicopolis_quote_triad')}
          </blockquote>
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
            {t('jan_sans_terre.nicopolis_quote_gloss')}
          </p>
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.nicopolis_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.nicopolis_evidence') }} />
        </section>

        {/* ── Interactive Diagram ──────────────────────────── */}
        <div className={researchStyles.treeContainer}>
          <JanDrinchamDiagram />
          <div className="sr-only">
            <h3>Jan &ldquo;sans terre&rdquo; van Vlaenderen lineage &mdash; text summary</h3>
            <p>{t('jan_sans_terre.diagram_sr_text')}</p>
          </div>
        </div>

        {/* ── Second-Generation Heir ───────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('jan_sans_terre.heir_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelProbable}`}>Probable</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.heir_p1') }} />
          <blockquote className={styles.pullQuote} style={{ fontStyle: 'italic' }}>
            {t('jan_sans_terre.heir_quote_furnes')}
          </blockquote>
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
            {t('jan_sans_terre.heir_quote_gloss')}
          </p>
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.heir_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.heir_evidence') }} />
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.heir_falsifiability') }} />
        </section>

        {/* ── Drincham Disambiguation ──────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('jan_sans_terre.disambig_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.disambig_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.disambig_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.disambig_p3') }} />
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.disambig_evidence') }} />
        </section>

        {/* ── Line After 1419 ───────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('jan_sans_terre.later_heading')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.later_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.later_p2') }} />
        </section>

        {/* ── Donche Consolidation: Six Generations ─────────── */}
        <section className={styles.section}>
          <h2>
            {t('jan_sans_terre.donche_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.donche_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.donche_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.donche_p3') }} />
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.donche_evidence') }} />
        </section>

        {/* ── Archival Evidence ───────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('jan_sans_terre.evidence_heading')}</h2>
          <p>{t('jan_sans_terre.evidence_intro')}</p>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.evidence_bullet_1') }} />
            <li dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.evidence_bullet_2') }} />
            <li dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.evidence_bullet_3') }} />
            <li dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.evidence_bullet_4') }} />
            <li dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.evidence_bullet_5') }} />
            <li dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.evidence_bullet_6') }} />
            <li dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.evidence_bullet_7') }} />
            <li dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.evidence_bullet_8') }} />
            <li dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.evidence_bullet_9') }} />
            <li dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.evidence_bullet_10') }} />
            <li dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.evidence_bullet_11') }} />
          </ul>
        </section>

        {/* ── Open Questions ─────────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('jan_sans_terre.questions_heading')}</h2>
          <p>{t('jan_sans_terre.questions_intro')}</p>
          <h3>{t('jan_sans_terre.questions_heir_heading')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.questions_heir_body') }} />
          <h3>{t('jan_sans_terre.questions_lichtervelde_heading')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.questions_lichtervelde_body') }} />
        </section>

        {/* ── CTA ────────────────────────────────────────── */}
        <Link className={styles.ctaBox} to="/contact">
          <div className={styles.ctaText} dangerouslySetInnerHTML={{ __html: t('jan_sans_terre.cta_text') }} />
          <div className={styles.ctaNote}>
            {t('jan_sans_terre.cta_note')}
          </div>
        </Link>

        <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(232, 184, 48, 0.2)' }}>
          <Link
            to="/research"
            style={{
              color: 'var(--gold)',
              fontSize: '16px',
              textDecoration: 'underline',
              fontFamily: 'var(--font-ui)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            Back to Research Overview
          </Link>
        </div>
      </div>
    </div>
  );
}
