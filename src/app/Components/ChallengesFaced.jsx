import React from 'react';

const ChallengesFaced = () => {
  const challenges = [
    {
      title: "Limited Awareness & Acceptance",
      description: "Lack of awareness of renewable energy technologies among rural communities",
      icon: "🎯",
      color: "from-green-700 to-green-600"
    },
    {
      title: "Infrastructural Constraints",
      description: "Remote areas that hinder timely project execution and maintenance",
      icon: "🏗️",
      color: "from-yellow-500 to-yellow-400"
    },
    {
      title: "Financial Viability & Credit Access",
      description: "Persistent hurdle for small farmers and entrepreneurs",
      icon: "💰",
      color: "from-green-700 to-green-600"
    },
    {
      title: "Skilled Manpower Shortage",
      description: "Managing technical operations like CBG plants and solar systems",
      icon: "👥",
      color: "from-yellow-500 to-yellow-400"
    },
    {
      title: "Regulatory Approvals",
      description: "Complex approval processes that can slow project progress",
      icon: "📋",
      color: "from-green-700 to-green-600"
    },
    {
      title: "Waste Collection & Logistics",
      description: "Coordination challenges in waste collection and logistics management",
      icon: "🚛",
      color: "from-yellow-500 to-yellow-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-yellow-400 opacity-90"></div>
        <div className="relative bg-cover bg-center py-20" style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"%3E%3Ccircle cx=\"25\" cy=\"25\" r=\"2\" fill=\"%23ffffff\" opacity=\"0.1\"/%3E%3Ccircle cx=\"75\" cy=\"75\" r=\"2\" fill=\"%23ffffff\" opacity=\"0.1\"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/%3E%3C/svg%3E')"
        }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Title */}
              <div>
                <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                  <span className="text-white font-semibold text-sm">STRATEGIC OVERVIEW</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  CHALLENGES<br />
                  <span className="text-yellow-200">FACED BY HEMU</span>
                </h1>
                <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
              </div>
              
              {/* Right Column - Overview Text */}
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-700 to-yellow-400 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Mission Impact</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Despite its impactful mission, HEMU faces several key challenges in implementing sustainable rural development at scale. These obstacles require continuous community engagement, capacity building, and strong policy support to overcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        {/* Challenges Grid */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Key Challenges Overview</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding and addressing these challenges is crucial for HEMU's continued success in rural sustainable development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  {/* Icon and Title */}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${challenge.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-2xl">{challenge.icon}</span>
                    </div>
                    <h3 className="font-bold text-gray-800 text-xl leading-tight">{challenge.title}</h3>
                  </div>
                  
                  {/* Description */}
                  <div className="text-center">
                    <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${challenge.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Context Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Agriculture Image Placeholder */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-10 rounded-xl overflow-hidden bg-gradient-to-br from-green-100 to-yellow-50">
                <div className="flex items-center justify-center bg-gradient-to-br from-green-700 to-yellow-400 text-white rounded-xl">
                  <div className="text-center p-8">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <h4 className="text-xl font-semibold">Sustainable Agriculture</h4>
                    <p className="text-sm opacity-90 mt-2">Rural farming communities</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Industrial Image Placeholder */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-10 rounded-xl overflow-hidden bg-gradient-to-br from-yellow-100 to-green-50">
                <div className="flex items-center justify-center bg-gradient-to-br from-yellow-500 to-green-700 text-white rounded-xl">
                  <div className="text-center p-8">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <h4 className="text-xl font-semibold">Clean Energy Infrastructure</h4>
                    <p className="text-sm opacity-90 mt-2">CBG plants & solar systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Context Text */}
          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-green-700 to-yellow-400 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Comprehensive Challenge Analysis
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Despite its impactful mission, HEMU faces several key challenges in implementing sustainable rural development at scale. These include <strong className="text-green-700">limited awareness and acceptance</strong> of renewable energy technologies among rural communities, and <strong className="text-green-700">infrastructural constraints</strong> in remote areas that hinder timely project execution. <strong className="text-yellow-600">Financial viability and access to credit</strong> for small farmers and entrepreneurs remains a persistent hurdle, along with the <strong className="text-yellow-600">availability of skilled manpower</strong> for managing technical operations like CBG plants and solar systems. Additional challenges related to <strong className="text-green-700">regulatory approvals, waste collection logistics, and coordination between stakeholders</strong> can slow progress. Overcoming these obstacles requires continuous community engagement, capacity building, and strong policy support.
            </p>
          </div>
        </div>       
      </div>
    </div>
  );
};

export default ChallengesFaced;