'use client';

import { motion } from 'framer-motion';
import { Briefcase, Heart, Lightbulb, Dumbbell } from 'lucide-react';

const problems = [
  {
    title: "Workplace Overwhelm",
    icon: Briefcase,
    diagnosis: "Persistent mental fatigue and pressure",
    symptom: "Difficulty concentrating, missed deadlines, constant overwhelm",
    signal: "Your prefrontal cortex hasn't fully recovered — cognitive load accumulates when sleep architecture breaks down."
  },
  {
    title: "Emotional Reactivity",
    icon: Heart,
    diagnosis: "Irritability or short temper in close relationships",
    symptom: "Heightened reactions, emotional distance, relationship strain",
    signal: "Fragmented REM and reduced HRV impair your brain's emotional regulation circuits."
  },
  {
    title: "Creative Block",
    icon: Lightbulb,
    diagnosis: "Inability to focus or generate ideas",
    symptom: "Mental fog, reduced innovation, creative paralysis",
    signal: "Disrupted REM sleep stifles divergent thinking and problem-solving capacity."
  },
  {
    title: "Physical Burnout",
    icon: Dumbbell,
    diagnosis: "Low energy despite a healthy lifestyle",
    symptom: "Persistent fatigue, slower recovery, reduced performance",
    signal: "Deep sleep deficits hinder cellular repair and energy system restoration."
  }
];

export default function TheBreakdown() {
  return (
    <section id="breakdown" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">
            When Sleep Fails, Everything Follows
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-[750px] mx-auto font-sans">
            Chronic disruptions in sleep quality silently erode emotional stability, cognitive clarity, and physical resilience.
          </p>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-[750px] mx-auto mt-4 font-sans">
            Elysius uncovers this invisible thread and begins where others overlook.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="max-w-md"
              >
                <div className="relative rounded-xl bg-navy-light/30 px-6 py-4 border-l-2 border-l-gold/30">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-gold/5">
                      <Icon className="w-5 h-5 text-gold/70" />
                    </div>
                    <h3 className="font-serif text-xl text-gold/90">
                      {problem.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-white/40 text-xs font-sans uppercase tracking-wider mb-1">Diagnosis</p>
                      <p className="text-white/90 font-sans font-light">
                        {problem.diagnosis}
                      </p>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-sans uppercase tracking-wider mb-1">Symptoms</p>
                      <p className="text-white/90 font-sans font-light">
                        {problem.symptom}
                      </p>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-sans uppercase tracking-wider mb-1">Elysius Signal</p>
                      <p className="text-white/90 font-sans font-light">
                        {problem.signal}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 