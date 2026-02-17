export type Language = "en" | "zh";

export interface PracticeItem {
  title: string;
  items: string[];
}

export interface Content {
  nav: {
    home: string;
    attorney: string;
    practice: string;
    whyUs: string;
    contact: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    slogans: string[];
    cta: string;
  };
  practice: {
    title: string;
    tag: string;
    areas: {
      litigation: PracticeItem;
      family: PracticeItem;
      realEstate: PracticeItem;
      commercial: PracticeItem;
      immigration: PracticeItem;
      injury: PracticeItem;
    };
  };
  attorney: {
    title: string;
    name: string;
    role: string;
    description: string;
    quote: string;
    image: string;
    badge: string;
    stats: {
      years: string;
      yearsLabel: string;
      languages: string;
      languagesLabel: string;
    };
  };
  vision: {
    tag: string;
    title: string;
    description: string;
    principles: string[];
    quoteTitle: string;
    quote: string;
    firmName: string;
    firmDesc: string;
    firmSlogan: string;
    tags: string[];
  };
  whyUs: {
    titlePrefix: string;
    titleName: string;
    items: {
      experience: { title: string; desc: string };
      personal: { title: string; desc: string };
      language: { title: string; desc: string };
      complex: { title: string; desc: string };
    };
    slogan: string;
  };
  contact: {
    title: string;
    hotline: string;
    priorityLineLabel: string;
    callPriorityLabel: string;
    phones: {
      mandarin: string;
      fuzhou: string;
      office: string;
      fax: string;
    };
    email: string;
    hours: {
      weekday: string;
      saturday: string;
      sunday: string;
      availabilityNote: string;
    };
    locations: {
      title: string;
      edisonLabel: string;
      tomsRiverLabel: string;
      edison: string;
      tomsRiver: string;
    };
    mapTitles: {
      edison: string;
      tomsRiver: string;
    };
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    copyright: string;
    description: string;
    quickLinks: string;
    contactInfo: string;
    disclaimer: string;
  };
}
