'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { BuildingOffice2Icon } from '@heroicons/react/24/outline'

interface JobCardProps {
  id: string
  title: string
  company: string
  description: string
  image: string
  slug: string
}

export function JobCard({ id, title, company, description, image, slug }: JobCardProps) {
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
        <img
          src={image || 'https://via.placeholder.com/150'}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          {title}
        </h3>

        {company && (
          <div className="flex items-center mb-4 text-gray-600 dark:text-gray-400">
            <BuildingOffice2Icon className="w-5 h-5 mr-2" />
            <span>{company}</span>
          </div>
        )}

        {description && (
          <p className="text-gray-500 dark:text-gray-400 line-clamp-3 mb-6">
            {description}
          </p>
        )}

        <div className="flex justify-end">
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