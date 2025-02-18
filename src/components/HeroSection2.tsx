'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
    <section 
      aria-label="Job search features and opportunities"
      className="relative bg-gray-50 py-16"
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          role="region" 
          aria-labelledby="job-search-heading"
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-red-600/20 hover:border-red-600 transition-colors"
        >
          <motion.h2
            id="job-search-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Looking For More Jobs in Dubai & Across UAE?
          </motion.h2>

          <ul className="grid gap-3 md:gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-red-500"
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
                <p className="text-gray-600 text-base md:text-lg">
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
              aria-label="View all available job openings"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-base md:text-lg hover:shadow-md hover:shadow-red-500/20"
            >
              View All Job Openings
              <span 
                role="presentation" 
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}