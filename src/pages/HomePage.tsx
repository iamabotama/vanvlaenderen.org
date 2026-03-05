import lionShield from '../assets/images/lion-shield.png';
import heroBg from '../assets/images/hero-background.jpg';
import windmill from '../assets/images/places/van-vlaenderensmolen-vinderhoute-cc-by-sa-3.0.jpg';
import meetjeslandMap from '../assets/images/meetjesland-map.jpg';
import manuscriptNoblewoman from '../assets/images/manuscript-noblewoman.jpg';
import cronike from '../assets/images/heraldic/cronike-van-vlaenderen-shields-double-page.jpg';
import styles from './HomePage.module.css';

type Tab = 'home' | 'mill' | 'name' | 'dna' | 'contact';

interface HomePageProps {
  onNav: (tab: Tab) => void;
}

const villages = [
  'Ursel', 'Bassevelde', 'Boekhoute', 'Evergem', 'Merendree',
  'Lovendegem', 'Vinderhoute', 'Wessegem', 'Kaprijke', 'Adegem',
  'Eeklo', 'Ghent',
];

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
    img: manuscriptNoblewoman,
    quote: 'Where did the name begin — and how many families share a single root?',
  },
  {
    id: 'dna' as Tab,
    title: 'Are We Connected?',
    subtitle: 'The DNA project',
    img: cronike,
    quote: 'Y-DNA and autosomal testing are being used to test whether all Van Vlaenderen lines share a common ancestor.',
  },
  {
    id: 'contact' as Tab,
    title: 'Join the Research',
    subtitle: 'Your story matters',
    img: meetjeslandMap,
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
            A genealogical research project · Meetjesland · Ghent · East Flanders
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
            A surname. A region. An open question.
          </div>

          <div className={styles.mysteryBody}>
            <p>
              This site is a genealogical research project dedicated to the surname{' '}
              <strong>Van Vlaenderen</strong> — a name borne by families who lived for
              centuries in the villages of the Meetjesland in East Flanders: Ursel,
              Bassevelde, Boekhoute, Kaprijke, Evergem, and their neighbours.
            </p>

            <p className={styles.visitorNote}>
              <em>
                If you arrived here looking for information about the Flanders region
                itself, you are warmly welcome — and we hope the history woven through
                this research is of interest to you. This project is about one family
                name, not the region as a whole.
              </em>
            </p>

            <div className={styles.dividerLine} />

            <p>
              The conventional reading of the surname is <strong>toponymic</strong>:{' '}
              <em>Van Vlaenderen</em> simply means "from Flanders," a label that could
              have attached to any family that migrated from the broader region into a
              more local community. Many Flemish surnames share this pattern, and for
              most bearers of the name, this explanation may well be the complete story.
            </p>

            <p className={styles.emergingTheory}>
              But the documentary record raises two questions that a purely toponymic
              explanation does not easily answer — and this project exists to investigate them.
            </p>

            <div className={styles.hypothesisBlock}>
              <div className={styles.hypothesisLabel}>Working hypothesis one</div>
              <div className={styles.hypothesisTitle}>A small number of founding families</div>
              <p>
                When the earliest traceable Van Vlaenderen lines across the Meetjesland
                parishes are mapped together, the name does not appear to scatter randomly
                across the region. Early research suggests the possibility that all
                documented Van Vlaenderen lines descend from no more than two or three
                founding families — perhaps even a single common ancestor — rather than
                from independent families who happened to share a descriptive label. This
                hypothesis is being tested through parish record analysis and genetic
                genealogy. It remains unproven, and the evidence gathered so far is
                suggestive rather than conclusive.
              </p>
            </div>

            <div className={styles.hypothesisBlock}>
              <div className={styles.hypothesisLabel}>Working hypothesis two</div>
              <div className={styles.hypothesisTitle}>A title that became a surname</div>
              <p>
                Historical records document a figure named <strong>Victor van Vlaanderen</strong>,
                an acknowledged natural son of Louis II, Count of Flanders, who held the
                lordship of Wessegem in the parish of Ursel — the very heart of the region
                where the Van Vlaenderen surname later appears in parish registers. Victor
                died before 1442, leaving three acknowledged sons: Lodewyc, Janne, and
                Adam van Vlaendren. Local records place Adam in the Maldegem and Ursel
                area in the mid-fifteenth century.
              </p>
              <p>
                The working hypothesis — and it is no more than that at this stage — is
                that as the era of the Counts of Flanders ended, descendants of this
                comital line may have carried the name <em>van Vlaenderen</em> forward
                not as a description of geographic origin, but as a form of inherited
                identity. If so, the surname may have seeded one or more of the family
                lines that later appear in the Meetjesland parish registers. This
                connection is plausible and supported by circumstantial evidence, but it
                has not been proven. The archival work required to confirm or refute it
                is ongoing.
              </p>
            </div>

            <div className={styles.pullQuote}>
              <span className={styles.pullQuoteMark}>"</span>
              One name. One region. The question is whether it was ever truly one family.
              <span className={styles.pullQuoteMark}>"</span>
            </div>

            <p className={styles.callToAction}>
              This project is collaborative by design. If you carry the name{' '}
              <strong>Van Vlaenderen</strong> — in any historical spelling — or if you
              descend from a Van Vlaenderen woman whose line continued under a different
              name, your family records and DNA results may hold a piece of the answer.
              We invite you to explore what has been gathered here, compare it against
              your own research, and get in touch.
            </p>

            <p className={styles.researchNote}>
              No claim is made here that any living person descends from the Counts of
              Flanders. We are researchers, not storytellers. The evidence will go where
              it goes.
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

      {/* ── Heraldic Divider ─────────────────────────────────────── */}
      <div className={styles.heraldicDivider}>
        <span className={styles.heraldicLine} />
        <span className={styles.heraldicSymbol}>✦</span>
        <span className={styles.heraldicLine} />
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
              <div className={styles.cardImg}>
                <img src={card.img} alt={card.title} />
                <div className={styles.cardImgOverlay} />
              </div>
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
        <span>An independent genealogical research project</span>
        <span className={styles.footerDivider}>·</span>
        <span>No publication without permission</span>
      </div>

    </div>
  );
}
