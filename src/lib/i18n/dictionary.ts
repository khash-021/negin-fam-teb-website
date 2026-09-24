import type { Locale } from "./types";

export type GradeId = "70" | "96" | "998";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    products: string;
    media: string;
    shop: string;
    contact: string;
    languageSwitch: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  intro: {
    title: string;
    body: string;
    points: { title: string; desc: string }[];
  };
  grades: {
    title: string;
    subtitle: string;
    items: Record<GradeId, { title: string; desc: string; cta: string }>;
    orderNow: string;
  };
  productsBanner: {
    title: string;
    cta: string;
  };
  why: {
    title: string;
    points: { title: string; desc: string }[];
    placeholderTag: string;
    placeholders: { title: string; note: string }[];
  };
  facility: {
    eyebrow: string;
    title: string;
    body: string;
    ctaAbout: string;
    ctaMedia: string;
    imageAlt: string;
    slideAlts: string[];
    slideshowLabel: string;
    prev: string;
    next: string;
    goToSlide: string;
    pause: string;
    play: string;
  };
  ctaBand: {
    title: string;
    body: string;
    ctaCartons: string;
    ctaBulk: string;
  };
  footer: {
    tehranOfficeLabel: string;
    tehranAddress: string;
    maraghehFactoryLabel: string;
    maraghehAddress: string;
    navTitle: string;
    langTitle: string;
    rights: string;
    blurb: string;
  };
  comingSoon: {
    title: string;
    body: string;
    backHome: string;
  };
  contactPage: {
    title: string;
    intro: string;
    infoTitle: string;
    phoneLabel: string;
    phonePlaceholder: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      subjectLabel: string;
      subjectOptions: { value: string; label: string }[];
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successBody: string;
      sendAnother: string;
      errorRequired: string;
      errorEmail: string;
    };
  };
  common: {
    placeholderImage: string;
    skipToContent: string;
  };
};

