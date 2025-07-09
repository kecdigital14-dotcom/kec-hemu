"use client";

import React from 'react';

const OperationKec = () => {
  const services = [
    {
      id: 1,
      title: "Cleaning Ocean",
      description: "Alternative innovation to ethical network environmental whiteboard",
      image: "/api/placeholder/300/200",
      color: "from-blue-500 to-teal-500"
    },
    {
      id: 2,
      title: "Tree Plantation",
      description: "Alternative innovation to ethical network environmental whiteboard",
      image: "/api/placeholder/300/200",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Dust Recycling",
      description: "Alternative innovation to ethical network environmental whiteboard",
      image: "/api/placeholder/300/200",
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <div className="max-w-full mx-auto p-8 bg-gray-50 min-h-screen px-36">
      {/* Header Section */}
      <div className="mb-12 ">
        <div className="flex items-center gap-2 mb-4 ">
          <div className="flex items-center gap-2 text-green-600">
            <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-sm font-medium uppercase tracking-wider">OUR SERVICES</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-lg leading-tight">
              Operation Management By KEC
            <br />
            <span className="text-green-600">Best Leading Services</span>
          </h1>
          
          <div className="flex gap-2">
            <button className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-green-50 hover:scale-105 group">
              <svg className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-green-50 hover:scale-105 group">
              <svg className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
              <div className="absolute inset-0 bg-gray-200 group-hover:scale-110 transition-transform duration-500">
                {/* Service specific icons */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.id === 1 && (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    )}
                    {service.id === 2 && (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    )}
                    {service.id === 3 && (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2v20C6.48 22 2 17.52 2 12S6.48 2 12 2zm0 18V4c4.41 0 8 3.59 8 8s-3.59 8-8 8z"/>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white bg-opacity-20 rounded-full group-hover:w-full group-hover:h-full group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-700"></div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 relative">
              {/* Icon */}
              <div className="mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {service.id === 1 && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  )}
                  {service.id === 2 && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  )}
                  {service.id === 3 && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2v20C6.48 22 2 17.52 2 12S6.48 2 12 2zm0 18V4c4.41 0 8 3.59 8 8s-3.59 8-8 8z"/>
                    </svg>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center gap-2 text-green-600 group-hover:gap-3 transition-all duration-300 cursor-pointer">
                <svg className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="text-sm font-medium">Learn More</span>
              </div>

              {/* Animated Border */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} w-0 group-hover:w-full transition-all duration-500`} />
              
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100" />
              <div className="absolute top-12 right-6 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse delay-200" />
              <div className="absolute bottom-8 left-4 w-1 h-1 bg-teal-400 rounded-full animate-pulse delay-300" />
              <div className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse delay-400" />
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-200 rounded-full opacity-20 animate-pulse delay-500" />
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-teal-200 rounded-full opacity-30 animate-pulse delay-700" />
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-green-300 rounded-full opacity-25 animate-pulse delay-900" />
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute animate-float-slow top-10 left-10">
          <div className="w-4 h-4 bg-green-300 rounded-full opacity-40"></div>
        </div>
        <div className="absolute animate-float-medium top-20 right-1/4">
          <div className="w-3 h-3 bg-blue-300 rounded-full opacity-40"></div>
        </div>
        <div className="absolute animate-float-fast bottom-20 right-10">
          <div className="w-5 h-5 bg-emerald-300 rounded-full opacity-40"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(270deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default OperationKec;