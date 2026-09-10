import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { noFlashScript } from "@/lib/i18n/no-flash-script";
import { dictionary } from "@/lib/i18n/dictionary";
import "./globals.css";

const vazirmatn = localFont({
  src: "./fonts/Vazirmatn-Variable.woff2",
  variable: "--font-vazirmatn",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: dictionary.fa.meta.title,
  description: dictionary.fa.meta.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body>
        <Script
          id="nft-no-flash-locale"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: noFlashScript }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
