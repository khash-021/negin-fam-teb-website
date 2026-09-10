"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const inputClasses =
  "w-full rounded-md border border-surface-border bg-surface-900 px-4 py-2.5 text-sm text-ink-50 placeholder:text-ink-500 transition-colors duration-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500";
const invalidInputClasses = "border-brand-500 focus:border-brand-500 focus:ring-brand-500";
const labelClasses = "text-sm font-medium text-ink-200";

export default function ContactPage() {
  const { dict } = useLanguage();
  const subjectOptions = dict.contactPage.form.subjectOptions;

  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    subject: subjectOptions[0]?.value ?? "general",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (field === "name" || field === "email" || field === "message") {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function validate(current: FormValues): FieldErrors {
    const next: FieldErrors = {};
    if (!current.name.trim()) {
      next.name = dict.contactPage.form.errorRequired;
    }
    if (!current.email.trim()) {
      next.email = dict.contactPage.form.errorRequired;
    } else if (!EMAIL_PATTERN.test(current.email.trim())) {
      next.email = dict.contactPage.form.errorEmail;
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
      email: "",
      phone: "",
      subject: subjectOptions[0]?.value ?? "general",
      message: "",
    });
    setErrors({});
    setStatus("idle");
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-surface-border bg-surface-950">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50" />
          <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
          <Container className="relative py-20 md:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              {dict.nav.contact}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-ink-50 md:text-5xl">
              {dict.contactPage.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-400 md:text-base">
              {dict.contactPage.intro}
            </p>
          </Container>
        </section>

        <section className="bg-surface-900">
          <Container className="py-16 md:py-20">
            <div className="mx-auto flex max-w-xl flex-col gap-8">
              <div className="rounded-xl border border-surface-border bg-surface-800 p-6 shadow-card sm:p-7">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-200">
                  {dict.contactPage.infoTitle}
                </h2>
                <dl className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                      {dict.footer.tehranOfficeLabel}
                    </dt>
                    <dd className="mt-1.5 text-sm text-ink-300">{dict.footer.tehranAddress}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                      {dict.contactPage.phoneLabel}
                    </dt>
                    <dd className="mt-1.5 text-sm text-ink-300">
                      {dict.contactPage.phonePlaceholder}
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
                        <p id="contact-name-error" className="text-xs text-brand-400">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className={labelClasses} htmlFor="contact-email">
                        {dict.contactPage.form.emailLabel}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={values.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder={dict.contactPage.form.emailPlaceholder}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                        className={`${inputClasses} ${errors.email ? invalidInputClasses : ""}`}
                      />
                      {errors.email && (
                        <p id="contact-email-error" className="text-xs text-brand-400">
                          {errors.email}
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
                        value={values.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder={dict.contactPage.form.phonePlaceholder}
                        className={inputClasses}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className={labelClasses} htmlFor="contact-subject">
                        {dict.contactPage.form.subjectLabel}
                      </label>
                      <div className="relative">
                        <select
                          id="contact-subject"
                          value={values.subject}
                          onChange={(e) => updateField("subject", e.target.value)}
                          className={`${inputClasses} appearance-none pe-10`}
                        >
                          {subjectOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
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
                        <p id="contact-message-error" className="text-xs text-brand-400">
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
