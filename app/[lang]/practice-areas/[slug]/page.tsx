import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Language } from "../../../../types";
import PhoneActionButton from "../../../../components/PhoneActionButton";
import {
  practiceSlugs,
  type PracticeSlug,
  practiceAreaDetailContent,
} from "../../../practice-areas/data";

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

const baseUrl = "https://coluccilawfirm.com";

function isLanguage(value: string): value is Language {
  return value === "en" || value === "zh";
}

function isPracticeSlug(value: string): value is PracticeSlug {
  return practiceSlugs.includes(value as PracticeSlug);
}

export async function generateStaticParams() {
  return ["zh", "en"].flatMap((lang) => practiceSlugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!isLanguage(lang) || !isPracticeSlug(slug)) {
    return {};
  }

  const detail = practiceAreaDetailContent[lang][slug];
  const canonical = `/${lang}/practice-areas/${slug}`;

  return {
    title: `${detail.title} | Colucci Law Firm, P.C.`,
    description: detail.summary,
    alternates: {
      canonical,
      languages: {
        "zh-CN": `/zh/practice-areas/${slug}`,
        "en-US": `/en/practice-areas/${slug}`,
        "x-default": `/zh/practice-areas/${slug}`,
      },
    },
    openGraph: {
      title: `${detail.title} | Colucci Law Firm, P.C.`,
      description: detail.summary,
      url: `${baseUrl}${canonical}`,
      type: "article",
      locale: lang === "zh" ? "zh_CN" : "en_US",
      images: ["/og/colucci-og.jpg"],
    },
  };
}

export default async function PracticeAreaDetailPage({ params }: PageProps) {
  const { lang, slug } = await params;

  if (!isLanguage(lang) || !isPracticeSlug(slug)) {
    notFound();
  }

  const detail = practiceAreaDetailContent[lang][slug];
  const labels = {
    zh: {
      back: "返回首页",
      contact: "联系咨询",
      call: "电话咨询",
      email: "邮件咨询",
      disclaimerTitle: "重要声明",
      disclaimerText:
        "本律师广告仅供参考信息使用，不构成法律建议。除非签署书面委托协议，否则不形成律师-客户关系。每个案件均基于具体事实，结果可能因情况而异。本所提供的有限范围代理服务，遵循《新泽西州职业行为规则》第1.2(c)条的规定。具体服务范围、费用及双方权利义务以签署的书面协议条款为准。",
    },
    en: {
      back: "Back to Home",
      contact: "Contact Us",
      call: "Call Us",
      email: "Email Us",
      disclaimerTitle: "Important Disclaimer",
      disclaimerText:
        "This attorney advertising is for informational purposes only and does not constitute legal advice. No attorney-client relationship is formed unless a written engagement agreement is signed. Every case depends on specific facts, and outcomes may vary. Any limited-scope representation is provided in accordance with New Jersey Rule of Professional Conduct 1.2(c). The scope of services, fees, and respective rights and obligations are governed by the signed written agreement.",
    },
  }[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: detail.title,
    provider: {
      "@type": "LegalService",
      name: "Colucci Law Firm, P.C.",
      url: baseUrl,
      telephone: "+1-732-668-1420",
    },
    areaServed: "New Jersey, US",
    description: detail.summary,
    url: `${baseUrl}/${lang}/practice-areas/${slug}`,
  };

  return (
    <main className="min-h-screen bg-neutral text-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-primary text-white">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <Link
            href={`/${lang}#practice`}
            className="inline-flex items-center text-accent hover:text-white transition-colors"
          >
            ← {labels.back}
          </Link>
          <h1 className="mt-8 text-4xl md:text-6xl font-serif font-bold">{detail.title}</h1>
          <p className="mt-3 text-accent text-xl font-medium">{detail.subtitle}</p>
          <p className="mt-8 max-w-3xl text-white/90 leading-relaxed text-lg">{detail.summary}</p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <article className="bg-white rounded-sm border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-5">
              {detail.servicesTitle}
            </h2>
            <ul className="space-y-3">
              {detail.services.map((item) => (
                <li key={item} className="flex items-start text-dark/80">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-white rounded-sm border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-5">
              {detail.processTitle}
            </h2>
            <ol className="space-y-3">
              {detail.process.map((step, idx) => (
                <li key={step} className="flex items-start text-dark/80">
                  <span className="text-accent font-bold mr-3 shrink-0">{idx + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>
        </div>

        {detail.divorceDetail && (
          <section className="mt-8 bg-white rounded-sm border border-gray-200 p-8 shadow-sm">
            <h2 className="text-3xl font-serif font-semibold text-primary">
              {detail.divorceDetail.title}
            </h2>
            <p className="mt-4 text-dark/80 leading-relaxed">{detail.divorceDetail.intro}</p>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <article className="bg-neutral rounded-sm border border-gray-200 p-6">
                <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                  {detail.divorceDetail.focusTitle}
                </h3>
                <ul className="space-y-3">
                  {detail.divorceDetail.focusPoints.map((item) => (
                    <li key={item} className="flex items-start text-dark/80">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="bg-neutral rounded-sm border border-gray-200 p-6">
                <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                  {detail.divorceDetail.prepTitle}
                </h3>
                <ol className="space-y-3">
                  {detail.divorceDetail.prepChecklist.map((item, idx) => (
                    <li key={item} className="flex items-start text-dark/80">
                      <span className="text-accent font-bold mr-3 shrink-0">{idx + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </article>
            </div>

            <article className="mt-8 bg-[#F8F4E8] border border-accent/30 rounded-sm p-6">
              <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                {detail.divorceDetail.faqTitle}
              </h3>
              <div className="space-y-4">
                {detail.divorceDetail.faqs.map((item) => (
                  <div key={item.question}>
                    <p className="font-semibold text-primary">{item.question}</p>
                    <p className="mt-1 text-dark/80 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="mt-8 bg-white border border-primary/20 rounded-sm p-6">
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                {labels.disclaimerTitle}
              </h3>
              <p className="text-dark/80 leading-relaxed">{labels.disclaimerText}</p>
            </article>
          </section>
        )}

        <article className="mt-8 bg-[#F8F4E8] border border-accent/30 rounded-sm p-8">
          <h2 className="text-2xl font-serif font-semibold text-primary mb-3">{detail.noteTitle}</h2>
          <p className="text-dark/80 leading-relaxed">{detail.note}</p>
        </article>

        <section className="mt-10 bg-white rounded-sm border border-gray-200 p-8 shadow-sm">
          <h2 className="text-2xl font-serif font-semibold text-primary mb-5">{labels.contact}</h2>
          <div className="flex flex-wrap gap-4">
            <PhoneActionButton
              phoneNumber="+17326681420"
              className="inline-flex items-center bg-primary text-white px-5 py-3 rounded-sm font-semibold hover:bg-primary/90 transition-colors"
              label={labels.call}
              copiedLabel={lang === "zh" ? "电话已复制" : "Phone copied"}
              copyFailedLabel={lang === "zh" ? "复制失败，请手动复制" : "Copy failed, please copy manually"}
            />
            <a
              href="mailto:Jcoluccilaw@gmail.com"
              className="inline-flex items-center bg-accent text-primary px-5 py-3 rounded-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              {labels.email}
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
