"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

/**
 * PHOTO SLOT — swap by replacing this component's usage with a real
 * <Image src="..." /> once photography/video is available. The dashed
 * border and label are intentional so these slots are easy to spot.
 */
export function ImagePlaceholder({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  const { dict } = useLanguage();

  return (
    <div
      className={`relative flex ${aspect} w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-dashed border-surface-borderStrong bg-surface-700 px-6 text-center ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-8 w-8 text-ink-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="4" width="18" height="16" rx="1.5" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M3 16l5-5 4 4 3-3 6 6" />
      </svg>
      <p className="text-xs font-medium uppercase tracking-wide text-ink-300">
        {label}
      </p>
      <p className="text-[11px] text-ink-500">{dict.common.placeholderImage}</p>
    </div>
  );
}
