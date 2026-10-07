import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function GradeCardActions() {
  const { dict } = useLanguage();

  return (
    <div className="mt-auto flex items-center border-t border-surface-border pt-4">
      <Link
        href="/contact"
        className="inline-flex min-h-11 w-full items-center justify-center whitespace-nowrap rounded-md border border-brand-500 bg-brand-500 px-4 py-1.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-brand-400 hover:bg-brand-400 lg:min-h-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-700"
      >
        {dict.grades.requestQuote}
      </Link>
    </div>
  );
}
