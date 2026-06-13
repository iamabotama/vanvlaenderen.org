import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import lionShield from '../assets/images/lion-shield.png';
import { LanguageToggle } from './LanguageToggle';
import styles from './Nav.module.css';

// Keep Tab type exported — some legacy prop signatures still reference it
export type Tab = 'home' | 'mill' | 'name' | 'dna' | 'research' | 'sources' | 'lineage' | 'about' | 'contact';

// Tabs listed in display order. Order also matters for active-tab matching:
// the longest matching path wins, so /research/bibliography lights up
// `sources`, not `research`. See `activeTab` below.
const TAB_PATHS: { id: Tab; path: string }[] = [
  { id: 'home',     path: '/'                        },
  { id: 'mill',     path: '/mill'                    },
  { id: 'name',     path: '/name'                    },
  { id: 'research', path: '/research'                },
  { id: 'sources',  path: '/research/bibliography'   },
  { id: 'dna',      path: '/dna'                     },
  { id: 'about',    path: '/about'                   },
  { id: 'contact',  path: '/contact'                 },
];

export default function Nav() {
  const { t } = useTranslation();
  const location = useLocation();

  // Derive active tab from current path. Pick the TAB with the longest matching path,
  // so nested routes (e.g. /research/bibliography) resolve to the more specific tab.
  // NavLink's built-in matching doesn't express "longest match wins" directly, so we
  // keep the explicit logic here and feed the result into a plain <Link>'s className.
  const activePath = location.pathname;
  const activeTab = [...TAB_PATHS]
    .sort((a, b) => b.path.length - a.path.length)
    .find(t =>
      t.path === '/' ? activePath === '/' : activePath === t.path || activePath.startsWith(t.path + '/')
    )?.id ?? 'home';

  return (
    <nav className={styles.nav}>
      <Link
        to="/"
        className={styles.logo}
        aria-label="Van Vlaenderen — Home"
      >
        <img src={lionShield} alt="Lion of Flanders heraldic shield" className={styles.logoImg} />
        <span className={styles.logoText}>Van Vlaenderen</span>
      </Link>

      <ul className={styles.tabs} role="menubar">
        {TAB_PATHS.map(({ id, path }) => {
          const labelKey = id === 'dna'      ? 'nav.dna' :
                           id === 'research'  ? 'nav.history' :
                           `nav.${id}`;
          const isActive = activeTab === id;
          return (
            <li key={id} role="none">
              <Link
                to={path}
                role="menuitem"
                className={`${styles.tab} ${isActive ? styles.active : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {t(labelKey)}
              </Link>
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
