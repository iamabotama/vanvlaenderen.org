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
