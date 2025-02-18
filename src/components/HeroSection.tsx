import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StatsStrip from './StatsStrip';
import LatestJobs from './LatestJobs';
import HeroSection2 from './HeroSection2';
import Image from 'next/image';

interface Job {
  id: number;
  title: string;
  company: string;
  description: string;
  country: string;
  level: JobLevel;
  image: string; // Add this line
}

type JobLevel = 'Entry Level' | 'Mid Level' | 'Senior Level' | 'Lead Level';

const jobImages = [
  'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
];

const generateJobs = (): Job[] => {
  const jobData: Job[] = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `${['Senior', 'Lead', 'Principal', 'Staff'][i % 4]} ${['Software Engineer', 'Product Designer', 'Data Scientist', 'DevOps Engineer'][i % 4]}`,
    company: `${['Tech', 'Digital', 'Cloud', 'AI'][i % 4]} ${['Solutions', 'Industries', 'Systems', 'Labs'][i % 4]}`,
    description: `Join our innovative team to work on cutting-edge technologies and make a real impact. Position ${i + 1} offers excellent growth opportunities and competitive benefits.`,
    country: ['United States', 'Germany', 'Singapore', 'United Kingdom', 'Canada'][i % 5],
    level: ['Entry Level', 'Mid Level', 'Senior Level', 'Lead Level'][i % 4] as JobLevel,
    image: jobImages[i % jobImages.length], // Add image property
  }));
  return jobData;
};

const JobCarousel: React.FC = () => {
  const [jobs] = useState<Job[]>(generateJobs());
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const cardsToShow = 3;

  const handleNext = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsPaused(true);
    setCurrentIndex((prev) => {
      const newIndex = prev >= jobs.length - cardsToShow ? 0 : prev + 1;
      return newIndex;
    });
    setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => setIsPaused(false), 4000);
    }, 500);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(handleNext, 4000);
      return () => clearInterval(timer);
    }
  }, [isPaused, jobs.length, isAnimating]);

  const handlePrev = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsPaused(true);
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? jobs.length - cardsToShow : prev - 1;
      return newIndex < 0 ? 0 : newIndex;
    });
    setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => setIsPaused(false), 4000);
    }, 500);
  };

  return (
    <>
      <div className="w-full bg-gray-50 pt-4 pb-16"> {/* Changed pt-8 to pt-4 */}
        <div className="max-w-7xl mx-auto px-4 -mt-12"> {/* Changed -mt-6 to -mt-12 */}
          <div className="relative">
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-red-600 rounded-full p-3 shadow-lg hover:bg-red-700 transition-all hover:scale-110 active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-red-600 rounded-full p-3 shadow-lg hover:bg-red-700 transition-all hover:scale-110 active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="overflow-hidden px-4">
              <div 
                className="flex transition-transform duration-500 ease-out py-8"
                style={{
                  transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                }}
              >
                {jobs.map((job, index) => (
                  <div
                    key={job.id}
                    className="w-1/3 flex-shrink-0 px-4 py-6"
                  >
                    <div className="bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 h-[480px] border-2 border-red-600/20 hover:border-red-600 group hover:-translate-y-1">
                      <div className="h-2/5 relative overflow-hidden rounded-t-xl">
                        <Image 
                          src={job.image} 
                          alt={`${job.title} at ${job.company}`}
                          width={800}
                          height={600}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          priority={index < 3}
                        />
                        <div className="absolute top-4 left-4 z-20">
                          <span className="px-4 py-1.5 bg-black/50 backdrop-blur-sm text-white rounded-full text-sm border border-white/20 group-hover:bg-black/60 transition-colors">
                            {job.level}
                          </span>
                        </div>
                      </div>
                      
                      <div className="h-3/5 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                            {job.title}
                          </h3>
                          <p className="text-base text-gray-600 mb-3">{job.company}</p>
                          <p className="text-sm text-gray-500 line-clamp-3">
                            {job.description}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-6">
                          <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm border border-gray-200 group-hover:border-red-200 transition-colors">
                            {job.country}
                          </span>
                          <button className="px-5 py-2.5 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-all hover:shadow-md hover:shadow-red-500/20 active:scale-95">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(jobs.length / cardsToShow) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / cardsToShow) === index 
                  ? 'bg-red-600 w-6' 
                  : 'bg-gray-300 hover:bg-red-600/50'
                }`}
                onClick={() => {
                  setCurrentIndex(index * cardsToShow);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 4000);
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <StatsStrip />
      <LatestJobs />
      <HeroSection2 />
    </>
  );
};

export default JobCarousel;