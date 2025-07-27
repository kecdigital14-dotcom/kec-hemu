"use client";

import React from "react";

const AboutfifthSection = () => {
  const services = [
    {
      id: 1,
      title: "Bio-CNG Projects",
      description: "Renewable energy from organic waste",
      image: "/kecservices1.jpg",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500"
    },
    {
      id: 2,
      title: "Bio-Diesel Production",
      description: "Sustainable fuel alternatives",
      image: "/kecservicestwo.jpg",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500"
    },
    {
      id: 3,
      title: "Ethanol Production",
      description: "Clean energy from agricultural residues",
      image: "/kecservicesthree.jpg",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-500"
    },
    {
      id: 4,
      title: "Dairy Development",
      description: "Modern dairy infrastructure solutions",
      image: "/kecservicesfour.jpg",
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-600"
    },
    {
      id: 5,
      title: "Mega Food Parks",
      description: "Large-scale food processing facilities",
      image: "/kecservicesfive.jpg",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-500"
    },
    {
      id: 6,
      title: "Warehousing & Cold Storage",
      description: "Advanced storage solutions",
      image: "/kecservicessix.jpg",
      color: "from-green-500 to-lime-500",
      bgColor: "bg-green-500"
    }
  ];

  const getServiceIcon = (id) => {
    const icons = {
      1: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2v20C6.48 22 2 17.52 2 12S6.48 2 12 2zm0 18V4c4.41 0 8 3.59 8 8s-3.59 8-8 8z" />
        </svg>
      ),
      2: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      3: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      4: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      5: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      6: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      )
    };
    return icons[id] || null;
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-green-600 text-sm font-semibold uppercase tracking-wider">
            Our Services
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Operation Management By KEC
          <br />
          <span className="text-green-600">Best Leading Services</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="relative h-48 overflow-hidden bg-gray-200">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
              />
              <div className="absolute bottom-4 left-4">
                <div
                  className={`w-12 h-12 rounded-full ${service.bgColor} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                >
                  {getServiceIcon(service.id)}
                </div>
              </div>
            </div>

            <div className="p-6 relative">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700 group-hover:text-green-600 group-hover:gap-3 transition-all duration-300 cursor-pointer">
                  <span className="text-sm font-medium">Discover More</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-green-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg
                    className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} w-0 group-hover:w-full transition-all duration-500`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutfifthSection;
