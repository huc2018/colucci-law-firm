import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'fade' | 'stagger';
  delay?: number;
  viewportAmount?: number;
  once?: boolean;
}

const variants = {
  slideUp: {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
    }
  },
  slideLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
    }
  },
  slideRight: {
    hidden: { opacity: 0, x: 80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
    }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1, ease: "linear" as const }
    }
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  className = "", 
  id, 
  variant = 'slideUp',
  delay = 0,
  viewportAmount = 0.2,
  once = true
}) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      transition={{ delay }}
      variants={variants[variant]}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
