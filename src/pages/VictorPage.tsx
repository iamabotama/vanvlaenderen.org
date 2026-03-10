import styles from './InnerPage.module.css';
import victorStyles from './VictorPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';

export default function VictorPage() {
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
          <div className={styles.eyebrow}>Van Vlaenderen · Medieval Research</div>
          <h1>Victor van Vlaanderen</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            A historically grounded bastard son of Louis II "de Male," Count of Flanders, 
            associated with Wessegem in Ursel and active by 1399.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={victorStyles.dossierHeader}>
          <h2 className={victorStyles.dossierTitle}>Research Dossier</h2>
          <div className={victorStyles.dossierMeta}>Updated: March 2026</div>
        </div>

        <section className={victorStyles.methodologyBox}>
          <span className={victorStyles.methodologyTitle}>Methodology</span>
          <div className={victorStyles.methodologyGrid}>
            <div className={victorStyles.methodItem}>
              <span className={victorStyles.methodLabel}>Directly Attested</span>
              Rest on quoted charter language or explicit documentary summaries.
            </div>
            <div className={victorStyles.methodItem}>
              <span className={victorStyles.methodLabel}>Strongly Corroborated</span>
              Supported by concordant published historical or heritage authorities.
            </div>
            <div className={victorStyles.methodItem}>
              <span className={victorStyles.methodLabel}>Probable</span>
              Source-based but require fuller inspection of underlying editions.
            </div>
            <div className={victorStyles.methodItem}>
              <span className={victorStyles.methodLabel}>Hypothesis</span>
              Genealogical inferences proposed for further testing, not proved facts.
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Identity &amp; Lineage <span className={`${victorStyles.evidenceLevel} ${victorStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            Victor van Vlaanderen, also styled Victor de Flandre, belongs to the illegitimate comital line 
            descending from Louis II “de Male,” Count of Flanders. Published regional and prosopographical 
            authorities place him in direct connection with Wessegem in Ursel and identify him as one of 
            Louis van Male’s bastard sons.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Territorial Setting: Wessegem and Ursel <span className={`${victorStyles.evidenceLevel} ${victorStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            The territorial setting is central. The Flemish heritage inventory for the Hof van Wessegem 
            traces the estate to the medieval seigneurie of Wessegem and states that by the end of the 
            fourteenth century “Lodewijk de Haze en Victor van Vlaanderen, bastaardzoons van Lodewijk van Male,” 
            were lords of Wessegem; it further notes that the property reverted to the comital domain in 1431. 
            A local Ursel history likewise states that in 1399 Wessegem passed to Victor van Vlaanderen, 
            “another bastard son of Louis van Male,” and that he often resided there.
          </p>
        </section>

        <div className={victorStyles.treeContainer}>
          <div className={victorStyles.treeTitle}>The Line of Victor van Vlaanderen</div>
          <div className={victorStyles.treeNode}>
            <span className={victorStyles.treeNodeName}>Louis II "de Male"</span>
            <span className={victorStyles.treeNodeTitle}>Count of Flanders (1330–1384)</span>
          </div>
          <div className={victorStyles.treeConnector} />
          <div className={victorStyles.treeNode}>
            <span className={victorStyles.treeNodeName}>Victor van Vlaanderen</span>
            <span className={victorStyles.treeNodeTitle}>Lord of Wessegem (d. bef. 1442)</span>
          </div>
          <div className={victorStyles.treeChildren}>
            <div className={victorStyles.childNode}>Lodewyc van Vlaendren</div>
            <div className={victorStyles.childNode}>Janne van Vlaendren</div>
            <div className={victorStyles.childNode}>Adam van Vlaendren</div>
          </div>
        </div>

        <section className={styles.section}>
          <h2>Direct Charter Nucleus <span className={`${victorStyles.evidenceLevel} ${victorStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            The documentary core of Victor’s dossier lies in the charter material summarized by the 
            Foundation for Medieval Genealogy. FMG’s Flanders, Hainaut material preserves a summary of a 
            charter dated 12 May 1427 naming “Adam van Vlandren” as the natural son of “mer Victor van Vlaendren” 
            and specifying that Adam was Victor’s son by “Gertruden Liendekins.”
          </p>
          <p>
            A second FMG summary for a Ghent act of 10 March 1441 Old Style records that “Mergriete Aelfhuuts 
            Heindricx Maye...wijf” donated property to “Lodewyc, Janne ende Adam van Vlaendren natuerliche 
            sonen van wijlen edelen...mer Victor van Vlaendren.” These summaries directly establish that 
            Victor had at least three acknowledged natural sons, that their names were Lodewyc, Janne, and Adam, 
            and that Victor was already dead by the date of the later act.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Naval and Military Activity <span className={`${victorStyles.evidenceLevel} ${victorStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            Victor also appears in published military-maritime literature. A DBNL article states: 
            “Victor was, en dit is belangrijk, kapitein van de vesting Biervliet.” A UGent-hosted study 
            on Flemish corsair warfare likewise notes the appointment of “een nieuwe admiraal: Victor van Vlaanderen.” 
            These sources support the conclusion that Victor held an important coastal or naval command role.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Genealogical Significance <span className={`${victorStyles.evidenceLevel} ${victorStyles.levelHypothesis}`}>Hypothesis</span></h2>
          <p>
            The genealogical significance of Victor van Vlaanderen lies in the convergence of lineage, 
            locality, and surname. The published record establishes an illegitimate comital branch rooted 
            in the Ursel/Wessegem region and shows Victor’s acknowledged natural sons bearing the surname 
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
            "The medieval record is substantial. What remains unproved is not Victor’s existence or family core, 
            but the later genealogical bridge from this fifteenth-century line to the early modern 
            Van Vlaenderen families of the Meetjesland."
          </blockquote>
        </div>

        <section className={victorStyles.referenceList}>
          <h3>Sources &amp; References</h3>
          <div className={victorStyles.refItem}>
            <span className={victorStyles.refNumber}>1.</span>
            Foundation for Medieval Genealogy, MedLands: Flanders, Hainaut. 
            <a href="https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm" className={victorStyles.refLink} target="_blank" rel="noopener noreferrer"> fmg.ac/Projects/MedLands/FLANDERS, HAINAUT.htm</a>
          </div>
          <div className={victorStyles.refItem}>
            <span className={victorStyles.refNumber}>2.</span>
            Inventaris Onroerend Erfgoed, “Hoeve Hof van Wessegem.” 
            <a href="https://inventaris.onroerenderfgoed.be/erfgoedobjecten/33384" className={victorStyles.refLink} target="_blank" rel="noopener noreferrer"> inventaris.onroerenderfgoed.be/erfgoedobjecten/33384</a>
          </div>
          <div className={victorStyles.refItem}>
            <span className={victorStyles.refNumber}>3.</span>
            “Ursel, een Meetjeslands dorp.” 
            <a href="https://mijnplatteland.com/meetjesland/ursel/" className={victorStyles.refLink} target="_blank" rel="noopener noreferrer"> mijnplatteland.com/meetjesland/ursel/</a>
          </div>
          <div className={victorStyles.refItem}>
            <span className={victorStyles.refNumber}>4.</span>
            R. Degryse, “Willem Beukel(s) van Hughevliet: Geschiedenis en legende van een Vlaamse vissersheld,” De Vlaamse Gids 38 (1954). 
            <a href="https://www.dbnl.org/tekst/_vla001195401_01/_vla001195401_01_0055.php" className={victorStyles.refLink} target="_blank" rel="noopener noreferrer"> dbnl.org/tekst/_vla001195401_01/_vla001195401_01_0055.php</a>
          </div>
          <div className={victorStyles.refItem}>
            <span className={victorStyles.refNumber}>5.</span>
            Corvers en zeeschuimers van den Vlaemsche zeecoste, UGent repository copy. 
            <a href="https://libstore.ugent.be/fulltxt/RUG01/001/786/522/RUG01-001786522_2012_0001_AC.pdf" className={victorStyles.refLink} target="_blank" rel="noopener noreferrer"> libstore.ugent.be/fulltxt/RUG01/001/786/522/RUG01-001786522_2012_0001_AC.pdf</a>
          </div>
        </section>

        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            Do you have research that connects to the line of Victor van Vlaanderen?
          </div>
          <div className={styles.ctaNote}>
            We are actively seeking to bridge the gap between the 15th-century records and 
            the early modern parish registers.
          </div>
        </div>
      </div>
    </div>
  );
}
