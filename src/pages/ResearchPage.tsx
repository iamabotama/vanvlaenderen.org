import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';
import { OverviewDiagram } from '../components/Diagrams';
import { lazy, Suspense } from 'react';
import { useNav } from '../hooks/useNav';

// Leaflet touches window on import — lazy-load so it's skipped during SSR prerender
const ResearchMap = lazy(() => import('../components/ResearchMap/ResearchMap'));
import { Helmet } from 'react-helmet-async';

export default function ResearchPage() {
  const { goToResearch } = useNav();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Research Overview — Van Vlaenderen Archival Dossiers | vanvlaenderen.org</title>
        <meta name="description" content="Archival research into the Van Vlaenderen surname: three documented comital bastard lines of Louis II de Male — Victor (Meetjesland), Louis Friese / Praet (Meetjesland and Brabant, anchored at the Aalter Vrijhof to c. 1590), and Jan sans terre / Drincham (French Flanders) — and the geographic clusters they left in the modern record." />
        <link rel="canonical" href="https://vanvlaenderen.org/research" />
        <meta property="og:title" content="Research Overview — Van Vlaenderen Archival Dossiers" />
        <meta property="og:description" content="Archival research into the Van Vlaenderen surname: three documented comital bastard lines of Louis II de Male — Victor (Meetjesland), Louis Friese / Praet (Meetjesland and Brabant, anchored at the Aalter Vrijhof to c. 1590), and Jan sans terre / Drincham (French Flanders) — and the geographic clusters they left in the modern record." />
        <meta property="og:url" content="https://vanvlaenderen.org/research" />
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
          <div className={styles.eyebrow}>{t('research.hero_eyebrow')}</div>
          <h1>{t('research.hero_title')}</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead} style={{ fontStyle: 'italic', marginBottom: '0.75em' }}>
            {t('research.hero_subhead')}
          </p>
          <p className={styles.heroLead} dangerouslySetInnerHTML={{ __html: t('research.hero_lead_p1') }} />
          <p className={styles.heroLead} dangerouslySetInnerHTML={{ __html: t('research.hero_lead_p2') }} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>{t('research.dossier_title')}</h2>
          <div className={researchStyles.dossierMeta}>{t('research.dossier_updated')}</div>
        </div>

        {/* ── Plain-English TL;DR callout ──────────────────────────── */}
        <div style={{
          margin: '2rem 0 2.5rem',
          padding: '1.5rem 1.75rem',
          background: 'rgba(232,184,48,0.04)',
          border: '1px solid rgba(232,184,48,0.25)',
          borderLeft: '3px solid var(--gold)',
          borderRadius: '3px',
        }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            color: 'var(--gold)',
            marginBottom: '0.6rem',
            letterSpacing: '0.02em',
          }}>
            {t('research.tldr_heading')}
          </div>
          <p style={{ margin: 0, lineHeight: 1.7, color: 'var(--text-primary)' }} dangerouslySetInnerHTML={{ __html: t('research.tldr_body_p1') }} />
          <p style={{ margin: '1em 0 0', lineHeight: 1.7, color: 'var(--text-primary)' }} dangerouslySetInnerHTML={{ __html: t('research.tldr_body_p2') }} />
        </div>

        {/* ── Three-Line Structure ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('research.four_lines_heading')}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>
              {t('research.method_corroborated_label')}
            </span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('research.four_lines_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('research.four_lines_p2') }} />

          {/* Toponymic Paradox teaser (reframed Four Functions teaser) */}
          <div style={{
            marginTop: '1.75rem',
            padding: '1.25rem 1.5rem',
            background: 'rgba(232,184,48,0.04)',
            border: '1px solid rgba(232,184,48,0.2)',
            borderRadius: '4px',
          }}>
            <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-ui)', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              {t('research.paradox_eyebrow')}
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>
              {t('research.paradox_title')}
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '0.9rem', fontStyle: 'normal' }} dangerouslySetInnerHTML={{ __html: t('research.paradox_body') }} />
            <button
              onClick={() => { navigate('/name/surname-origins'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{
                background: 'none',
                border: '1px solid rgba(232,184,48,0.35)',
                color: 'var(--gold)',
                padding: '0.45rem 1rem',
                cursor: 'pointer',
                borderRadius: '3px',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-ui)',
                letterSpacing: '0.06em',
              }}
            >
              {t('research.paradox_button')}
            </button>
          </div>
        </section>

        {/* ── Overview Diagram ────────────────────────────────────── */}
        <div className={researchStyles.treeContainer}>
          <OverviewDiagram />
          <div className="sr-only">
            <h3>{t('research.diagram_sr_heading')}</h3>
            <p>{t('research.diagram_sr_text')}</p>
          </div>
        </div>

        {/* ── Branch Cards ────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('research.branches_heading')}</h2>
        </section>

        <div className={researchStyles.branchCards}>
          <div
            className={researchStyles.branchCard}
            role="button"
            tabIndex={0}
            style={{ cursor: 'pointer' }}
            onClick={() => goToResearch('victor')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('victor'); } }}
            aria-label={t('research.branch_victor_name')}
          >
            <h3>{t('research.branch_victor_name')}</h3>
            <p>{t('research.branch_victor_desc')}</p>
            <span className={researchStyles.branchLink} aria-hidden="true">
              {t('research.branch_victor_link')}
            </span>
          </div>

          <div
            className={researchStyles.branchCard}
            role="button"
            tabIndex={0}
            style={{ cursor: 'pointer' }}
            onClick={() => goToResearch('louis-friese')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('louis-friese'); } }}
            aria-label={t('research.branch_louis_name')}
          >
            <h3>{t('research.branch_louis_name')}</h3>
            <p>{t('research.branch_louis_desc')}</p>
            <span className={researchStyles.branchLink} aria-hidden="true">
              {t('research.branch_louis_link')}
            </span>
          </div>

          <div
            className={researchStyles.branchCard}
            role="button"
            tabIndex={0}
            style={{ cursor: 'pointer' }}
            onClick={() => goToResearch('drincham-dossier')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('drincham-dossier'); } }}
            aria-label={t('research.branch_drincham_name')}
          >
            <h3>{t('research.branch_drincham_name')}</h3>
            <p>{t('research.branch_drincham_desc')}</p>
            <span className={researchStyles.branchLink} aria-hidden="true">
              {t('research.branch_drincham_link')}
            </span>
          </div>

          <div
            className={researchStyles.branchCard}
            role="button"
            tabIndex={0}
            style={{ cursor: 'pointer' }}
            onClick={() => goToResearch('robrecht')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('robrecht'); } }}
            aria-label={t('research.branch_robrecht_name')}
          >
            <h3>{t('research.branch_robrecht_name')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('research.branch_robrecht_desc') }} />
            <span className={researchStyles.branchLink} aria-hidden="true">
              {t('research.branch_robrecht_link')}
            </span>
          </div>
        </div>

        {/* ── Reference Pages ─────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('research.reference_heading')}</h2>
          <div className={researchStyles.branchCards}>
            <div
              className={researchStyles.branchCard}
              tabIndex={0}
              style={{ cursor: 'pointer' }}
              onClick={() => goToResearch('gap-dossier')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('gap-dossier'); } }}
              aria-label={t('research.ref_gap_title')}
            >
              <h3>{t('research.ref_gap_title')}</h3>
              <p>{t('research.ref_gap_desc')}</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                {t('research.ref_gap_link')}
              </span>
            </div>
            <div
              className={researchStyles.branchCard}
              tabIndex={0}
              style={{ cursor: 'pointer' }}
              onClick={() => goToResearch('methodology')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('methodology'); } }}
              aria-label={t('research.ref_methodology_title')}
            >
              <h3>{t('research.ref_methodology_title')}</h3>
              <p>{t('research.ref_methodology_desc')}</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                {t('research.ref_methodology_link')}
              </span>
            </div>
            <div
              className={researchStyles.branchCard}
              tabIndex={0}
              style={{ cursor: 'pointer' }}
              onClick={() => goToResearch('bibliography')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('bibliography'); } }}
              aria-label={t('research.ref_bibliography_title')}
            >
              <h3>{t('research.ref_bibliography_title')}</h3>
              <p>{t('research.ref_bibliography_desc')}</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                {t('research.ref_bibliography_link')}
              </span>
            </div>
          </div>
        </section>

        {/* ── Methodology ─────────────────────────────────────────── */}
        <section className={researchStyles.methodologyBox} style={{ marginTop: '3rem' }}>
          <span className={researchStyles.methodologyTitle}>{t('research.methodology_title')}</span>
          <div className={researchStyles.methodologyGrid}>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>{t('research.method_attested_label')}</span>
              {t('research.method_attested_text')}
            </div>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>{t('research.method_corroborated_label')}</span>
              {t('research.method_corroborated_text')}
            </div>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>{t('research.method_probable_label')}</span>
              {t('research.method_probable_text')}
            </div>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>{t('research.method_hypothesis_label')}</span>
              {t('research.method_hypothesis_text')}
            </div>
          </div>
        </section>

        {/* Interactive Research Map */}
        <Suspense fallback={<div style={{ height: '400px' }} />}>
          <ResearchMap />
        </Suspense>

        {/* ── Archival Dossiers ────────────────────────────────────── */}
        <section className={styles.section} style={{ marginTop: '3rem' }}>
          <h2>{t('research.dossiers_heading')}</h2>
          <p>{t('research.dossiers_intro')}</p>
          <div className={researchStyles.branchCards}>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid var(--gold)', cursor: 'pointer' }}
              onClick={() => goToResearch('victor-dossier')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('victor-dossier'); } }}
              aria-label={t('research.dossier_victor_title')}
            >
              <h3>{t('research.dossier_victor_title')}</h3>
              <p>{t('research.dossier_victor_desc')}</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                {t('research.dossier_victor_link')}
              </span>
            </div>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid var(--gold)', cursor: 'pointer' }}
              onClick={() => goToResearch('praet-dossier')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('praet-dossier'); } }}
              aria-label={t('research.dossier_praet_title')}
            >
              <h3>{t('research.dossier_praet_title')}</h3>
              <p>{t('research.dossier_praet_desc')}</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                {t('research.dossier_praet_link')}
              </span>
            </div>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid var(--gold)', cursor: 'pointer' }}
              onClick={() => goToResearch('praet-lineage-dossier')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('praet-lineage-dossier'); } }}
              aria-label={t('research.dossier_praet_lineage_title')}
            >
              <h3>{t('research.dossier_praet_lineage_title')}</h3>
              <p>{t('research.dossier_praet_lineage_desc')}</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                {t('research.dossier_praet_lineage_link')}
              </span>
            </div>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid var(--gold)', cursor: 'pointer' }}
              onClick={() => goToResearch('drincham-dossier')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('drincham-dossier'); } }}
              aria-label={t('research.dossier_drincham_title')}
            >
              <h3>{t('research.dossier_drincham_title')}</h3>
              <p>{t('research.dossier_drincham_desc')}</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                {t('research.dossier_drincham_link')}
              </span>
            </div>
          </div>
        </section>

        {/* ── Research Articles ────────────────────────────────────── */}
        <section className={styles.section} style={{ marginTop: '3rem' }}>
          <h2>{t('research.articles_heading')}</h2>
          <p>{t('research.articles_intro')}</p>
          <div className={researchStyles.branchCards}>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid rgba(232,184,48,0.45)', cursor: 'pointer' }}
              onClick={() => { navigate('/name/surname-origins'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate('/name/surname-origins'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }}
              aria-label={t('research.article_four_functions_title')}
            >
              <h3>{t('research.article_four_functions_title')}</h3>
              <p>{t('research.article_four_functions_desc')}</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                {t('research.article_four_functions_link')}
              </span>
            </div>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid rgba(232,184,48,0.45)', cursor: 'pointer' }}
              onClick={() => goToResearch('nieus-seals')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('nieus-seals'); } }}
              aria-label={t('research.article_nieus_title')}
            >
              <h3>{t('research.article_nieus_title')}</h3>
              <p>{t('research.article_nieus_desc')}</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                {t('research.article_nieus_link')}
              </span>
            </div>
          </div>
        </section>

        {/* ── Notes and Sources ──────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('research.notes_heading')}</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            {t('research.notes_intro')}
          </p>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
            <p>
              {t('research.notes_source_1_label')} <span dangerouslySetInnerHTML={{ __html: t('research.notes_source_1_text') }} />
            </p>
            <p>
              {t('research.notes_source_2_label')} <span dangerouslySetInnerHTML={{ __html: t('research.notes_source_2_text') }} />
            </p>
            <p>
              {t('research.notes_source_3_label')} {t('research.notes_source_3_text')}{' '}
              <button
                onClick={() => { navigate('/name/surname-origins'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}
              >
                {t('research.notes_source_3_linktext')}
              </button>
            </p>
            <p>
              {t('research.notes_source_4_label')} {t('research.notes_source_4_text')}{' '}
              <button
                onClick={() => { goToResearch('nieus-seals'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}
              >
                {t('research.notes_source_4_linktext')}
              </button>
            </p>
          </div>
        </section>

        {/* ── Conclusion ──────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('research.conclusion_title')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('research.conclusion_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('research.conclusion_p2') }} />
        </section>

        <div className={styles.ctaBox} onClick={() => goToResearch('contact')} style={{ cursor: 'pointer' }}>
          <div className={styles.ctaText}>
            {t('research.cta_text')}
          </div>
          <div className={styles.ctaNote}>
            {t('research.cta_note')}
          </div>
        </div>
      </div>
    </div>
  );
}
