'use client';

import { motion } from 'framer-motion';
import { Brain, Smartphone, Moon } from 'lucide-react';

const insights = [
  {
    icon: Brain,
    title: "Persistent Fatigue",
    description: "You feel foggy, tired, irritable — even after a full night's sleep"
  },
  {
    icon: Smartphone,
    title: "Failed Solutions",
    description: "You try meditation, apps, coffee, supplements — but nothing sticks"
  },
  {
    icon: Moon,
    title: "Hidden Cause",
    description: "The real problem: Poor sleep quality, broken REM, and low HRV"
  }
];

export default function InsightSection() {
  return (
    <section id="insights" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            What if your emotional burnout wasn't your fault?
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-8 rounded-2xl border border-gold/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-gold/5 flex items-center justify-center border border-gold/20">
                  <Icon className="w-6 h-6 text-gold/70" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gold">{insight.title}</h3>
                <p className="text-white/70">{insight.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 