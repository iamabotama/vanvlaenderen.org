import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';
import { VictorDiagram } from '../components/Diagrams';
import { Helmet } from 'react-helmet-async';

export default function VictorLineagePage() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Victor van Vlaenderen — Lord of Wessegem | vanvlaenderen.org</title>
        <meta name="description" content="Victor van Vlaenderen: bastard son of Louis II de Male, Lord of Ursel and Wessegem, father of Lodewyc, Janne, and Adam van Vlaendren per the 1441/42 charter." />
        <link rel="canonical" href="https://vanvlaenderen.org/research/victor" />
        <meta property="og:title" content="Victor van Vlaenderen — Lord of Wessegem" />
        <meta property="og:description" content="Bastard son of Louis II de Male. Father of Lodewyc, Janne, and Adam van Vlaendren — documented in the 1441 charter." />
        <meta property="og:url" content="https://vanvlaenderen.org/research/victor" />
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
          <div className={styles.eyebrow}>{t('victor.hero_eyebrow')}</div>
          <h1>{t('victor.hero_title')}</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            Natural son of Louis II de Male, Count of Flanders. Lord of Ursel and Wessegem. Burgundian admiral; captain of Biervliet. Father of Lodewyc, Janne, and Adam van Vlaendren &mdash; documented across three primary charters (1427, 1441, 1446).
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>{t('victor.dossier_title')}</h2>
          <div className={researchStyles.dossierMeta}>Updated April 2026</div>
        </div>

        {/* ── Identity ────────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Identity and Parentage <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            Victor van Vlaanderen, also styled Victor de Flandre, belongs to the illegitimate comital line descending from Louis II de Male, Count of Flanders (1330&ndash;1384). FMG MedLands lists him as illegitimate child 9 of Louis II, noting that Espinoy records his parentage [841]. His mother is identified in the 12 May 1427 charter as Mergriete Haelfhuuts (Heinricx Mayen&hellip;wijf). Victor is styled Seigneur d'Ursele et de Wesseghem and is documented as a Burgundian admiral and captain of Biervliet.
          </p>
        </section>

        {/* ── Territorial Setting ─────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('victor.territorial_heading')} <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p dangerouslySetInnerHTML={{ __html: t('victor.territorial_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('victor.territorial_p2') }} />
        </section>

        {/* ── Three-Charter Nucleus ───────────────────────────────── */}
        <section className={styles.section}>
          <h2>The Three-Charter Nucleus <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            Three charters from the Ghent partition court records, preserved in Vredius (1643) via FMG MedLands, form the documentary nucleus of Victor's line. Together they span twenty years (1427&ndash;1447) and name all three of Victor's acknowledged natural sons.
          </p>
          <p>
            <strong>Charter 1 (12 May 1427):</strong> Mergriete Haelfhuuts, Victor's mother, donates property to 'Lodekinen ende Hannekinen' (Lodewyc and Janne), Victor's natural sons by Alix van Boyeghem, and to 'Adaemkine' (Adam), his natural son by Gertrud Lindekens [FMG 846,853].
          </p>
          <p>
            <strong>Charter 2 (10 March 1441 O.S. = 1442 N.S.):</strong> Mergriete donates to 'Lodewyc, Janne ende Adam van Vlaendren natuerliche sonen van wijlen edelen&hellip;mer Victor van Vlaendren heere was van Desele ende van Wesseghem.' Victor is now described as deceased ('wijlen') [FMG 847,852,854].
          </p>
          <p>
            <strong>Charter 3 (18 March 1446 O.S. = 1447 N.S.):</strong> 'Adam van Vlandren natuerlicke sone va mer Victor van Vlaendren, Rudder, Heer van Orsele en van Wesseghem' donates money from 'joncfr Margriete Aelhuuts zijn groete vrauwe' to Christiane van Rouse. Adam is the active donor &mdash; the only charter where he acts independently [FMG 855].
          </p>
        </section>

        {/* ── Interactive Diagram ─────────────────────────────────── */}
        <div className={researchStyles.treeContainer}>
          <VictorDiagram />
          <div className="sr-only">
            <h3>Victor van Vlaenderen lineage — text summary</h3>
            <p>This diagram shows the descent from Louis II de Male, Count of Flanders (1330–1384), through his natural son Victor van Vlaenderen (died before 1442), Lord of Ursel and Wessegem. Victor had three documented natural sons by Alix van Boyeghem: Lodewyc van Vlaendren (fl. 1427–1442), Janne van Vlaendren (fl. 1427–1442), and Adam van Vlaendren (fl. 1427 – 18 March 1447), the closest documented individual bridge candidate to the modern East Flanders clusters. Lodewyc married Jacqueline de Wilde and had two children: Josse van Vlaenderen (died young, buried Oostborch) and Margareta van Vlaenderen (fl. 1478–1486, married into noble families). An evidentiary gap of approximately 100 years separates Adam (last confirmed 1447) from Joos van Vlaenderen (fl. 1547), the first confirmed early modern bearer as testator in the Brugse Vrije probate records (TBO 184, bundle 21300). No direct genealogical link between Adam and Joos has yet been demonstrated. Key archival targets for bridging this gap: cijnsboeken and leenboeken (Ambacht Ursel / Maldegem), Staten van Goed, and Raad van Vlaanderen records at Rijksarchief Gent.</p>
          </div>
        </div>

        {/* ── Adam van Vlaendren ──────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Adam van Vlaendren (fl. 1427 &ndash; 18 Mar 1447 N.S.) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            Adam is named in all three charters but is only the active donor in the third (1446/1447). His corrected date range &mdash; fl. 1427 to 18 March 1447 N.S. &mdash; extends his documented life five years beyond the previous terminus of 1442. He is the last confirmed 15th-century bearer of the van Vlaendren surname in Victor's line.
          </p>
          <p>
            The 1446 charter is significant because Adam explicitly identifies Victor as 'Rudder, Heer van Orsele en van Wesseghem' &mdash; Knight, Lord of Ursel and Wessegem &mdash; and because Margriete Aelfhuuts is still active as his patroness four years after the previous donation.
          </p>
        </section>

        {/* ── Lodewyc's Descendants ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>Lodewyc's Descendants <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            Lodewyc van Vlaenderen married Jacqueline de Wilde (-Apr 1482, bur Oostborch). An epitaph at Oostborch records the burial of Jacqueline and nearby 'haer Joos van Vlaenderen fs Lodewijcx' [FMG 848,849]. Josse died young and cannot be the 1547 Brugse Vrije testator &mdash; but his existence confirms the name Josse/Joos was in active use in Victor's direct line.
          </p>
          <p>
            Lodewyc's daughter Margareta van Vlaenderen (fl. 1478&ndash;1486) married firstly Lodewijk van Baenst Heer van Santvelde and secondly Adriaan van Schouteten Heer van Erpe [FMG 850].
          </p>
        </section>

        {/* ── Bridging the Gap ────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Bridging the Gap: Adam to Joos <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Hypothesis</span></h2>
          <p>
            {t('victor.gap_p1')}
          </p>
          <p>
            Adam is documented across three charters spanning 1427&ndash;1447, but he is only the active donor in the 1446/1447 charter. In the earlier two charters he is named as a beneficiary of his grandmother's donations. The gap between Adam (last confirmed 1447) and Joos van Vlaenderen (testator, Brugse Vrije 1547) spans approximately 100 years &mdash; three to four generations.
          </p>
          <p>
            {t('victor.gap_p3')}
          </p>
          <p>
            {t('victor.gap_p4')}
          </p>
          <p>
            {t('victor.gap_p5')}
          </p>
          <p>
            {t('victor.gap_p6')}
          </p>
        </section>

        {/* ── Naval and Military ──────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Naval and Military Activity <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            {t('victor.military_p1')}
          </p>
        </section>

        {/* ── Dossier Link ────────────────────────────────────────── */}
        <section className={styles.section} style={{ marginTop: '3rem', borderTop: '1px solid rgba(232, 184, 48, 0.2)', paddingTop: '2rem' }}>
          <Link
            to="/research/victor-dossier"
            className={researchStyles.branchCard}
            style={{ borderTop: '3px solid var(--gold)', maxWidth: '100%' }}
            aria-label="Victor van Vlaenderen: Archival Dossier"
          >
            <h3>Victor van Vlaenderen: Archival Dossier</h3>
            <p>Full charter transcriptions, chronology table, and detailed source analysis. Includes Victor's 1430 testament, all three charter texts, Lodewyc's descendants, and the Oostborch epitaph evidence.</p>
            <span className={researchStyles.branchLink} aria-hidden="true">
              View Archival Evidence &rarr;
            </span>
          </Link>
        </section>

        <div className={styles.pullQuote}>
          <blockquote>
            "{t('victor.pull_quote')}"
          </blockquote>
        </div>

        {/* ── Sources ─────────────────────────────────────────────── */}
        <section className={researchStyles.referenceList}>
          <h3>{t('victor.sources_title')}</h3>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>1.</span>
            FMG MedLands: Flanders, Hainaut. v5.0, January 2025. Victor entry [841&ndash;855]. Source for all three charters: Vredius (1643) <em>Pars secunda</em>, pp.285&ndash;287.{' '}
            <a href="https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Foundation for Medieval Genealogy, MedLands: Flanders &amp; Hainaut</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>2.</span>
            Inventaris Onroerend Erfgoed. Hoeve Hof van Wessegem.{' '}
            <a href="https://inventaris.onroerenderfgoed.be/erfgoedobjecten/33384" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Inventaris Onroerend Erfgoed, Erfgoedobject 33384</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>3.</span>
            Bethune, J.B. de. <em>Epitaphes et monuments des eglises de la Flandre.</em> Third part. 1900. p.356. Oostborch epitaph for Jacqueline de Wilde and Josse van Vlaenderen [FMG 848&ndash;849].
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>4.</span>
            Degryse, R. Willem Beukel(s) van Hughevliet. <em>De Vlaamse Gids</em> 38 (1954).{' '}
            <a href="https://www.dbnl.org/tekst/_vla001195401_01/_vla001195401_01_0055.php" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">DBNL, Vlaamse Stam (1954)</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>5.</span>
            Tailler, Margaux. <em>Corvers en zeeschuimers van den Vlaemsche zeecoste: Kaapvaart en piraterij onder Jan zonder Vrees.</em> MA thesis, Ghent University, 2011. Supervised by Jan Dumolyn.{' '}
            <a href="https://libstore.ugent.be/fulltxt/RUG01/001/786/522/RUG01-001786522_2012_0001_AC.pdf" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Ghent University Library, Thesis RUG01-001786522 (2012)</a>
          </div>
        </section>

        <Link className={styles.ctaBox} to="/contact">
          <div className={styles.ctaText}>
            {t('victor.cta_text')}
          </div>
          <div className={styles.ctaNote}>
            {t('victor.cta_note')}
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
            {t('victor.back_button')}
          </Link>
        </div>
      </div>
    </div>
  );
}
