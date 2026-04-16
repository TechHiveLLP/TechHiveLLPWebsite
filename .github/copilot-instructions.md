# TechHive Website - Copilot Instructions

## Project Overview
TechHive LLP company website built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech Stack
- **Framework**: Next.js 16+ (App Router, `src/` directory)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4 with `@theme inline` for CSS custom properties
- **Animations**: Framer Motion (`whileInView`, staggered entries)
- **Icons**: Lucide React (no emoji in UI)
- **Font**: Inter via `next/font/google`
- **Package Manager**: npm
- **Deployment**: GitHub Pages via static export (`output: "export"`)

## Design System
- **Palette**: Slate-blue-to-cyan gradient (`#60a5fa` → `#38bdf8` → `#22d3ee`), dark backgrounds (`#020617`, `#0f172a`)
- **Aesthetic**: Minimal, professional (Linear/Stripe-inspired). No glow effects, no rounded-full buttons, no flashy gradients.
- **Layout patterns**: Left-aligned section headers with uppercase tracking-widest labels, pixel-gap grids (gap-px with bg-dark-border), numbered lists for services
- **Typography**: `font-semibold` (not bold) for headings, `text-sm` body text, `text-xs tracking-widest uppercase` for labels
- **CTAs**: Solid white buttons (`bg-text-primary text-dark-bg`) with ArrowUpRight icon

## File Structure
```
src/
  app/
    globals.css      # CSS variables, theme, utility classes
    layout.tsx       # Root layout, metadata, Inter font
    page.tsx         # Composes all section components
    icon.svg         # Favicon (hexagon logo)
    apple-icon.svg   # Apple touch icon
  components/
    Navbar.tsx       # Fixed nav with smooth scroll
    Hero.tsx         # Full-screen hero with mesh gradient blobs
    About.tsx        # Stats + pillars in pixel-gap grids
    Services.tsx     # Numbered list layout (01-05)
    Products.tsx     # FSIMetrics + RadiantAI cards
    Contact.tsx      # Contact cards + CTA banner
    Footer.tsx       # Minimal footer with logo
```

## Conventions
- All components are client components (`"use client"`) due to Framer Motion
- Animations use `whileInView` with `viewport={{ once: true, margin: "-80px" }}`
- CSS variables defined in `globals.css` under `@theme inline` block
- Colors referenced as Tailwind classes: `text-primary`, `bg-dark-surface`, `border-dark-border`, etc.
- No external image assets — all graphics are inline SVG or CSS gradients

## Build & Deploy
```bash
npm run dev      # Local development (Turbopack)
npm run build    # Production build (static export to out/)
npm run lint     # ESLint check
```
