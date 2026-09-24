"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dictionary, type Dictionary } from "./dictionary";
import { DEFAULT_LOCALE, type Locale } from "./types";

const STORAGE_KEY = "nft-locale";

type LanguageContextValue = {
  locale: Locale;
  dict: Dictionary;
  dir: "rtl" | "ltr";
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function applyDocumentLocale(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "fa" || stored === "en") {
      setLocaleState(stored);
    }
    setResolved(true);
  }, []);

  // Wait for the stored locale before touching <html>, so the pre-paint script's
  // lang/dir isn't reset to the default mid-hydration. The pending attribute keeps
  // the page hidden until the stored locale's content has actually rendered.
  useEffect(() => {
    if (!resolved) return;
    applyDocumentLocale(locale);
    document.documentElement.removeAttribute("data-locale-pending");
  }, [locale, resolved]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "fa" ? "en" : "fa");
  }, [locale, setLocale]);

  const value: LanguageContextValue = {
    locale,
    dict: dictionary[locale],
    dir: locale === "fa" ? "rtl" : "ltr",
    setLocale,
    toggleLocale,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
