// components/Pagination.tsx
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center mt-12 space-x-4">
      <Link
        href={`?page=${currentPage - 1}`}
        className={`px-4 py-2 rounded-lg ${
          currentPage === 1
            ? 'bg-gray-200 dark:bg-gray-700 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        Previous
      </Link>
      
      <div className="flex space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i + 1}
            href={`?page=${i + 1}`}
            className={`px-4 py-2 rounded-lg ${
              currentPage === i + 1
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white'
            }`}
          >
            {i + 1}
          </Link>
        ))}
      </div>

      <Link
        href={`?page=${currentPage + 1}`}
        className={`px-4 py-2 rounded-lg ${
          currentPage === totalPages
            ? 'bg-gray-200 dark:bg-gray-700 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        Next
      </Link>
    </div>
  );
}