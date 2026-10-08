"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export function Applications() {
  const { dict } = useLanguage();

  return (
    <section className="border-b border-surface-border bg-surface-900">
      <Container className="py-16 md:py-24">
        <Reveal className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            {dict.applications.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink-50 md:text-4xl">
            {dict.applications.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-400 md:text-base">
            {dict.applications.intro}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dict.applications.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={100 + i * 70}
              className="rounded-xl border border-surface-border bg-surface-800 p-6 shadow-card transition-colors duration-200 hover:border-brand-500/40"
            >
              <h3 className="text-sm font-bold text-ink-50">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-400">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
