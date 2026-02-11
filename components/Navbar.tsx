
import React, { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import { Language, Content } from '../types';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content['nav'];
}

const MobileMenuButton = ({ isOpen, onClick, controlsId }: { isOpen: boolean; onClick: () => void; controlsId: string }) => {
  return (
    <motion.button
      initial={false}
      animate={isOpen ? "open" : "closed"}
      onClick={onClick}
      type="button"
      aria-expanded={isOpen}
      aria-controls={controlsId}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="flex flex-col justify-center items-center w-10 h-10 md:w-12 md:h-12 space-y-1.5 group focus:outline-none z-50 relative"
    >
      {/* Top Line */}
      <motion.span
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 8 },
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-6 md:w-7 h-0.5 bg-white group-hover:bg-accent block rounded-full transition-colors duration-300"
      />
      {/* Middle Line */}
      <motion.span
        variants={{
          closed: { opacity: 1, x: 0 },
          open: { opacity: 0, x: 10 },
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-6 md:w-7 h-0.5 bg-white group-hover:bg-accent block rounded-full transition-colors duration-300"
      />
      {/* Bottom Line */}
      <motion.span
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -8 },
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-6 md:w-7 h-0.5 bg-white group-hover:bg-accent block rounded-full transition-colors duration-300"
      />
    </motion.button>
  );
};

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const mobileMenuId = "mobile-menu";
  const firstMobileLinkRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'practice', 'attorney', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 300; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    firstMobileLinkRef.current?.focus();
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 96; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'zh' : 'en');
  };

  const NavLink = ({ id, label }: { id: string; label: string }) => {
    const isActive = activeSection === id;
    return (
      <button
        onClick={() => scrollToSection(id)}
        aria-current={isActive ? "page" : undefined}
        className="relative h-full px-4 xl:px-6 flex items-center justify-center group"
      >
        {isActive && (
          <motion.div
            layoutId="navbar-indicator"
            className="absolute inset-0 w-full h-full bg-gradient-to-b from-accent/20 via-accent/5 to-transparent border-t-[3px] border-accent"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        
        {!isActive && (
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
        )}

        <span 
          className={`relative z-10 uppercase tracking-[0.2em] font-semibold transition-all duration-500 ${
            isScrolled ? 'text-xs md:text-sm' : 'text-sm md:text-base'
          } ${
            isActive 
              ? 'text-white scale-105' 
              : 'text-white/60 hover:text-accent'
          }`}
        >
          {label}
        </span>
      </button>
    );
  };

  const MobileNavLink = React.forwardRef<HTMLButtonElement, { id: string; label: string }>(
    ({ id, label }, ref) => {
    const isActive = activeSection === id;
    return (
      <button
        ref={ref}
        onClick={() => scrollToSection(id)}
        aria-current={isActive ? "page" : undefined}
        className={`relative w-full text-left py-6 px-6 border-b border-white/5 transition-all duration-300 flex items-center justify-between overflow-hidden group ${
          isActive ? 'bg-white/5' : 'hover:bg-white/5'
        }`}
      >
        <span className={`relative z-10 text-base md:text-lg uppercase tracking-widest transition-colors duration-300 ${
          isActive ? 'text-accent font-bold' : 'text-white/70 group-hover:text-white'
        }`}>
          {label}
        </span>
        
        {isActive && (
          <motion.div 
            layoutId="mobile-indicator"
            className="absolute left-0 top-0 bottom-0 w-1 bg-accent"
          />
        )}
      </button>
    );
  });
  MobileNavLink.displayName = "MobileNavLink";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 border-b ${
        isScrolled 
          ? 'bg-primary/95 backdrop-blur-xl border-white/10 h-20 md:h-24 shadow-2xl'
          : 'bg-transparent border-transparent h-24 md:h-32'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 h-full flex justify-between items-center">
        
        {/* Logo Section */}
        <button
          className="relative z-50 cursor-pointer flex items-center h-full group"
          onClick={() => scrollToSection('hero')}
          type="button"
          aria-label="Scroll to top of page"
        >
          <div className="flex items-center gap-3 md:gap-4">
             {/* Logo Image */}
             <Image
               src="/images/logo_gold.svg"
               alt="Colucci Law Firm logo"
               width={48}
               height={48}
               className={`transition-all duration-700 flex-shrink-0 ${
                 isScrolled 
                 ? 'h-9 w-9 md:h-10 md:w-10' 
                 : 'h-10 w-10 md:h-12 md:w-12'
               }`}
             />
             
             {/* Vertical Divider - Visible only on Desktop */}
             <div className={`hidden md:block w-px bg-white/20 transition-all duration-700 ${isScrolled ? 'h-6' : 'h-8'}`}></div>

             {/* Text Container - Unified Brand Name */}
             <span className={`font-serif font-bold text-white transition-all duration-700 tracking-wide whitespace-nowrap ${
               isScrolled 
               ? 'text-base md:text-lg lg:text-xl' 
               : 'text-lg md:text-xl lg:text-2xl'
             }`}>
               <span className="max-[436px]:hidden">COLUCCI LAW FIRM, P.C.</span>
               <span className="hidden max-[436px]:inline">COLUCCI LF, P.C.</span>
             </span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center h-full gap-2">
          <div className="flex items-center h-full">
            <NavLink id="practice" label={content.practice} />
            <NavLink id="attorney" label={content.attorney} />
            <NavLink id="why-us" label={content.whyUs} />
            <NavLink id="contact" label={content.contact} />
          </div>

          <div className="h-12 w-px bg-white/10 mx-4 xl:mx-6"></div>

          <button
            onClick={toggleLang}
            className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors group px-4 py-2 rounded border border-transparent hover:border-white/10 hover:bg-white/5"
          >
            <Globe size={20} className="group-hover:rotate-180 transition-transform duration-700" />
            <span className="text-xs font-bold tracking-[0.15em] uppercase">{lang === 'en' ? '中文' : 'English'}</span>
          </button>
        </div>

        {/* Mobile Menu Controls */}
        <div className="lg:hidden flex items-center gap-3 md:gap-6">
          <button onClick={toggleLang} className="text-white/80 hover:text-accent p-2">
            <span className="text-[10px] font-bold border border-white/20 rounded px-2 py-1 tracking-wider">
              {lang === 'en' ? '中文' : 'EN'}
            </span>
          </button>
          
          <MobileMenuButton 
            isOpen={isMobileMenuOpen} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            controlsId={mobileMenuId}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          id={mobileMenuId}
          className="lg:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-t border-white/10 shadow-2xl border-b"
        >
          <div className="flex flex-col p-0">
            <MobileNavLink ref={firstMobileLinkRef} id="practice" label={content.practice} />
            <MobileNavLink id="attorney" label={content.attorney} />
            <MobileNavLink id="why-us" label={content.whyUs} />
            <MobileNavLink id="contact" label={content.contact} />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
