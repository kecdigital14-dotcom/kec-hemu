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
      category: "Compressed Bio Gas"
    },
    {
      title: "Bottling Plant Operations",
      description: "Modern bottling facilities for various liquid products with quality standards.",
      icon: "🏭",
      color: "from-green-700 to-green-600",
      features: ["Automated bottling", "Quality control", "Packaging solutions", "Distribution ready"],
      category: "Bottling Plant"
    },
    {
      title: "Bakery Production Units",
      description: "Commercial bakery operations providing fresh baked goods and employment opportunities.",
      icon: "🍞",
      color: "from-yellow-500 to-yellow-400",
      features: ["Fresh bakery products", "Local employment", "Quality ingredients", "Market distribution"],
      category: "Bakery Units"
    }
  ];

  // Enhanced category data with images and descriptions
  const categoryData = {
    "Agricultural Processing": {
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop",
      description: "Modern agricultural processing facilities that transform raw farm produce into value-added products, supporting local farmers and rural economy.",
      icon: "🌾",
      stats: "Processing 500+ tons monthly"
    },
    "Food & Beverage": {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      description: "Quality food and beverage production ensuring food security while creating sustainable income opportunities for rural communities.",
      icon: "🥛",
      stats: "Serving 1000+ families daily"
    },
    "Energy Solutions": {
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop",
      description: "Clean and renewable energy solutions including biogas and biofuel production for sustainable power generation and reduced carbon footprint.",
      icon: "⚡",
      stats: "Reducing 200 tons CO2 annually"
    },
    "Environmental Services": {
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
      description: "Comprehensive environmental solutions focusing on carbon credit projects, climate resilience, and sustainable waste management practices.",
      icon: "🌍",
      stats: "1M+ carbon credits generated"
    },
    "Waste Management": {
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop",
      description: "Innovative waste processing solutions converting agricultural and organic waste into valuable resources like compost and biofuel.",
      icon: "♻️",
      stats: "Processing 100+ tons waste/month"
    },
    "Compressed Bio Gas": {
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop",
      description: "State-of-the-art compressed biogas production from organic waste, providing clean cooking fuel and reducing environmental pollution.",
      icon: "🔥",
      stats: "Producing 50,000 m³ gas/month"
    },
    "Bottling Plant": {
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=250&fit=crop",
      description: "Modern automated bottling facilities ensuring hygienic packaging of various liquid products with international quality standards.",
      icon: "🏭",
      stats: "50,000 bottles per day capacity"
    },
    "Bakery Units": {
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=250&fit=crop",
      description: "Commercial bakery operations producing fresh, quality baked goods while creating employment opportunities in rural areas.",
      icon: "🍞",
      stats: "Employing 100+ local workers"
    }
  };

  const categories = [...new Set(businessAreas.map(area => area.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-yellow-400 py-12">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-1 mb-2">
            <span className="text-gray-900 font-semibold text-sm">BUSINESS PORTFOLIO</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Area of <span className="text-yellow-200">Business</span>
          </h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto leading-relaxed">
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
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 ">
                  {/* Category Tag */}
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {area.category}
                    </span>
                  </div>
                  
                  {/* Icon and Title */}
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
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
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${area.color} rounded-b-2xl opacity-0 `}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Categories Overview - 4 in a row */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Business Categories</h2>
            <p className="text-gray-600 text-lg">Our diverse portfolio spans multiple sectors for comprehensive rural development</p>
          </div>
          
          {/* Categories in rows of 4 */}
          <div className="space-y-8">
            {Array.from({ length: Math.ceil(categories.length / 4) }, (_, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.slice(rowIndex * 4, (rowIndex + 1) * 4).map((category, index) => {
                  const categoryCount = businessAreas.filter(area => area.category === category).length;
                  const categoryInfo = categoryData[category];
                  const isEven = index % 2 === 0;
                  
                  return (
                    <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                      {/* Category Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={categoryInfo.image} 
                          alt={category}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Icon Overlay */}
                        <div className="absolute top-4 right-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${isEven ? 'from-green-700 to-green-600' : 'from-yellow-500 to-yellow-400'} rounded-xl flex items-center justify-center shadow-lg`}>
                            <span className="text-xl">{categoryInfo.icon}</span>
                          </div>
                        </div>
                        
                        {/* Count Badge */}
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1">
                            <span className="text-gray-800 font-bold text-sm">{categoryCount} Area{categoryCount > 1 ? 's' : ''}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-bold text-gray-800 text-lg mb-3 line-clamp-2">{category}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{categoryInfo.description}</p>
                        
                        {/* Stats */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-xs text-gray-500">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            {categoryInfo.stats}
                          </div>
                          
                          {/* Learn More Button */}
                          <button className="text-xs font-semibold text-green-700 hover:text-green-800 transition-colors">
                            Learn More →
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
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
              { number: "8", label: "Business Areas", icon: "🏢", color: "from-green-700 to-green-600" },
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