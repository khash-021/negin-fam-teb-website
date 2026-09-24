"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { localizeDigits } from "@/lib/i18n/digits";

const SLIDES = [
  "/factory/factory-outside.webp",
  "/factory/azmayeshga-2.webp",
  "/factory/azmayeshga-3.webp",
  "/factory/azmayeshga-4.webp",
];
const INTERVAL_MS = 5000;

const arrowButton =
  "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface-900/70 text-ink-50 backdrop-blur transition-colors duration-200 hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900";

export function FacilitySlideshow() {
  const { dict, locale } = useLanguage();
  const f = dict.facility;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [held, setHeld] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  const go = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (!playing || held) return;
    const timer = window.setTimeout(() => go(index + 1), INTERVAL_MS);
    return () => window.clearTimeout(timer);
  }, [index, playing, held, go]);

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={f.slideshowLabel}
      className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-surface-border bg-surface-700"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
    >
      {SLIDES.map((src, i) => (
        <div
          key={src}
          role="group"
          aria-roledescription="slide"
          aria-label={`${localizeDigits(String(i + 1), locale)} / ${localizeDigits(String(SLIDES.length), locale)}`}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-500 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={f.slideAlts[i]}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label={f.prev}
        className={`${arrowButton} start-3`}
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 rtl:-scale-x-100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 4l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label={f.next}
        className={`${arrowButton} end-3`}
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 rtl:-scale-x-100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-center gap-1 bg-gradient-to-t from-surface-900/70 to-transparent px-3 pb-2 pt-8">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? f.pause : f.play}
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink-100 hover:text-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        >
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
            {playing ? (
              <path d="M5 3h3.5v14H5zM11.5 3H15v14h-3.5z" />
            ) : (
              <path d="M6 3.5v13l11-6.5z" />
            )}
          </svg>
        </button>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`${f.goToSlide} ${localizeDigits(String(i + 1), locale)}`}
            aria-current={i === index}
            className="group flex h-11 w-6 items-center justify-center focus-visible:outline-none"
          >
            <span
              className={`h-2 rounded-full transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-brand-400 ${
                i === index ? "w-6 bg-brand-500" : "w-2 bg-ink-200/60 group-hover:bg-ink-100"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
