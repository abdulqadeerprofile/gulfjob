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
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      {/* AI Chat Support Button - Circular white button */}
      <button
        className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
        onClick={() => console.log('Open AI Chat')}
      >
        <MessageCircle className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
      </button>

      {/* Scroll to Top Button - Square with rounded corners */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-black hover:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <MdDoubleArrow className="w-6 h-6 text-red-500 group-hover:text-red-400 transition-colors -rotate-90" />
        </button>
      )}
    </div>
  );
}
