import React from 'react';

const Biogasdistri = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            BIOGAS BOTTLING &<br />
            <span className="text-[#205D34]">DISTRIBUTION</span>
          </h1>
          <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Image and Overview */}
          <div className="lg:col-span-1 space-y-8">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/bannernew14.jpg"
                alt="Biogas Bottling & Distribution Facility"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">Modern CBG Facility</h3>
                <p className="text-sm opacity-90">Sustainable Energy Solutions</p>
              </div>
            </div>

            {/* Overview Card */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-3 h-3 bg-blue-800 rounded-full mr-3"></div>
                Vertical Overview
              </h3>
              <p className="text-gray-700 leading-relaxed">
                This vertical leverages livestock and organic waste to produce compressed biogas (CBG). 
                The energy is then bottled and distributed for household, transportation, and small 
                industry use, building a sustainable energy economy.
              </p>
            </div>

            {/* Key Offerings */}
            <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                Key Offerings
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2"></div>
                  <p className="text-gray-700 font-medium">Household & industrial biogas supply</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2"></div>
                  <p className="text-gray-700 font-medium">CBG plant installation & franchising model</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2"></div>
                  <p className="text-gray-700 font-medium">Biogas cylinders distribution network</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2"></div>
                  <p className="text-gray-700 font-medium">Waste-to-energy ecosystem in villages</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Columns - Process Steps */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {/* Feedstock Collection */}
              <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-800 font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-xl font-bold">Feedstock Collection & Segregation</h3>
                </div>
                <div className="space-y-3 text-green-50">
                  <div>
                    <p className="font-semibold text-sm mb-1">Activity:</p>
                    <p className="text-sm">Collection of livestock dung and organic waste from households, dairy units, and farms.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Support Provided:</p>
                    <p className="text-sm">Awareness campaigns, organized dung collection points, and community partnerships.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Outcome:</p>
                    <p className="text-sm">Consistent feedstock supply for biogas generation from local rural sources.</p>
                  </div>
                </div>
              </div>

              {/* Biogas Generation */}
              <div className="bg-white rounded-2xl p-6 text-black shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#205D34] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-xl font-bold">Biogas Generation</h3>
                </div>
                <div className="space-y-3 text-gray-900">
                  <div>
                    <p className="font-semibold text-sm mb-1">Activity:</p>
                    <p className="text-sm">Anaerobic breakdown of organic matter in CBG plants to produce raw biogas.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Support Provided:</p>
                    <p className="text-sm">Turnkey plant design, civil and mechanical setup, microbial culture & setup.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Outcome:</p>
                    <p className="text-sm">Stable and continuous biogas production with high methane yield.</p>
                  </div>
                </div>
              </div>

              {/* Bottling & Purification */}
              <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-800 font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-xl font-bold">Bottling & Purification</h3>
                </div>
                <div className="space-y-3 text-purple-50">
                  <div>
                    <p className="font-semibold text-sm mb-1">Activity:</p>
                    <p className="text-sm">Upgrading biogas to CBG by removing CO₂ and other impurities, followed by compression and bottling.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Support Provided:</p>
                    <p className="text-sm">Automated purification units, safety infrastructure, and gas quality monitoring systems.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Outcome:</p>
                    <p className="text-sm">Compressed Biogas (CBG) cylinders ready for safe storage & market use.</p>
                  </div>
                </div>
              </div>

              {/* Distribution & Sales */}
              <div className="bg-white rounded-2xl p-6 text-black shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#205D34] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <h3 className="text-xl font-bold">Distribution & Sales</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-bold text-sm mb-1">Activity:</p>
                    <p className="text-sm">Supply of bottled CBG to rural households, commercial kitchens, vehicles, and micro-industries.</p>
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1">Support Provided:</p>
                    <p className="text-sm">Franchisee-based distribution network, transport logistics, mobile refilling units.</p>
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1">Outcome:</p>
                    <p className="text-sm">Green fuel access across rural and semi-urban markets, revenue for local entrepreneurs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biogasdistri;