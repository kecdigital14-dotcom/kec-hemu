import React from 'react';

const Dairy = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side - Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Main Image Container */}
              <div className="relative h-96 lg:h-[500px]">
                {/* Actual Image */}
                <img
                  src="/dairymain.jpg"
                  alt="Fresh environmental plants and trees"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Contact Us Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-green-600 text-sm font-medium uppercase tracking-wider">CONTACT US</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Fresh Environmental
              <br />
              <span className="text-green-600">Plant & Safe Trees</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Competently cultivate worldwide e-tailers through principle-centered value
              professionally engineer high-payoff deliverables without exceptional
              processes. Rapidiously network cost effective vortals.
            </p>

            {/* More About Button */}
            <div className="pt-4">
              <button className="group relative px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden">
                <div className="flex items-center gap-3">
                  <span>More About</span>
                  <div className="w-5 h-5 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>

                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dairy;