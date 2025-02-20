'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection2() {
  const features = [
    "Get started with your dream job search in a matter of seconds",
    "Find jobs that perfectly match your profile (1000 more)",
    "Apply for jobs at top companies in the UAE, KSA, Qatar, Kuwait, and India",
    "Our easy-to-use interface simplifies the process of applying for jobs",
    "Find job opportunities that are compatible with your career goals",
    "Get exposure to various industries and roles to accelerate your career",
    "Stay up-to-date with the latest job opportunities"
  ];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": features.map(feature => ({
      "@type": "Question",
      "name": "What job search features do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": feature
      }
    }))
  };

  return (
    <>
      <section className="bg-gray-50 mt-8 py-12"> {/* Reduced padding */}
        <div className="grid grid-cols-12">
          <div className="col-start-2 col-end-12">
            <div className="relative max-w-[1400px] mx-auto">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border-2 border-red-600/20 hover:border-red-600 transition-colors"> {/* Reduced padding and border radius */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 text-center"
                >
                  Looking For More Jobs in Dubai & Across UAE?
                </motion.h2>

                <ul className="grid gap-2 sm:gap-3 mb-6"> {/* Reduced gap and margin */}
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2"
                    >
                      <svg
                        className="flex-shrink-0 w-4 h-4 text-red-500" // Reduced icon size
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {feature}
                      </p>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Link
                    href="/jobs"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-md hover:shadow-red-500/20"
                  >
                    View All Job Openings
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900"> {/* Reduced padding */}
        <div className="grid grid-cols-12">
          <div className="col-start-2 col-end-12">
            <div className="relative max-w-[1400px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
                    Find Your Dream Job Today
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 mb-6 max-w-xl">
                    Connect with top employers and discover opportunities that match your skills and aspirations. Your next career move starts here.
                  </p>
                  <div className="space-y-3 sm:space-y-0 sm:space-x-3 sm:flex">
                    <button className="w-full sm:w-auto px-6 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-all">
                      Upload Your CV
                    </button>
                    <button className="w-full sm:w-auto px-6 py-2 bg-transparent text-white border border-white/30 rounded-lg text-sm font-medium hover:bg-white/10 transition-all">
                      Browse Companies
                    </button>
                  </div>
                </div>

                <div className="relative lg:order-last order-first">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-xl blur-2xl opacity-20 transform rotate-3"></div>
                  <div className="relative">
                    <Image
                      src="/engineerHome.webp"
                      alt="Career opportunities"
                      width={600}
                      height={400}
                      className="rounded-xl shadow-xl w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}