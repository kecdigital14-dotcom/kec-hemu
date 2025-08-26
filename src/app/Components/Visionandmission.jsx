import React from 'react';

const VisionAndMission = () => {
    return (
        <div className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - HEMU Logo */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="bg-white rounded-3xl shadow-2xl p-12 transform hover:scale-105 transition-transform duration-300">
                            <div className="text-center">
                                {/* Logo Container */}
                                <div className="mb-8">
                                    <div className="relative">
                                        {/* <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-2xl flex items-center justify-center shadow-lg"> */}
                                        <div className="text-white">
                                            {/* Mountain/Triangle Logo Design */}
                                            <div className="relative">
                                                <img src="/logoheader.png" alt="" />
                                            </div>
                                            {/* </div> */}
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"></div>
                                    </div>

                                    {/* Brand Text */}
                                    <div className="space-y-2">
                                        <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text">
                                            HEMU
                                        </h1>
                                        <h2 className="text-lg font-semibold text-green-700 tracking-wide">
                                            Harit Energy Mission Uttarakhand
                                        </h2>
                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                            <p className="text-sm text-gray-600 font-semibold tracking-wider">
                                                {/* (A JV of UCDF Govt of Uttarakhand & MSAC Agritech) */}
                                                HEMU is an integrated rural development initiative established through a strategic Joint
Venture between the UTTARAKHAND COOPERATIVE DAIRY FEDERATION
(UCDF) & AND M/s KEC AGRITECH PVT. LTD.
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                (A PPP INITIATIVE)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Vision & Mission */}
                    <div className="space-y-4">

                        {/* Vision Section */}
                        <div className="bg-white rounded-3xl shadow-xl px-10 py-6 border-l-8 border-green-500 hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-4xl font-bold text-gray-800 tracking-tight">VISION</h2>
                            </div>

                            <div className="pl-">
                                <p className="text-gray-700 leading-6 text-sm">
                                    Our vision is to establish Uttarakhand as a national model for
                                    sustainable rural development by integrating clean energy systems,
                                    waste management technologies, and value-added agricultural
                                    businesses that directly improve livelihoods and the environment.
                                </p>
                            </div>
                        </div>

                        {/* Mission Section */}
                        <div className="bg-white rounded-3xl shadow-xl px-10 py-6 border-l-8 border-yellow-500 hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-4xl font-bold text-gray-800 tracking-tight">MISSION</h2>
                            </div>

                            <div className="pl-">
                                <div className="space-y-1">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm leading-7">
                                            To create income-generating opportunities for rural farmers through
                                            sustainable enterprises
                                        </p>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm leading-7">
                                            To enable widespread use of clean and renewable energy
                                        </p>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm leading-7">
                                            To promote circular use of agricultural and cattle waste
                                        </p>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm leading-7">
                                            To develop value chains for dairy, manure, and bakery products
                                        </p>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm leading-5">
                                            To contribute to a self-reliant and energy-independent Uttarakhand
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Decorative Elements */}
                <div className="mt-16 flex justify-center">
                    <div className="flex space-x-4">
                        <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse delay-150"></div>
                        <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse delay-300"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionAndMission;