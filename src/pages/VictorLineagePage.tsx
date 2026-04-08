import { useTranslation } from 'react-i18next';
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';
import victorLineageImg from '../assets/images/heraldic/victor_lineage.png';

interface VictorLineagePageProps {
  onNavigate?: (subpage: 'main' | 'victor' | 'louis-friese' | 'contact') => void;
}

export default function VictorLineagePage({ onNavigate }: VictorLineagePageProps) {
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
          <div className={styles.eyebrow}>{t('victor.hero_eyebrow')}</div>
          <h1>{t('victor.hero_title')}</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            {t('victor.hero_lead')}
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>{t('victor.dossier_title')}</h2>
          <div className={researchStyles.dossierMeta}>{t('victor.dossier_updated')}</div>
        </div>

        <section className={styles.section}>
          <h2>{t('victor.identity_title')} <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>{t('victor.badge_corroborated')}</span></h2>
          <p>
            {t('victor.identity_p1')}
          </p>
        </section>

        <section className={styles.section}>
          <h2>{t('victor.territorial_title')} <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>{t('victor.badge_attested')}</span></h2>
          <p>
            {t('victor.territorial_p1')}
          </p>
        </section>

        <div className={researchStyles.treeContainer}>
          <div className={researchStyles.treeTitle}>{t('victor.tree_title')}</div>
          <img src={victorLineageImg} alt={t('victor.tree_alt')} style={{ width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block' }} />
        </div>

        <section className={styles.section}>
          <h2>{t('victor.charter_title')} <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>{t('victor.badge_attested')}</span></h2>
          <p>
            {t('victor.charter_p1')}
          </p>
          <p>
            {t('victor.charter_p2')}
          </p>
        </section>

        <section className={styles.section}>
          <h2>{t('victor.military_title')} <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>{t('victor.badge_corroborated')}</span></h2>
          <p>
            {t('victor.military_p1')}
          </p>
        </section>

        <section className={styles.section}>
          <h2>{t('victor.significance_title')} <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>{t('victor.badge_hypothesis')}</span></h2>
          <p>
            {t('victor.significance_p1')}
          </p>
          <p>
            {t('victor.significance_p2')}
          </p>
        </section>

        <section className={styles.section}>
          <h2>{t('victor.gap_title')} <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>{t('victor.badge_hypothesis')}</span></h2>
          <p>{t('victor.gap_p1')}</p>
          <p>{t('victor.gap_p2')}</p>
          <p>{t('victor.gap_p3')}</p>
          <p>{t('victor.gap_p4')}</p>
          <p>{t('victor.gap_p5')}</p>
          <p>{t('victor.gap_p6')}</p>
        </section>

        <section className={styles.section} style={{ marginTop: '3rem', borderTop: '1px solid rgba(232, 184, 48, 0.2)', paddingTop: '2rem' }}>
          <div className={researchStyles.branchCard} style={{ borderTop: '3px solid var(--gold)', maxWidth: '100%' }}>
            <h3>Victor van Vlaenderen: Archival Dossier</h3>
            <p>For researchers seeking the underlying documentary evidence, we maintain a detailed archival dossier including direct charter summaries, territorial records, and military service documentation.</p>
            <button 
              onClick={() => onNavigate?.('victor-dossier' as any)} 
              className={researchStyles.branchLink}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              View Archival Evidence →
            </button>
          </div>
        </section>

        <div className={styles.pullQuote}>
          <blockquote>
            "{t('victor.pull_quote')}"
          </blockquote>
        </div>

        <section className={researchStyles.referenceList}>
          <h3>{t('victor.sources_title')}</h3>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>1.</span>
            {t('victor.source_1')} 
            <a href="https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> fmg.ac/Projects/MedLands/FLANDERS, HAINAUT.htm</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>2.</span>
            {t('victor.source_2')} 
            <a href="https://inventaris.onroerenderfgoed.be/erfgoedobjecten/33384" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> inventaris.onroerenderfgoed.be/erfgoedobjecten/33384</a>
          </div>

          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>4.</span>
            {t('victor.source_4')} 
            <a href="https://www.dbnl.org/tekst/_vla001195401_01/_vla001195401_01_0055.php" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> dbnl.org/tekst/_vla001195401_01/_vla001195401_01_0055.php</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>5.</span>
            {t('victor.source_5')} 
            <a href="https://libstore.ugent.be/fulltxt/RUG01/001/786/522/RUG01-001786522_2012_0001_AC.pdf" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer"> libstore.ugent.be/fulltxt/RUG01/001/786/522/RUG01-001786522_2012_0001_AC.pdf</a>
          </div>
        </section>

        <div className={styles.ctaBox} onClick={() => onNavigate?.('contact')} style={{ cursor: 'pointer' }}>
          <div className={styles.ctaText}>
            {t('victor.cta_text')}
          </div>
          <div className={styles.ctaNote}>
            {t('victor.cta_note')}
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
            {t('victor.back_button')}
          </button>
        </div>
      </div>
    </div>
  );
}
