'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { BuildingOffice2Icon, MapPinIcon, CurrencyDollarIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface JobCardProps {
  id?: string;
  title: string;
  company: string;
  description: string;
  image: string;
  slug: string;
  location: string;
  salary: string;
  type: string;
  category: string;
}

export function JobCard({ 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
  title, 
  company, 
  description, 
  image, 
  slug,
  location,
  salary,
  type,
  category 
}: JobCardProps) {
  const router = useRouter()

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={() => router.push(`/blog/${slug}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && router.push(`/blog/${slug}`)}
    >
      {/* Image Section */}
      <div className="relative h-40">
        <Image
          src={image || 'https://via.placeholder.com/150'}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          {title}
        </h3>

        <div className="space-y-3 mb-4">
          {company && (
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <BuildingOffice2Icon className="w-5 h-5 mr-2" />
              <span>{company}</span>
            </div>
          )}
          
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <MapPinIcon className="w-5 h-5 mr-2" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <CurrencyDollarIcon className="w-5 h-5 mr-2" />
            <span>{salary}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <BriefcaseIcon className="w-5 h-5 mr-2" />
            <span>{type}</span>
          </div>
        </div>

        {description && (
          <p className="text-gray-500 dark:text-gray-400 line-clamp-3 mb-6">
            {description}
          </p>
        )}

        <div className="flex justify-between items-center">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
            {category}
          </span>
          
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation()
              router.push(`/blog/${slug}`)
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </motion.div>
  )
}