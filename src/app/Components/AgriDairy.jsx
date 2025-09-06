"use client"

import React, { useState } from 'react';
import { Sprout, Milk, ChevronLeft, ChevronRight, Star, TrendingUp, Shield } from 'lucide-react';

const AgriDairy = () => {
    const [agritechIndex, setAgritechIndex] = useState(0);
    const [dairyIndex, setDairyIndex] = useState(0);

    const agritechBusinesses = [
        {
            id: 1,
            title: "Smart Farming Solutions",
            image: "/homeimage3.jpg",
            description: "Leveraging cutting-edge technology to transform traditional farming practices with smart sensors, data analytics, and precision agriculture solutions.",
            features: [
                "IoT-enabled crop monitoring",
                "AI-powered yield optimization",
                "Sustainable farming practices"
            ],
            stats: { projects: "150+", efficiency: "85%", clients: "50+" }
        },
        {
            id: 2,
            title: "Biofuel & CBG Solutions",
            image: "/homeimage4.jpg",
            description: "Sustainable energy solutions focusing on biofuel and compressed biogas (CBG) production from agricultural residue and organic waste, reducing dependency on fossil fuels and promoting a circular economy.",
            features: [
                "Agro-waste to biofuel conversion",
                "Compressed Biogas (CBG) production",
                "Reduced carbon footprint & clean energy"
            ],
            stats: { projects: "80+", efficiency: "92%", clients: "35+" }
        }
    ];

    const dairyBusinesses = [
        {
            id: 1,
            title: "Modern Dairy Operations",
            image: "/homeimage2.jpg",
            description: "Modernizing dairy operations from farm to table with advanced processing technologies, quality assurance, and efficient distribution networks.",
            features: [
                "Automated milking systems",
                "Cold chain optimization",
                "Quality tracking & certification"
            ],
            stats: { projects: "120+", efficiency: "90%", clients: "40+" }
        },
        {
            id: 2,
            title: "Dairy Processing Excellence",
            image: "/homeimage5.avif",
            description: "State-of-the-art dairy processing facilities with advanced pasteurization, packaging technology, and comprehensive supply chain management.",
            features: [
                "Advanced pasteurization",
                "Smart packaging solutions",
                "Real-time quality monitoring"
            ],
            stats: { projects: "95+", efficiency: "88%", clients: "30+" }
        }
    ];

    const nextAgritech = () => {
        setAgritechIndex((prev) => (prev + 1) % agritechBusinesses.length);
    };

    const prevAgritech = () => {
        setAgritechIndex((prev) => (prev - 1 + agritechBusinesses.length) % agritechBusinesses.length);
    };

    const nextDairy = () => {
        setDairyIndex((prev) => (prev + 1) % dairyBusinesses.length);
    };

    const prevDairy = () => {
        setDairyIndex((prev) => (prev - 1 + dairyBusinesses.length) % dairyBusinesses.length);
    };

    const BusinessCard = ({ business, color, onPrev, onNext, currentIndex, totalItems, type }) => {
        const isGreen = color === 'green';
        
        return (
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden ">
                {/* Background Pattern */}
                <div className={`absolute inset-0 opacity-5 ${isGreen ? 'bg-green-500' : 'bg-yellow-500'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent"></div>
                </div>

                {/* Header Section */}
                <div className={`relative ${isGreen ? 'bg-gradient-to-r from-green-50 to-green-100' : 'bg-gradient-to-r from-yellow-50 to-yellow-100'} p-6 border-b border-gray-100`}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className={`${isGreen ? 'bg-green-500' : 'bg-yellow-500'} p-3 rounded-2xl shadow-lg`}>
                                {type === 'agritech' ? (
                                    <Sprout className="w-8 h-8 text-white" />
                                ) : (
                                    <Milk className="w-8 h-8 text-white" />
                                )}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">{business.title}</h2>
                                <div className="flex items-center space-x-1 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                    ))}
                                    <span className="text-sm text-gray-600 ml-2">4.9 Rating</span>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Controls */}
                        {totalItems > 1 && (
                            <div className="flex space-x-2">
                                <button
                                    onClick={onPrev}
                                    className="bg-white rounded-full p-2 shadow-md transition-all duration-200"
                                >
                                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                                </button>
                                <button
                                    onClick={onNext}
                                    className="bg-white rounded-full p-2 shadow-md transition-all duration-200"
                                >
                                    <ChevronRight className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Main Content - Image and Content Side by Side */}
                <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Image Section */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                                <img
                                    src={business.image}
                                    alt={business.title}
                                    className="w-full h-80 object-cover transition-transform duration-700 "
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>       
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col justify-between">
                            {/* Description */}
                            <div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {business.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-4 mb-8">
                                    <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                        <TrendingUp className="w-6 h-6 mr-3 text-blue-500" />
                                        Key Features
                                    </h3>
                                    <div className="grid gap-4">
                                        {business.features.map((feature, index) => (
                                            <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl transition-colors duration-200">
                                                <div className={`w-3 h-3 ${isGreen ? 'bg-green-500' : 'bg-yellow-500'} rounded-full mr-4 flex-shrink-0`}></div>
                                                <span className="text-gray-700 font-medium text-base">{feature}</span>
                                                <Shield className="w-5 h-5 ml-auto text-gray-400" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>                 
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
               
                     <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-green-800 ">
              Our Business{" "}
              <span className="text-yellow-400">Solutions</span>
            </h1>
                    <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
                        Innovative technology solutions driving the future of agriculture and dairy industries
                    </p>
                </div>

                {/* Business Cards - Vertical Layout */}
                <div className="space-y-16">
                    {/* Agritech Section */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="bg-gradient-to-r from-green-600 to-yellow-500 p-4 rounded-full shadow-lg">
                                <Sprout className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">AgriTech Solutions</h2>
                        </div>
                        <BusinessCard
                            business={agritechBusinesses[agritechIndex]}
                            color="green"
                            onPrev={prevAgritech}
                            onNext={nextAgritech}
                            currentIndex={agritechIndex}
                            totalItems={agritechBusinesses.length}
                            type="agritech"
                        />
                    </div>

                    {/* Dairy Section */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="bg-gradient-to-r from-green-600 to-yellow-500 p-4 rounded-full shadow-lg">
                                <Milk className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">Dairy Solutions</h2>
                        </div>
                        <BusinessCard
                            business={dairyBusinesses[dairyIndex]}
                            color="yellow"
                            onPrev={prevDairy}
                            onNext={nextDairy}
                            currentIndex={dairyIndex}
                            totalItems={dairyBusinesses.length}
                            type="dairy"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgriDairy;