import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import lionShield from '../assets/images/lion-shield.png';
import { LanguageToggle } from './LanguageToggle';
import styles from './Nav.module.css';

// Keep Tab type exported — some legacy prop signatures still reference it
export type Tab = 'home' | 'mill' | 'name' | 'dna' | 'research' | 'lineage' | 'about' | 'contact';

interface NavProps {
  // active and onNav are now derived internally from the router,
  // but kept as optional props for backward compatibility with App.tsx
  active?: Tab | string;
  onNav?: (tab: Tab | string) => void;
}

const TAB_PATHS: { id: Tab; path: string }[] = [
  { id: 'home',     path: '/'        },
  { id: 'mill',     path: '/mill'    },
  { id: 'name',     path: '/name'    },
  { id: 'research', path: '/research'},
  { id: 'dna',      path: '/dna'     },
  { id: 'about',    path: '/about'   },
  { id: 'contact',  path: '/contact' },
];

export default function Nav(_props: NavProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Derive active tab from current path — no prop needed
  const activePath = location.pathname;
  const activeTab = TAB_PATHS.find(t =>
    t.path === '/' ? activePath === '/' : activePath.startsWith(t.path)
  )?.id ?? 'home';

  const handleNav = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={styles.nav}>
      <button
        className={styles.logo}
        onClick={() => handleNav('/')}
        aria-label="Van Vlaenderen — Home"
      >
        <img src={lionShield} alt="Lion of Flanders heraldic shield" className={styles.logoImg} />
        <span className={styles.logoText}>Van Vlaenderen</span>
      </button>

      <ul className={styles.tabs} role="menubar">
        {TAB_PATHS.map(({ id, path }) => {
          const labelKey = id === 'dna'      ? 'nav.dna' :
                           id === 'research'  ? 'nav.history' :
                           `nav.${id}`;
          return (
            <li key={id} role="none">
              <button
                role="menuitem"
                className={`${styles.tab} ${activeTab === id ? styles.active : ''}`}
                onClick={() => handleNav(path)}
                aria-current={activeTab === id ? 'page' : undefined}
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
