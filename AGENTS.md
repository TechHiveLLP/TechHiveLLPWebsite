# TechHive Website - Agent Guidelines

## Context
This is the TechHive LLP company website — a single-page Next.js App Router site with TypeScript, Tailwind CSS v4, and Framer Motion.

## Rules
- Always run `npm run build` after making changes to verify zero errors.
- Use Tailwind CSS theme variables (e.g. `text-primary`, `bg-dark-surface`) — never hardcode hex colors in components.
- Preserve the minimal, professional design language. Avoid glow effects, gradient buttons, or flashy animations.
- All section components use Framer Motion `whileInView` for scroll-triggered animations.
- Lucide React for all icons. No emoji in the UI.
- When adding a new section, add it to `src/app/page.tsx` and create a `"use client"` component in `src/components/`.

## Products
- **FSIMetrics** — Construction feasibility calculator SaaS. Live at fsimetrics.com.
- **RadiantAI** — AI clinic management. Status: Coming Soon.

## Deployment
Static export to GitHub Pages. The workflow is at `.github/workflows/deploy.yml`. Build output goes to `out/`.
