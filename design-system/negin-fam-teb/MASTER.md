# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/negin-fam-teb/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file. Otherwise follow the rules below.
>
> **This file documents the site's FINAL, established brand.** The color palette, dark theme, and
> Vazirmatn typeface are locked. Do not propose alternative palettes, light themes, or other
> typefaces. Automated design-system tools that suggest them (e.g. navy/blue palettes,
> EB Garamond/Lato) must be ignored. Use tool output only for spacing, hierarchy,
> accessibility, and UX-pattern review.

---

**Project:** Negin Fam Teb (industrial ethanol manufacturer, B2B + carton retail)
**Stack:** Next.js 14 (App Router) + Tailwind CSS 3 + TypeScript
**Source of truth for tokens:** `tailwind.config.ts` (values below mirror it)
**Languages:** Farsi default (`lang="fa" dir="rtl"`), English switcher. Layout must work in RTL and LTR.

---

## Brand

- **Theme:** Dark only. Medium-dark charcoal/slate surfaces (deliberately not near-black), off-white text, one red accent.
- **Accent:** Brand red `#DA2E2A`, sampled from the actual logo mark (`public/logo-mark.png`, used in Header/Footer).
- **Master logo lockup:** `public/logo.png` (not currently used on any page; kept as master brand asset).
- **Tone:** Industrial, credible, precise. Not playful. No gradients other than the existing subtle red radial glows.
- **Copy:** All text lives in `src/lib/i18n/dictionary.ts` (fa + en). Never hardcode copy in components.

### Business facts that constrain UI
- Exactly 3 ethanol grades: **70%, 96%, 99.8%**. Never mention or reference "96A".
- Sold in cartons (case of 12 bottles) and bulk tanker. Bulk/tanker orders go through **Contact**, not Shop.
- Factory: Maragheh. Office: Tehran.

---

## Color Tokens (Tailwind, from `tailwind.config.ts`)

Use Tailwind classes (`bg-surface-900`, `text-ink-300`, `bg-brand-500`). Never raw hex in components.

### Surfaces (backgrounds)
| Token | Hex | Typical use |
|-------|-----|-------------|
| `surface-950` | `#16171A` | Hero / CTA band sections |
| `surface-900` | `#1C1E22` | Page base (`body`), header, alternating sections |
| `surface-800` | `#212429` | Raised sections, info panels, form cards, image wells |
| `surface-700` | `#282B31` | Product cards |
| `surface-600` / `500` | `#32363D` / `#3E4249` | Hover / subtle fills |
| `surface-border` | `#34383F` | Default borders |
| `surface-borderStrong` | `#454951` | Secondary-button and emphasized borders |

### Ink (text)
| Token | Hex | Use |
|-------|-----|-----|
| `ink-50` | `#F6F5F3` | Headings, primary text on inputs |
| `ink-100` | `#EAE8E4` | Default body text (`body`) |
| `ink-200` | `#D3D0CA` | Labels, emphasized secondary text |
| `ink-300` | `#B3AFA8` | Secondary text, nav links, text on `surface-700` cards |
| `ink-400` | `#918D86` | Tertiary text, footer headings, placeholders (on surface-800 and darker only) |
| `ink-500` / `600` | `#726E68` / `#57534E` | **Decorative only** (icons, dividers). Fails contrast for text. |

### Brand red
| Token | Hex | Use |
|-------|-----|-----|
| `brand-500` | `#DA2E2A` | Primary buttons (white text), borders, focus ring, fills |
| `brand-400` | `#E14B41` | Hover state of primary; eyebrow labels on `surface-950`; large/bold accent text |
| `brand-300` | `#E8756C` | Small error text; secondary-button hover text |
| `brand-600` / `700` | `#B92420` / `#8F1B18` | Pressed / deep accents |
| `brand-50` / `100` | `#FDECEB` / `#FBD5D2` | Light tints (rare on dark) |
| `brand-glow` | `rgba(218,46,42,0.35)` | Glow shadows |

### Verified contrast (WCAG 2.x, computed from the hex values above)
Normal text needs 4.5:1; large text (24px, or 18.66px bold) and UI graphics need 3:1.

| Pair | 950 | 900 | 800 | 700 |
|------|-----|-----|-----|-----|
| `ink-50` | 16.45 | 15.32 | 14.29 | 13.02 |
| `ink-200` | 11.65 | 10.84 | 10.11 | 9.22 |
| `ink-300` | 8.21 | 7.64 | 7.13 | 6.50 |
| `ink-400` | 5.43 | 5.05 | 4.71 | **4.30 (fails)** |
| `ink-500` | 3.54 | 3.30 | 3.07 | 2.80 (fails everywhere) |
| `brand-300` | 6.14 | 5.72 | 5.33 | 4.86 |
| `brand-400` | 4.51 | **4.20 (fails small)** | **3.92 (fails small)** | 3.57 (large text only) |
| `brand-500` (as text) | 3.76 | 3.50 | 3.27 | 2.98 (never for text) |

