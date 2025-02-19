'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { TbHome } from "react-icons/tb"
import { TiThMenu } from "react-icons/ti"
import { IoClose } from "react-icons/io5"

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
    <header className="w-full sticky top-0 z-50">
      {/* Top utility strip */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/70 dark:border-gray-700/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <span className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 font-bungee-shade transition-transform duration-300 group-hover:scale-105">
                Job Glob
              </span>
            </Link>

            {/* Desktop Utility Links */}
            <div className="hidden lg:flex items-center space-x-6 text-sm ml-auto">
              {[
                ['About Us', '/about'],
                ['Privacy Policy', '/privacy'],
                ['Disclaimer', '/disclaimer'],
                ['Job Ad Report', '/report-job'],
                ['Terms and Conditions', '/terms'],
                ['Contact Us', '/contact']
              ].map(([title, url]) => (
                <Link
                  key={url}
                  href={url}
                  className="relative text-gray-600 hover:text-red-800 transition-colors duration-200 py-1"
                >
                  <span>{title}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-800 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Hamburger Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <IoClose className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <TiThMenu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop red navigation strip */}
      <div className="hidden lg:block bg-red-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-12">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center w-full">
              <Link 
                href="/" 
                className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 hover:bg-white group mr-6"
              >
                <TbHome className="w-5 h-5 text-white transition-colors duration-200 group-hover:text-red-800" />
              </Link>
              
              <div className="flex items-center justify-between w-full">
                {[
                  ['Walk-in Interview', '/walk-in-interview'],
                  ['Aviation', '/categories/aviation'],
                  ['Government', '/categories/government'],
                  ['Top Organization', '/categories/top-organization'],
                  ['Hotel & Resorts', '/categories/hotel-resorts'],
                  ['Hospital', '/categories/hospital'],
                  ['Supermarket', '/categories/supermarket'],
                  ['Private', '/categories/private'],
                  ['Banking', '/categories/banking'],
                  ['Restaurant', '/categories/restaurant']
                ].map(([title, url]) => (
                  <Link
                    key={url}
                    href={url}
                    className="relative group whitespace-nowrap py-1"
                  >
                    <span className="relative z-10 text-white/90 group-hover:text-white transition-colors duration-200 text-sm">
                      {title}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-0 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <Link 
              href="/" 
              className="text-xl font-semibold text-gray-900 dark:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <TbHome className="w-6 h-6" />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <IoClose className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
            {/* Primary Navigation */}
            <div className="space-y-4">
              <Link 
                href="/walk-in-interview"
                className="block text-lg font-medium text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Walk-in Interview
              </Link>

              {/* Categories */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Categories
                </h3>
                <div className="grid gap-y-3">
                  {[
                    ['Aviation', '/categories/aviation'],
                    ['Government', '/categories/government'],
                    ['Top Organization', '/categories/top-organization'],
                    ['Hotel & Resorts', '/categories/hotel-resorts'],
                    ['Hospital', '/categories/hospital'],
                    ['Supermarket', '/categories/supermarket'],
                    ['Private', '/categories/private'],
                    ['Banking', '/categories/banking'],
                    ['Restaurant', '/categories/restaurant']
                  ].map(([title, url]) => (
                    <Link
                      key={url}
                      href={url}
                      className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Utility Links */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                More Information
              </h3>
              <div className="grid gap-y-3">
                {[
                  ['About Us', '/about'],
                  ['Privacy Policy', '/privacy'],
                  ['Disclaimer', '/disclaimer'],
                  ['Job Ad Report', '/report-job'],
                  ['Terms and Conditions', '/terms'],
                  ['Contact Us', '/contact']
                ].map(([title, url]) => (
                  <Link
                    key={url}
                    href={url}
                    className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
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
    </header>
  )
}