"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const SLIDE_PX = 12;

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  // "init" renders plain (visible) markup until we know whether this element starts below the fold.
  const [mode, setMode] = useState<"init" | "pinned" | "scrub">("init");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const pageTop = el.getBoundingClientRect().top + window.scrollY;
    // Reduced motion, or already in the first screen at scroll 0: stay fully visible.
    setMode(reduceMotion || pageTop < window.innerHeight * 0.9 ? "pinned" : "scrub");
  }, [reduceMotion]);

  // Progress runs 0 -> 1 while the element's top travels from the viewport bottom up to
  // `end`. Larger delay => ends higher up => later items in a group finish later (stagger).
  const end = Math.max(30, 68 - delay / 10);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", `start ${end}%`],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [SLIDE_PX, 0]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={mode === "scrub" ? { opacity, y } : undefined}
    >
      {children}
    </motion.div>
  );
}
