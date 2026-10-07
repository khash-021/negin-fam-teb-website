"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export default function AboutPage() {
  const { dict } = useLanguage();

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden border-b border-surface-border bg-surface-950">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50" />
          <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
          <Container className="relative py-16 md:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              {dict.nav.about}
            </p>
            <h1 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-ink-50 md:text-4xl">
              {dict.about.title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-400 md:text-base">
              {dict.about.intro}
            </p>
          </Container>
        </section>

        <section className="border-b border-surface-border bg-surface-900">
          <Container className="py-16 md:py-24">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              <Reveal className="lg:col-span-2">
                <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-ink-50 md:text-3xl">
                  {dict.about.productsTitle}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-400 md:text-base">
                  {dict.about.productsParagraph1}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-400 md:text-base">
                  {dict.about.productsParagraph2}
                </p>
              </Reveal>

              <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
                {dict.about.badges.map((badge, i) => (
                  <Reveal
                    key={badge.title}
                    delay={100 + i * 80}
                    className="rounded-xl border border-surface-border bg-surface-800 p-5 shadow-card"
                  >
                    <h3 className="text-sm font-semibold text-ink-50">{badge.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-400">
                      {badge.subtitle}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="relative border-b border-surface-border bg-surface-950">
          <div className="pointer-events-none absolute inset-0 bg-line-grid opacity-50" />
          <Container className="relative py-16 md:py-24">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Reveal className="rounded-xl border border-surface-border bg-surface-800 p-6 shadow-card sm:p-7">
                <h2 className="text-lg font-semibold text-ink-50">
                  {dict.about.mission.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-400">
                  {dict.about.mission.body}
                </p>
              </Reveal>
              <Reveal
                delay={80}
                className="rounded-xl border border-surface-border bg-surface-800 p-6 shadow-card sm:p-7"
              >
                <h2 className="text-lg font-semibold text-ink-50">
                  {dict.about.vision.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-400">
                  {dict.about.vision.body}
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="bg-surface-900">
          <Container className="py-16 md:py-20">
            <Reveal className="mx-auto max-w-2xl rounded-xl border border-surface-border bg-surface-800 p-6 shadow-card sm:p-7">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-200">
                {dict.about.registrationTitle}
              </h2>
              <dl className="mt-5 flex flex-col gap-3">
                {dict.about.registrationRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-4 border-b border-surface-border pb-3 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-sm text-ink-400">{row.label}</dt>
                    <dd
                      dir={row.numeric ? "ltr" : undefined}
                      className="text-sm font-medium text-ink-100"
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
