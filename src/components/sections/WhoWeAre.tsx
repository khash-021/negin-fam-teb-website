"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function WhoWeAre() {
  const { dict } = useLanguage();

  return (
    <section className="border-b border-surface-border bg-surface-900">
      <Container className="py-16 md:py-20">
        <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-ink-50 md:text-3xl">
            {dict.whoWeAre.title}
          </h2>
          <p className="text-sm leading-relaxed text-ink-400 md:text-base">
            {dict.whoWeAre.body}
          </p>
          <Button href="/about" variant="ghost" className="mt-2">
            {dict.whoWeAre.cta}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
