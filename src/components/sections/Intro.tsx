"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/Container";

export function Intro() {
  const { dict } = useLanguage();

  return (
    <section className="relative border-b border-surface-border bg-surface-900">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" />
      <Container className="relative py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="h-1 w-10 rounded-full bg-brand-500" />
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink-50 md:text-4xl">
              {dict.intro.title}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-400 md:text-base">
              {dict.intro.body}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {dict.intro.points.map((point, i) => (
              <div
                key={point.title}
                className="rounded-xl border border-surface-border bg-surface-800 p-6 shadow-card"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-500/10 text-sm font-bold text-brand-400 ring-1 ring-inset ring-brand-500/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-base font-semibold text-ink-50">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
