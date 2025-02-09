'use client'; // Mark as client component

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BuildingOffice2Icon, MapPinIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  category: string;
  posted: string;
  image: string;
  description: string;
  href: string;
}

export function JobCard({ id, title, company, location, salary, type, category, posted, image, description, href }: JobCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Image Section */}
      <div className="relative h-40">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute top-4 right-4 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
        <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
          <BuildingOffice2Icon className="w-5 h-5 mr-2" />
          <span>{company}</span>
        </div>
        <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">{description}</p>
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <MapPinIcon className="w-5 h-5 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <CurrencyDollarIcon className="w-5 h-5 mr-2" />
            <span>{salary}/month</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <ClockIcon className="w-5 h-5 mr-2" />
            <span>{type}</span>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center p-6 border-t border-gray-100 dark:border-gray-700">
        <span className="text-sm text-gray-500 dark:text-gray-400">{posted}</span>
        <Link
          href={href}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
        >
          Apply Now
        </Link>
      </div>
    </motion.div>
  );
}
