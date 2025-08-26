import React from 'react';

const CarbonCredit = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-yellow-400 py-6">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-2">
            <span className="text-gray-700 font-semibold text-sm">UPCOMING PROJECT</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Carbon Credit &
            <span className="text-yellow-200">Climate Projects</span>
          </h1>
          <p className="text-xl text-white opacity-90 max-w-4xl mx-auto leading-relaxed mb-6">
            Monetizing clean energy and sustainable agriculture through verified emission reductions
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        {/* Overview Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-700 to-yellow-400 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Vertical Overview</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                HEMU aims to monetize its clean energy and sustainable agriculture efforts through carbon credit programs. This vertical will generate verified emission reductions (VERs) that can be sold in international markets.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Key Offerings
              </h3>
              <div className="space-y-4">
                {[
                  { icon: "📊", text: "Carbon footprint auditing & registration" },
                  { icon: "📈", text: "Emission reduction tracking systems" },
                  { icon: "💰", text: "Revenue from carbon credit trading" },
                  { icon: "🌱", text: "Climate-smart branding for HEMU projects" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <span className="text-xl mr-4">{item.icon}</span>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Implementation Process</h2>
            <p className="text-xl text-gray-600">Four strategic phases to carbon credit success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Carbon Assessment & Project Registration",
                color: "from-green-700 to-green-600",
                icon: "🔍",
                details: {
                  activity: "Identify eligible clean energy and sustainable agriculture activities under HEMU",
                  deliverables: "Baseline carbon footprint analysis, stakeholder mapping, documentation",
                  standards: "Verra (VCS), Gold Standard, or UNFCCC CDM protocols",
                  outcome: "Registered climate project ready for validation and monitoring"
                }
              },
              {
                step: "02",
                title: "Monitoring & Data Collection",
                color: "from-yellow-500 to-yellow-400",
                icon: "📊",
                details: {
                  activity: "Continuous tracking of emission reductions through smart sensors and field reports",
                  support: "Deployment of MRV (Monitoring, Reporting, Verification) systems",
                  outcome: "Accurate, verifiable data to support future carbon credit issuance"
                }
              },
              {
                step: "03",
                title: "Verification & Certification",
                color: "from-green-700 to-green-600",
                icon: "✅",
                details: {
                  activity: "Engagement with accredited auditors to validate emission reductions",
                  deliverables: "Third-party audit reports, carbon accounting records, site assessments",
                  outcome: "Officially certified VERs eligible for sale in carbon markets"
                }
              },
              {
                step: "04",
                title: "Carbon Credit Monetization",
                color: "from-yellow-500 to-yellow-400",
                icon: "💎",
                details: {
                  activity: "Listing and trading of carbon credits on voluntary market platforms",
                  support: "Climate finance of HEMU projects and bundling of co-benefits",
                  outcome: "Recurring revenue stream reinvested into sustainable operations"
                }
              }
            ].map((phase, index) => (
              <div key={index} className="group relative">
                {/* Step Number */}
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {phase.step}
                  </div>
                </div>
                
                {/* Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-gray-100 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="text-center mb-4">
                    <span className="text-3xl mb-2 block">{phase.icon}</span>
                    <h3 className="font-bold text-gray-800 text-lg leading-tight">{phase.title}</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-green-700">Activity:</span>
                      <p className="text-gray-600 mt-1">{phase.details.activity}</p>
                    </div>
                    
                    {phase.details.deliverables && (
                      <div>
                        <span className="font-semibold text-green-700">Deliverables:</span>
                        <p className="text-gray-600 mt-1">{phase.details.deliverables}</p>
                      </div>
                    )}
                    
                    {phase.details.support && (
                      <div>
                        <span className="font-semibold text-green-700">Support:</span>
                        <p className="text-gray-600 mt-1">{phase.details.support}</p>
                      </div>
                    )}
                    
                    {phase.details.standards && (
                      <div>
                        <span className="font-semibold text-green-700">Standards:</span>
                        <p className="text-gray-600 mt-1">{phase.details.standards}</p>
                      </div>
                    )}
                    
                    <div>
                      <span className="font-semibold text-yellow-600">Outcome:</span>
                      <p className="text-gray-600 mt-1">{phase.details.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>   
      </div>
    </div>
  );
};

export default CarbonCredit;