Also: white on `brand-500` = 4.77 (passes, primary buttons); white on `brand-600` = 6.29.

**Rules that follow from the table:**
- Small text on `surface-700` (product cards) uses `ink-300`, not `ink-400`.
- `ink-500` is never used for text or placeholders.
- Small `brand-400` text only on `surface-950`. On lighter surfaces use `brand-300` (errors) or keep it large/bold (e.g. the grade percentage).
- `brand-500` is for fills, borders and rings, never for text.

---

## Typography

- **Font:** **Vazirmatn** (variable, weights 100–900), self-hosted at `src/app/fonts/Vazirmatn-Variable.woff2` via `next/font/local`, exposed as `--font-vazirmatn`, `display: swap`. Fallback stack: `Tahoma, system-ui, sans-serif`. One family for headings and body, in both Farsi and English.
- Do not add Google Fonts imports or a second typeface.

### Hierarchy (as used on existing pages)
| Role | Classes |
|------|---------|
| Eyebrow label | `text-xs font-semibold uppercase tracking-[0.2em] text-brand-400` (on `surface-950` only) |
| Page H1 (Products/Home-style hero) | `text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-ink-50` |
| Compact-page H1 (Contact) | `text-3xl md:text-4xl` (same weight/leading/tracking) |
| Hero intro | `text-sm md:text-base leading-relaxed text-ink-400`, constrained with `max-w-xl` |
| Card grade figure | `text-2xl font-extrabold tracking-tight text-brand-400` (large text, passes 3:1) |
| Card title | `text-sm font-semibold text-ink-50` |
| Card description | `text-xs leading-relaxed text-ink-300` |
| Form label | `text-sm font-medium text-ink-200` |
| Button label | `text-sm font-semibold` (primary CTA); `text-xs` allowed inside compact card actions |

Body text minimum is 12px (`text-xs`) and only inside compact cards. Anything a user must read at length is `text-sm` or larger.

---

## Layout & Spacing

- **Container:** `mx-auto w-full max-w-content px-6 md:px-10`, where `max-w-content` = `1280px`. Use the `Container` component. To narrow a block, wrap content in an inner `max-w-*` div. Do not stack a second `max-w-*` on `Container`.
- **Sticky header:** `h-16` (64px), `bg-surface-900/90 backdrop-blur`, `z-50`. `html` has `scroll-padding-top: 5rem` so anchors and keyboard focus are not hidden beneath it.
- **Section vertical rhythm:**
  - Content sections: `py-16 md:py-24`
  - Page hero: `py-20 md:py-28` (Products); compact hero `py-10 md:py-12` (Contact)
  - Coming-soon pages: `py-24 md:py-32`
  - Section blocks are separated with `border-b border-surface-border`
- **Grids:** product cards `grid-cols-1 sm:grid-cols-3 gap-5`.
- **Spacing scale:** the Tailwind default scale (4px steps). Common values: `gap-2` between adjacent buttons (min 8px), `p-5` card body, `p-6 sm:p-8` form cards, `gap-5` between form fields.
- **RTL:** Use logical properties (`start-*`, `end-*`, `ps-*`, `pe-*`, `text-start`). Directional icons flip with `rtl:-scale-x-100`. Never use `left-*`/`right-*`/`ml-*`/`mr-*` for layout that must mirror.
- **Background texture:** hero sections use `bg-dot-grid` at `opacity-50` and `bg-grid-fade` (red radial glow), both `pointer-events-none absolute inset-0`.

---

## Shadows
| Token | Use |
|-------|-----|
| `shadow-panel` | Large panels |
| `shadow-card` | Cards, form containers |
| `shadow-glow-red` | Primary button, card hover |
| `shadow-glow-red-lg` | Primary button hover |

---

## Component Specs (as implemented)

### Primary button (`Button` component, `variant="primary"`)
`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold bg-brand-500 text-white shadow-glow-red transition-all duration-200 hover:bg-brand-400 hover:shadow-glow-red-lg` plus the focus ring (below). Variants: `secondary` (2px `brand-500` border, `brand-400` text), `ghost` (1px `surface-border` border, `ink-200` text).

