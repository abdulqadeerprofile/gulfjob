"use client";

import { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import { JobCard } from "@/components/JobCard";
import Head from "next/head";
import HeroSection from "@/components/HeroSection"; 
import HeroSection2 from "@/components/HeroSection2";
import HeroSection3 from "@/components/HeroSection3";
import { JobListCard } from "@/components/JobListCard";
import { Sidebar } from "@/components/Sidebar";


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

      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="w-2/3">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
              Latest Career Opportunities
            </h1>

            {/* Job Listings */}
            <div className="space-y-6">
              {currentJobs.map((job) => (
                <JobListCard
                  key={job.id}
                  title={job.title}
                  description={job.description}
                  image={job.image}
                  date={new Date().toISOString()} // Replace with actual date
                  category={job.category}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === index + 1
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="w-1/3 relative">
            <div className="sticky top-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

      <HeroSection2 />|
      
    </>
  );
}
