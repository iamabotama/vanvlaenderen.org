/* eslint-disable react-refresh/only-export-components -- SSR entry module; fast-refresh does not apply */
/**
 * entry-server.tsx
 *
 * SSR entry point used by scripts/prerender.mjs at build time.
 *
 * Exports:
 *   render(url)  — renders a route to an HTML string
 *   PAGE_META    — per-route SEO metadata (consumed by prerender for head injection)
 *
 * Note: react-helmet-async v3 is broken under React 19 for SSR — its HelmetProvider
 * silently disables itself when it detects React 19. Head tags are therefore injected
 * directly by the prerender script using PAGE_META, not via Helmet context.
 * Helmet still runs fine on the client for post-hydration updates.
 */

import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './i18n/locales/en.json'
import nl from './i18n/locales/nl.json'
import App from './App'

// Re-export PAGE_META so prerender.mjs can import it from the SSR bundle
export { PAGE_META } from './pageMeta'

// SSR-safe i18n — no LanguageDetector, no localStorage, no document refs
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        nl: { translation: nl },
      },
      lng: 'en',
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
    })
}

export function render(url: string): { html: string } {
  const html = renderToString(
    <StrictMode>
      <HelmetProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  )

  return { html }
}
