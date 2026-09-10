"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const { dict } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { href: "/", label: dict.nav.home },
    { href: "/about", label: dict.nav.about },
    { href: "/products", label: dict.nav.products },
    { href: "/media", label: dict.nav.media },
    { href: "/shop", label: dict.nav.shop },
    { href: "/contact", label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-surface-border bg-surface-950">
      <Container className="grid grid-cols-1 gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-mark.png"
              alt=""
              aria-hidden="true"
              width={72}
              height={72}
              className="h-8 w-8"
            />
            <p className="text-sm font-bold tracking-wide text-ink-50">{dict.hero.name}</p>
          </div>
          <p className="mt-3 max-w-sm text-sm text-ink-400">{dict.hero.tagline}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-500">
            {dict.footer.tehranOfficeLabel}
          </h3>
          <p className="mt-2 text-sm text-ink-300">{dict.footer.tehranAddress}</p>

          <h3 className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink-500">
            {dict.footer.maraghehFactoryLabel}
          </h3>
          <p className="mt-2 text-sm text-ink-300">{dict.footer.maraghehAddress}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-500">
            {dict.footer.navTitle}
          </h3>
          <ul className="mt-2 flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-300 transition-colors hover:text-brand-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink-500">
            {dict.footer.langTitle}
          </h3>
          <div className="mt-2">
            <LanguageSwitcher />
          </div>
        </div>
      </Container>

      <div className="border-t border-surface-border">
        <Container className="py-5">
          <p className="text-xs text-ink-500">
            {dict.footer.rights.replace("{year}", String(year))}
          </p>
        </Container>
      </div>
    </footer>
  );
}
