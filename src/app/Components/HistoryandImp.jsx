import React from 'react';

const HistoryandImp = () => {
  return (
    <div className="py-2 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
          {/* History Section */}
          <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-600 opacity-20 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-600 opacity-15 rounded-full transform -translate-x-12 translate-y-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-1 h-12 bg-green-400 mr-4 rounded-full"></div>
                <h2 className="text-3xl font-bold text-white tracking-wide">History</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-green-100 leading-7 text-base font-light">
                  HEMU was established as a joint initiative to revolutionize rural 
                  Uttarakhand through sustainable energy, agriculture, and community-driven 
                  development.
                </p>
                
                <div className="flex items-center pt-4">
                  <div className="w-8 h-0.5 bg-green-400 mr-3"></div>
                  <span className="text-green-300 text-sm font-medium">Est. 2020</span>
                </div>
              </div>
            </div>
          </div>

          {/* Importance Section */}
          <div className="bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-28 h-28 bg-green-500 opacity-20 rounded-full transform -translate-x-14 -translate-y-14"></div>
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-green-500 opacity-15 rounded-full transform translate-x-18 translate-y-18"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-1 h-12 bg-green-300 mr-4 rounded-full"></div>
                <h2 className="text-3xl font-bold text-white tracking-wide">Importance</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-green-50 leading-7 text-base font-light">
                  HEMU plays a vital role in promoting clean energy, sustainable 
                  agriculture, and rural employment, driving holistic and eco-friendly 
                  development across Uttarakhand.
                </p>
                
                <div className="flex items-center pt-4">
                  <div className="w-8 h-0.5 bg-green-300 mr-3"></div>
                  <span className="text-green-200 text-sm font-medium">Rural Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom accent */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryandImp;