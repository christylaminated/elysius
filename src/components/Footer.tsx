'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gold/70 font-serif"
          >
            © 2025 Elysius Neurotechnology
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex gap-8"
          >
            <a href="#about" className="text-white/50 hover:text-gold transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="text-white/50 hover:text-gold transition-colors duration-300">
              Contact
            </a>
            <a href="#privacy" className="text-white/50 hover:text-gold transition-colors duration-300">
              Privacy
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 