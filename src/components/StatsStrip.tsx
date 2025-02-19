import React from 'react';

const StatsStrip = () => {
  const stats = [
    { label: 'Active Jobs', value: '25K+' },
    { label: 'Companies', value: '15K+' },
    { label: 'Job Seekers', value: '1M+' },
    { label: 'Jobs Filled', value: '500K+' }
  ];

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-800 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                {value}
              </div>
              <div className="text-sm sm:text-base text-red-100">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsStrip;
