"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export function CtaBand() {
  const { dict } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-surface-border bg-surface-950">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <Container className="relative flex flex-col items-center gap-6 py-20 text-center md:py-28">
        <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-ink-50 md:text-4xl">
          {dict.ctaBand.title}
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-ink-400 md:text-base">
          {dict.ctaBand.body}
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button href="/shop" variant="primary">
            {dict.ctaBand.ctaCartons}
          </Button>
          <Button href="/contact" variant="secondary">
            {dict.ctaBand.ctaBulk}
          </Button>
        </div>
      </Container>
    </section>
  );
}
