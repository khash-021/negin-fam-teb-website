import type { Locale } from "./types";

const PERSIAN_DIGITS = "۰۱۲۳۴۵۶۷۸۹";

export function localizeDigits(value: string, locale: Locale): string {
  if (locale !== "fa") return value;
  return value.replace(/\d/g, (d) => PERSIAN_DIGITS[Number(d)]).replace(/%/g, "٪");
}
