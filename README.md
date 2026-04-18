# Permit — Next.js Landing Page

A premium, creative landing page for an AI governance product built with Next.js, Tailwind CSS, and Framer Motion.

## Features
- App Router (Next.js 14)
- Reusable components
- Polished mobile navigation
- Scroll reveal animations
- Sticky approval card section
- Functional waitlist form with API route
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
- The waitlist API route stores submissions in memory for demo purposes.
- For production, connect `/api/waitlist` to a database or email service.
