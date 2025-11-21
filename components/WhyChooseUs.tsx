
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

  // Parallax values for columns
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
    // Changed background to bg-white/neutral to contrast with the Dark Vision section above it
    <div ref={sectionRef} id="why-us" className="py-32 bg-white text-dark relative overflow-hidden">
      {/* Abstract Background - Subtle Grey Blobs instead of glowing lights */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 text-primary"
          >
            {content.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-accent font-medium tracking-wide italic"
          >
            — {content.slogan} —
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12 md:gap-y-8">
          {cards.map((card, index) => {
            const y = isMobile ? 0 : (index % 2 === 0 ? yColumn1 : yColumn2);
            
            return (
              <motion.div
                key={index}
                style={{ y }} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: card.delay }}
                viewport={{ once: true, margin: "-50px" }}
                // Changed card style: White bg with shadow instead of glassmorphism
                className="bg-white p-8 border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group rounded-sm"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <card.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {card.data.title}
                </h3>
                <p className="text-dark/60 text-sm leading-relaxed group-hover:text-dark/80 transition-colors">
                  {card.data.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
