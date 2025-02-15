'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useCallback } from 'react';

// Updated debounce function with proper typing for MouseEvent
function debounce(func: (e: MouseEvent) => void, wait: number) {
  let timeout: NodeJS.Timeout;
  return (e: MouseEvent) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(e), wait);
  };
}

export default function HeroSection3() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateXBase = useTransform(y, [0, window.innerHeight], [15, -15]);
  const rotateYBase = useTransform(x, [0, window.innerWidth], [-15, 15]);

  const cardTransforms = [
    {
      rotateX: useTransform(rotateXBase, val => val * 0.5),
      rotateY: useTransform(rotateYBase, val => val * 0.5)
    },
    {
      rotateX: useTransform(rotateXBase, val => val * 0.4),
      rotateY: useTransform(rotateYBase, val => val * 0.4)
    },
    {
      rotateX: useTransform(rotateXBase, val => val * 0.3),
      rotateY: useTransform(rotateYBase, val => val * 0.3)
    }
  ];

  const handleMouseMove = useCallback((e: MouseEvent) => {
    x.set(e.clientX);
    y.set(e.clientY);
  }, [x, y]);

  useEffect(() => {
    const debouncedHandler = debounce(handleMouseMove, 10);
    window.addEventListener('mousemove', debouncedHandler);
    return () => window.removeEventListener('mousemove', debouncedHandler);
  }, [handleMouseMove]);

  const cards = [
    {
      title: "Available Job Listings",
      content: "Start your career journey by discovering over 9000+ accessible job opportunities.",
      icon: "📋",
      stat: "9,000+"
    },
    {
      title: "Unique Jobseekers",
      content: "Explore how 50000+ unique jobseekers have shaped their careers to make a difference.",
      icon: "👥",
      stat: "50,000+"
    },
    {
      title: "Subscribed Users",
      content: "Join our community and stay in touch with our 4000+ subscribers. It is free to join.",
      icon: "📩",
      stat: "4,000+"
    }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Make Your Career Journey a Success With TheDubaiVacancies.net
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              style={{
                rotateX: cardTransforms[index].rotateX,
                rotateY: cardTransforms[index].rotateY
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-100 dark:border-gray-700 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                className="text-6xl mb-4 text-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {card.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 text-center">
                {card.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                {card.content}
              </p>
              
              <motion.div
                className="text-4xl font-bold text-blue-600 dark:text-blue-400 text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {card.stat}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}