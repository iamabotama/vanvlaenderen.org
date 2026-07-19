# vanvlaenderen.org

**Live website for [vanvlaenderen.org](https://vanvlaenderen.org)**

This repository contains the source code for the vanvlaenderen.org website, built with [Vite](https://vitejs.dev/) and [React](https://react.dev/), and deployed via [GitHub Pages](https://pages.github.com/).

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Vite 7](https://vitejs.dev/) | Build tool and dev server |
| [React 19](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [GitHub Pages](https://pages.github.com/) | Static site hosting |
| [GitHub Actions](https://github.com/features/actions) | CI/CD deployment pipeline |

## Related Repositories

| Repository | Purpose |
|---|---|
| [`iamabotama/vanvlaenderen.org`](https://github.com/iamabotama/vanvlaenderen.org) | This repo — live website source |
| [`iamabotama/vanvlaenderen_code`](https://github.com/iamabotama/vanvlaenderen_code) | Tooling, scripts, and dev resources |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [pnpm](https://pnpm.io/) v9 or later

### Local Development

```bash
git clone https://github.com/iamabotama/vanvlaenderen.org.git
cd vanvlaenderen.org
pnpm install
pnpm dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Deployment

Deployment is handled automatically via GitHub Actions. Every push to the `main` branch triggers a build and deploys the output to GitHub Pages.

- **GitHub Pages URL:** `https://iamabotama.github.io/vanvlaenderen.org/`
- **Custom Domain:** `https://vanvlaenderen.org`

## DNS Configuration

To point `vanvlaenderen.org` at GitHub Pages, configure the following DNS records:

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `iamabotama.github.io` |

## License

MIT License — see [LICENSE](LICENSE) for details.

## Development Workflow

Every push to `main` triggers the GitHub Actions build and deploys automatically to vanvlaenderen.org. Review changes locally with `pnpm dev` before pushing.

**Rollbacks:** `git revert <hash>` and push — GitHub Actions redeploys automatically.

---

## Content Workflow

### Adding a Source to the Bibliography

The bibliography data lives in **`src/data/bibliography.json`** — not in the page component. Adding a new source requires no knowledge of React or TypeScript.

1. Open `src/data/bibliography.json`
2. Find the correct section:
   - `sections.primarySources.subsections.*` for primary sources and finding aids
   - `sections.scholarlyLiterature.groups[n].entries` for scholarly literature
3. Add a new entry object:

```json
{
  "type": "Primary Source",
  "author": "Surname, Firstname",
  "year": "1958",
  "title": "Title of the work",
  "publisher": "Publisher, place and year.",
  "note": "Annotation explaining why this source matters to the research.",
  "url": "https://example.com",
  "urlLabel": "Free download (Internet Archive)"
}
```

The `url` and `urlLabel` fields are optional. Valid `type` values (controls badge colour): `Primary Source`, `Finding Aid`, `Belgian Historiography`, `Meetjesland`, `Methodology`, `Genetic Genealogy`.

4. Update `"lastUpdated"` at the top of the file to today's date
5. Commit and push — the site updates automatically

**Rule:** New source *identified but not yet obtained* → add to `docs/lions-of-flanders-todo.md` only. New source *in hand and cited in a dossier* → add to `bibliography.json` and update the todo.

---

### Adding a Citation Link to a Dossier Page

Dossier pages are in `src/pages/` (`VictorDossierPage.tsx`, `PraetDossierPage.tsx`, `PraetLineageDossierPage.tsx`). Each has a Notes & Bibliography section with numbered references.

1. Find the reference by number: `<span className={researchStyles.refNumber}>3.</span>`
2. Add or update the `<a href="...">` tag immediately after it
3. Commit and push

**Evidence levels** — use consistently when writing new claims:

| Level | Meaning |
|---|---|
| **Directly Attested** | Primary source states it explicitly |
| **Strongly Corroborated** | Multiple independent sources agree |
| **Probable** | Consistent with evidence; no contradicting source |
| **Hypothesis** | Working assumption; requires archival confirmation |

---

### Four-Bucket Framework

Before adding any "van Vlaenderen" appearance from a historical source to a dossier, classify it:

| Bucket | Type | Examples |
|---|---|---|
| 1 | Territorial / governmental phrase | *de Staeden van Vlaenderen*; *Kamer van Redeninge van Vlaenderen* |
| 2 | Feudal title / noble titulature | *dienstman Mijnsheeren van Vlaenderen* |
| 3 | Official staff / office phrase | *mijns heeren van Vlaenderen messagier* |
| 4 | True hereditary surname | D. Van Vlaenderen schepen Meygem; land record individuals |

Only Bucket 4 entries are genealogical evidence. Never add a Bucket 1–3 appearance to the dossiers as a surname attestation.

---

### Research Tracking Documents

Three documents in **`docs/`** are versioned with the repo:

| File | Purpose |
|---|---|
| `docs/lions-of-flanders-todo.md` | Research to-do — archival targets, source chain status, findings |
| `docs/vanvlaenderen.org-todo.md` | Website backlog and changelog |
| `docs/lions-of-flanders-reading-list.md` | Curated reading list with acquisition notes |

Edit directly in Codespaces or via the GitHub web editor. **Claude maintains these files** — when a finding is confirmed, Claude generates a patch updating the relevant `docs/` file alongside any site changes.

---

### How Patch Files Work

```bash
# Apply a patch from Claude:
git apply my-change.patch
git add -A
git commit -m "description"
git push origin main
rm my-change.patch
```

If `git apply` fails with a context error, the patched file has diverged — ask Claude to regenerate against the current file.
