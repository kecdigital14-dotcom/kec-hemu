import React from 'react';

const AreaofBusiness = () => {
  const businessAreas = [
    {
      title: "Dairy Development",
      description: "Enhancing rural milk collection, processing, and value-added dairy product production.",
      icon: "🥛",
      color: "from-green-700 to-green-600",
      features: ["Milk collection", "Processing facilities", "Value-added products", "Quality assurance"],
      category: "Agricultural Processing"
    },
    {
      title: "Mineral Water & Bakery Units",
      description: "Establishing small-scale bakery enterprises to generate income and promote food security.",
      icon: "🥖",
      color: "from-yellow-500 to-yellow-400",
      features: ["Mineral water production", "Bakery enterprises", "Food security", "Income generation"],
      category: "Food & Beverage"
    },
    {
      title: "Biofuel & Renewable Energy Bottling & Distribution",
      description: "Packaging and distributing biogas for household, transportation, and industrial applications.",
      icon: "⚡",
      color: "from-green-700 to-green-600",
      features: ["Biogas packaging", "Distribution network", "Industrial applications", "Clean energy"],
      category: "Energy Solutions"
    },
    {
      title: "Carbon Credit & Climate Projects",
      description: "Leveraging clean energy and waste management for carbon trading and climate resilience.",
      icon: "🌍",
      color: "from-yellow-500 to-yellow-400",
      features: ["Carbon trading", "Climate resilience", "Waste management", "Environmental impact"],
      category: "Environmental Services",
      badge: "Upcoming"
    },
    {
      title: "Agri-Input & other Waste Processing",
      description: "Utilizing crop residues for compost, fuel, and nutrient-rich bio-products.",
      icon: "🌾",
      color: "from-green-700 to-green-600",
      features: ["Crop residue processing", "Compost production", "Bio-fuel generation", "Nutrient supplements"],
      category: "Waste Management"
    },
    {
      title: "Organic Manure & Mineral Supplements",
      description: "Producing eco-friendly soil and livestock inputs from agricultural and cattle waste.",
      icon: "🌱",
      color: "from-yellow-500 to-yellow-400",
      features: ["Organic fertilizers", "Livestock inputs", "Soil enhancement", "Sustainable farming"],
      category: "Agricultural Inputs"
    }
  ];

  const categories = [...new Set(businessAreas.map(area => area.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-yellow-400 py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-white font-semibold text-sm">BUSINESS PORTFOLIO</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Area of <span className="text-yellow-200">Businesses</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-white opacity-90 max-w-4xl mx-auto leading-relaxed">
            Comprehensive business solutions driving sustainable rural development across multiple sectors
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        {/* Business Areas Grid */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessAreas.map((area, index) => (
              <div key={index} className="group relative">
                {/* Badge for upcoming projects */}
                {area.badge && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {area.badge}
                    </div>
                  </div>
                )}
                
                {/* Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  {/* Category Tag */}
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {area.category}
                    </span>
                  </div>
                  
                  {/* Icon and Title */}
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-3xl">{area.icon}</span>
                    </div>
                    <h3 className="font-bold text-gray-800 text-xl leading-tight mb-3">{area.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{area.description}</p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 text-sm mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Features
                    </h4>
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-700 to-yellow-400 rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Decorative Element */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${area.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Overview */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Business Categories</h2>
            <p className="text-gray-600">Our diverse portfolio spans multiple sectors for comprehensive rural development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const categoryCount = businessAreas.filter(area => area.category === category).length;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${isEven ? 'from-green-700 to-green-600' : 'from-yellow-500 to-yellow-400'} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl text-white font-bold">{categoryCount}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{category}</h3>
                  <p className="text-gray-600 text-sm">
                    {categoryCount} business {categoryCount === 1 ? 'area' : 'areas'}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8 mb-12 border border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-yellow-400 rounded-2xl flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-green-700">Sustainable farming</strong> ensures long-term productivity while preserving the environment, supporting communities, and promoting <strong className="text-yellow-600">economic viability</strong> for future generations. Our comprehensive approach integrates multiple business areas to create a robust ecosystem that benefits rural communities across Uttarakhand.
            </p>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Business Impact</h2>
            <p className="text-gray-600">Measurable outcomes across our business portfolio</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "6", label: "Business Areas", icon: "🏢", color: "from-green-700 to-green-600" },
              { number: "100%", label: "Sustainable Focus", icon: "🌿", color: "from-yellow-500 to-yellow-400" },
              { number: "360°", label: "Circular Economy", icon: "♻️", color: "from-green-700 to-green-600" },
              { number: "Rural", label: "Community Impact", icon: "🏘️", color: "from-yellow-500 to-yellow-400" }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <span className="text-2xl">{metric.icon}</span>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{metric.number}</div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaofBusiness;