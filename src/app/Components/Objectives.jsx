"use client";

import React from 'react';

export default function Objectives() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image with Trust Badge */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="/ourobjectiveabout.jpg" 
                alt="Green tractor working in agricultural field during sunset"
                className="w-full h-[550px] object-cover"
              />
              
              {/* Trust Badge Overlay */}
              <div className="absolute -bottom-16 left-80 bg-green-800 bg-opacity-95 text-white p-6 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">100% Trusted!</h3>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Tractor and harvester rental farming</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Organic sustainable farming training</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Seeding and artificial insemination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-green-100 text-green-600 text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
              Let's Cooperate Together 🤝
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Objectives
            </h2>
            
            {/* Subheading */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Agriculture is the backbone of our society, providing food, raw materials, and economic stability. 
              We're committed to supporting farmers with modern solutions and sustainable practices.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Equipment Rental</h3>
                  <p className="text-gray-600">Access to the latest tractors, harvesters, and farming equipment to increase productivity and efficiency.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Farming Training</h3>
                  <p className="text-gray-600">Comprehensive training programs on organic farming methods and sustainable agricultural practices.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Agricultural Services</h3>
                  <p className="text-gray-600">Professional seeding, artificial insemination, and crop management services for optimal yields.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support & Consultation</h3>
                  <p className="text-gray-600">Round-the-clock technical support and agricultural consultation to help you make informed decisions.</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-10">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                Learn More About Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}