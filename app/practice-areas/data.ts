import { Language } from "../../types";

export const practiceSlugs = [
  "litigation",
  "family",
  "real-estate",
  "commercial-business",
  "immigration",
  "injury-claims",
] as const;

export type PracticeSlug = (typeof practiceSlugs)[number];

type PracticeAreaDetail = {
  title: string;
  subtitle: string;
  summary: string;
  servicesTitle: string;
  services: string[];
  processTitle: string;
  process: string[];
  noteTitle: string;
  note: string;
  divorceDetail?: {
    title: string;
    intro: string;
    focusTitle: string;
    focusPoints: string[];
    prepTitle: string;
    prepChecklist: string[];
    faqTitle: string;
    faqs: Array<{ question: string; answer: string }>;
  };
};

export const practiceAreaDetailContent: Record<
  Language,
  Record<PracticeSlug, PracticeAreaDetail>
> = {
  zh: {
    litigation: {
      title: "诉讼辩护",
      subtitle: "Litigation & Defense",
      summary:
        "针对民事纠纷、刑事辩护、交通违规与酒驾案件，我们提供从立案评估到庭审出庭的全流程法律服务。",
      servicesTitle: "我们可处理的案件",
      services: ["民事纠纷", "刑事辩护", "交通违规", "酒驾案件"],
      processTitle: "服务流程",
      process: [
        "初步咨询与事实梳理",
        "风险评估与策略制定",
        "谈判和解或进入诉讼程序",
        "庭审代理与后续执行建议",
      ],
      noteTitle: "提示",
      note: "不同案件处理路径会因证据与程序阶段而变化，请尽早咨询以保护关键证据和时效。",
    },
    family: {
      title: "家庭事务",
      subtitle: "Family Law",
      summary:
        "我们协助客户处理离婚、子女监护、家暴限制令与遗产继承等家庭法律问题，重点关注长期稳定与可执行性。",
      servicesTitle: "我们可处理的案件",
      services: ["离婚诉讼", "子女监护", "家暴限制令", "遗产继承"],
      processTitle: "服务流程",
      process: [
        "明确目标与核心争议",
        "准备证据与法律文件",
        "协商、调解或进入诉讼",
        "判决/协议后的执行与跟进",
      ],
      noteTitle: "提示",
      note: "家庭案件通常同时涉及情绪和法律判断，建议尽早建立可执行、可落地的方案。",
      divorceDetail: {
        title: "新泽西协议离婚｜固定费用｜流程简明",
        intro:
          "双方已达成一致？离婚，也可以安静、清楚、体面地完成。我们专注协议离婚（无争议）案件，以固定费用、规范文件和高效流程帮助客户稳妥推进。",
        focusTitle: "服务特点",
        focusPoints: [
          "仅限协议离婚（无争议）",
          "固定费用，无隐藏收费",
          "多数情况无需出庭",
          "注重隐私，低调专业处理",
          "文件准备规范、清晰、完整",
          "流程高效，尽量节省时间",
        ],
        prepTitle: "服务项目",
        prepChecklist: [
          "基础无争议离婚：无子女、简单财产分配，起草并提交法院文件",
          "涉及子女的离婚：未成年子女抚养安排及计算，起草并提交法院文件",
          "资产复杂的离婚：房产、退休账户、商业权益等分配，定制婚姻财产协议",
          "优先加急处理：加快起草与提交，优先沟通并安排日程",
        ],
        faqTitle: "常见问题",
        faqs: [
          {
            question: "你们的费用是固定的吗？",
            answer:
              "是。固定费用将在咨询后，根据具体案件事实和复杂程度一次性明确，不做隐藏收费。",
          },
          {
            question: "是不是所有离婚都适用这个服务？",
            answer:
              "不是。该服务定位于双方已达成一致的协议离婚（无争议）案件；存在重大争议时，通常需要改用诉讼路径。",
          },
          {
            question: "是否一定要出庭？",
            answer:
              "多数协议离婚案件无需频繁出庭，但是否出庭仍取决于法院具体要求和案件情况。",
          },
        ],
      },
    },
    "real-estate": {
      title: "房产事务",
      subtitle: "Real Estate",
      summary:
        "覆盖住宅与商业地产交易、过户、产权文件与租赁纠纷，帮助客户控制交易风险并确保流程合规。",
      servicesTitle: "我们可处理的案件",
      services: ["住宅买卖", "商业地产", "过户文件", "租赁纠纷"],
      processTitle: "服务流程",
      process: [
        "交易/纠纷背景审查",
        "合同条款与风险点识别",
        "文件准备与谈判",
        "交割、登记或争议解决",
      ],
      noteTitle: "提示",
      note: "签约前审查条款通常成本更低、效果更好，可显著降低后续纠纷概率。",
    },
    "commercial-business": {
      title: "商业事务",
      subtitle: "Commercial Business",
      summary:
        "我们为企业与个体经营者提供合同、股权与经营结构相关支持，协助降低交易风险并提升合规效率。",
      servicesTitle: "我们可处理的案件",
      services: ["租赁合同", "生意转让", "商业纠纷", "企业注册"],
      processTitle: "服务流程",
      process: [
        "业务需求与风险盘点",
        "合同/结构方案设计",
        "文件签署与合规落地",
        "争议预防与后续优化",
      ],
      noteTitle: "提示",
      note: "商业决策应同步考虑税务、责任隔离与退出机制，避免后期成本放大。",
    },
    immigration: {
      title: "移民事务",
      subtitle: "Immigration Services",
      summary:
        "针对驱逐辩护、婚姻绿卡、亲属移民与入籍申请，我们提供程序规划、材料整理和面谈准备支持。",
      servicesTitle: "我们可处理的案件",
      services: ["驱逐辩护与保释", "婚姻绿卡", "亲属移民", "公民入籍"],
      processTitle: "服务流程",
      process: [
        "资格与路径评估",
        "材料准备与递交",
        "补件、面谈与听证准备",
        "结果跟进与后续身份规划",
      ],
      noteTitle: "提示",
      note: "移民案件高度依赖文件完整性与时间节点管理，建议尽早启动准备。",
    },
    "injury-claims": {
      title: "人身伤害",
      subtitle: "Injury Claims",
      summary:
        "我们代理车祸、滑倒摔伤、工伤与医疗过失等案件，帮助客户在证据、责任与赔偿计算上建立优势。",
      servicesTitle: "我们可处理的案件",
      services: ["意外伤害（滑倒摔伤）", "车祸案件", "工伤事故", "医疗过失"],
      processTitle: "服务流程",
      process: [
        "事故经过与责任初判",
        "医疗记录与损失证据整理",
        "与保险/对方谈判",
        "必要时提起诉讼并推进索赔",
      ],
      noteTitle: "提示",
      note: "事故发生后应尽快保存现场与医疗证据，避免影响责任认定和赔偿范围。",
    },
  },
  en: {
    litigation: {
      title: "Litigation & Defense",
      subtitle: "诉讼辩护",
      summary:
        "We handle civil disputes, criminal defense, traffic violations, and DUI cases with full support from case evaluation through courtroom representation.",
      servicesTitle: "What We Handle",
      services: ["Civil Disputes", "Criminal Defense", "Traffic Violations", "DUI Cases"],
      processTitle: "How We Work",
      process: [
        "Initial consultation and fact review",
        "Risk analysis and legal strategy",
        "Negotiation, settlement, or litigation filing",
        "Court representation and next-step guidance",
      ],
      noteTitle: "Important Note",
      note: "Every case strategy depends on evidence and timing. Early legal planning helps protect key rights.",
    },
    family: {
      title: "Family Law",
      subtitle: "家庭事务",
      summary:
        "We support divorce, custody, restraining orders, and inheritance matters with a focus on practical outcomes and long-term stability.",
      servicesTitle: "What We Handle",
      services: ["Divorce Litigation", "Child Custody", "Restraining Orders", "Inheritance"],
      processTitle: "How We Work",
      process: [
        "Clarify goals and key disputes",
        "Prepare evidence and legal documents",
        "Negotiate, mediate, or litigate",
        "Support enforcement and follow-up",
      ],
      noteTitle: "Important Note",
      note: "Family matters involve both legal and personal pressure. A clear, enforceable plan is critical.",
      divorceDetail: {
        title: "New Jersey Uncontested Divorce | Flat Fee | Clear Process",
        intro:
          "If both parties have reached agreement, divorce can be handled quietly, clearly, and with dignity. We focus on uncontested divorce matters with flat-fee pricing and efficient document handling.",
        focusTitle: "Service Highlights",
        focusPoints: [
          "Uncontested divorce only",
          "Flat fee with no hidden charges",
          "In many cases, no court appearance is required",
          "Privacy-focused and discreet representation",
          "Clear, complete, court-ready documentation",
          "Efficient process designed to save time",
        ],
        prepTitle: "Service Scope",
        prepChecklist: [
          "Basic uncontested divorce: no minor children, simple property allocation, drafting and court filing",
          "Divorce with children: parenting arrangements and support calculation, drafting and court filing",
          "Complex-asset divorce: property, retirement accounts, business interests, tailored marital settlement agreement",
          "Priority handling: accelerated drafting/filing preparation with prioritized communication and scheduling",
        ],
        faqTitle: "Frequently Asked Questions",
        faqs: [
          {
            question: "Is your fee fixed?",
            answer:
              "Yes. The flat fee is confirmed after consultation based on case facts and complexity, with no hidden charges.",
          },
          {
            question: "Does this service apply to every divorce case?",
            answer:
              "No. This service is designed for uncontested divorce matters where both parties already agree on key terms.",
          },
          {
            question: "Will I need to appear in court?",
            answer:
              "Many uncontested cases can proceed with minimal appearances, but final requirements depend on court procedures and case details.",
          },
        ],
      },
    },
    "real-estate": {
      title: "Real Estate",
      subtitle: "房产事务",
      summary:
        "We assist with residential and commercial transactions, deed transfers, and lease disputes to reduce risk and keep deals compliant.",
      servicesTitle: "What We Handle",
      services: [
        "Residential Buying/Selling",
        "Commercial Real Estate",
        "Deed Transfers",
        "Lease Disputes",
      ],
      processTitle: "How We Work",
      process: [
        "Review transaction or dispute background",
        "Identify contract and title risks",
        "Draft/negotiation and documentation",
        "Closing, filing, or dispute resolution",
      ],
      noteTitle: "Important Note",
      note: "Pre-signing review is usually the most cost-effective way to avoid expensive downstream disputes.",
    },
    "commercial-business": {
      title: "Commercial Business",
      subtitle: "商业事务",
      summary:
        "We advise businesses on contracts, transfer structures, and dispute prevention to support safer growth and smoother operations.",
      servicesTitle: "What We Handle",
      services: ["Lease Contracts", "Business Transfers", "Commercial Disputes", "Business Registration"],
      processTitle: "How We Work",
      process: [
        "Assess business goals and risks",
        "Design structure and contract terms",
        "Document execution and compliance",
        "Dispute prevention and ongoing support",
      ],
      noteTitle: "Important Note",
      note: "Strong agreements should align with liability, tax, and exit considerations from day one.",
    },
    immigration: {
      title: "Immigration Services",
      subtitle: "移民事务",
      summary:
        "We represent clients in removal defense, marriage-based green cards, family petitions, and naturalization matters.",
      servicesTitle: "What We Handle",
      services: [
        "Deportation Defense/Bail",
        "Marriage Green Cards",
        "Family Immigration",
        "Citizenship",
      ],
      processTitle: "How We Work",
      process: [
        "Eligibility and pathway assessment",
        "Evidence and filing preparation",
        "RFE/interview/hearing preparation",
        "Status follow-up and next planning",
      ],
      noteTitle: "Important Note",
      note: "Immigration outcomes often depend on documentation quality and timeline control. Start early.",
    },
    "injury-claims": {
      title: "Injury Claims",
      subtitle: "人身伤害",
      summary:
        "We handle injury claims involving car accidents, slips/falls, workplace incidents, and medical malpractice matters.",
      servicesTitle: "What We Handle",
      services: [
        "Slip and Fall Injuries",
        "Car Accidents",
        "Workplace Accidents",
        "Medical Malpractice",
      ],
      processTitle: "How We Work",
      process: [
        "Incident review and liability analysis",
        "Medical and loss documentation",
        "Insurance negotiation",
        "Litigation when needed",
      ],
      noteTitle: "Important Note",
      note: "Preserving evidence immediately after an incident can materially affect compensation outcomes.",
    },
  },
};
