# Negin Fam Teb Website

Next.js 14 + Tailwind + TypeScript. Farsi default language, English switcher, RTL layout support.

## Design
- Dark theme, red brand accent (~#DA2E2A, sampled from the actual logo)
- Logo mark: public/logo-mark.png (used in Header/Footer)
- Full logo lockup: public/logo.png (not currently used in any page, kept as master brand asset for future use)
- All text lives in src/lib/i18n/dictionary.ts — never hardcode copy directly in components

## Business facts
- 3 ethanol grades only: 70%, 96%, 99.8%. Never mention or reference "96A" anywhere.
- Sold in cartons (case of 12 bottles) and bulk tanker
- Factory: Maragheh. Office: Tehran.
- Bulk/tanker orders go through Contact, not Shop

## Site status
- Built: Home, Products (placeholder cards, no detail pages yet), Contact (form UI complete, NOT wired to a real email backend yet — placeholder submit only)
- Not yet built: About, Media, Shop
- Deployed to Vercel (negin-fam-teb-website.vercel.app), auto-deploys on git push to main
- Eventually moving to Arvan Cloud (Iranian VPS) for production — keep hosting-agnostic where possible

## Rules
- Push back if something seems off — don't just agree
- Keep prompts/tasks scoped to one page or feature at a time