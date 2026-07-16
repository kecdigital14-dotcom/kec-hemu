import React from 'react';
import { Users, Building2 } from 'lucide-react';
import AgriDairy from './AgriDairy';

const HemuJoint = () => {
    const partnerCompanies = [
        {
            logoSrc: "/ucdflogo.avif",
            specialty: "Dairy Processing & Distribution",
            description: "Modern dairy processing facilities, quality control, and supply chain management",
            color: "bg-green-600"
        },
        {
            logoSrc: "/keclogo.png",
            specialty: "Farm To Fuel",
            description: "Advanced IoT sensors, precision agriculture, and crop optimization systems",
            color: "bg-yellow-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 p-4 sm:p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="mb-6 mt-8 sm:mt-12">
                        <div className="inline-block bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
                            <img
                                src="/hemulogoupdated.png"
                                alt="Hemu Logo"
                                className="w-48 h-32 sm:w-72 sm:h-48 md:w-96 md:h-60 object-contain mx-auto"
                            />
                        </div>
                    </div>

                    <div className="relative text-center py-4 sm:py-8 rounded-2xl w-full max-w-[800px] mx-auto px-4">
                        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-green-700 drop-shadow-md">
                            Hemu Joint{" "}
                            <span className="text-yellow-400">Ventures</span>
                        </h1>
                    </div>
                    <p className="text-base sm:text-lg text-gray-600 font-medium mb-4 px-4">
                        Innovating Agriculture Through Strategic Partnerships
                    </p>
                    <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto font-sans px-4">
                        UCDF and KEC, through their joint venture, have launched HEMU — a pioneering initiative set to revolutionize agriculture and dairy by driving innovation, harnessing technology, and championing sustainable practices.
                    </p>
                </div>

                {/* Partnership Structure */}
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 mb-12 border border-gray-100">
                    <div className="flex items-center justify-center mb-8">
                        <div className="flex items-center space-x-4">
                            <Building2 className="w-6 h-6 text-green-600" />
                            <span className="text-base sm:text-lg font-semibold text-gray-700 text-center">Joint Venture Structure</span>
                            <Users className="w-6 h-6 text-yellow-500" />
                        </div>
                    </div>

                    <div className="flex items-center justify-center mb-8 relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl w-full">
                            {partnerCompanies.map((partner, index) => (
                                <div key={index} className="relative">
                                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 sm:p-10 lg:p-16 border border-gray-200 hover:shadow-md transition-all duration-300">
                                        <div className="text-center mb-4">
                                            <img
                                                src={partner.logoSrc}
                                                alt={`${partner.name} Logo`}
                                                className="w-32 h-14 sm:w-48 sm:h-16 md:w-56 md:h-20 object-contain mx-auto"
                                            />
                                            <h3 className="text-2xl sm:text-4xl lg:text-7xl font-bold text-gray-600 mt-2 break-words">
                                                {partner.name}
                                            </h3>
                                            <div
                                                className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white text-sm sm:text-lg font-sans font-medium ${partner.color} mt-2`}
                                            >
                                                {partner.specialty}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {partner.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                            <div className="bg-white rounded-full p-4 shadow-lg border-2 border-gray-200">
                                <span className="text-3xl font-bold text-gray-600">+</span>
                            </div>
                        </div>
                    </div>
                </div>

                <AgriDairy />

                {/* Partnership Benefits */}
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 border border-gray-100">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">Joint Venture Synergies</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-lg">1</span>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">Integrated Supply Chain</h3>
                            <p className="text-gray-600 text-sm">End-to-end control from farm to consumer</p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
                            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-lg">2</span>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">Shared Resources</h3>
                            <p className="text-gray-600 text-sm">Combined expertise and infrastructure</p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-lg">3</span>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">Risk Mitigation</h3>
                            <p className="text-gray-600 text-sm">Diversified portfolio and shared risk</p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
                            <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-lg">4</span>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">Innovation Hub</h3>
                            <p className="text-gray-600 text-sm">Accelerated R&D and technology adoption</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HemuJoint;