"use client";

const PrivacyPolicy = () => {
  return (
    <div className="py-16 md:py-20">
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12">
          <div className="relative max-w-[1400px] mx-auto">
            {/* Hero Section */}
            <div className="mb-12 text-center">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                Privacy Policy
              </h1>
              <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                How we protect and handle your personal information
              </p>
            </div>

            {/* Introduction Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">Introduction</h2>
              <p className="text-base text-gray-600 mb-6">
                JobGlob is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our job portal services.
              </p>
            </div>

            {/* Data Collection Section */}
            <div className="bg-gray-50 rounded-lg p-6 lg:p-8 mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">Information We Collect</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Name and contact details</li>
                    <li>Professional experience</li>
                    <li>Educational background</li>
                    <li>Employment history</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Usage Information</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>IP address</li>
                    <li>Usage patterns and preferences</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Usage Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">How We Use Your Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Primary Uses</h3>
                  <p className="text-gray-600">
                    We use your information to match you with relevant job opportunities, improve our services, and ensure a personalized job search experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Communication</h3>
                  <p className="text-gray-600">
                    To send you job alerts, updates about your applications, and important service notifications.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Protection Section */}
            <div className="bg-gray-50 rounded-lg p-6 lg:p-8 mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">Data Protection</h2>
              <p className="text-base text-gray-600 mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            {/* Contact Section */}
            <div className="text-center bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Questions About Privacy?</h2>
              <p className="mb-6 text-base lg:text-lg">
                If you have any questions about our privacy practices, please contact us
              </p>
              <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-base">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
