// app/jobs/page.tsx
'use client';
import { useState } from 'react';
import { JobCard } from '@/components/JobCard';
import { Pagination } from '@/components/Pagination';

const categories = ['All', 'Engineering', 'Healthcare', 'Finance', 'Technology', 'Education'];

const jobs = [
  // Add 8 job objects here with proper data
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    location: 'Dubai, UAE',
    salary: '$8,000 - $12,000',
    type: 'Full-time',
    category: 'Technology',
    posted: '2d ago'
  },
  // ... add 7 more job objects
];

export default function JobsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
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
          <JobCard key={job.id} {...job} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredJobs.length / itemsPerPage)}
      />
    </div>
  );
}