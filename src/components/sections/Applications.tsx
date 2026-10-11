"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

const cardClassName =
  "h-full rounded-xl border border-surface-border bg-surface-800 p-6 shadow-card transition-colors duration-200 hover:border-brand-500/40";

export function Applications() {
  const { dict } = useLanguage();
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

  return (
    <section className="border-b border-surface-border bg-surface-900">
      <Container className="py-10 lg:py-24">
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

        {/* Mobile/tablet: horizontal scroll-snap carousel */}
        <div className="mt-6 lg:hidden">
          <div
            ref={scrollRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1"
          >
            {dict.applications.items.map((item, i) => (
              <div
                key={item.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="w-[70%] max-w-[280px] shrink-0 snap-start"
              >
                <Reveal delay={100 + i * 70} className={cardClassName}>
                  <h3 className="text-sm font-bold text-ink-50">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-400">{item.text}</p>
                </Reveal>
              </div>
            ))}
          </div>
          <div aria-hidden="true" className="mt-4 flex items-center justify-center gap-1.5">
            {dict.applications.items.map((item, i) => (
              <span
                key={item.title}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === active ? "w-5 bg-brand-500" : "w-1.5 bg-surface-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop/laptop: unchanged grid */}
        <div className="mt-10 hidden grid-cols-3 gap-5 lg:grid">
          {dict.applications.items.map((item, i) => (
            <Reveal key={item.title} delay={100 + i * 70} className={cardClassName}>
              <h3 className="text-sm font-bold text-ink-50">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-400">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
