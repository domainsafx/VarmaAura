# Varma Aura — Next.js Site

A rebuild of the Varma Aura resort site as a modern Next.js 14 (App Router)
project, written entirely in TypeScript/TSX. No static `.html` files —
every page is a React server/client component.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — brand palette (forest green / champagne gold / cream)
  defined as design tokens in `tailwind.config.ts`
- **Framer Motion** — scroll reveals, the page-load curtain, route
  transitions, and the booking drawer's slide-in animation
- **next/font/google** — Cormorant Garamond (display) + Jost (body/UI),
  self-hosted at build time (requires internet access during `next build`)
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Structure

```
app/                     Route segments (one folder per page)
  layout.tsx              Root layout: fonts, nav, footer, drawers
  page.tsx                Home
  experience/page.tsx
  live-now/page.tsx
  amenities/page.tsx
  location/page.tsx
  visit/page.tsx
components/
  layout/                 Navbar, Footer, Curtain, PageTransition
  ui/                      Button, Reveal, SectionHead, PageHero, ...
  cards/                   Amenity / live-now card variants
  sections/                Larger composed page sections
  booking/                 BookingProvider (context) + drawer + overlay
  forms/                   Visit + private-enquiry forms
lib/data.ts               All site copy/content in one typed module
public/images/             Photography, logo
```

## Notes

- All booking / enquiry forms are client components with local state;
  wire the `onSubmit` handlers in `components/forms/*.tsx` and
  `components/booking/BookingDrawer.tsx` up to your backend or a service
  like Formspree / a Next.js Route Handler when you're ready to receive
  real submissions.
- Site content (nav links, copy, images, amenities, location details) is
  centralized in `lib/data.ts` — edit it there rather than in the page
  files to update text across the site.
