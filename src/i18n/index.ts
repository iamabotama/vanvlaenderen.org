import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import nl from './locales/nl.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      nl: { translation: nl },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'nl'],
    interpolation: {
      escapeValue: false, // React already escapes
    },
    detection: {
      // Check localStorage first (returning visitor's saved choice),
      // then fall back to browser language setting
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'vanvlaenderen_lang',
    },
  });

// Set HTML lang attribute on init (browser only)
i18n.on('initialized', () => {
  if (typeof document !== 'undefined') document.documentElement.lang = i18n.language;
});

// Update HTML lang attribute when language changes (browser only)
i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') document.documentElement.lang = lng;
});

export default i18n;
