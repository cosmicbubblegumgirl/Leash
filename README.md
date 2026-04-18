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
- The repo includes `app/api/waitlist/route.js` for local or server-backed Next.js runs.
- Set `NEXT_PUBLIC_WAITLIST_ENDPOINT` for GitHub Pages deployments, since static hosting cannot execute Next.js API routes.
- If `NEXT_PUBLIC_WAITLIST_ENDPOINT` is not set, the form falls back to `/api/waitlist`, which works in local Next.js runtime but not on GitHub Pages.
- The form submits JSON with `email` and `source`. Set `NEXT_PUBLIC_WAITLIST_SOURCE` if you want a custom source label; otherwise it defaults to `leash-site`.
- External waitlist endpoints can return JSON like `{ "message": "..." }`, plain text, or an empty `2xx` response.

## Deploy on GitHub Pages
1. In your GitHub repo, go to **Settings -> Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. In **Settings -> Secrets and variables -> Actions -> Variables**, add `NEXT_PUBLIC_WAITLIST_ENDPOINT`.
4. Push to `main` to trigger the workflow.
5. After deploy completes, the site is available at:
	`https://cosmicbubblegumgirl.github.io/Leash/`

## Waitlist deployment options
- GitHub Pages: point `NEXT_PUBLIC_WAITLIST_ENDPOINT` at a serverless function, form backend, or automation endpoint.
- Full Next.js hosting: deploy to a platform that supports App Router server routes and the built-in `/api/waitlist` demo endpoint will work.

## Waitlist endpoint contract
- Request: `POST` JSON with `email` and `source`.
- Success: `200` with `{ "ok": true, "message": "You’re on the list." }`.
- Error: `400`, `409`, or `500` with `{ "ok": false, "message": "..." }`.
