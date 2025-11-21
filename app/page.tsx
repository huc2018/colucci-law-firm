"use client";


import React, { useState } from 'react';
import { Language } from '../types';
import { content } from '../constants';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PracticeAreas from '../components/PracticeAreas';
import Attorney from '../components/Attorney';
import Vision from '../components/Vision';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Page() {
  const [lang, setLang] = useState<Language>('zh'); // Default to Chinese as per context clues (Chinese prompts), but can be 'en'
  const currentContent = content[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang} setLang={setLang} content={currentContent.nav} />
      
      <main className="flex-grow">
        <Hero content={currentContent.hero} />
        <PracticeAreas content={currentContent.practice} />
        <Attorney content={currentContent.attorney} />
        <Vision content={currentContent.vision} />
        <WhyChooseUs content={currentContent.whyUs} />
        <Contact content={currentContent.contact} />
      </main>

      <Footer content={currentContent.footer} />
      <ScrollToTop />
    </div>
  );
}

