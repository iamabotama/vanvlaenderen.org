import React from 'react';
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';

interface PraetLineageDossierPageProps {
  onNavigate?: (subpage: 'main' | 'victor' | 'louis-friese' | 'contact' | 'victor-dossier' | 'praet-dossier' | 'praet-lineage-dossier') => void;
}

export default function PraetLineageDossierPage({ onNavigate }: PraetLineageDossierPageProps) {
  const lineageData = [
    { gen: 1, name: 'Louis Friese van Vlaenderen (d. 28 Sep 1396)', role: 'Bastard of Flanders; Lord of Praet & Woestine', spouse: '1) Unknown (La Woestine) 2) Maria van Ghistelles (after 25 Sep 1373)', level: 'Directly attested', levelClass: researchStyles.levelAttested },
    { gen: 2, name: 'Johan I van Vlaenderen (c.1396 - c.1440)', role: 'Lord of Praet; Knighted 1425 by Duke of Burgundy', spouse: 'Johanna van Reygersvliet (m. 1420)', level: 'Strongly corroborated', levelClass: researchStyles.levelCorroborated },
    { gen: 3, name: 'Lodewijk II van Vlaenderen (b. c.1425)', role: 'Lord of Praet and Woestine', spouse: 'Louise van der Aa van Gruuthuyse', level: 'Strongly corroborated', levelClass: researchStyles.levelCorroborated },
    { gen: 4, name: 'Lodewijk III van Vlaenderen (d. 1 Jan 1490)', role: 'Lord of Praet', spouse: 'Isabelle de Bourgogne (d. 12 Jan 1504)', level: 'Strongly corroborated', levelClass: researchStyles.levelCorroborated },
    { gen: 5, name: 'Lodewijk IV van Vlaenderen (1488 - 7 Oct 1555)', role: 'Knight of the Golden Fleece (1531); Grand Bailiff of Ghent and Bruges; Stadtholder Holland & Zeeland', spouse: 'Josine van Praet (heiress of the Praet lordship)', level: 'Directly attested', levelClass: researchStyles.levelAttested },
    { gen: 6, name: 'Jan II van Vlaenderen (c.1523 - c.1545)', role: 'Lord of Praet; predeceased father without issue; last of the legitimate male line', spouse: 'Unknown', level: 'Directly attested', levelClass: researchStyles.levelAttested },
  ];

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
          <div className={styles.eyebrow}>Van Vlaenderen · Lineage Dossier</div>
          <h1>The House of Flanders-Praet</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            Documented lineage from Louis Friese van Vlaenderen (d. 1396) to the extinction of the legitimate male line (c.1545-1556).
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>Lineage Dossier</h2>
          <div className={researchStyles.dossierMeta}>Updated April 2026</div>
        </div>

        <section className={researchStyles.methodologyBox}>
          <span className={researchStyles.methodologyTitle}>Methodology</span>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Evidence levels follow the framework set out in the Louis Friese dossier. The intermediate generations — Johan I through Lodewijk III — rest on published secondary compilations and are classified as strongly corroborated. Lodewijk IV and Jan II are documented in independent primary sources and are treated as directly attested.
          </p>
        </section>

        <section className={styles.section}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--gold)', textAlign: 'left' }}>
                  <th style={{ padding: '12px', color: 'var(--gold)' }}>Gen</th>
                  <th style={{ padding: '12px', color: 'var(--gold)' }}>Name</th>
                  <th style={{ padding: '12px', color: 'var(--gold)' }}>Title or Role</th>
                  <th style={{ padding: '12px', color: 'var(--gold)' }}>Spouse</th>
                  <th style={{ padding: '12px', color: 'var(--gold)' }}>Evidence Level</th>
                </tr>
              </thead>
              <tbody>
                {lineageData.map((row, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)', backgroundColor: index % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'transparent' }}>
                    <td style={{ padding: '12px' }}>{row.gen}</td>
                    <td style={{ padding: '12px', fontWeight: 'bold' }}>{row.name}</td>
                    <td style={{ padding: '12px' }}>{row.role}</td>
                    <td style={{ padding: '12px' }}>{row.spouse}</td>
                    <td style={{ padding: '12px' }}>
                      <span className={`${researchStyles.evidenceLevel} ${row.levelClass}`} style={{ marginLeft: 0, whiteSpace: 'nowrap' }}>{row.level}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Generation Notes</h2>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Johan I van Vlaenderen (c.1396 - c.1440)</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Johan I is attested in Pattou's compilation as son of Louis Friese, lord of Praet, and knighted in 1425 by the Duke of Burgundy. The GenealogieOnline West-Europese Adel database records his marriage in 1420 to Johanna van Reygersvliet.
            </p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Lodewijk II van Vlaenderen (b. c.1425)</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Lodewijk II appears in Pattou and the GenealogieOnline West-Europese Adel database as lord of Praet and Woestine with a marriage to Louise van der Aa van Gruuthuyse.
            </p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Lodewijk III van Vlaenderen (d. 1 January 1490)</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Lodewijk III is recorded in Pattou with a death date of 1 January 1490 and a marriage to Isabelle de Bourgogne (d. 12 January 1504).
            </p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Lodewijk IV van Vlaenderen / Louis of Praet (1488 - 7 October 1555)</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Lodewijk IV is the most extensively documented member of the line. He served as grand bailiff of Ghent and Bruges, ambassador in England and France, and as Stadtholder of Holland and Zeeland. He was a close advisor to Emperor Charles V. He acquired the lordship of Praet through his marriage to Josine van Praet, heiress of the original baronial family.
            </p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Jan II van Vlaenderen (c.1523 - c.1545)</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Jan II was the only documented son of Lodewijk IV. He died before his father without issue, ending the legitimate male line. The lordship of Praet subsequently passed to other families.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Documented Cadet Connections</h2>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Francoise van Praet van Moerkerke (fl. c.1519)</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Two independent published sources document a woman of the Praet lineage marrying into the Boetzelaer family of Utrecht. Nederland's Adelsboek (1908) records that Wessel van Boetzelaer married c.1519 a Francina van Praet. The Lauwens genealogical study (2010) corroborates this from the van Praet side.
            </p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Margaretha van Vlaenderen (b. c.1466)</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Pattou's Batards de Flandres lists a Margaretha van Vlaenderen (born approximately 1466) as a member of the Praet line, marrying into the Lannoy family circa 1489. This is the sole published secondary source for this figure.
            </p>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(232, 184, 48, 0.2)' }}>
          <button 
            onClick={() => onNavigate?.('louis-friese')} 
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
            Back to Louis Friese Lineage
          </button>
        </div>
      </div>
    </div>
  );
}
