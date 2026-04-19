import { useTranslation } from 'react-i18next';
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';
import { PraetDiagram } from '../components/Diagrams';
import { useNav } from '../hooks/useNav';
import { Helmet } from 'react-helmet-async';

export default function LouisFrieseLineagePage() {
  const { goToResearch } = useNav();
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Louis Friese van Vlaenderen — The Praet Line | vanvlaenderen.org</title>
        <meta name="description" content="Louis Friese van Vlaenderen, Lord of Praet and Woestine: the second bastard line of Louis II de Male using the Van Vlaenderen surname. Ancestor of Lodewijk IV (Louis of Praet)." />
        <link rel="canonical" href="https://vanvlaenderen.org/research/louis-friese" />
        <meta property="og:title" content="Louis Friese van Vlaenderen — The Praet Line" />
        <meta property="og:description" content="The Praet bastard line: Louis Friese van Vlaenderen to Lodewijk IV, Knight of the Golden Fleece — extinct 1556." />
        <meta property="og:url" content="https://vanvlaenderen.org/research/louis-friese" />
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
          <div className={styles.eyebrow}>{t('louis_friese.hero_eyebrow')}</div>
          <h1>{t('louis_friese.hero_title')}</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            Natural son of Louis II de Male, Count of Flanders. Lord of Praet and Woestine. Killed at the Battle of Nicopolis, 28 September 1396. Founder of the House of Flanders-Praet &mdash; six generations using van Vlaenderen as a hereditary surname.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>{t('louis_friese.dossier_title')}</h2>
          <div className={researchStyles.dossierMeta}>Updated April 2026</div>
        </div>

        {/* ── The Praet Branch ─────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('louis_friese.praet_title')} <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            {t('louis_friese.praet_p1')}
          </p>
          <p>
            {t('louis_friese.praet_p2')}
          </p>
          <p>
            {t('louis_friese.praet_p3')}
          </p>
          <p>
            {t('louis_friese.praet_p4')}
          </p>
          <p>
            {t('louis_friese.praet_p5')}
          </p>
          <p>
            {t('louis_friese.praet_p6')}
          </p>
        </section>

        {/* ── Interactive Diagram ─────────────────────────────────── */}
        <div className={researchStyles.treeContainer}>
          <PraetDiagram />
          <div className="sr-only">
            <h3>Praet line lineage — text summary</h3>
            <p>This diagram shows the descent from Louis II de Male, Count of Flanders (1330&ndash;1384), through his natural son Louis Friese van Vlaenderen (c.1350 &ndash; 28 September 1396), Lord of Praet and Woestine, killed at Nicopolis. Louis Friese's son Johan I van Vlaenderen (died after 10 September 1439), Lord of Praet, had seven documented children: Jean de Flandre (died 6 September 1523, Grand Bailiff of Bruges); Josse de Flandre (died after 1526, line survived to at least 1592); Lodewijk II van Vlaenderen (died 1488; two primary sources disagree on the day &mdash; the Aalter tomb inscription records St.&nbsp;Bavo&rsquo;s day, 1&nbsp;October, while de l&rsquo;Espinoy records St.&nbsp;Bartholomew, 24&nbsp;August); Jeanne de Flandre (died after 1446); and three further daughters Marguerite, Isabelle, and Landrade. Lodewijk II's son was Lodewijk III van Vlaenderen (died 1488 per Grimarez or 1490 per the Aalter tomb &mdash; sources disagree by two years), whose son was Lodewijk IV van Vlaenderen (died 1555), Knight of the Golden Fleece (1531), Grand Bailiff of Ghent and Bruges, Stadtholder of Holland and Zeeland, and advisor to Charles V. Lodewijk IV&rsquo;s wife Jossine van Praet predeceased him on 10 December 1546. Lodewijk IV&rsquo;s only son Jan II van Vlaenderen (died 10 December 1545) predeceased his father by ten years, dying without issue and ending the legitimate Praet male line a decade before Lodewijk IV himself died in 1555. The Praet line functions as a documented research control: men styled van Vlaenderen in 16th-century records cannot be assigned to Victor's descendants without first eliminating a possible Praet connection.</p>
          </div>
        </div>

        {/* ── Johan I's Seven Children ────────────────────────────── */}
        <section className={styles.section}>
          <h2>Johan I's Seven Documented Children <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            Johan I van Vlaenderen (d. after 10 Sep 1439), lord of Praet and Woestine, issued his own charter as lord of Praet on 10 September 1439 [FMG 873]. He married Johanna van Reygersvliet [875]. Seven children are documented from primary sources:
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--gold)', textAlign: 'left' }}>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Name</th>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Dates</th>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Notes</th>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)' }}>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>Lodewijk II</td>
                  <td style={{ padding: '10px' }}>d. 1488</td>
                  <td style={{ padding: '10px' }}>Lord of Praet; married Louise de Bruges</td>
                  <td style={{ padding: '10px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Epitaph [876]</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>Jean de Flandre</td>
                  <td style={{ padding: '10px' }}>d. 6 Sep 1523</td>
                  <td style={{ padding: '10px' }}>Heer van Onlede; Grand Bailiff of Bruges</td>
                  <td style={{ padding: '10px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Epitaph [879]</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)' }}>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>Josse de Flandre</td>
                  <td style={{ padding: '10px' }}>d. after 1526</td>
                  <td style={{ padding: '10px' }}>Inherited Onlede, Bevere, Wijchuize; married Martina van Moerkerke; line survived to 1592</td>
                  <td style={{ padding: '10px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Buylaert [881,882]</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>Jeanne de Flandre</td>
                  <td style={{ padding: '10px' }}>d. after 1446</td>
                  <td style={{ padding: '10px' }}>Married Jean Seigneur de Poucques, Vicomte d'Ypres</td>
                  <td style={{ padding: '10px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Charter [884,885]</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)' }}>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>Marguerite de Flandre</td>
                  <td style={{ padding: '10px' }}>fl. c.1440s</td>
                  <td style={{ padding: '10px' }}>Married Louis de Bailleul</td>
                  <td style={{ padding: '10px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Vredius MS [886]</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>Isabelle de Flandre</td>
                  <td style={{ padding: '10px' }}>fl. c.1440s</td>
                  <td style={{ padding: '10px' }}>Married Waleran de Landas</td>
                  <td style={{ padding: '10px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Vredius MS [887]</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)' }}>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>Landrade de Flandre</td>
                  <td style={{ padding: '10px' }}>fl. c.1460s</td>
                  <td style={{ padding: '10px' }}>Canoness at Mons Sainte-Waudru</td>
                  <td style={{ padding: '10px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Vredius MS [888]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 1517 Knesselare Charter ─────────────────────────────── */}
        <section className={styles.section}>
          <h2>The 1517 Knesselare Charter <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            A charter [FMG 891] records Lodewijk IV van Vlaenderen holding six fiefs at Knesselare from the seigneurie of Wessegem in 1517. Knesselare is one of the parishes in the active research coverage, and it sits geographically between the Praet lordship (Oedelem/Beernem) and the core Van Vlaenderen cluster in the Meetjesland.
          </p>
          <p>
            This charter does not establish a family connection between the Praet van Vlaenderens and the commoner Van Vlaenderens who later appear in Knesselare parish records. But it confirms that the Praet branch had territorial interests in the precise geographic area where the later parish-record bearers lived &mdash; which is relevant to the branch-control problem identified in the research design.
          </p>
        </section>

        {/* ── Surname Survival ────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('louis_friese.survival_title')} <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>{t('louis_friese.badge_hypothesis')}</span></h2>
          <p>
            {t('louis_friese.survival_p1')}
          </p>
          <p>
            {t('louis_friese.survival_p2')}
          </p>
        </section>

        {/* ── Key Figures ─────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('louis_friese.figures_title')}</h2>
          <p>
            {t('louis_friese.figures_intro')}
          </p>
          <ul>
            <li>{t('louis_friese.figure_1')}</li>
            <li>{t('louis_friese.figure_2')}</li>
            <li>{t('louis_friese.figure_3')}</li>
            <li>{t('louis_friese.figure_4')}</li>
            <li>{t('louis_friese.figure_5')}</li>
          </ul>
        </section>

        {/* ── Dossier Links ───────────────────────────────────────── */}
        <section className={styles.section} style={{ marginTop: '3rem', borderTop: '1px solid rgba(232, 184, 48, 0.2)', paddingTop: '2rem' }}>
          <div className={researchStyles.branchCards}>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid var(--gold)', cursor: 'pointer' }}
              onClick={() => goToResearch('praet-dossier')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToResearch('praet-dossier'); } }}
              aria-label="Louis Friese: Archival Dossier"
            >
              <h3>Louis Friese: Archival Dossier</h3>
              <p>Primary source extracts, territorial history, and the surname van Vlaenderen as comital identity.</p>
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
              aria-label="House of Praet: Lineage Dossier"
            >
              <h3>House of Praet: Lineage Dossier</h3>
              <p>Six generations with primary-source confirmed data. Includes Johan I's seven children, Josse de Flandre cadet branch, and the 1517 Knesselare charter.</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                View Lineage Evidence &rarr;
              </span>
            </div>
          </div>
        </section>

        {/* ── Sources ─────────────────────────────────────────────── */}
        <section className={researchStyles.referenceList}>
          <h3>{t('louis_friese.sources_title')}</h3>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>1.</span>
            {t('louis_friese.source_1')}{' '}
            <a href="https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Foundation for Medieval Genealogy, MedLands: Flanders &amp; Hainaut</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>2.</span>
            {t('louis_friese.source_2')}{' '}
            <a href="https://fmg.ac/Projects/MedLands/FLEMISH%20NOBILITY.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Foundation for Medieval Genealogy, MedLands: Flemish Nobility</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>3.</span>
            {t('louis_friese.source_3')}{' '}
            <a href="https://wappenwiki.org/index.php/House_of_Flanders-Praet" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Wappenwiki, House of Flanders-Praet</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>4.</span>
            {t('louis_friese.source_4')}{' '}
            <a href="https://www.genealogieonline.nl/west-europese-adel/I75515.php" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">GenealogieOnline, West-Europese Adel: Louis le Friese</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>5.</span>
            {t('louis_friese.source_5')}{' '}
            <a href="https://www.genealogieonline.nl/en/west-europese-adel/I194314.php" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">GenealogieOnline, West-Europese Adel: Johan I van Vlaanderen</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>6.</span>
            {t('louis_friese.source_6')}{' '}
            <a href="https://www.dbnl.org/tekst/eras001corr10_01/eras001corr10_01_0112.php" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">DBNL, Erasmus Correspondentie, Vol. 10</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>7.</span>
            Buylaert, Frederik. Published genealogical and prosopographical research on Flemish nobility. Cited via FMG MedLands [881,882] for Josse de Flandre.
          </div>
        </section>

        <div className={styles.ctaBox} onClick={() => goToResearch('contact')} style={{ cursor: 'pointer' }}>
          <div className={styles.ctaText}>
            {t('louis_friese.cta_text')}
          </div>
          <div className={styles.ctaNote}>
            {t('louis_friese.cta_note')}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(232, 184, 48, 0.2)' }}>
          <button
            onClick={() => goToResearch('main')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--gold)',
              fontSize: '16px',
              textDecoration: 'underline',
              fontFamily: 'var(--font-ui)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            {t('louis_friese.back_button')}
          </button>
        </div>
      </div>
    </div>
  );
}
