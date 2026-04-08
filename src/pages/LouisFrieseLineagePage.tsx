import { useTranslation } from 'react-i18next';
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';
import louisFrieseLineageImg from '../assets/images/heraldic/louis_friese_lineage.png';

interface LouisFrieseLineagePageProps {
  onNavigate?: (subpage: 'main' | 'victor' | 'louis-friese' | 'contact') => void;
}

export default function LouisFrieseLineagePage({ onNavigate }: LouisFrieseLineagePageProps) {
  const { t } = useTranslation();

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
          <div className={styles.eyebrow}>{t('louis_friese.hero_eyebrow')}</div>
          <h1>{t('louis_friese.hero_title')}</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            {t('louis_friese.hero_lead')}
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>{t('louis_friese.dossier_title')}</h2>
          <div className={researchStyles.dossierMeta}>{t('louis_friese.dossier_updated')}</div>
        </div>

        <section className={styles.section}>
          <h2>{t('louis_friese.praet_title')} <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>{t('louis_friese.badge_corroborated')}</span></h2>
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

        <div className={researchStyles.treeContainer}>
          <div className={researchStyles.treeTitle}>{t('louis_friese.tree_title')}</div>
          <img src={louisFrieseLineageImg} alt={t('louis_friese.tree_alt')} style={{ width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block' }} />
        </div>

        <section className={styles.section}>
          <h2>{t('louis_friese.survival_title')} <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>{t('louis_friese.badge_hypothesis')}</span></h2>
          <p>
            {t('louis_friese.survival_p1')}
          </p>
          <p>
            {t('louis_friese.survival_p2')}
          </p>
        </section>

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

        <section className={styles.section} style={{ marginTop: '3rem', borderTop: '1px solid rgba(232, 184, 48, 0.2)', paddingTop: '2rem' }}>
          <div className={researchStyles.branchCards}>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid var(--gold)', cursor: 'pointer' }}
              onClick={() => onNavigate?.('praet-dossier' as any)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onNavigate?.('praet-dossier' as any); } }}
              aria-label="Louis Friese: Archival Dossier"
            >
              <h3>Louis Friese: Archival Dossier</h3>
              <p>Primary source extracts and territorial history of the House of Flanders-Praet.</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                View Archival Evidence →
              </span>
            </div>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid var(--gold)', cursor: 'pointer' }}
              onClick={() => onNavigate?.('praet-lineage-dossier' as any)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onNavigate?.('praet-lineage-dossier' as any); } }}
              aria-label="House of Praet: Lineage Dossier"
            >
              <h3>House of Praet: Lineage Dossier</h3>
              <p>Documented generations from Louis Friese to the extinction of the legitimate male line.</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                View Lineage Evidence →
              </span>
            </div>
          </div>
        </section>

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

        </section>

        <div className={styles.ctaBox} onClick={() => onNavigate?.('contact')} style={{ cursor: 'pointer' }}>
          <div className={styles.ctaText}>
            {t('louis_friese.cta_text')}
          </div>
          <div className={styles.ctaNote}>
            {t('louis_friese.cta_note')}
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
            {t('louis_friese.back_button')}
          </button>
        </div>
      </div>
    </div>
  );
}
