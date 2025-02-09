'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import HeroSection from '@/components/HeroSection';
import Head from 'next/head';
import { JobCard } from '@/components/JobCard';

// Define interfaces
interface JobPost {
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
  slug: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

interface PageMetadata {
  title: string;
  description: string;
  keywords: string;
}

// Sanity Client Setup
const sanityClient = createClient({
  projectId: '5g7hrg0s',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

function urlFor(source: any) {
  return builder.image(source).url();
}

export default function Home() {
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [pageMetadata, setPageMetadata] = useState<PageMetadata>({
    title: 'Latest Job Posts | Your Company',
    description: 'Explore the latest job opportunities and career posts.',
    keywords: 'jobs, career, opportunities',
  });

  useEffect(() => {
    async function fetchJobs() {
      try {
        const query = `*[_type == "post"] {
          _id,
          title,
          slug,
          excerpt,
          seo {
            metaTitle,
            metaDescription,
            keywords
          },
          mainImage {
            asset-> {
              _id,
              url
            },
            alt
          },
          company,
          location,
          salary,
          type,
          category,
          postedAt
        }`;

        const posts = await sanityClient.fetch(query);

        const formattedJobs = posts.map((post: any) => ({
          id: post._id,
          title: post.title,
          description: post.excerpt || post.seo?.metaDescription || 'No description available.',
          image: post.mainImage?.asset?.url || 'https://via.placeholder.com/150',
          slug: post.slug?.current,
          company: post.company || 'Unknown Company',
          location: post.location || 'Remote',
          salary: post.salary || 'Not specified',
          type: post.type || 'Full-time',
          category: post.category || 'General',
          posted: post.postedAt || 'Recently',
          seo: {
            metaTitle: post.seo?.metaTitle || post.title,
            metaDescription: post.seo?.metaDescription || '',
            keywords: post.seo?.keywords || [],
          },
        }));

        setJobs(formattedJobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    }

    fetchJobs();
  }, []);

  return (
    <>
      <Head>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
        <meta name="keywords" content={pageMetadata.keywords} />
        <meta property="og:title" content={pageMetadata.title} />
        <meta property="og:description" content={pageMetadata.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
      </Head>

      <div>
        <HeroSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            Latest Job Posts
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary}
                type={job.type}
                category={job.category}
                posted={job.posted}
                image={job.image}
                description={job.description}
                href={`/jobs/${job.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
