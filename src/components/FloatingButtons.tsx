'use client';
import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { MdDoubleArrow } from "react-icons/md";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50"> {/* Reduced from bottom-8 right-8 gap-4 */}
      {/* AI Chat Support Button */}
      <button
        className="p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 
                   border border-gray-200 group hover:-translate-y-1" // Changed from p-3
        onClick={() => console.log('Open AI Chat')}
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 group-hover:scale-110 transition-transform" /> {/* Reduced from w-6 h-6 */}
      </button>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 
                     border border-gray-200 group hover:-translate-y-1" // Changed from p-3
          aria-label="Scroll to top"
        >
          <MdDoubleArrow 
            className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 group-hover:scale-110 transition-transform -rotate-90" // Reduced from w-6 h-6
          />
        </button>
      )}
    </div>
  );
}
