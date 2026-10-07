"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/Container";

const arrow = (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    className="h-4 w-4 rtl:-scale-x-100"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Hero() {
  const { dict } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-surface-border bg-surface-950">
      <Image
        src="/factory/factory-outside.webp"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-surface-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_0%,rgba(218,46,42,0.16),transparent_70%)]" />

      <Container className="relative py-24 text-center md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            {dict.hero.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-50 md:text-6xl">
            {dict.hero.name}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-200 md:text-lg">
            {dict.hero.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-glow-red-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950"
            >
              {dict.hero.ctaPrimary}
              {arrow}
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border-2 border-white bg-black/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950"
            >
              {dict.hero.ctaSecondary}
              {arrow}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
