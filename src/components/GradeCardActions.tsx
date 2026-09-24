import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const base =
  "inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md border px-4 py-1.5 text-sm font-semibold transition-colors duration-200 lg:min-h-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-700";

export function GradeCardActions() {
  const { dict } = useLanguage();

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-surface-border pt-4">
      <Link
        href="/contact"
        className={`${base} border-brand-500 bg-brand-500 text-white hover:border-brand-400 hover:bg-brand-400`}
      >
        {dict.grades.orderNow}
      </Link>
      <Link
        href="/contact"
        className={`${base} border-brand-500 text-brand-300 hover:bg-brand-500/10`}
      >
        {dict.ctaBand.ctaBulk}
      </Link>
    </div>
  );
}
