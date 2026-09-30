"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function PendingTag({ className = "" }: { className?: string }) {
  const { dict } = useLanguage();

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm border border-dashed border-surface-borderStrong px-1.5 py-0.5 text-[11px] font-semibold text-ink-300 ${className}`}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full border border-ink-300" />
      {dict.common.pendingVerification}
    </span>
  );
}
