// app/jobs/page.tsx
'use client';
import { useState } from 'react';
import { JobCard } from '@/components/JobCard';
import { Pagination } from '@/components/Pagination';

const categories = ['All', 'Engineering', 'Healthcare', 'Finance', 'Technology', 'Education'] as const;

interface Job {
  id: string;
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

const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    description: 'Join our dynamic team of software engineers working on cutting-edge technologies.',
    image: 'https://via.placeholder.com/150',
    slug: 'senior-software-engineer',
    location: 'Dubai, UAE',
    salary: '$8,000 - $12,000',
    type: 'Full-time',
    category: 'Technology'
  },
  {
    id: '2',
    title: 'Medical Doctor',
    company: 'Healthcare Plus',
    description: 'Experienced medical doctor needed for our expanding healthcare facility.',
    image: 'https://via.placeholder.com/150',
    slug: 'medical-doctor',
    location: 'Abu Dhabi, UAE',
    salary: '$15,000 - $20,000',
    type: 'Full-time',
    category: 'Healthcare'
  },
  {
    id: '3',
    title: 'Financial Analyst',
    company: 'Global Finance',
    description: 'Seeking a skilled financial analyst to join our investment team.',
    image: 'https://via.placeholder.com/150',
    slug: 'financial-analyst',
    location: 'Dubai, UAE',
    salary: '$6,000 - $9,000',
    type: 'Full-time',
    category: 'Finance'
  },
  {
    id: '4',
    title: 'University Professor',
    company: 'International University',
    description: 'Professor position available in our Computer Science department.',
    image: 'https://via.placeholder.com/150',
    slug: 'university-professor',
    location: 'Sharjah, UAE',
    salary: '$10,000 - $15,000',
    type: 'Full-time',
    category: 'Education'
  }
];

export default function JobsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredJobs = jobs.filter(job => 
    selectedCategory === 'All' ? true : job.category === selectedCategory
  );

  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Category Navigation */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`px-6 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paginatedJobs.map(job => (
          <JobCard
            key={job.id}
            {...job}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredJobs.length / itemsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}