import React, { useRef } from 'react';
import { Content } from '../types';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  content: Content['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effect: Background moves slower than foreground
  const yBg = useTransform(scrollY, [0, 1000], [0, 400]);
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div ref={ref} id="hero" className="relative h-screen w-full overflow-hidden bg-dark flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        >
          {/* Using a stock video of modern corporate/legal architecture */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-time-lapse-of-corporate-buildings-4545-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlays for legibility and brand color consistency */}
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative container mx-auto px-6 z-10 flex flex-col items-start justify-center h-full">
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full"
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-accent mb-8"
          />
          
          <h2 className="text-accent font-medium tracking-[0.3em] uppercase mb-4 text-sm md:text-base pl-1">
            {content.subtitle}
          </h2>
          
          {/* 
             Updated Heading:
             1. whitespace-nowrap: Forces text onto one line.
             2. Responsive sizes: Adjusted to fit on mobile (text-2xl) up to huge on desktop (text-8xl).
             3. uppercase: For "Atmospheric" look.
          */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-lg uppercase whitespace-nowrap">
            {content.title}
          </h1>
          
          <div className="space-y-4 mb-12 pl-1 border-l-2 border-white/20">
            {content.slogans.map((slogan, index) => (
              <motion.p 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (index * 0.2), duration: 0.8 }}
                className="text-lg md:text-2xl text-white/90 font-light italic pl-6"
              >
                "{slogan}"
              </motion.p>
            ))}
          </div>

          <motion.button 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.5, duration: 0.8 }}
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/30"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default Hero;