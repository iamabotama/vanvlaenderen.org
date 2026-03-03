import lionShield from '../assets/images/lion-shield.png';
import heroBg from '../assets/images/hero-background.jpg';
import windmill from '../assets/images/places/van-vlaenderensmolen-vinderhoute-cc-by-sa-3.0.jpg';
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
    quote: '"Heaven gives; whoever catches has it."',
  },
  {
    id: 'name' as Tab,
    title: 'The Name',
    subtitle: 'Where it appears',
    img: null,
    quote: 'Bassevelde · Ursel · Evergem · Merendree',
  },
  {
    id: 'dna' as Tab,
    title: 'Are We Connected?',
    subtitle: 'An open question',
    img: null,
    quote: 'Multiple branches. One possible origin.',
  },
  {
    id: 'contact' as Tab,
    title: 'Get in Touch',
    subtitle: 'Your story matters',
    img: null,
    quote: 'No obligation. No pressure. Just curiosity.',
  },
];

export default function HomePage({ onNav }: HomePageProps) {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <img src={lionShield} alt="Lion of Flanders" className={styles.shield} />
          <h1 className={styles.title}>Van Vlaenderen</h1>
          <div className={styles.subtitle}>
            A Family of East Flanders · Est. Meetjesland
          </div>
          <div className="gold-rule" />
          <p className={styles.intro}>
            VanVlaenderen.org documents the Van Vlaenderen family of East Flanders,
            with roots in the Meetjesland — the historic region between Ghent and Bruges.
            If you carry the name, or are researching it, this site is for you.
          </p>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className={styles.cardsSection}>
        <h2 className={styles.cardsHeading}>Explore the Archive</h2>
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

      {/* Footer strip */}
      <div className={styles.footerStrip}>
        <span>© 2025 VanVlaenderen.org</span>
        <span className={styles.footerDivider}>·</span>
        <span>East Flanders, Belgium</span>
        <span className={styles.footerDivider}>·</span>
        <span>No publication without permission</span>
      </div>
    </div>
  );
}
