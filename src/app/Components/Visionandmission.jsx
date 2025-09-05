import React from 'react';

const VisionAndMission = () => {
    return (
        <div className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header Section with Logo and Title */}
                <div className="text-center mb-16">
                    <div className="flex flex-col items-center space-y-8">
                        {/* Section Title */}
                        <div className="text-center">
                            <div className="inline-flex items-center px-6 py-3 bg-green-100 border border-green-200 rounded-full mb-4">
                                <span className="text-green-800 text-sm font-semibold">✨ OUR VISION & MISSION</span>
                            </div>
                            {/* <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
                                Leading  <span className="text-green-600">Future</span>
                            </h2> */}
                            <div className="text-center mb-2 relative">
                                {/* Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-yellow-400 opacity-10 rounded-2xl blur-2xl"></div>

                                <div className="relative text-center  bg-gradient-to-r from-[#0C6530] via-[#1C7C3E] to-[#B59A2E] py-4 rounded-2xl w-[500px] mx-auto">
                                    <h1 className="text-4xl sm:text-4xl lg:text-4xl font-extrabold text-white drop-shadow-md ">
                                        Leading the{" "}
                                        <span className="text-yellow-300">Future</span>
                                    </h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Vision and Mission Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

                    {/* Vision Card */}
                    <div className="group">
                        <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border-l-8 border-green-500 hover:border-green-600 transform hover:-translate-y-2">

                            {/* Vision Header */}
                            <div className="flex items-center mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-800 tracking-tight">VISION</h3>
                                    <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-2"></div>
                                </div>
                            </div>

                            {/* Vision Content */}
                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                                <div className="space-y-4">
                                    {[
                                        "To establish Uttarakhand as a national model for sustainable rural development",
                                        "To integrate clean energy systems across villages for a greener future",
                                        "To promote advanced waste management technologies in rural areas",
                                        "To empower farmers through value-added agricultural businesses",
                                        "To directly improve rural livelihoods while preserving the environment",
                                    ].map((vision, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="w-3 h-3 bg-gradient-to-br from-green-500 to-green-600 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                                            <p className="text-gray-700 text-base leading-relaxed">
                                                {vision}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            {/* Decorative Element */}
                            <div className="flex justify-center mt-6">
                                <div className="flex space-x-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="group">
                        <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border-l-8 border-yellow-500 hover:border-yellow-600 transform hover:-translate-y-2">

                            {/* Mission Header */}
                            <div className="flex items-center mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-800 tracking-tight">MISSION</h3>
                                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mt-2"></div>
                                </div>
                            </div>

                            {/* Mission Content */}
                            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6">
                                <div className="space-y-4">
                                    {[
                                        "To create income-generating opportunities for rural farmers through sustainable enterprises",
                                        "To enable widespread use of clean and renewable energy",
                                        "To promote circular use of agricultural and cattle waste",
                                        "To develop value chains for dairy, manure, and bakery products",
                                        "To contribute to a self-reliant and energy-independent Uttarakhand"
                                    ].map((mission, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="w-3 h-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                                            <p className="text-gray-700 text-base leading-relaxed">
                                                {mission}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Element */}
                            <div className="flex justify-center mt-6">
                                <div className="flex space-x-2">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section with Call to Action */}
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-green-600 to-yellow-500 rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
                        <h3 className="text-white text-2xl font-bold mb-4">
                            Together, We Build a Sustainable Tomorrow
                        </h3>
                        <p className="text-green-100 text-lg leading-relaxed max-w-2xl mx-auto">
                            Join us in transforming rural Uttarakhand through innovative solutions that benefit farmers, communities, and the environment.
                        </p>
                        <div className="flex justify-center mt-6">
                            <div className="flex space-x-4">
                                <div className="w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
                                <div className="w-4 h-4 bg-white/50 rounded-full animate-pulse delay-150"></div>
                                <div className="w-4 h-4 bg-white/70 rounded-full animate-pulse delay-300"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VisionAndMission;