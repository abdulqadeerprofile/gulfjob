"use client";

import { FiMail, FiMapPin, FiPhone, FiClock, FiSend } from 'react-icons/fi';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="py-16 md:py-20">
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12">
          <div className="relative max-w-[1400px] mx-auto">
            {/* Hero Section */}
            <div className="mb-12 text-center">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                Get in Touch
              </h1>
              <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                We're here to help and answer any questions you might have
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Contact Information Cards */}
              <div className="space-y-6">
                {/* Email Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex items-start">
                  <div className="bg-red-50 p-3 rounded-full mr-4">
                    <FiMail className="text-red-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600 text-sm">support@jobglob.com</p>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <FiMapPin className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600 text-sm">Dubai, United Arab Emirates</p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex items-start">
                  <div className="bg-green-50 p-3 rounded-full mr-4">
                    <FiPhone className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 text-sm">+971 XX XXX XXXX</p>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex items-start">
                  <div className="bg-purple-50 p-3 rounded-full mr-4">
                    <FiClock className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 flex items-center justify-center"
                  >
                    <FiSend className="mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178427047219!2d55.2707828!3d25.2048493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1635959573000!5m2!1sen!2s"
                  className="w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
