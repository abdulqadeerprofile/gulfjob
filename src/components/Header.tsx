import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'
import { SearchBar } from '@/components/SearchBar'
import LiveTime from '@/components/LiveTime'

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/70 dark:border-gray-700/70 rounded-b-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Logo and Search */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
            >
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 transition-transform duration-300 group-hover:scale-105">
                GulfJobs
              </span>
            </Link>
            
            <div className="hidden lg:flex">
              <SearchBar isDark={false} />
            </div>
          </div>

          {/* Right Side: Theme Toggle and Time */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="hidden md:flex items-center text-sm text-gray-600 dark:text-gray-300 space-x-2">
              <div className="h-6 w-px bg-gray-200 dark:bg-gray-700" />
              <LiveTime />
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="hidden md:flex items-center py-3 space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <Link 
            href="/" 
            className="px-3 py-1.5 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
          >
            Home
          </Link>

          {/* Jobs Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 px-3 py-1.5 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200">
              <span>Jobs</span>
              <span className="text-xs mt-0.5 transform transition-transform duration-200 group-hover:-rotate-180">⌄</span>
            </button>
            <div className="absolute hidden group-hover:block w-48 mt-2 rounded-xl shadow-lg py-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
              <Link 
                href="/jobs/walk-in" 
                className="block px-4 py-2.5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Walk-in Interview
              </Link>
              <Link 
                href="/jobs/government" 
                className="block px-4 py-2.5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Government
              </Link>
              <Link 
                href="/jobs/top-organization" 
                className="block px-4 py-2.5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Top Organization
              </Link>
            </div>
          </div>

          {/* News Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 px-3 py-1.5 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200">
              <span>News</span>
              <span className="text-xs mt-0.5 transform transition-transform duration-200 group-hover:-rotate-180">⌄</span>
            </button>
            <div className="absolute hidden group-hover:block w-48 mt-2 rounded-xl shadow-lg py-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
              <Link 
                href="/news/newspaper" 
                className="block px-4 py-2.5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Newspaper
              </Link>
              <Link 
                href="/news/aviation" 
                className="block px-4 py-2.5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Aviation
              </Link>
              <Link 
                href="/news/hotel" 
                className="block px-4 py-2.5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Hotel
              </Link>
              <Link 
                href="/news/supermarket" 
                className="block px-4 py-2.5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Supermarket
              </Link>
            </div>
          </div>

          <Link 
            href="/internships" 
            className="px-3 py-1.5 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
          >
            Internships
          </Link>
          
          <Link 
            href="/by-profession" 
            className="px-3 py-1.5 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
          >
            By Profession
          </Link>

          {/* More Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 px-3 py-1.5 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200">
              <span>More</span>
              <span className="text-xs mt-0.5 transform transition-transform duration-200 group-hover:-rotate-180">⌄</span>
            </button>
            <div className="absolute hidden group-hover:block w-48 mt-2 rounded-xl shadow-lg py-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
              <Link 
                href="/about" 
                className="block px-4 py-2.5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                About Us
              </Link>
              <Link 
                href="/dmca" 
                className="block px-4 py-2.5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                DMCA
              </Link>
              <Link 
                href="/report-a-job" 
                className="block px-4 py-2.5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Report a Job
              </Link>
              <Link 
                href="/terms" 
                className="block px-4 py-2.5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Terms
              </Link>
              <Link 
                href="/privacy" 
                className="block px-4 py-2.5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-2.5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}