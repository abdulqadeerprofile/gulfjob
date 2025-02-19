import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LatestJobs = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest Job Opportunities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Explore the newest job listings from top companies across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[1, 2, 3, 4, 5, 6].map((job) => (
            <Link 
              href={`/job/${job}`} 
              key={job}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={`https://via.placeholder.com/600x400`}
                  alt="Job thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-red-600 transition-colors">
                  Senior Software Engineer
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Join our dynamic team and work on cutting-edge technologies...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dubai, UAE</span>
                  <span className="text-sm font-medium text-red-600">$8k-12k/mo</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/jobs"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
          >
            View All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
