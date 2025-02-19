'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { BuildingOffice2Icon, MapPinIcon, CurrencyDollarIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { DefaultCompanyLogo } from './DefaultCompanyLogo'

interface JobCardProps {
  id: string
  title: string
  company: string
  description: string
  image?: string
  slug: string
  location: string
  salary: string
  type: string
  category: string
}

export function JobCard({
  title,
  company,
  description,
  image,
  slug,
  location,
  salary,
  type
}: JobCardProps) {
  return (
    <Link href={`/jobs/${slug}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
        <div className="flex items-start space-x-4">
          <div className="relative w-16 h-16 flex-shrink-0">
            {image ? (
              <Image
                src={image}
                alt={`${company} logo`}
                fill
                className="object-cover rounded-lg"
              />
            ) : (
              <DefaultCompanyLogo company={company} />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
              {title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>
            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span>{location}</span>
              <span>•</span>
              <span>{type}</span>
              <span>•</span>
              <span>{salary}</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}