/**
 * prerender.mjs
 *
 * Runs after `vite build` + `vite build --ssr`. For each route:
 *
 *   1. Renders the React app to HTML via StaticRouter (real content for crawlers)
 *   2. Injects per-page <title>, <meta>, <link> tags from PAGE_META registry
 *   3. Writes dist/<route>/index.html
 *
 * Head tag injection uses the PAGE_META registry directly (plain TS objects
 * compiled into the SSR bundle) — no dependency on react-helmet-async's SSR
 * path, which is broken under React 19.
 *
 * Also writes sitemap.xml and robots.txt.
 */

import fs   from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname   = path.dirname(fileURLToPath(import.meta.url))
const distDir     = path.resolve(__dirname, '../dist')
const serverEntry = path.join(distDir, 'server', 'entry-server.js')
const templatePath = path.join(distDir, 'index.html')

const ROUTES = [
  '/',
  '/mill',
  '/name',
  '/dna',
  '/research',
  '/research/victor',
  '/research/louis-friese',
  '/research/victor-dossier',
  '/research/praet-dossier',
  '/research/praet-lineage-dossier',
  '/lineage',
  '/about',
  '/contact',
  '/research/bibliography',
  '/research/methodology',
  '/research/gap-dossier',
]

// ── Head tag builder ───────────────────────────────────────────────────────

function buildHeadTags(meta) {
  if (!meta) return ''

  const esc = (s) => (s ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;')
  const lines = []

  // Title — replace template default, don't append
  // (handled separately in injectIntoTemplate)

  // Description
  if (meta.description) {
    lines.push(`<meta name="description" content="${esc(meta.description)}" />`)
  }

  // Canonical
  if (meta.canonical) {
    lines.push(`<link rel="canonical" href="${esc(meta.canonical)}" />`)
  }

  // Open Graph
  if (meta.ogTitle) {
    lines.push(`<meta property="og:title" content="${esc(meta.ogTitle)}" />`)
  }
  if (meta.ogDescription) {
    lines.push(`<meta property="og:description" content="${esc(meta.ogDescription)}" />`)
  }
  if (meta.canonical) {
    lines.push(`<meta property="og:url" content="${esc(meta.canonical)}" />`)
  }
  if (meta.ogType) {
    lines.push(`<meta property="og:type" content="${esc(meta.ogType)}" />`)
  }
  if (meta.ogImage) {
    lines.push(`<meta property="og:image" content="${esc(meta.ogImage)}" />`)
  }

  return lines.join('\n    ')
}

// ── Template injection ─────────────────────────────────────────────────────

function injectIntoTemplate(template, appHtml, meta) {
  let html = template

  // 1. Replace app shell with rendered content
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  if (!meta) return html

  const esc = (s) => (s ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;')

  // 2. Replace default title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${esc(meta.title)}</title>`
  )

  // 3. Strip template-level defaults that get per-page replacements
  //    (canonical, description, og:title, og:description, og:url, og:type)
  html = html
    .replace(/\n\s*<link rel="canonical"[^>]*>/g, '')
    .replace(/\n\s*<meta name="description"[^>]*>/g, '')
    .replace(/\n\s*<meta property="og:title"[^>]*>/g, '')
    .replace(/\n\s*<meta property="og:description"[^>]*>/g, '')
    .replace(/\n\s*<meta property="og:url"[^>]*>/g, '')
    .replace(/\n\s*<meta property="og:type"[^>]*>/g, '')

  // 4. Inject per-page tags before </head>
  const perPageTags = buildHeadTags(meta)
  if (perPageTags) {
    html = html.replace(
      '  </head>',
      `    <!-- Per-page meta -->\n    ${perPageTags}\n  </head>`
    )
  }

  return html
}

// ── Main ───────────────────────────────────────────────────────────────────

async function prerender() {
  console.log('🏗  Starting prerender...\n')

  if (!fs.existsSync(serverEntry)) {
    console.error('❌  SSR bundle not found:', serverEntry)
    process.exit(1)
  }

  const { render, PAGE_META } = await import(serverEntry)

  if (!PAGE_META) {
    console.error('❌  PAGE_META not exported from entry-server. Check src/entry-server.tsx.')
    process.exit(1)
  }

  // Read the Vite-built template and ensure #root is empty before use.
  // If a previous prerender run wrote homepage content into dist/index.html,
  // injectIntoTemplate would fail to find '<div id="root"></div>' and silently
  // return the homepage HTML for every route. Stripping it here is the fix.
  const rawTemplate = fs.readFileSync(templatePath, 'utf-8')
  const template = rawTemplate.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    '<div id="root"></div>'
  )
  let ok = 0

  for (const route of ROUTES) {
    try {
      const { html: appHtml } = render(route)
      const meta = PAGE_META[route]
      const pageHtml = injectIntoTemplate(template, appHtml, meta)

      const outDir  = route === '/' ? distDir : path.join(distDir, route.slice(1))
      fs.mkdirSync(outDir, { recursive: true })
      const outPath = path.join(outDir, 'index.html')
      fs.writeFileSync(outPath, pageHtml)

      console.log(`  ✓  ${route.padEnd(38)} →  ${path.relative(distDir, outPath)}`)
      ok++
    } catch (err) {
      console.error(`  ✗  ${route.padEnd(38)} →  ERROR: ${err.message}`)
      if (process.env.DEBUG) console.error(err.stack)
    }
  }

  console.log(`\n✅  Prerendered ${ok}/${ROUTES.length} routes.`)
  writeSitemap(PAGE_META)
  writeRobots()
}

