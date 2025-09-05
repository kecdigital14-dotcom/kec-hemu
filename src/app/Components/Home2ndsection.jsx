import React from 'react';

const Home2ndsection = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-6 py-3 bg-green-100 border border-green-200 rounded-full">
            <span className="text-green-800 text-sm font-semibold" style={{ color: '#205D34' }}>🤝 Strategic JOINT VENTURE</span>
          </div>
          <div className="relative text-center py-6 rounded-2xl w-full max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-4xl lg:text-6xl font-extrabold text-green-700 drop-shadow-md">
              ABOUT{" "}
              <span className="text-yellow-400">US</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how two industry leaders joined forces to create HEMU - an integrated rural development initiative
          </p>
        </div>

        {/* Joint Venture Story */}
        <div className="mb-20 max-w-6xl mx-auto">
          {/* Partnership Formation */}
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 mb-12">

            {/* UCDF */}
            <div className="group">
              <div className="bg-white rounded-3xl min-h-[400px]  shadow-xl hover:shadow-2xl transition-all duration-300 px-6 py-6 text-center border border-gray-100 hover:scale-105 flex flex-col">
                <div className="">
                  <div className="h-24 flex items-center justify-center">
                    <img
                      src="/ucdflogo.avif"
                      alt="UCDF Logo"
                      className="max-h-full w-[400px] object-contain"
                    />
                  </div>
             
                </div>
                <div className="flex-1 flex items-center">
                  <div className="text-sm text-gray-600 text-justify leading-relaxed">
                    UCDF: As the apex state federation of district milk cooperative unions in Uttarakhand, UCDF has been instrumental in implementing dairy programs across the state since its establishment in 2001. Under the brand name AANCHAL, UCDF supports over 50,000 small and marginal dairy farmers, enhancing milk production and promoting clean dairy practices.
                  </div>
                </div>
              </div>
            </div>

            {/* Plus Sign / Partnership */}
            <div className="flex flex-col items-center justify-center min-h-[400px] lg:min-h-0">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#205D34' }}>
                <span className="text-white text-2xl font-bold">+</span>
              </div>
              <p className="text-center text-gray-700 font-semibold mb-4">Joint Venture Partnership</p>
              <div className="hidden lg:block">
                <svg className="w-24 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="block lg:hidden">
                <svg className="w-8 h-8 text-green-600 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* KEC */}
            <div className="group">
              <div className="bg-white rounded-3xl min-h-[380px] shadow-xl hover:shadow-2xl transition-all duration-300 px-6 py-6 text-center border border-gray-100 hover:scale-105 flex flex-col">
                <div className="mb-4">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <img
                      src="/keclogo.png"
                      alt="KEC Logo"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  {/* <h3 className="text-xl font-bold mb-4" style={{ color: '#205D34' }}>KEC AGRITECH</h3> */}
                </div>
                <div className="flex-1 flex items-center">
                  <div className="text-sm text-gray-600 text-justify leading-relaxed">
                    KEC Agritech: A forward-thinking agritech company, KEC Agritech specializes in providing high-quality seeds, fertilizers, crop protection products, advanced irrigation systems, and modern farm equipment. Their expertise extends to biofuel solutions, including Bio-CNG, Bio-Diesel, Ethanol, Hydrogen, and Green Ammonia, aiming to convert waste streams into clean energy and create rural prosperity.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <div className="animate-bounce">
              <svg className="w-8 h-8" style={{ color: '#205D34' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* HEMU Result */}
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <div
                className="bg-white rounded-3xl shadow-2xl p-8 border-4"
                style={{ borderColor: "#205D34" }}
              >
                <div className="mb-6">
                  {/* Top Badge */}
                  <div
                    className="inline-flex items-center px-8 py-4 rounded-full mb-6"
                    style={{ backgroundColor: "#205D34" }}
                  >
                    <span className="text-white text-sm font-bold tracking-wider">
                      ✨ JOINT VENTURE RESULT
                    </span>
                  </div>

                  {/* Logo + Text Centered */}
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
                    <img
                      src="/hemulogoupdated.png"
                      alt="HEMU Logo"
                      className="max-h-[140px] sm:max-h-[180px] object-contain"
                    />
                    <div className="text-center sm:text-left">
                      <h2
                        className="text-3xl sm:text-4xl font-bold mb-2"
                        style={{ color: "#205D34" }}
                      >
                        HEMU
                      </h2>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                        Integrated Rural <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>Development Initiative
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description Box */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
                    This joint venture leverages the combined strengths of UCDF and KEC Agritech to deliver a holistic approach to rural development. HEMU focuses on enhancing dairy productivity, promoting sustainable agriculture, and integrating renewable energy solutions to foster economic growth and environmental sustainability in rural Uttarakhand. Through this collaboration, HEMU is committed to creating a resilient and self-sustaining rural ecosystem, where innovation, sustainability, and community empowerment drive.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Combined Strengths */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Combined <span style={{ color: '#205D34' }}>Strengths</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🤝', title: 'Cooperative Excellence', desc: 'Deep understanding of farmer communities and cooperative structures' },
              { icon: '⚡', title: 'Technical Innovation', desc: 'Cutting-edge technology and project management expertise' },
              { icon: '🌾', title: 'Agricultural Focus', desc: 'Specialized knowledge in dairy farming and rural development' },
              { icon: '💡', title: 'Sustainable Solutions', desc: 'Renewable energy and environmentally conscious practices' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center border border-gray-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-3 text-sm sm:text-base">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2ndsection;