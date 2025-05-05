'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Brain, Bot, BarChart3, Target, Bed, FlaskConical, Watch } from 'lucide-react';

interface Feature {
  title: string;
  summary: string;
  content: string;
  icon: any;
}

const features: Feature[] = [
  {
    title: "Cognitive Recovery Score™",
    summary: "See your brain's readiness every morning.",
    content: "A proprietary, daily metric that quantifies mental clarity and emotional resilience using REM quality, HRV trends, and behavioral patterns — giving you insight into your true recovery state.",
    icon: Brain
  },
  {
    title: "AI-Powered Personalized Interventions",
    summary: "Get the right nudge at the right time.",
    content: "Elysius adapts to your unique rhythms, offering personalized guidance like smart wind-downs, morning alignment routines, or micro-interruptions for stress — all grounded in your data.",
    icon: Bot
  },
  {
    title: "Biometric + Behavioral Pattern Detection",
    summary: "Discover invisible patterns disrupting your recovery.",
    content: "By combining passive signals (HRV, sleep staging, screen time) with mood inputs, Elysius highlights what's silently eroding your focus, energy, and emotional control.",
    icon: BarChart3
  },
  {
    title: "Life-Stage Adaptive Recovery",
    summary: "Built to evolve with you.",
    content: "Whether you're a college student, a new parent, or entering midlife, Elysius understands the different stressors you face and delivers tailored interventions for your stage of life.",
    icon: Target
  },
  {
    title: "Sleep Architecture Coaching",
    summary: "Restore what sleep trackers overlook.",
    content: "Elysius focuses on repairing broken REM cycles, fragmented deep sleep, and poor HRV recovery — not just reporting them — to rebuild your body and mind's ability to heal.",
    icon: Bed
  },
  {
    title: "Continuous Learning Engine",
    summary: "Gets smarter as you use it.",
    content: "Powered by machine learning, Elysius refines its insights over time, making your recommendations more accurate, your CRS more meaningful, and your recovery more effective.",
    icon: FlaskConical
  },
  {
    title: "Seamless Wearable Integration",
    summary: "No extra work required.",
    content: "Elysius syncs with Apple Watch and iPhone HealthKit to pull biometric and behavioral data passively — so you can focus on getting better, not logging things manually.",
    icon: Watch
  }
];

interface AccordionItemProps {
  feature: Feature;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const AccordionItem = ({ feature, isOpen, onToggle, index }: AccordionItemProps) => {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="p-6 hover:bg-navy-light/10 transition-colors duration-300 cursor-pointer"
      onClick={onToggle}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gold/5 flex items-center justify-center border border-gold/20">
          <Icon className="w-5 h-5 text-gold/70" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gold mb-2">{feature.title}</h3>
          <p className="text-white/70 mb-2">{feature.summary}</p>
          {isOpen && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-white/60"
            >
              {feature.content}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

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