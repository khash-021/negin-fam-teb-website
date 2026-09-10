import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function GradeCardActions() {
  const { dict } = useLanguage();

  return (
    <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-surface-border pt-5">
      <Link
        href="/shop"
        className="inline-flex items-center gap-1.5 rounded-md bg-brand-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-700"
      >
        {dict.grades.orderNow}
      </Link>
      <Link
        href="/contact"
        className="inline-flex items-center gap-1.5 rounded-md border border-surface-borderStrong px-3 py-1.5 text-xs font-medium text-ink-300 transition-colors duration-200 hover:border-brand-500/50 hover:text-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-700"
      >
        {dict.ctaBand.ctaBulk}
      </Link>
    </div>
  );
}
