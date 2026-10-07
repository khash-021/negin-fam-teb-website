# Negin Fam Teb Website

Next.js 14 (App Router) + Tailwind + TypeScript. Farsi default language, English switcher, RTL layout support.

## Design
- Dark theme, red brand accent (~#DA2E2A, sampled from the actual logo)
- Logo mark: public/logo-mark.png (used in Header/Footer/intro overlay)
- Full logo lockup: public/logo.png (not currently used in any page, kept as master brand asset for future use)
- All text lives in src/lib/i18n/dictionary.ts — never hardcode copy directly in components
- Logo intro overlay (src/components/IntroOverlay.tsx, mounted in root layout): full-screen splash with the logo mark, plays once per browser session (sessionStorage-gated), skipped under prefers-reduced-motion. Covering styles (position/inset/z-index/background) are set as inline styles, not Tailwind classes, so it paints correctly before the CSS bundle is ready — don't move those back to className.
- Scroll reveal (src/components/Reveal.tsx): plain CSS transition + IntersectionObserver, trigger-once per element. framer-motion was tried and removed — it is not a dependency; don't reintroduce it without being asked.

## Business facts
- 3 ethanol grades only: 70%, 96%, 99.8%. Never mention or reference "96A" anywhere.
- Positioning is currently "Industrial Ethanol Manufacturer". This is under review and may be broadened; follow the copy given in each task.
- Packaging: 1-liter bottles in cartons of 12, plus bulk tanker.
- Factory: Maragheh. Office: Tehran.
- No online shop. Products are display-only and every call to action goes to /contact.
- Copy for About, Contact, and Products comes from the old Taheri template and is NOT yet verified by the office — don't rewrite or remove it unless asked.

## Site status
- Home page copy and structure are still the older version and are going to be reworked.
- Nav (Header.tsx): Home, About, Products, Media, Contact
- Built: Home; About (story, mission/vision, registration block); Products (three cards, each with a fixed set of five spec rows, badges on Products only, one "Request a Quote" button to /contact, a flammable note, and a custom-order band); Contact (real addresses, phones, email, four-field form with no sending backend yet)
- Stub (ComingSoon placeholder) page: Media — the only page not yet built
- /shop redirects to /products (next.config.mjs) — the route itself was deleted
- Deployed to Vercel (negin-fam-teb-website.vercel.app), auto-deploys on git push to main
- Eventually moving to Arvan Cloud (Iranian VPS) for production — keep hosting-agnostic where possible

## Rules
- Push back if something seems off — don't just agree
- Keep prompts/tasks scoped to one page or feature at a time
