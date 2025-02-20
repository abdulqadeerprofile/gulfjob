"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Jobs By Organizations",
      links: ["ADNOC", "Emaar", "Alshaya", "Etisalat", "Almarai", "DEWA"],
    },
    {
      title: "Jobs By Professions",
      links: [
        "Security Guard",
        "Driver",
        "Accountant",
        "IT",
        "Electrician",
        "Receptionist",
      ],
    },
    {
      title: "More Info",
      links: [
        "About Us",
        "Privacy Policy",
        "Terms and Conditions",
        "Disclaimer",
        "Job Ad Report",
        "Contact Us",
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: "M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.733 0 1.325-.592 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z",
    },
    {
      name: "Twitter",
      icon: "M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z",
    },
    {
      name: "YouTube",
      icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    },
    {
      name: "Instagram",
      icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
    },
    {
      name: "LinkedIn",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 lg:pt-16 lg:pb-8">
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12">
          <div className="max-w-7xl mx-auto px-4">
            {/* Main Footer Grid */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-12">
              {/* Footer Sections - First 3 columns */}
              {footerSections.map((section, idx) => (
                <div
                  key={idx}
                  className="col-span-1 md:col-span-1 lg:col-span-3"
                >
                  <h3 className="text-white font-semibold text-sm mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIdx) => (
                      <motion.li
                        key={linkIdx}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-red-500 transition-colors text-xs block py-0.5"
                        >
                          {link}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Newsletter and Logo Column */}
              <div className="col-span-2 md:col-span-3 lg:col-span-3 lg:pl-4">
                <div className="flex flex-col h-full justify-between">
                  {/* Logo */}
                  <div className="mb-6">
                    <Link
                      href="/"
                      className="text-xl lg:text-2xl font-bold text-white inline-block"
                    >
                      TheGulfCareerz
                    </Link>
                  </div>

                  {/* Subscribe Form */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-white">
                      Subscribe for Daily Updates
                    </h4>
                    <div className="flex flex-col space-y-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full"
                      />
                      <button className="w-full px-4 py-2 bg-red-600 text-white text-xs rounded-lg hover:bg-red-700 transition-colors">
                        Subscribe Now
                      </button>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4 mt-6">
                    {socialLinks.map((social, idx) => (
                      <motion.a
                        key={idx}
                        href="#"
                        whileHover={{ scale: 1.2, color: "#ef4444" }}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d={social.icon} />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <div className="flex flex-col items-center space-y-2 text-center">
                <p className="text-gray-400 text-xs">
                  Copyright © {currentYear}{" "}
                  <Link href="/" className="hover:text-red-500 transition-colors">
                    TheJobGlob.com
                  </Link>
                  , All Rights Reserved
                </p>
                <p className="text-gray-400 text-xs italic">
                  It is totally forbidden to use any content from{" "}
                  <Link href="/" className="hover:text-red-500 transition-colors">
                    TheJobGlob.com
                  </Link>{" "}
                  without authorization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
