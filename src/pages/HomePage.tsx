import lionShield from '../assets/images/lion-shield.png';
import heroBg from '../assets/images/hero-background.jpg';
import windmill from '../assets/images/places/van-vlaenderensmolen-vinderhoute-cc-by-sa-3.0.jpg';
import brugesAlley from '../assets/images/bruges-alley.jpg';
import styles from './HomePage.module.css';

type Tab = 'home' | 'mill' | 'name' | 'dna' | 'contact';

interface HomePageProps {
  onNav: (tab: Tab) => void;
}

const cards = [
  {
    id: 'mill' as Tab,
    title: 'The Mill',
    subtitle: 'A family\'s livelihood',
    img: windmill,
    quote: 'The miller families of Meetjesland — their lives, their land, their legacy.',
  },
  {
    id: 'name' as Tab,
    title: 'The Name',
    subtitle: 'Origins & variants',
    img: brugesAlley,
    quote: 'Bassevelde · Ursel · Evergem · Boekhoute · Merendree',
  },
  {
    id: 'dna' as Tab,
    title: 'Are We Connected?',
    subtitle: 'The DNA project',
    img: null,
    quote: 'Multiple branches. One possible origin. Science may hold the answer.',
  },
  {
    id: 'contact' as Tab,
    title: 'Join the Research',
    subtitle: 'Your story matters',
    img: null,
    quote: 'If you carry the name, you may hold part of the answer.',
  },
];

export default function HomePage({ onNav }: HomePageProps) {
  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <img src={lionShield} alt="Lion of Flanders" className={styles.shield} />
          <h1 className={styles.title}>Van Vlaenderen</h1>
          <div className={styles.subtitle}>
            East Flanders · Meetjesland · Est. 14th Century
          </div>
        </div>
      </div>

      {/* ── Mystery Hook ─────────────────────────────────────────── */}
      <div className={styles.mysterySection}>
        <div className={styles.mysteryInner}>
          <div className={styles.mysteryQuestion}>
            What if <em>Van Vlaenderen</em> was never just "from Flanders"?
          </div>

          <div className={styles.mysteryBody}>
            <p>
              For centuries, families bearing this name lived in the villages of
              Ursel, Wessegem, Bassevelde, and Boekhoute — in the heart of the
              Meetjesland of East Flanders. Traditional scholarship interprets the
              surname as <strong>toponymic</strong>: meaning simply "from Flanders."
            </p>

            <div className={styles.dividerLine} />

            <p className={styles.emergingTheory}>
              But emerging research suggests another possibility.
            </p>

            <p>
              The name may have originated as a <strong>converted title</strong> at
              the close of the reign of Louis II, Count of Flanders — possibly granted
              to an illegitimate son, and carried forward as hereditary identity when
              the era of counts ended.
            </p>

            <div className={styles.pullQuote}>
              <span className={styles.pullQuoteMark}>"</span>
              How does a title become a surname?
              <span className={styles.pullQuoteMark}>"</span>
            </div>

            <p>
              This site gathers the historical record, the documented family lines,
              the miller families, the migrations — and holds open that question.
            </p>

            <p className={styles.callToAction}>
              If you carry the name <strong>Van Vlaenderen</strong>, you may hold
              part of the answer. We invite you to explore, compare records,
              contribute family history, and join the ongoing genealogical project
              to better understand the origin of our shared name.
            </p>
          </div>

          <div className={styles.mysteryActions}>
            <button className={styles.primaryBtn} onClick={() => onNav('name')}>
              Explore the Origins
            </button>
            <button className={styles.secondaryBtn} onClick={() => onNav('contact')}>
              Contribute Your Research
            </button>
          </div>
        </div>
      </div>

      {/* ── Navigation Cards ─────────────────────────────────────── */}
      <div className={styles.cardsSection}>
        <div className={styles.cardsHeading}>Explore the Archive</div>
        <div className={styles.cards}>
          {cards.map(card => (
            <button
              key={card.id}
              className={styles.card}
              onClick={() => onNav(card.id)}
            >
              {card.img && (
                <div className={styles.cardImg}>
                  <img src={card.img} alt={card.title} />
                  <div className={styles.cardImgOverlay} />
                </div>
              )}
              {!card.img && <div className={styles.cardImgPlaceholder} />}
              <div className={styles.cardBody}>
                <div className={styles.cardTitle}>{card.title}</div>
                <div className={styles.cardSub}>{card.subtitle}</div>
                <div className={styles.cardQuote}>{card.quote}</div>
                <div className={styles.cardArrow}>→</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Footer Strip ─────────────────────────────────────────── */}
      <div className={styles.footerStrip}>
        <span>© 2026 VanVlaenderen.org</span>
        <span className={styles.footerDivider}>·</span>
        <span>East Flanders, Belgium</span>
        <span className={styles.footerDivider}>·</span>
        <span>No publication without permission</span>
      </div>

    </div>
  );
}
