"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const HOLD_MS = 200;
const MOVE_TOLERANCE_PX = 8;

export function ProductImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer = 0;
    let active = false;
    let startX = 0;
    let startY = 0;

    const setOrigin = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--zoom-x", `${((clientX - rect.left) / rect.width) * 100}%`);
      el.style.setProperty("--zoom-y", `${((clientY - rect.top) / rect.height) * 100}%`);
    };
    const reset = () => {
      window.clearTimeout(timer);
      active = false;
      delete el.dataset.touchZoom;
    };

    // Press and hold to magnify; a quick swipe still scrolls the page as normal.
    const onStart = (e: TouchEvent) => {
      reset();
      const t = e.touches[0];
      startX = t.clientX;
      startY = t.clientY;
      timer = window.setTimeout(() => {
        active = true;
        setOrigin(startX, startY);
        el.dataset.touchZoom = "";
      }, HOLD_MS);
    };
    const onMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (active) {
        e.preventDefault();
        setOrigin(t.clientX, t.clientY);
      } else if (Math.hypot(t.clientX - startX, t.clientY - startY) > MOVE_TOLERANCE_PX) {
        window.clearTimeout(timer);
      }
    };
    const block = (e: Event) => {
      if (active) e.preventDefault();
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: false });
    el.addEventListener("touchend", reset);
    el.addEventListener("touchcancel", reset);
    el.addEventListener("contextmenu", block);
    return () => {
      reset();
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", reset);
      el.removeEventListener("touchcancel", reset);
      el.removeEventListener("contextmenu", block);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="group/img relative aspect-[4/3] w-full select-none overflow-hidden rounded-t-xl bg-surface-800 [-webkit-touch-callout:none]"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--zoom-x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
        e.currentTarget.style.setProperty("--zoom-y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 640px) 66vw, 200vw"
        quality={90}
        draggable={false}
        style={{ transformOrigin: "var(--zoom-x, 50%) var(--zoom-y, 50%)" }}
        className="object-cover transition-transform duration-300 ease-out [@media(hover:hover)]:group-hover/img:scale-[2] group-data-[touch-zoom]/img:scale-[2]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-surface-700 to-transparent" />
    </div>
  );
}
