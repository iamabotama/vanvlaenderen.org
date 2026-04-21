import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build-time constant: the ISO date (YYYY-MM-DD, UTC) on which this bundle was built.
// Surfaced in the site Footer as "last updated". Injected via Vite's `define` so
// we never need to hand-maintain a timestamp in i18n or source files.
const BUILD_DATE = new Date().toISOString().slice(0, 10);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __BUILD_DATE__: JSON.stringify(BUILD_DATE),
  },
  base: '/',
  server: {
    allowedHosts: true,
  },
  build: {
    outDir: 'dist',
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
})
