"use client";
import React from "react";

const HomecbgProcess = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-100 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-100 rounded-full opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full mb-6">
            OUR WORK PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            We always follow the
            <br className="hidden sm:block" />
            Best Bio Gas Practices
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto font-medium text-justify sm:text-center">
            We're committed to revolutionizing the energy landscape by converting organic waste into clean, reliable fuel. Every step we take—from sourcing biomass to delivering purified gas—is designed for efficiency, sustainability, and maximum impact.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* SVG Lines (Desktop Only) */}
          <div className="hidden lg:block absolute inset-0 z-0">
            <svg className="w-full h-full" viewBox="0 0 1200 800">
              <path d="M300 400 Q600 200 900 400" stroke="#e5e7eb" strokeWidth="2" fill="none" strokeDasharray="8,8" className="opacity-50" />
              <path d="M900 400 Q1000 300 1100 200" stroke="#e5e7eb" strokeWidth="2" fill="none" strokeDasharray="8,8" className="opacity-50" />
            </svg>
          </div>

          {/* Step 1 */}
          <div className="relative mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="order-2 lg:order-1">
                <div className="relative w-full max-w-md mx-auto lg:mx-0">
                  <img src="/cbgprocess1.jpg" alt="Feedstock Collection" className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300" />
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    1
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Step 1: Feedstock Collection</h3>
                <p className="text-gray-600 text-base font-medium leading-relaxed text-justify max-w-md mx-auto lg:mx-0">
                  Organic waste like agricultural residue, cow dung, food waste, or sewage is collected and fed into an anaerobic digester, where microbes break it down in the absence of oxygen to produce raw biogas (mainly methane and CO₂).
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative mb-16">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="order-2 lg:order-1">
                <div className="relative w-full max-w-md mx-auto lg:mx-0">
                  <img src="/cbgprocess2.jpg" alt="Biogas Purification" className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300" />
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    2
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-right">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Step 2: Biogas Purification</h3>
                <p className="text-gray-600 text-base font-medium leading-relaxed text-justify max-w-md mx-auto lg:ml-auto">
                  The raw biogas is purified to remove CO₂, H₂S, and moisture, resulting in high-purity methane (≥ 90%)—similar to natural gas. This purified gas is known as Compressed Bio Gas (CBG) and meets fuel-grade standards.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="order-2 lg:order-1">
                <div className="relative w-full max-w-md mx-auto lg:mx-0">
                  <img src="/cbgprocess3.jpg" alt="CBG Compression" className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300" />
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    3
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Step 3: Compression or Injection</h3>
                <p className="text-gray-600 text-base font-medium leading-relaxed text-justify max-w-md mx-auto lg:mx-0">
                  The upgraded biogas is compressed to high pressure (200–250 bar) and either filled in cylinders for transport or injected into gas pipelines as CBG, ready for use as fuel for vehicles or industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomecbgProcess;
