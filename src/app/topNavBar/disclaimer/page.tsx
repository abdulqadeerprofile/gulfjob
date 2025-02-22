"use client";

const Disclaimer = () => {
  return (
    <div className="py-16 md:py-20">
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12">
          <div className="relative max-w-[1400px] mx-auto">
            {/* Hero Section */}
            <div className="mb-12 text-center">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                Disclaimer Notice
              </h1>
              <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                Please read this disclaimer carefully before using JobGlob
              </p>
            </div>

            {/* General Disclaimer */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg shadow-lg p-6 lg:p-8 mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">General Disclaimer</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  The information provided on JobGlob is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
                </p>
              </div>
            </div>

            {/* Key Points Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-red-600">Job Listings</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <p>Job listings are posted by third-party employers</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <p>We do not guarantee job availability or accuracy</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <p>Verify all information directly with employers</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-red-600">User Responsibility</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <p>Conduct due diligence before applying</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <p>Protect personal information appropriately</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <p>Report suspicious activities promptly</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Third-Party Content */}
            <div className="bg-gray-50 rounded-lg p-6 lg:p-8 mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">Third-Party Content</h2>
              <p className="text-gray-600 mb-6">
                JobGlob may contain links to external websites or include content from third parties. We have no control over the nature, content, and availability of those sites or resources. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-red-50 rounded-lg p-6 lg:p-8 mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">Limitation of Liability</h2>
              <p className="text-gray-600">
                In no event will JobGlob be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
