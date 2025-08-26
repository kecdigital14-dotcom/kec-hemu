import React from 'react';

const Home3rdSection = () => {
  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 border border-blue-200 rounded-full mb-6">
            <span className="text-blue-800 text-sm font-semibold">🍞 BAKERY UNITS PROGRAM</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-700 leading-tight mb-4">
            BAKERY UNITS
          </h1>
          <p className="text-lg font-semibold text-gray-700 max-w-4xl mx-auto leading-relaxed">
            HEMU promotes decentralized food processing by establishing bakery units in rural areas. 
            These units utilize locally available agricultural inputs and dairy products to create 
            nutritional food products and drive village-level entrepreneurship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content - Image, Key Offerings, and Setup & Training */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
              <img
                src="/bakerynew1.jpg"
                alt="HEMU Bakery Unit Production"
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#205D34] text-white px-4 py-2 rounded-full">
                <span className="font-semibold">Village-Level Enterprise</span>
              </div>
            </div>

            {/* Key Offerings */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-[#205D34] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">✓</span>
                Key Offerings
              </h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-[#205D34] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Village-level micro bakery franchises</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-[#205D34] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Training for women and SHG-led enterprises</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-[#205D34] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Institutional sales to schools, hostels, and local markets</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-[#205D34] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Branding and marketing support under HEMU label</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Setup & Training */}
            <div className="bg-[#205D34] rounded-2xl shadow-xl text-white p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-white text-blue-900 rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 font-bold">1</span>
                Setup & Training
              </h3>
              <div className="space-y-4 text-blue-50">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-200 font-bold">•</span>
                  <div>
                    <p className="font-medium">Activity:</p>
                    <p className="text-sm">Identification of locations and selection of women/SHG entrepreneurs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-200 font-bold">•</span>
                  <div>
                    <p className="font-medium">Support Provided:</p>
                    <p className="text-sm">Infrastructure setup (ovens, utensils), raw material supply (flour, dairy, etc.)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-200 font-bold">•</span>
                  <div>
                    <p className="font-medium">Outcome:</p>
                    <p className="text-sm">Equipped bakery unit with trained operators</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Process Flow */}
          <div className="space-y-8">
            {/* Production */}
            <div className="bg-[#205D34] rounded-2xl shadow-xl text-white p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-white text-blue-900 rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 font-bold">2</span>
                Production
              </h3>
              <div className="space-y-4 text-blue-50">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-200 font-bold">•</span>
                  <div>
                    <p className="font-medium">Activity:</p>
                    <p className="text-sm">Daily production of baked goods such as buns, biscuits, rusk, and cakes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-200 font-bold">•</span>
                  <div>
                    <p className="font-medium">Support Provided:</p>
                    <p className="text-sm">Standardized recipes, quality control practices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-200 font-bold">•</span>
                  <div>
                    <p className="font-medium">Outcome:</p>
                    <p className="text-sm">Nutritional, consistent, and affordable bakery products</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Branding & Packaging */}
            <div className="bg-white rounded-2xl shadow-xl text-black p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-[#205D34] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 font-bold">3</span>
                Branding & Packaging
              </h3>
              <div className="space-y-4 text-gray-900">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-200 font-bold">•</span>
                  <div>
                    <p className="font-bold">Activity:</p>
                    <p className="text-sm">Local branding under the HEMU label and eco-friendly packaging</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-200 font-bold">•</span>
                  <div>
                    <p className="font-bold">Support Provided:</p>
                    <p className="text-sm">Marketing templates, labeling tools, design guidance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-200 font-bold">•</span>
                  <div>
                    <p className="font-bold">Outcome:</p>
                    <p className="text-sm">Professionally packaged, recognizable rural bakery products</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales & Distribution */}
            <div className="bg-[#205D34] rounded-2xl shadow-xl text-white p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-white text-[#205D34] rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 font-bold">4</span>
                Sales & Distribution
              </h3>
              <div className="space-y-4 text-">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-200 font-bold">•</span>
                  <div>
                    <p className="font-medium">Activity:</p>
                    <p className="text-sm">Supplying products to schools, hostels, local stores, and rural markets</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-200 font-bold">•</span>
                  <div>
                    <p className="font-medium">Support Provided:</p>
                    <p className="text-sm">Institutional linkages, sales training, order fulfillment systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-200 font-bold">•</span>
                  <div>
                    <p className="font-medium">Outcome:</p>
                    <p className="text-sm">Sustained income for micro-enterprises and improved rural nutrition</p>
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

export default Home3rdSection;