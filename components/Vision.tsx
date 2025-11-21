
import React, { useRef } from 'react';
import { Content } from '../types';
import SectionWrapper from './SectionWrapper';
import { Quote, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface VisionProps {
  content: Content['vision'];
}

const Vision: React.FC<VisionProps> = ({ content }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax calculations
  // Background blobs move slower/faster
  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  // Content parallax: Text moves up slightly, Card moves up faster/slower to create depth separation
  const yText = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yCard = useTransform(scrollYProgress, [0, 1], [100, -50]); 

  return (
    <div ref={ref} className="py-32 bg-primary text-white relative overflow-hidden">
      {/* Parallax Background Accents */}
      <motion.div 
        style={{ y: yBg1 }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"
      ></motion.div>
      <motion.div 
        style={{ y: yBg2 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Main Content */}
          <motion.div style={{ y: yText }} className="lg:w-1/2">
             <SectionWrapper variant="slideUp">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-accent text-xs font-bold tracking-widest uppercase mb-8">
                  <Sparkles size={14} />
                  {content.tag}
                </div>
                
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                  {content.title}
                </h2>
                
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12 font-light">
                  {content.description}
                </p>
                
                <div className="space-y-6">
                   {content.principles.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 group-hover:scale-150 transition-transform duration-300"></div>
                        <p className="text-white/70 text-lg group-hover:text-white transition-colors">{item}</p>
                      </div>
                   ))}
                </div>
             </SectionWrapper>
          </motion.div>

          {/* Right Column: Vision Card */}
          <motion.div style={{ y: yCard }} className="lg:w-1/2">
             <SectionWrapper variant="slideLeft" delay={0.2} className="h-full">
                <div className="bg-[#0f2b5e] border border-white/10 rounded-xl p-8 md:p-12 h-full relative hover:border-accent/30 transition-colors duration-500 shadow-2xl backdrop-blur-sm">
                   
                   <div className="mb-8">
                      <Quote className="text-accent mb-4 w-10 h-10 opacity-80" />
                      <h4 className="text-accent font-bold text-lg mb-6 tracking-wide">{content.quoteTitle}</h4>
                      <p className="text-2xl md:text-3xl font-serif leading-relaxed text-white">
                        {content.quote}
                      </p>
                   </div>

                   <div className="w-full h-px bg-white/10 my-8"></div>

                   <div className="bg-white/5 rounded-lg p-6 border border-white/5 transition-transform duration-300 hover:scale-[1.02]">
                      <h3 className="text-xl font-bold text-white mb-2">{content.firmName}</h3>
                      <p className="text-white/60 text-sm mb-4">{content.firmDesc}</p>
                      <p className="text-white/80 italic font-serif leading-relaxed">
                        "{content.firmSlogan}"
                      </p>
                   </div>

                   <div className="flex flex-wrap gap-3 mt-8">
                      {content.tags.map((tag, idx) => (
                        <span key={idx} className="px-4 py-2 rounded-full border border-white/20 text-xs md:text-sm text-white/70 hover:bg-white hover:text-primary transition-colors duration-300 cursor-default">
                           {tag}
                        </span>
                      ))}
                   </div>

                </div>
             </SectionWrapper>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Vision;