### Product card (`/products`)
- Shell: `group flex flex-col overflow-hidden rounded-xl border border-surface-border bg-surface-700 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-500/50 hover:shadow-glow-red`
- Image well: `relative aspect-[4/3] w-full overflow-hidden rounded-t-xl bg-surface-800`, using the `-landscape.png` photos (about 1920×1448), `object-cover`. Bottom fade: `h-10 bg-gradient-to-t from-surface-700 to-transparent`.
- Hover zoom: cursor-following magnifier. `transform-origin` comes from `--zoom-x/--zoom-y` set on `mousemove`, image `group-hover:scale-[2]`, `transition-transform duration-300 ease-out`. `sizes` is doubled (`66vw`/`200vw`) and `quality={90}` so the zoom stays sharp.
- Body: `flex flex-1 flex-col p-5`, then grade figure, title, description, then `GradeCardActions`.
- Actions: two links (Order Now = primary red, Bulk Inquiry = bordered) with `gap-2`, a `border-t border-surface-border` divider. Both are `min-h-11` below `lg`, compact at `lg` and up.

### Form inputs (Contact)
`w-full rounded-md border border-surface-border bg-surface-900 px-4 py-2.5 text-sm text-ink-50 placeholder:text-ink-400 transition-colors duration-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500`. Invalid: `border-brand-500`. Labels are always visible (never placeholder-only). Errors sit directly under the field as `text-xs text-brand-300`, linked with `aria-describedby` and `aria-invalid`.

### Skip link
First element in `Header`: `sr-only`, becomes a fixed red pill on focus (`focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60]`), targets `#main-content`. Every page's `<main>` carries `id="main-content"`. Copy: `dict.common.skipToContent`.

---

## Accessibility Rules (applied and required)

1. **Focus:** A global `:focus-visible` rule gives every focusable element `ring-2 ring-brand-500 ring-offset-2 ring-offset-surface-900`. Components may override the ring color/offset to match their surface (e.g. `ring-offset-surface-700` inside cards), but never remove the ring without an equivalent replacement. Use `focus-visible:`, not `focus:`, for buttons and links.
2. **Contrast:** Text must meet 4.5:1 (3:1 for large text) using the verified table above. Add any new text/surface pair to the table before using it.
3. **Touch targets:** Interactive controls are at least 44×44px on touch devices (`min-h-11`, `min-w-11`), relaxed only at `lg`+ where a fine pointer is expected. The header menu button, `Button`, language switcher (mobile), card actions and the Shop Now banner button follow this. Adjacent targets keep at least 8px gap (`gap-2`).
4. **Keyboard:** Skip link present; tab order follows visual order; the mobile menu button has `aria-expanded` and an `aria-label`; the nav has an `aria-label`.
5. **Sticky header:** `scroll-padding-top: 5rem` on `html` so focused and anchored content is never hidden beneath it.
6. **Motion:** Transitions are 200–300ms `ease-out`. A global `@media (prefers-reduced-motion: reduce)` rule collapses animation/transition durations and disables smooth scrolling. Don't add motion that relies on movement to convey meaning.
7. **Images:** Meaningful images have descriptive `alt` (grade title on product photos); decorative images use `alt=""` with `aria-hidden="true"`.
8. **Forms:** Visible `<label>` bound by `htmlFor`, errors adjacent to the field, `noValidate` with custom validation.
9. **Hover is never the only path:** anything revealed on hover (zoom, lift) must not hide required content or actions, and must degrade on touch devices.

---

## Anti-Patterns (Do NOT Use)

- Any palette, light theme, or typeface other than the ones documented here
- Emojis as icons (use inline SVG with `aria-hidden="true"`)
- `ink-500` or `brand-500` as text color; small `brand-400` text off `surface-950`
- Raw hex values in components (use tokens)
- Hardcoded copy in components (use the dictionary)
- `left`/`right` physical properties for layout that must mirror in RTL
- Removing focus outlines without a replacement ring
- Interactive elements under 44px on mobile
- Stacking two `max-w-*` utilities on one element (specificity is order-dependent); wrap instead
- Mentioning "96A" anywhere

---

## Pre-Delivery Checklist

- [ ] Uses only existing color tokens; no new hex values
- [ ] Vazirmatn only; no new font imports
- [ ] All copy in `dictionary.ts` (fa + en)
- [ ] Works in RTL and LTR (logical properties, icons flipped with `rtl:-scale-x-100`)
- [ ] Text contrast verified against the table (4.5:1 / 3:1 large)
- [ ] Visible focus on every interactive element
- [ ] Touch targets 44px on mobile, 8px between neighbors
- [ ] Hover effects are enhancements only and have a touch/keyboard equivalent
- [ ] `prefers-reduced-motion` still respected
- [ ] No horizontal scroll at 375px; check 375 / 768 / 1024 / 1440
- [ ] No content hidden behind the sticky header
