import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white shadow-glow-red hover:bg-brand-400 hover:shadow-glow-red-lg focus-visible:ring-brand-400",
  secondary:
    "border-2 border-brand-500 text-brand-400 hover:bg-brand-500/10 hover:text-brand-300 focus-visible:ring-brand-400",
  ghost:
    "border border-surface-border text-ink-200 hover:border-ink-400 hover:bg-surface-700 focus-visible:ring-ink-400",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 ${variantClasses[variant]} ${className}`}
    >
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="h-4 w-4 rtl:-scale-x-100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
