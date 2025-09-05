"use client";

import React from 'react';
import { Play, Leaf, Factory, Zap } from 'lucide-react';




const HemuHeroSection = ({
  badgeText = "Dairy Excellence",
  title = "Revolutionizing Rural",
  highlight = " Agriculture & Dairy",
  subtitle = "",
  description = "Empowering rural communities with advanced dairy processing, sustainable farming practices, and clean energy integration. Enhancing productivity while ensuring quality and profitability for farmers.",
  videoTitle = "Modern Dairy Process",
  videoDescription = "Watch how we process fresh milk into high-quality dairy products",
  videoDuration = "3:45",
  buttonText = "Explore Dairy Solutions",
  onButtonClick = () => console.log("Button clicked"),
  className = ""
}) => {
  return (
    <div className={`relative min-h-[500px] overflow-hidden ${className}`}>
      {/* Background decorative elements - subtle without colors */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gray-100 opacity-20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gray-200 opacity-20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gray-100 opacity-15 rounded-full blur-lg"></div>
      
      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-100 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm mb-6">
              {/* HEMU Logo */}
              <div className="flex items-center gap-1">
                <svg width="24" height="24" viewBox="0 0 100 120" className="flex-shrink-0">
                  {/* Mountain/Triangle shapes - Green tones */}
                  <polygon points="10,70 30,30 50,70" fill="#059669" />
                  <polygon points="30,70 50,30 70,70" fill="#10b981" />
                  <polygon points="50,70 70,30 90,70" fill="#34d399" />
                  
                  {/* HEMU Text - Warm friendly colors */}
                  <text x="50" y="90" textAnchor="middle" className="text-[12px] font-bold" fill="#f59e0b">H</text>
                  <text x="50" y="102" textAnchor="middle" className="text-[12px] font-bold" fill="#f59e0b">E</text>
                  <text x="50" y="114" textAnchor="middle" className="text-[12px] font-bold" fill="#f59e0b">M</text>
                  <text x="50" y="126" textAnchor="middle" className="text-[12px] font-bold" fill="#f59e0b">U</text>
                </svg>
              </div>
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">{badgeText}</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-3 leading-tight">
              <span className="text-gray-800">{title.split(' ').slice(0, 2).join(' ')}</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">{highlight}</span>
              <br />
              <span className="text-gray-800">{subtitle}</span>
            </h1>
            
            {/* Key Features */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-gray-100 backdrop-blur-sm rounded-full px-3 py-1">
                <Factory className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Dairy Plants</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 backdrop-blur-sm rounded-full px-3 py-1">
                <Leaf className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Organic Feed</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 backdrop-blur-sm rounded-full px-3 py-1">
                <Zap className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Energy Efficiency</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl text-justify">
              {description}
            </p>
            
            {/* Stats */}
            <div className="flex gap-6 mb-8">
              <div>
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-500">Milk Purity</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">80%</div>
                <div className="text-sm text-gray-500">Farmer Growth</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">120+</div>
                <div className="text-sm text-gray-500">Village Centers</div>
              </div>
            </div>
            
            {/* CTA Button */}
            <button
              onClick={onButtonClick}
              className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-green-700 transform hover:scale-105 transition-all duration-200"
            >
              {buttonText}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Right Content - Video Preview */}
          <div className="flex-1 max-w-lg ">
            <div className="relative bg-gray-50 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-200 bg-gradient-to-r from-green-600 to-yellow-400">
              
              {/* Real Video */}
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/projectfirstsectionimg.jpg"
                >
                  <source src="/projectproduction.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Info */}
              <div className="mt-4">
                <h3 className="font-semibold text-gray-100 mb-1">{videoTitle}</h3>
                <p className="text-sm text-gray-100">{videoDescription}</p>
                
                {/* Process Steps */}
                <div className="flex gap-2 mt-3">
                  <div className="flex-1 bg-white backdrop-blur-sm rounded-lg p-2 text-center">
                    <div className="text-xs font-medium text-gray-800">Collection</div>
                    <div className="text-xs text-gray-600">Fresh Milk</div>
                  </div>
                  <div className="flex-1 bg-white backdrop-blur-sm rounded-lg p-2 text-center">
                    <div className="text-xs font-medium text-gray-800">Processing</div>
                    <div className="text-xs text-gray-600">Pasteurization</div>
                  </div>
                  <div className="flex-1 bg-white backdrop-blur-sm rounded-lg p-2 text-center">
                    <div className="text-xs font-medium text-gray-800">Distribution</div>
                    <div className="text-xs text-gray-600">Dairy Products</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gray-200 opacity-30 rounded-full blur-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gray-300 opacity-30 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HemuHeroSection;
