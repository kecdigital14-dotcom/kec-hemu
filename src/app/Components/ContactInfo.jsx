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

  const contactItems = [
    {
      id: 1,
      icon: PhoneIcon,
      title: "Phone",
      line1: "+918287933634",
      line2: ""
    },
    {
      id: 2,
      icon: EmailIcon,
      title: "Email",
      line1: "ceo@haritenergymissionuk.com",
      line2: ""
    },
    {
      id: 3,
      icon: LocationIcon,
      title: "Website",
      line1: "www.haritenergymissionuk.com",
      line2: ""
    },
    {
      id: 4,
      icon: LocationIcon,
      title: "Corporate Office",
      line1: "Joint Director, Dairy Development,",
      line2: "Aanchal Dairy Compound, Raipur Road, Dehradun - 248001"
    }
  ];

  return (
    <div className="bg-green-950 py-24 flex items-center justify-center p-6 mt-36 flex-col">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-green-900/50 border border-green-700/50 rounded-2xl p-8 hover:bg-green-800/70 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* Icon container */}
                <div className="relative flex justify-center mb-6">
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-300"></div>
                    
                    {/* Main icon circle */}
                    <div className="relative w-20 h-20 bg-gradient-to-br from-green-600 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-yellow-400/50 transition-all duration-300">
                      {/* Inner glow */}
                      <div className="absolute inset-2 bg-green-400/30 rounded-full blur-sm"></div>
                      
                      {/* Icon */}
                      <IconComponent className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      
                      {/* Subtle inner border */}
                      <div className="absolute inset-0 rounded-full border border-yellow-400/40"></div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center space-y-3 relative z-10">
                  <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <div className="space-y-1">
                    <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      {item.line1}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-yellow-200 transition-colors duration-300">
                      {item.line2}
                    </p>
                  </div>
                </div>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-yellow-400 group-hover:w-20 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
