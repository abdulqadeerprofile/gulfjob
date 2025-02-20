"use client";

import { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import Head from "next/head";
import HeroSection from "@/components/HeroSection"; 
import HeroSection2 from "@/components/HeroSection2";
import ReviewsSection from "@/components/ReviewsSection";
import FlagStrip from "@/components/FlagStrip";
import StatsStrip from "@/components/StatsStrip";
import LatestJobs from "@/components/LatestJobs";
import CompanyLogos from "@/components/CompanyLogos";


interface JobPost {
  id: string;
  title: string;
  company: string;
  description: string;
  image: string;
  slug: string;
  location: string; // Added property
  salary: string; // Added property
  type: string; // Added property
  category: string; // Added property
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

const sanityClient = createClient({
  projectId: "5g7hrg0s",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

export default function Home() {
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 7;

  useEffect(() => {
    async function fetchJobs() {
      try {
        const query = `*[_type == "post"] {
          _id,
          title,
          company,
          excerpt,
          slug,
          mainImage {
            asset->{url}
          }
        }`;

        const posts = await sanityClient.fetch(query);

        const formattedJobs = posts.map((post: SanityPost) => ({
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

        setJobs(formattedJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }

    fetchJobs();
  }, []);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  return (
    <>
      <Head>
        <title>Citibank UAE Careers | Latest Opportunities</title>
        <meta
          name="description"
          content="Explore career opportunities at Citibank UAE"
        />
      </Head>

      <div className="pt-8">
      <HeroSection />
      </div>
      <StatsStrip />
      <LatestJobs />
      <CompanyLogos/>      
      <HeroSection2 />      
      <FlagStrip />  
      <ReviewsSection />
    </>
  );
}
