'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-navy/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-10 w-10"
        >
          <div 
            onClick={() => scrollToSection('hero')}
            className="w-10 h-10 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center cursor-pointer"
          >
            <Image
              src="/logo.svg"
              alt="Elysius"
              width={24}
              height={24}
              priority
              className="transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-white/60 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('breakdown')} 
            className="text-white/60 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
          >
            The Breakdown
          </button>
          <button 
            onClick={() => scrollToSection('difference')} 
            className="text-white/60 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
          >
            About us
          </button>
          <button 
            onClick={() => scrollToSection('insights')} 
            className="text-white/60 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
          >
            Insights
          </button>
          <button 
            onClick={() => scrollToSection('waitlist')} 
            className="text-white/60 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
          >
            Contact
          </button>
          <motion.button
            onClick={() => scrollToSection('waitlist')}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.15)' }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full text-sm text-gold border border-gold/30 bg-gold/5 hover:bg-gold/10 transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            Get Started
          </motion.button>
        </div>
        <button className="md:hidden text-white/60 hover:text-white transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
} 