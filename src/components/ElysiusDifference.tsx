'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Feature {
  title: string;
  summary: string;
  content: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Cognitive Recovery Score™",
    summary: "See your brain's readiness every morning.",
    content: "A proprietary, daily metric that quantifies mental clarity and emotional resilience using REM quality, HRV trends, and behavioral patterns — giving you insight into your true recovery state.",
    icon: "🧠"
  },
  {
    title: "AI-Powered Personalized Interventions",
    summary: "Get the right nudge at the right time.",
    content: "Elysius adapts to your unique rhythms, offering personalized guidance like smart wind-downs, morning alignment routines, or micro-interruptions for stress — all grounded in your data.",
    icon: "🤖"
  },
  {
    title: "Biometric + Behavioral Pattern Detection",
    summary: "Discover invisible patterns disrupting your recovery.",
    content: "By combining passive signals (HRV, sleep staging, screen time) with mood inputs, Elysius highlights what's silently eroding your focus, energy, and emotional control.",
    icon: "📊"
  },
  {
    title: "Life-Stage Adaptive Recovery",
    summary: "Built to evolve with you.",
    content: "Whether you're a college student, a new parent, or entering midlife, Elysius understands the different stressors you face and delivers tailored interventions for your stage of life.",
    icon: "🎯"
  },
  {
    title: "Sleep Architecture Coaching",
    summary: "Restore what sleep trackers overlook.",
    content: "Elysius focuses on repairing broken REM cycles, fragmented deep sleep, and poor HRV recovery — not just reporting them — to rebuild your body and mind's ability to heal.",
    icon: "🛏️"
  },
  {
    title: "Continuous Learning Engine",
    summary: "Gets smarter as you use it.",
    content: "Powered by machine learning, Elysius refines its insights over time, making your recommendations more accurate, your CRS more meaningful, and your recovery more effective.",
    icon: "🧪"
  },
  {
    title: "Seamless Wearable Integration",
    summary: "No extra work required.",
    content: "Elysius syncs with Apple Watch and iPhone HealthKit to pull biometric and behavioral data passively — so you can focus on getting better, not logging things manually.",
    icon: "⌚"
  }
];

interface AccordionItemProps {
  feature: Feature;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({ feature, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gold/10 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between group transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl">{feature.icon}</span>
          <div className="text-left">
            <h3 className="font-serif text-xl text-gold/90 group-hover:text-gold transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-white/60 text-sm mt-1 font-sans">
              {feature.summary}
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gold/50 group-hover:text-gold/70 transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? "1.5rem" : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-white/80 font-sans leading-relaxed pl-14">
          {feature.content}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function ElysiusDifference() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="difference" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
            How Elysius Helps You Recover
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-navy-light/30 rounded-2xl backdrop-blur-sm border border-gold/10 divide-y divide-gold/10">
          {features.map((feature, index) => (
            <AccordionItem
              key={index}
              feature={feature}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 