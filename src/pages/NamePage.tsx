import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './InnerPage.module.css';
import nameStyles from './NamePage.module.css';
import researchStyles from './ResearchPage.module.css';

import cronikeShields from '../assets/images/heraldic/cronike-van-vlaenderen-shields-double-page.jpg';
import meetjeslandMap from '../assets/images/meetjesland-map.jpg';
import TimelineClusterMap from '../components/TimelineClusterMap';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';
import knightPhilip from '../assets/images/heraldic/cronike-van-vlaenderen-philip-of-alsace-knight.jpg';
import lionWoodcut from '../assets/images/lion-woodcut.jpg';
import { Helmet } from 'react-helmet-async';

export default function NamePage() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; caption: string } | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  // Close lightbox on Escape key
  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox, closeLightbox]);

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
    'Van Vlaenderen', 'Van Vlaendereen',
    'Vanvlaenderen', 'Van Flanderen', 'Vanflanderen',
    'de Flandre', 'van Vlanderen', 'Van Vlaendren',
  ];

  const manuscripts = [
    { src: manuscriptNoblewoman, alt: t('name.manuscript_1_alt'), caption: t('name.manuscript_1_caption') },
    { src: knightPhilip, alt: t('name.manuscript_2_alt'), caption: t('name.manuscript_2_caption') },
    { src: lionWoodcut, alt: t('name.manuscript_3_alt'), caption: t('name.manuscript_3_caption') },
  ];

  return (
    <div className={styles.page}>
      <Helmet>
        <title>The Name — Where "Van Vlaenderen" Comes From | vanvlaenderen.org</title>
        <meta name="description" content="Investigating the origins of the Van Vlaenderen surname. Why distributional mapping and the Toponymic Paradox rule out a generic toponymic reading at the cluster level, and how the comital household and bloodline mechanisms explain what remains." />
        <link rel="canonical" href="https://vanvlaenderen.org/name" />
        <meta property="og:title" content="The Name — Where Van Vlaenderen Comes From" />
        <meta property="og:description" content="Investigating the origins of the Van Vlaenderen surname. Why distributional mapping and the Toponymic Paradox rule out a generic toponymic reading at the cluster level, and how the comital household and bloodline mechanisms explain what remains." />
        <meta property="og:url" content="https://vanvlaenderen.org/name" />
        <meta property="og:type" content="article" />
      </Helmet>

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
          <h2>
            {t('name.history_title')}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>
              {t('research.method_corroborated_label')}
            </span>
          </h2>
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

        {/* ── Four-Bucket Section ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {t('name.four_bucket_title')}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>
              {t('research.method_attested_label')}
            </span>
          </h2>
          <p>{t('name.four_bucket_intro')}</p>
          <p>{t('name.four_bucket_rebuttal')}</p>

          <div style={{ margin: '2rem 0' }}>
            <div style={{
              fontSize: '0.78rem',
              fontFamily: 'var(--font-ui)',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1rem',
            }}>
              {t('name.four_bucket_table_heading')}
            </div>

            {[
              { num: '1', label: t('name.four_bucket_b1_label'), desc: t('name.four_bucket_b1_desc'), muted: true },
              { num: '2', label: t('name.four_bucket_b2_label'), desc: t('name.four_bucket_b2_desc'), muted: true },
              { num: '3', label: t('name.four_bucket_b3_label'), desc: t('name.four_bucket_b3_desc'), muted: true },
              { num: '4', label: t('name.four_bucket_b4_label'), desc: t('name.four_bucket_b4_desc'), muted: false },
            ].map(({ num, label, desc, muted }) => (
              <div key={num} style={{
                display: 'grid',
                gridTemplateColumns: '2.5rem 1fr',
                gap: '0 1rem',
                padding: '1rem 1.25rem',
                marginBottom: '0.5rem',
                borderRadius: '4px',
                background: muted
                  ? 'rgba(255,255,255,0.02)'
                  : 'rgba(232,184,48,0.06)',
                border: muted
                  ? '1px solid rgba(255,255,255,0.06)'
                  : '1px solid rgba(232,184,48,0.25)',
                boxShadow: muted ? 'none' : '0 0 12px rgba(232,184,48,0.07)',
              }}>
                <div style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: muted ? 'var(--text-muted)' : 'var(--gold)',
                  lineHeight: 1,
                  paddingTop: '0.1rem',
                }}>
                  {num}
                </div>
                <div>
                  <div style={{
                    fontWeight: 600,
                    color: muted ? 'var(--text-muted)' : 'var(--text-primary)',
                    marginBottom: '0.3rem',
                    fontSize: '0.9rem',
                  }}>
                    {label}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                  }}>
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            {t('name.four_bucket_conclusion')}
          </p>

          {/* Teaser → Surname Origins article */}
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem 1.75rem',
            background: 'rgba(232,184,48,0.04)',
            border: '1px solid rgba(232,184,48,0.2)',
            borderRadius: '4px',
          }}>
            <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-ui)', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
              Research Article
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '0.6rem' }}>
              Four Functions, Three Clusters
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1rem', fontStyle: 'normal' }}>
              The name appears, at first glance, to explain itself. But when the earliest surname populations are mapped geographically across three centuries, they cluster in ways that pure toponymy cannot explain — concentrated inside Flanders itself, stable over two hundred years in specific villages. This analysis sets out what the documentary and distributional evidence actually shows.
            </p>
            <Link
              to="/name/surname-origins"
              style={{
                background: 'none',
                border: '1px solid rgba(232,184,48,0.35)',
                color: 'var(--gold)',
                padding: '0.5rem 1rem',
                borderRadius: '3px',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-ui)',
                letterSpacing: '0.06em',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Read the Analysis →
            </Link>
          </div>
        </section>

        {/* Historical surname-cluster timeline map (Geneanet-based, antique base) */}
        <section className={styles.section}>
          <h2>{t('clusterMap.section_heading')}</h2>
          <p>{t('clusterMap.section_intro')}</p>
          <TimelineClusterMap />
        </section>

        {/* Static Meetjesland Map */}
        <div className={nameStyles.mapContainer}>
          <img
            src={meetjeslandMap}
            alt={t('name.map_alt')}
            className={nameStyles.mapImage}
          />
          <div className={nameStyles.mapCaption}>
            {t('name.map_caption')}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '0.5rem', padding: '0 0.5rem' }}>
            {t('name.map_caption_bucket_note')}
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

        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '-0.5rem', marginBottom: '1.5rem', paddingLeft: '0.25rem' }}>
          {t('name.notable_forthcoming')}
        </p>

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

        {/* Manuscript illustrations row — clickable, opens lightbox */}
        <div className={nameStyles.manuscriptRow}>
          {manuscripts.map((m, i) => (
            <div
              key={i}
              className={nameStyles.manuscriptCard}
              role="button"
              tabIndex={0}
              aria-label={`${m.caption} — click to enlarge`}
              onClick={() => setLightbox(m)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightbox(m); } }}
            >
              <img src={m.src} alt={m.alt} />
              <div className={nameStyles.manuscriptCaption}>{m.caption}</div>
            </div>
          ))}
        </div>

        {/* ── Notes and Sources ──────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('name.notes_heading')}</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            {t('name.notes_intro')}
          </p>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
            <p>
              {t('name.notes_source_1_label')} {t('name.notes_source_1_text')}{' '}
              <Link
                to="/research"
                style={{ color: 'var(--gold)', textDecoration: 'underline', fontSize: 'inherit' }}
              >
                {t('name.notes_research_link')}
              </Link>
            </p>
            <p>
              {t('name.notes_source_2_label')} {t('name.notes_source_2_text')}{' '}
              <Link
                to="/name/surname-origins"
                style={{ color: 'var(--gold)', textDecoration: 'underline', fontSize: 'inherit' }}
              >
                {t('name.notes_analysis_link')}
              </Link>
            </p>
            <p>
              {t('name.notes_source_3_label')} {t('name.notes_source_3_text')}
            </p>
            <p>
              {t('name.notes_source_4_label')} {t('name.notes_source_4_text')}
            </p>
          </div>
        </section>

        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            {t('name.cta_text')}
          </div>
          <div className={styles.ctaNote}>
            {t('name.cta_note')}
          </div>
          <Link
            className={nameStyles.shareStoryBtn}
            to="/contact"
          >
            {t('name.cta_button')}
          </Link>
        </div>

      </div>

      {/* ── Lightbox overlay ──────────────────────────────────────── */}
      {lightbox && (
        <div
          className={nameStyles.lightboxOverlay}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className={nameStyles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className={nameStyles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />
          <div className={nameStyles.lightboxCaption}>{lightbox.caption}</div>
        </div>
      )}
    </div>
  );
}
