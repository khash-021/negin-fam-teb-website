"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { phoneLinks, emailLink } from "@/data/contact";

const PHONE_DIGITS_PATTERN = /^[0-9۰-۹]{8,}$/;

type FormValues = {
  name: string;
  phone: string;
  company: string;
  message: string;
};

type FieldErrors = Partial<Record<"name" | "phone" | "message", string>>;

const inputClasses =
  "w-full rounded-md border border-surface-border bg-surface-900 px-4 py-2.5 text-sm text-ink-50 placeholder:text-ink-400 transition-colors duration-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500";
const invalidInputClasses = "border-brand-500 focus:border-brand-500 focus:ring-brand-500";
const labelClasses = "text-sm font-medium text-ink-200";

export default function ContactPage() {
  const { dict } = useLanguage();

  const [values, setValues] = useState<FormValues>({
    name: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (field === "name" || field === "phone" || field === "message") {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function validate(current: FormValues): FieldErrors {
    const next: FieldErrors = {};
    if (!current.name.trim()) {
      next.name = dict.contactPage.form.errorRequired;
    }
    const phoneDigitsOnly = current.phone.trim().replace(/[\s-]/g, "");
    if (!phoneDigitsOnly) {
      next.phone = dict.contactPage.form.errorRequired;
    } else if (!PHONE_DIGITS_PATTERN.test(phoneDigitsOnly)) {
      next.phone = dict.contactPage.form.errorPhone;
    }
    if (!current.message.trim()) {
      next.message = dict.contactPage.form.errorRequired;
    }
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("submitting");

    // Placeholder submit handler — no email backend wired up yet.
    // When the real backend exists (e.g. an API route sending via SMTP/nodemailer),
    // replace this simulated delay with a fetch("/api/contact", { method: "POST", body: ... })
    // call and branch on its response instead of always resolving to "success".
    await new Promise((resolve) => setTimeout(resolve, 700));

    setStatus("success");
  }

  function resetForm() {
    setValues({
      name: "",
      phone: "",
      company: "",
      message: "",
    });
    setErrors({});
    setStatus("idle");
  }

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden border-b border-surface-border bg-surface-950">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50" />
          <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
          <Container className="relative py-10 md:py-12">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
                {dict.nav.contact}
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink-50 md:text-4xl">
                {dict.contactPage.title}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-ink-400 md:text-base">
                {dict.contactPage.intro}
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-surface-900">
          <Container className="py-16 md:py-20">
            <div className="mx-auto flex max-w-xl flex-col gap-8">
              <div className="rounded-xl border border-surface-border bg-surface-800 p-6 shadow-card sm:p-7">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-200">
                  {dict.contactPage.infoTitle}
                </h2>
                <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                      {dict.footer.tehranOfficeLabel}
                    </dt>
                    <dd className="mt-1.5 text-sm text-ink-300">{dict.footer.tehranAddress}</dd>
                    <dd className="mt-1">
                      <a
                        href={phoneLinks.tehran}
                        dir="ltr"
                        className="inline-block text-sm text-ink-300 transition-colors hover:text-brand-400"
                      >
                        {dict.footer.tehranPhone}
                      </a>
                    </dd>
                    <dt className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-400">
                      {dict.contactPage.hoursTitle}
                    </dt>
                    <dd className="mt-1.5 flex flex-col gap-0.5 text-sm text-ink-300">
                      {dict.contactPage.tehranHoursLines.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                      {dict.footer.maraghehFactoryLabel}
                    </dt>
                    <dd className="mt-1.5 text-sm text-ink-300">{dict.footer.maraghehAddress}</dd>
                    <dd className="mt-1">
                      <a
                        href={phoneLinks.maragheh}
                        dir="ltr"
                        className="inline-block text-sm text-ink-300 transition-colors hover:text-brand-400"
                      >
                        {dict.footer.maraghehPhone}
                      </a>
                    </dd>
                    <dt className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-400">
                      {dict.contactPage.hoursTitle}
                    </dt>
                    <dd className="mt-1.5 flex flex-col gap-0.5 text-sm text-ink-300">
                      {dict.contactPage.maraghehHoursLines.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                      {dict.footer.emailLabel}
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href={emailLink}
                        dir="ltr"
                        className="inline-block text-sm text-ink-300 transition-colors hover:text-brand-400"
                      >
                        {dict.footer.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-xl border border-surface-border bg-surface-800 p-6 shadow-card sm:p-8">
                {status === "success" ? (
                  <div className="flex flex-col items-start gap-4 py-4 text-start">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/10 text-brand-400 ring-1 ring-inset ring-brand-500/25">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold text-ink-50">
                        {dict.contactPage.form.successTitle}
                      </h2>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
                        {dict.contactPage.form.successBody}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-surface-borderStrong px-4 py-2 text-sm font-medium text-ink-200 transition-colors duration-200 hover:border-brand-500/50 hover:text-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-800"
                    >
                      {dict.contactPage.form.sendAnother}
                    </button>
                  </div>
                ) : (
                  <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
                    <div>
                      <h2 className="text-lg font-semibold text-ink-50">
                        {dict.contactPage.formTitle}
                      </h2>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
                        {dict.contactPage.formIntro}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className={labelClasses} htmlFor="contact-name">
                        {dict.contactPage.form.nameLabel}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={values.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder={dict.contactPage.form.namePlaceholder}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        className={`${inputClasses} ${errors.name ? invalidInputClasses : ""}`}
                      />
                      {errors.name && (
                        <p id="contact-name-error" className="text-xs text-brand-300">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className={labelClasses} htmlFor="contact-phone">
                        {dict.contactPage.form.phoneLabel}
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        dir="ltr"
                        value={values.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder={dict.contactPage.form.phonePlaceholder}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                        className={`${inputClasses} text-start ${errors.phone ? invalidInputClasses : ""}`}
                      />
                      {errors.phone && (
                        <p id="contact-phone-error" className="text-xs text-brand-300">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className={labelClasses} htmlFor="contact-company">
                        {dict.contactPage.form.companyLabel}{" "}
                        <span className="text-xs font-normal text-ink-400">
                          ({dict.contactPage.form.optionalTag})
                        </span>
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={values.company}
                        onChange={(e) => updateField("company", e.target.value)}
                        className={inputClasses}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className={labelClasses} htmlFor="contact-message">
                        {dict.contactPage.form.messageLabel}
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        value={values.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        placeholder={dict.contactPage.form.messagePlaceholder}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "contact-message-error" : undefined}
                        className={`${inputClasses} resize-none ${errors.message ? invalidInputClasses : ""}`}
                      />
                      {errors.message && (
                        <p id="contact-message-error" className="text-xs text-brand-300">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="mt-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-glow-red transition-all duration-200 hover:bg-brand-400 hover:shadow-glow-red-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "submitting"
                        ? dict.contactPage.form.submitting
                        : dict.contactPage.form.submit}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
