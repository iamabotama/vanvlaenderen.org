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
        <meta name="description" content="Overview of Van Vlaenderen archival research: the Victor line (Lord of Wessegem) and the Louis Friese / Praet line, both descending from Louis II de Male, Count of Flanders." />
        <link rel="canonical" href="https://vanvlaenderen.org/research" />
        <meta property="og:title" content="Research Overview — Van Vlaenderen Archival Dossiers" />
        <meta property="og:description" content="Two surname-bearing bastard lines of Louis II de Male: Victor van Vlaenderen and Louis Friese van Vlaenderen." />
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
          <p className={styles.heroLead}>
            Louis II de Male, Count of Flanders (1330&ndash;1384), fathered at least thirteen illegitimate children. Two of his natural sons founded surname-bearing lines that used <em>van Vlaenderen</em> as a hereditary identifier: Victor van Vlaenderen and Louis Friese van Vlaenderen.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>{t('research.dossier_title')}</h2>
          <div className={researchStyles.dossierMeta}>Updated April 2026</div>
        </div>

        {/* ── Two-Line Structure ──────────────────────────────────── */}
        <section className={styles.section}>
          <h2>The Two Surname-Bearing Lines</h2>
          <p>
            The research is structured around two documented lines descending from Louis de Male. Both lines used <em>van Vlaenderen</em> (and its variants: van Vlaendren, de Flandre, de Flandres) as a hereditary surname &mdash; not a geographic descriptor, but a marker of comital illegitimate descent that crystallised at the precise moment the Dampierre line's hold on Flanders ended with Louis de Male's death in 1384.
          </p>
          <p>
            There is a further dimension worth noting. Louis II de Male was the last Count of Flanders from the House of Dampierre. On his death in 1384, the county passed to his daughter Margaret and her husband Philip the Bold of Burgundy, and the Dampierre hold on Flanders ended permanently. The evidence suggests that <em>van Vlaenderen</em> crystallised as a heritable surname among Louis&apos;s bastard children at precisely this moment &mdash; not as a geographic descriptor meaning &lsquo;from Flanders,&rsquo; but as an inherited identity marking comital blood at the point when the title itself was extinguished. This pattern is documented independently in both Victor&apos;s line and the Praet line, and it is one of the strongest arguments that the surname functions as inherited comital identity rather than as a common toponym. It also narrows the field: families adopting <em>van Vlaenderen</em> as a geographic descriptor after 1384 would have had diminishing reason to do so, since Flanders was no longer ruled by a Flemish count. Bearers of the name after that date are more plausibly connected to the bastard comital network than to generic toponymy.
          </p>
        </section>

        {/* ── Overview Diagram ────────────────────────────────────── */}
        <div className={researchStyles.treeContainer}>
          <OverviewDiagram />
          <div className="sr-only">
            <h3>Research overview diagram — text summary</h3>
            <p>This diagram presents both surname-bearing bastard lines descending from Louis II de Male, Count of Flanders (1330–1384), the last Count from the House of Dampierre. Left branch (Victor's line): Victor van Vlaenderen (died before 1442), Lord of Ursel and Wessegem, had three documented natural sons — Lodewyc, Janne, and Adam van Vlaendren — all named in primary charters 1427–1447. Adam van Vlaendren (research focus, fl. 1427 – 1447) is the primary bridge candidate to the early modern parish-record Van Vlaenderens of the Meetjesland. A ~100-year evidentiary gap separates Adam from Joos van Vlaenderen (fl. 1547), the first confirmed early modern bearer. Right branch (Praet line): Louis Friese van Vlaenderen (c.1350 – 1396), Lord of Praet and Woestine, founded the House of Flanders-Praet through his son Johan I van Vlaenderen. The line descends through multiple generations to Lodewijk IV van Vlaenderen (died 1555), Knight of the Golden Fleece, whose 1517 charter shows him holding six fiefs at Knesselare from the Wessegem seigneurie — a direct Meetjesland territorial connection. The legitimate Praet male line ended with Jan II van Vlaenderen (died 10 December 1545), who predeceased his father without issue.</p>
          </div>
        </div>

        {/* ── Branch Cards ────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Research Branches</h2>
        </section>

        <div className={researchStyles.branchCards}>
          <div
            className={researchStyles.branchCard}
            role="button"
            tabIndex={0}
            style={{ cursor: 'pointer' }}
            onClick={() => goToResearch('victor')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('victor'); } }}
            aria-label="Victor van Vlaenderen"
          >
            <h3>Victor van Vlaenderen</h3>
            <p>
              Natural son of Louis de Male. Lord of Ursel and Wessegem. Three natural sons documented across three primary charters (1427, 1441, 1446). Adam van Vlaendren (fl. 1427 &ndash; 18 Mar 1447 N.S.) is the last confirmed 15th-century bearer and the primary research focus for bridging the evidentiary gap to the early modern parish records.
            </p>
            <span className={researchStyles.branchLink} aria-hidden="true">
              Explore Victor's Line &rarr;
            </span>
          </div>

          <div
            className={researchStyles.branchCard}
            role="button"
            tabIndex={0}
            style={{ cursor: 'pointer' }}
            onClick={() => goToResearch('louis-friese')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('louis-friese'); } }}
            aria-label="Louis Friese van Vlaenderen"
          >
            <h3>Louis Friese van Vlaenderen</h3>
            <p>
              Natural son of Louis de Male. Lord of Praet and Woestine. Killed at Nicopolis 1396. Founded the House of Flanders-Praet &mdash; six generations using <em>van Vlaenderen</em> as a hereditary surname. The legitimate male line ended with the death of Lodewijk IV in 1556. Whether the surname continued through cadet or illegitimate branches into the commoner population remains an open research question.
            </p>
            <span className={researchStyles.branchLink} aria-hidden="true">
              Explore the Praet Line &rarr;
            </span>
          </div>
        </div>

        {/* ── Reference Pages ─────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Reference</h2>
          <div className={researchStyles.branchCards}>
            <div
              className={researchStyles.branchCard}
              tabIndex={0}
              style={{ cursor: 'pointer' }}
              onClick={() => goToResearch('gap-dossier')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('gap-dossier'); } }}
              aria-label="The Documentary Gap"
            >
              <h3>The Documentary Gap, 1447&ndash;1580</h3>
              <p>
                The 130-year span between the last confirmed comital-line bearer and the first Meetjesland
                parish generation. Evidence in hand, searches completed, active archival targets, and
                three working hypotheses for how the gap closes.
              </p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                Explore the Gap &rarr;
              </span>
            </div>
            <div
              className={researchStyles.branchCard}
              tabIndex={0}
              style={{ cursor: 'pointer' }}
              onClick={() => goToResearch('methodology')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('methodology'); } }}
              aria-label="Methodology and Sources"
            >
              <h3>Methodology &amp; Sources</h3>
              <p>
                How archival documents are transcribed and translated, and the curated reading list of primary and secondary works that underpin the research.
              </p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                Methodology &amp; Sources &rarr;
              </span>
            </div>
            <div
              className={researchStyles.branchCard}
              tabIndex={0}
              style={{ cursor: 'pointer' }}
              onClick={() => goToResearch('bibliography')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('bibliography'); } }}
              aria-label="Sources and Scholarship"
            >
              <h3>Sources &amp; Scholarship</h3>
              <p>
                Primary sources, archival finding aids, and scholarly literature cited in the dossiers — the evidentiary basis of the project in one place.
              </p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                Sources &amp; Scholarship &rarr;
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
          <h2>Archival Dossiers</h2>
          <p>For researchers seeking the underlying documentary evidence, we maintain detailed archival dossiers with full charter transcriptions, epitaph data, and source analysis.</p>
          <div className={researchStyles.branchCards}>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid var(--gold)', cursor: 'pointer' }}
              onClick={() => goToResearch('victor-dossier')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('victor-dossier'); } }}
              aria-label="Victor van Vlaenderen Dossier"
            >
              <h3>Victor van Vlaenderen Dossier</h3>
              <p>Three-charter nucleus (1427, 1441, 1446), Victor's 1430 testament, Lodewyc's descendants, and the Oostborch epitaph evidence.</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                View Archival Evidence &rarr;
              </span>
            </div>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid var(--gold)', cursor: 'pointer' }}
              onClick={() => goToResearch('praet-dossier')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('praet-dossier'); } }}
              aria-label="Louis Friese Archival Dossier"
            >
              <h3>Louis Friese: Archival Dossier</h3>
              <p>Primary source extracts and territorial history of the House of Flanders-Praet.</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                View Archival Evidence &rarr;
              </span>
            </div>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid var(--gold)', cursor: 'pointer' }}
              onClick={() => goToResearch('praet-lineage-dossier')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('praet-lineage-dossier'); } }}
              aria-label="House of Praet Lineage Dossier"
            >
              <h3>House of Praet: Lineage Dossier</h3>
              <p>Six generations with primary-source confirmed data. Johan I's seven children, Josse de Flandre cadet branch, and the 1517 Knesselare charter.</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                View Lineage Evidence &rarr;
              </span>
            </div>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid var(--gold)', cursor: 'pointer' }}
              onClick={() => goToResearch('drincham-dossier')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('drincham-dossier'); } }}
              aria-label="Jan sans terre van Vlaenderen Drincham Dossier"
            >
              <h3>Jan sans terre — Drincham Dossier</h3>
              <p>The 1383 Drincham land grant, four documented generations in the Cassel area, the Veurne epitaph of Jacques de Drincham, and the geographic-documentary case for the French Flanders Van Vlaenderen cluster.</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                View Archival Evidence &rarr;
              </span>
            </div>
          </div>
        </section>

        {/* ── Research Articles ────────────────────────────────────── */}
        <section className={styles.section} style={{ marginTop: '3rem' }}>
          <h2>Research Articles</h2>
          <p>Analytical and contextual writing that sits alongside the archival evidence — distributional analysis, historical interpretation, and speculative threads with clearly marked evidentiary status.</p>
          <div className={researchStyles.branchCards}>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid rgba(232,184,48,0.45)', cursor: 'pointer' }}
              onClick={() => { navigate('/name/surname-origins'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate('/name/surname-origins'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }}
              aria-label="Four Functions Three Clusters"
            >
              <h3>Four Functions, Three Clusters</h3>
              <p>A primary source and distributional analysis of the Van Vlaenderen surname across four documentary functions and three geographic clusters spanning three centuries. Tests the toponymic and bastard-line hypotheses against Geneanet heat-map data and the onomastic record.</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                Read Analysis &rarr;
              </span>
            </div>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid rgba(232,184,48,0.45)', cursor: 'pointer' }}
              onClick={() => goToResearch('nieus-seals')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('nieus-seals'); } }}
              aria-label="Seals Lions and the Politics of a Surname"
            >
              <h3>Seals, Lions, and the Politics of a Surname</h3>
              <p>How twelfth-century Flemish noble seal culture — the lion, the Dover Recognitio, and the political weight of territorial identity — provides historical depth for the Van Vlaenderen hypothesis. Based on Nieus (2021).</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                Read Article &rarr;
              </span>
            </div>
          </div>
        </section>

        {/* ── Conclusion ──────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('research.conclusion_title')}</h2>
          <p>
            {t('research.conclusion_p1')}
          </p>
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
