'use client';
import { useState, useEffect } from 'react';
import { Building2, Users2, Briefcase, Globe2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const StatsStrip = () => {
  const [counts, setCounts] = useState<Record<string, number>>({
    totalcompanies: 0,
    satisfiedemployees: 0,
    activejobs: 0
  });

  const [currentCountry, setCurrentCountry] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const countries = [
    'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman',
    'USA', 'Canada', 'UK', 'Germany', 'Singapore', 'Australia'
  ];

  const stats = [
    { 
      label: 'Total Companies',
      value: 15000,
      displayValue: '15K+',
      Icon: Building2 
    },
    { 
      label: 'Satisfied Employees',
      value: 100000,
      displayValue: '100K+',
      Icon: Users2 
    },
    { 
      label: 'Active Jobs',
      value: 25000,
      displayValue: '25K+',
      Icon: Briefcase 
    }
  ];

  // Animate numbers when in view
  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const interval = duration / steps;

      const counters = stats.map(stat => ({
        start: 0,
        end: stat.value,
        current: 0
      }));

      const timer = setInterval(() => {
        let completed = true;

        setCounts(prev => {
          const newCounts = { ...prev };
          stats.forEach((stat, i) => {
            if (counters[i].current < counters[i].end) {
              counters[i].current += counters[i].end / steps;
              completed = false;
            }
            newCounts[stat.label.toLowerCase().replace(/\s+/g, '')] = Math.min(
              Math.round(counters[i].current),
              counters[i].end
            );
          });
          return newCounts;
        });

        if (completed) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [inView, stats]); // Add stats to dependency array

  // Rotate countries
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCountry(prev => (prev + 1) % countries.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [countries.length]); // Add countries.length to dependency array

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-800 py-8">
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12">
          <div className="relative max-w-[1400px] mx-auto">
            <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map(({ label, displayValue, Icon }) => (
                <div key={label} className="text-center">
                  <Icon className="w-6 h-6 text-white mx-auto mb-2 opacity-75" />
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                    {displayValue}
                  </div>
                  <div className="text-xs sm:text-sm text-red-100 mt-1">
                    {label}
                  </div>
                </div>
              ))}

              {/* Countries Section */}
              <div className="text-center">
                <Globe2 className="w-6 h-6 text-white mx-auto mb-2 opacity-75" />
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white h-8">
                  {countries[currentCountry]}
                </div>
                <div className="text-xs sm:text-sm text-red-100 mt-1">
                  Countries We Work
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsStrip;
