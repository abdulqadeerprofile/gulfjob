'use client';
import { motion } from 'framer-motion';
import * as ReactCountryFlag from 'country-flag-icons/react/3x2';

// Type guard to check if a country code exists in the Flags object
const hasFlag = (code: string): code is keyof typeof ReactCountryFlag => {
  return code in ReactCountryFlag;
};

const gulfCountries = [
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'QA', name: 'Qatar' },
  { code: 'KW', name: 'Kuwait' },
  { code: 'BH', name: 'Bahrain' },
  { code: 'OM', name: 'Oman' }
];

const otherCountries = [
  { code: 'US', name: 'United States' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
  { code: 'SG', name: 'Singapore' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'IN', name: 'India' }
];

const allCountries = [...gulfCountries, ...otherCountries];
const duplicatedCountries = [...allCountries, ...allCountries];

export default function FlagStrip() {
  return (
    <div className="bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-gray-900 mb-8 text-2xl font-semibold">
          Find Jobs Across Leading Countries
        </h3>
        
        <div className="relative">
          {/* Flags container */}
          <motion.div
            className="flex gap-16 py-6" // Increased gap between flags
            animate={{
              x: [0, -50 * duplicatedCountries.length],
            }}
            transition={{
              duration: 60, // Slowed down the animation
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedCountries.map((country, index) => {
              if (!hasFlag(country.code)) return null;
              const FlagComponent = ReactCountryFlag[country.code];
              
              return (
                <div
                  key={`${country.code}-${index}`}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-20 h-14 overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 
                    group-hover:scale-110 group-hover:shadow-xl border border-gray-200 hover:border-red-500">
                    <FlagComponent
                      title={country.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="mt-3 text-sm font-medium text-gray-600 group-hover:text-red-600 
                    transition-colors whitespace-nowrap">
                    {country.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
