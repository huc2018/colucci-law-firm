import type { ReactNode } from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://coluccilawfirm.com"),
  title: {
    default: "Colucci Law Firm, P.C. 柯奇律师事务所 | 新泽西律师 / New Jersey Litigation, Family, Real Estate, Immigration & Injury Attorney",
    template: "%s | Colucci Law Firm, P.C. 柯奇律师事务所",
  },

  description:
    "Colucci Law Firm, P.C. is a bilingual English–Chinese law firm in New Jersey offering legal services in civil and criminal litigation, family law, real estate, commercial business matters, immigration, and injury claims. We understand the law, and we understand the Chinese community.",
  keywords: [
    // 英文关键词（根据 content.practice 里的真实业务生成）
    "Colucci Law Firm",
    "Colucci Law Firm P.C.",
    "New Jersey lawyer",
    "NJ attorney",
    "New Jersey litigation lawyer",
    "civil litigation attorney NJ",
    "criminal defense lawyer NJ",
    "traffic violation lawyer NJ",
    "DUI attorney New Jersey",
    "family law attorney NJ",
    "divorce lawyer New Jersey",
    "child custody attorney NJ",
    "domestic violence restraining order lawyer",
    "inheritance lawyer NJ",
    "real estate lawyer NJ",
    "residential real estate attorney",
    "commercial real estate attorney",
    "deed transfer lawyer",
    "lease dispute attorney",
    "business lawyer New Jersey",
    "commercial contract attorney",
    "business transfer lawyer",
    "business registration attorney",
    "immigration lawyer New Jersey",
    "deportation defense lawyer NJ",
    "marriage green card lawyer",
    "family immigration attorney",
    "citizenship lawyer NJ",
    "personal injury lawyer New Jersey",
    "car accident attorney NJ",
    "slip and fall lawyer NJ",
    "workplace accident lawyer",
    "medical malpractice lawyer NJ",
    "workers compensation lawyer NJ",

    // 中文关键词（根据 zh 版内容）
    "新泽西律师",
    "新泽西华人律师",
    "柯奇律师事务所",
    "柯奇律师",
    "新泽西民事诉讼律师",
    "新泽西刑事辩护律师",
    "交通违规律师",
    "酒驾律师",
    "新泽西家庭律师",
    "离婚律师",
    "子女监护律师",
    "家暴限制令律师",
    "遗产继承律师",
    "新泽西房产律师",
    "生意买卖律师",
    "商业纠纷律师",
    "移民律师",
    "婚姻绿卡律师",
    "亲属移民律师",
    "公民入籍律师",
    "新泽西人身伤害律师",
    "车祸律师",
    "滑倒摔伤律师",
    "工伤索赔律师",
  ],
  openGraph: {
    title:
      "Colucci Law Firm, P.C. – New Jersey Litigation, Family, Real Estate, Immigration & Injury Attorney",
    description:
      "Bilingual English–Chinese law firm in New Jersey providing legal services in litigation and defense, family law, real estate, commercial business, immigration services, and injury claims.",
    url: "https://coluccilawfirm.com",
    siteName: "Colucci Law Firm, P.C.",
    images: [
      {
        url: "/og/colucci-og.jpg", // 建议你放一张 1200x630 的封面图在 public/og/ 下
        width: 1200,
        height: 630,
        alt: "Colucci Law Firm, P.C. – New Jersey Attorney",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Colucci Law Firm, P.C. – Bilingual New Jersey Litigation, Immigration & Injury Attorney",
    description:
      "New Jersey law firm providing litigation, family law, real estate, commercial, immigration, and injury claim services in English and Chinese.",
    images: ["/og/colucci-og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const requestHeaders = await headers();
  const siteLang = requestHeaders.get("x-site-lang") || "zh-CN";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Colucci Law Firm, P.C.",
    url: "https://coluccilawfirm.com",
    image: "https://coluccilawfirm.com/og/colucci-og.jpg",
    telephone: "+1-732-668-1420", // 主热线（来自 contact.phones 和 office）
    email: "Jcoluccilaw@gmail.com",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "1967 Route 27, Suite 26",
        addressLocality: "Edison",
        addressRegion: "NJ",
        postalCode: "08817",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "1 Hadley Ave",
        addressLocality: "Toms River",
        addressRegion: "NJ",
        postalCode: "08753",
        addressCountry: "US",
      },
    ],
    areaServed: ["Edison, New Jersey", "Toms River, New Jersey", "New Jersey"],
    // 多语言服务（根据你的中文/英文 content）
    availableLanguage: [
      {
        "@type": "Language",
        name: "English",
      },
      {
        "@type": "Language",
        name: "Chinese (Mandarin)",
      },
      {
        "@type": "Language",
        name: "Chinese (Fuzhou dialect)",
      },
      {
        "@type": "Language",
        name: "Chinese (Cantonese)",
      },
    ],
    // 根据 content.practice 里的六大领域生成服务列表
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Litigation & Defense",
          description:
            "Civil disputes, criminal defense, traffic violations, DUI cases in New Jersey.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Family Law",
          description:
            "Divorce litigation, child custody, domestic violence restraining orders, inheritance matters.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Real Estate",
          description:
            "Residential buying and selling, commercial real estate, deed transfers, lease disputes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Business",
          description:
            "Lease contracts, business transfers, commercial disputes, and business registration.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Immigration Services",
          description:
            "Deportation defense and bail, marriage green cards, family immigration, and citizenship.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Injury Claims",
          description:
            "Accidental injury (slip and fall), car accidents, workplace accidents, medical malpractice, and workers' compensation.",
        },
      },
    ],
    // 简单放一点品牌口号（来自 vision / whyUs）
    slogan: [
      "Strong Defense, Wholehearted Protection",
      "Understand Law, Understand the Chinese Community",
    ],
  };

  return (
    <html lang={siteLang}>
      <head>
        {/* 律师事务所 Schema.org 结构化数据，用于 Google 富结果和本地搜索 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-white text-dark antialiased">
        {children}
        {process.env.NODE_ENV === "production" && (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "vfszyvdgko");
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
