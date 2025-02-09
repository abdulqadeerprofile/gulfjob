'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@sanity/client'
import { JobCard } from '@/components/JobCard'
import Head from 'next/head'
import HeroSection from '@/components/HeroSection' // Make sure this import path is correct

interface JobPost {
  id: string
  title: string
  company: string
  description: string
  image: string
  slug: string
}

const sanityClient = createClient({
  projectId: '5g7hrg0s',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})

export default function Home() {
  const [jobs, setJobs] = useState<JobPost[]>([])

  useEffect(() => {
    async function fetchJobs() {
      try {
        const query = `*[_type == "post"] {
          _id,
          title,
          company,
          excerpt,
          slug,
          mainImage {
            asset->{url}
          }
        }`

        const posts = await sanityClient.fetch(query)

        const formattedJobs = posts.map((post: any) => ({
          id: post._id,
          title: post.title,
          company: post.company || '',
          description: post.excerpt || 'No description available',
          image: post.mainImage?.asset?.url || 'https://via.placeholder.com/150',
          slug: post.slug?.current || ''
        }))

        setJobs(formattedJobs)
      } catch (error) {
        console.error('Error fetching jobs:', error)
      }
    }

    fetchJobs()
  }, [])

  return (
    <>
      <Head>
        <title>Citibank UAE Careers | Latest Opportunities</title>
        <meta name="description" content="Explore career opportunities at Citibank UAE" />
      </Head>

      {/* Added Hero Section */}
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">
          Latest Career Opportunities
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              company={job.company}
              description={job.description}
              image={job.image}
              slug={job.slug}
            />
          ))}
        </div>
      </div>
    </>
  )
}