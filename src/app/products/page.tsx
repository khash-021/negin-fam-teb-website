"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { GradeCardActions } from "@/components/GradeCardActions";
import { ProductImage } from "@/components/ProductImage";
import { Reveal } from "@/components/Reveal";
import { grades } from "@/data/grades";
import { localizeDigits } from "@/lib/i18n/digits";

export default function ProductsPage() {
  const { dict, locale } = useLanguage();
  const specLabels = dict.grades.specLabels;

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

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {grades.map((grade, i) => {
                const item = dict.grades.items[grade.id];
                return (
                  <Reveal
                    key={grade.id}
                    delay={100 + i * 90}
                    id={grade.slug}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-surface-border bg-surface-700 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-500/50 hover:shadow-glow-red"
                  >
                    <ProductImage src={grade.image} alt={item.title} badge={item.badge} />

                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-2xl font-extrabold tracking-tight text-brand-400">
                        {localizeDigits(grade.percent, locale)}
                      </span>
                      <h2 className="mt-1 text-sm font-semibold text-ink-50">
                        {item.title}
                      </h2>
                      <p className="mt-0.5 text-xs text-ink-400">{item.subtitle}</p>
                      <p className="mt-2 text-xs leading-relaxed text-ink-300">
                        {item.desc}
                      </p>

                      <dl className="mt-4 flex flex-col gap-2 border-t border-surface-border pt-4">
                        <div className="flex items-start justify-between gap-3 text-xs">
                          <dt className="shrink-0 text-ink-400">{specLabels.purity}</dt>
                          <dd className="text-end font-medium text-ink-100">{item.purity}</dd>
                        </div>
                        <div className="flex items-start justify-between gap-3 text-xs">
                          <dt className="shrink-0 text-ink-400">{specLabels.formula}</dt>
                          <dd dir="ltr" className="text-end font-medium text-ink-100">
                            {dict.grades.chemicalFormula}
                          </dd>
                        </div>
                        <div className="flex items-start justify-between gap-3 text-xs">
                          <dt className="shrink-0 text-ink-400">{specLabels.appearance}</dt>
                          <dd className="text-end font-medium text-ink-100">{item.appearance}</dd>
                        </div>
                        <div className="flex items-start justify-between gap-3 text-xs">
                          <dt className="shrink-0 text-ink-400">{specLabels.packaging}</dt>
                          <dd className="text-end font-medium text-ink-100">{item.packaging}</dd>
                        </div>
                        <div className="flex items-start justify-between gap-3 text-xs">
                          <dt className="shrink-0 text-ink-400">{specLabels.use}</dt>
                          <dd className="text-end font-medium text-ink-100">{item.use}</dd>
                        </div>
                      </dl>

                      <GradeCardActions />
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <p className="mt-6 text-xs text-ink-400">{dict.grades.notice}</p>
          </Container>
        </section>

        <section className="relative overflow-hidden border-b border-surface-border bg-surface-950">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50" />
          <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
          <Container className="relative flex flex-col items-center gap-6 py-20 text-center md:py-28">
            <Reveal>
              <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-ink-50 md:text-4xl">
                {dict.productsCta.title}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="max-w-md text-sm leading-relaxed text-ink-400 md:text-base">
                {dict.productsCta.body}
              </p>
            </Reveal>
            <Reveal delay={160}>
              <Button href="/contact" variant="primary">
                {dict.productsCta.cta}
              </Button>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
