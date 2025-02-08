'use client'

import { Search } from 'lucide-react'

export function SearchBar({ isDark }: { isDark: boolean }) {
  return (
    <div className={`hidden md:flex items-center rounded-full px-4 py-2 ${
      isDark ? 'bg-gray-800' : 'bg-gray-100'
    }`}>
      <Search className="h-4 w-4 text-gray-400" />
      <input
        type="text"
        placeholder="Search..."
        className={`ml-2 bg-transparent outline-none w-64 text-sm ${
          isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'
        }`}
      />
    </div>
  )
}
