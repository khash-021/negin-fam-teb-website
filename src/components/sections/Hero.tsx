"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export function Hero() {
  const { dict } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const layer = layerRef.current;
    if (!section || !layer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let height = Math.max(section.offsetHeight, 1);
    let frame = 0;
    let listening = false;

    const update = () => {
      frame = 0;
      const progress = Math.min(Math.max(window.scrollY / height, 0), 1);
      layer.style.setProperty("--p", progress.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      height = Math.max(section.offsetHeight, 1);
      onScroll();
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !listening) {
        window.addEventListener("scroll", onScroll, { passive: true });
        listening = true;
        onScroll();
      } else if (!entry.isIntersecting && listening) {
        window.removeEventListener("scroll", onScroll);
        listening = false;
      }
    });
    observer.observe(section);
    window.addEventListener("resize", onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-surface-border bg-surface-950"
    >
      <div
        ref={layerRef}
        className="hero-parallax pointer-events-none absolute inset-x-0 -inset-y-24"
      >
        <div className="absolute inset-0 bg-dot-grid opacity-60" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_0%,rgba(218,46,42,0.16),transparent_70%)]" />

      <Container className="relative py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            {dict.hero.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-50 md:text-6xl">
            {dict.hero.name}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-300 md:text-lg">
            {dict.hero.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/products" variant="primary">
              {dict.hero.ctaPrimary}
            </Button>
            <Button href="/contact" variant="secondary">
              {dict.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
