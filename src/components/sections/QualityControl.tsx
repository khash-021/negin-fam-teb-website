"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export function QualityControl() {
  const { dict } = useLanguage();

  return (
    <section className="border-b border-surface-border bg-surface-800">
      <Container className="py-16 md:py-24">
        <Reveal className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            {dict.qualityControl.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink-50 md:text-4xl">
            {dict.qualityControl.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-400 md:text-base">
            {dict.qualityControl.intro}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          <Reveal className="relative mt-10">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-surface-border lg:aspect-auto lg:h-full">
              <Image
                src="/factory/azmayeshga-3.webp"
                alt={dict.qualityControl.imageAlt}
                fill
                loading="lazy"
                quality={90}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="pointer-events-none absolute left-0 top-0 z-10 -translate-x-2 -translate-y-1/2 rounded-lg bg-brand-500 px-4 py-2.5 shadow-lg sm:-translate-x-4">
              <p className="text-xs font-bold text-white">
                {dict.qualityControl.imageBadgeTitle}
              </p>
              <p className="mt-0.5 text-base font-bold text-white">
                {dict.qualityControl.imageBadgeSubtitle}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {dict.qualityControl.items.map((item, i) => (
              <Reveal
                key={item.title}
                delay={100 + i * 70}
                className="rounded-xl border border-surface-border bg-surface-700 p-6 shadow-card transition-colors duration-200 hover:border-brand-500/40"
              >
                <h3 className="text-sm font-bold text-ink-50">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-400">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
