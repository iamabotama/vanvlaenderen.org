import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use repo name as base when deployed to GitHub Pages (iamabotama.github.io/vanvlaenderen.org/)
  // Switch back to '/' when custom domain (vanvlaenderen.org) is active
  base: '/vanvlaenderen.org/',
  server: {
    allowedHosts: true,
  },
})
