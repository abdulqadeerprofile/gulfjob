'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const companies = [
  { name: 'Emirates', logo: '/images/companies/emirates.png' },
  { name: 'Etihad Airways', logo: '/images/companies/etihad.png' },
  { name: 'Dubai Ports World', logo: '/images/companies/dpworld.png' },
  { name: 'ADNOC', logo: '/images/companies/adnoc.png' },
  { name: 'Aramco', logo: '/images/companies/aramco.png' },
  { name: 'Qatar Airways', logo: '/images/companies/qatar-airways.png' },
  { name: 'Emaar', logo: '/images/companies/emaar.png' },
  { name: 'Dubai Holding', logo: '/images/companies/dubai-holding.png' },
  { name: 'Masdar', logo: '/images/companies/masdar.png' },
  { name: 'Kuwait Airways', logo: '/images/companies/kuwait-airways.png' }
];

export default function CompanyLogos() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-xl text-gray-600 mb-8"
        >
          Trusted by Leading Companies Across Gulf Countries
        </motion.h3>

        <div className="relative">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="group relative w-32 h-20 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white rounded-lg shadow-sm group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain p-3"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
