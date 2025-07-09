"use client";

import React, { useState } from 'react';

export default function PioneeringPathSection() {
  const [activeTab, setActiveTab] = useState('vision');

  const tabContent = {
    vision: {
      title: "UCDF:",
      content: "Together with our partners and communities, we are building a future where renewable energy is accessible to all, creating opportunities for growth, resilience & Our vision is bold but achievable powered by innovation."
    },
    mission: {
      title: "KEC:",
      content: "We envision a future where clean energy powers every home, business, &institution reducing our carbon footprint and preserving our planet for generations to come. Guided by integrity, innovation, and a passion for excellence."
    },
    choose: {
      title: "Role:",
      content: "We combine cutting-edge technology with proven expertise to deliver sustainable energy solutions that create lasting value. Our commitment to excellence, environmental stewardship, and customer satisfaction sets us apart in the renewable energy sector."
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-6 h-6 text-teal-500 mr-2">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-teal-500 font-medium uppercase tracking-wider text-sm">
              OUR VALUE
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Pioneering the Path Forward
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="/objectivestwo.jpg" 
                alt="Professional worker with renewable energy equipment"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            {/* Vision Statement */}
            <div className="mb-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                Our vision is to create a world where sustainable energy solutions empower 
                lives, protect the planet, and drive progress for generations to come. We 
                envision a future where innovation and sustainability go hand in hand.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-6 py-3 font-semibold text-lg transition-all duration-300 border-b-2 ${
                  activeTab === 'vision'
                    ? 'text-teal-600 border-teal-600'
                    : 'text-gray-600 border-transparent hover:text-teal-600'
                }`}
              >
                UCDF
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-6 py-3 font-semibold text-lg transition-all duration-300 border-b-2 ${
                  activeTab === 'mission'
                    ? 'text-teal-600 border-teal-600'
                    : 'text-gray-600 border-transparent hover:text-teal-600'
                }`}
              >
                KEC
              </button>
              <button
                onClick={() => setActiveTab('choose')}
                className={`px-6 py-3 font-semibold text-lg transition-all duration-300 border-b-2 ${
                  activeTab === 'choose'
                    ? 'text-teal-600 border-teal-600'
                    : 'text-gray-600 border-transparent hover:text-teal-600'
                }`}
              >
                Role
              </button>
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              <div className="bg-gray-50 rounded-2xl p-6 transition-all duration-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {tabContent[activeTab].content}
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-10">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group">
                Get Started
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean Energy</h3>
            <p className="text-gray-600">Sustainable solutions for a greener future</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">Cutting-edge technology and solutions</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600">Building partnerships for lasting impact</p>
          </div>
        </div>
      </div>
    </section>
  );
}