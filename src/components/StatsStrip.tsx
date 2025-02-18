import React, { useState, useEffect } from 'react';
import { Users, Building2, Briefcase, Globe } from 'lucide-react';

const countries = [
  'United Arab Emirates',
  'Saudi Arabia',
  'Qatar',
  'Kuwait',
  'Bahrain',
  'Oman',
  'Jordan',
  'Egypt',
];

const StatsStrip: React.FC = () => {
  const [stats, setStats] = useState({
    employees: 0,
    companies: 0,
    jobs: 0,
  });
  const [currentCountry, setCurrentCountry] = useState(0);

  // Animate numbers
  useEffect(() => {
    const intervals = [
      setInterval(() => {
        setStats(prev => ({
          ...prev,
          employees: prev.employees < 125000 ? prev.employees + 237 : 125000
        }));
      }, 30),
      setInterval(() => {
        setStats(prev => ({
          ...prev,
          companies: prev.companies < 3500 ? prev.companies + 7 : 3500
        }));
      }, 30),
      setInterval(() => {
        setStats(prev => ({
          ...prev,
          jobs: prev.jobs < 15000 ? prev.jobs + 29 : 15000
        }));
      }, 30)
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  // Rotate countries
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCountry(prev => (prev + 1) % countries.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const statCards = [
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      value: stats.employees.toLocaleString(),
      label: 'Total Employees',
    },
    {
      icon: <Building2 className="w-8 h-8 text-red-500" />,
      value: stats.companies.toLocaleString(),
      label: 'Partner Companies',
    },
    {
      icon: <Briefcase className="w-8 h-8 text-red-500" />,
      value: stats.jobs.toLocaleString(),
      label: 'Active Jobs',
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      value: countries[currentCountry],
      label: 'Featured Region',
      isCountry: true,
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                  {stat.icon}
                </div>
                <div className={`font-bold ${stat.isCountry ? 'text-xl' : 'text-3xl'} text-gray-900`}>
                  {stat.value}{!stat.isCountry && '+'}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsStrip;
