"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PendingTag } from "@/components/PendingTag";

const badgeIcons = [
  <path key="factory" d="M3 21V10l6 4v-4l6 4V5h4v16H3z" strokeLinecap="round" strokeLinejoin="round" />,
  <g key="health" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
    <path d="M9 12l2 2 4-4" />
  </g>,
  <path key="flask" d="M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3" strokeLinecap="round" strokeLinejoin="round" />,
  <g key="drop" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z" />
    <path d="M9.5 14l2 2 3-3.5" />
  </g>,
];

export function ProofStrip() {
  const { dict } = useLanguage();

  return (
    <section className="border-b border-surface-border bg-surface-900">
      <Container className="py-8 md:py-10">
        <Reveal>
          <dl className="grid grid-cols-3 divide-x divide-surface-border rtl:divide-x-reverse">
            {dict.proof.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col px-2 text-center sm:px-6">
                <dt className="order-2 mt-1 text-xs text-ink-300 sm:text-sm">{stat.label}</dt>
                <dd className="order-1 text-xl font-extrabold tracking-tight text-brand-400 sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-8 grid w-full grid-cols-1 justify-items-center gap-x-6 gap-y-5 border-t border-surface-border pt-8 min-[480px]:grid-cols-2 lg:grid-cols-4">
            {dict.proof.badges.map((badge, i) => (
              <li key={badge.label} className="flex w-full max-w-[16rem] items-center gap-3 min-[480px]:w-auto min-[480px]:max-w-none">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ring-1 ring-inset ${
                    badge.pending
                      ? "bg-surface-800 text-ink-300 ring-surface-borderStrong"
                      : "bg-brand-500/10 text-brand-400 ring-brand-500/25"
                  }`}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.75">
                    {badgeIcons[i]}
                  </svg>
                </span>
                <span className="flex flex-col items-start gap-1">
                  <span className={`text-sm font-medium leading-snug ${badge.pending ? "text-ink-300" : "text-ink-200"}`}>
                    {badge.label}
                  </span>
                  {badge.pending && <PendingTag />}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
