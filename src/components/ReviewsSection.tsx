'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah Ahmed",
    position: "Senior Software Engineer at Google",
    image: "/download (6).jpg",
    rating: 5,
    quote: "Job Glob helped me land my dream job! The platform is incredibly user-friendly, and within weeks I received multiple interview calls from top companies.",
    company: "Google UAE",
    verified: true
  },
  {
    id: 2,
    name: "Mohammed Rahman",
    position: "Financial Analyst at Emirates NBD",
    image: "/download (7).jpg",
    rating: 5,
    quote: "I was struggling to find the right opportunities in banking, but Job Glob made it easy. Their job alerts are precise and the application process is seamless.",
    company: "Emirates NBD",
    verified: true
  },
  {
    id: 3,
    name: "Priya Patel",
    position: "HR Manager at Jumeirah Group",
    image: "/download (8).jpg",
    rating: 5,
    quote: "As an HR professional, I've both used and recruited through Job Glob. The quality of candidates and job postings is consistently high.",
    company: "Jumeirah Group",
    verified: true
  },
  {
    id: 4,
    name: "John Carter",
    position: "Operations Manager at Emirates",
    image: "/download (9).jpg",
    rating: 5,
    quote: "The aviation category on Job Glob is unmatched. I found my current position at Emirates through their platform, and the process was incredibly smooth.",
    company: "Emirates Airlines",
    verified: true
  },
  {
    id: 5,
    name: "Lisa Wong",
    position: "UX Designer at Microsoft",
    image: "/download (10).jpg",
    companyLogo: "/home/logo/microsoft.png",
    rating: 5,
    quote: "The job matching algorithm is impressive. Found exactly what I was looking for within days of signing up.",
    company: "Microsoft UAE",
    verified: true
  },
  {
    id: 6,
    name: "Ahmed Hassan",
    position: "Marketing Director at Etihad",
    image: "/download (11).jpg",
    companyLogo: "/home/logo/etihad.png",
    rating: 4,
    quote: "Great platform for finding senior positions in the UAE market. The networking features are particularly useful.",
    company: "Etihad Airways",
    verified: true
  },
  {
    id: 7,
    name: "Rachel Chen",
    position: "Project Manager at Amazon",
    image: "/download (12).jpg",
    companyLogo: "/home/logo/amazon.png",
    rating: 5,
    quote: "The seamless application process and company insights helped me make informed decisions about my career move.",
    company: "Amazon UAE",
    verified: true
  },
  {
    id: 8,
    name: "Khalid Al-Sayed",
    position: "Software Architect at Dubai Digital",
    image: "/download (13).jpg",
    companyLogo: "/home/logo/dubai-digital.png",
    rating: 5,
    quote: "Best platform for tech professionals in the region. The salary insights and company reviews are invaluable.",
    company: "Dubai Digital",
    verified: true
  },
  {
    id: 9,
    name: "Marina Silva",
    position: "Product Manager at Noon",
    image: "/download (14).jpg",
    companyLogo: "/home/logo/noon.png",
    rating: 5,
    quote: "Job Glob's recommendations are spot-on. Found my perfect role at a top e-commerce company through the platform.",
    company: "Noon",
    verified: true
  }
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const slideInterval = 5000;

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, slideInterval);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="grid grid-cols-12 py-12 bg-gradient-to-b from-gray-50 to-white"> {/* Reduced from py-20 */}
      <div className="col-start-2 col-end-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8" // Reduced from mb-16
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900"> {/* Further reduced text sizes */}
            Success Stories from Job Glob
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto"> {/* Reduced text and max-width */}
            Join thousands of professionals who found their dream careers through our platform
          </p>
        </motion.div>

        <div className="relative h-[300px] md:h-[250px]"> {/* Reduced heights */}
          {/* Navigation Buttons - Adjusted for new grid */}
          <button
            onClick={handlePrevious}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-red-600 rounded-full p-2 shadow-lg hover:bg-red-700 transition-all hover:scale-110" // Reduced padding and offset
          >
            <ChevronLeft className="w-4 h-4 text-white" /> {/* Reduced icon size */}
          </button>
          
          <button
            onClick={handleNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-red-600 rounded-full p-2 shadow-lg hover:bg-red-700 transition-all hover:scale-110" // Reduced padding and offset
          >
            <ChevronRight className="w-4 h-4 text-white" /> {/* Reduced icon size */}
          </button>

          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full max-w-3xl" // Reduced from max-w-4xl
              >
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 hover:border-red-500 transition-colors"> {/* Reduced padding and border radius */}
                  <div className="flex flex-col md:flex-row items-center gap-3"> {/* Reduced gap */}
                    <div className="relative w-16 h-16 md:w-20 md:h-20"> {/* Reduced image size */}
                      <Image
                        src={reviews[currentIndex].image}
                        alt={reviews[currentIndex].name}
                        fill
                        className="rounded-full object-cover ring-4 ring-red-500/20"
                      />
                      {reviews[currentIndex].verified && (
                        <div className="absolute -right-2 -bottom-2 bg-red-500 text-white p-1.5 rounded-full">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                          <FaStar key={i} className="w-4 h-4 text-yellow-400" /> /* Reduced from w-5 h-5 */
                        ))}
                      </div>
                      <blockquote className="text-sm md:text-base text-gray-300 italic mb-3"> {/* Reduced from text-lg and mb-4 */}
                        &ldquo;{reviews[currentIndex].quote}&rdquo;
                      </blockquote>
                      <div className="space-y-1">
                        <h3 className="font-bold text-sm text-white"> {/* Reduced from text-base */}
                          {reviews[currentIndex].name}
                        </h3>
                        <p className="text-xs text-red-400"> {/* Reduced from default text size */}
                          {reviews[currentIndex].position}
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-red-500 w-8' 
                  : 'bg-gray-300 hover:bg-red-500/50'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
