"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function CtaBand() {
  const { dict } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-surface-border bg-surface-950">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <Container className="relative flex flex-col items-center gap-6 py-20 text-center md:py-28">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-ink-50 md:text-4xl">
            {dict.ctaBand.title}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="max-w-md text-sm leading-relaxed text-ink-400 md:text-base">
            {dict.ctaBand.body}
          </p>
        </Reveal>
        <Reveal delay={160} className="mt-2">
          <Button href="/contact" variant="primary">
            {dict.ctaBand.cta}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
