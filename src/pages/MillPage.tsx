import { useTranslation } from 'react-i18next';
import millVinderhoute from '../assets/images/places/van-vlaenderensmolen-vinderhoute-cc-by-sa-3.0.jpg';
import meetjeslandMap from '../assets/images/meetjesland-map.jpg';
import styles from './InnerPage.module.css';
import millStyles from './MillPage.module.css';
import { useNav } from '../hooks/useNav';
import { Helmet } from 'react-helmet-async';

export default function MillPage() {
  const { goTo } = useNav();
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Helmet>
        <title>The Mill — Van Vlaenderen Family Origins | vanvlaenderen.org</title>
        <meta name="description" content="The documented miller lineage of the Van Vlaenderen family from 1568 Ghent through East Flanders — Wassegem, Oostwinkel, Waarschoot, Boekhoute, and Bassevelde." />
        <link rel="canonical" href="https://vanvlaenderen.org/mill" />
        <meta property="og:title" content="The Mill — Van Vlaenderen Family Origins" />
        <meta property="og:description" content="Documented miller lineage from 1568 Ghent through East Flanders." />
        <meta property="og:url" content="https://vanvlaenderen.org/mill" />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* ── Hero: windmill image + text ───────────────────────────── */}
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${millVinderhoute})`, backgroundPosition: 'center center' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>{t('mill.hero_eyebrow')}</div>
          <h1>{t('mill.hero_title')}</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            {t('mill.hero_lead')}
          </p>
        </div>
      </div>

      <div className={styles.content}>

        {/* ── Proverb ─────────────────────────────────────────────── */}
        <div className={millStyles.proverbBox}>
          <div className={millStyles.proverbDecor}>✦</div>
          <div className={millStyles.proverbText}>
            "{t('mill.proverb_text')}"
          </div>
          <div className={millStyles.proverbSource}>
            {t('mill.proverb_source')}
          </div>
          <div className={millStyles.proverbDecor}>✦</div>
        </div>

        <section className={styles.section}>
          <h2>{t('mill.history_title')}</h2>
          <p>
            {t('mill.history_p1')}
          </p>
          <p>
            {t('mill.history_p2')}
          </p>
          <p>
            {t('mill.history_p3')}
          </p>
        </section>

        {/* ── Family Lineage Graphic ───────────────────────────────── */}
        <div className={millStyles.lineageContainer}>
          <div className={millStyles.lineageNode}>
            <div className={millStyles.lineageGeneration}>{t('mill.lineage_gen_1')}</div>
            <div className={millStyles.lineageName}>{t('mill.lineage_name_1')}</div>
            <div className={millStyles.lineageDates}>{t('mill.lineage_dates_1')}</div>
            <div className={millStyles.lineageRole}>{t('mill.lineage_role_1')}</div>
          </div>
          <div className={millStyles.lineageConnector}>
            <div className={millStyles.lineageConnectorLine} />
            <div className={millStyles.lineageConnectorArrow}>›</div>
          </div>
          <div className={millStyles.lineageNode}>
            <div className={millStyles.lineageGeneration}>{t('mill.lineage_gen_2')}</div>
            <div className={millStyles.lineageName}>{t('mill.lineage_name_2')}</div>
            <div className={millStyles.lineageDates}>{t('mill.lineage_dates_2')}</div>
            <div className={millStyles.lineageRole}>{t('mill.lineage_role_2')}</div>
          </div>
          <div className={millStyles.lineageConnector}>
            <div className={millStyles.lineageConnectorLine} />
            <div className={millStyles.lineageConnectorArrow}>›</div>
          </div>
          <div className={millStyles.lineageNode}>
            <div className={millStyles.lineageGeneration}>{t('mill.lineage_gen_3')}</div>
            <div className={millStyles.lineageName}>{t('mill.lineage_name_3')}</div>
            <div className={millStyles.lineageDates}>{t('mill.lineage_dates_3')}</div>
            <div className={millStyles.lineageRole}>{t('mill.lineage_role_3')}</div>
          </div>
        </div>

        {/* ── Mill photos ──────────────────────────────────────────── */}
        <div className={millStyles.millPhotoRow}>
          <div className={millStyles.millPhotoCard}>
            <img src={millVinderhoute} alt={t('mill.photo_alt')} />
            <div className={millStyles.millPhotoCaption}>
              {t('mill.photo_caption')}{' '}
              <em>
                {t('mill.photo_attribution')}{' '}
                <a href="https://commons.wikimedia.org/wiki/User:Pvhuf" target="_blank" rel="noopener noreferrer">Pvhuf</a>,{' '}
                <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
              </em>
            </div>
          </div>

        </div>

        <section className={styles.section}>
          <h2>{t('mill.social_title')}</h2>
          <p>
            {t('mill.social_p1')}
          </p>
          <p>
            {t('mill.social_p2')}
          </p>
          <p>
            {t('mill.social_p3')}
          </p>
          <p>
            {t('mill.social_p4')}
          </p>
        </section>

        {/* ── Meetjesland Region with map ──────────────────────────── */}
        <section className={millStyles.meetjeslandSection}>
          <div
            className={millStyles.meetjeslandMapBg}
            style={{ backgroundImage: `url(${meetjeslandMap})` }}
          />
          <div className={millStyles.meetjeslandContent}>
            <h2>{t('mill.region_title')}</h2>
            <p>
              {t('mill.region_p1')}
            </p>
          </div>
        </section>

        {/* ── Map Pin with Google Maps link ───────────────────────── */}
        <div className={styles.mapNote}>
          <div className={styles.mapNoteInner}>
            <div className={styles.mapNoteIcon}>📍</div>
            <div>
              <strong>{t('mill.location_name')}</strong><br />
              <span>{t('mill.location_address')}</span><br />
              <span className={styles.mapNoteCoords}>{t('mill.location_coords')}</span><br />
              <a
                href="https://www.google.com/maps/place/Van+Vlaenderensmolen/@51.1009,3.5985,17z"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.85rem', letterSpacing: '0.06em', marginTop: '0.5rem', display: 'inline-block' }}
              >
                {t('mill.location_link')}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox} onClick={() => goTo('contact')} style={{ cursor: 'pointer' }}>
          <div className={styles.ctaText}>
            {t('mill.cta_text')}
          </div>
          <div className={styles.ctaNote}>
            {t('mill.cta_note')}
          </div>
        </div>

      </div>
    </div>
  );
}
