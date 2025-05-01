'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false); // Close menu after clicking
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'breakdown', label: 'The Breakdown' },
    { id: 'difference', label: 'About us' },
    { id: 'insights', label: 'Insights' },
    { id: 'waitlist', label: 'Contact' }
  ];

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.id !== 'waitlist' ? (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className="text-white/60 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.15)' }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full text-sm text-gold border border-gold/30 bg-gold/5 hover:bg-gold/10 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Get Started
              </motion.button>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white/60 hover:text-white transition-colors duration-300 p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-navy/98 backdrop-blur-sm border-t border-white/5"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`text-left py-2 ${
                    item.id === 'waitlist'
                      ? 'text-gold hover:text-gold/80'
                      : 'text-white/60 hover:text-white'
                  } transition-colors duration-300 text-sm cursor-pointer`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 