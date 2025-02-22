"use client";

import Head from 'next/head';

const AboutPage = () => {
  return (
    <div className="py-16 md:py-20"> {/* Added overall top and bottom padding */}
      <Head>
        <title>About JobGlob - Leading Job Portal in UAE & Gulf Region</title>
        <meta name="description" content="JobGlob is the premier job portal connecting talented professionals with top employers across UAE, Dubai, and the Gulf region. Discover your next career opportunity." />
        <meta name="keywords" content="UAE jobs, Dubai careers, Gulf jobs, job portal UAE, employment Dubai, JobGlob about" />
      </Head>

      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12">
          <div className="relative max-w-[1400px] mx-auto">
            {/* Hero Section */}
            <div className="mb-12 text-center">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                About JobGlob
              </h1>
              <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                Your trusted partner in finding exceptional career opportunities across the UAE and Gulf region
              </p>
            </div>

            {/* Mission Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-base text-gray-600 mb-6">
                At JobGlob, we're dedicated to bridging the gap between talented professionals and leading employers in the UAE and Gulf region. Our mission is to facilitate meaningful career connections that drive both individual and organizational success.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-xl mb-3">Connect</h3>
                  <p className="text-gray-600">Connecting qualified candidates with premier job opportunities</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-xl mb-3">Empower</h3>
                  <p className="text-gray-600">Empowering careers through quality job matches</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-xl mb-3">Grow</h3>
                  <p className="text-gray-600">Supporting professional growth across industries</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-gray-50 rounded-lg p-6 lg:p-8 mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">Why Choose JobGlob</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Extensive Network</h3>
                  <p className="text-gray-600">
                    Access to thousands of job opportunities from leading employers across UAE, Dubai, and the Gulf region.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Quality Listings</h3>
                  <p className="text-gray-600">
                    Verified job postings from reputable companies, ensuring authentic opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Industry Coverage</h3>
                  <p className="text-gray-600">
                    Diverse opportunities across banking, aviation, healthcare, hospitality, and more.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">User Experience</h3>
                  <p className="text-gray-600">
                    Simple, efficient platform designed for seamless job searching and application process.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900 text-center">Our Impact</h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <span className="block text-4xl font-bold text-red-600 mb-2">10K+</span>
                  <span className="text-gray-600">Active Jobs</span>
                </div>
                <div>
                  <span className="block text-4xl font-bold text-red-600 mb-2">5K+</span>
                  <span className="text-gray-600">Companies</span>
                </div>
                <div>
                  <span className="block text-4xl font-bold text-red-600 mb-2">1M+</span>
                  <span className="text-gray-600">Job Seekers</span>
                </div>
                <div>
                  <span className="block text-4xl font-bold text-red-600 mb-2">50K+</span>
                  <span className="text-gray-600">Successful Placements</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="mb-6 text-base lg:text-lg">
                Join thousands of professionals who've found their dream jobs through JobGlob
              </p>
              <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-base">
                Browse Jobs Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
