import React, { useRef, useState, useEffect } from 'react';
import { Content } from '../types';
import { ShieldCheck, UserCheck, Languages, Puzzle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface WhyChooseUsProps {
  content: Content['whyUs'];
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ content }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Disable parallax on screens smaller than md (768px) where layout is 1 column
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax values for columns - creates a "floating" disjointed feel
  const yColumn1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yColumn2 = useTransform(scrollYProgress, [0, 1], [50, -20]);

  const cards = [
    { 
      icon: ShieldCheck, 
      data: content.items.experience,
      delay: 0
    },
    { 
      icon: UserCheck, 
      data: content.items.personal,
      delay: 0.1
    },
    { 
      icon: Languages, 
      data: content.items.language,
      delay: 0.2
    },
    { 
      icon: Puzzle, 
      data: content.items.complex,
      delay: 0.3
    }
  ];

  return (
    <div ref={sectionRef} id="why-us" className="py-32 bg-primary text-neutral relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-serif font-bold mb-6 text-white leading-tight"
          >
             {/* 
                Dual-line layout:
                1. Prefix ("Why Choose"): Block level, smaller, elegant spacing.
                2. Name ("Joseph C..."): Block level, forced one line (whitespace-nowrap).
                   Responsive font sizing ensures it fits on mobile without wrapping:
                   - Mobile: text-2xl (approx 24px) fits ~320px width
                   - Tablet: text-4xl
                   - Desktop: text-6xl
             */}
            <span className="block text-3xl md:text-4xl text-white/80 mb-3 font-medium">
              {content.titlePrefix}
            </span>
            <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-accent whitespace-nowrap tracking-wide">
              {content.titleName}
            </span>
          </motion.h2>
          
          <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "100px" }}
             transition={{ duration: 0.8, delay: 0.3 }}
             viewport={{ once: true }}
             className="h-1 bg-white/20 mx-auto mb-8"
          ></motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-white/90 font-medium tracking-wide italic"
          >
            — {content.slogan} —
          </motion.p>
        </div>

        {/* Increased gap for mobile (gap-y-12) for a more spacious, high-end look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12 md:gap-y-8">
          {cards.map((card, index) => {
            // Apply different parallax to even/odd items ONLY on non-mobile screens
            // On mobile (1 col), parallax causes overlap, so we disable it (y=0)
            const y = isMobile ? 0 : (index % 2 === 0 ? yColumn1 : yColumn2);
            
            return (
              <motion.div
                key={index}
                style={{ y }} // Apply parallax only on desktop
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: card.delay }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white/5 backdrop-blur-md p-8 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-colors duration-300 relative z-10">
                  <card.icon className="w-7 h-7 text-accent group-hover:text-primary transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-accent transition-colors relative z-10">
                  {card.data.title}
                </h3>
                <p className="text-neutral/60 text-sm leading-relaxed group-hover:text-white/90 transition-colors relative z-10">
                  {card.data.desc}
                </p>

                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;