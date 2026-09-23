# S. Lingaraj — Portfolio

Personal resume site, built with React + Vite + Tailwind CSS + Framer Motion. Deploys to GitHub Pages at `https://lingarajsankaravelu.github.io/portfolio`.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173/portfolio/` (the `/portfolio/` base path mirrors the GitHub Pages project-page URL).

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Content

All resume copy (experience, skills, education) lives in `src/data/resume.js` — edit it there rather than in the components. Note: `profile.links.github` / `profile.links.linkedin` are currently empty placeholders since the source PDF only showed icons, not URLs — fill those in before publishing.

## Deploy

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages automatically on every push to `main`, once:

1. This repo exists on GitHub as `portfolio`
2. Pages is enabled in repo Settings → Pages, with **Build and deployment source** set to **GitHub Actions**
