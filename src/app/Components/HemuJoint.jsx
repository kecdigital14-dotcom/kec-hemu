import React from 'react';
import { Users, Sprout, Milk, Building2 } from 'lucide-react';

const HemuJoint = () => {
    const partnerCompanies = [
        {
            name: "UCDF",
            logoSrc: "/ucdflogo.avif",
            specialty: "Dairy Processing & Distribution",
            description: "Modern dairy processing facilities, quality control, and supply chain management",
            color: "bg-green-600"
        },
        {
            name: "KEC",
            logoSrc: "/keclogo.png",
            specialty: "Smart Farming Technology",
            description: "Advanced IoT sensors, precision agriculture, and crop optimization systems",
            
            color: "bg-yellow-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 p-6">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    {/* Hemu Logo */}
                    <div className="mb-6 mt-12">
                        <div className="inline-block bg-white rounded-2xl p-2 pb-6 shadow-lg border border-gray-200">
                            <img
                                src="/hemufooterlogo.png"
                                alt="Hemu Logo"
                                className="w-96 h-36 object-contain mx-auto "
                            />
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Hemu Joint Ventures</h1>
                    <p className="text-lg text-gray-600 font-medium mb-4">Innovating Agriculture Through Strategic Partnerships</p>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A strategic partnership between UCDF, KEC, and Hemu revolutionizing agriculture and dairy through innovation,
                        technology, and sustainable practices
                    </p>
                </div>

                {/* Partnership Structure */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
                    <div className="flex items-center justify-center mb-8">
                        <div className="flex items-center space-x-4">
                            <Building2 className="w-6 h-6 text-green-600" />
                            <span className="text-lg font-semibold text-gray-700">Partnership Structure</span>
                            <Users className="w-6 h-6 text-yellow-500" />
                        </div>
                    </div>

                    {/* Partner Companies */}
                    <div className="flex items-center justify-center mb-8 relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                            {partnerCompanies.map((partner, index) => (
                                <div key={index} className="relative">
                                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-16 border border-gray-200 hover:shadow-md transition-all duration-300">
                                        <div className="text-center mb-4">
                                            {/* ✅ Fixed: Show partner logo */}
                                            <img
                                                src={partner.logoSrc}
                                                alt={`${partner.name} Logo`}
                                                className="w-56 h-20 object-contain mx-auto"
                                            />
                                            <h3 className="text-7xl font-bold text-gray-600 mt-2">{partner.name}</h3>
                                            <div
                                                className={`inline-block px-3 py-1 rounded-full text-white text-lg font-medium ${partner.color} mt-2`}
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

                        {/* Plus Sign */}
                        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                            <div className="bg-white rounded-full p-4 shadow-lg border-2 border-gray-200">
                                <span className="text-3xl font-bold text-gray-600">+</span>
                            </div>
                        </div>
                    </div>

                    {/* Partnership Arrow */}
                    {/* <div className="flex justify-center mb-8">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-0.5 bg-gradient-to-r from-green-500 to-yellow-500"></div>
                            <div className="bg-gradient-to-r from-green-500 to-yellow-500 rounded-full p-3">
                                <span className="text-white font-bold text-lg">=</span>
                            </div>
                            <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-500 to-green-500"></div>
                        </div>
                    </div> */}

                    {/* Combined Venture - Hemu */}
                    {/* <div className="max-w-2xl mx-auto">
                        <div className="bg-gradient-to-br from-green-500 to-yellow-500 rounded-xl p-8 text-white text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-black opacity-5"></div>
                            <div className="relative z-10">
                                <div className="mb-4">
                                    <div className="w-96 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                          <img
                                src="/logoheader.png"
                                alt="Hemu Logo"
                                className="w-96 h-36 object-contain mx-auto"
                            />
                                    </div>
                                </div>
                                <h2 className="text-3xl font-bold mb-2">Hemu Joint Ventures</h2>
                                <p className="text-lg font-medium mb-4">Combined Agritech & Dairy Solutions</p>
                                <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full">
                                    <span className="text-sm font-medium text-gray-700">UCDF + KEC = Hemu</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* Value Proposition */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Agritech Focus */}
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
                        <div className="flex items-center mb-4">
                            <Sprout className="w-8 h-8 mr-3" />
                            <h2 className="text-2xl font-bold">Agritech Innovation</h2>
                        </div>
                        
                        {/* Agritech Image */}
                        <div className="mb-6 bg-white bg-opacity-10 rounded-xl p-1">
                            <img
                                src="/homeimage3.jpg"
                                alt="Smart Farming Technology"
                                className="w-full h-72 object-cover rounded-lg"
                            />
                        </div>
                        
                        <p className="text-green-100 mb-6">
                            Leveraging cutting-edge technology to transform traditional farming practices
                            with smart sensors, data analytics, and precision agriculture solutions.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-green-300 rounded-full mr-3"></div>
                                <span className="text-green-100">IoT-enabled crop monitoring</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-green-300 rounded-full mr-3"></div>
                                <span className="text-green-100">AI-powered yield optimization</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-green-300 rounded-full mr-3"></div>
                                <span className="text-green-100">Sustainable farming practices</span>
                            </div>
                        </div>
                    </div>

                    {/* Dairy Focus */}
                    <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8 text-white">
                        <div className="flex items-center mb-4">
                            <Milk className="w-8 h-8 mr-3" />
                            <h2 className="text-2xl font-bold">Dairy Excellence</h2>
                        </div>
                        
                        {/* Dairy Image */}
                        <div className="mb-6 bg-white bg-opacity-10 rounded-xl p-1">
                            <img
                                src="/homeimage2.jpg"
                                alt="Modern Dairy Operations"
                                 className="w-full h-72 object-cover rounded-lg"
                            />
                        </div>
                        
                        <p className="text-yellow-100 mb-6">
                            Modernizing dairy operations from farm to table with advanced processing
                            technologies, quality assurance, and efficient distribution networks.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                                <span className="text-yellow-100">Automated milking systems</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                                <span className="text-yellow-100">Cold chain optimization</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                                <span className="text-yellow-100">Quality tracking & certification</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partnership Benefits */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Partnership Synergies</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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