"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/Container";

const icons = [
  <path key="purity" d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" strokeLinecap="round" strokeLinejoin="round" />,
  <path key="capacity" d="M4 20V10M10 20V4M16 20v-7M4 20h16" strokeLinecap="round" strokeLinejoin="round" />,
  <path key="reliability" d="M3 12a9 9 0 1015-6.7M18 3v4.5h-4.5" strokeLinecap="round" strokeLinejoin="round" />,
  <path key="support" d="M4 5h16v10H9l-4 4V5z" strokeLinecap="round" strokeLinejoin="round" />,
];

export function WhyUs() {
  const { dict } = useLanguage();

  return (
    <section className="relative border-b border-surface-border bg-surface-900">
      <div className="pointer-events-none absolute inset-0 bg-line-grid opacity-50" />
      <Container className="relative py-16 md:py-24">
        <h2 className="max-w-md text-3xl font-extrabold leading-tight tracking-tight text-ink-50 md:text-4xl">
          {dict.why.title}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.why.points.map((point, i) => (
            <div
              key={point.title}
              className="rounded-xl border border-surface-border bg-surface-800 p-6 shadow-card transition-colors duration-200 hover:border-brand-500/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-500/10 text-brand-400 ring-1 ring-inset ring-brand-500/25">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
                  {icons[i % icons.length]}
                </svg>
              </span>
              <h3 className="mt-5 text-base font-semibold text-ink-50">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">{point.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
