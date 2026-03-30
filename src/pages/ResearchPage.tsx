import { useTranslation } from 'react-i18next';
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';

interface ResearchPageProps {
  onNavigate?: (subpage: 'main' | 'victor' | 'louis-friese' | 'contact') => void;
}

export default function ResearchPage({ onNavigate }: ResearchPageProps) {
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
          <div className={styles.eyebrow}>{t('research.hero_eyebrow')}</div>
          <h1>{t('research.hero_title')}</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            {t('research.hero_lead')}
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>{t('research.dossier_title')}</h2>
          <div className={researchStyles.dossierMeta}>{t('research.dossier_updated')}</div>
        </div>

        <section className={styles.section}>
          <h2>{t('research.intro_title')}</h2>
          <p>
            {t('research.intro_p1')}
          </p>
          <p>
            {t('research.intro_p2')}
          </p>
        </section>

        <section className={researchStyles.methodologyBox}>
          <span className={researchStyles.methodologyTitle}>{t('research.methodology_title')}</span>
          <div className={researchStyles.methodologyGrid}>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>{t('research.method_attested_label')}</span>
              {t('research.method_attested_text')}
            </div>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>{t('research.method_corroborated_label')}</span>
              {t('research.method_corroborated_text')}
            </div>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>{t('research.method_probable_label')}</span>
              {t('research.method_probable_text')}
            </div>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>{t('research.method_hypothesis_label')}</span>
              {t('research.method_hypothesis_text')}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>{t('research.significance_title')}</h2>
          <p>
            {t('research.significance_p1')}
          </p>
        </section>

        <section className={styles.section}>
          <h2>{t('research.branches_title')}</h2>
          <p>
            {t('research.branches_intro')}
          </p>
        </section>

        <div className={researchStyles.branchCards}>
          <div className={researchStyles.branchCard}>
            <h3>{t('research.branch_victor_title')}</h3>
            <p>
              {t('research.branch_victor_text')}
            </p>
            <button 
              onClick={() => onNavigate?.('victor')} 
              className={researchStyles.branchLink}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              {t('research.branch_victor_link')}
            </button>
          </div>

          <div className={researchStyles.branchCard}>
            <h3>{t('research.branch_louis_title')}</h3>
            <p>
              {t('research.branch_louis_text')}
            </p>
            <button 
              onClick={() => onNavigate?.('louis-friese')} 
              className={researchStyles.branchLink}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              {t('research.branch_louis_link')}
            </button>
          </div>
        </div>

        <section className={styles.section}>
          <h2>{t('research.conclusion_title')}</h2>
          <p>
            {t('research.conclusion_p1')}
          </p>
        </section>

        <div className={styles.ctaBox} onClick={() => onNavigate?.('contact')} style={{ cursor: 'pointer' }}>
          <div className={styles.ctaText}>
            {t('research.cta_text')}
          </div>
          <div className={styles.ctaNote}>
            {t('research.cta_note')}
          </div>
        </div>
      </div>
    </div>
  );
}
