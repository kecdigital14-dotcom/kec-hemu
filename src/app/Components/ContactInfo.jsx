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

  const ClockIcon = () => (
    <svg className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
    </svg>
  );

  const contactItems = [
    {
      id: 1,
      icon: LocationIcon,
      title: "Head Office",
      line1: "Jin Cempaka Wangi No 22",
      line2: "Jakarta - Indonesia"
    },
    {
      id: 2,
      icon: EmailIcon,
      title: "Email Support",
      line1: "support@yourdomain.tld",
      line2: "hello@yourdomain.tld"
    },
    {
      id: 3,
      icon: PhoneIcon,
      title: "Let's Talk",
      line1: "Phone : +6221.2002.2012",
      line2: "Fax : +6221.2002.2013"
    },
    {
      id: 4,
      icon: ClockIcon,
      title: "Office Hours",
      line1: "Monday - Friday",
      line2: "07am - 09pm"
    }
  ];

  return (
    <div className="bg-black py-24 flex items-center justify-center p-6 mt-36 flex-col">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* Icon container */}
                <div className="relative flex justify-center mb-6">
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-300"></div>
                    
                    {/* Main icon circle */}
                    <div className="relative w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300">
                      {/* Inner glow */}
                      <div className="absolute inset-2 bg-blue-500/30 rounded-full blur-sm"></div>
                      
                      {/* Icon */}
                      <IconComponent className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      
                      {/* Subtle inner border */}
                      <div className="absolute inset-0 rounded-full border border-blue-400/30"></div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center space-y-3 relative z-10">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <div className="space-y-1">
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {item.line1}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {item.line2}
                    </p>
                  </div>
                </div>
                
                {/* Subtle bottom border accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-20 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Background ambient effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/3 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full h-[490px] rounded-xl overflow-hidden shadow-lg mt-36">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3504.0463191996973!2d77.18601532422012!3d28.5683717869938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s429%2C%204th%20Floor%2C%20Amsal%20Chamber%202%2C%20Metro%20Station%20-%20Gate%20No.3%2C%20Bikaji%20Cama%20Place%2C%20New%20Delhi-110066!5e0!3m2!1sen!2sin!4v1750180783351!5m2!1sen!2sin"
        width="100%"
        height="100%"
        className="border-0 w-full h-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  );
};

export default ContactInfo;