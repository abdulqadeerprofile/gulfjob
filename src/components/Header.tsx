'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/70 dark:border-gray-700/70 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center group z-50">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 transition-transform duration-300 group-hover:scale-105 font-bungee-shade">
                Job Glob
              </span>
            </Link>

            {/* Hamburger Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 z-50 relative"
              onClick={toggleMenu}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <div className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 relative ${isMenuOpen ? 'rotate-45' : ''}`}>
                  <div className={`absolute w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : '-translate-y-2'}`}></div>
                  <div className={`absolute w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? '-rotate-90' : 'translate-y-2'}`}></div>
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
              <Link 
                href="/" 
                className="px-3 py-1.5 rounded-lg hover:text-red-800 dark:hover:text-red-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
              >
                Home
              </Link>

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

              <Link 
                href="/internships" 
                className="px-3 py-1.5 rounded-lg hover:text-red-800 dark:hover:text-red-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
              >
                Internships
              </Link>

              <Link 
                href="/by-profession" 
                className="px-3 py-1.5 rounded-lg hover:text-red-800 dark:hover:text-red-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
              >
                By Profession
              </Link>

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

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-transform duration-500 ease-in-out transform lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto pt-20 pb-6 px-6">
          <div className="grid gap-y-6">
            {/* Main Navigation Links */}
            <Link 
              href="/" 
              className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-red-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Jobs Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Jobs</h3>
              <div className="grid gap-y-3 pl-4">
                {[
                  ['Walk-in Interview', '/jobs/walk-in'],
                  ['Government', '/jobs/government'],
                  ['Top Organization', '/jobs/top-organization']
                ].map(([title, url]) => (
                  <Link
                    key={url}
                    href={url}
                    className="text-lg text-gray-600 dark:text-gray-300 hover:text-red-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>

            {/* News Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">News</h3>
              <div className="grid gap-y-3 pl-4">
                {[
                  ['Newspaper', '/news/newspaper'],
                  ['Aviation', '/news/aviation'],
                  ['Hotel', '/news/hotel'],
                  ['Supermarket', '/news/supermarket']
                ].map(([title, url]) => (
                  <Link
                    key={url}
                    href={url}
                    className="text-lg text-gray-600 dark:text-gray-300 hover:text-red-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Main Links */}
            {[
              ['Internships', '/internships'],
              ['By Profession', '/by-profession']
            ].map(([title, url]) => (
              <Link
                key={url}
                href={url}
                className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-red-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {title}
              </Link>
            ))}

            {/* More Links */}
            <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">More</h3>
              <div className="grid gap-y-3 pl-4">
                {[
                  ['About Us', '/about'],
                  ['DMCA', '/dmca'],
                  ['Report a Job', '/report-a-job'],
                  ['Terms', '/terms'],
                  ['Privacy', '/privacy'],
                  ['Contact', '/contact']
                ].map(([title, url]) => (
                  <Link
                    key={url}
                    href={url}
                    className="text-lg text-gray-600 dark:text-gray-300 hover:text-red-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}