# Permit — Next.js Landing Page

A premium, creative landing page for an AI governance product built with Next.js, Tailwind CSS, and Framer Motion.

## Features
- App Router (Next.js 14)
- Reusable components
- Polished mobile navigation
- Scroll reveal animations
- Sticky approval card section
- Functional waitlist form that emails submissions to simon3m3ll3m@gmail.com
- Rollout sequence section for governance design
- Operational signals section for trust and review posture
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
- GitHub Pages deployment is handled by [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml).
- The live waitlist form posts directly to FormSubmit and sends submissions to `simon3m3ll3m@gmail.com`.
- The repo still includes `app/api/waitlist/route.js` for local or server-backed Next.js runs if you later move off static hosting.
- The static Pages deployment does not rely on Next.js API routes.

## Deploy on GitHub Pages
1. In your GitHub repo, go to **Settings -> Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` to trigger the workflow.
4. After deploy completes, the site is available at:
	`https://cosmicbubblegumgirl.github.io/Leash/`

## Waitlist delivery
- GitHub Pages: submissions are sent directly to `simon3m3ll3m@gmail.com` via FormSubmit.
- Full Next.js hosting: you can switch back to the built-in `app/api/waitlist/route.js` if you want server-owned submission handling.
