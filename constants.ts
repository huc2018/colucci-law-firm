import { Content } from "./types";

export const content: Record<"en" | "zh", Content> = {
  en: {
    nav: {
      home: "Home",
      attorney: "Attorney",
      practice: "Practice Areas",
      whyUs: "Why Us",
      contact: "Contact",
      cta: "Consult Now",
    },
    hero: {
      title: "Colucci Law Firm, P.C.",
      subtitle: "Strong Defense, Wholehearted Protection",
      slogans: [
        "Strong Defense, Wholehearted Protection!",
        "Client Interests Always Come First!",
        "Fully Committed to Cases Big and Small!",
      ],
      cta: "Get a Consultation",
    },
    practice: {
      title: "Practice Areas",
      areas: {
        litigation: {
          title: "Litigation & Defense",
          items: [
            "Civil Disputes",
            "Criminal Defense",
            "Traffic Violations",
            "DUI Cases",
          ],
        },
        family: {
          title: "Family Law",
          items: [
            "Divorce Litigation",
            "Child Custody",
            "Domestic Violence Restraining Orders",
            "Inheritance",
          ],
        },
        realEstate: {
          title: "Real Estate",
          items: [
            "Residential Buying/Selling",
            "Commercial Real Estate",
            "Deed Transfers",
            "Lease Disputes",
          ],
        },
        commercial: {
          title: "Commercial Business",
          items: [
            "Lease Contracts",
            "Business Transfers",
            "Commercial Disputes",
            "Business Registration",
          ],
        },
        immigration: {
          title: "Immigration Services",
          items: [
            "Deportation Defense/Bail",
            "Marriage Green Cards",
            "Family Immigration",
            "Citizenship",
          ],
        },
        injury: {
          title: "Injury Claims",
          items: [
            "Accidental Injury (Slip & Fall)",
            "Car Accidents",
            "Workplace Accidents",
            "Medical Malpractice",
            "Workers' Compensation",
          ],
        },
      },
    },
    attorney: {
      title: "Meet The Attorney",
      name: "Joseph C. Colucci, Esq.",
      role: "Founder & Lead Attorney",
      description:
        "With over 20 years of legal practice, Mr. Colucci possesses a deep understanding of laws, regulations, and litigation strategies. He is dedicated to providing personalized service, handling every case with meticulous detail. We understand the law, and we understand the Chinese community.",
      quote: "Understand Law, Understand You.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    whyUs: {
      titlePrefix: "Why Choose",
      titleName: "Joseph C. Colucci, Esq.?",
      items: {
        experience: {
          title: "Senior Experience",
          desc: "Over 20 years of legal practice, deep knowledge of regulations and strategy.",
        },
        personal: {
          title: "Personalized Service",
          desc: "Hands-on approach, handling every case with meticulous care.",
        },
        language: {
          title: "Multi-language Support",
          desc: "English, Mandarin, Fuzhou, and Cantonese support. No language barriers.",
        },
        complex: {
          title: "Complex Case Expert",
          desc: "Specializing in difficult cases to solve your problems.",
        },
      },
      slogan: "Understand Law, Understand Chinese Community!",
    },
    contact: {
      title: "Contact Us",
      hotline: "Chinese Service Hotline",
      phones: {
        mandarin: "Ms. You: 732-668-1420 (Mandarin)",
        fuzhou: "Mr. Huang: 732-325-78983 (Fuzhou/Cantonese)",
        office: "Phone: 732-557-5426",
        fax: "Fax: 732-862-8888",
      },
      email: "Email: Jcoluccilaw@gmail.com",
      locations: {
        title: "Office Locations",
        edison: "1967 Route 27, Suite 26, Edison, NJ 08817",
        tomsRiver: "1 Hadley Ave, Toms River, NJ 08753",
      },
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "How can we help?",
        submit: "Send Message",
      },
    },
    footer: {
      copyright: "© 2025 Colucci Law Firm, P.C. All Rights Reserved.",
    },
  },
  zh: {
    nav: {
      home: "首页",
      attorney: "律师介绍",
      practice: "服务领域",
      whyUs: "为什么选择我们",
      contact: "联系我们",
      cta: "立即咨询",
    },
    hero: {
      title: "柯奇律师事务所",
      subtitle: "Colucci Law Firm, P. C.",
      slogans: [
        "强势辩护，全心守护!",
        "客户利益，始终第一!",
        "大小案件，全力以赴!",
      ],
      cta: "免费咨询",
    },
    practice: {
      title: "专业服务领域",
      areas: {
        litigation: {
          title: "诉讼辩护",
          items: ["民事纠纷", "刑事辩护", "交通违规", "酒驾案件"],
        },
        family: {
          title: "家庭事务",
          items: ["离婚诉讼", "子女监护", "家暴限制令", "遗产继承"],
        },
        realEstate: {
          title: "房产事务",
          items: ["住宅买卖", "商业地产", "地契更名", "租赁纠纷"],
        },
        commercial: {
          title: "商业事务",
          items: ["租约合同", "生意转让", "商业纠纷", "商业注册"],
        },
        immigration: {
          title: "移民服务",
          items: ["递解令/保释", "婚姻绿卡", "亲属移民", "公民入籍"],
        },
        injury: {
          title: "伤害索赔",
          items: ["意外伤害 (滑倒/车祸)", "工地事故", "医疗事故", "工伤索赔"],
        },
      },
    },
    attorney: {
      title: "律师介绍",
      name: "Joseph C. Colucci, Esq.",
      role: "首席律师",
      description:
        "资深经验：20 多年法律实践，深谙法律法规和诉讼策略。个性化服务：倾力亲为，细致处理每个案件。懂法律，更懂华人！",
      quote: "疑难杂症专家，为您排忧解难",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    whyUs: {
      titlePrefix: "为什么选择",
      titleName: "Joseph C. Colucci, Esq.?",
      items: {
        experience: {
          title: "资深经验",
          desc: "20 多年法律实践，深谙法律法规和诉讼策略",
        },
        personal: {
          title: "个性化服务",
          desc: "倾力亲为，细致处理每个案件",
        },
        language: {
          title: "多语种支持",
          desc: "英语/普通话/福州话/广东话助理，无语言障碍",
        },
        complex: {
          title: "疑难杂症专家",
          desc: "擅长处理复杂案件，为您排忧解难",
        },
      },
      slogan: "懂法律，更懂华人!",
    },
    contact: {
      title: "联系方式",
      hotline: "中文服务热线",
      phones: {
        mandarin: "尤女士 732-668-1420 (普通话)",
        fuzhou: "黄先生 732-325-78983 (福州话/粤语)",
        office: "电话: 732-557-5426",
        fax: "传真: 732-862-8888",
      },
      email: "邮箱: Jcoluccilaw@gmail.com",
      locations: {
        title: "办公室地址",
        edison: "Edison Office: 1967 Route 27, Suite 26, Edison, NJ 08817",
        tomsRiver: "Toms River Office: 1 Hadley Ave, Toms River, NJ 08753",
      },
      form: {
        name: "您的姓名",
        email: "您的邮箱",
        message: "请输入您的留言",
        submit: "发送留言",
      },
    },
    footer: {
      copyright: "© 2025 柯奇律师事务所 Colucci Law Firm, P.C. 版权所有",
    },
  },
};
