'use client';
import { memo, useMemo } from 'react';
import { motion, useReducedMotion, TargetAndTransition } from 'framer-motion';
import * as ReactCountryFlag from 'country-flag-icons/react/3x2';
import { useInView } from 'react-intersection-observer';

// Type definitions
type CountryData = { code: string; name: string };

// Memoized static data
const gulfCountries: CountryData[] = useMemo(() => [
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'QA', name: 'Qatar' },
  { code: 'KW', name: 'Kuwait' },
  { code: 'BH', name: 'Bahrain' },
  { code: 'OM', name: 'Oman' }
], []);

const otherCountries: CountryData[] = useMemo(() => [
  { code: 'US', name: 'United States' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
  { code: 'SG', name: 'Singapore' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'IN', name: 'India' }
], []);

// Memoized flag component
const CountryFlag = memo(({ country, index }: { country: CountryData; index: number }) => {
  const hasFlag = (code: string): code is keyof typeof ReactCountryFlag => code in ReactCountryFlag;
  if (!hasFlag(country.code)) return null;
  
  const FlagComponent = ReactCountryFlag[country.code];
  
  return (
    <div
      className="flex flex-col items-center group cursor-pointer"
      style={{ transform: 'translateZ(0)' }} // Hardware acceleration
    >
      <div className="w-16 h-12 sm:w-20 sm:h-14 overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 
        group-hover:scale-105 border border-gray-200 hover:border-red-500">
        <FlagComponent
          title={country.name}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="mt-2 text-xs sm:text-sm font-medium text-gray-600 group-hover:text-red-600 
        transition-colors whitespace-nowrap">
        {country.name}
      </span>
    </div>
  );
});

CountryFlag.displayName = 'CountryFlag';

// Main component
export default function FlagStrip() {
  // Optimize animation for reduced motion preference
  const prefersReducedMotion = useReducedMotion();
  
  // Use intersection observer for lazy loading
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px',
  });

  // Memoize countries array
  const allCountries = useMemo(() => [...gulfCountries, ...otherCountries], []);
  const duplicatedCountries = useMemo(() => [...allCountries, ...allCountries], [allCountries]);

  // Simplified animation settings
  const animationConfig = useMemo(() => ({
    x: prefersReducedMotion ? 0 : [-50 * duplicatedCountries.length, 0],
    transition: {
      duration: prefersReducedMotion ? 0 : 60,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop" as const,
    }
  }), [duplicatedCountries.length, prefersReducedMotion]);

  return (
    <div className="bg-white py-8" ref={ref}>
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12">
          <div className="relative max-w-[1400px] mx-auto">
            <h3 className="text-center text-lg sm:text-xl font-semibold text-gray-900 mb-6">
              Find Jobs Across Leading Countries
            </h3>
            
            {inView && (
              <div className="relative overflow-hidden">
                <motion.div
                  className="flex gap-8 sm:gap-12 py-4"
                  animate={animationConfig}
                  style={{ 
                    willChange: 'transform',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  {duplicatedCountries.map((country, index) => (
                    <CountryFlag
                      key={`${country.code}-${index}`}
                      country={country}
                      index={index}
                    />
                  ))}
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
