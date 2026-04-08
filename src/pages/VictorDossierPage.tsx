
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';

interface VictorDossierPageProps {
  onNavigate?: (subpage: 'main' | 'victor' | 'louis-friese' | 'contact' | 'victor-dossier' | 'praet-dossier' | 'praet-lineage-dossier') => void;
}

export default function VictorDossierPage({ onNavigate }: VictorDossierPageProps) {
  return (
    <div className={styles.page}>
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: 'center top' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>Van Vlaenderen · Archival Evidence</div>
          <h1 className={styles.heroTitle}>Victor van Vlaenderen Dossier</h1>
          <p className={styles.heroLead}>
            Direct charter summaries, territorial records, and military service documentation.
          </p>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.breadcrumb}>
          <button onClick={() => onNavigate?.('main')} className={styles.breadcrumbLink}>Research</button>
          <span className={styles.breadcrumbSeparator}>/</span>
          <button onClick={() => onNavigate?.('victor')} className={styles.breadcrumbLink}>Victor van Vlaenderen</button>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>Dossier</span>
        </div>

        <section className={styles.section}>
          <h2>Archival Summary: Victor van Vlaenderen</h2>
          <p>The following table summarizes the primary documentary evidence for Victor van Vlaenderen, Lord of Wessegem.</p>
          
          <div className={researchStyles.dossierTableContainer}>
            <table className={researchStyles.dossierTable}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Source Type</th>
                  <th>Key Evidence / Summary</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1396</td>
                  <td>Military Record</td>
                  <td>Victor appointed as "admiraal" (admiral) or coastal commander. Served as captain of Biervliet.</td>
                  <td><span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Attested</span></td>
                </tr>
                <tr>
                  <td>1399</td>
                  <td>Land Record</td>
                  <td>Lordship of Wessegem (Ursel) passed to Victor van Vlaenderen, natural son of Louis de Male.</td>
                  <td><span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Attested</span></td>
                </tr>
                <tr>
                  <td>1427 (May 12)</td>
                  <td>Charter</td>
                  <td>Charter naming "Adam van Vlandren" as natural son of "mer Victor van Vlaendren" by Gertruden Liendekins.</td>
                  <td><span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Attested</span></td>
                </tr>
                <tr>
                  <td>1431</td>
                  <td>Land Record</td>
                  <td>Lordship of Wessegem reverted to the comital domain following Victor's death (or lack of legitimate heirs).</td>
                  <td><span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Attested</span></td>
                </tr>
                <tr>
                  <td>1441 (Mar 10)</td>
                  <td>Ghent Act</td>
                  <td>Property donation to "Lodewyc, Janne ende Adam van Vlaendren," natural sons of the late Victor.</td>
                  <td><span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Attested</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Territorial Context</h2>
          <p>
            The connection to Wessegem is critical. Wessegem was a seigneurie within the parish of Ursel. 
            The fact that Victor and his sons are documented here—in the exact geographic heart of the 
            later Van Vlaenderen surname distribution—provides the strongest circumstantial link for 
            the continuity hypothesis.
          </p>
        </section>

        <div className={styles.ctaSection}>
          <button onClick={() => onNavigate?.('victor')} className={styles.ctaButton}>
            Return to Victor Lineage
          </button>
        </div>
      </div>
    </div>
  );
}
