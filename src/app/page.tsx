"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { createClient } from "@sanity/client";
import dynamic from 'next/dynamic';

// Move client creation outside component
const sanityClient = createClient({
  projectId: "5g7hrg0s",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

// Dynamic imports for components
const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: true });
const HeroSection2 = dynamic(() => import("@/components/HeroSection2"), { ssr: true });
const ReviewsSection = dynamic(() => import("@/components/ReviewsSection"), { ssr: true });
const FlagStrip = dynamic(() => import("@/components/FlagStrip"), { ssr: true });
const StatsStrip = dynamic(() => import("@/components/StatsStrip"), { ssr: true });
const LatestJobs = dynamic(() => import("@/components/LatestJobs"), { ssr: true });
const CompanyLogos = dynamic(() => import("@/components/CompanyLogos"), { ssr: true });

// Types
interface JobPost {
  id: string;
  title: string;
  company: string;
  description: string;
  image: string;
  slug: string;
  location: string;
  salary: string;
  type: string;
  category: string;
}

interface SanityPost {
  _id: string;
  title: string;
  company: string;
  excerpt: string;
  slug: { current: string };
  mainImage: {
    asset: {
      url: string;
    };
  };
  location?: string;
  salary?: string;
  type?: string;
  category?: string;
}

export default function Home() {
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 7;

  // Memoize the query
  const query = useMemo(() => `*[_type == "post"] {
    _id,
    title,
    company,
    excerpt,
    slug,
    mainImage {
      asset->{url}
    }
  }`, []);

  // Memoize job formatting function
  const formatJobs = useCallback((posts: SanityPost[]): JobPost[] => {
    return posts.map((post) => ({
      id: post._id,
      title: post.title,
      company: post.company || "",
      description: post.excerpt || "No description available",
      image: post.mainImage?.asset?.url || "https://via.placeholder.com/150",
      slug: post.slug?.current || "",
      location: post.location || "Unknown location",
      salary: post.salary || "Not specified",
      type: post.type || "Full-time",
      category: post.category || "General",
    }));
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function fetchJobs() {
      try {
        const posts = await sanityClient.fetch(query);
        if (isMounted) {
          setJobs(formatJobs(posts));
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }

    fetchJobs();

    return () => {
      isMounted = false;
    };
  }, [query, formatJobs]);

  // Memoize pagination calculations
  const paginationData = useMemo(() => {
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    return {
      currentJobs: jobs.slice(indexOfFirstJob, indexOfLastJob),
      totalPages: Math.ceil(jobs.length / jobsPerPage)
    };
  }, [jobs, currentPage, jobsPerPage]);

  return (
    <main>
      <div className="pt-8">
        <HeroSection />
      </div>
      <StatsStrip />
      <LatestJobs />
      <CompanyLogos />
      <HeroSection2 />
      <FlagStrip />
      <ReviewsSection />
    </main>
  );
}
