// src/components/BlogCard.tsx
import Link from 'next/link';
import { Post } from '@/lib/posts';

export default function BlogCard({ post }: { post: Post }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="text-blue-500 hover:text-blue-700"
      >
        Read More →
      </Link>
    </div>
  );
}