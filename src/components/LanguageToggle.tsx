import { useTranslation } from 'react-i18next';
import styles from './LanguageToggle.module.css';

/**
 * LanguageToggle
 *
 * Compact pill-style language toggle with NL and EN side by side.
 * Active language has solid background; inactive is transparent with muted text.
 * Language choice is persisted to localStorage automatically by i18next-browser-languagedetector.
 */
export function LanguageToggle() {
  const { i18n } = useTranslation();

  // Normalise any regional variant (e.g. 'nl-BE') to the base code
  const current = i18n.language?.startsWith('nl') ? 'nl' : 'en';

  const toggle = (lang: 'nl' | 'en') => {
    i18n.changeLanguage(lang);
    // Also update the <html lang=""> attribute for accessibility + SEO
    document.documentElement.lang = lang;
  };

  return (
    <div className={styles.container} aria-label={i18n.t('nav.language_toggle_label')}>
      <button
        className={`${styles.button} ${current === 'nl' ? styles.active : ''}`}
        onClick={() => toggle('nl')}
        aria-pressed={current === 'nl'}
        aria-label="Switch to Dutch"
      >
        NL
      </button>
      <button
        className={`${styles.button} ${current === 'en' ? styles.active : ''}`}
        onClick={() => toggle('en')}
        aria-pressed={current === 'en'}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
