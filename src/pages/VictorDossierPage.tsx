import { useTranslation } from 'react-i18next';
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';

interface VictorDossierPageProps {
  onNavigate?: (subpage: 'main' | 'victor' | 'louis-friese' | 'contact' | 'victor-dossier' | 'praet-dossier' | 'praet-lineage-dossier') => void;
}

export default function VictorDossierPage({ onNavigate }: VictorDossierPageProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: 'center top' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen · Archival Dossier</div>
          <h1>Victor van Vlaenderen</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            Bastard son of Louis II "de Male," Count of Flanders; lord of Wessegem in Ursel; attested father of Lodewyc, Janne, and Adam van Vlaendren.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>Archival Dossier</h2>
          <div className={researchStyles.dossierMeta}>Updated April 2026</div>
        </div>

        <section className={researchStyles.methodologyBox}>
          <span className={researchStyles.methodologyTitle}>Methodology & Evidence Levels</span>
          <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>
            This dossier distinguishes four evidentiary levels: directly attested, strongly corroborated, probable, and hypothesis. Directly attested statements rest on quoted charter language or an explicit documentary summary in a published authority.
          </p>
          <div className={researchStyles.methodologyGrid}>
            <div className={researchStyles.methodItem}>
              <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`} style={{ marginLeft: 0, marginBottom: '5px' }}>Directly Attested</span>
              <span style={{ fontSize: '0.8rem', display: 'block' }}>Quoted charter language or explicit documentary summary.</span>
            </div>
            <div className={researchStyles.methodItem}>
              <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`} style={{ marginLeft: 0, marginBottom: '5px' }}>Strongly Corroborated</span>
              <span style={{ fontSize: '0.8rem', display: 'block' }}>Supported by concordant published historical authorities.</span>
            </div>
            <div className={researchStyles.methodItem}>
              <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelProbable}`} style={{ marginLeft: 0, marginBottom: '5px' }}>Probable</span>
              <span style={{ fontSize: '0.8rem', display: 'block' }}>Source-based but require fuller inspection of underlying edition.</span>
            </div>
            <div className={researchStyles.methodItem}>
              <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`} style={{ marginLeft: 0, marginBottom: '5px' }}>Hypothesis</span>
              <span style={{ fontSize: '0.8rem', display: 'block' }}>Genealogical inferences proposed for further testing.</span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Identity <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            Victor van Vlaanderen, also styled Victor de Flandre, belongs to the illegitimate comital line descending from Louis II "de Male," Count of Flanders. Published regional and prosopographical authorities place him in direct connection with Wessegem in Ursel and identify him as one of Louis van Male's bastard sons.<sup>[2]</sup>
          </p>
        </section>

        <section className={styles.section}>
          <h2>Territorial setting: Wessegem and Ursel <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            The territorial setting is central. The Flemish heritage inventory for the Hof van Wessegem traces the estate to the medieval seigneurie of Wessegem and states that by the end of the fourteenth century "Lodewijk de Haze en Victor van Vlaanderen, bastaardzoons van Lodewijk van Male," were lords of Wessegem; it further notes that the property reverted to the comital domain in 1431. A local Ursel history likewise states that in 1399 Wessegem passed to Victor van Vlaanderen, "another bastard son of Louis van Male," and that he often resided there.<sup>[2][3]</sup>
          </p>
        </section>

        <section className={styles.section}>
          <h2>Direct charter nucleus <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            The documentary core of Victor's dossier lies in the charter material summarized by the Foundation for Medieval Genealogy. FMG's Flanders, Hainaut material preserves a summary of a charter dated 12 May 1427 naming "Adam van Vlandren" as the natural son of "mer Victor van Vlaendren" and specifying that Adam was Victor's son by "Gertruden Liendekins."<sup>[4]</sup>
          </p>
          <p>
            A second FMG summary for a Ghent act of 10 March 1441 Old Style records that "Mergriete Aelfhuuts Heindricx Maye...wijf" donated property to "Lodewyc, Janne ende Adam van Vlaendren natuerliche sonen van wijlen edelen...mer Victor van Vlaendren." These summaries directly establish that Victor had at least three acknowledged natural sons, that their names were Lodewyc, Janne, and Adam, that Victor was already dead by the date of the later act, and that the surname form van Vlaendren was in use for these sons in the fifteenth century.<sup>[5]</sup>
          </p>
        </section>

        <section className={styles.section}>
          <h2>Chronology <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelProbable}`}>Probable</span></h2>
          <p>
            Victor's chronology requires care. The 1431 date belongs securely to the reversion of Wessegem to the comital domain, but it should not automatically be treated as Victor's death year. The stronger terminus comes from the FMG summary, where the sons are described as those of the late Victor van Vlaendren. On that basis, Victor was dead before 10 March 1441 O.S., that is, before 10 March 1442 New Style.<sup>[2][5]</sup>
          </p>
        </section>

        <section className={styles.section}>
          <h2>Margriete Aelfhuuts <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Hypothesis</span></h2>
          <p>
            The identification of Victor's mother remains less secure than the core paternal and filial data. The later FMG summary directly attests Margriete Aelfhuuts as donor to Victor's sons, but the further inference that she was Victor's mother belongs to prosopographical interpretation unless the full underlying edition is cited in extenso.<sup>[5]</sup>
          </p>
        </section>

        <section className={styles.section}>
          <h2>Gertruden Liendekins and the mothers of the sons <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelProbable}`}>Probable</span></h2>
          <p>
            Gertruden Liendekins is on firmer ground, because the visible FMG summary explicitly names her as the mother of Adam van Vlandren. No equally direct published excerpt was recovered in this pass for Alix or Alyssen van Boyeghem as mother of Lodewyc and Janne, so that attribution should remain provisional pending direct citation from the full underlying authority.<sup>[4][5]</sup>
          </p>
        </section>

        <section className={styles.section}>
          <h2>Naval and military activity <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            Victor also appears in published military-maritime literature. A DBNL article states: "Victor was, en dit is belangrijk, kapitein van de vesting Biervliet." A UGent-hosted study on Flemish corsair warfare likewise notes the appointment of "een nieuwe admiraal: Victor van Vlaanderen." These sources support the conclusion that Victor held an important coastal or naval command role, though the exact sequence and titulature should still be normalized from the full texts before use in a formal prosopographical register.<sup>[6][7]</sup>
          </p>
        </section>

        <section className={styles.section}>
          <h2>Genealogical significance <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Hypothesis</span></h2>
          <p>
            The genealogical significance of Victor van Vlaanderen lies in the convergence of lineage, locality, and surname. The published record establishes an illegitimate comital branch rooted in the Ursel/Wessegem region and shows Victor's acknowledged natural sons bearing the surname form van Vlaendren. This does not by itself prove continuous descent to the later parish-record Van Vlaenderens of Ursel, Maldegem, Oosteeklo, Boekhoute, or Bassevelde. It does, however, provide a substantial medieval documentary nucleus that makes such a continuity hypothesis materially stronger than a mere coincidence-of-surname explanation.<sup>[2][5]</sup>
          </p>
        </section>

        <section className={researchStyles.referenceList}>
          <h3>Notes & Bibliography</h3>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>1.</span>
            Foundation for Medieval Genealogy, MedLands: Flanders, Hainaut. <a href="https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">fmg.ac/Projects/MedLands/FLANDERS, HAINAUT.htm</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>2.</span>
            Inventaris Onroerend Erfgoed, "Hoeve Hof van Wessegem." <a href="https://inventaris.onroerenderfgoed.be/erfgoedobjecten/33384" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">inventaris.onroerenderfgoed.be/erfgoedobjecten/33384</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>3.</span>
            "Ursel, een Meetjeslands dorp." <a href="https://mijnplatteland.com/meetjesland/ursel/" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">mijnplatteland.com/meetjesland/ursel/</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>4.</span>
            FMG MedLands, summary of charter dated 12 May 1427, naming Adam van Vlandren as natural son of Victor van Vlaendren by Gertruden Liendekins.
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>5.</span>
            FMG MedLands, summary of Ghent act 10 March 1441 O.S., naming Lodewyc, Janne ende Adam van Vlaendren natuerliche sonen van wijlen edelen mer Victor van Vlaendren.
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>6.</span>
            Degryse, R. Willem Beukel(s) van Hughevliet. De Vlaamse Gids 38 (1954). <a href="https://www.dbnl.org/tekst/_vla001195401_01/_vla001195401_01_0055.php" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">dbnl.org/tekst/_vla001195401_01/_vla001195401_01_0055.php</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>7.</span>
            Corvers en zeeschuimers van den Vlaemsche zeecoste. UGent repository. <a href="https://libstore.ugent.be/fulltxt/RUG01/001/786/522/RUG01-001786522_2012_0001_AC.pdf" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">libstore.ugent.be/fulltxt/RUG01/001/786/522/RUG01-001786522_2012_0001_AC.pdf</a>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(232, 184, 48, 0.2)' }}>
          <button 
            onClick={() => onNavigate?.('victor')} 
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
            Back to Victor Lineage
          </button>
        </div>
      </div>
    </div>
  );
}
