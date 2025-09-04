import React from 'react';

const Home2ndsection = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-green-100 border border-green-200 rounded-full mb-6">
            <span className="text-green-800 text-sm font-semibold" style={{color: '#205D34'}}>🤝 STRATEGIC PARTNERSHIP</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            ABOUT <span style={{color: '#205D34'}}>US</span>
          </h1>
          <div className="w-32 h-1 mx-auto mb-6" style={{backgroundColor: '#205D34'}}></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how two industry leaders joined forces to create HEMU - an integrated rural development initiative
          </p>
        </div>

        {/* Joint Venture Story */}
        <div className="mb-20 max-w-6xl mx-auto">
          {/* Partnership Formation */}
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center mb-12">
            
            {/* UCDF */}
            <div className="group">
              <div className="bg-white rounded-3xl h-[350px]  shadow-xl hover:shadow-2xl transition-all duration-300 px-6 py-4 text-center border border-gray-100 hover:scale-105">
                <div className="mb-">
                  <div className="h-24 flex items-center justify-center ">
                    <img
                      src="/ucdflogo.avif"
                      alt="UCDF Logo"
                      className="max-h-full max-w-[600px] object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{color: '#205D34'}}>UTTARAKHAND COOPERATIVE</h3>
                  <h3 className="text-xl font-bold mb-4" style={{color: '#205D34'}}>DAIRY FEDERATION</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Cooperative Leadership
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Dairy Infrastructure
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Farmer Networks
                  </div>
                </div>
              </div>
            </div>

            {/* Plus Sign / Partnership */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#205D34'}}>
                <span className="text-white text-2xl font-bold">+</span>
              </div>
              <p className="text-center text-gray-700 font-semibold">Joint Venture Partnership</p>
              <div className="hidden lg:block">
                <svg className="w-24 h-8 text-green-600 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* KEC */}
            <div className="group">
              <div className="bg-white rounded-3xl h-[350px] shadow-xl hover:shadow-2xl transition-all duration-300 p-8 text-center border border-gray-100 hover:scale-105">
                <div className="mb-6">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <img
                      src="/keclogo.png"
                      alt="KEC Logo"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-green-900">KEC AGRITECH</h3>
                  <h3 className="text-xl font-bold mb-4 text-green-900">PVT. LTD.</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Project Management
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    EPC Solutions
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Renewable Energy
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <div className="animate-bounce">
              <svg className="w-8 h-8" style={{color: '#205D34'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* HEMU Result */}
          <div className="text-center">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-4" style={{borderColor: '#205D34'}}>
                <div className="mb-2">
                  <div className="inline-flex items-center px-8 py-4 rounded-full mb-6" style={{backgroundColor: '#205D34'}}>
                    <span className="text-white text-sm font-bold tracking-wider">✨ JOINT VENTURE RESULT</span>
                  </div>
                  <div className="h-32 flex mb-6 mx-auto items-center ">
                    <img
                       src="/hemufooterlogo.png"
                      alt="HEMU Logo"
                      className="max-h-full max-w-full object-contain"
                    />
                    <div>
                    <h2 className="text-4xl font-bold mb-4" style={{color: '#205D34'}}>HEMU</h2>
                         <h3 className="text-xl font-semibold text-gray-700 mb-6">Integrated Rural Development Initiative</h3>
                    </div>
                  </div>
                  
             
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 mb-2">
                  <p className="text-gray-700 leading-relaxed text-md">
                    Born from the strategic partnership between UCDF's cooperative expertise and KEC Agritech's 
                    technical prowess, HEMU represents a new era of rural development focused on enhancing 
                    farmer income and strengthening agricultural infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

     

        {/* Combined Strengths */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Combined <span style={{color: '#205D34'}}>Strengths</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🤝', title: 'Cooperative Excellence', desc: 'Deep understanding of farmer communities and cooperative structures' },
              { icon: '⚡', title: 'Technical Innovation', desc: 'Cutting-edge technology and project management expertise' },
              { icon: '🌾', title: 'Agricultural Focus', desc: 'Specialized knowledge in dairy farming and rural development' },
              { icon: '💡', title: 'Sustainable Solutions', desc: 'Renewable energy and environmentally conscious practices' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center border border-gray-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2ndsection;