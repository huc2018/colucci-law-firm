"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Language } from "../types";
import { content } from "../constants";
import Navbar from "./Navbar";
import Hero from "./Hero";
import PracticeAreas from "./PracticeAreas";
import Attorney from "./Attorney";
import Vision from "./Vision";
import WhyChooseUs from "./WhyChooseUs";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

type HomePageProps = {
  initialLang: Language;
};

export default function HomePage({ initialLang }: HomePageProps) {
  const router = useRouter();
  const [lang, setLang] = useState<Language>(initialLang);

  const currentContent = useMemo(() => content[lang], [lang]);

  const handleSetLang = (nextLang: Language) => {
    setLang(nextLang);
    router.push(`/${nextLang}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang} setLang={handleSetLang} content={currentContent.nav} />

      <main id="main-content" className="flex-grow">
        <Hero content={currentContent.hero} />
        <PracticeAreas content={currentContent.practice} lang={lang} />
        <Vision content={currentContent.vision} />
        <Attorney content={currentContent.attorney} />
        <WhyChooseUs content={currentContent.whyUs} />
        <Contact content={currentContent.contact} />
      </main>

      <Footer
        content={currentContent.footer}
        nav={currentContent.nav}
        contact={currentContent.contact}
      />
      <ScrollToTop />
    </div>
  );
}
