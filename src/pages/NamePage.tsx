import { useTranslation } from 'react-i18next';
import styles from './InnerPage.module.css';
import nameStyles from './NamePage.module.css';

import cronikeShields from '../assets/images/heraldic/cronike-van-vlaenderen-shields-double-page.jpg';
import meetjeslandMap from '../assets/images/meetjesland-map.jpg';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';
import knightPhilip from '../assets/images/heraldic/cronike-van-vlaenderen-philip-of-alsace-knight.jpg';
import lionWoodcut from '../assets/images/lion-woodcut.jpg';

interface NamePageProps {
  onNavigate?: (tab: string) => void;
}

export default function NamePage({ onNavigate }: NamePageProps) {
  const { t } = useTranslation();

  const villages = [
    { name: t('name.village_bassevelde'), note: t('name.village_bassevelde_note') },
    { name: t('name.village_boekhoute'), note: t('name.village_boekhoute_note') },
    { name: t('name.village_ursel'), note: t('name.village_ursel_note') },
    { name: t('name.village_evergem'), note: t('name.village_evergem_note') },
    { name: t('name.village_lovendegem'), note: t('name.village_lovendegem_note') },
    { name: t('name.village_sleidinge'), note: t('name.village_sleidinge_note') },
    { name: t('name.village_wessegem'), note: t('name.village_wessegem_note') },
    { name: t('name.village_vinderhoute'), note: t('name.village_vinderhoute_note') },
  ];

  const variations = [
    'Van Vlaenderen', 'Van Vlaenderen', 'Van Vlaendereen',
    'Vanvlaenderen', 'Van Flanderen', 'Vanflanderen',
    'de Flandre', 'van Vlanderen', 'Van Vlaendren',
  ];

  return (
    <div className={styles.page}>

      {/* ── Hero: split image + text ──────────────────────────────── */}
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${knightPhilip})`, backgroundPosition: 'top center' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>{t('name.hero_eyebrow')}</div>
          <h1>{t('name.hero_title')}</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            {t('name.hero_lead')}
          </p>
        </div>
      </div>

      <div className={styles.content}>

        <section className={styles.section}>
          <h2>{t('name.history_title')}</h2>
          <p>
            {t('name.history_p1')}
          </p>
          <p>
            {t('name.history_p2')}
          </p>
          <p>
            {t('name.history_p3')}
          </p>
        </section>

        {/* Meetjesland Map */}
        <div className={nameStyles.mapContainer}>
          <img
            src={meetjeslandMap}
            alt={t('name.map_alt')}
            className={nameStyles.mapImage}
          />
          <div className={nameStyles.mapCaption}>
            {t('name.map_caption')}
          </div>
        </div>

        <div className={styles.pullQuote}>
          <blockquote>
            "{t('name.pull_quote')}"
          </blockquote>
        </div>

        <section className={styles.section}>
          <h2>{t('name.villages_title')}</h2>
          <p>
            {t('name.villages_intro')}
          </p>
          <div className={nameStyles.villageGrid}>
            {villages.map(v => (
              <div key={v.name} className={nameStyles.villageCard}>
                <div className={nameStyles.villageName}>{v.name}</div>
                <div className={nameStyles.villageNote}>{v.note}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>{t('name.variations_title')}</h2>
          <p>
            {t('name.variations_intro')}
          </p>
          <div className={nameStyles.spellingList}>
            {variations.map(s => (
              <span key={s} className={nameStyles.spellingTag}>{s}</span>
            ))}
          </div>
          <p>
            {t('name.variations_footer')}
          </p>
        </section>

        <section className={styles.section}>
          <h2>{t('name.cronike_title')}</h2>
          <p>
            {t('name.cronike_p1')}
          </p>

          {/* Cronike document image */}
          <div className={nameStyles.documentContainer}>
            <img
              src={cronikeShields}
              alt={t('name.document_alt')}
              className={nameStyles.documentImage}
            />
            <div className={nameStyles.documentCaption}>
              {t('name.document_caption')}
            </div>
          </div>

          <p>
            {t('name.cronike_p2')}
          </p>
        </section>

        {/* Manuscript illustrations row */}
        <div className={nameStyles.manuscriptRow}>
          <div className={nameStyles.manuscriptCard}>
            <img
              src={manuscriptNoblewoman}
              alt={t('name.manuscript_1_alt')}
            />
            <div className={nameStyles.manuscriptCaption}>
              {t('name.manuscript_1_caption')}
            </div>
          </div>
          <div className={nameStyles.manuscriptCard}>
            <img
              src={knightPhilip}
              alt={t('name.manuscript_2_alt')}
            />
            <div className={nameStyles.manuscriptCaption}>
              {t('name.manuscript_2_caption')}
            </div>
          </div>
          <div className={nameStyles.manuscriptCard}>
            <img
              src={lionWoodcut}
              alt={t('name.manuscript_3_alt')}
            />
            <div className={nameStyles.manuscriptCaption}>
              {t('name.manuscript_3_caption')}
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            {t('name.cta_text')}
          </div>
          <div className={styles.ctaNote}>
            {t('name.cta_note')}
          </div>
          <button
            className={nameStyles.shareStoryBtn}
            onClick={() => onNavigate?.('contact')}
          >
            {t('name.cta_button')}
          </button>
        </div>

      </div>
    </div>
  );
}
