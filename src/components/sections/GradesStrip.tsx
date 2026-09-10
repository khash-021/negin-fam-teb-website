"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/Container";
import { GradeCardActions } from "@/components/GradeCardActions";
import { grades } from "@/data/grades";

export function GradesStrip() {
  const { dict } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-surface-border bg-surface-800">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade-soft" />
      <Container className="relative py-16 md:py-24">
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink-50 md:text-4xl">
            {dict.grades.title}
          </h2>
          <p className="mt-4 text-sm text-ink-400 md:text-base">
            {dict.grades.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {grades.map((grade) => {
            const item = dict.grades.items[grade.id];
            return (
              <div
                key={grade.id}
                className="group flex flex-col justify-between rounded-xl border border-surface-border bg-surface-700 p-7 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-500/50 hover:shadow-glow-red"
              >
                <div>
                  <Link
                    href={`/products#${grade.slug}`}
                    className="block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-700"
                  >
                    <span className="text-4xl font-extrabold tracking-tight text-brand-400">
                      {grade.percent}
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-ink-50">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-400">
                      {item.desc}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink-200 group-hover:text-brand-400">
                      {item.cta}
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        className="h-4 w-4 rtl:-scale-x-100 transition-transform duration-200 group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </div>

                <GradeCardActions />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
