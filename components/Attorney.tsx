import React, { useRef } from 'react';
import { Content } from '../types';
import SectionWrapper from './SectionWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface AttorneyProps {
  content: Content['attorney'];
}

const Attorney: React.FC<AttorneyProps> = ({ content }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yImg = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div ref={ref} id="attorney" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Parallax Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative h-[600px] w-full overflow-hidden rounded-sm bg-neutral group cursor-pointer">
              <motion.div style={{ y: yImg, scale: scaleImg }} className="w-full h-full absolute inset-0">
                 <Image 
                  src={content.image} 
                  alt={content.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top shadow-inner transition-all duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0 grayscale-[20%]"
                />
              </motion.div>
              
              {/* Overlay Frame */}
              <div className="absolute inset-0 border-[16px] border-neutral/30 pointer-events-none transition-colors duration-500 group-hover:border-accent/10"></div>
              
              {/* Quote Box */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-12 right-0 bg-primary p-8 max-w-xs shadow-2xl"
              >
                 <div className="w-12 h-1 bg-accent mb-4 transition-all duration-500 group-hover:w-full"></div>
                 <p className="text-white font-serif italic text-lg leading-relaxed">"{content.quote}"</p>
              </motion.div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          {/* Text Section */}
          <SectionWrapper variant="slideLeft" className="w-full lg:w-1/2">
            <div className="inline-block px-3 py-1 border border-accent/50 rounded-full text-accent text-xs tracking-[0.2em] uppercase mb-6">
              {content.badge}
            </div>
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-primary mb-4 leading-tight">
              {content.name}
            </h2>
            <h3 className="text-xl text-accent font-medium mb-10 font-serif italic">
              {content.role}
            </h3>
            
            <div className="prose prose-lg text-dark/70 mb-10">
              <p className="leading-relaxed border-l-4 border-gray-200 pl-6">
                {content.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div>
                 <div className="text-4xl font-bold text-primary mb-1 font-serif">{content.stats.years}</div>
                 <div className="text-xs uppercase tracking-widest text-gray-400">{content.stats.yearsLabel}</div>
              </div>
              <div>
                 <div className="text-4xl font-bold text-primary mb-1 font-serif">{content.stats.languages}</div>
                 <div className="text-xs uppercase tracking-widest text-gray-400">{content.stats.languagesLabel}</div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
};

export default Attorney;
