import { useTranslation } from 'react-i18next';

/**
 * LanguageToggle
 *
 * Renders a simple NL | EN toggle. Place in the site header/nav.
 * Language choice is persisted to localStorage automatically by i18next-browser-languagedetector.
 *
 * Manus note: feel free to restyle to match the site's nav aesthetic.
 * The logic (i18n.changeLanguage) should stay as-is.
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
    <div
      aria-label={i18n.t('nav.language_toggle_label')}
      style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.875rem' }}
    >
      <button
        onClick={() => toggle('nl')}
        aria-pressed={current === 'nl'}
        style={{
          fontWeight: current === 'nl' ? 600 : 400,
          opacity: current === 'nl' ? 1 : 0.5,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '2px 4px',
        }}
      >
        NL
      </button>
      <span aria-hidden="true" style={{ opacity: 0.3 }}>|</span>
      <button
        onClick={() => toggle('en')}
        aria-pressed={current === 'en'}
        style={{
          fontWeight: current === 'en' ? 600 : 400,
          opacity: current === 'en' ? 1 : 0.5,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '2px 4px',
        }}
      >
        EN
      </button>
    </div>
  );
}
