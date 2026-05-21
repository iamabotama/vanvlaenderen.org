import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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

  const currentLang = i18n.language?.startsWith('nl') ? 'nl' : 'en';
  const formattedDate = formatBuildDate(buildDate, currentLang);

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>

        {/* ── Left: utility nav ────────────────────────────────────── */}
        <nav aria-label={t('footer.nav_heading')}>
          <h2 className={styles.colHeading}>{t('footer.nav_heading')}</h2>
          <ul className={styles.navList}>
            <li><Link className={styles.navLink} to="/">{t('nav.home')}</Link></li>
            <li><Link className={styles.navLink} to="/research">{t('nav.history')}</Link></li>
            <li>
              <Link
                className={`${styles.navLink} ${styles.navLinkEmphasised}`}
                to="/research/bibliography"
              >
                {t('footer.bibliography_link_label')}
              </Link>
            </li>
            <li><Link className={styles.navLink} to="/dna">{t('nav.dna')}</Link></li>
            <li><Link className={styles.navLink} to="/about">{t('nav.about')}</Link></li>
            <li><Link className={styles.navLink} to="/contact">{t('nav.contact')}</Link></li>
          </ul>
        </nav>

        {/* ── Centre: tagline + sources callout ───────────────────── */}
        <div className={styles.centre}>
          <h2 className={styles.colHeading}>{t('footer.project_heading')}</h2>
          <p className={styles.tagline}>{t('footer.tagline')}</p>
          <Link
            className={styles.sourcesCallout}
            to="/research/bibliography"
            aria-label={t('footer.sources_callout_aria')}
          >
            <span>{t('footer.sources_callout')}</span>
            <span className={styles.sourcesCalloutArrow} aria-hidden="true">→</span>
          </Link>
        </div>

        {/* ── Right: attribution + timestamp ──────────────────────── */}
        <div className={styles.attribution}>
          <h2 className={styles.colHeading}>{t('footer.attribution_heading')}</h2>
          <p className={styles.attributionLine}>{t('footer.copyright')}</p>
          <p className={styles.attributionLine}>{t('footer.collaboration')}</p>
          <p className={styles.attributionLine}>
            <Link
              className={styles.licenseLink}
              to="/license"
              aria-label={t('footer.license_link_aria')}
            >
              {t('footer.license')}
            </Link>
          </p>
          <p className={styles.attributionDim}>
            {t('footer.last_updated_prefix')} {formattedDate}
          </p>
        </div>

      </div>
    </footer>
  );
}
