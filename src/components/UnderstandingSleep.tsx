'use client';

import { motion } from 'framer-motion';

export default function UnderstandingSleep() {
  return (
    <section id="understanding" className="py-20 bg-navy">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Understanding Sleep
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Sleep is a complex biological process that affects every aspect of our lives. 
            Understanding its mechanisms helps us optimize our rest and improve our well-being.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Sleep Cycles",
              description: "Our sleep consists of multiple cycles, each lasting about 90 minutes. Each cycle includes different stages of sleep, from light to deep sleep and REM sleep."
            },
            {
              title: "Circadian Rhythm",
              description: "Our internal body clock regulates sleep-wake cycles. It's influenced by light exposure and helps determine when we feel alert or sleepy."
            },
            {
              title: "Sleep Quality",
              description: "Quality sleep is about more than just duration. It's about the right balance of sleep stages and uninterrupted rest throughout the night."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-navy-light p-6 rounded-lg border border-white/5"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-white/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 