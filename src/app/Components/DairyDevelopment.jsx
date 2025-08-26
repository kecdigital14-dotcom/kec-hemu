"use client";
import React, { useState } from 'react';
import { Droplets, Snowflake, Package, TrendingUp, MapPin, Users, Zap, Shield } from 'lucide-react';

const DairyDevelopment = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Rural Milk Collection & Aggregation",
      icon: <Droplets className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      points: [
        "Establish decentralized milk procurement centers at village level",
        "Ensure farmer training in quality, hygiene, and early-morning delivery",
        "Use digital weighing and quality testing equipment to improve transparency",
        "Data-driven milk tracking integrated with a central monitoring system"
      ]
    },
    {
      title: "Chilling & Primary Processing",
      icon: <Snowflake className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600",
      points: [
        "Organize collection of raw milk in chilling centers within 2-3 hours",
        "Utilize bulk milk coolers (BMCs) to maintain quality standards",
        "Conduct basic filtration, pasteurization, and quality control at regional hubs",
        "Reduce wastage and contamination through cold chain management"
      ]
    },
    {
      title: "Value-Added Product Manufacturing",
      icon: <Package className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      points: [
        "Process chilled milk into high-demand products like:",
        "Ghee, paneer, curd, and flavored milk",
        "Use semi-automated equipment suited for small-scale but scalable production",
        "Branding and packaging aligned with FEMU quality standards"
      ]
    },
    {
      title: "Market Linkage & Export Readiness",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      points: [
        "Develop forward linkages with schools, retail chains, and hotels",
        "Leverage logistics networks for regional distribution",
        "Enable product certification for exports to urban or international markets"
      ]
    }
  ];

  const keyOfferings = [
    { icon: <MapPin className="w-6 h-6" />, text: "Rural milk procurement centers" },
    { icon: <Users className="w-6 h-6" />, text: "Processing units for ghee, paneer, flavored milk" },
    { icon: <Zap className="w-6 h-6" />, text: "Cold chain and logistics development" },
    { icon: <Shield className="w-6 h-6" />, text: "Export-oriented production units" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Split Layout */}
      <div className="relative overflow-hidden bg-white border-b border-gray-200">
        <div className="relative max-w-6xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-700">
                DAIRY DEVELOPMENT
              </h1>
              <div className="w-32 h-1 bg-gray-700 mb-4"></div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Strengthening the rural dairy value chain through modernized collection, 
                chilling, and processing infrastructure with emphasis on value-added 
                product manufacturing to improve farmer income and regional dairy trade.
              </p>
            </div>
            
            {/* Right Image Space */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md h-96 bg-gray-100 rounded-4xl flex items-center justify-center">
                  <img
                  src="/dairydevelop.jpg"
                  alt="Biogas and Renewable Energy"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Process Flow */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Complete Dairy Value Chain
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Click on each stage to explore the comprehensive development process
        </p>

        {/* Section Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`p-6 rounded-xl border transition-all duration-300 ${
                activeSection === index
                  ? 'border-gray-800 bg-gray-800 text-white shadow-lg'
                  : 'border-gray-200 bg-white text-gray-800 shadow-sm'
              }`}
            >
              <div className={`${activeSection === index ? 'text-white' : 'text-gray-600'} mb-3`}>
                {section.icon}
              </div>
              <h3 className={`font-bold text-sm ${activeSection === index ? 'text-white' : 'text-gray-800'}`}>
                {section.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Active Section Details */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-gray-200">
          <div className="flex items-center mb-6">
            <div className="p-4 rounded-xl bg-gray-800 text-white mr-6">
              {sections[activeSection].icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              {sections[activeSection].title}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections[activeSection].points.map((point, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-gray-800 mt-3"></div>
                <p className="text-gray-700 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Offerings */}
        <div className="bg-gray-800 rounded-xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Key Offerings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyOfferings.map((offering, index) => (
              <div key={index}>
                <div className="bg-gray-700 rounded-xl p-6 transition-all duration-300">
                  <div className="text-gray-300 mb-4">
                    {offering.icon}
                  </div>
                  <p className="text-sm leading-relaxed text-gray-100">
                    {offering.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DairyDevelopment;