import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';

/**
 * Footer
 *
 * Site-wide footer rendered below <main>. Three columns on desktop,
 * stacked on mobile. The centre column deliberately foregrounds the
 * Sources & Bibliography page — the project leads with its evidence,
 * and the footer is one of the primary surfaces where a first-time
 * visitor encounters that signal.
 *
 * Build timestamp is injected by Vite at build time via the __BUILD_DATE__
 * define (see vite.config.ts); this keeps "last updated" automatically
 * current on every deploy rather than drifting stale in i18n strings.
 */

// Injected by Vite at build time (see vite.config.ts).
// Falls back to current date for dev server / test environments.
declare const __BUILD_DATE__: string;
const buildDate = typeof __BUILD_DATE__ !== 'undefined' ? __BUILD_DATE__ : new Date().toISOString().slice(0, 10);

// Format ISO date (YYYY-MM-DD) into "20 April 2026" style, localised to the active UI language.
function formatBuildDate(iso: string, locale: string): string {
  try {
    const d = new Date(iso + 'T00:00:00Z');
    if (Number.isNaN(d.getTime())) return iso;
    return new Intl.DateTimeFormat(locale === 'nl' ? 'nl-BE' : 'en-GB', {
      year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
    }).format(d);
  } catch {
    return iso;
  }
}

export default function Footer() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentLang = i18n.language?.startsWith('nl') ? 'nl' : 'en';
  const formattedDate = formatBuildDate(buildDate, currentLang);

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>

        {/* ── Left: utility nav ────────────────────────────────────── */}
        <nav aria-label={t('footer.nav_heading')}>
          <h2 className={styles.colHeading}>{t('footer.nav_heading')}</h2>
          <ul className={styles.navList}>
            <li><button className={styles.navLink} onClick={() => go('/')}>{t('nav.home')}</button></li>
            <li><button className={styles.navLink} onClick={() => go('/research')}>{t('nav.history')}</button></li>
            <li>
              <button
                className={`${styles.navLink} ${styles.navLinkEmphasised}`}
                onClick={() => go('/research/bibliography')}
              >
                {t('footer.bibliography_link_label')}
              </button>
            </li>
            <li><button className={styles.navLink} onClick={() => go('/dna')}>{t('nav.dna')}</button></li>
            <li><button className={styles.navLink} onClick={() => go('/about')}>{t('nav.about')}</button></li>
            <li><button className={styles.navLink} onClick={() => go('/contact')}>{t('nav.contact')}</button></li>
          </ul>
        </nav>

        {/* ── Centre: tagline + sources callout ───────────────────── */}
        <div className={styles.centre}>
          <h2 className={styles.colHeading}>{t('footer.project_heading')}</h2>
          <p className={styles.tagline}>{t('footer.tagline')}</p>
          <button
            className={styles.sourcesCallout}
            onClick={() => go('/research/bibliography')}
            aria-label={t('footer.sources_callout_aria')}
          >
            <span>{t('footer.sources_callout')}</span>
            <span className={styles.sourcesCalloutArrow} aria-hidden="true">→</span>
          </button>
        </div>

        {/* ── Right: attribution + timestamp ──────────────────────── */}
        <div className={styles.attribution}>
          <h2 className={styles.colHeading}>{t('footer.attribution_heading')}</h2>
          <p className={styles.attributionLine}>{t('footer.copyright')}</p>
          <p className={styles.attributionLine}>{t('footer.collaboration')}</p>
          <p className={styles.attributionLine}>
            <button
              className={styles.licenseLink}
              onClick={() => go('/license')}
              aria-label={t('footer.license_link_aria')}
            >
              {t('footer.license')}
            </button>
          </p>
          <p className={styles.attributionDim}>
            {t('footer.last_updated_prefix')} {formattedDate}
          </p>
        </div>

      </div>
    </footer>
  );
}
