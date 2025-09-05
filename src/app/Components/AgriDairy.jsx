"use client"

import React, { useState } from 'react';
import { Sprout, Milk, ChevronLeft, ChevronRight } from 'lucide-react';

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
            ]
        },
        {
            id: 2,
            title: "Biofuel & CBG Solutions",
            image: "/homeimage4.jpg", // Replace with a relevant biofuel/CBG image if available
            description: "Sustainable energy solutions focusing on biofuel and compressed biogas (CBG) production from agricultural residue and organic waste, reducing dependency on fossil fuels and promoting a circular economy.",
            features: [
                "Agro-waste to biofuel conversion",
                "Compressed Biogas (CBG) production",
                "Reduced carbon footprint & clean energy"
            ]
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
            ]
        },
        {
            id: 2,
            title: "Dairy Processing Excellence",
            image: "/homeimage5.avif", // You can replace with different image
            description: "State-of-the-art dairy processing facilities with advanced pasteurization, packaging technology, and comprehensive supply chain management.",
            features: [
                "Advanced pasteurization",
                "Smart packaging solutions",
                "Real-time quality monitoring"
            ]
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
        const gradientClass = color === 'green'
            ? 'bg-gradient-to-br from-green-500 to-green-600'
            : 'bg-gradient-to-br from-yellow-500 to-yellow-600';

        const lightColor = color === 'green' ? 'text-green-100' : 'text-yellow-100';
        const dotColor = color === 'green' ? 'bg-green-300' : 'bg-yellow-300';

        return (
            <div className={`${gradientClass} rounded-2xl p-8 text-white relative overflow-hidden`}>
                {/* Navigation Controls */}
                <div className="absolute top-4 right-4 flex space-x-2 z-10">
                    <button
                        onClick={onPrev}
                        className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
                        disabled={totalItems <= 1}
                    >
                        <ChevronLeft className="w-4 h-4 text-gray-900" />
                    </button>
                    <button
                        onClick={onNext}
                        className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
                        disabled={totalItems <= 1}
                    >
                        <ChevronRight className="w-4 h-4 text-black" />
                    </button>
                </div>

                {/* Header */}
                <div className="flex items-center mb-4">
                    {type === 'agritech' ? (
                        <Sprout className="w-8 h-8 mr-3" />
                    ) : (
                        <Milk className="w-8 h-8 mr-3" />
                    )}
                    <h2 className="text-2xl font-bold">{business.title}</h2>
                </div>

                {/* Image */}
                <div className="mb-6 bg-white bg-opacity-10 rounded-xl p-1">
                    <img
                        src={business.image}
                        alt={business.title}
                        className="w-full h-72 object-cover rounded-lg transition-all duration-500 ease-in-out"
                    />
                </div>

                {/* Description */}
                <p className={`${lightColor} mb-6 transition-all duration-500 ease-in-out`}>
                    {business.description}
                </p>

                {/* Features */}
                <div className="space-y-3 transition-all duration-500 ease-in-out">
                    {business.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                            <div className={`w-2 h-2 ${dotColor} rounded-full mr-3`}></div>
                            <span className={lightColor}>{feature}</span>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                {totalItems > 1 && (
                    <div className="flex justify-center mt-6 space-x-2">
                        {Array.from({ length: totalItems }).map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-white'
                                        : 'bg-white bg-opacity-40'
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Agritech Section */}
            <BusinessCard
                business={agritechBusinesses[agritechIndex]}
                color="green"
                onPrev={prevAgritech}
                onNext={nextAgritech}
                currentIndex={agritechIndex}
                totalItems={agritechBusinesses.length}
                type="agritech"
            />

            {/* Dairy Section */}
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
    );
};

export default AgriDairy;