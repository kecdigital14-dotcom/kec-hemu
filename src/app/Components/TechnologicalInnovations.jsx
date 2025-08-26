import React from 'react';

const TechnologicalInnovations = () => {
  const innovations = [
    {
      title: "Advanced Biogas Plants",
      description: "Converting cattle dung and organic waste into clean fuel and organic by-products",
      icon: "⚡",
      color: "from-green-700 to-green-600",
      features: ["Clean fuel production", "Organic by-products", "Waste-to-energy conversion"]
    },
    {
      title: "Compressed Biogas (CBG)",
      description: "High-efficiency biogas compression for enhanced energy storage and distribution",
      icon: "🔋",
      color: "from-yellow-500 to-yellow-400",
      features: ["Enhanced storage", "Efficient distribution", "Sustainable energy"]
    },
    {
      title: "Organic Waste Processing",
      description: "Technologies to produce high-quality manure and mineral supplements",
      icon: "🌱",
      color: "from-green-700 to-green-600",
      features: ["High-quality manure", "Mineral supplements", "Soil health improvement"]
    },
    {
      title: "Smart Agricultural Systems",
      description: "Automated systems and smart controls for efficient biogas infrastructure",
      icon: "🤖",
      color: "from-yellow-500 to-yellow-400",
      features: ["Automated monitoring", "Smart controls", "Efficient operations"]
    },
    {
      title: "Precision Agriculture",
      description: "Drone technology and smart farming solutions for enhanced productivity",
      icon: "🚁",
      color: "from-green-700 to-green-600",
      features: ["Drone monitoring", "Precision farming", "Data-driven insights"]
    },
    {
      title: "Circular Economy Integration",
      description: "Comprehensive approach enhancing rural productivity and environmental sustainability",
      icon: "♻️",
      color: "from-yellow-500 to-yellow-400",
      features: ["Circular processes", "Rural productivity", "Environmental impact"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-yellow-400 py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Title */}
            <div>
              <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <span className="text-white font-semibold text-sm">INNOVATION FOCUS</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                TECHNOLOGICAL<br />
                <span className="text-yellow-200">INNOVATIONS</span>
              </h1>
              <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-xl text-white opacity-90 leading-relaxed">
                Driving rural transformation through practical and sustainable technological solutions
              </p>
            </div>
            
            {/* Right Column - Innovation Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {/* Precision Agriculture Visual */}
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 text-sm">Smart Farming</h3>
                <p className="text-xs text-gray-600 mt-2">Drone Technology</p>
              </div>
              
              {/* Biogas Technology Visual */}
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 text-sm">Clean Energy</h3>
                <p className="text-xs text-gray-600 mt-2">BIO CNG Solutions</p>
              </div>
              
              {/* Organic Processing Visual */}
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 text-sm">Waste Processing</h3>
                <p className="text-xs text-gray-600 mt-2">Organic Solutions</p>
              </div>
              
              {/* Smart Systems Visual */}
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 text-sm">Automation</h3>
                <p className="text-xs text-gray-600 mt-2">Smart Controls</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 border border-gray-100">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-yellow-400 rounded-2xl flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Our Innovation Mission</h2>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
              HEMU is driving rural transformation through practical and sustainable technological solutions tailored to the needs of Uttarakhand's agrarian communities. At the core of its innovations are <strong className="text-green-700">advanced biogas and Compressed Biogas (CBG) plants</strong>, which convert cattle dung and organic waste into clean fuel and organic by-products.
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-6">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                The mission also leverages <strong className="text-yellow-600">organic waste processing technologies</strong> to produce high-quality manure and mineral supplements, improving soil health and reducing chemical dependency in farming. Additionally, <strong className="text-green-700">automated systems and smart controls</strong> are being introduced for efficient operation, monitoring, and maintenance of biogas infrastructure. These innovations collectively enable a <strong className="text-yellow-600">circular economy approach</strong> that enhances rural productivity and environmental sustainability.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Core Technology Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technological innovations designed to transform rural communities through sustainable practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovations.map((innovation, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  {/* Icon and Title */}
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${innovation.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-3xl">{innovation.icon}</span>
                    </div>
                    <h3 className="font-bold text-gray-800 text-xl leading-tight mb-3">{innovation.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{innovation.description}</p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {innovation.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-700 to-yellow-400 rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Decorative Element */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${innovation.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Innovation Impact</h2>
            <p className="text-gray-600">Measurable outcomes from our technological solutions</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "100%", label: "Sustainable Energy", icon: "⚡", color: "from-green-700 to-green-600" },
              { number: "Zero", label: "Chemical Dependency", icon: "🌿", color: "from-yellow-500 to-yellow-400" },
              { number: "360°", label: "Circular Economy", icon: "♻️", color: "from-green-700 to-green-600" },
              { number: "Smart", label: "Automated Systems", icon: "🤖", color: "from-yellow-500 to-yellow-400" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologicalInnovations;