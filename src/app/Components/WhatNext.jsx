import React from 'react';

export default function WhatNext() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src="/api/placeholder/600/300" 
              alt="HEMU biogas facility with storage tanks and processing equipment"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute top-4 right-4">
              <div className="w-8 h-12 bg-green-600 rounded-sm transform rotate-12 shadow-md"></div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src="/api/placeholder/600/300" 
              alt="Aerial view of HEMU waste processing and renewable energy infrastructure"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Title Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-yellow-500 leading-tight">
              WHAT'S NEXT
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-yellow-500 leading-tight">
              FOR HEMU?
            </h3>
            
            {/* Decorative Element */}
            <div className="flex items-center space-x-2 mt-8">
              <div className="w-12 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-8 h-2 bg-green-700 rounded-full"></div>
              <div className="w-4 h-2 bg-yellow-400 rounded-full"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p>
                <span className="font-semibold text-green-700">HEMU</span> is poised for strategic expansion, focusing on scaling its clean energy infrastructure through additional <span className="font-medium">CBG and organic waste processing units</span> across Uttarakhand. The mission aims to launch farmcentric business models in dairy, bakery, and manure production while integrating smart technologies for efficient operations.
              </p>
              
              <p>
                Future plans also include entry into <span className="font-medium">carbon credit markets, development of rural cold chain systems, and the establishment of eco-education and agri-tourism hubs</span> to promote awareness and engagement. By forging policy and investment partnerships, HEMU is committed to building a <span className="font-medium text-green-700">self-reliant, climate-resilient, and economically empowered rural ecosystem</span>.
              </p>
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Learn More About Our Vision
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats/Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-green-700 rounded-full"></div>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Clean Energy</h4>
            <p className="text-sm text-gray-600">CBG & renewable infrastructure expansion</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Smart Technology</h4>
            <p className="text-sm text-gray-600">Integrated systems for efficient operations</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-green-700 rounded-full"></div>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Rural Empowerment</h4>
            <p className="text-sm text-gray-600">Self-reliant & climate-resilient ecosystems</p>
          </div>
        </div>
      </div>
    </section>
  );
}