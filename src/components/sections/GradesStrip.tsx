"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/Container";
import { GradeCardActions } from "@/components/GradeCardActions";
import { Reveal } from "@/components/Reveal";
import { grades } from "@/data/grades";
import { localizeDigits } from "@/lib/i18n/digits";

const cardClassName =
  "group flex h-full flex-col justify-between rounded-xl border border-surface-border bg-surface-700 p-7 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-500/50 hover:shadow-glow-red";

export function GradesStrip() {
  const { dict, locale } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const update = () => {
      const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
        const dist = Math.abs(cardCenter - containerCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActive(closest);
    };

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const renderCardBody = (grade: (typeof grades)[number]) => {
    const item = dict.grades.items[grade.id];
    return (
      <>
        <div>
          <Link
            href={`/products#${grade.slug}`}
            className="block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-700"
          >
            <span className="text-4xl font-extrabold tracking-tight text-brand-400">
              {localizeDigits(grade.percent, locale)}
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
      </>
    );
  };

  return (
    <section className="relative overflow-hidden border-b border-surface-border bg-surface-800">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade-soft" />
      <Container className="relative py-10 lg:py-24">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink-50 md:text-4xl">
            {dict.grades.title}
          </h2>
          <p className="mt-4 text-sm text-ink-400 md:text-base">
            {dict.grades.subtitle}
          </p>
        </Reveal>

        {/* Mobile/tablet: horizontal scroll-snap carousel */}
        <div className="mt-6 lg:hidden">
          <div
            ref={scrollRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1"
          >
            {grades.map((grade, i) => (
              <div
                key={grade.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="w-[85%] max-w-[340px] shrink-0 snap-start"
              >
                <Reveal delay={100 + i * 90} className={cardClassName}>
                  {renderCardBody(grade)}
                </Reveal>
              </div>
            ))}
          </div>
          <div aria-hidden="true" className="mt-4 flex items-center justify-center gap-1.5">
            {grades.map((grade, i) => (
              <span
                key={grade.id}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === active ? "w-5 bg-brand-500" : "w-1.5 bg-surface-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop/laptop: unchanged grid */}
        <div className="mt-10 hidden grid-cols-3 gap-5 lg:grid">
          {grades.map((grade, i) => (
            <Reveal key={grade.id} delay={100 + i * 90} className={cardClassName}>
              {renderCardBody(grade)}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
