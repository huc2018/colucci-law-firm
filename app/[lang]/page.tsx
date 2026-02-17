import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "../../components/HomePage";
import { Language } from "../../types";

type PageProps = {
  params: Promise<{ lang: string }>;
};

function isLanguage(value: string): value is Language {
  return value === "zh" || value === "en";
}

const homepageMetadata: Record<
  Language,
  { title: string; description: string; locale: "zh_CN" | "en_US" }
> = {
  zh: {
    title: "柯奇律师事务所 | 新泽西诉讼、家庭、房产、移民与人身伤害律师",
    description:
      "柯奇律师事务所为新泽西社区提供中英双语法律服务，覆盖诉讼辩护、家庭事务、房产商业、移民事务与人身伤害索赔。",
    locale: "zh_CN",
  },
  en: {
    title:
      "Colucci Law Firm, P.C. | New Jersey Litigation, Family, Real Estate, Immigration & Injury Attorney",
    description:
      "Bilingual English-Chinese law firm in New Jersey handling litigation, family law, real estate, business matters, immigration, and injury claims.",
    locale: "en_US",
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    return {};
  }

  const current = homepageMetadata[lang];
  const canonicalPath = `/${lang}`;

  return {
    title: current.title,
    description: current.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        "zh-CN": "/zh",
        "en-US": "/en",
        "x-default": "/zh",
      },
    },
    openGraph: {
      title: current.title,
      description: current.description,
      url: `https://www.coluccilawfirm.com${canonicalPath}`,
      type: "website",
      locale: current.locale,
      images: ["/og/colucci-og.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: current.title,
      description: current.description,
      images: ["/og/colucci-og.jpg"],
    },
  };
}

export default async function LanguageHomePage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  return <HomePage initialLang={lang} />;
}
