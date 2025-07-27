import React from "react";

export default function Home2ndsection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Main Large Image */}
            <div className="col-span-2 sm:col-span-1 row-span-2">
              <div className="relative rounded-2xl overflow-hidden h-full min-h-[300px]">
                <img
                  src="home2.jpg"
                  alt="Solar house with renewable energy systems"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">CBG for Industries</h3>
                  <p className="text-sm opacity-90">
                    Reliable fuel for boilers, kilns & generators
                  </p>
                </div>
              </div>
            </div>

            {/* Wind Farm Image */}
            <div className="col-span-1">
              <div className="relative rounded-2xl overflow-hidden h-full min-h-[150px]">
                <img
                  src="homesecondsecfour.jpg"
                  alt="Wind farm with solar panels"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-sm sm:text-base">
                    Agro-Waste to Energy
                  </h3>
                  <p className="text-xs opacity-90">
                    Turning agricultural waste into clean fuel
                  </p>
                </div>
              </div>
            </div>

            {/* Solar Panel Image */}
            <div className="col-span-1">
              <div className="relative rounded-2xl overflow-hidden h-full min-h-[150px]">
                <img
                  src="homesecondsectionthree.jpg"
                  alt="Solar panel installation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-sm sm:text-base">
                    Decentralized Energy Plants
                  </h3>
                  <p className="text-xs opacity-90">
                    Smart, localized biogas production systems
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              ABOUT US
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Pioneering the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 block">
                Renewable Energy
              </span>
            </h1>

            <p className="text-gray-600 leading-relaxed text-justify text-base font-medium">
              We are proud to be a trusted name in Compressed Bio Gas solutions, converting organic and agro waste into clean energy. Our mission is to make sustainable fuel accessible and affordable for industries, transport, and rural development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
                    <span className="text-xl font-bold text-green-600">90%</span>
                  </div>
                  <div
                    className="absolute inset-0 rounded-full border-4 border-green-500 transform rotate-45"
                    style={{
                      background: `conic-gradient(#10b981 0deg, #10b981 ${90 * 3.6}deg, #e5e7eb ${90 * 3.6}deg, #e5e7eb 360deg)`,
                    }}
                  ></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Building Tomorrow</h3>
                  <p className="text-sm text-gray-600">Clean energy from waste</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
                    <span className="text-xl font-bold text-green-600">85%</span>
                  </div>
                  <div
                    className="absolute inset-0 rounded-full border-4 border-green-500 transform rotate-45"
                    style={{
                      background: `conic-gradient(#10b981 0deg, #10b981 ${85 * 3.6}deg, #e5e7eb ${85 * 3.6}deg, #e5e7eb 360deg)`,
                    }}
                  ></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Leading the Bio Gas Movement</h3>
                  <p className="text-sm text-gray-600">Fueling change across India</p>
                </div>
              </div>
            </div>

            <button className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Learn More
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
