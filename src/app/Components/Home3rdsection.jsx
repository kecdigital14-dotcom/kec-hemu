import React from 'react';

const Home3rdSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Why Choose Us Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full">
              <span className="text-green-600 text-sm font-medium">+ WHY CHOOSE US</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Making the Switch to Bio Gas Easy and Affordable
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed font-medium">
              At HEMU, we are your trusted partner in Compressed Bio Gas solutions, known for our innovation, waste-to-energy expertise, and commitment to sustainability and client success.


            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 py-6">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">1500+</div>
                <div className="text-gray-600 text-sm">CBG Projects Commissioned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">750+</div>
                <div className="text-gray-600 text-sm">Happy Clients Across India</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">98%</div>
                <div className="text-gray-600 text-sm">Customer Satisfaction Rate</div>
              </div>
            </div>
            
            {/* Learn More Button */}
            <button className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200">
              Learn More
              <span className="ml-2">→</span>
            </button>
          </div>
          
          {/* Right Content - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Experience Badge */}
              <div className="col-span-2 flex justify-end mb-4">
                <div className="bg-green-500 text-white px-6 py-4 rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm">Years of Experience</div>
                </div>
              </div>
              
              {/* Solar Panel Image */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img 
                  src="/home3rdsectionone.jpg" 
                  alt="Solar panel installation" 
                  className="w-full h-80 object-cover"
                />
              </div>
              
              {/* Professional Image */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img 
                  src="/home3rdsectiontwo.jpg" 
                  alt="Solar energy professional" 
                  className="w-full h-80 object-cover"
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