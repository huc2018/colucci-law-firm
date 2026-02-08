
import React, { useState, useRef } from 'react';
import { Content } from '../types';
import { Phone, Mail, MapPin, Printer, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface ContactProps {
  content: Content['contact'];
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  const [activeMap, setActiveMap] = useState<'edison' | 'tomsRiver'>('edison');
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax Logic
  // Left column (Card) moves slightly slower up
  const yLeft = useTransform(scrollYProgress, [0, 1], [40, -40]);
  // Right column (Map) moves slightly faster down/up difference
  const yRight = useTransform(scrollYProgress, [0, 1], [60, -16]);
  // Background decorative element movement
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const mapConfig = {
    edison: {
      title: content.mapTitles.edison,
      src: 'https://www.google.com/maps?q="Colucci+Law+Firm,+P.+C.,+1967+NJ-27+Suite+26,+Edison,+NJ+08817"&output=embed'
    },
    tomsRiver: {
      title: content.mapTitles.tomsRiver,
      src: "https://maps.google.com/maps?q=1%20Hadley%20Ave%2C%20Toms%20River%2C%20NJ%2008753&t=&z=15&ie=UTF8&iwloc=&output=embed"
    }
  };

  const getPhoneNumber = (str: string) => {
    // Simple regex to extract the first sequence of numbers that looks like a phone number
    const match = str.match(/[\d-]{7,}/);
    return match ? match[0] : '';
  };

  return (
    <div ref={ref} id="contact" className="py-32 bg-neutral relative overflow-hidden">
      {/* Decorative background element with parallax */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : yBg }}
        className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none"
      ></motion.div>
      <div className="absolute top-20 left-[-100px] w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionWrapper variant="slideUp" className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6">
            {content.title}
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto"></div>
        </SectionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Contact Info - Left Side with Parallax */}
          <motion.div style={{ y: shouldReduceMotion ? 0 : yLeft }} className="lg:col-span-5 space-y-12">
            {/* Hotline Card */}
            <SectionWrapper variant="slideRight" className="bg-white p-8 md:p-10 shadow-2xl border-l-8 border-accent relative overflow-hidden rounded-sm">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Phone size={120} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-8 border-b pb-4 inline-block">
                {content.hotline}
              </h3>
              <div className="space-y-8 relative z-10">

                {/* Phone 1 */}
                <div className="group">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="hidden md:flex w-12 h-12 bg-primary/5 rounded-full items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-lg md:text-xl leading-tight">{content.phones.mandarin}</p>
                      <span className="hidden md:inline-block text-xs text-accent uppercase tracking-widest font-bold mt-1">{content.priorityLineLabel}</span>
                    </div>
                  </div>
                  {/* Mobile Only Priority Button */}
                  <a
                    href={`tel:${getPhoneNumber(content.phones.mandarin)}`}
                    className="md:hidden flex items-center justify-between w-full bg-primary text-white px-4 py-3 rounded-sm shadow-lg active:scale-98 transition-transform"
                  >
                    <span className="text-sm font-bold uppercase tracking-widest">{content.callPriorityLabel}</span>
                    <div className="bg-accent text-primary p-1 rounded-sm">
                      <Phone size={14} fill="currentColor" />
                    </div>
                  </a>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-100"></div>

                {/* Phone 2 */}
                <div className="group">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="hidden md:flex w-12 h-12 bg-primary/5 rounded-full items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-lg md:text-xl leading-tight">{content.phones.fuzhou}</p>
                      <span className="hidden md:inline-block text-xs text-accent uppercase tracking-widest font-bold mt-1">{content.priorityLineLabel}</span>
                    </div>
                  </div>
                  {/* Mobile Only Priority Button */}
                  <a
                    href={`tel:${getPhoneNumber(content.phones.fuzhou)}`}
                    className="md:hidden flex items-center justify-between w-full bg-primary text-white px-4 py-3 rounded-sm shadow-lg active:scale-98 transition-transform"
                  >
                    <span className="text-sm font-bold uppercase tracking-widest">{content.callPriorityLabel}</span>
                    <div className="bg-accent text-primary p-1 rounded-sm">
                      <Phone size={14} fill="currentColor" />
                    </div>
                  </a>
                </div>

              </div>
            </SectionWrapper>

            {/* General Info */}
            <SectionWrapper variant="slideRight" delay={0.2} className="pl-4 border-l border-primary/10">
              <div className="space-y-6">
                <div className="flex items-center text-dark/80 hover:text-primary transition-colors group">
                  <Phone className="w-5 h-5 mr-4 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-lg tracking-wide font-medium">{content.phones.office}</span>
                </div>
                <div className="flex items-center text-dark/80 hover:text-primary transition-colors group">
                  <Printer className="w-5 h-5 mr-4 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-lg tracking-wide font-medium">{content.phones.fax}</span>
                </div>
                <div className="flex items-center text-dark/80 hover:text-primary transition-colors group">
                  <Mail className="w-5 h-5 mr-4 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-lg tracking-wide font-medium">{content.email}</span>
                </div>
                <div className="flex items-center text-dark/80 group">
                  <Clock className="w-5 h-5 mr-4 text-accent" />
                  <div>
                    <span className="text-lg tracking-wide font-medium">{content.hours.weekday}</span> <br />
                    <span className="text-lg tracking-wide font-medium">{content.hours.saturday}</span>
                  </div>

                </div>
              </div>
            </SectionWrapper>
          </motion.div>

          {/* Locations & Map - Right Side with Parallax */}
          <motion.div style={{ y: shouldReduceMotion ? 0 : yRight }} className="lg:col-span-7 flex flex-col shadow-2xl rounded-sm overflow-hidden border border-gray-100 bg-white">

            {/* Address Selector Header - Simplified Minimal Design */}
            <SectionWrapper variant="slideLeft" className="bg-white p-8 md:p-10 relative z-10">
              <div className="flex items-center mb-8">
                <div className="p-2 bg-primary/5 rounded-full mr-4">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold tracking-wide text-primary">{content.locations.title}</h3>
              </div>

              {/* Minimal Tabs */}
              <div className="flex border-b border-gray-100 mb-6">
                <button
                  onClick={() => setActiveMap('edison')}
                  className={`pb-4 px-6 text-lg font-serif font-bold transition-all duration-300 relative ${activeMap === 'edison' ? 'text-primary' : 'text-gray-400 hover:text-primary/70'
                    }`}
                >
                  {content.locations.edisonLabel}
                  {activeMap === 'edison' && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-all duration-300" />
                  )}
                </button>
                <button
                  onClick={() => setActiveMap('tomsRiver')}
                  className={`pb-4 px-6 text-lg font-serif font-bold transition-all duration-300 relative ${activeMap === 'tomsRiver' ? 'text-primary' : 'text-gray-400 hover:text-primary/70'
                    }`}
                >
                  {content.locations.tomsRiverLabel}
                  {activeMap === 'tomsRiver' && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-all duration-300" />
                  )}
                </button>
              </div>

              {/* Address Display */}
              <div className="flex items-start animate-fade-in transition-all duration-300 min-h-[3rem]">
                <ArrowRight className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg text-dark/80 leading-relaxed">
                  {activeMap === 'edison' ? content.locations.edison : content.locations.tomsRiver}
                </p>
              </div>
            </SectionWrapper>

            {/* Map Embed */}
            <SectionWrapper variant="scale" delay={0.2} className="h-[450px] w-full bg-gray-100 relative group border-t border-gray-100">
              <iframe
                key={activeMap} // Force re-render animation on change
                title={mapConfig[activeMap].title}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src={mapConfig[activeMap].src}
                // Full color on mobile (block), Gray on desktop (hidden lg:block) + Hover Color
                className="w-full h-full grayscale-0 lg:grayscale lg:hover:grayscale-0 transition-all duration-1000 ease-in-out"
                loading="lazy"
              ></iframe>
            </SectionWrapper>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
