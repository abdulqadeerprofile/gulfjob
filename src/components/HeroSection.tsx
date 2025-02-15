'use client';

import { motion } from 'framer-motion'; // Removed unused imports
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  // Removed unused cursorPosition state
  const [trail, setTrail] = useState<Array<{ x: number; y: number }>>([]);

  // Update cursor trail
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTrail((prev) => [{ x: e.clientX, y: e.clientY }, ...prev.slice(0, 20)]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
      {/* Cursor Tail Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {trail.map((pos, index) => (
          <motion.div
            key={index}
            className="absolute w-4 h-4 bg-white/20 rounded-full"
            style={{
              left: pos.x - 8,
              top: pos.y - 8,
              scale: 1 - index / trail.length,
              opacity: 1 - index / trail.length,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Find Your Dream Job in the Gulf
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Explore thousands of job opportunities in the Gulf region. Whether you&apos;re looking for government jobs, private sector roles, or internships, we&apos;ve got you covered.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            href="/jobs"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Browse Jobs
          </Link>
          <Link
            href="/internships"
            className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Explore Internships
          </Link>
        </motion.div>
      </div>

      {/* Animated Icons */}
      <motion.div
        className="absolute bottom-0 left-0 w-full flex justify-between px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.img
          src="/images/icon-plane.png"
          alt="Plane"
          className="w-16 h-16"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.img
          src="/images/icon-building.png"
          alt="Building"
          className="w-16 h-16"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.img
          src="/images/icon-ship.png"
          alt="Ship"
          className="w-16 h-16"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </motion.div>
    </section>
  );
}