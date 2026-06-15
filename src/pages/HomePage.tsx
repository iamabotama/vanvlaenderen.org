import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import lionShield from '../assets/images/lion-shield.png';
import heroBg from '../assets/images/hero-background.jpg';
import windmill from '../assets/images/places/van-vlaenderensmolen-vinderhoute-cc-by-sa-3.0.jpg';
// import meetjeslandMap from '../assets/images/meetjesland-map.jpg';
import manuscriptNoblewoman from '../assets/images/manuscript-noblewoman.jpg';
import cronike from '../assets/images/heraldic/cronike-van-vlaenderen-shields-double-page.jpg';
import styles from './HomePage.module.css';
import { Helmet } from 'react-helmet-async';

// Comital cities + all three surviving clusters + the Meetjesland lineage villages,
// so bearers from Bruges/Ypres/French Flanders/Brabant see themselves here too.
const villages = [
  'Bruges', 'Ypres', 'Ghent', 'Kortrijk', 'Brussels',
  'Cassel', 'Volckerinckhove', 'Wambeek', 'Aalter', 'Eeklo',
  'Waarschoot', 'Sleidinge', 'Oostwinkel', 'Bassevelde', 'Ursel', 'Evergem',
];

// Cards are listed in display order. The `path` is the route Link targets;
// keys correspond to the i18n labels for each card.
const CARDS: { id: string; path: string; titleKey: string; subtitleKey: string; quoteKey: string; img: string }[] = [
  {
    id: 'mill',
    path: '/mill',
    titleKey: 'home.card_mill_title',
    subtitleKey: 'home.card_mill_subtitle',
    quoteKey: 'home.card_mill_quote',
    img: windmill,
  },
  {
    id: 'name',
    path: '/name',
    titleKey: 'home.card_name_title',
    subtitleKey: 'home.card_name_subtitle',
    quoteKey: 'home.card_name_quote',
    img: manuscriptNoblewoman,
  },
  {
    id: 'research',
    path: '/research',
    titleKey: 'home.card_research_title',
    subtitleKey: 'home.card_research_subtitle',
    quoteKey: 'home.card_research_quote',
    img: manuscriptNoblewoman,
  },
  {
    id: 'dna',
    path: '/dna',
    titleKey: 'home.card_dna_title',
    subtitleKey: 'home.card_dna_subtitle',
    quoteKey: 'home.card_dna_quote',
    img: cronike,
  },
];

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Van Vlaenderen — Flemish Heritage &amp; Family History Research</title>
        <meta name="description" content="Genealogical research tracing the Van Vlaenderen surname to the comital network of fourteenth-century Flanders, and testing whether its origin lies in the comital household, the comital bloodline, or a mix of both. Fourteen generations documented from the Meetjesland to America." />
        <link rel="canonical" href="https://vanvlaenderen.org/" />
        <meta property="og:title" content="Van Vlaenderen — Flemish Heritage Research" />
        <meta property="og:description" content="Genealogical research tracing the Van Vlaenderen surname to the comital network of fourteenth-century Flanders, and testing whether its origin lies in the comital household, the comital bloodline, or a mix of both. Fourteen generations documented from the Meetjesland to America." />
        <meta property="og:url" content="https://vanvlaenderen.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vanvlaenderen.org/assets/hero-background-rVYnRAiM.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <img src={lionShield} alt="Lion of Flanders" className={styles.shield} />
          <h1 className={styles.title}>Van Vlaenderen</h1>
          <div className={styles.subtitle}>
            <div className={styles.heroSubtitleNarrative}>{t('home.hero_subtitle_narrative')}</div>
            <div className={styles.heroSpine}>{t('home.hero_spine')}</div>
          </div>
          <div className={styles.heroScrollHint}>↓</div>
        </div>
      </div>

      {/* ── Village Scroll Strip ──────────────────────────────────── */}
      <div className={styles.villageStrip}>
        <div className={styles.villageScroll}>
          {[...villages, ...villages].map((v, i) => (
            <span key={i} className={styles.villageItem}>
              {v}
              <span className={styles.villageDot}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Mystery Hook ─────────────────────────────────────────── */}
      <div className={styles.mysterySection}>
        <div className={styles.mysteryInner}>
          <div className={styles.mysteryQuestion}>
            {t('home.mystery_question')}
          </div>

          <div className={styles.mysteryBody}>
            <p>
              {t('home.mystery_intro_p1')} <strong>Van Vlaenderen</strong> {t('home.mystery_intro_p1_cont')}
            </p>

            <p className={styles.visitorNote}>
              <em>
                {t('home.mystery_visitor_note')}
              </em>
            </p>

            <div className={styles.dividerLine} />

            <p>
              {t('home.mystery_toponymic_p1')} <strong>toponymic</strong>: <em>Van Vlaenderen</em> {t('home.mystery_toponymic_p1_cont')}
            </p>

            <p className={styles.emergingTheory}>
              {t('home.mystery_emerging')}
            </p>

            <div className={styles.hypothesisBlock}>
              <div className={styles.hypothesisLabel}>{t('home.hypothesis_one_label')}</div>
              <div className={styles.hypothesisTitle}>{t('home.hypothesis_one_title')}</div>
              <p>
                {t('home.hypothesis_one_body')}
              </p>
            </div>

            <div className={styles.hypothesisBlock}>
              <div className={styles.hypothesisLabel}>{t('home.hypothesis_two_label')}</div>
              <div className={styles.hypothesisTitle}>{t('home.hypothesis_two_title')}</div>
              <p>
                {t('home.hypothesis_two_body')}
              </p>
            </div>

            <p className={styles.hypothesesBridge}>
              <em>{t('home.hypotheses_bridge')}</em>
            </p>

            <div className={styles.hypothesesCta}>
              <Link className={styles.primaryBtn} to="/research">
                {t('home.cta_research')} →
              </Link>
            </div>

            <div className={styles.pullQuote}>
              <span className={styles.pullQuoteMark}>"</span>
              {t('home.pull_quote')}
              <span className={styles.pullQuoteMark}>"</span>
            </div>

            <p className={styles.callToAction}>
              {t('home.cta_collaborative_p1')} <strong>Van Vlaenderen</strong> {t('home.cta_collaborative_p1_cont')}
            </p>

            <p className={styles.researchNote}>
              {t('home.research_note')}
            </p>
          </div>

          <div className={styles.mysteryActions}>
            <Link className={styles.primaryBtn} to="/name">
              {t('home.cta_explore')}
            </Link>
            <Link className={styles.secondaryBtn} to="/contact">
              {t('home.cta_contribute')}
            </Link>
          </div>
        </div>
      </div>

      {/* ── Heraldic Divider ─────────────────────────────────────── */}
      <div className={styles.heraldicDivider}>
        <span className={styles.heraldicLine} />
        <span className={styles.heraldicSymbol}>✦</span>
        <span className={styles.heraldicLine} />
      </div>

      {/* ── Navigation Cards ─────────────────────────────────────── */}
      <div className={styles.cardsSection}>
        <div className={styles.cardsHeading}>{t('home.explore_archive')}</div>
        <div className={styles.cards}>
          {CARDS.map(card => (
            <Link
              key={card.id}
              className={styles.card}
              to={card.path}
            >
              <div className={styles.cardImg}>
                <img src={card.img} alt={t(card.titleKey)} />
                <div className={styles.cardImgOverlay} />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTitle}>{t(card.titleKey)}</div>
                <div className={styles.cardSub}>{t(card.subtitleKey)}</div>
                <div className={styles.cardQuote}>{t(card.quoteKey)}</div>
                <div className={styles.cardArrow}>→</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Footer Strip ─────────────────────────────────────────── */}
      <div className={styles.footerStrip}>
        <span>© 2026 VanVlaenderen.org</span>
        <span className={styles.footerDivider}>·</span>
        <span>East Flanders, Belgium</span>
        <span className={styles.footerDivider}>·</span>
        <span>{t('home.footer_project')}</span>
        <span className={styles.footerDivider}>·</span>
        <span>{t('home.footer_permission')}</span>
      </div>

    </div>
  );
}
