// app/page.tsx
'use client'; // Mark as client component

import { useState } from 'react';
import { JobCard } from '@/components/JobCard';
import { Pagination } from '@/components/Pagination';
import HeroSection from '@/components/HeroSection';

// Dummy data for job cards with images
const jobs = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    location: 'Dubai, UAE',
    salary: '$8,000 - $12,000',
    type: 'Full-time',
    category: 'Technology',
    posted: '2d ago',
    image: '/images/tech-corp.jpg', // Add image path
  },
  {
    id: '2',
    title: 'Marketing Manager',
    company: 'Gulf Media',
    location: 'Abu Dhabi, UAE',
    salary: '$6,000 - $9,000',
    type: 'Full-time',
    category: 'Marketing',
    posted: '3d ago',
    image: '/images/gulf-media.jpg', // Add image path
  },
  {
    id: '3',
    title: 'Civil Engineer',
    company: 'Construction Plus',
    location: 'Riyadh, Saudi Arabia',
    salary: '$5,000 - $7,500',
    type: 'Full-time',
    category: 'Engineering',
    posted: '1d ago',
    image: '/images/construction-plus.jpg', // Add image path
  },
  {
    id: '4',
    title: 'Financial Analyst',
    company: 'Gulf Bank',
    location: 'Doha, Qatar',
    salary: '$7,000 - $10,000',
    type: 'Full-time',
    category: 'Finance',
    posted: '4d ago',
    image: '/images/gulf-bank.jpg', // Add image path
  },
  {
    id: '5',
    title: 'Nurse Practitioner',
    company: 'MedCare Hospital',
    location: 'Dubai, UAE',
    salary: '$4,500 - $6,500',
    type: 'Full-time',
    category: 'Healthcare',
    posted: '5d ago',
    image: '/images/medcare-hospital.jpg', // Add image path
  },
  {
    id: '6',
    title: 'Graphic Designer',
    company: 'Creative Studio',
    location: 'Manama, Bahrain',
    salary: '$3,500 - $5,000',
    type: 'Part-time',
    category: 'Design',
    posted: '6d ago',
    image: '/images/creative-studio.jpg', // Add image path
  },
  {
    id: '7',
    title: 'Sales Executive',
    company: 'Gulf Enterprises',
    location: 'Kuwait City, Kuwait',
    salary: '$4,000 - $6,000',
    type: 'Full-time',
    category: 'Sales',
    posted: '7d ago',
    image: '/images/gulf-enterprises.jpg', // Add image path
  },
  {
    id: '8',
    title: 'HR Manager',
    company: 'Talent Solutions',
    location: 'Muscat, Oman',
    salary: '$6,500 - $9,500',
    type: 'Full-time',
    category: 'Human Resources',
    posted: '8d ago',
    image: '/images/talent-solutions.jpg', // Add image path
  },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Pagination logic
  const paginatedJobs = jobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Job Listings Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
          Latest Job Opportunities
        </h2>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paginatedJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(jobs.length / itemsPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}