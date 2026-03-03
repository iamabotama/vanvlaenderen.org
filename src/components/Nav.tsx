import lionShield from '../assets/images/lion-shield.png';
import styles from './Nav.module.css';

type Tab = 'home' | 'mill' | 'name' | 'dna' | 'contact';

interface NavProps {
  active: Tab;
  onNav: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string }[] = [
  { id: 'home',    label: 'Home' },
  { id: 'mill',    label: 'The Mill' },
  { id: 'name',    label: 'The Name' },
  { id: 'dna',     label: 'Are We Connected?' },
  { id: 'contact', label: 'Get in Touch' },
];

export default function Nav({ active, onNav }: NavProps) {
  return (
    <nav className={styles.nav}>
      <button className={styles.logo} onClick={() => onNav('home')} aria-label="Home">
        <img src={lionShield} alt="Lion of Flanders" className={styles.logoImg} />
        <span className={styles.logoText}>Van Vlaenderen</span>
      </button>
      <ul className={styles.tabs}>
        {tabs.map(t => (
          <li key={t.id}>
            <button
              className={`${styles.tab} ${active === t.id ? styles.active : ''}`}
              onClick={() => onNav(t.id)}
            >
              {t.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
