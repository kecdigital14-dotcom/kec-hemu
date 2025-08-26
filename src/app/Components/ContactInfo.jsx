import React from 'react';

const ContactInfo = () => {
  const LocationIcon = () => (
    <svg className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  );

  const WebsiteIcon = () => (
    <svg className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  );

  const contactItems = [
    {
      id: 1,
      icon: PhoneIcon,
      title: "Phone",
      line1: "+918287933634",
      line2: "",
      color: "from-green-500 to-yellow-400"
    },
    {
      id: 2,
      icon: EmailIcon,
      title: "Email",
      line1: "ceo@haritenergymissionuk.com",
      line2: "",
      color: "from-green-600 to-yellow-500"
    },
    {
      id: 3,
      icon: WebsiteIcon,
      title: "Website",
      line1: "www.haritenergymissionuk.com",
      line2: "",
      color: "from-yellow-400 to-green-600"
    },
    {
      id: 4,
      icon: LocationIcon,
      title: "Corporate Office",
      line1: "Joint Director, Dairy Development,",
      line2: "Aanchal Dairy Compound, Raipur Road, Dehradun - 248001",
      color: "from-yellow-500 to-green-500"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50 py-20 mt-20">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-green-100/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl font-black text-gray-900">
            <span className="bg-gradient-to-r from-green-600 to-yellow-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
            <br />
            With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your farming journey? Connect with our expert team for personalized support and guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative"
              >
                <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-green-300 hover:-translate-y-2 transition-all duration-300 h-full">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-yellow-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  
                  {/* Icon container */}
                  <div className="relative flex justify-center mb-6">
                    <div className="relative">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-300/20 to-yellow-300/20 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-300"></div>
                      
                      {/* Main icon circle */}
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                        {/* Icon */}
                        <IconComponent />
                        
                        {/* Subtle inner border */}
                        <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center space-y-4 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-yellow-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {item.title}
                    </h3>
                    
                    <div className="space-y-2">
                      <p className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                        {item.line1}
                      </p>
                      {item.line2 && (
                        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          {item.line2}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Bottom accent - animated underline */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-600 to-yellow-400 rounded-full group-hover:w-16 transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-yellow-400 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
            <span className="mr-3">Ready to Get Started?</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;