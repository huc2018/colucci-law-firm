import React, { useRef } from 'react';
import Link from 'next/link';
import { Content, Language } from '../types';
import { Scale, Users, Home, Briefcase, Globe, Activity, ArrowRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PracticeAreasProps {
  content: Content['practice'];
  lang: Language;
}

const areaRouteMap = {
  litigation: 'litigation',
  family: 'family',
  realEstate: 'real-estate',
  commercial: 'commercial-business',
  immigration: 'immigration',
  injury: 'injury-claims',
} as const;

const PracticeAreas: React.FC<PracticeAreasProps> = ({ content, lang }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax Background Elements
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]);

  const icons = {
    litigation: <Scale className="w-8 h-8" />,
    family: <Users className="w-8 h-8" />,
    realEstate: <Home className="w-8 h-8" />,
    commercial: <Briefcase className="w-8 h-8" />,
    immigration: <Globe className="w-8 h-8" />,
    injury: <Activity className="w-8 h-8" />
  };

  const keys = Object.keys(content.areas) as Array<keyof typeof content.areas>;

  return (
    <div ref={sectionRef} id="practice" className="py-32 bg-neutral relative overflow-hidden">
      
      {/* Parallax Background Watermark */}
      <motion.div 
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] text-dark/5 pointer-events-none z-0 select-none"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
           <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
           <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
           <path d="M7 21h10" />
           <path d="M12 3v18" />
           <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
        </svg>
      </motion.div>

      {/* Background Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-dark/5 to-transparent pointer-events-none"></div>
      
      <SectionWrapper variant="fade" once={false} className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <h4 className="text-accent font-bold uppercase tracking-widest mb-4 text-sm">{content.tag}</h4>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary">
              {content.title}
            </h2>
          </div>
          <div className="hidden md:block">
            <div className="h-px w-32 bg-accent mb-8"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keys.map((key) => (
            <Link
              key={key} 
              href={`/${lang}/practice-areas/${areaRouteMap[key]}`}
              aria-label={`${content.areas[key].title} details`}
              className="group block bg-white p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-accent/30 relative overflow-hidden rounded-sm"
            >
              {/* Top Line Accent */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500 ease-out"></div>
              
              <div className="mb-8 flex justify-between items-start">
                <div className="p-4 bg-neutral text-primary rounded-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {icons[key]}
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-accent group-hover:translate-x-2 transition-all duration-300" />
              </div>
              
              <h3 className="text-2xl font-serif font-semibold text-primary mb-6 group-hover:text-accent transition-colors">
                {content.areas[key].title}
              </h3>
              
              <ul className="space-y-3">
                {content.areas[key].items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-dark/60 text-sm group-hover:text-dark/80 transition-colors">
                    <span className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-accent rounded-full mr-3 transition-colors duration-300"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default PracticeAreas;
