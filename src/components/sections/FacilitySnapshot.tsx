"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function FacilitySnapshot() {
  const { dict } = useLanguage();

  return (
    <section className="border-b border-surface-border bg-surface-800">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <ImagePlaceholder label="Maragheh Factory — Exterior / Line" />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              {dict.facility.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink-50 md:text-4xl">
              {dict.facility.title}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-400 md:text-base">
              {dict.facility.body}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/about" variant="ghost">
                {dict.facility.ctaAbout}
              </Button>
              <Button href="/media" variant="ghost">
                {dict.facility.ctaMedia}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