export const dictionary: Record<Locale, Dictionary> = {
  fa: {
    meta: {
      title: "نگین فام طب | تولیدکننده اتانول صنعتی",
      description:
        "تولید، بسته‌بندی و تأمین اتانول ۷۰٪، ۹۶٪ و ۹۹.۸٪ — کارخانه مراغه، دفتر تهران.",
    },
    nav: {
      home: "خانه",
      about: "درباره ما",
      products: "محصولات",
      media: "گالری",
      shop: "فروشگاه",
      contact: "تماس با ما",
      languageSwitch: "EN",
    },
    hero: {
      eyebrow: "تولیدکننده اتانول صنعتی",
      name: "نگین فام طب",
      tagline:
        "نامی معتبر در اتانول صنعتی ایران — تعیین‌کننده استاندارد خلوص، دقت و ظرفیت.",
      ctaPrimary: "مشاهده محصولات",
      ctaSecondary: "درخواست تماس",
    },
    intro: {
      title: "چه می‌کنیم",
      body: "تمام مراحل تولید اتانول را خودمان انجام می‌دهیم — از تولید تا بسته‌بندی و تحویل، همه زیر نظر مستقیم ما.",
      points: [
        { title: "تولید", desc: "تولید در مقیاس صنعتی، با خط تولید پیوسته در مراغه." },
        { title: "بسته‌بندی", desc: "بسته‌بندی استاندارد و یکدست — کارتن‌های ۱۲ بطری، آماده ارسال." },
        { title: "تأمین فله", desc: "تحویل با تانکر، متناسب با نیاز صنعتی حجیم، در سراسر ایران." },
      ],
    },
    grades: {
      title: "درجه‌های اتانول",
      subtitle: "سه درجه خلوص، متناسب با نیاز شما.",
      items: {
        "70": {
          title: "اتانول ۷۰٪",
          desc: "گزینه‌ای مطمئن برای ضدعفونی و پاک‌سازی سطوح و تجهیزات، مناسب برای مصارف بهداشتی، تجاری، خانگی و عمومی.",
          cta: "مشاهده جزئیات",
        },
        "96": {
          title: "اتانول ۹۶٪",
          desc: "طراحی‌شده برای کاربردهای صنعتی و تجاری، مناسب تولید، پاک‌سازی و فرآوری در طیف گسترده‌ای از صنایع.",
          cta: "مشاهده جزئیات",
        },
        "998": {
          title: "اتانول ۹۹.۸٪",
          desc: "بالاترین درجه خلوص ما، مناسب برای مصارف صنعتی، آزمایشگاهی و دارویی حساس و فرآیندهای فنی دقیق.",
          cta: "مشاهده جزئیات",
        },
      },
      orderNow: "سفارش آنلاین",
    },
    productsBanner: {
      title: "خرید کارتنی آنلاین — ارسال به سراسر ایران.",
      cta: "ورود به فروشگاه",
    },
    why: {
      title: "چرا نگین فام طب",
      points: [
        { title: "خلوص و کیفیت", desc: "کنترل کیفیت در تمام مراحل تولید، مطابق استانداردهای صنعت." },
        { title: "ظرفیت تولید", desc: "خط تولید پیوسته در مراغه، آماده سفارش‌های حجیم." },
        { title: "تأمین پایدار", desc: "زنجیره تأمین بدون وقفه برای مشتریان صنعتی." },
        { title: "پشتیبانی مستقیم", desc: "ارتباط مستقیم با تیم فروش در تهران و مراغه." },
      ],
      placeholderTag: "نیازمند تکمیل",
      placeholders: [
        { title: "دارای مجوز و ثبت رسمی", note: "[جای‌نگه‌دار: جزئیات مجوز و ثبت شرکت را اضافه کنید — وضعیت ثبت رسمی، مجوزهای صنعتی مرتبط]" },
        { title: "استانداردها و گواهینامه‌ها", note: "[جای‌نگه‌دار: گواهینامه‌های کیفیت یا ایمنی، یا انطباق با استانداردهایی مثل ISO یا وزارت بهداشت را در صورت وجود اضافه کنید]" },
        { title: "سابقه فعالیت", note: "[جای‌نگه‌دار: مدت زمان فعالیت شرکت را اضافه کنید]" },
        { title: "آمار تولید", note: "[جای‌نگه‌دار: ارقام واقعی ظرفیت تولید را در صورت تمایل به اشتراک‌گذاری اضافه کنید]" },
      ],
    },
    facility: {
      eyebrow: "کارخانه",
      title: "کارخانه مراغه",
      body: "خط تولید نگین فام طب در مراغه، آذربایجان شرقی، با ظرفیت پیوسته در حال فعالیت است.",
      ctaAbout: "بیشتر بدانید",
      ctaMedia: "مشاهده گالری",
      imageAlt: "نمای بیرونی کارخانه نگین فام طب در مراغه",
      slideAlts: [
        "نمای بیرونی کارخانه نگین فام طب در مراغه",
        "آزمایشگاه نگین فام طب؛ ظروف و تجهیزات شیشه‌ای آزمایشگاهی",
        "آزمایشگاه نگین فام طب؛ قفسه‌های نمونه و بالن‌های حجمی",
        "بالن‌های حجمی حاوی نمونه روی قفسه آزمایشگاه",
      ],
      slideshowLabel: "تصاویر کارخانه و آزمایشگاه",
      prev: "اسلاید قبلی",
      next: "اسلاید بعدی",
      goToSlide: "رفتن به اسلاید",
      pause: "توقف نمایش خودکار",
      play: "پخش خودکار",
    },
    ctaBand: {
      title: "آماده سفارش هستید؟",
      body: "برای خرید کارتنی به فروشگاه مراجعه کنید یا برای سفارش فله با ما تماس بگیرید.",
      ctaCartons: "سفارش کارتنی",
      ctaBulk: "استعلام فله",
    },
    footer: {
      tehranOfficeLabel: "دفتر تهران",
      tehranAddress: "تهران، ایران — آدرس دقیق به‌زودی",
      maraghehFactoryLabel: "کارخانه مراغه",
      maraghehAddress: "مراغه، آذربایجان‌شرقی — آدرس دقیق به‌زودی",
      navTitle: "دسترسی سریع",
      langTitle: "زبان",
      rights: "© {year} نگین فام طب. تمامی حقوق محفوظ است.",
      blurb: "نگین فام طب تولیدکننده و تأمین‌کننده اتانول در سراسر ایران است، از فروش کارتنی تا سفارش‌های صنعتی فله.",
    },
    comingSoon: {
      title: "به‌زودی",
      body: "این صفحه در حال ساخت است.",
      backHome: "بازگشت به خانه",
    },
    contactPage: {
      title: "تماس با ما",
      intro: "برای درخواست‌های عمومی یا سفارش‌های فله/تانکری با ما در تماس باشید.",
      infoTitle: "اطلاعات تماس",
      phoneLabel: "تلفن",
      phonePlaceholder: "شماره تماس به‌زودی",
      form: {
        nameLabel: "نام",
        namePlaceholder: "نام و نام خانوادگی",
        emailLabel: "ایمیل",
        emailPlaceholder: "you@example.com",
        phoneLabel: "تلفن (اختیاری)",
        phonePlaceholder: "۰912xxxxxxx",
        subjectLabel: "موضوع",
        subjectOptions: [
          { value: "general", label: "درخواست عمومی" },
          { value: "bulk", label: "سفارش فله/تانکری" },
          { value: "product", label: "سوال درباره محصول" },
        ],
        messageLabel: "پیام",
        messagePlaceholder: "پیام خود را بنویسید...",
        submit: "ارسال پیام",
        submitting: "در حال ارسال...",
        successTitle: "پیام شما ارسال شد",
        successBody: "با تشکر — به‌زودی با شما تماس می‌گیریم.",
        sendAnother: "ارسال پیام دیگر",
        errorRequired: "این فیلد الزامی است",
        errorEmail: "یک ایمیل معتبر وارد کنید",
      },
    },
    common: {
      placeholderImage: "تصویر جایگزین — عکس واقعی بعداً اضافه می‌شود",
      skipToContent: "پرش به محتوای اصلی",
    },
  },
  en: {
    meta: {
      title: "Negin Fam Teb | Industrial Ethanol Manufacturer",
      description:
        "Manufacturing, packaging, and bulk supply of 70%, 96%, and 99.8% ethanol — Maragheh factory, Tehran office.",
    },
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      media: "Media",
      shop: "Shop",
      contact: "Contact",
      languageSwitch: "فا",
    },
    hero: {
      eyebrow: "Industrial Ethanol Manufacturer",
      name: "Negin Fam Teb",
      tagline:
        "Iran's trusted name in industrial ethanol — setting the standard for purity, precision, and scale.",
      ctaPrimary: "View Products",
      ctaSecondary: "Contact Us",
    },
    intro: {
      title: "What We Do",
      body: "We handle every stage of ethanol production ourselves — from raw manufacturing to packaging to delivery, in-house and under our own control.",
      points: [
        { title: "Manufacturing", desc: "Industrial-scale production, running continuously in Maragheh." },
        { title: "Packaging", desc: "Consistent, standardized packaging — 12 bottles per carton, ready to ship." },
        { title: "Bulk Supply", desc: "Tanker delivery built for high-volume industrial demand, wherever you are in Iran." },
      ],
    },
    grades: {
      title: "Ethanol Grades",
      subtitle: "Three purity grades, matched to your requirement.",
      items: {
        "70": {
          title: "Ethanol 70%",
          desc: "A reliable choice for disinfection and surface cleaning, widely used across healthcare, commercial, household, and general-purpose settings.",
          cta: "View Details",
        },
        "96": {
          title: "Ethanol 96%",
          desc: "Built for industrial and commercial use, supporting manufacturing, cleaning, and processing across a wide range of sectors.",
          cta: "View Details",
        },
        "998": {
          title: "Ethanol 99.8%",
          desc: "Our highest-purity grade, suited for demanding industrial, laboratory, and pharmaceutical applications requiring precision and consistency.",
          cta: "View Details",
        },
      },
      orderNow: "Order Now",
    },
    productsBanner: {
      title: "Order cartons online — shipped across Iran.",
      cta: "Shop Now",
    },
    why: {
      title: "Why Negin Fam Teb",
      points: [
        { title: "Purity & Quality", desc: "Quality control at every stage, held to standard." },
        { title: "Production Capacity", desc: "Continuous production line in Maragheh, ready for volume orders." },
        { title: "Reliable Supply", desc: "Uninterrupted supply chain for industrial buyers." },
        { title: "Direct Support", desc: "Direct line to our sales team in Tehran and Maragheh." },
      ],
      placeholderTag: "TODO",
      placeholders: [
        { title: "Licensed & Registered", note: "[PLACEHOLDER: Add licensing/registration details — company registration status, relevant industry licenses]" },
        { title: "Industry Standards & Certifications", note: "[PLACEHOLDER: Add any quality/safety certifications or standards compliance — e.g. ISO, GMP, health ministry licensing, whatever actually applies]" },
        { title: "Years in Operation", note: "[PLACEHOLDER: Add how long the company has been operating]" },
        { title: "Production Output", note: "[PLACEHOLDER: Add real production volume/capacity figures if we want to share them]" },
      ],
    },
    facility: {
      eyebrow: "Facility",
      title: "Maragheh Facility",
      body: "Our production line in Maragheh, East Azerbaijan, operates at continuous industrial capacity.",
      ctaAbout: "Learn More",
      ctaMedia: "View Media",
      imageAlt: "Exterior view of the Negin Fam Teb factory in Maragheh",
      slideAlts: [
        "Exterior view of the Negin Fam Teb factory in Maragheh",
        "Negin Fam Teb laboratory with glassware and lab equipment",
        "Laboratory shelves with volumetric flasks and sample bottles",
        "Volumetric flasks with samples on a laboratory shelf",
      ],
      slideshowLabel: "Factory and laboratory photos",
      prev: "Previous slide",
      next: "Next slide",
      goToSlide: "Go to slide",
      pause: "Pause slideshow",
      play: "Play slideshow",
    },
    ctaBand: {
      title: "Ready to Order?",
      body: "Order cartons through our shop, or contact us for bulk tanker inquiries.",
      ctaCartons: "Order Cartons",
      ctaBulk: "Bulk Inquiry",
    },
    footer: {
      tehranOfficeLabel: "Tehran Office",
      tehranAddress: "Tehran, Iran — exact address coming soon",
      maraghehFactoryLabel: "Maragheh Factory",
      maraghehAddress: "Maragheh, East Azerbaijan — exact address coming soon",
      navTitle: "Quick Links",
      langTitle: "Language",
      rights: "© {year} Negin Fam Teb. All rights reserved.",
      blurb: "Negin Fam Teb manufactures and supplies ethanol across Iran, from cartoned retail to industrial bulk orders.",
    },
    comingSoon: {
      title: "Coming Soon",
      body: "This page is under construction.",
      backHome: "Back to Home",
    },
    contactPage: {
      title: "Contact",
      intro: "Reach out for general inquiries or bulk and tanker orders.",
      infoTitle: "Contact Information",
      phoneLabel: "Phone",
      phonePlaceholder: "Phone number coming soon",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Full name",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        phoneLabel: "Phone (optional)",
        phonePlaceholder: "+98 912 xxx xxxx",
        subjectLabel: "Subject",
        subjectOptions: [
          { value: "general", label: "General Inquiry" },
          { value: "bulk", label: "Bulk/Tanker Order" },
          { value: "product", label: "Product Question" },
        ],
        messageLabel: "Message",
        messagePlaceholder: "Write your message...",
        submit: "Send Message",
        submitting: "Sending...",
        successTitle: "Message sent",
        successBody: "Thanks — we'll be in touch soon.",
        sendAnother: "Send another message",
        errorRequired: "This field is required",
        errorEmail: "Enter a valid email address",
      },
    },
    common: {
      placeholderImage: "Placeholder image — real photo to be added",
      skipToContent: "Skip to main content",
    },
  },
};
