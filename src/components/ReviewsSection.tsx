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
    image: "/images/reviews/review1.jpg", // Replace with actual image
    rating: 5,
    quote: "Job Glob helped me land my dream job! The platform is incredibly user-friendly, and within weeks I received multiple interview calls from top companies.",
    company: "Google UAE",
    verified: true
  },
  {
    id: 2,
    name: "Mohammed Rahman",
    position: "Financial Analyst at Emirates NBD",
    image: "/images/reviews/review2.jpg", // Replace with actual image
    rating: 5,
    quote: "I was struggling to find the right opportunities in banking, but Job Glob made it easy. Their job alerts are precise and the application process is seamless.",
    company: "Emirates NBD",
    verified: true
  },
  {
    id: 3,
    name: "Priya Patel",
    position: "HR Manager at Jumeirah Group",
    image: "/images/reviews/review3.jpg", // Replace with actual image
    rating: 5,
    quote: "As an HR professional, I've both used and recruited through Job Glob. The quality of candidates and job postings is consistently high.",
    company: "Jumeirah Group",
    verified: true
  },
  {
    id: 4,
    name: "John Carter",
    position: "Operations Manager at Emirates",
    image: "/images/reviews/review4.jpg", // Replace with actual image
    rating: 5,
    quote: "The aviation category on Job Glob is unmatched. I found my current position at Emirates through their platform, and the process was incredibly smooth.",
    company: "Emirates Airlines",
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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Success Stories from Job Glob
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who found their dream careers through our platform
          </p>
        </motion.div>

        <div className="relative h-[400px] md:h-[300px]">
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 rounded-full p-3 shadow-lg hover:bg-red-700 transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 rounded-full p-3 shadow-lg hover:bg-red-700 transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
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
                className="absolute w-full max-w-4xl"
              >
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:border-red-500 transition-colors">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="relative w-24 h-24 md:w-32 md:h-32">
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
                          <FaStar key={i} className="w-5 h-5 text-red-500" />
                        ))}
                      </div>
                      <blockquote className="text-xl text-gray-300 italic mb-4">
                        "{reviews[currentIndex].quote}"
                      </blockquote>
                      <div className="space-y-1">
                        <h3 className="font-bold text-lg text-white">{reviews[currentIndex].name}</h3>
                        <p className="text-red-400">{reviews[currentIndex].position}</p>
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
