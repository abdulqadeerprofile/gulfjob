// src/lib/posts.ts
export interface Post {
    id: string;
    title: string;
    content: string;
    slug: string;
  }
  
  export const getPosts = (): Post[] => {
    return [
      {
        id: '1',
        title: 'How to Start a Blog',
        content: 'Learn how to start a blog in 2023.',
        slug: 'how-to-start-a-blog',
      },
      {
        id: '2',
        title: 'Top 10 Jobs in 2023',
        content: 'Discover the top 10 jobs in 2023.',
        slug: 'top-10-jobs-in-2023',
      },
    ];
  };
  
  export const getPostBySlug = (slug: string): Post | undefined => {
    return getPosts().find((post) => post.slug === slug);
  };