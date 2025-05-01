'use client';

import { motion } from 'framer-motion';

function WaveBackground() {
  return (
    <div className="wave-bg">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="wave-line"
          style={{
            opacity: 0.05 - i * 0.01,
            animationDelay: `${-i * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WaveBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 to-transparent pointer-events-none" />
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto pt-32"
        >
          <h1 className="heading-1 mb-6 gold-glow font-space-grotesk">
            You think it's stress. But it's your sleep.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
            Elysius reveals the hidden sleep disruption behind your anxiety, brain fog, and burnout — and helps you recover from the inside out.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center relative z-30"
          >
            <motion.button
              onClick={() => {
                const waitlistSection = document.getElementById('waitlist');
                if (waitlistSection) {
                  window.scrollTo({
                    top: waitlistSection.offsetTop - 100, // Offset for navbar
                    behavior: 'smooth'
                  });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-2xl bg-black/20 hover:bg-black/30 text-gold text-lg backdrop-blur-sm transition-all duration-300 cursor-pointer"
            >
              Get Started <span className="ml-2">→</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-dark to-transparent pointer-events-none" />
    </section>
  );
} 