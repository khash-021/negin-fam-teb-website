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
- Sold in cartons (case of 12 bottles) and bulk tanker
- Factory: Maragheh. Office: Tehran.
- Bulk/tanker orders go through Contact, not Shop

## Site status
- Home page copy and structure are being reworked; expect changes.
- Nav (Header.tsx): Home, About, Products, Media, Contact — Shop was removed from the nav
- Built: Home, Products (placeholder cards, no detail pages yet), About (story, mission/vision, registration block)
- Contact: real addresses, phone numbers, and email are in place. Form has four fields (name, phone, company, message) but is still NOT wired to a real sending backend — submit just simulates a delay and shows a success state
- Stub (ComingSoon placeholder) pages: Media, Shop — /shop route still exists but isn't linked from nav
- Deployed to Vercel (negin-fam-teb-website.vercel.app), auto-deploys on git push to main
- Eventually moving to Arvan Cloud (Iranian VPS) for production — keep hosting-agnostic where possible

## Rules
- Push back if something seems off — don't just agree
- Keep prompts/tasks scoped to one page or feature at a time
