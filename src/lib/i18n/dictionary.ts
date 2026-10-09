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
  header: {
    phoneAriaLabel: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
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
  applications: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  qualityControl: {
    eyebrow: string;
    title: string;
    intro: string;
    imageAlt: string;
    imageBadgeTitle: string;
    imageBadgeSubtitle: string;
    items: { title: string; text: string }[];
  };
  productionProcess: {
    eyebrow: string;
    title: string;
    steps: { title: string; text: string }[];
  };
  whoWeAre: {
    title: string;
    body: string;
    cta: string;
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
    legal: string;
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
  };
};

export const dictionary: Record<Locale, Dictionary> = {
  fa: {
    meta: {
      title: "نگین فام طب | تولیدکننده تخصصی اتانول طبی و صنعتی",
      description:
        "تولید، بسته‌بندی و تأمین اتانول طبی و صنعتی با خلوص ۷۰٪، ۹۶٪ و ۹۹.۸٪ — کارخانه مراغه، دفتر مرکزی تهران.",
    },
    nav: {
      home: "خانه",
      about: "درباره ما",
      products: "محصولات",
      media: "گالری",
      contact: "تماس با ما",
      languageSwitch: "EN",
    },
    header: {
      phoneAriaLabel: "تماس با دفتر تهران",
    },
    hero: {
      eyebrow: "تولیدکننده تخصصی اتانول طبی و صنعتی",
      name: "نگین فام طب",
      tagline:
        "نامی معتبر در صنعت الکل‌سازی ایران؛ کارخانه در مراغه، دفتر مرکزی در تهران، و اتانول با خلوص بالا برای صنایع کشور.",
      ctaPrimary: "مشاهده محصولات",
      ctaSecondary: "استعلام قیمت",
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
    applications: {
      eyebrow: "کاربردها",
      title: "صنایع تحت پوشش",
      intro:
        "اتانول تولید شده توسط نگین فام طب در طیف گسترده‌ای از صنایع حیاتی کشور به کار می‌رود و نقش کلیدی در تقویت زیرساخت‌های صنعتی ایفا می‌کند.",
      items: [
        {
          title: "صنایع دارویی",
          text: "تامین اتانول دارویی با خلوص بالا برای تولید انواع داروها، قرص‌ها، شربت‌ها و فرآورده‌های پزشکی. محصولات ما مطابق با استانداردهای دارویی کشور است.",
        },
        {
          title: "صنایع غذایی",
          text: "استفاده به عنوان حلال و افزودنی در فرآوری مواد غذایی، عصاره‌گیری گیاهی و تولید طعم‌دهنده‌ها با رعایت کامل استانداردهای بهداشتی.",
        },
        {
          title: "آرایشی و بهداشتی",
          text: "ماده اولیه برای تولید عطر، ادکلن، محصولات مراقبت از پوست، دهان‌شویه و سایر محصولات آرایشی-بهداشتی با خلوص مطمئن.",
        },
        {
          title: "تجهیزات پزشکی",
          text: "ضدعفونی سطوح و تجهیزات بیمارستانی، مطب‌ها، کلینیک‌ها و آزمایشگاه‌ها. الکل ۹۶٪ و ۹۹.۸٪ برای مصارف پزشکی حساس.",
        },
        {
          title: "صنایع شیمیایی",
          text: "حلال صنعتی در تولید مواد شیمیایی، رنگ‌ها، رزین‌ها و فرآیندهای شیمیایی مختلف که نیاز به اتانول با مشخصات فنی دارند.",
        },
        {
          title: "سوخت صنعتی",
          text: "اتانول سوختی برای مصارف صنعتی و انرژی، در صورت نیاز به سفارش‌سازی با مشخصات فنی خاص برای صنایع انرژی.",
        },
      ],
    },
    qualityControl: {
      eyebrow: "کنترل کیفیت",
      title: "تعهد به کیفیت و ایمنی",
      intro:
        "ما در نگین فام طب با تعهد کامل به نوآوری و کیفیت، تمامی محصولات خود را تحت کنترل دقیق آزمایشگاهی تولید می‌کنیم. هدف ما تضمین سلامت مصرف‌کنندگان نهایی و ارائه محصولاتی مطابق با استانداردهای دارویی و بهداشتی کشور است.",
      imageAlt: "قفسه آزمایشگاه نگین فام طب با بالن‌های حجمی، استوانه‌های مدرج و بطری‌های قهوه‌ای معرف شیمیایی",
      imageBadgeTitle: "کنترل کیفیت",
      imageBadgeSubtitle: "هر دوره تولید",
      items: [
        {
          title: "غیرخوراکی و ایمن",
          text: "تمامی محصولات نگین فام طب غیرخوراکی بوده و با افزودن ۱۰ppm دناتونیوم بنزوات از مصرف خوراکی جلوگیری می‌شود.",
        },
        {
          title: "فاقد متانول",
          text: "محصولات ما کاملاً فاقد متانول و ایزوپروپیل الکل هستند تا بالاترین سطح ایمنی برای مصرف‌کنندگان تضمین شود.",
        },
        {
          title: "گواهی‌های بهداشتی",
          text: "تولید تحت نظارت مراجع بهداشتی و دارویی کشور و مطابق با استانداردهای ملی و بین‌المللی.",
        },
        {
          title: "آزمایشگاه کنترل کیفیت",
          text: "کنترل کیفیت مستمر در آزمایشگاه مجهز کارخانه برای اطمینان از خلوص و کیفیت هر دوره تولید.",
        },
        {
          title: "تولید پایدار",
          text: "استفاده از فناوری‌های پیشرفته و فرآیندهای تولید دوست‌دار محیط زیست برای کاهش اثرات صنعتی.",
        },
        {
          title: "توزیع سراسری",
          text: "محصولات ما در سراسر ایران شناخته شده و مورد استفاده قرار می‌گیرند و از طریق شبکه توزیع گسترده قابل دسترسی هستند.",
        },
      ],
    },
    productionProcess: {
      eyebrow: "فرآیند تولید",
      title: "از مواد اولیه تا محصول نهایی",
      steps: [
        {
          title: "تامین مواد اولیه",
          text: "تهیه مواد اولیه باکیفیت از منابع معتبر و آزمایش اولیه برای اطمینان از خلوص و استاندارد.",
        },
        {
          title: "تخمیر",
          text: "تخمیر کنترل‌شده مواد اولیه با نظارت مستمر کارشناسان تولید.",
        },
        {
          title: "تقطیر و خلوص‌سازی",
          text: "تقطیر چندمرحله‌ای برای رسیدن به خلوص مطلوب و حذف ناخالصی‌ها.",
        },
        {
          title: "کنترل کیفیت و بسته‌بندی",
          text: "آزمایش نهایی در آزمایشگاه کنترل کیفیت و بسته‌بندی استاندارد در بطری یا فله.",
        },
      ],
    },
    whoWeAre: {
      title: "ما که هستیم",
      body: "نگین فام طب یک شرکت سهامی خاص ثبت‌شده با شماره ثبت ۳۲۶۹ است. معرفی شرکت، ماموریت و اطلاعات ثبت رسمی را در صفحه درباره ما ببینید.",
      cta: "درباره ما",
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
      legal: "شناسه ملی: ۱۴۰۰۰۱۷۴۶۲۸ | شماره ثبت: ۳۲۶۹",
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
    },
  },
  en: {
    meta: {
      title: "Negin Fam Teb | Medical & Industrial Ethanol Manufacturer",
      description:
        "Manufacturing, packaging, and supply of medical and industrial ethanol at 70%, 96%, and 99.8% purity — Maragheh factory, Tehran head office.",
    },
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      media: "Media",
      contact: "Contact",
      languageSwitch: "فا",
    },
    header: {
      phoneAriaLabel: "Call the Tehran office",
    },
    hero: {
      eyebrow: "Specialized Manufacturer of Medical & Industrial Ethanol",
      name: "Negin Fam Teb",
      tagline:
        "A trusted name in Iran's ethanol industry: factory in Maragheh, head office in Tehran, and high-purity ethanol for the country's industries.",
      ctaPrimary: "View Products",
      ctaSecondary: "Request a Quote",
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
    applications: {
      eyebrow: "Applications",
      title: "Industries We Serve",
      intro:
        "The ethanol produced by Negin Fam Teb is used across a wide range of the country's vital industries and plays a key role in strengthening industrial infrastructure.",
      items: [
        {
          title: "Pharmaceutical Industry",
          text: "Supplying high-purity pharmaceutical ethanol for the production of various medicines, tablets, syrups, and medical preparations. Our products comply with the country's pharmaceutical standards.",
        },
        {
          title: "Food Industry",
          text: "Used as a solvent and additive in food processing, plant extraction, and flavoring production, in full compliance with hygiene standards.",
        },
        {
          title: "Cosmetics and Hygiene",
          text: "Raw material for the production of perfume, cologne, skin care products, mouthwash, and other cosmetic and hygiene products with reliable purity.",
        },
        {
          title: "Medical Equipment",
          text: "Disinfection of surfaces and equipment in hospitals, clinics, offices, and laboratories. 96% and 99.8% alcohol for sensitive medical uses.",
        },
        {
          title: "Chemical Industry",
          text: "Industrial solvent in the production of chemicals, paints, resins, and various chemical processes that require ethanol with specific technical properties.",
        },
        {
          title: "Industrial Fuel",
          text: "Fuel ethanol for industrial and energy uses, custom-formulated with specific technical properties for the energy industry when required.",
        },
      ],
    },
    qualityControl: {
      eyebrow: "Quality Control",
      title: "Committed to Quality and Safety",
      intro:
        "At Negin Fam Teb, with full commitment to innovation and quality, we produce all of our products under strict laboratory control. Our goal is to guarantee the health of end consumers and deliver products that comply with the country's pharmaceutical and hygiene standards.",
      imageAlt: "Negin Fam Teb laboratory shelf with volumetric flasks, graduated cylinders, and amber reagent bottles",
      imageBadgeTitle: "Quality Control",
      imageBadgeSubtitle: "Every production run",
      items: [
        {
          title: "Non-Consumable and Safe",
          text: "All Negin Fam Teb products are non-consumable, with 10ppm denatonium benzoate added to prevent consumption.",
        },
        {
          title: "Methanol-Free",
          text: "Our products are completely free of methanol and isopropyl alcohol, guaranteeing the highest level of safety for consumers.",
        },
        {
          title: "Health Certifications",
          text: "Produced under the supervision of the country's health and pharmaceutical authorities, in compliance with national and international standards.",
        },
        {
          title: "Quality Control Laboratory",
          text: "Continuous quality control in the factory's equipped laboratory to ensure the purity and quality of every production batch.",
        },
        {
          title: "Sustainable Production",
          text: "Use of advanced technologies and environmentally friendly production processes to reduce industrial impact.",
        },
        {
          title: "Nationwide Distribution",
          text: "Our products are known and used across Iran and are accessible through an extensive distribution network.",
        },
      ],
    },
    productionProcess: {
      eyebrow: "Production Process",
      title: "From Raw Materials to Finished Product",
      steps: [
        {
          title: "Raw material sourcing",
          text: "Quality raw materials from reliable sources, with initial testing to confirm purity and standards.",
        },
        {
          title: "Fermentation",
          text: "Controlled fermentation of the raw material, with continuous supervision by production specialists.",
        },
        {
          title: "Distillation and purification",
          text: "Multi-stage distillation to reach the target purity and remove impurities.",
        },
        {
          title: "Quality control and packaging",
          text: "Final testing in the quality control lab and standard packaging in bottles or bulk.",
        },
      ],
    },
    whoWeAre: {
      title: "Who We Are",
      body: "Negin Fam Teb is a registered private joint stock company (registration No. 3269). Read about the company, our mission and the official registration details on the About page.",
      cta: "About Us",
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
      legal: "National ID: 14000174628 | Registration No: 3269",
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
    },
  },
};
