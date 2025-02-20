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
    <div className="bg-white py-8"> {/* Reduced from py-12 */}
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12">
          <div className="relative max-w-[1400px] mx-auto">
            <h3 className="text-center text-lg sm:text-xl font-semibold text-gray-900 mb-6"> {/* Reduced text size */}
              Find Jobs Across Leading Countries
            </h3>
            
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-8 sm:gap-12 py-4" // Reduced gap and padding
                animate={{
                  x: [0, -50 * duplicatedCountries.length],
                }}
                transition={{
                  duration: 60,
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
                      <div className="w-16 h-12 sm:w-20 sm:h-14 overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 
                        group-hover:scale-105 border border-gray-200 hover:border-red-500"> {/* Reduced size and effects */}
                        <FlagComponent
                          title={country.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="mt-2 text-xs sm:text-sm font-medium text-gray-600 group-hover:text-red-600 
                        transition-colors whitespace-nowrap"> {/* Reduced text size and spacing */}
                        {country.name}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
