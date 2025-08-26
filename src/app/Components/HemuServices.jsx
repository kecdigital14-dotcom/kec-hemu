import React from 'react';

const HemuServices = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-200 rounded-full opacity-15 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-green-300 rounded-full opacity-25 blur-lg"></div>
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-yellow-300 rounded-full opacity-20 blur-lg"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch min-h-[600px]">

          {/* Left Column */}
          <div className="space-y-8 flex flex-col justify-between">
            {/* Title, Image and Description */}
            <div className="space-y-8">
              <div className="relative text-center">
                <div className="absolute -top-8 -left-4 w-24 h-24 bg-yellow-200 rounded-full opacity-40 blur-lg"></div>
                <h1 className="text-5xl font-bold text-green-700 tracking-tight relative z-10">
                  SERVICES
                </h1>
              </div>

              {/* Service Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl w-[550px] h-[300px] mx-auto border-4 border-yellow-100">
                <img
                  src="/herobannerthreenew.png"
                  alt="Biogas and Renewable Energy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-green-700 font-semibold text-sm">HEMU Solutions</span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-yellow-500 rounded-full mr-4"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-gray-700 leading-6 text-sm">
                  HEMU offers a comprehensive range of services aimed at fostering rural
                  sustainability and economic empowerment. These include the
                  development Renewable & Biofuel Industry such as Compressed Biogas
                  (CBG) plants for clean energy generation from cattle and agricultural
                  waste, and the implementation of solar energy solutions to power rural
                  infrastructure (EPC, PMC, O & M).
                </p>
              </div>
            </div>

            {/* First Service Card */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border-2 border-green-200 hover:border-yellow-400">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <div className="w-full h-full border-4 border-green-300 rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-10">
                <div className="w-full h-full bg-yellow-200 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-3xl bg-gradient-to-br from-green-100 to-yellow-100 p-3 rounded-xl border border-green-200">
                    🏭
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-800 tracking-tight transition-colors group-hover:text-green-600">
                      Compressed Biogas (CBG) Plants
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 leading-6 text-sm mb-4">
                  Setting up plants for converting cattle dung and organic waste into usable biogas for energy and transport.
                </p>

                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>

                <div className="absolute top-6 right-6 transform group-hover:translate-x-0 translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 4 Service Cards */}
          <div className="space-y-6 flex flex-col justify-center">
            {/* Solar Energy Solutions */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border-2 border-yellow-200 hover:border-green-400">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <div className="w-full h-full border-4 border-yellow-300 rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-10">
                <div className="w-full h-full bg-green-200 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-3xl bg-gradient-to-br from-yellow-100 to-green-100 p-3 rounded-xl border border-yellow-200">
                    ☀️
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-800 tracking-tight transition-colors group-hover:text-yellow-600">
                      Solar Energy Solutions
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 leading-6 text-sm mb-4">
                  Providing solar power for rural infrastructure, including water pumps, cold storages, and training centers.
                </p>

                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>

                <div className="absolute top-6 right-6 transform group-hover:translate-x-0 translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Agri Input */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border-2 border-green-200 hover:border-yellow-400">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <div className="w-full h-full border-4 border-green-300 rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-10">
                <div className="w-full h-full bg-yellow-200 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-3xl bg-gradient-to-br from-green-100 to-yellow-100 p-3 rounded-xl border border-green-200">
                    🌱
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-800 tracking-tight transition-colors group-hover:text-green-600">
                      Agri Input, Organic Manure and Mineral Supplements
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 leading-6 text-sm mb-4">
                  Creating bio-fertilizers and cattle supplements from organic materials for improved soil and livestock health.
                </p>

                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>

                <div className="absolute top-6 right-6 transform group-hover:translate-x-0 translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Dairy & Bakery Units */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border-2 border-yellow-200 hover:border-green-400">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <div className="w-full h-full border-4 border-yellow-300 rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-10">
                <div className="w-full h-full bg-green-200 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-3xl bg-gradient-to-br from-yellow-100 to-green-100 p-3 rounded-xl border border-yellow-200">
                    🥛
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-800 tracking-tight transition-colors group-hover:text-yellow-600">
                      Dairy & Bakery Units
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 leading-6 text-sm mb-4">
                  Supporting rural dairy production and bakery micro-enterprises for local consumption and market supply.
                </p>

                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>

                <div className="absolute top-6 right-6 transform group-hover:translate-x-0 translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Allied Business Card */}
            <div className="group relative bg-gradient-to-br from-green-600 to-yellow-500 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <div className="w-full h-full border-4 border-white rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-10">
                <div className="w-full h-full bg-white rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-3xl bg-white/20 backdrop-blur-sm p-3 rounded-xl border border-white/30">
                    🤝
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold tracking-tight transition-colors">
                      Allied Business
                    </h3>
                  </div>
                </div>

                <p className="leading-6 text-sm mb-4 text-white/90">
                  Energy, Agri, FMCG, FMCD, Skill Training, Trading & Services
                </p>

                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-yellow-200 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className="absolute top-6 right-6 transform group-hover:translate-x-0 translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-full shadow-lg border-2 border-green-200">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-bold">Empowering Rural Uttarakhand</span>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HemuServices;