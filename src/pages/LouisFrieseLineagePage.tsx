import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';
import louisFrieseLineageImg from '../assets/images/heraldic/louis_friese_lineage.png';

interface LouisFrieseLineagePageProps {
  onNavigate?: (subpage: 'main' | 'victor' | 'louis-friese') => void;
}

export default function LouisFrieseLineagePage({ onNavigate }: LouisFrieseLineagePageProps) {
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
          <h1>Louis "Friese" van Vlaenderen</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            Progenitor of the House of Flanders-Praet and a powerful medieval noble line.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>The Praet Line: Collateral Bastard Branch</h2>
          <div className={researchStyles.dossierMeta}>Updated: March 2026</div>
        </div>

        <section className={styles.section}>
          <h2>The Praet Line: Collateral Bastard Branch <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            The Praet branch should be treated as a collateral illegitimate branch descending from Louis II "de Male," Count of Flanders, 
            parallel to the line of Victor van Vlaenderen rather than identical with it. FMG's Flemish nobility material identifies 
            Louis "Friese," bâtard de Flandre, as heer van Praet and founder of the Praet branch, while separate FMG material preserves 
            Victor van Vlaendren as father of Adam, Janne, and Lodewyc van Vlaendren. This makes the Praet line a useful comparative 
            framework for branch separation, but not a substitute for proving descent through Victor. 
          </p>
          <p>
            The value of the Praet line lies first in clarification of collateral structure. If Louis "Friese" and Victor were both 
            illegitimate sons of Louis II, then their descendants would represent parallel paternal branches of the same broader 
            comital-bastard kin group. That means later sixteenth-century men styled simply "van Vlaenderen" cannot be assigned 
            automatically to Victor's descendants without considering whether they may belong instead to the Praet orbit or to 
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
            helping distinguish Victor's probable descendants from men of the Praet line who also used the surname Van Vlaenderen. 
            Second, it may reveal younger, illegitimate, or cadet offshoots in the Bruges–Brugge Vrije–Zeeuws-Vlaanderen orbit whose 
            presence could otherwise generate false positives in later surname clusters. Third, it offers a potential genetic 
            comparison line: if a demonstrable modern male-line descendant of the Praet branch could be identified, his Y-DNA should 
            in principle align with that of a genuine male-line descendant of Victor's branch, assuming both descend patrilineally 
            from the same comital father and absent later non-paternal breaks.
          </p>
          <p>
            The existence of a prestigious Praet line does not justify folding later commoner or merchant Van Vlaenderens into that 
            branch without proof. The end of a legitimate noble male line may create a context in which cadet or illegitimate 
            descendants become more visible elsewhere, but that is only a research prompt, not evidence of continuity. Accordingly, 
            the Praet branch should be used as a comparative and exclusionary framework: a later Joos, Jan, or Lodewijk van Vlaenderen 
            should be tested first against known Praet geography, patronymics, inheritance patterns, and associates before being 
            assigned to Victor's descendants.
          </p>
          <p>
            In sum, the Praet branch is worth investigating not because it is the most likely direct line of descent, but because 
            it sharpens the entire research design. It helps separate collateral bastard branches, supplies a control case for 
            naming and geography, and may eventually provide a Y-DNA comparator for the broader illegitimate comital line of Flanders.
          </p>
        </section>

        <div className={researchStyles.treeContainer}>
          <div className={researchStyles.treeTitle}>The Line of Louis "Friese" (Praet Line)</div>
          <img src={louisFrieseLineageImg} alt="Louis Friese van Vlaenderen Lineage Diagram" style={{ width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block' }} />
        </div>

        <section className={styles.section}>
          <h2>Survival of the "Van Vlaenderen" Surname <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Hypothesis</span></h2>
          <p>
            While the feudal Lordship of Praet passed out of the direct male line of the House of Flanders-Praet in 1556 with the death 
            of Lodewijk IV van Vlaenderen, the "Van Vlaenderen" surname did not disappear. Genealogical research indicates the presence 
            of several younger sons and cadet branches that continued to bear the name. Lodewijk IV had brothers such as 
            <strong>Anton van Vlaenderen</strong> and <strong>Josse (Joos) van Vlaenderen</strong>, who would have carried the surname 
            and potentially founded their own lines. Furthermore, records suggest a <strong>Jacob van Vlaenderen</strong>, born in 1545 
            to Jan II, who could have continued the male line if he survived to adulthood.
          </p>
          <p>
            This phenomenon was common in the late medieval and early modern periods, where younger sons of noble families, particularly 
            those from illegitimate branches, often transitioned into the urban patriciate or local gentry. The "Van Vlaenderen" surname 
            thus evolved from a mark of comital nobility to a more widespread family name, particularly in regions like Meetjesland, 
            where the family held historical ties.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Key Figures in the Praet Line</h2>
          <p>
            The House of Flanders-Praet produced several notable figures whose prominence is well-documented in medieval and early 
            modern sources:
          </p>
          <ul>
            <li><strong>Louis "Friese" van Vlaenderen</strong> (c. 1350 – 1396): Founder of the Praet branch, granted the lordships of Praet and Woestine.</li>
            <li><strong>Johan I van Vlaenderen</strong> (d. 1440): Lord of Praet, continued the line through his marriage to Johanna van Reygersvliet.</li>
            <li><strong>Lodewijk II van Vlaenderen</strong> (b. 1425): Lord of Praet and Woestine, married Louise van der Aa van Gruuthuyse.</li>
            <li><strong>Lodewijk III van Vlaenderen</strong> (d. 1488): Lord of Praet, married Isabelle de Bourgogne.</li>
            <li><strong>Lodewijk IV van Vlaenderen</strong> (d. 1556): Knight of the Golden Fleece, advisor to Emperor Charles V, and the most prominent member of the Praet line. His marriage to Josine van Praet consolidated the family's holdings.</li>
          </ul>
        </section>

        <section className={researchStyles.referenceList}>
          <h3>Sources &amp; References</h3>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>1.</span>
            Foundation for Medieval Genealogy, MedLands: Flanders, Hainaut. 
            <a href="https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> fmg.ac/Projects/MedLands/FLANDERS, HAINAUT.htm</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>2.</span>
            Foundation for Medieval Genealogy, MedLands: Flemish Nobility, identifying Louis "Friese," bâtard de Flandre, heer van Praet, as ancestor of the Praet branch.
            <a href="https://fmg.ac/Projects/MedLands/FLEMISH%20NOBILITY.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> fmg.ac/Projects/MedLands/FLEMISH%20NOBILITY.htm</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>3.</span>
            WappenWiki, "House of Flanders-Praet." 
            <a href="https://wappenwiki.org/index.php/House_of_Flanders-Praet" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> wappenwiki.org/index.php/House_of_Flanders-Praet</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>4.</span>
            GenealogieOnline, "Lodewijk I (de Fries) van Vlaanderen Heer van Praet." 
            <a href="https://www.genealogieonline.nl/west-europese-adel/I75515.php" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> genealogieonline.nl/west-europese-adel/I75515.php</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>5.</span>
            GenealogieOnline, "Lodewijk II van Vlaanderen Heer van Praet." 
            <a href="https://www.genealogieonline.nl/en/west-europese-adel/I194314.php" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> genealogieonline.nl/en/west-europese-adel/I194314.php</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>6.</span>
            Biographical and historical treatments of Lodewijk van Vlaenderen, heer van Praet, including his prominence under Charles V and membership in the Order of the Golden Fleece.
            <a href="https://www.dbnl.org/tekst/eras001corr10_01/eras001corr10_01_0112.php" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> dbnl.org/tekst/eras001corr10_01/eras001corr10_01_0112.php</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>7.</span>
            Rootenberg, S. F. U. (2013). "The Van Hille descent of the Swanepoel family". <em>Familia</em>, 50(4), 221-228. 
            <a href="https://journals.co.za/doi/abs/10.10520/ejc-familia-v50-n4-a4" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> journals.co.za/doi/abs/10.10520/ejc-familia-v50-n4-a4</a>
          </div>
        </section>

        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            Do you have research that connects to the Praet branch?
          </div>
          <div className={styles.ctaNote}>
            We are actively seeking to further document the Praet lineage and its cadet branches.
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
