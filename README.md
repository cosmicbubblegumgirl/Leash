# Permit — Next.js Landing Page

A premium, creative landing page for an AI governance product built with Next.js, Tailwind CSS, and Framer Motion.

## Features
- App Router (Next.js 14)
- Reusable components
- Polished mobile navigation
- Scroll reveal animations
- Sticky approval card section
- Functional waitlist form with configurable endpoint
- Premium dark visual style with humanized copy
- Footer text: **A quantum cupcake creation**

## Run locally
```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure
- `app/` — routes, layout, global styles, API route
- `components/` — reusable UI sections and motion helpers
- `tailwind.config.js` — theme extensions
- `postcss.config.js` — Tailwind/PostCSS config

## Notes
- GitHub Pages deployment is handled by [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml).
- Set `NEXT_PUBLIC_WAITLIST_ENDPOINT` for the waitlist form (for example, a serverless function URL).
- GitHub Pages is static hosting, so Next.js API routes are not available there.

## Deploy on GitHub Pages
1. In your GitHub repo, go to **Settings -> Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` to trigger the workflow.
4. After deploy completes, the site is available at:
	`https://<your-github-username>.github.io/Leash/`
