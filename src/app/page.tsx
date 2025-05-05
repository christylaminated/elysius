'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import InsightSection from '@/components/InsightSection';
import ElysiusDifference from '@/components/ElysiusDifference';
import PersonasSection from '@/components/PersonasSection';
import ProductPreview from '@/components/ProductPreview';
import Footer from '@/components/Footer';
import TheBreakdown from '@/components/TheBreakdown';

const GlowingWave = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute w-full h-full"
    >
      {/* Main curved lines */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 600 C 300 400, 700 800, 1000 600"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 500 C 400 700, 600 300, 1000 500"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#d4af37', stopOpacity: 0.2 }} />
            <stop offset="50%" style={{ stopColor: '#e6c35c', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: '#d4af37', stopOpacity: 0.2 }} />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  </div>
);

export default function Home() {
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    // Remove any hash from the URL without triggering a refresh
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-navy relative overflow-hidden">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center">
          <GlowingWave />
          
          {/* Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gold/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-white">Sleep deeper,</span>{' '}
                <span className="text-white/60">stress less</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                By tuning your brain with real-time insights. Elysius reads your brainwaves via Muse and uses AI to guide your sleep and focus in real time.
              </p>
              <motion.button
                onClick={() => {
                  const waitlistSection = document.getElementById('waitlist');
                  if (waitlistSection) {
                    window.scrollTo({
                      top: waitlistSection.offsetTop - 100,
                      behavior: 'smooth'
                    });
                  }
                }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.15)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg text-gold border border-gold/30 bg-gold/5 hover:bg-gold/10 transition-all duration-300 backdrop-blur-sm"
              >
                Get Started →
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* The Breakdown Section */}
        <TheBreakdown />
        
        {/* Elysius Difference Section (moved up) */}
        <ElysiusDifference />
        
        {/* Other Sections */}
        <InsightSection />
        <PersonasSection />
        <ProductPreview />
        <Footer />
      </main>
    </>
  );
}
