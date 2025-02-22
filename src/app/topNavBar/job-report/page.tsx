"use client";

import { useState } from 'react';
import { FiAlertTriangle, FiCheckCircle, FiShield } from 'react-icons/fi';

const JobReport = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your form submission logic here
  };

  return (
    <div className="py-16 md:py-20">
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12">
          <div className="relative max-w-[1400px] mx-auto">
            {/* Hero Section */}
            <div className="mb-12 text-center">
              <div className="flex justify-center mb-6">
                <FiAlertTriangle className="text-5xl text-red-600" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                Report a Job Advertisement
              </h1>
              <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                Help us maintain a safe and trustworthy job portal by reporting suspicious or inappropriate job listings
              </p>
            </div>

            {/* Safety Notice */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-12 rounded-r-lg">
              <div className="flex items-start">
                <FiShield className="text-2xl text-amber-500 mt-1 mr-4" />
                <div>
                  <h2 className="text-lg font-semibold text-amber-800 mb-2">Safety First</h2>
                  <p className="text-amber-700">
                    Be cautious of job ads that request money, personal banking details, or seem too good to be true. 
                    Your safety is our priority.
                  </p>
                </div>
              </div>
            </div>

            {/* Report Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 mb-12">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Job Details Section */}
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Job Advertisement Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Enter the job title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Enter the company name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Report Details */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reason for Report *
                    </label>
                    <select
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select a reason</option>
                      <option value="suspicious">Suspicious or Fraudulent</option>
                      <option value="inappropriate">Inappropriate Content</option>
                      <option value="misleading">Misleading Information</option>
                      <option value="scam">Potential Scam</option>
                      <option value="duplicate">Duplicate Listing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      rows={4}
                      placeholder="Please provide any additional information that will help us investigate"
                    ></textarea>
                  </div>

                  {/* Reporter Details */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Your Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      Submit Report
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12">
                  <FiCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Report Submitted Successfully</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for helping us maintain a safe platform. We will investigate your report promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-red-600 hover:text-red-700 font-semibold"
                  >
                    Submit Another Report
                  </button>
                </div>
              )}
            </div>

            {/* Privacy Notice */}
            <div className="text-center bg-gray-50 rounded-lg p-6">
              <p className="text-sm text-gray-600">
                Your report will be handled confidentially in accordance with our privacy policy.
                We are committed to maintaining a safe and legitimate job marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobReport;
