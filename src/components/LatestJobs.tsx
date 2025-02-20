import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays } from 'lucide-react';

const jobImages = [
  'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
];

const jobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Solutions',
    description: 'Join our dynamic team and work on cutting-edge technologies...',
    location: 'Dubai, UAE',
    type: 'Full Time',
    remote: true,
    postedDays: 2,
    level: 'Senior Level',
    image: jobImages[0]
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Innovatech',
    description: 'Lead product development and strategy...',
    location: 'San Francisco, CA',
    type: 'Full Time',
    remote: false,
    postedDays: 5,
    level: 'Mid Level',
    image: jobImages[1]
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    company: 'Creative Minds',
    description: 'Design user interfaces and experiences...',
    location: 'New York, NY',
    type: 'Contract',
    remote: true,
    postedDays: 7,
    level: 'Junior Level',
    image: jobImages[2]
  },
  {
    id: 4,
    title: 'Data Scientist',
    company: 'Data Insights',
    description: 'Analyze and interpret complex data...',
    location: 'London, UK',
    type: 'Full Time',
    remote: false,
    postedDays: 10,
    level: 'Senior Level',
    image: jobImages[3]
  }
];

const LatestJobs = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12">
          <div className="relative max-w-[1400px] mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Latest Job Opportunities
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
                Explore the newest job listings from top companies across various industries
              </p>
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {jobs.map((job, index) => (
                <Link 
                  href={`/job/${job.id}`} 
                  key={job.id}
                  className="block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-red-500 overflow-hidden"
                >
                  <div className="flex h-[180px]"> {/* Fixed height container */}
                    {/* Image Section */}
                    <div className="w-[120px] min-w-[120px] relative overflow-hidden"> {/* Fixed width */}
                      <Image
                        src={jobImages[index]}
                        alt={job.title}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-0.5 bg-black/50 backdrop-blur-sm text-white rounded-full text-[10px] border border-white/20">
                          {job.level}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-3 flex flex-col justify-between min-w-0"> {/* Added min-w-0 */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <h3 className="font-semibold text-sm text-gray-900 group-hover:text-red-600 transition-colors line-clamp-1 pr-2">
                            {job.title}
                          </h3>
                          <span className="flex items-center text-[10px] text-gray-500 gap-1 whitespace-nowrap">
                            <CalendarDays className="w-3 h-3 flex-shrink-0" />
                            {job.postedDays}d ago
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-600 mb-1.5 line-clamp-2">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-1.5">
                          <span className="px-2 py-0.5 bg-red-50 text-red-600 text-[10px] font-medium rounded-full">
                            {job.type}
                          </span>
                          {job.remote && (
                            <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-medium rounded-full">
                              Remote
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-1.5 border-t border-gray-100">
                        <div className="min-w-0"> {/* Added min-w-0 */}
                          <span className="text-[10px] text-gray-500 block">Location</span>
                          <span className="text-[11px] font-medium text-gray-900 truncate block">
                            {job.location}
                          </span>
                        </div>
                        <button className="ml-2 px-3 py-1 bg-red-600 text-white text-[10px] rounded-lg hover:bg-red-700 transition-all hover:shadow-md hover:shadow-red-600/20 flex-shrink-0">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-8">
              <Link 
                href="/jobs"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 transition-all hover:shadow-lg hover:shadow-red-600/20"
              >
                View All Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
