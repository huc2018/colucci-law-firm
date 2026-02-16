import React, { useRef, useEffect, useState } from 'react';
import { Content } from '../types';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

interface HeroProps {
  content: Content['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const syncIsDesktop = () => setIsDesktop(mediaQuery.matches);

    syncIsDesktop();
    mediaQuery.addEventListener('change', syncIsDesktop);
    return () => mediaQuery.removeEventListener('change', syncIsDesktop);
  }, []);

  // Parallax effect: Background moves slower than foreground
  const yBg = useTransform(scrollY, [0, 1000], [0, 250]);
  const yText = useTransform(scrollY, [0, 500], [0, 120]);
  const opacityText = useTransform(scrollY, [0, 350], [1, 0]);
  const isMotionSafe = !shouldReduceMotion && isDesktop;

  return (
    <div ref={ref} id="hero" className="hero-mobile-landscape relative h-screen w-full overflow-hidden bg-dark flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div
        style={{ y: isMotionSafe ? yBg : 0 }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <Image
          src="/images/hero-bg.webp"
          alt="Modern Law Firm Architecture"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlays for legibility and brand color consistency */}
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="hero-mobile-landscape-content relative container mx-auto px-6 z-10 flex flex-col items-start justify-center h-full -translate-y-6 md:translate-y-0">
        <motion.div
          style={{ y: isMotionSafe ? yText : 0, opacity: isMotionSafe ? opacityText : 1 }}
          initial={false}
          animate={isMotionSafe ? { opacity: 1, x: 0 } : false}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full"
        >
          <motion.div
            initial={isMotionSafe ? { width: 0 } : false}
            animate={isMotionSafe ? { width: "100px" } : false}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-accent mb-8"
          />

          <motion.h2
            initial={isMotionSafe ? { y: 10 } : false}
            animate={isMotionSafe ? { y: 0 } : false}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="text-accent font-medium tracking-[0.3em] uppercase mb-4 text-sm md:text-base pl-1"
          >
            {content.subtitle}
          </motion.h2>

          {/* 
             Updated Heading:
             1. whitespace-nowrap: Forces text onto one line.
             2. Responsive sizes: Adjusted to fit on mobile (text-2xl) up to huge on desktop (text-8xl).
             3. uppercase: For "Atmospheric" look.
          */}
          <motion.h1
            initial={isMotionSafe ? { y: 18, scale: 0.99 } : false}
            animate={isMotionSafe ? { y: 0, scale: 1 } : false}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(1.75rem,5vw,2.25rem)] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-lg uppercase whitespace-normal sm:whitespace-nowrap"
          >
            {content.title}
          </motion.h1>

          <div className="space-y-4 mb-12 pl-1 border-l-2 border-white/20">
            {content.slogans.map((slogan, index) => (
              <motion.p
                key={index}
                initial={isMotionSafe ? { opacity: 0, y: 16 } : false}
                animate={isMotionSafe ? { opacity: 1, y: 0 } : false}
                transition={{ delay: 0.4 + (index * 0.12), duration: 0.6 }}
                className="text-[clamp(1.15rem,3.4vw,1.125rem)] sm:text-lg md:text-2xl text-white/90 font-light italic pl-6"
              >
                "{slogan}"
              </motion.p>
            ))}
          </div>

          <motion.button
            initial={isMotionSafe ? { opacity: 0, y: 16 } : false}
            animate={isMotionSafe ? { opacity: 1, y: 0 } : false}
            transition={{ delay: 0.8, duration: 0.6 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden bg-accent text-primary font-bold py-4 px-10 rounded-sm transition-all duration-300 shadow-lg uppercase tracking-widest hover:shadow-accent/50"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">{content.cta}</span>
            <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out"></div>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={isMotionSafe ? { opacity: 0 } : false}
        animate={isMotionSafe ? { opacity: 1 } : false}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/30"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
