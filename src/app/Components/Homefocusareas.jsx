"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Homefocusareas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { src: "/focus6.jpg", alt: "Biogas and Renewable Energy" },
    { src: "/focus7.jpg", alt: "Dairy Processing" },
    { src: "/focus3.jpg", alt: "Agricultural Processing" },
    { src: "/focus4.jpg", alt: "Rural Development" },
    { src: "/focus5.jpg", alt: "Mineral Water Production" },
    { src: "/focus1.jpg", alt: "Sustainable Agriculture" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-yellow-50 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-8 bg-gradient-to-r from-green-600 to-green-700 transform rotate-45 shadow-lg"></div>
            <h2 className="text-sm font-medium text-green-700 tracking-wider">UCDF & KEC</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="space-y-2 text-justify">
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-green-100 hover:shadow-lg transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                <div>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    <strong className='text-md text-gray-600'>Renewable, Biofuel Energy Generation, Carbon credit</strong> - Development of
                    decentralized energy infrastructure, including biogas and solar power, to reduce rural
                    dependency on fossil fuels.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-yellow-100 hover:shadow-lg transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                <div>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    <strong className="text-gray-600">Agricultural Waste Processing, Agri - Inputs (All type of Seeds, Pesticides,
                      Fertilizer), Contract farming</strong> - Conversion of cattle waste and farm residues into
                    bio-energy, compost, and organic manure to support a circular rural economy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-green-100 hover:shadow-lg transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                <div>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    <strong className="text-gray-600">Dairy, Bakery & Cafeteria & Food Micro-Enterprises & other Agri allied
                      business</strong> - Support for rural dairy operations and bakery units that enhance local
                    income generation and value addition in the food supply chain.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-green-100 hover:shadow-lg transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                <div>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    <strong className="text-gray-600">Services EPC, PMC, O & M, Trading, Supply, Manufacturing or Contract
                      manufacturing, procurement,
                      products</strong> All type turnkey installation services of above
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Title and Carousel */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center relative">
              <div className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-r from-green-700 via-green-600 to-yellow-400 opacity-10 rounded-2xl blur-2xl -z-10"></div>

              <div className="relative text-center py-4 rounded-2xl">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-green-800">
                  HEMU - Our {" "}
                  <span className="text-yellow-300">Core Focus Areas</span>
                </h1>
              </div>
            </div>

            {/* Carousel */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-green-100 to-yellow-100 rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96 shadow-2xl border-2 border-green-200">
                <div className="relative w-full h-full overflow-hidden">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${index === currentSlide
                          ? 'opacity-100 transform translate-x-0'
                          : index < currentSlide
                            ? 'opacity-0 transform -translate-x-full'
                            : 'opacity-0 transform translate-x-full'
                        }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-6">
                        <h3 className="text-white text-sm sm:text-lg font-semibold">{image.alt}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-green-700" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-green-700" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide
                          ? 'bg-white scale-110'
                          : 'bg-white/50 hover:bg-white/75'
                        }`}
                    />
                  ))}
                </div>
              </div>

              <div className="text-center mt-4">
                <span className="text-sm text-gray-600">
                  {currentSlide + 1} of {images.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UCDF Objectives Section */}
      <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-8 lg:p-12 border border-gray-100 mt-12 sm:mt-16">
        <div className="text-center mb-8 sm:mb-10">
          <div className="relative text-center py-4 rounded-2xl w-full max-w-[500px] mx-auto px-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-green-800">
              HEMU Strategic {" "}
              <span className="text-yellow-400">Objectives</span>
            </h1>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Our comprehensive approach to rural development and farmer empowerment
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: "💰",
              title: "Increase Farmers' Income",
              description: "Create employment opportunities and enhance rural livelihoods"
            },
            {
              icon: "🥛",
              title: "Promote Dairy Farming",
              description: "Support commercial dairy farming and establish milk booths"
            },
            {
              icon: "🤝",
              title: "Connect Cooperatives",
              description: "Bridge cooperatives with corporate entities for mutual growth"
            },
            {
              icon: "📈",
              title: "Market-Oriented Produce",
              description: "Facilitate direct market access for agricultural products"
            },
            {
              icon: "🚫",
              title: "Eliminate Middlemen",
              description: "Ensure farmers receive fair prices for their products"
            },
            {
              icon: "🛠️",
              title: "Support Services",
              description: "Provide comprehensive support services to farming communities"
            }
          ].map((objective, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl h-full border border-green-200 hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-4">{objective.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#205D34' }}>{objective.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{objective.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homefocusareas;