import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';
import { PraetDiagram } from '../components/Diagrams';
import { Helmet } from 'react-helmet-async';

export default function LouisFrieseLineagePage() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{`${t('louis_friese.page_title')} | vanvlaenderen.org`}</title>
        <meta name="description" content={t('louis_friese.meta_description')} />
        <link rel="canonical" href="https://vanvlaenderen.org/research/louis-friese" />
        <meta property="og:title" content={t('louis_friese.og_title')} />
        <meta property="og:description" content={t('louis_friese.og_description')} />
        <meta property="og:url" content="https://vanvlaenderen.org/research/louis-friese" />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────── */}
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: 'center top' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen &middot; Genealogical Research</div>
          <h1 dangerouslySetInnerHTML={{ __html: t('louis_friese.intro_heading') }} />
          <div className="gold-rule" />
          <p className={styles.heroLead} dangerouslySetInnerHTML={{ __html: t('louis_friese.hero_lead') }} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>Louis Friese van Vlaenderen Dossier</h2>
          <div className={researchStyles.dossierMeta}>Updated May 2026</div>
        </div>

        {/* ── Intro ──────────────────────────────────────── */}
        <section className={styles.section}>
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.intro_p1') }} />
        </section>

        {/* ── Identity & 1373 Praet Acquisition ──────────── */}
        <section className={styles.section}>
          <h2>
            {t('louis_friese.praet_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.praet_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.praet_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.praet_evidence') }} />
        </section>

        {/* ── Two Marriages ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('louis_friese.marriage_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.marriage_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.marriage_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.marriage_evidence') }} />
        </section>

        {/* ── Death at Nicopolis ─────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('louis_friese.nicopolis_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.nicopolis_p1') }} />
          <blockquote className={styles.pullQuote} style={{ fontStyle: 'italic' }}>
            {t('louis_friese.nicopolis_quote_triad')}
          </blockquote>
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
            {t('louis_friese.nicopolis_quote_gloss')}
          </p>
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.nicopolis_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.nicopolis_evidence') }} />
        </section>

        {/* ── Interactive Diagram ────────────────────────── */}
        <div className={researchStyles.treeContainer}>
          <PraetDiagram />
          <div className="sr-only">
            <h3>Louis Friese van Vlaenderen lineage &mdash; text summary</h3>
            <p>{t('louis_friese.diagram_sr_text')}</p>
          </div>
        </div>

        {/* ── Heir & Continuation ────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('louis_friese.heir_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.heir_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.heir_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.heir_evidence') }} />
        </section>

        {/* ── Drincham Disambiguation ────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('louis_friese.disambig_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.disambig_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.disambig_evidence') }} />
        </section>

        {/* ── The Praet Line, Five Generations ───────────── */}
        <section className={styles.section}>
          <h2>
            {t('louis_friese.later_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.later_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.later_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('louis_friese.later_p3') }} />
        </section>

        {/* ── Archival Evidence Summary ──────────────────── */}
        <section className={styles.section}>
          <h2>{t('louis_friese.evidence_heading')}</h2>
          <p>{t('louis_friese.evidence_intro')}</p>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: t('louis_friese.evidence_bullet_1') }} />
            <li dangerouslySetInnerHTML={{ __html: t('louis_friese.evidence_bullet_2') }} />
            <li dangerouslySetInnerHTML={{ __html: t('louis_friese.evidence_bullet_3') }} />
            <li dangerouslySetInnerHTML={{ __html: t('louis_friese.evidence_bullet_4') }} />
            <li dangerouslySetInnerHTML={{ __html: t('louis_friese.evidence_bullet_5') }} />
            <li dangerouslySetInnerHTML={{ __html: t('louis_friese.evidence_bullet_6') }} />
            <li dangerouslySetInnerHTML={{ __html: t('louis_friese.evidence_bullet_7') }} />
            <li dangerouslySetInnerHTML={{ __html: t('louis_friese.evidence_bullet_8') }} />
          </ul>
        </section>

        {/* ── Open Research Questions ────────────────────── */}
        <section className={styles.section}>
          <h2>{t('louis_friese.questions_heading')}</h2>
          <p>{t('louis_friese.questions_intro')}</p>
          <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
            {t('louis_friese.questions_marie_heading')}
          </h3>
          <p>{t('louis_friese.questions_marie_body')}</p>
          <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
            {t('louis_friese.questions_cadet_heading')}
          </h3>
          <p>{t('louis_friese.questions_cadet_body')}</p>
        </section>

        {/* ── Dossier Links ──────────────────────────────── */}
        <section className={styles.section} style={{ marginTop: '3rem', borderTop: '1px solid rgba(232, 184, 48, 0.2)', paddingTop: '2rem' }}>
          <div className={researchStyles.branchCards}>
            <Link
              to="/research/praet-dossier"
              className={researchStyles.branchCard}
              style={{ borderTop: '3px solid var(--gold)' }}
              aria-label="Louis Friese: Archival Dossier"
            >
              <h3>Louis Friese: Archival Dossier</h3>
              <p>Primary source extracts, territorial history, and the surname van Vlaenderen as comital identity.</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                View Archival Evidence &rarr;
              </span>
            </Link>
            <Link
              to="/research/praet-lineage-dossier"
              className={researchStyles.branchCard}
              style={{ borderTop: '3px solid var(--gold)' }}
              aria-label="House of Praet: Lineage Dossier"
            >
              <h3>House of Praet: Lineage Dossier</h3>
              <p>Six generations with primary-source confirmed data. Includes Johan I's five children, Lodewijk II's six children (including Jean de Flandre and the Josse de Flandre cadet branch), and the 1517 Knesselare charter.</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                View Lineage Evidence &rarr;
              </span>
            </Link>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────── */}
        <Link className={styles.ctaBox} to="/contact">
          <div className={styles.ctaText}>
            {t('louis_friese.cta_text')}
          </div>
          <div className={styles.ctaNote}>
            {t('louis_friese.cta_note')}
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
            {t('louis_friese.back_button')}
          </Link>
        </div>
      </div>
    </div>
  );
}
