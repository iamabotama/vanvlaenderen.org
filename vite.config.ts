import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
