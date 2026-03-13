import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';

export default function ResearchPage() {
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
          <h1>Research Overview</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            Exploring the lineages of Louis II "de Male," Count of Flanders, and their connection to the Van Vlaenderen surname.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>Research Dossier</h2>
          <div className={researchStyles.dossierMeta}>Updated: March 2026</div>
        </div>

        <section className={researchStyles.methodologyBox}>
          <span className={researchStyles.methodologyTitle}>Methodology</span>
          <div className={researchStyles.methodologyGrid}>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>Directly Attested</span>
              Rest on quoted charter language or explicit documentary summaries.
            </div>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>Strongly Corroborated</span>
              Supported by concordant published historical or heritage authorities.
            </div>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>Probable</span>
              Source-based but require fuller inspection of underlying editions.
            </div>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>Hypothesis</span>
              Genealogical inferences proposed for further testing, not proved facts.
            </div>
          </div>
        </section>

        {/* Victor van Vlaenderen Section */}
        <section className={styles.section}>
          <h2>Victor van Vlaenderen: Identity &amp; Lineage <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            Victor van Vlaenderen, also styled Victor de Flandre, belongs to the illegitimate comital line 
            descending from Louis II “de Male,” Count of Flanders. Published regional and prosopographical 
            authorities place him in direct connection with Wessegem in Ursel and identify him as one of 
            Louis van Male’s bastard sons.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Victor van Vlaenderen: Territorial Setting: Wessegem and Ursel <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            The territorial setting is central. The Flemish heritage inventory for the Hof van Wessegem 
            traces the estate to the medieval seigneurie of Wessegem and states that by the end of the 
            fourteenth century “Lodewijk de Haze en Victor van Vlaenderen, bastaardzoons van Lodewijk van Male,” 
            were lords of Wessegem; it further notes that the property reverted to the comital domain in 1431. 
            A local Ursel history likewise states that in 1399 Wessegem passed to Victor van Vlaenderen, 
            “another bastard son of Louis van Male,” and that he often resided there.
          </p>
        </section>

        <div className={researchStyles.treeContainer}>
          <div className={researchStyles.treeTitle}>The Line of Victor van Vlaenderen</div>
          <div className={researchStyles.treeNode}>
            <span className={researchStyles.treeNodeName}>Louis II "de Male"</span>
            <span className={researchStyles.treeNodeTitle}>Count of Flanders (1330–1384)</span>
          </div>
          <div className={researchStyles.treeConnector} />
          <div className={researchStyles.treeNode}>
            <span className={researchStyles.treeNodeName}>Victor van Vlaenderen</span>
            <span className={researchStyles.treeNodeTitle}>Lord of Wessegem (d. bef. 1442)</span>
          </div>
          <div className={researchStyles.treeChildren}>
            <div className={researchStyles.childNode}>Lodewyc van Vlaendren</div>
            <div className={researchStyles.childNode}>Janne van Vlaendren</div>
            <div className={researchStyles.childNode}>Adam van Vlaendren</div>
          </div>
        </div>

        <section className={styles.section}>
          <h2>Victor van Vlaenderen: Direct Charter Nucleus <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
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
          <h2>Victor van Vlaenderen: Naval and Military Activity <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            Victor also appears in published military-maritime literature. A DBNL article states: 
            “Victor was, en dit is belangrijk, kapitein van de vesting Biervliet.” A UGent-hosted study 
            on Flemish corsair warfare likewise notes the appointment of “een nieuwe admiraal: Victor van Vlaenderen.” 
            These sources support the conclusion that Victor held an important coastal or naval command role.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Victor van Vlaenderen: Genealogical Significance <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Hypothesis</span></h2>
          <p>
            The genealogical significance of Victor van Vlaenderen lies in the convergence of lineage, 
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

        {/* Praet Line Section */}
        <section className={styles.section}>
          <h2>The Praet Line: Collateral Bastard Branch <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            The Praet branch should be treated as a collateral illegitimate branch descending from Louis II “de Male,” Count of Flanders, 
            parallel to the line of Victor van Vlaenderen rather than identical with it. FMG’s Flemish nobility material identifies 
            Louis “Friese,” bâtard de Flandre, as heer van Praet and founder of the Praet branch, while separate FMG material preserves 
            Victor van Vlaendren as father of Adam, Janne, and Lodewyc van Vlaendren. This makes the Praet line a useful comparative 
            framework for branch separation, but not a substitute for proving descent through Victor. 
          </p>
          <p>
            The value of the Praet line lies first in clarification of collateral structure. If Louis “Friese” and Victor were both 
            illegitimate sons of Louis II, then their descendants would represent parallel paternal branches of the same broader 
            comital-bastard kin group. That means later sixteenth-century men styled simply “van Vlaenderen” cannot be assigned 
            automatically to Victor’s descendants without considering whether they may belong instead to the Praet orbit or to 
            another collateral bastard branch.
          </p>
          <p>
            The Praet line is also relevant because it remained socially and politically prominent deep into the sixteenth century. 
            The major representative of that branch, Lodewijk van Vlaenderen, heer van Praet, became a knight of the Order of the 
            Golden Fleece and a leading Habsburg statesman. His prominence means the branch is relatively visible in noble and 
            courtly records, making it a useful control population for names, offices, territorial associations, and witness networks.
          </p>
          <p>
            This collateral line should therefore be investigated for three purposes. First, it provides a branch-control model, 
            helping distinguish Victor’s probable descendants from men of the Praet line who also used the surname Van Vlaenderen. 
            Second, it may reveal younger, illegitimate, or cadet offshoots in the Bruges–Brugge Vrije–Zeeuws-Vlaanderen orbit whose 
            presence could otherwise generate false positives in later surname clusters. Third, it offers a potential genetic 
            comparison line: if a demonstrable modern male-line descendant of the Praet branch could be identified, his Y-DNA should 
            in principle align with that of a genuine male-line descendant of Victor’s branch, assuming both descend patrilineally 
            from the same comital father and absent later non-paternal breaks.
          </p>
          <p>
            The existence of a prestigious Praet line does not justify folding later commoner or merchant Van Vlaenderens into that 
            branch without proof. The end of a legitimate noble male line may create a context in which cadet or illegitimate 
            descendants become more visible elsewhere, but that is only a research prompt, not evidence of continuity. Accordingly, 
            the Praet branch should be used as a comparative and exclusionary framework: a later Joos, Jan, or Lodewijk van Vlaenderen 
            should be tested first against known Praet geography, patronymics, inheritance patterns, and associates before being 
            assigned to Victor’s descendants.
          </p>
          <p>
            In sum, the Praet branch is worth investigating not because it is the most likely direct line of descent, but because 
            it sharpens the entire research design. It helps separate collateral bastard branches, supplies a control case for 
            naming and geography, and may eventually provide a Y-DNA comparator for the broader illegitimate comital line of Flanders.
          </p>
        </section>

        <div className={researchStyles.treeContainer}>
          <div className={researchStyles.treeTitle}>The Line of Louis "Friese" (Praet Line)</div>
          <div className={researchStyles.treeNode}>
            <span className={researchStyles.treeNodeName}>Louis II "de Male"</span>
            <span className={researchStyles.treeNodeTitle}>Count of Flanders (1330–1384)</span>
          </div>
          <div className={researchStyles.treeConnector} />
          <div className={researchStyles.treeNode}>
            <span className={researchStyles.treeNodeName}>Louis "Friese" bâtard de Flandre</span>
            <span className={researchStyles.treeNodeTitle}>Heer van Praet</span>
          </div>
          {/* Placeholder for Praet descendants - actual lineage to be added if available */}
          <div className={researchStyles.treeChildren}>
            <div className={researchStyles.childNode}>Praet Descendant 1</div>
            <div className={researchStyles.childNode}>Praet Descendant 2</div>
          </div>
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
            Inventaris Onroerend Erfgoed, “Hoeve Hof van Wessegem.” 
            <a href="https://inventaris.onroerenderfgoed.be/erfgoedobjecten/33384" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> inventaris.onroerenderfgoed.be/erfgoedobjecten/33384</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>3.</span>
            “Ursel, een Meetjeslands dorp.” 
            <a href="https://mijnplatteland.com/meetjesland/ursel/" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> mijnplatteland.com/meetjesland/ursel/</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>4.</span>
            R. Degryse, “Willem Beukel(s) van Hughevliet: Geschiedenis en legende van een Vlaamse vissersheld,” De Vlaamse Gids 38 (1954). 
            <a href="https://www.dbnl.org/tekst/_vla001195401_01/_vla001195401_01_0055.php" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> dbnl.org/tekst/_vla001195401_01/_vla001195401_01_0055.php</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>5.</span>
            Corvers en zeeschuimers van den Vlaemsche zeecoste, UGent repository copy. 
            <a href="https://libstore.ugent.be/fulltxt/RUG01/001/786/522/RUG01-001786522_2012_0001_AC.pdf" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> libstore.ugent.be/fulltxt/RUG01/001/786/522/RUG01-001786522_2012_0001_AC.pdf</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>6.</span>
            Foundation for Medieval Genealogy, MedLands: Flemish Nobility, identifying Louis “Friese,” bâtard de Flandre, heer van Praet, as ancestor of the Praet branch.
            <a href="https://fmg.ac/Projects/MedLands/FLEMISH%20NOBILITY.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> fmg.ac/Projects/MedLands/FLEMISH%20NOBILITY.htm</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>7.</span>
            Biographical and historical treatments of Lodewijk van Vlaenderen, heer van Praet, including his prominence under Charles V and membership in the Order of the Golden Fleece.
            <a href="https://www.dbnl.org/tekst/eras001corr10_01/eras001corr10_01_0112.php" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> dbnl.org/tekst/eras001corr10_01/eras001corr10_01_0112.php</a>
          </div>
        </section>

        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            Do you have research that connects to the lines of Victor van Vlaenderen or the Praet branch?
          </div>
          <div className={styles.ctaNote}>
            We are actively seeking to bridge the gap between the 15th-century records and 
            the early modern parish registers, and to further document the Praet lineage.
          </p>
        </div>
      </div>
    </div>
  );
}
