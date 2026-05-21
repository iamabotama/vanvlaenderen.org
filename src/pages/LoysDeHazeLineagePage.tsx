import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptKnight from '../assets/images/heraldic/cronike-van-vlaenderen-philip-of-alsace-knight.jpg';
import { LoysDeHazeDiagram } from '../components/Diagrams';
import { Helmet } from 'react-helmet-async';

export default function LoysDeHazeLineagePage() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{`${t('loys.page_title')} | vanvlaenderen.org`}</title>
        <meta name="description" content={t('loys.meta_description')} />
        <link rel="canonical" href="https://vanvlaenderen.org/research/loys-le-hase" />
        <meta property="og:title" content={t('loys.og_title')} />
        <meta property="og:description" content={t('loys.og_description')} />
        <meta property="og:url" content="https://vanvlaenderen.org/research/loys-le-hase" />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────── */}
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${manuscriptKnight})`, backgroundPosition: 'center top' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen &middot; Genealogical Research</div>
          <h1 dangerouslySetInnerHTML={{ __html: t('loys.intro_heading') }} />
          <div className="gold-rule" />
          <p className={styles.heroLead} dangerouslySetInnerHTML={{ __html: t('loys.hero_lead') }} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>Loys &ldquo;le Hase&rdquo; van Vlaenderen Dossier</h2>
          <div className={researchStyles.dossierMeta}>Updated May 2026</div>
        </div>

        {/* ── Intro ──────────────────────────────────────── */}
        <section className={styles.section}>
          <p dangerouslySetInnerHTML={{ __html: t('loys.intro_p1') }} />
        </section>

        {/* ── Career and Council Service ────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('loys.career_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('loys.career_p1') }} />
          <blockquote className={styles.pullQuote} style={{ fontStyle: 'italic' }}>
            {t('loys.career_quote_white_caproens')}
          </blockquote>
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
            {t('loys.career_caproens_gloss')}
          </p>
          <p dangerouslySetInnerHTML={{ __html: t('loys.career_p2') }} />
          <blockquote className={styles.pullQuote} style={{ fontStyle: 'italic' }}>
            {t('loys.career_quote_biervliet')}
          </blockquote>
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
            {t('loys.career_biervliet_gloss')}
          </p>
          <p dangerouslySetInnerHTML={{ __html: t('loys.career_p3') }} />
          <p dangerouslySetInnerHTML={{ __html: t('loys.career_evidence') }} />
        </section>

        {/* ── Marriage and Territorial Holdings ─────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('loys.marriage_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested / Hypothesis</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('loys.marriage_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('loys.marriage_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('loys.marriage_p3') }} />
          <p dangerouslySetInnerHTML={{ __html: t('loys.marriage_evidence') }} />
          <p dangerouslySetInnerHTML={{ __html: t('loys.marriage_falsifiability') }} />
        </section>

        {/* ── Death at Nicopolis ───────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('loys.nicopolis_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('loys.nicopolis_p1') }} />
          <blockquote className={styles.pullQuote} style={{ fontStyle: 'italic' }}>
            {t('loys.nicopolis_quote_triad')}
          </blockquote>
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
            {t('loys.nicopolis_quote_gloss')}
          </p>
          <p dangerouslySetInnerHTML={{ __html: t('loys.nicopolis_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('loys.nicopolis_evidence') }} />
        </section>

        {/* ── Interactive Diagram ──────────────────────────── */}
        <div className={researchStyles.treeContainer}>
          <LoysDeHazeDiagram />
          <div className="sr-only">
            <h3>Loys &ldquo;le Hase&rdquo; van Vlaenderen lineage — text summary</h3>
            <p>{t('loys.diagram_sr_text')}</p>
          </div>
        </div>

        {/* ── The Sons ───────────────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('loys.sons_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Probable</span>
          </h2>
          <p>{t('loys.sons_intro')}</p>
          <p dangerouslySetInnerHTML={{ __html: t('loys.sons_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('loys.sons_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('loys.sons_evidence') }} />
          <p dangerouslySetInnerHTML={{ __html: t('loys.sons_falsifiability') }} />
        </section>

        {/* ── The Daughters ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('loys.daughters_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Probable</span>
          </h2>
          <p>{t('loys.daughters_intro')}</p>
          <p dangerouslySetInnerHTML={{ __html: t('loys.daughters_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('loys.daughters_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('loys.daughters_evidence') }} />
          <p dangerouslySetInnerHTML={{ __html: t('loys.daughters_falsifiability') }} />
        </section>

        {/* ── Estate Disposition ───────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('loys.estate_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('loys.estate_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('loys.estate_p2') }} />
        </section>

        {/* ── Archival Evidence ───────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('loys.evidence_heading')}</h2>
          <p>{t('loys.evidence_intro')}</p>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: t('loys.evidence_bullet_1') }} />
            <li dangerouslySetInnerHTML={{ __html: t('loys.evidence_bullet_2') }} />
            <li dangerouslySetInnerHTML={{ __html: t('loys.evidence_bullet_3') }} />
            <li dangerouslySetInnerHTML={{ __html: t('loys.evidence_bullet_4') }} />
            <li dangerouslySetInnerHTML={{ __html: t('loys.evidence_bullet_5') }} />
            <li dangerouslySetInnerHTML={{ __html: t('loys.evidence_bullet_6') }} />
            <li dangerouslySetInnerHTML={{ __html: t('loys.evidence_bullet_7') }} />
            <li dangerouslySetInnerHTML={{ __html: t('loys.evidence_bullet_8') }} />
            <li dangerouslySetInnerHTML={{ __html: t('loys.evidence_bullet_9') }} />
          </ul>
        </section>

        {/* ── Open Questions ─────────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('loys.questions_heading')}</h2>
          <p>{t('loys.questions_intro')}</p>
          <h3>{t('loys.questions_landas_heading')}</h3>
          <p>{t('loys.questions_landas_body')}</p>
          <h3>{t('loys.questions_loo_heading')}</h3>
          <p>{t('loys.questions_loo_body')}</p>
          <h3>{t('loys.questions_second_gen_heading')}</h3>
          <p>{t('loys.questions_second_gen_body')}</p>
          <h3>{t('loys.questions_1419_heading')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('loys.questions_1419_body') }} />
          <h3>{t('loys.questions_toponyms_heading')}</h3>
          <p>{t('loys.questions_toponyms_body')}</p>
        </section>

        {/* ── CTA ────────────────────────────────────────── */}
        <Link className={styles.ctaBox} to="/contact">
          <div className={styles.ctaText} dangerouslySetInnerHTML={{ __html: t('loys.cta_text') }} />
          <div className={styles.ctaNote}>
            {t('loys.cta_note')}
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
