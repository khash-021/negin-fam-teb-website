"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export function Hero() {
  const { dict } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-surface-border bg-surface-950">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_0%,rgba(218,46,42,0.16),transparent_70%)]" />

      <Container className="relative py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            {dict.hero.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-50 md:text-6xl">
            {dict.hero.name}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-300 md:text-lg">
            {dict.hero.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/products" variant="primary">
              {dict.hero.ctaPrimary}
            </Button>
            <Button href="/contact" variant="secondary">
              {dict.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
