
export type Language = 'en' | 'zh';

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
    title: string;
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
    phones: {
      mandarin: string;
      fuzhou: string;
      office: string;
      fax: string;
    };
    email: string;
    locations: {
      title: string;
      edison: string;
      tomsRiver: string;
    };
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    }
  };
  footer: {
    copyright: string;
  }
}
