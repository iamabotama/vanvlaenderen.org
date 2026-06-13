import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';
import { RobrechtDiagram } from '../components/Diagrams';
import { Helmet } from 'react-helmet-async';

export default function RobrechtLineagePage() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Robrecht van Vlaenderen — Lord of Elverdinghe and Vlamertinghe | vanvlaenderen.org</title>
        <meta name="description" content="The fourth surname-bearing bastard line of Louis II de Male: Robrecht van Vlaenderen, Lord of Elverdinghe and Vlamertinghe and Viscount of Ypres. Documented through three sons in the Ypres quarter, 1448–1491, to Karel's daughter and the de Crane marriage." />
        <link rel="canonical" href="https://vanvlaenderen.org/research/robrecht" />
        <meta property="og:title" content="Robrecht van Vlaenderen — Lord of Elverdinghe and Vlamertinghe" />
        <meta property="og:description" content="The fourth surname-bearing bastard line of Louis II de Male. Three documented sons in the Ypres quarter; line ends with Karel's daughter, c. 1491–1505." />
        <meta property="og:url" content="https://vanvlaenderen.org/research/robrecht" />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: 'center top' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen &middot; Genealogical Research</div>
          <h1 dangerouslySetInnerHTML={{ __html: t('robrecht.intro_heading') }} />
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            The fourth surname-bearing bastard line of Louis II de Male. Lord of Elverdinghe and Vlamertinghe just outside Ypres; Viscount of Ypres <em>jure uxoris</em>. Burgundian councillor and chamberlain to Dukes John the Fearless and Philip the Good. Three documented natural sons carried the surname through the second half of the fifteenth century; the line ends with Karel&rsquo;s daughter and her marriage into the de Crane family.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>Robrecht van Vlaenderen Dossier</h2>
          <div className={researchStyles.dossierMeta}>Updated June 2026</div>
        </div>

        {/* ── Intro ───────────────────────────────────────────────── */}
        <section className={styles.section}>
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.intro_p1') }} />
        </section>

        {/* ── Marriage and Territory ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('robrecht.marriage_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.marriage_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.marriage_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.marriage_p3') }} />
        </section>

        {/* ── Tomb ────────────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('robrecht.tomb_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.tomb_p1') }} />
          <blockquote className={styles.pullQuote} style={{ fontStyle: 'italic' }}>
            {t('robrecht.tomb_quote_inscription')}
          </blockquote>
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }} dangerouslySetInnerHTML={{ __html: t('robrecht.tomb_inscription_gloss') }} />
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.tomb_p2') }} />
          <blockquote className={styles.pullQuote} style={{ fontStyle: 'italic' }}>
            {t('robrecht.tomb_quote_anastasie_dutch')}
          </blockquote>
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.tomb_p3') }} />
        </section>

        {/* ── Mother: Ive sLuus ───────────────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('robrecht.mother_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.mother_p1') }} />
          <blockquote className={styles.pullQuote} style={{ fontStyle: 'italic' }}>
            {t('robrecht.mother_quote_bethune')}
          </blockquote>
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
            {t('robrecht.mother_quote_gloss')}
          </p>
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.mother_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.mother_p3') }} />
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.mother_evidence') }} />
        </section>

        {/* ── Interactive Diagram ─────────────────────────────────── */}
        <div className={researchStyles.treeContainer}>
          <RobrechtDiagram />
          <div className="sr-only">
            <h3>Robrecht van Vlaenderen lineage — text summary</h3>
            <p>{t('robrecht.diagram_sr_text')}</p>
          </div>
        </div>

        {/* ── Jean ────────────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('robrecht.jean_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.jean_p1') }} />
          <blockquote className={styles.pullQuote} style={{ fontStyle: 'italic' }}>
            {t('robrecht.jean_quote_diploma')}
          </blockquote>
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.jean_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.jean_evidence') }} />
        </section>

        {/* ── Caspar ──────────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('robrecht.caspar_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Hypothesis (descent)</span>
          </h2>
          <p>{t('robrecht.caspar_intro')}</p>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.caspar_bullet_1') }} />
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.caspar_bullet_2') }} />
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.caspar_bullet_3') }} />
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.caspar_bullet_4') }} />
          </ul>
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.caspar_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.caspar_evidence') }} />
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.caspar_falsifiability') }} />
        </section>

        {/* ── Karel ★ ─────────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('robrecht.karel_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h2>
          <p>{t('robrecht.karel_intro')}</p>

          <h3>{t('robrecht.karel_disambig_heading')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.karel_disambig_body') }} />
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.karel_disambig_falsifiability') }} />

          <h3>{t('robrecht.karel_subheading_buylaert')}</h3>
          <p>{t('robrecht.karel_buylaert_intro')}</p>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.karel_buylaert_bullet_1') }} />
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.karel_buylaert_bullet_2') }} />
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.karel_buylaert_bullet_3') }} />
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.karel_buylaert_bullet_4') }} />
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.karel_buylaert_bullet_5') }} />
          </ul>

          <h3>{t('robrecht.karel_subheading_vredius')}</h3>
          <p>{t('robrecht.karel_vredius_intro')}</p>
          <blockquote className={styles.pullQuote} style={{ fontStyle: 'italic' }}>
            {t('robrecht.karel_quote_epitaph')}
          </blockquote>
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
            {t('robrecht.karel_epitaph_gloss')}
          </p>

          <p dangerouslySetInnerHTML={{ __html: t('robrecht.karel_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.karel_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.karel_evidence') }} />
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.karel_falsifiability') }} />
        </section>

        {/* ── Daughter ────────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('robrecht.daughter_heading')}{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h2>
          <p>{t('robrecht.daughter_p1')}</p>
          <blockquote className={styles.pullQuote} style={{ fontStyle: 'italic' }}>
            {t('robrecht.daughter_quote_vredius')}
          </blockquote>
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
            {t('robrecht.daughter_quote_gloss')}
          </p>
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.daughter_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.daughter_p3') }} />
          <p>{t('robrecht.daughter_p4')}</p>
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.daughter_evidence') }} />
        </section>

        {/* ── Archival Evidence ──────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('robrecht.evidence_heading')}</h2>
          <p>{t('robrecht.evidence_intro')}</p>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.evidence_bullet_1') }} />
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.evidence_bullet_2') }} />
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.evidence_bullet_3') }} />
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.evidence_bullet_4') }} />
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.evidence_bullet_5') }} />
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.evidence_bullet_6') }} />
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.evidence_bullet_7') }} />
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.evidence_bullet_8') }} />
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.evidence_bullet_9') }} />
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.evidence_bullet_10') }} />
            <li dangerouslySetInnerHTML={{ __html: t('robrecht.evidence_bullet_11') }} />
          </ul>
        </section>

        {/* ── Open Questions ─────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('robrecht.questions_heading')}</h2>
          <p>{t('robrecht.questions_intro')}</p>
          <h3>{t('robrecht.questions_caspar_heading')}</h3>
          <p>{t('robrecht.questions_caspar_body')}</p>
          <h3>{t('robrecht.questions_prosopography_heading')}</h3>
          <p>{t('robrecht.questions_prosopography_body')}</p>
          <h3>{t('robrecht.questions_gaillard_heading')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('robrecht.questions_gaillard_body') }} />
        </section>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <Link className={styles.ctaBox} to="/contact">
          <div className={styles.ctaText}>
            Do you have research that connects to the line of Robrecht van Vlaenderen?
          </div>
          <div className={styles.ctaNote}>
            We welcome correspondence on the Caspar descent question, the Verdeghem and de Crane families, and the Gaillard MS provenance.
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
