import React from "react";

export default function Initiative() {
  return (
    <div className="relative  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 h-[480px]">
        <img
          src="/initativeabout.jpg"
          alt="Hands protecting a plant seedling"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-32 h-32 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-yellow-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-300 rounded-full blur-2xl"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-30">
        <div className="relative w-full h-full">
          {/* Palm leaf decoration */}
          <div className="absolute top-8 right-8 w-48 h-2 bg-green-400 rounded-full transform rotate-45 origin-right"></div>
          <div className="absolute top-12 right-12 w-40 h-2 bg-green-400 rounded-full transform rotate-45 origin-right"></div>
          <div className="absolute top-16 right-16 w-32 h-2 bg-green-400 rounded-full transform rotate-45 origin-right"></div>
          <div className="absolute top-20 right-20 w-24 h-2 bg-green-400 rounded-full transform rotate-45 origin-right"></div>
        </div>
      </div>

      {/* Purple circle decoration */}
      <div className="absolute top-8 left-8 w-12 h-12 border-4 border-purple-300 rounded-full opacity-60"></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8 ">
        <div className="max-w-6xl w-full flex justify-end">
          {/* Info Card - Positioned on the right side */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-md w-full top-0">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-700 font-semibold text-sm uppercase tracking-wide">
                  ECOLOGY
                </span>
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Our Initiative
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-8 leading-relaxed font-medium">
              Econet is a nonprofit environmental main dedicated to protecting
              planet the through community empowerment.
            </p>

            {/* CTA Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center gap-3 group shadow-lg hover:shadow-xl">
              Explore More
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-900/20 to-transparent"></div>
    </div>
  );
}
