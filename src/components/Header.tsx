"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { dict } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: dict.nav.home },
    { href: "/about", label: dict.nav.about },
    { href: "/products", label: dict.nav.products },
    { href: "/media", label: dict.nav.media },
    { href: "/shop", label: dict.nav.shop },
    { href: "/contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-surface-900/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold tracking-wide text-ink-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 rounded"
        >
          <Image
            src="/logo-mark.png"
            alt=""
            aria-hidden="true"
            width={72}
            height={72}
            className="h-9 w-9"
            priority
          />
          <span>{dict.hero.name}</span>
        </Link>

        <nav aria-label={dict.footer.navTitle} className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-300 transition-colors hover:text-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={dict.footer.navTitle}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-surface-border text-ink-50 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-surface-border bg-surface-900 md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-md px-2 text-sm font-medium text-ink-300 hover:bg-surface-800 hover:text-brand-400"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-surface-border pt-4">
              <LanguageSwitcher />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
