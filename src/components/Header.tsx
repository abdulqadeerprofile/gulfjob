import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/70 dark:border-gray-700/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 transition-transform duration-300 group-hover:scale-105  Now, you can use the  font-bungee-shade  class in your components.
">
              Job Glob
            </span>
          </Link>

          {/* Full Navigation Menu */}
          <nav className="flex items-center space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            {/* Home */}
            <Link 
              href="/" 
              className="px-3 py-1.5 rounded-lg hover:text-red-800 dark:hover:text-red-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
            >
              Home
            </Link>

            {/* Jobs Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-1.5 rounded-lg hover:text-red-800 dark:hover:text-red-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200">
                <span>Jobs</span>
                <svg className="w-4 h-4 transform transition-transform duration-200 group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
                <div className="w-48 rounded-xl shadow-lg py-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 backdrop-blur-sm space-y-1">
                  <Link href="/jobs/walk-in" className="block px-4 py-2.5 hover:bg-red-50/30 dark:hover:bg-red-900/10 hover:text-red-800 dark:hover:text-red-800 transition-colors duration-200">
                    Walk-in Interview
                  </Link>
                  <Link href="/jobs/government" className="block px-4 py-2.5 hover:bg-red-50/30 dark:hover:bg-red-900/10 hover:text-red-800 dark:hover:text-red-800 transition-colors duration-200">
                    Government
                  </Link>
                  <Link href="/jobs/top-organization" className="block px-4 py-2.5 hover:bg-red-50/30 dark:hover:bg-red-900/10 hover:text-red-800 dark:hover:text-red-800 transition-colors duration-200">
                    Top Organization
                  </Link>
                </div>
              </div>
            </div>

            {/* News Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-1.5 rounded-lg hover:text-red-800 dark:hover:text-red-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200">
                <span>News</span>
                <svg className="w-4 h-4 transform transition-transform duration-200 group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
                <div className="w-48 rounded-xl shadow-lg py-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 backdrop-blur-sm space-y-1">
                  <Link href="/news/newspaper" className="block px-4 py-2.5 hover:bg-red-50/30 dark:hover:bg-red-900/10 hover:text-red-800 dark:hover:text-red-800 transition-colors duration-200">
                    Newspaper
                  </Link>
                  <Link href="/news/aviation" className="block px-4 py-2.5 hover:bg-red-50/30 dark:hover:bg-red-900/10 hover:text-red-800 dark:hover:text-red-800 transition-colors duration-200">
                    Aviation
                  </Link>
                  <Link href="/news/hotel" className="block px-4 py-2.5 hover:bg-red-50/30 dark:hover:bg-red-900/10 hover:text-red-800 dark:hover:text-red-800 transition-colors duration-200">
                    Hotel
                  </Link>
                  <Link href="/news/supermarket" className="block px-4 py-2.5 hover:bg-red-50/30 dark:hover:bg-red-900/10 hover:text-red-800 dark:hover:text-red-800 transition-colors duration-200">
                    Supermarket
                  </Link>
                </div>
              </div>
            </div>

            {/* Internships */}
            <Link 
              href="/internships" 
              className="px-3 py-1.5 rounded-lg hover:text-red-800 dark:hover:text-red-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
            >
              Internships
            </Link>

            {/* By Profession */}
            <Link 
              href="/by-profession" 
              className="px-3 py-1.5 rounded-lg hover:text-red-800 dark:hover:text-red-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
            >
              By Profession
            </Link>

            {/* More Dropdown (Right-aligned) */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-1.5 rounded-lg hover:text-red-800 dark:hover:text-red-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200">
                <span>More</span>
                <svg className="w-4 h-4 transform transition-transform duration-200 group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full right-0 mt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
                <div className="w-48 rounded-xl shadow-lg py-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 backdrop-blur-sm space-y-1">
                  <Link href="/about" className="block px-4 py-2.5 hover:bg-red-50/30 dark:hover:bg-red-900/10 hover:text-red-800 dark:hover:text-red-800 transition-colors duration-200">
                    About Us
                  </Link>
                  <Link href="/dmca" className="block px-4 py-2.5 hover:bg-red-50/30 dark:hover:bg-red-900/10 hover:text-red-800 dark:hover:text-red-800 transition-colors duration-200">
                    DMCA
                  </Link>
                  <Link href="/report-a-job" className="block px-4 py-2.5 hover:bg-red-50/30 dark:hover:bg-red-900/10 hover:text-red-800 dark:hover:text-red-800 transition-colors duration-200">
                    Report a Job
                  </Link>
                  <Link href="/terms" className="block px-4 py-2.5 hover:bg-red-50/30 dark:hover:bg-red-900/10 hover:text-red-800 dark:hover:text-red-800 transition-colors duration-200">
                    Terms
                  </Link>
                  <Link href="/privacy" className="block px-4 py-2.5 hover:bg-red-50/30 dark:hover:bg-red-900/10 hover:text-red-800 dark:hover:text-red-800 transition-colors duration-200">
                    Privacy
                  </Link>
                  <Link href="/contact" className="block px-4 py-2.5 hover:bg-red-50/30 dark:hover:bg-red-900/10 hover:text-red-800 dark:hover:text-red-800 transition-colors duration-200">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}