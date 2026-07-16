"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from "next/link";

export default function Objectives() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/ourobjectiveabout.jpg",
    "/Aboutobjectives1.jpg",
    "/Aboutobjectives3.jpg"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image Slider with Trust Badge */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={images[currentImageIndex]}
                alt={`Agricultural scene ${currentImageIndex + 1}`}
                className="w-full h-[280px] sm:h-[380px] md:h-[450px] lg:h-[550px] object-cover transition-opacity duration-500"
              />

              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-300"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Trust Badge Overlay */}
              <div className="absolute bottom-4 right-4 sm:-bottom-16 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 lg:left-80 lg:translate-x-0 max-w-[240px] sm:max-w-xs bg-green-800 bg-opacity-95 text-white p-4 sm:p-6 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold">100% Trusted!</h3>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm">Tractor and harvester rental farming</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm">Organic sustainable farming training</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm">Seeding and artificial insemination</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="mt-24 sm:mt-20 lg:mt-16 space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Consultation & Technical Support</h3>
                  <p className="text-gray-600 text-justify text-sm">
                    Round-the-clock guidance on agriculture, dairy, and renewable energy technologies,
                    including CBG operations, enabling informed, data-driven decisions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Farmer Empowerment & Sustainability</h3>
                  <p className="text-gray-600 text-justify text-sm">
                    Building a resilient rural ecosystem where innovation, sustainable practices,
                    and renewable energy adoption drive economic growth and environmental stewardship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-600 text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
              Let's Cooperate Together 🤝
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Objectives
            </h2>

            <p className="text-sm text-justify text-gray-600 mb-8 leading-relaxed">
              Agriculture and dairy are the backbone of rural India, providing livelihoods, food security, and economic stability. Through HEMU, the joint venture of UCDF and KEC, we empower farmers with innovative solutions, sustainable practices, and renewable energy technologies—including CBG production—to enhance productivity, profitability, and environmental sustainability.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Equipment Access</h3>
                  <p className="text-gray-600 text-justify text-sm">
                    Provision of state-of-the-art tractors, harvesters, and other agricultural machinery
                    to improve farm efficiency and scalability.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainable Farming & Dairy Training</h3>
                  <p className="text-gray-600 text-justify text-sm">
                    Comprehensive programs on organic farming, sustainable agriculture, and best dairy practices
                    to enhance knowledge and long-term productivity.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Agricultural & Dairy Services</h3>
                  <p className="text-gray-600 text-justify text-sm">
                    Professional services including precision seeding, artificial insemination, crop management,
                    and dairy support to maximize yields and milk production.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">CBG Production & Renewable Energy Solutions</h3>
                  <p className="text-gray-600 text-justify text-sm">
                    Support in compressed biogas generation from agricultural and dairy waste,
                    along with renewable energy integration (Bio-CNG, solar, waste-to-energy),
                    helping farmers convert waste into clean energy and additional income streams.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/services">
                <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-3 rounded-lg font-semibold text-base transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Learn More About Our Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}