"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { toggleLocale, dict } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={dict.footer.langTitle}
      className={`inline-flex h-9 min-w-11 items-center justify-center rounded-md border border-surface-border px-3 text-xs font-semibold uppercase tracking-wide text-ink-300 transition-colors duration-200 hover:border-brand-500 hover:text-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 ${className}`}
    >
      {dict.nav.languageSwitch}
    </button>
  );
}
