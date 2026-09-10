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
  };
  facility: {
    eyebrow: string;
    title: string;
    body: string;
    ctaAbout: string;
    ctaMedia: string;
    imageAlt: string;
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
  };
  comingSoon: {
    title: string;
    body: string;
    backHome: string;
  };
  common: {
    placeholderImage: string;
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
      media: "رسانه",
      shop: "فروشگاه",
      contact: "تماس با ما",
      languageSwitch: "EN",
    },
    hero: {
      eyebrow: "تولیدکننده اتانول صنعتی",
      name: "نگین فام طب",
      tagline:
        "تولید، بسته‌بندی و تأمین اتانول با خلوص و دقت صنعتی — از مراغه تا سراسر ایران.",
      ctaPrimary: "مشاهده محصولات",
      ctaSecondary: "درخواست تماس",
    },
    intro: {
      title: "چه می‌کنیم",
      body: "نگین فام طب اتانول را از تولید تا تحویل تحت یک سقف مدیریت می‌کند: تولید در مقیاس صنعتی، بسته‌بندی استاندارد در کارتن، و تأمین فله با تانکر برای مصرف‌کنندگان صنعتی و تجاری.",
      points: [
        { title: "تولید", desc: "خط تولید صنعتی در مراغه با ظرفیت پیوسته." },
        { title: "بسته‌بندی", desc: "بطری‌های استاندارد در کارتن‌های ۱۲ عددی." },
        { title: "تأمین فله", desc: "تحویل با تانکر برای مصارف صنعتی حجیم." },
      ],
    },
    grades: {
      title: "درجه‌های اتانول",
      subtitle: "سه درجه خلوص، متناسب با نیاز شما.",
      items: {
        "70": {
          title: "اتانول ۷۰٪",
          desc: "مناسب ضدعفونی و مصارف عمومی.",
          cta: "مشاهده جزئیات",
        },
        "96": {
          title: "اتانول ۹۶٪",
          desc: "مناسب مصارف صنعتی و تجاری.",
          cta: "مشاهده جزئیات",
        },
        "998": {
          title: "اتانول ۹۹.۸٪",
          desc: "خلوص بالا برای کاربردهای صنعتی حساس.",
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
        { title: "خلوص و کیفیت", desc: "کنترل کیفیت در هر مرحله تولید، مطابق استاندارد." },
        { title: "ظرفیت تولید", desc: "خط تولید پیوسته در مراغه، آماده سفارش‌های حجیم." },
        { title: "تأمین پایدار", desc: "زنجیره تأمین بدون وقفه برای مشتریان صنعتی." },
        { title: "پشتیبانی مستقیم", desc: "ارتباط مستقیم با تیم فروش در تهران و مراغه." },
      ],
    },
    facility: {
      eyebrow: "کارخانه",
      title: "کارخانه مراغه",
      body: "خط تولید نگین فام طب در مراغه، آذربایجان‌شرقی، با ظرفیت تولید پیوسته فعالیت می‌کند.",
      ctaAbout: "بیشتر بدانید",
      ctaMedia: "مشاهده تصاویر",
      imageAlt: "نمای کارخانه مراغه (به‌زودی)",
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
    },
    comingSoon: {
      title: "به‌زودی",
      body: "این صفحه در حال ساخت است.",
      backHome: "بازگشت به خانه",
    },
    common: {
      placeholderImage: "تصویر جایگزین — عکس واقعی بعداً اضافه می‌شود",
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
        "Ethanol production, packaging, and bulk supply — engineered for purity and consistency, from Maragheh to across Iran.",
      ctaPrimary: "View Products",
      ctaSecondary: "Contact Us",
    },
    intro: {
      title: "What We Do",
      body: "Negin Fam Teb manages ethanol from production to delivery under one roof: industrial-scale manufacturing, standardized carton packaging, and bulk tanker supply for industrial and commercial buyers.",
      points: [
        { title: "Manufacturing", desc: "Continuous industrial production line in Maragheh." },
        { title: "Packaging", desc: "Standard bottles in 12-unit cartons." },
        { title: "Bulk Supply", desc: "Tanker delivery for high-volume industrial demand." },
      ],
    },
    grades: {
      title: "Ethanol Grades",
      subtitle: "Three purity grades, matched to your requirement.",
      items: {
        "70": {
          title: "Ethanol 70%",
          desc: "Suited for disinfection and general use.",
          cta: "View Details",
        },
        "96": {
          title: "Ethanol 96%",
          desc: "Suited for industrial and commercial use.",
          cta: "View Details",
        },
        "998": {
          title: "Ethanol 99.8%",
          desc: "High purity for sensitive industrial applications.",
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
    },
    facility: {
      eyebrow: "Facility",
      title: "Maragheh Facility",
      body: "Our production line in Maragheh, East Azerbaijan, operates at continuous industrial capacity.",
      ctaAbout: "Learn More",
      ctaMedia: "View Media",
      imageAlt: "Maragheh facility view (coming soon)",
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
    },
    comingSoon: {
      title: "Coming Soon",
      body: "This page is under construction.",
      backHome: "Back to Home",
    },
    common: {
      placeholderImage: "Placeholder image — real photo to be added",
    },
  },
};
