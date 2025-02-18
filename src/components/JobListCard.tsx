import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

interface JobListCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

export function JobListCard({ title, description, image, date, category }: JobListCardProps) {
  return (
    <article className="flex gap-6 bg-white p-4 rounded-xl hover:shadow-lg transition-all group">
      {/* Image Container */}
      <div className="w-1/3 relative overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Container */}
      <div className="w-2/3 flex flex-col justify-between">
        <div>
          <span className="text-red-600 text-sm font-medium mb-2 block">
            {category}
          </span>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-2">
            {description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <time className="text-sm text-gray-500">
            {format(new Date(date), 'MMMM dd, yyyy')}
          </time>
          <Link 
            href="#" 
            className="text-red-600 font-medium hover:text-red-700 transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
