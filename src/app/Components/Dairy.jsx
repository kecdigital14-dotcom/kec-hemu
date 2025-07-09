import React from 'react';

const Dairy = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Green decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-grey-100 to-grey-500"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400 rounded-full transform translate-x-32 -translate-y-32 opacity-80"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-500 rounded-full transform translate-x-16 translate-y-16 opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Main Image Container */}
              <div className="relative h-96 lg:h-[500px]">
                {/* Actual Image */}
                <img 
                  src="/dairymain.jpg" 
                  alt="Fresh environmental plants and trees"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Optional: Keep some decorative elements over the image */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-70"></div>
                  <div className="absolute top-32 right-16 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-100 opacity-70"></div>
                  <div className="absolute bottom-24 left-12 w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse delay-200 opacity-70"></div>
                  <div className="absolute bottom-36 right-20 w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-300 opacity-70"></div>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-green-400 rounded-2xl transition-all duration-500"></div>
            </div>
            
            {/* Floating elements around image */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-green-400 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-lime-400 rounded-full animate-pulse opacity-70"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Contact Us Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-green-600 text-sm font-medium uppercase tracking-wider">CONTACT US</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Fresh Environmental
              <br />
              <span className="text-green-600">Plant & Safe Trees</span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Competently cultivate worldwide e-tailers through principle-centered value 
              professionally engineer high-payoff deliverables without exceptional 
              processes. Rapidiously network cost effective vortals.
            </p>
            
            {/* More About Button */}
            <div className="pt-4">
              <button className="group relative px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden">
                <div className="flex items-center gap-3">
                  <span>More About</span>
                  <div className="w-5 h-5 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-green-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-6 h-6 bg-lime-300 rounded-full opacity-40 animate-bounce"></div>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 left-3/4 w-24 h-24 bg-emerald-100 rounded-full opacity-30 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/8 w-16 h-16 bg-lime-100 rounded-full opacity-25 animate-pulse delay-1000"></div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gentle-bounce {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-5px) scale(1.05); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gentle-bounce {
          animation: gentle-bounce 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Dairy;