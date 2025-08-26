import React from 'react';
import { Wheat, DollarSign, Clock, GraduationCap, Package, Shield, Building2, Users, Award, Leaf } from 'lucide-react';

const IncentiveFarmer = () => {
    const incentives = [
        {
            id: 1,
            title: "Fair Milk Pricing",
            description: "Farmers are ensured competitive prices for their milk based on quality and quantity, creating a reliable income source.",
            icon: <DollarSign className="w-6 h-6" />
        },
        {
            id: 2,
            title: "Timely Payments",
            description: "Regular and timely payments are made to farmers, ensuring financial stability and cash flow for their operations.",
            icon: <Clock className="w-6 h-6" />
        },
        {
            id: 3,
            title: "Technical Support and Training",
            description: "Regular training programs on modern dairy farming techniques and advisory services for better animal care, feeding, and hygiene practices.",
            icon: <GraduationCap className="w-6 h-6" />
        },
        {
            id: 4,
            title: "Supply of Quality Inputs",
            description: "Provision of cattle feed, fodder seeds, and mineral mixtures at subsidized rates. Access to quality veterinary services and artificial insemination facilities.",
            icon: <Package className="w-6 h-6" />
        },
        {
            id: 5,
            title: "Insurance Schemes",
            description: "Livestock insurance is offered to protect farmers against losses due to disease or death of animals.",
            icon: <Shield className="w-6 h-6" />
        },
        {
            id: 6,
            title: "Infrastructure Support",
            description: "Development of milk collection centers in rural areas. Access to chilling and storage facilities to maintain milk quality.",
            icon: <Building2 className="w-6 h-6" />
        },
        {
            id: 7,
            title: "Promotion of Women Participation",
            description: "Special incentives and training programs are conducted to encourage women's participation in dairy farming.",
            icon: <Users className="w-6 h-6" />
        },
        {
            id: 8,
            title: "Bonuses and Dividends",
            description: "Farmers are entitled to annual bonuses and dividends as members of the cooperative.",
            icon: <Award className="w-6 h-6" />
        },
        {
            id: 9,
            title: "Support for Organic Dairy Farming",
            description: "UCDF promotes organic milk production by supporting farmers in certification processes and providing incentives for organic practices.",
            icon: <Leaf className="w-6 h-6" />
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-700 to-green-900">
            {/* Header Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 to-green-700/90"></div>
                <div className="relative px-6 py-6 text-center">
                    <div className="flex justify-center mb-6">
                        <Wheat className="w-16 h-16 text-yellow-300" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Incentives To Farmers
                    </h1>
                    <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-gray-50 min-h-screen">
                <div className="container mx-auto px-6 py-16 max-w-7xl">
                    {/* Introduction */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
                            Incentives to Farmers
                        </h2>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                {/* Left Content */}
                                <div className="p-8 lg:p-12">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                        Empowering Dairy Farmers in Uttarakhand
                                    </h3>
                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        The Uttarakhand Cooperative Dairy Federation Ltd. (UCDF) under its flagship brand "HEMU" provides comprehensive support to dairy farmers across the region.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        Our initiatives focus on sustainable and profitable dairy farming through innovative programs that improve milk production, ensure fair returns, and enhance the overall livelihood of farming communities.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Sustainable Farming Practices</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Fair Market Returns</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Enhanced Livelihood Support</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Image */}
                                <div className="relative  p-8 lg:px-12 flex items-center justify-center">
                                    <div className="text-center">

                                        <img
                                            src="/empowerfarmer.jpg"
                                            alt="Green tractor working in agricultural field during sunset"
                                            className="w-full h-[450px] object-cover rounded-2xl"
                                        />
                                    </div>

                                    {/* Decorative elements */}
                                    <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-200 rounded-full opacity-50"></div>
                                    <div className="absolute bottom-8 left-8 w-6 h-6 bg-green-200 rounded-full opacity-50"></div>
                                    <div className="absolute top-1/2 left-4 w-4 h-4 bg-yellow-300 rounded-full opacity-40"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Incentives Section */}
                    <div className="mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
                            Key Incentives Provided to Farmers
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {incentives.map((incentive) => (
                                <div
                                    key={incentive.id}
                                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-l-4 border-green-600"
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="bg-yellow-100 rounded-full p-3 mr-4">
                                            <div className="text-green-700">
                                                {incentive.icon}
                                            </div>
                                        </div>
                                        <div className="bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                                            {incentive.id}
                                        </div>
                                    </div>

                                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                                        {incentive.title}
                                    </h4>

                                    <p className="text-gray-600 leading-relaxed">
                                        {incentive.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncentiveFarmer;