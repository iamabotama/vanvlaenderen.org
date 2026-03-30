import { useTranslation } from 'react-i18next';
import lionShield from '../assets/images/lion-shield.png';
import { LanguageToggle } from './LanguageToggle';
import styles from './Nav.module.css';

export type Tab = 'home' | 'mill' | 'name' | 'dna' | 'research' | 'lineage' | 'about' | 'contact';

interface NavProps {
  active: Tab;
  onNav: (tab: Tab) => void;
}

const tabIds: Tab[] = ['home', 'mill', 'name', 'research', 'dna', 'about', 'contact'];

export default function Nav({ active, onNav }: NavProps) {
  const { t } = useTranslation();
  return (
    <nav className={styles.nav}>
      <button className={styles.logo} onClick={() => onNav('home')} aria-label="Home">
        <img src={lionShield} alt="Lion of Flanders" className={styles.logoImg} />
        <span className={styles.logoText}>Van Vlaenderen</span>
      </button>
      <ul className={styles.tabs}>
        {tabIds.map(tabId => {
          const labelKey = tabId === 'dna' ? 'nav.dna' : 
                          tabId === 'research' ? 'nav.history' :
                          `nav.${tabId}`;
          return (
            <li key={tabId}>
              <button
                className={`${styles.tab} ${active === tabId ? styles.active : ''}`}
                onClick={() => onNav(tabId)}
              >
                {t(labelKey)}
              </button>
            </li>
          );
        })}
      </ul>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        <LanguageToggle />
      </div>
    </nav>
  );
}
