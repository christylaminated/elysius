'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { supabase } from '@/utils/supabase';

export default function ProductPreview() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          { email }
        ]);

      if (error) throw error;

      setMessage({ type: 'success', text: 'Thank you for joining our waitlist!' });
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setMessage({ 
        type: 'error', 
        text: 'Something went wrong. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Coming Soon
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Real-time insights. Subtle nudges. A new way to recover.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Placeholder for app preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-16 border border-gold/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gold/70 text-lg">App preview coming soon</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Separate Waitlist Section */}
      <section id="waitlist" className="py-24 relative overflow-hidden bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Reclaim clarity. Rebuild from sleep.
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-6 py-3 rounded-lg bg-white/5 border border-gold/10 text-white placeholder-white/40 focus:outline-none focus:border-gold/30"
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.15)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-lg text-gold border border-gold/30 bg-gold/5 hover:bg-gold/10 transition-all duration-300 backdrop-blur-sm whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </motion.button>
                </div>
                {message && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-sm ${
                      message.type === 'success' ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {message.text}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 