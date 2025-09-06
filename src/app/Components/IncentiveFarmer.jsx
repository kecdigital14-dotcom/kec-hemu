"use client"

import React, { useState } from 'react';
import { Wheat, DollarSign, Clock, GraduationCap, Package, Shield, Building2, Users, Award, Leaf, ChevronRight, Star, TrendingUp, Sparkles, ArrowRight, CheckCircle, Heart, Zap } from 'lucide-react';

const IncentiveFarmer = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [activeTab, setActiveTab] = useState(0);

    const incentives = [
        {
            id: 1,
            title: "Fair Milk Pricing",
            description: "Competitive prices based on quality and quantity, creating reliable income sources for sustainable farming.",
            icon: <DollarSign className="w-6 h-6" />,
            category: "financial",
            impact: "High Revenue",
            color: "from-green-400 to-green-600"
        },
        {
            id: 2,
            title: "Timely Payments",
            description: "Regular payments ensuring financial stability and consistent cash flow for farming operations.",
            icon: <Clock className="w-6 h-6" />,
            category: "financial",
            impact: "Cash Flow",
            color: "from-yellow-400 to-yellow-600"
        },
        {
            id: 3,
            title: "Technical Training",
            description: "Modern dairy farming techniques and advisory services for enhanced animal care and productivity.",
            icon: <GraduationCap className="w-6 h-6" />,
            category: "education",
            impact: "Skill Growth",
            color: "from-green-500 to-yellow-500"
        },
        {
            id: 4,
            title: "Quality Inputs",
            description: "Subsidized cattle feed, fodder seeds, and veterinary services for optimal farm productivity.",
            icon: <Package className="w-6 h-6" />,
            category: "resources",
            impact: "Quality Feed",
            color: "from-green-600 to-green-400"
        },
        {
            id: 5,
            title: "Insurance Protection",
            description: "Comprehensive livestock insurance protecting against disease and animal loss risks.",
            icon: <Shield className="w-6 h-6" />,
            category: "security",
            impact: "Risk Cover",
            color: "from-yellow-500 to-green-500"
        },
        {
            id: 6,
            title: "Infrastructure",
            description: "Modern milk collection centers and chilling facilities for quality preservation.",
            icon: <Building2 className="w-6 h-6" />,
            category: "infrastructure",
            impact: "Modern Tech",
            color: "from-green-400 to-yellow-400"
        },
        {
            id: 7,
            title: "Women Empowerment",
            description: "Special programs encouraging women's participation in dairy farming leadership.",
            icon: <Users className="w-6 h-6" />,
            category: "social",
            impact: "Inclusion",
            color: "from-yellow-400 to-green-600"
        },
        {
            id: 8,
            title: "Bonuses & Dividends",
            description: "Annual rewards and profit-sharing as valued cooperative members.",
            icon: <Award className="w-6 h-6" />,
            category: "financial",
            impact: "Extra Income",
            color: "from-green-500 to-yellow-400"
        },
        {
            id: 9,
            title: "Organic Farming",
            description: "Certification support and incentives for sustainable organic dairy practices.",
            icon: <Leaf className="w-6 h-6" />,
            category: "sustainability",
            impact: "Eco-Friendly",
            color: "from-green-600 to-green-400"
        }
    ];

    const categories = [
        { id: 'all', name: 'All Programs', icon: <Star className="w-4 h-4" />, count: 9 },
        { id: 'financial', name: 'Financial', icon: <DollarSign className="w-4 h-4" />, count: 3 },
        { id: 'education', name: 'Training', icon: <GraduationCap className="w-4 h-4" />, count: 1 },
        { id: 'resources', name: 'Resources', icon: <Package className="w-4 h-4" />, count: 1 },
        { id: 'security', name: 'Security', icon: <Shield className="w-4 h-4" />, count: 1 }
    ];

    const leftFeatures = [
        { title: "98%", subtitle: "Satisfaction Rate", icon: <Heart className="w-8 h-8" /> },
        { title: "24/7", subtitle: "Support Available", icon: <Zap className="w-8 h-8" /> }
    ];

    const rightFeatures = [
        { title: "50,000+", subtitle: "Happy Farmers", icon: <Users className="w-8 h-8" /> },
        { title: "₹500Cr+", subtitle: "Farmer Income", icon: <TrendingUp className="w-8 h-8" /> }
    ];

    const filteredIncentives = selectedCategory === 'all'
        ? incentives
        : incentives.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-white">
            {/* Modern Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50">
                {/* Subtle Background Elements */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-green-100/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

                <div className="relative max-w-6xl mx-auto px-6 py-24">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        {/* Left Content */}
                        <div className="space-y-2">
                            <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-yellow-400 rounded-2xl px-4 py-3 shadow-lg hover:scale-105 transition-all duration-300">
                                <Wheat className="w-5 h-5 mr-3 text-white" />
                                <span className="text-sm font-bold text-white tracking-wider">HEMU FARMER EMPOWERMENT</span>
                                {/* <Sparkles className="w-4 h-4 ml-3 text-yellow-200 animate-spin" /> */}
                            </div>

                            <h1 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
                                Empower Your
                                <br />
                                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                    Farming Future
                                </span>
                            </h1>

                            <p className="text-[15px] text-justify text-gray-700 leading-relaxed max-w-lg">
                                Transform your dairy farming journey with comprehensive support programs,
                                fair pricing, and cutting-edge agricultural innovations across Uttarakhand.
                                We empower farmers by providing access to modern infrastructure, skill development,
                                and sustainable practices that enhance productivity.
                                Through financial inclusion and market linkages, we ensure farmers receive
                                fair value for their produce while reducing dependency on intermediaries.
                                Our mission is to build resilient rural communities where farmers can thrive,
                                achieve long-term stability, and contribute to a sustainable future.

                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="group bg-gradient-to-r from-green-600 to-yellow-400 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                    <span className="flex items-center">
                                        Join Now
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                                <button className="group bg-white border-2 border-gray-200 text-gray-700 font-semibold py-4 px-8 rounded-2xl hover:border-green-400 hover:text-green-600 transition-all duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Right Content - Hero Image with remaining stats */}
                        <div className="space-y-8">
                            {/* Hero Image */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-yellow-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                <div className="relative bg-white rounded-2xl p-2 shadow-xl border border-gray-100 overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                                    <img
                                        src="/empowerfarmernew1.jpg"
                                        alt="Happy dairy farmers with cows in green pasture"
                                        className="w-full h-96 object-cover rounded-xl"
                                    />
                                    <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>

                            {/* Remaining Stats Cards - Happy Farmers and Farmer Income */}
                          
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Category Selector */}
            <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`group flex items-center px-4 py-2 rounded-2xl font-bold transition-all duration-300 ${selectedCategory === category.id
                                        ? 'bg-gradient-to-r from-green-600 to-yellow-400 text-white shadow-lg scale-105 shadow-green-200/30'
                                        : 'bg-gray-50 hover:bg-gradient-to-r hover:from-green-50 hover:to-yellow-50 text-gray-700 hover:text-gray-900 hover:scale-105 hover:shadow-md border border-gray-200 hover:border-green-300'
                                    }`}
                            >
                                <div className="group-hover:rotate-12 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <span className="ml-2 mr-3">{category.name}</span>
                                <div className={`text-xs px-2 py-1 rounded-full ${selectedCategory === category.id
                                        ? 'bg-white/20 text-white'
                                        : 'bg-gray-200 text-gray-600'
                                    }`}>
                                    {category.count}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Redesigned Incentives Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12 space-y-4">
                        <h2 className="text-5xl font-black text-gray-900">
                            <span className="bg-gradient-to-r from-green-600 to-yellow-400 bg-clip-text text-transparent">
                                Comprehensive
                            </span>
                            <br />Support Programs
                        </h2>
                        <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                            Discover how our innovative programs are designed to maximize your farming potential
                            and create lasting prosperity for your family and community.
                        </p>
                    </div>

                    {/* Simple Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredIncentives.map((incentive) => (
                            <div key={incentive.id} className="group">
                                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:border-green-300 transition-all duration-300">
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                                        <div className="text-white">
                                            {incentive.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {incentive.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {incentive.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="bg-gradient-to-r from-green-600 to-yellow-400 text-white text-sm font-semibold px-3 py-1 rounded-full">
                                            {incentive.impact}
                                        </span>

                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-yellow-400 group-hover:text-white transition-all duration-300">
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="py-8 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="bg-gradient-to-br from-green-50 to-yellow-50 border border-green-100 rounded-3xl p-12 max-w-4xl mx-auto shadow-lg">


                        <blockquote className="text-2xl font-bold text-gray-900 mb-8 leading-relaxed">
                            "HEMU's support programs transformed our small dairy farm into a thriving business.
                            The fair pricing and timely payments gave us the stability we needed to grow."
                        </blockquote>

                        <div className="flex items-center justify-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-yellow-400 rounded-full flex items-center justify-center shadow-md">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-left">
                                <div className="text-gray-900 font-bold text-lg">Rajesh Kumar</div>
                                <div className="text-gray-600">Dairy Farmer, Dehradun</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncentiveFarmer;