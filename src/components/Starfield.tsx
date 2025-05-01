'use client';

import { motion } from 'framer-motion';

// Fixed star positions to prevent hydration errors
const stars = [
  { id: 1, x: 14.4, y: 20.5, size: 1.1, duration: 1.5 },
  { id: 2, x: 3.4, y: 42.0, size: 1.1, duration: 2.0 },
  { id: 3, x: 72.9, y: 13.4, size: 2.8, duration: 1.8 },
  { id: 4, x: 34.6, y: 15.6, size: 1.9, duration: 2.2 },
  { id: 5, x: 51.6, y: 45.2, size: 1.5, duration: 1.7 },
  { id: 6, x: 84.2, y: 52.4, size: 2.9, duration: 2.1 },
  { id: 7, x: 81.1, y: 22.7, size: 1.3, duration: 1.9 },
  { id: 8, x: 98.6, y: 52.0, size: 2.4, duration: 2.3 },
  { id: 9, x: 51.2, y: 3.6, size: 2.1, duration: 1.6 },
  { id: 10, x: 97.6, y: 10.3, size: 2.0, duration: 2.0 },
  { id: 11, x: 65.9, y: 13.4, size: 1.6, duration: 1.8 },
  { id: 12, x: 31.5, y: 73.0, size: 2.5, duration: 2.2 },
  { id: 13, x: 60.3, y: 62.4, size: 2.9, duration: 1.7 },
  { id: 14, x: 82.9, y: 77.0, size: 1.4, duration: 2.1 },
  { id: 15, x: 32.6, y: 99.9, size: 2.7, duration: 1.9 },
  { id: 16, x: 91.3, y: 47.2, size: 2.7, duration: 2.3 },
  { id: 17, x: 37.8, y: 88.7, size: 1.6, duration: 1.6 },
  { id: 18, x: 86.8, y: 10.9, size: 2.0, duration: 2.0 },
  { id: 19, x: 32.6, y: 18.7, size: 1.1, duration: 1.8 },
  { id: 20, x: 3.2, y: 84.8, size: 1.1, duration: 2.2 },
  { id: 21, x: 61.7, y: 65.3, size: 2.0, duration: 1.7 },
  { id: 22, x: 69.0, y: 87.9, size: 2.2, duration: 2.1 },
  { id: 23, x: 39.5, y: 12.5, size: 2.4, duration: 1.9 },
  { id: 24, x: 76.7, y: 90.0, size: 2.4, duration: 2.3 },
  { id: 25, x: 65.8, y: 20.9, size: 1.2, duration: 1.6 },
  { id: 26, x: 19.0, y: 59.6, size: 2.0, duration: 2.0 },
  { id: 27, x: 9.3, y: 44.1, size: 1.5, duration: 1.8 },
  { id: 28, x: 29.1, y: 4.6, size: 2.3, duration: 2.2 },
  { id: 29, x: 36.2, y: 44.8, size: 1.2, duration: 1.7 },
  { id: 30, x: 6.9, y: 28.4, size: 1.9, duration: 2.1 },
  { id: 31, x: 48.3, y: 55.7, size: 1.3, duration: 1.9 },
  { id: 32, x: 42.6, y: 13.3, size: 1.4, duration: 2.3 },
  { id: 33, x: 93.8, y: 41.4, size: 1.4, duration: 1.6 },
  { id: 34, x: 6.6, y: 55.0, size: 2.2, duration: 2.0 },
  { id: 35, x: 64.4, y: 83.6, size: 2.3, duration: 1.8 },
  { id: 36, x: 31.7, y: 44.3, size: 1.2, duration: 2.2 },
  { id: 37, x: 47.9, y: 24.4, size: 1.1, duration: 1.7 },
  { id: 38, x: 66.4, y: 18.2, size: 2.9, duration: 2.1 },
  { id: 39, x: 93.9, y: 39.4, size: 1.1, duration: 1.9 },
  { id: 40, x: 46.4, y: 80.4, size: 2.7, duration: 2.3 },
  { id: 41, x: 22.3, y: 23.2, size: 2.2, duration: 1.6 },
  { id: 42, x: 12.9, y: 23.7, size: 2.5, duration: 2.0 },
  { id: 43, x: 45.2, y: 85.5, size: 1.8, duration: 1.8 },
  { id: 44, x: 53.1, y: 28.2, size: 1.4, duration: 2.2 },
  { id: 45, x: 53.1, y: 47.4, size: 2.2, duration: 1.7 },
  { id: 46, x: 95.2, y: 20.7, size: 1.2, duration: 2.1 },
  { id: 47, x: 60.1, y: 83.8, size: 1.7, duration: 1.9 },
  { id: 48, x: 56.3, y: 70.0, size: 2.1, duration: 2.3 },
  { id: 49, x: 8.7, y: 19.3, size: 2.5, duration: 1.6 },
  { id: 50, x: 12.3, y: 29.7, size: 1.6, duration: 2.0 }
];

const Starfield = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Starfield; 