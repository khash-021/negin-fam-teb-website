"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

type NavKey = "about" | "products" | "media" | "shop" | "contact";

export function ComingSoon({ navKey }: { navKey: NavKey }) {
  const { dict } = useLanguage();
  const pageTitle = dict.nav[navKey];

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-surface-border bg-surface-950">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50" />
          <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
          <Container className="relative flex flex-col items-start gap-4 py-24 md:py-32">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              {pageTitle}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-ink-50 md:text-5xl">
              {dict.comingSoon.title}
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-ink-400 md:text-base">
              {dict.comingSoon.body}
            </p>
            <Button href="/" variant="ghost" className="mt-4">
              {dict.comingSoon.backHome}
            </Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
