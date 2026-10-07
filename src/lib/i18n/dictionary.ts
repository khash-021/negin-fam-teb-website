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
    items: Record<
      GradeId,
      {
        title: string;
        subtitle: string;
        desc: string;
        cta: string;
        badge: string;
        purity: string;
        appearance: string;
        packaging: string;
        use: string;
      }
    >;
    specLabels: {
      purity: string;
      formula: string;
      appearance: string;
      packaging: string;
      use: string;
    };
    chemicalFormula: string;
    requestQuote: string;
    notice: string;
  };
  productsCta: {
    title: string;
    body: string;
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
    cta: string;
  };
  footer: {
    tehranOfficeLabel: string;
    tehranAddress: string;
    tehranPhone: string;
    maraghehFactoryLabel: string;
    maraghehAddress: string;
    maraghehPhone: string;
    emailLabel: string;
    email: string;
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
    hoursTitle: string;
    tehranHoursLines: string[];
    maraghehHoursLines: string[];
    formTitle: string;
    formIntro: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      companyLabel: string;
      optionalTag: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successBody: string;
      sendAnother: string;
      errorRequired: string;
      errorPhone: string;
    };
  };
  about: {
    title: string;
    intro: string;
    productsTitle: string;
    productsParagraph1: string;
    productsParagraph2: string;
    badges: { title: string; subtitle: string }[];
    mission: { title: string; body: string };
    vision: { title: string; body: string };
    registrationTitle: string;
    registrationRows: { label: string; value: string; numeric?: boolean }[];
  };
  common: {
    placeholderImage: string;
    skipToContent: string;
    pendingVerification: string;
  };
  proof: {
    stats: { value: string; label: string }[];
    badges: { label: string; pending?: boolean }[];
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
          subtitle: "الکل اتیلیک طبی ۷۰ درصد (حجمی)",
          desc: "گزینه‌ای مطمئن برای ضدعفونی و پاک‌سازی سطوح و تجهیزات، مناسب برای مصارف بهداشتی، تجاری، خانگی و عمومی.",
          cta: "مشاهده جزئیات",
          badge: "محبوب",
          purity: "۷۰٪ حجمی",
          appearance: "مایع بی‌رنگ و شفاف",
          packaging: "بطری ۱ لیتری در کارتن ۱۲ عددی و فله",
          use: "ضدعفونی و مصارف بهداشتی",
        },
        "96": {
          title: "اتانول ۹۶٪",
          subtitle: "الکل اتیلیک طبی ۹۶ درصد (حجمی)",
          desc: "طراحی‌شده برای کاربردهای صنعتی و تجاری، مناسب تولید، پاک‌سازی و فرآوری در طیف گسترده‌ای از صنایع.",
          cta: "مشاهده جزئیات",
          badge: "پرفروش",
          purity: "۹۶٪ حجمی",
          appearance: "مایع بی‌رنگ و شفاف",
          packaging: "بطری ۱ لیتری در کارتن ۱۲ عددی و فله",
          use: "صنعتی و تجاری، تولید و پاک‌سازی",
        },
        "998": {
          title: "اتانول ۹۹.۸٪",
          subtitle: "الکل اتیلیک ۹۹/۸ درصد (مطلق)",
          desc: "بالاترین درجه خلوص ما، مناسب برای مصارف صنعتی، آزمایشگاهی و دارویی حساس و فرآیندهای فنی دقیق.",
          cta: "مشاهده جزئیات",
          badge: "خلوص بالا",
          purity: "۹۹.۸٪ (مطلق)",
          appearance: "مایع بی‌رنگ و شفاف",
          packaging: "بطری ۱ لیتری در کارتن ۱۲ عددی و فله",
          use: "آزمایشگاهی، دارویی و فنی دقیق",
        },
      },
      specLabels: {
        purity: "خلوص",
        formula: "فرمول شیمیایی",
        appearance: "ظاهر",
        packaging: "بسته‌بندی",
        use: "کاربرد",
      },
      chemicalFormula: "C₂H₅OH · CAS 64-17-5",
      requestQuote: "استعلام قیمت",
      notice: "مایع قابل اشتعال. دور از حرارت و شعله نگهداری شود.",
    },
    productsCta: {
      title: "به سفارش اختصاصی نیاز دارید؟",
      body: "برای سفارش فله‌ای، قراردادهای صنعتی یا محصول با مشخصات فنی خاص با کارشناسان فروش ما تماس بگیرید.",
      cta: "تماس با کارشناسان فروش",
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
      body: "برای سفارش کارتنی یا فله با ما تماس بگیرید.",
      cta: "استعلام قیمت",
    },
    footer: {
      tehranOfficeLabel: "دفتر مرکزی تهران",
      tehranAddress: "تهران، خیابان استاد نجات‌اللهی (ویلا)، خیابان صارمی غربی، شماره ۴۴، طبقه ۳، واحد ۵",
      tehranPhone: "۰۲۱-۸۸۳۰۴۵۴۵",
      maraghehFactoryLabel: "کارخانه مراغه",
      maraghehAddress: "آذربایجان شرقی، مراغه، کیلومتر ۱۵ جاده مراغه-تهران، بعد از پلیس راه",
      maraghehPhone: "۰۴۱-۳۷۳۲۵۲۰۹",
      emailLabel: "ایمیل",
      email: "neginfamtebco@gmail.com",
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
      hoursTitle: "ساعات کاری",
      tehranHoursLines: ["شنبه تا چهارشنبه ۷:۰۰ - ۱۸:۰۰", "پنجشنبه ۷:۰۰ - ۱۳:۰۰", "جمعه تعطیل"],
      maraghehHoursLines: ["شنبه تا پنجشنبه: ۷ صبح تا ۶ شب"],
      formTitle: "فرم درخواست همکاری",
      formIntro: "فرم زیر را تکمیل کنید تا کارشناسان ما با شما تماس بگیرند.",
      form: {
        nameLabel: "نام و نام خانوادگی",
        namePlaceholder: "مثال: علی محمدی",
        phoneLabel: "شماره تماس",
        phonePlaceholder: "مثال: 09123456789",
        companyLabel: "نام شرکت / سازمان",
        optionalTag: "اختیاری",
        messageLabel: "درخواست شما",
        messagePlaceholder: "درخواست خود را به طور کامل شرح دهید. شامل نوع محصول، حجم مورد نیاز و...",
        submit: "ارسال درخواست",
        submitting: "در حال ارسال...",
        successTitle: "درخواست شما ارسال شد",
        successBody: "با تشکر — به‌زودی با شما تماس می‌گیریم.",
        sendAnother: "ارسال درخواست دیگر",
        errorRequired: "این فیلد الزامی است",
        errorPhone: "شماره تماس معتبر وارد کنید",
      },
    },
    about: {
      title: "نامی معتبر در صنعت الکل‌سازی ایران",
      intro:
        "در دل صنعت پویا و رو به رشد اتانول، نگین فام طب به عنوان یک نام آشنا و معتبر درخشیده است. از آغاز فعالیت، ما با تعهد به نوآوری و کیفیت، توانسته‌ایم جایگاهی برجسته در تولید اتانول‌های صنعتی، طبی و سوختی به دست آوریم.",
      productsTitle: "محصولات با کیفیت برای صنایع متنوع",
      productsParagraph1:
        "محصولات ما، که با دقت و مهارت تولید می‌شوند، نه تنها نیازهای متنوع صنایع دارویی، غذایی، آرایشی و بهداشتی را برآورده می‌کنند، بلکه در تقویت زیرساخت‌های صنعتی کشور نیز نقشی کلیدی ایفا می‌کنند. ما با افتخار اعلام می‌کنیم که محصولات نگین فام طب در سراسر ایران شناخته شده و مورد استفاده قرار می‌گیرند.",
      productsParagraph2:
        "این موفقیت را مدیون تیمی از متخصصان متعهد و فناوری‌های پیشرفته هستیم. ما در نگین فام طب، به دنبال ایجاد ارزش‌های پایدار برای مشتریان و جامعه‌ای هستیم که در آن فعالیت می‌کنیم، و همواره در جستجوی راه‌هایی برای بهبود و نوآوری در محصولات و خدمات خود هستیم.",
      badges: [
        { title: "کیفیت تضمین شده", subtitle: "استانداردهای دارویی و بهداشتی" },
        { title: "تیم متخصص", subtitle: "مهندسان و کارشناسان مجرب" },
      ],
      mission: {
        title: "ماموریت ما",
        body: "تامین اتانول با خلوص بالا و کیفیت تضمین‌شده برای صنایع دارویی، غذایی، آرایشی و بهداشتی کشور، با رعایت کامل استانداردهای ملی و بین‌المللی. ما متعهد به ارائه محصولاتی سالم، غیرخوراکی و فاقد متانول هستیم که سلامت جامعه را تضمین می‌کنند.",
      },
      vision: {
        title: "چشم‌انداز ما",
        body: "تبدیل شدن به برترین تولیدکننده اتانول در ایران و منطقه، با تمرکز بر نوآوری مستمر، توسعه فناوری‌های پیشرفته تولید، و ایجاد ارزش‌های پایدار برای مشتریان و جامعه. ما در جستجوی راه‌های جدید برای بهبود محصولات و خدمات خود هستیم.",
      },
      registrationTitle: "اطلاعات ثبت رسمی شرکت",
      registrationRows: [
        { label: "شماره ثبت", value: "۳۲۶۹", numeric: true },
        { label: "شناسه ملی", value: "۱۴۰۰۰۱۷۴۶۲۸", numeric: true },
        { label: "کد اقتصادی", value: "۴۱۱۴۱۸۸۴۵۴۹۳", numeric: true },
        { label: "نوع شرکت", value: "سهامی خاص" },
        { label: "نام تجاری", value: "الکل سهند مراغه" },
      ],
    },
    common: {
      placeholderImage: "تصویر جایگزین — عکس واقعی بعداً اضافه می‌شود",
      skipToContent: "پرش به محتوای اصلی",
      pendingVerification: "در انتظار تأیید",
    },
    proof: {
      stats: [
        { value: "۳", label: "درجه خلوص اتانول" },
        { value: "۱", label: "کارخانه در مراغه" },
      ],
      badges: [{ label: "دفتر تهران، کارخانه مراغه" }],
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
          subtitle: "Medical Ethyl Alcohol 70% (v/v)",
          desc: "A reliable choice for disinfection and surface cleaning, widely used across healthcare, commercial, household, and general-purpose settings.",
          cta: "View Details",
          badge: "Popular",
          purity: "70% v/v",
          appearance: "Colorless, clear liquid",
          packaging: "1-liter bottles in cartons of 12, and bulk",
          use: "Disinfection and hygiene",
        },
        "96": {
          title: "Ethanol 96%",
          subtitle: "Medical Ethyl Alcohol 96% (v/v)",
          desc: "Built for industrial and commercial use, supporting manufacturing, cleaning, and processing across a wide range of sectors.",
          cta: "View Details",
          badge: "Best Seller",
          purity: "96% v/v",
          appearance: "Colorless, clear liquid",
          packaging: "1-liter bottles in cartons of 12, and bulk",
          use: "Industrial and commercial, manufacturing and cleaning",
        },
        "998": {
          title: "Ethanol 99.8%",
          subtitle: "Ethyl Alcohol 99.8% (Absolute)",
          desc: "Our highest-purity grade, suited for demanding industrial, laboratory, and pharmaceutical applications requiring precision and consistency.",
          cta: "View Details",
          badge: "High Purity",
          purity: "99.8% (absolute)",
          appearance: "Colorless, clear liquid",
          packaging: "1-liter bottles in cartons of 12, and bulk",
          use: "Laboratory, pharmaceutical and precise technical use",
        },
      },
      specLabels: {
        purity: "Purity",
        formula: "Chemical formula",
        appearance: "Appearance",
        packaging: "Packaging",
        use: "Typical use",
      },
      chemicalFormula: "C₂H₅OH · CAS 64-17-5",
      requestQuote: "Request a Quote",
      notice: "Flammable liquid. Keep away from heat and open flame.",
    },
    productsCta: {
      title: "Need a custom order?",
      body: "For bulk orders, industrial contracts, or products with specific technical requirements, contact our sales team.",
      cta: "Contact our sales team",
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
      title: "Ready to order?",
      body: "Contact us for carton or bulk orders.",
      cta: "Request a Quote",
    },
    footer: {
      tehranOfficeLabel: "Tehran Head Office",
      tehranAddress: "Unit 5, 3rd Floor, No. 44, West Saremi St., Ostad Nejatollahi St., Tehran, Iran",
      tehranPhone: "021-88304545",
      maraghehFactoryLabel: "Maragheh Factory",
      maraghehAddress: "East Azerbaijan, Maragheh, 15th km of Maragheh-Tehran road, after the road police",
      maraghehPhone: "041-37325209",
      emailLabel: "Email",
      email: "neginfamtebco@gmail.com",
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
      hoursTitle: "Working hours",
      tehranHoursLines: ["Saturday to Wednesday 7:00 - 18:00", "Thursday 7:00 - 13:00", "Friday closed"],
      maraghehHoursLines: ["Saturday to Thursday: 7 a.m. to 6 p.m."],
      formTitle: "Collaboration Request Form",
      formIntro: "Complete the form below and our team will contact you.",
      form: {
        nameLabel: "Full name",
        namePlaceholder: "Example: Ali Mohammadi",
        phoneLabel: "Phone number",
        phonePlaceholder: "Example: 09123456789",
        companyLabel: "Company / organization",
        optionalTag: "Optional",
        messageLabel: "Your request",
        messagePlaceholder: "Describe your request in full. Include the product type, required volume, etc.",
        submit: "Send Request",
        submitting: "Sending...",
        successTitle: "Your request has been sent",
        successBody: "Thanks — we'll be in touch soon.",
        sendAnother: "Send another request",
        errorRequired: "This field is required",
        errorPhone: "Enter a valid phone number",
      },
    },
    about: {
      title: "A Trusted Name in Iran's Ethanol Industry",
      intro:
        "Negin Fam Teb is a familiar and trusted name in Iran's fast-growing ethanol industry. Since the start of our operations, our commitment to innovation and quality has earned us a leading position in producing industrial, medical, and fuel ethanol.",
      productsTitle: "Quality Products for Diverse Industries",
      productsParagraph1:
        "Our products are made with precision and skill. They meet the varied needs of the pharmaceutical, food, cosmetics, and hygiene industries, and they play a key part in strengthening Iran's industrial infrastructure. We are proud that Negin Fam Teb products are known and used across the country.",
      productsParagraph2:
        "We owe this success to a dedicated team of specialists and to advanced technology. At Negin Fam Teb, we aim to create lasting value for our customers and the community we serve, and we keep looking for ways to improve our products and services.",
      badges: [
        { title: "Guaranteed Quality", subtitle: "Pharmaceutical and health standards" },
        { title: "Expert Team", subtitle: "Experienced engineers and technical specialists" },
      ],
      mission: {
        title: "Our Mission",
        body: "To supply high-purity ethanol of guaranteed quality to Iran's pharmaceutical, food, cosmetics, and hygiene industries, in full compliance with national and international standards. We are committed to delivering products that are safe, non-consumable, and methanol-free, guaranteeing the health of the community.",
      },
      vision: {
        title: "Our Vision",
        body: "To become the top ethanol producer in Iran and the region, with a focus on continuous innovation, advanced production technology, and lasting value for our customers and community. We are always looking for new ways to improve our products and services.",
      },
      registrationTitle: "Official Company Registration",
      registrationRows: [
        { label: "Registration No.", value: "3269", numeric: true },
        { label: "National ID", value: "14000174628", numeric: true },
        { label: "Economic Code", value: "411418845493", numeric: true },
        { label: "Company Type", value: "Private Joint Stock Company" },
        { label: "Brand Name", value: "Sahand Maragheh Alcohol" },
      ],
    },
    common: {
      placeholderImage: "Placeholder image — real photo to be added",
      skipToContent: "Skip to main content",
      pendingVerification: "Pending Verification",
    },
    proof: {
      stats: [
        { value: "3", label: "Ethanol Purity Grades" },
        { value: "1", label: "Factory in Maragheh" },
      ],
      badges: [{ label: "Tehran Office, Maragheh Factory" }],
    },
  },
};
