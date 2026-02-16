import Link from "next/link";

export type NotFoundLang = "zh" | "en";

type NotFoundPageProps = {
  lang: NotFoundLang;
};

const notFoundContent: Record<
  NotFoundLang,
  {
    codeLabel: string;
    title: string;
    description: string;
    home: string;
    contact: string;
    call: string;
    langSwitch: string;
  }
> = {
  zh: {
    codeLabel: "错误 404",
    title: "页面未找到",
    description:
      "您访问的页面可能已移动、链接有误，或暂时不可用。您可以返回首页、查看联系我们，或直接电话咨询。",
    home: "返回首页",
    contact: "联系我们",
    call: "电话咨询",
    langSwitch: "English",
  },
  en: {
    codeLabel: "Error 404",
    title: "Page Not Found",
    description:
      "The page may have been moved, the link may be incorrect, or it may be temporarily unavailable. You can return home, visit contact, or call now.",
    home: "Back to Home",
    contact: "Contact Us",
    call: "Call Now",
    langSwitch: "中文",
  },
};

export default function NotFoundPage({ lang }: NotFoundPageProps) {
  const content = notFoundContent[lang];
  const homeHref = `/${lang}`;
  const contactHref = `/${lang}#contact`;
  const switchHref = lang === "zh" ? "/en" : "/zh";

  return (
    <main className="relative min-h-screen overflow-hidden bg-primary text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/law-building.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/85 to-primary/95" aria-hidden="true" />

      <section className="relative container mx-auto px-6 py-16 md:py-24">
        <p className="inline-block rounded-full border border-accent/60 bg-black/20 px-4 py-1 text-sm uppercase tracking-[0.2em] text-accent">
          {content.codeLabel}
        </p>

        <h1 className="mt-6 max-w-3xl text-4xl font-serif font-bold leading-tight md:text-6xl">
          {content.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
          {content.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={homeHref}
            className="inline-flex items-center rounded-sm bg-accent px-6 py-3 font-semibold text-primary transition hover:brightness-95"
          >
            {content.home}
          </Link>
          <Link
            href={contactHref}
            className="inline-flex items-center rounded-sm border border-accent/70 px-6 py-3 font-semibold text-accent transition hover:bg-accent/10"
          >
            {content.contact}
          </Link>
          <a
            href="tel:+18482665888"
            className="inline-flex items-center rounded-sm border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            {content.call}
          </a>
        </div>

        <Link href={switchHref} className="mt-8 inline-block text-sm text-white/80 underline-offset-4 hover:underline">
          {content.langSwitch}
        </Link>
      </section>
    </main>
  );
}
