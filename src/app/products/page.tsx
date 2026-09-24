"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { GradeCardActions } from "@/components/GradeCardActions";
import { ProductImage } from "@/components/ProductImage";
import { grades } from "@/data/grades";
import { localizeDigits } from "@/lib/i18n/digits";

export default function ProductsPage() {
  const { dict, locale } = useLanguage();

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden border-b border-surface-border bg-surface-950">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50" />
          <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
          <Container className="relative py-20 md:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              {dict.nav.products}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-ink-50 md:text-5xl">
              {dict.grades.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-400 md:text-base">
              {dict.grades.subtitle}
            </p>

            <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl border border-brand-500/25 bg-brand-500/10 px-6 py-4 sm:flex-row sm:items-center">
              <p className="text-sm font-medium text-ink-100">
                {dict.productsBanner.title}
              </p>
              <a
                href="#products-grid"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("products-grid")
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950"
              >
                {dict.productsBanner.cta}
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
              </a>
            </div>

            <div id="products-grid" className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {grades.map((grade) => {
                const item = dict.grades.items[grade.id];
                return (
                  <div
                    key={grade.id}
                    className="group flex flex-col overflow-hidden rounded-xl border border-surface-border bg-surface-700 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-500/50 hover:shadow-glow-red"
                  >
                    <ProductImage src={grade.image} alt={item.title} />

                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-2xl font-extrabold tracking-tight text-brand-400">
                        {localizeDigits(grade.percent, locale)}
                      </span>
                      <h2 className="mt-1 text-sm font-semibold text-ink-50">
                        {item.title}
                      </h2>
                      <p className="mt-1.5 text-xs leading-relaxed text-ink-300">
                        {item.desc}
                      </p>

                      <GradeCardActions />
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
