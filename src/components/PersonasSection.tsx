'use client';

import { motion } from 'framer-motion';

const personas = [
  {
    name: "Christy",
    age: 21,
    role: "College Student",
    struggle: "Balancing academics, social life, and mental clarity",
    description: "Despite 8 hours of sleep, still feels mentally foggy during important lectures."
  },
  {
    name: "Ethan",
    age: 29,
    role: "Tech Professional",
    struggle: "High-pressure job affecting sleep quality",
    description: "Can't shut off racing thoughts at night, leading to decreased work performance."
  },
  {
    name: "Sophie",
    age: 42,
    role: "Working Parent",
    struggle: "Interrupted sleep patterns affecting mood",
    description: "Constant fatigue impacts both family time and career decisions."
  },
  {
    name: "James",
    age: 58,
    role: "Executive",
    struggle: "Sleep quality affecting decision-making",
    description: "Needs peak cognitive performance but struggles with inconsistent rest."
  }
];

export default function PersonasSection() {
  return (
    <section id="personas" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Built for people who don't realize sleep is breaking them
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Meet some of the people we're helping recover their cognitive potential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-gold/10 bg-white/[0.02] backdrop-blur-sm 
                         hover:bg-white/[0.04] hover:border-gold/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  {persona.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-medium">{persona.name}, {persona.age}</h3>
                  <p className="text-white/50 text-sm">{persona.role}</p>
                </div>
              </div>
              <p className="text-gold/80 text-sm font-medium mb-2">{persona.struggle}</p>
              <p className="text-white/60 text-sm">{persona.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 