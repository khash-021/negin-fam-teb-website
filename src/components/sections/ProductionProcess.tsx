"use client";

import { Fragment } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { localizeDigits } from "@/lib/i18n/digits";

export function ProductionProcess() {
  const { dict, locale } = useLanguage();
  const steps = dict.productionProcess.steps;

  return (
    <section className="border-b border-surface-border bg-surface-950">
      <Container className="py-16 md:py-24">
        <Reveal className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            {dict.productionProcess.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink-50 md:text-4xl">
            {dict.productionProcess.title}
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-3">
          {steps.map((step, i) => (
            <Fragment key={step.title}>
              <Reveal
                delay={100 + i * 80}
                className="flex-1 rounded-xl border border-surface-border bg-surface-800 p-6 shadow-card transition-colors duration-200 hover:border-brand-500/40"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/10 text-sm font-bold text-brand-400 ring-1 ring-inset ring-brand-500/25">
                  {localizeDigits(String(i + 1), locale)}
                </span>
                <h3 className="mt-4 text-sm font-bold text-ink-50">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-400">{step.text}</p>
              </Reveal>

              {i < steps.length - 1 && (
                <div aria-hidden="true" className="hidden items-center justify-center lg:flex">
                  <svg
                    viewBox="0 0 20 20"
                    className="h-5 w-5 text-surface-borderStrong rtl:-scale-x-100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
