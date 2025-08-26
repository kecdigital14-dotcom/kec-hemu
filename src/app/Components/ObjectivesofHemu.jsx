import React from 'react';

const ObjectivesofHemu = () => {
  const strategicObjectives = [
    {
      title: "Rural Economic Empowerment",
      description: "Creating sustainable economic opportunities through green enterprises and agricultural innovation",
      icon: "💼",
      color: "from-green-700 to-green-600",
      objectives: [
        "Job Creation through Green Enterprises",
        "Strengthening Farmer Livelihoods",
        "Promoting Agri-Based Microenterprises"
      ],
      features: [
        "Green job opportunities",
        "Income diversification",
        "Microenterprise development",
        "Farmer empowerment programs"
      ]
    },
    {
      title: "Environmental Sustainability",
      description: "Implementing circular economy principles to reduce environmental impact and promote resource efficiency",
      icon: "🌱",
      color: "from-yellow-500 to-yellow-400",
      objectives: [
        "Waste-to-Energy Conversion",
        "Reduction of Chemical Dependency",
        "Circular Resource Utilization"
      ],
      features: [
        "Biogas production",
        "Organic farming promotion",
        "Waste management systems",
        "Carbon footprint reduction"
      ]
    },
    {
      title: "Capacity Building & Innovation",
      description: "Developing human capital and technological capabilities for sustainable rural transformation",
      icon: "🚀",
      color: "from-green-700 to-green-600",
      objectives: [
        "Skill Development for Rural Youth",
        "Technology Adoption in Rural Systems",
        "Scalable & Replicable Models"
      ],
      features: [
        "Youth skill programs",
        "Technology training",
        "Innovation hubs",
        "Knowledge transfer"
      ]
    }
  ];

  const impactAreas = [
    { title: "Economic Impact", value: "100+", unit: "Jobs Created", icon: "💰", color: "from-green-700 to-green-600" },
    { title: "Environmental Impact", value: "Zero", unit: "Waste Goals", icon: "🌍", color: "from-yellow-500 to-yellow-400" },
    { title: "Social Impact", value: "Rural", unit: "Communities", icon: "👥", color: "from-green-700 to-green-600" },
    { title: "Innovation Impact", value: "Tech", unit: "Solutions", icon: "⚡", color: "from-yellow-500 to-yellow-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-yellow-400 opacity-95"></div>
        <div className="relative bg-cover bg-center py-20" style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"industrial\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"3\" fill=\"%23ffffff\" opacity=\"0.1\"/%3E%3Ccircle cx=\"80\" cy=\"80\" r=\"3\" fill=\"%23ffffff\" opacity=\"0.1\"/%3E%3Ccircle cx=\"50\" cy=\"50\" r=\"2\" fill=\"%23ffffff\" opacity=\"0.15\"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"100\" height=\"100\" fill=\"url(%23industrial)\"/%3E%3C/svg%3E')"
        }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Title and Vision */}
              <div>
                <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                  <span className="text-white font-semibold text-sm">STRATEGIC VISION</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  STRATEGIC<br />
                  <span className="text-yellow-200">OBJECTIVES</span><br />
                  <span className="text-3xl md:text-4xl">OF HEMU</span>
                </h1>
                <div className="w-24 h-1 bg-yellow-400 mb-8"></div>
                <p className="text-xl text-white opacity-90 leading-relaxed">
                  Transforming rural landscapes through sustainable development, innovation, and community empowerment
                </p>
              </div>
              
              {/* Right Column - Industrial Visualization */}
              <div className="relative">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-700 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Industrial Infrastructure</h3>
                    <p className="text-gray-600 mt-2">Biogas plants, processing facilities, and sustainable technology systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        {/* Strategic Objectives Grid */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Core Strategic Pillars</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Three fundamental objectives driving HEMU's mission to create sustainable rural transformation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {strategicObjectives.map((objective, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-3">
                  {/* Icon and Title */}
                  <div className="text-center mb-8">
                    <div className={`w-24 h-24 bg-gradient-to-r ${objective.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-4xl">{objective.icon}</span>
                    </div>
                    <h3 className="font-bold text-gray-800 text-2xl leading-tight mb-4">{objective.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                  </div>
                  
                  {/* Strategic Objectives */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 text-lg mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Objectives
                    </h4>
                    {objective.objectives.map((obj, objIndex) => (
                      <div key={objIndex} className="mb-3 p-3 bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-700 to-yellow-400 rounded-full mr-3"></div>
                          <span className="text-gray-800 font-medium text-sm">{obj}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Implementation Areas
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {objective.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-xs text-gray-600 bg-gray-50 rounded px-2 py-1">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${objective.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Measurement */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 border border-gray-100">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-yellow-400 rounded-2xl flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Expected Impact</h2>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Measurable outcomes expected from implementing our strategic objectives
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((impact, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${impact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <span className="text-2xl">{impact.icon}</span>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{impact.value}</div>
                <div className="text-gray-600 font-medium text-sm">{impact.unit}</div>
                <div className="text-gray-500 text-xs mt-2">{impact.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8 mb-12 border border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 mr-3 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Our Vision in Action
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">Strategic Focus</h3>
                <p className="text-gray-600 text-sm">Targeted interventions for maximum rural impact and sustainable development</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">Global Standards</h3>
                <p className="text-gray-600 text-sm">Implementing internationally recognized sustainable development practices</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">Innovation Drive</h3>
                <p className="text-gray-600 text-sm">Leveraging cutting-edge technology for scalable rural solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectivesofHemu;