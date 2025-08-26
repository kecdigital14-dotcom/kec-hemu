import React from 'react';

const Home2ndsection = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-6 py-3 bg-green-100 border border-green-200 rounded-full mb-6">
            <span className="text-green-800 text-sm font-semibold" style={{color: '#205D34'}}>🤝 STRATEGIC PARTNERSHIP</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">
            ABOUT <span style={{color: '#205D34'}}>US</span>
          </h1>
          <div className="w-32 h-1 mx-auto mb-4" style={{backgroundColor: '#205D34'}}></div>
          <p className=" font-semibold text-gray-600 max-w-3xl mx-auto leading-relaxed">
            HEMU is an integrated rural development initiative established through a strategic Joint Venture between UCDF and KEC Agritech
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Partnership Overview */}
          <div className="space-y-8">
            {/* Main Partnership Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 rounded-full mr-4" style={{backgroundColor: '#205D34'}}></div>
                <h2 className="text-2xl font-bold text-gray-900">Joint Venture Partners</h2>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border-l-4" style={{borderLeftColor: '#205D34'}}>
                  <h3 className="text-lg font-bold mb-2" style={{color: '#205D34'}}>UTTARAKHAND COOPERATIVE DAIRY FEDERATION (UCDF)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Leading cooperative organization focused on enhancing farmer income and strengthening dairy infrastructure across Uttarakhand.
                  </p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border-l-4 border-green-600">
                  <h3 className="text-lg font-bold text-green-900 mb-2">KEC AGRITECH PVT. LTD.</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Established in 2020, specializing in Project Management Consultancy, EPC, and renewable energy solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="rounded-3xl shadow-2xl p-8 text-white" style={{background: `linear-gradient(135deg, #205D34 0%, #1a4f2b 100%)`}}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-lg mr-4" style={{color: '#205D34'}}>🎯</span>
                Our Mission
              </h3>
              <p className="text-green-100 leading-relaxed">
                To enhance income and employment opportunities for farmers, promote commercial dairy farming, 
                and strengthen the cooperative structure while connecting farmers with corporate entities for 
                sustainable rural development.
              </p>
            </div>
          </div>

          {/* Right Column - Company Logos */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Partner Organizations</h3>
              
              <div className="space-y-6">
                {/* UCDF Logo */}
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-36 flex items-center justify-center">
                      <img
                        src="/ucdflogo.avif"
                        alt="UCDF Logo"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* HEMU Logo */}
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-36 flex items-center justify-center">
                      <img
                        src="/logoheader.png"
                        alt="HEMU Logo"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    {/* <div className="mt-4 text-center">
                      <h4 className="font-semibold" style={{color: '#205D34'}}>HEMU</h4>
                      <p className="text-sm text-gray-600">Joint Venture</p>
                    </div> */}
                  </div>
                </div>

                {/* KEC Logo */}
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-green-50 to-green-100  rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-36 flex items-center justify-center">
                      <img
                        src="/keclogo.png"
                        alt="KEC Logo"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
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

export default Home2ndsection;