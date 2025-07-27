import React from 'react';

const Home3rdSection = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full">
              <span className="text-green-600 text-sm font-medium">+ WHY CHOOSE US</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Making the Switch to Bio Gas Easy and Affordable
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
              At HEMU, we are your trusted partner in Compressed Bio Gas solutions, known for our innovation, waste-to-energy expertise, and commitment to sustainability and client success.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-900 mb-1">1500+</div>
                <div className="text-gray-600 text-sm">CBG Projects Commissioned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-900 mb-1">750+</div>
                <div className="text-gray-600 text-sm">Happy Clients Across India</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-900 mb-1">98%</div>
                <div className="text-gray-600 text-sm">Customer Satisfaction Rate</div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center sm:justify-start">
              <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition">
                Learn More
                <span className="ml-2 text-xl">→</span>
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Badge */}
              <div className="sm:col-span-2 flex sm:justify-end justify-center mb-4">
                <div className="bg-green-500 text-white px-6 py-4 rounded-2xl shadow-lg text-center">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm">Years of Experience</div>
                </div>
              </div>

              {/* Image 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src="/home3rdsectionone.jpg"
                  alt="Solar panel installation"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>

              {/* Image 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src="/home3rdsectiontwo.jpg"
                  alt="Solar energy professional"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home3rdSection;
