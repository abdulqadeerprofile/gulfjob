'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const companies = [
  { name: 'ADNOC', logo: '/home/logo/adnoc.png' },
  { name: 'Aramco', logo: '/home/logo/aramco.png' },
  { name: 'DP World', logo: '/home/logo/DP_World.png' },
  { name: 'Dubai Holding', logo: '/home/logo/dubai-holding.png' },
  { name: 'Emaar Properties', logo: '/home/logo/Emaar-Properties.png' },
  { name: 'Etihad Airways', logo: '/home/logo/Etihad-Airways.png' },
  { name: 'Kuwait Airways', logo: '/home/logo/Kuwait-aIrways.png' },
  { name: 'Masdar', logo: '/home/logo/Masdar.png' },
  { name: 'NADEC', logo: '/home/logo/NADEC.png' },
  { name: 'Qatar Airways', logo: '/home/logo/Qatarairways.png' }
];

export default function CompanyLogos() {
  return (
    <section className="py-12 bg-white">
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12">
          <div className="relative max-w-[1400px] mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center text-base sm:text-lg text-gray-600 mb-8"
            >
              Trusted by Leading Companies Across Gulf Countries
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 p-4 h-24 sm:h-28">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 250px"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
