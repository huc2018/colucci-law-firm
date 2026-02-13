import React, { useRef } from 'react';
import { Content } from '../types';
import { Phone, MapPin, Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

interface FooterProps {
  content: Content['footer'];
  nav: Content['nav'];
  contact: Content['contact'];
}

// Helper to scroll smoothly
const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const navHeight = 96;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
};

const Footer: React.FC<FooterProps> = ({ content, nav, contact }) => {
  const ref = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();
  const copyrightText = content.copyright.replace(
    /\b(19|20)\d{2}\b/,
    String(currentYear),
  );
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect for a background element
  const yGlow = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacityGlow = useTransform(scrollYProgress, [0, 0.8], [0, 0.15]);

  return (
    <footer ref={ref} className="bg-dark text-white border-t border-white/10 relative z-10 overflow-hidden">
      
      {/* Parallax Background Element (Golden Glow) */}
      <motion.div 
        style={{ y: yGlow, opacity: opacityGlow }}
        className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] pointer-events-none"
      />

      <SectionWrapper variant="fade" once={false} className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white tracking-wider mb-1">COLUCCI</h3>
              <p className="text-xs uppercase tracking-[0.25em] text-accent">Law Firm, P.C.</p>
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              {content.description}
            </p>
            <div className="pt-4">
              <div className="w-12 h-1 bg-accent"></div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6">{content.quickLinks}</h4>
            <ul className="space-y-4">
              {[
                { id: 'practice', label: nav.practice },
                { id: 'attorney', label: nav.attorney },
                { id: 'why-us', label: nav.whyUs },
                { id: 'contact', label: nav.contact },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollTo(link.id);
                    }}
                    className="text-white/60 hover:text-accent transition-colors duration-300 flex items-center text-sm uppercase tracking-widest"
                  >
                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full mr-3 group-hover:bg-accent"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (Simplified) */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6">{content.contactInfo}</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-white/60 text-sm">
                <Phone className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" />
                <span>{contact.phones.mandarin}<br/>{contact.phones.fuzhou}</span>
              </li>
              <li className="flex items-start text-white/60 text-sm">
                <MapPin className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" />
                <span>{contact.locations.edison}<br/>{contact.locations.tomsRiver}</span>
              </li>
              <li className="flex items-center text-white/60 text-sm">
                <Mail className="w-5 h-5 text-accent mr-3 shrink-0" />
                <span>{contact.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/30 text-[10px] leading-relaxed tracking-wide text-justify md:text-left opacity-80 hover:opacity-100 transition-opacity duration-500">
            {content.disclaimer}
          </p>
        </div>
      </SectionWrapper>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8 bg-black/20 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs tracking-wider text-center md:text-left">
            {copyrightText}
          </p>
          <div className="flex items-center gap-4 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Decorative placeholder icons for social proof/trust */}
             <div className="text-[10px] uppercase tracking-widest border border-white/50 px-2 py-1 rounded">NJ Bar Association</div>
             <div className="text-[10px] uppercase tracking-widest border border-white/50 px-2 py-1 rounded">20+ Years</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
