"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "nft-intro-played";
const ENTER_MS = 500;
const HOLD_MS = 2800;
const FADE_MS = 400;

export function IntroOverlay() {
  const [phase, setPhase] = useState<"idle" | "in" | "out" | "done">("idle");
  const shouldPlayRef = useRef<boolean | null>(null);

  useEffect(() => {
    if (shouldPlayRef.current === null) {
      let alreadyPlayed = true;
      try {
        alreadyPlayed = sessionStorage.getItem(SESSION_KEY) === "1";
      } catch {
        alreadyPlayed = true;
      }

      const reducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      shouldPlayRef.current = !alreadyPlayed && !reducedMotion;

      if (shouldPlayRef.current) {
        try {
          sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          // sessionStorage unavailable (private mode etc.) — still play once for this load
        }
      }
    }

    if (!shouldPlayRef.current) {
      setPhase("done");
      return;
    }

    const raf = requestAnimationFrame(() => setPhase("in"));
    const toOut = window.setTimeout(() => setPhase("out"), HOLD_MS);
    const toDone = window.setTimeout(() => setPhase("done"), HOLD_MS + FADE_MS);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(toOut);
      window.clearTimeout(toDone);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      data-intro-overlay={phase}
      className="flex flex-col items-center justify-center gap-6 transition-opacity duration-[400ms] ease-out"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2147483000,
        backgroundColor: "#1C1E22",
        opacity: phase === "out" ? 0 : 1,
      }}
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={144}
        height={144}
        priority
        className="h-28 w-28 transition-all duration-[500ms] ease-out sm:h-36 sm:w-36"
        style={{
          opacity: phase === "idle" ? 0 : 1,
          transform: phase === "idle" ? "scale(0.85)" : "scale(1)",
        }}
      />
      <div
        className="flex items-center gap-1.5 transition-opacity duration-300 ease-out"
        style={{ opacity: phase === "in" || phase === "out" ? 1 : 0 }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500"
            style={{ animationDelay: `${i * 180}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
