import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';
import victorLineageImg from '../assets/images/heraldic/victor_lineage.png';

interface VictorLineagePageProps {
  onNavigate?: (subpage: 'main' | 'victor' | 'louis-friese' | 'contact') => void;
}

export default function VictorLineagePage({ onNavigate }: VictorLineagePageProps) {
  return (
    <div className={styles.page}>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: 'center top' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen · Genealogical Research</div>
          <h1>Victor van Vlaenderen</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            Lord of Wessegem and progenitor of the Wessegem branch of the Van Vlaenderen family.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>Victor van Vlaenderen: Identity &amp; Lineage</h2>
          <div className={researchStyles.dossierMeta}>Updated: March 2026</div>
        </div>

        <section className={styles.section}>
          <h2>Victor van Vlaenderen: Identity &amp; Lineage <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            Victor van Vlaenderen, also styled Victor de Flandre, belongs to the illegitimate comital line 
            descending from Louis II "de Male," Count of Flanders. Published regional and prosopographical 
            authorities place him in direct connection with Wessegem in Ursel and identify him as one of 
            Louis van Male's bastard sons.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Victor van Vlaenderen: Territorial Setting: Wessegem and Ursel <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            The territorial setting is central. The Flemish heritage inventory for the Hof van Wessegem 
            traces the estate to the medieval seigneurie of Wessegem and states that by the end of the 
            fourteenth century "Lodewijk de Haze en Victor van Vlaenderen, bastaardzoons van Lodewijk van Male," 
            were lords of Wessegem; it further notes that the property reverted to the comital domain in 1431. 
            A local Ursel history likewise states that in 1399 Wessegem passed to Victor van Vlaenderen, 
            "another bastard son of Louis van Male," and that he often resided there.
          </p>
        </section>

        <div className={researchStyles.treeContainer}>
          <div className={researchStyles.treeTitle}>The Line of Victor van Vlaenderen</div>
          <img src={victorLineageImg} alt="Victor van Vlaenderen Lineage Diagram" style={{ width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block' }} />
        </div>

        <section className={styles.section}>
          <h2>Victor van Vlaenderen: Direct Charter Nucleus <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            The documentary core of Victor's dossier lies in the charter material summarized by the 
            Foundation for Medieval Genealogy. FMG's Flanders, Hainaut material preserves a summary of a 
            charter dated 12 May 1427 naming "Adam van Vlandren" as the natural son of "mer Victor van Vlaendren" 
            and specifying that Adam was Victor's son by "Gertruden Liendekins."
          </p>
          <p>
            A second FMG summary for a Ghent act of 10 March 1441 Old Style records that "Mergriete Aelfhuuts 
            Heindricx Maye...wijf" donated property to "Lodewyc, Janne ende Adam van Vlaendren natuerliche 
            sonen van wijlen edelen...mer Victor van Vlaendren." These summaries directly establish that 
            Victor had at least three acknowledged natural sons, that their names were Lodewyc, Janne, and Adam, 
            and that Victor was already dead by the date of the later act.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Victor van Vlaenderen: Naval and Military Activity <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            Victor also appears in published military-maritime literature. A DBNL article states: 
            "Victor was, en dit is belangrijk, kapitein van de vesting Biervliet." A UGent-hosted study 
            on Flemish corsair warfare likewise notes the appointment of "een nieuwe admiraal: Victor van Vlaenderen." 
            These sources support the conclusion that Victor held an important coastal or naval command role.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Victor van Vlaenderen: Genealogical Significance <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Hypothesis</span></h2>
          <p>
            The genealogical significance of Victor van Vlaenderen lies in the convergence of lineage, 
            locality, and surname. The published record establishes an illegitimate comital branch rooted 
            in the Ursel/Wessegem region and shows Victor's acknowledged natural sons bearing the surname 
            form van Vlaendren. 
          </p>
          <p>
            This does not by itself prove continuous descent to the later parish-record Van Vlaenderens 
            of Ursel, Maldegem, Oosteeklo, Boekhoute, or Bassevelde. It does, however, provide a substantial 
            medieval documentary nucleus that makes such a continuity hypothesis materially stronger than 
            a mere coincidence-of-surname explanation.
          </p>
        </section>

        <div className={styles.pullQuote}>
          <blockquote>
            "The medieval record is substantial. What remains unproved is not Victor's existence or family core, 
            but the later genealogical bridge from this fifteenth-century line to the early modern 
            Van Vlaenderen families of the Meetjesland."
          </blockquote>
        </div>

        <section className={researchStyles.referenceList}>
          <h3>Sources &amp; References</h3>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>1.</span>
            Foundation for Medieval Genealogy, MedLands: Flanders, Hainaut. 
            <a href="https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> fmg.ac/Projects/MedLands/FLANDERS, HAINAUT.htm</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>2.</span>
            Inventaris Onroerend Erfgoed, "Hoeve Hof van Wessegem." 
            <a href="https://inventaris.onroerenderfgoed.be/erfgoedobjecten/33384" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> inventaris.onroerenderfgoed.be/erfgoedobjecten/33384</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>3.</span>
            "Ursel, een Meetjeslands dorp." 
            <a href="https://mijnplatteland.com/meetjesland/ursel/" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> mijnplatteland.com/meetjesland/ursel/</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>4.</span>
            R. Degryse, "Willem Beukel(s) van Hughevliet: Geschiedenis en legende van een Vlaamse vissersheld," De Vlaamse Gids 38 (1954). 
            <a href="https://www.dbnl.org/tekst/_vla001195401_01/_vla001195401_01_0055.php" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> dbnl.org/tekst/_vla001195401_01/_vla001195401_01_0055.php</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>5.</span>
            Corvers en zeeschuimers van den Vlaemsche zeecoste, UGent repository copy. 
            <a href="https://libstore.ugent.be/fulltxt/RUG01/001/786/522/RUG01-001786522_2012_0001_AC.pdf" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> libstore.ugent.be/fulltxt/RUG01/001/786/522/RUG01-001786522_2012_0001_AC.pdf</a>
          </div>
        </section>

        <div className={styles.ctaBox} onClick={() => onNavigate?.('contact')} style={{ cursor: 'pointer' }}>
          <div className={styles.ctaText}>
            Do you have research that connects to the line of Victor van Vlaenderen?
          </div>
          <div className={styles.ctaNote}>
            We are actively seeking to bridge the gap between the 15th-century records and 
            the early modern parish registers.
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #ccc' }}>
          <button 
            onClick={() => onNavigate?.('main')} 
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              color: '#8b7355', 
              fontSize: '16px',
              textDecoration: 'underline'
            }}
          >
            Back to Research Overview
          </button>
        </div>
      </div>
    </div>
  );
}
