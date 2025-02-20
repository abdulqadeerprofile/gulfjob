import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

  // Add responsive cards state
  const getCardsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 4; // desktop
    }
    return 4;
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  // Update cards to show on resize
  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update auto-change interval to be faster
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        handleNext();
      }, 3000); // Reduced from 4000 to 3000ms
      return () => clearInterval(timer);
    }
  }, [isPaused, cardsToShow]); // Added cardsToShow as dependency

  // Modified handleNext to immediately return to first slide
  const handleNext = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsPaused(true);
    setCurrentIndex((prev) => {
      const nextIndex = prev + cardsToShow;
      // Immediately return to first slide if we've reached the end
      return nextIndex >= jobs.length - cardsToShow ? 0 : nextIndex;
    });
    setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => setIsPaused(false), 2000); // Reduced pause time from 4000 to 2000ms
    }, 300); // Reduced animation duration from 500 to 300ms
  };

  // Modified handlePrev with faster transitions
  const handlePrev = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsPaused(true);
    setCurrentIndex((prev) => {
      if (prev === 0) return jobs.length - cardsToShow;
      return prev - cardsToShow;
    });
    setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => setIsPaused(false), 2000); // Reduced pause time
    }, 300); // Reduced animation duration
  };

  return (
    <div className="w-full pt-8 pb-20"> {/* Increased padding */}
      <div className="grid grid-cols-12"> {/* Added grid container */}
        <div className="col-start-2 col-end-12"> {/* Added column positioning */}
          <div className="relative -mt-12 max-w-[1400px] mx-auto"> {/* Added max-width constraint */}
            {/* Navigation Buttons - Made smaller */}
            <button 
              onClick={handlePrev}
              className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 bg-red-600 rounded-full p-1.5 shadow-lg hover:bg-red-700 transition-all hover:scale-110 active:scale-95 focus:outline-none" // Reduced padding and offset
            >
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-white" /> {/* Reduced icon size */}
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-red-600 rounded-full p-1.5 shadow-lg hover:bg-red-700 transition-all hover:scale-110 active:scale-95 focus:outline-none" // Reduced padding and offset
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" /> {/* Reduced icon size */}
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-out py-6 sm:py-10" // Reduced duration from 500 to 300
                style={{
                  transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
                }}
              >
                {jobs.map((job, index) => (
                  <div
                    key={job.id}
                    className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-2 sm:px-3" // Changed from w-1/3 to w-1/4 and reduced padding
                    style={{
                      width: `${100 / cardsToShow}%`
                    }}
                  >
                    <div className="aspect-[4/5] bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 border-2 border-red-600/20 hover:border-red-600 group hover:-translate-y-1"> {/* Changed from aspect-square to aspect-[4/5] */}
                      {/* Card Content */}
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
                      
                      <div className="h-3/5 p-3 sm:p-4 flex flex-col justify-between"> {/* Reduced padding */}
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-1 line-clamp-2"> {/* Added line-clamp-2 and reduced text size */}
                            {job.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 mb-1 line-clamp-1">{job.company}</p> {/* Added line-clamp-1 */}
                          <p className="text-xs text-gray-500 line-clamp-2 mb-2"> {/* Added mb-2 */}
                            {job.description}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-auto"> {/* Added mt-auto */}
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-[10px] sm:text-xs border border-gray-200 group-hover:border-red-200 transition-colors truncate max-w-[45%]"> {/* Added truncate and max-width */}
                            {job.country}
                          </span>
                          <button className="px-3 py-1 bg-red-600 text-white text-[10px] sm:text-xs rounded-lg hover:bg-red-700 transition-all hover:shadow-md hover:shadow-red-500/20 active:scale-95">
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

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
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
    </div>
  );
};

export default JobCarousel;