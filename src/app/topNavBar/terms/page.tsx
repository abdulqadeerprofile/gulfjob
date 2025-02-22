"use client";

const TermsAndConditions = () => {
  return (
    <div className="py-16 md:py-20">
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12">
          <div className="relative max-w-[1400px] mx-auto">
            {/* Hero Section */}
            <div className="mb-12 text-center">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                Terms and Conditions
              </h1>
              <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">Agreement to Terms</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  By accessing or using JobGlob, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
                </p>
              </div>
            </div>

            {/* Key Sections Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* User Account */}
              <div className="bg-gray-50 rounded-lg p-6 lg:p-8">
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900">User Accounts</h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <p>Users must be at least 18 years old</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <p>Provide accurate and complete registration information</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <p>Maintain the security of your account credentials</p>
                  </li>
                </ul>
              </div>

              {/* Acceptable Use */}
              <div className="bg-gray-50 rounded-lg p-6 lg:p-8">
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900">Acceptable Use</h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <p>No fraudulent or misleading content</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <p>Respect intellectual property rights</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <p>No harmful or malicious activities</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Content Guidelines */}
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">Content Guidelines</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Job Listings</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>Must be legitimate employment opportunities</li>
                    <li>Clear job descriptions and requirements</li>
                    <li>Accurate company information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">User Content</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>Professional and appropriate content</li>
                    <li>Truthful representations</li>
                    <li>No discriminatory content</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Important Notices */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Termination</h3>
                <p className="text-gray-600">
                  We reserve the right to terminate or suspend accounts for violations of these terms.
                </p>
              </div>
              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Modifications</h3>
                <p className="text-gray-600">
                  We may revise these terms at any time. Continued use constitutes acceptance of changes.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Governing Law</h3>
                <p className="text-gray-600">
                  These terms are governed by and construed in accordance with UAE law.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Questions About Terms?</h2>
              <p className="mb-6 text-base lg:text-lg">
                If you have any questions about these Terms and Conditions, please contact us
              </p>
              <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-base">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