// ── Sitemap ────────────────────────────────────────────────────────────────

function writeSitemap(PAGE_META) {
  const today = new Date().toISOString().slice(0, 10)

  const routeMeta = {
    '/':                               { priority: '1.0', changefreq: 'monthly' },
    '/mill':                           { priority: '0.8', changefreq: 'monthly' },
    '/name':                           { priority: '0.8', changefreq: 'monthly' },
    '/dna':                            { priority: '0.8', changefreq: 'monthly' },
    '/research':                       { priority: '0.9', changefreq: 'weekly'  },
    '/research/victor':                { priority: '0.9', changefreq: 'weekly'  },
    '/research/louis-friese':          { priority: '0.8', changefreq: 'monthly' },
    '/research/victor-dossier':        { priority: '0.9', changefreq: 'weekly'  },
    '/research/praet-dossier':         { priority: '0.8', changefreq: 'monthly' },
    '/research/praet-lineage-dossier': { priority: '0.7', changefreq: 'monthly' },
    '/lineage':                        { priority: '0.8', changefreq: 'monthly' },
    '/about':                          { priority: '0.6', changefreq: 'yearly'  },
    '/contact':                        { priority: '0.5', changefreq: 'yearly'  },
    '/research/bibliography':          { priority: '0.9', changefreq: 'weekly'  },
    '/research/methodology':           { priority: '0.8', changefreq: 'monthly' },
  }

  const urls = ROUTES.filter(route => route !== '/docs').map(route => {
    const sm  = routeMeta[route] ?? { priority: '0.7', changefreq: 'monthly' }
    const loc = PAGE_META[route]?.canonical
              ?? `https://vanvlaenderen.org${route === '/' ? '' : route}`
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${sm.changefreq}</changefreq>
    <priority>${sm.priority}</priority>
  </url>`
  }).join('\n')

  fs.writeFileSync(
    path.join(distDir, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`
  )
  console.log('\n📍  sitemap.xml written')
}

// ── robots.txt ─────────────────────────────────────────────────────────────

function writeRobots() {
  fs.writeFileSync(path.join(distDir, 'robots.txt'), `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /research/

User-agent: Claude-Web
Allow: /research/

User-agent: Googlebot
Allow: /

Sitemap: https://vanvlaenderen.org/sitemap.xml
`)
  console.log('🤖  robots.txt written')
}

prerender().catch(err => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
