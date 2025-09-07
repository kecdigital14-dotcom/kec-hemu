import React from 'react';
import Link from "next/link";

const CbgProject = () => {
    const projects = [
        {
            id: 1,
            title: "CBG PLANT 4TPD",
            image: "/Project3.jpg",
            tags: ["Biodiesel", "Ethanol", "Process Automation"],
            description: "A modern CBG facility with advanced process automation ensuring efficient biogas output. The plant is designed to reduce carbon emissions while maximizing renewable fuel generation. It empowers local farmers by utilizing cattle dung and organic waste effectively."
        },
        {
            id: 2,
            title: "CBG PLANT 4TPD",
            image: "/Project4.jpg",
            tags: ["Pyrolysis", "Biogas", "Automation"],
            description: "This plant integrates pyrolysis and automation for sustainable green energy solutions. The facility helps in converting organic waste into clean energy, reducing dependency on fossil fuels. Its automated systems ensure consistent performance with minimal human intervention."
        },
        {
            id: 3,
            title: "CBG PLANT 4TPD",
            image: "/Project5.jpeg",
            tags: ["IoT Sensors", "Cloud Monitoring", "Logistics"],
            description: "Equipped with IoT-based monitoring, this project ensures real-time analytics and logistics tracking. Cloud integration provides operators with instant data access for smarter decisions. The plant sets a benchmark for digital innovation in renewable energy production."
        },
        {
            id: 4,
            title: "CBG PLANT 2TPD",
            image: "/Project6.jpeg",
            tags: ["Biodiesel", "Process Control", "SCADA"],
            description: "CBG facility with SCADA-driven process control for reliable energy and efficiency. The plant supports regional clean energy demand and promotes sustainable practices. It also serves as a model for scalable rural bioenergy projects across India."
        },
        {
            id: 5,
            title: "CBG PLANT 2TPD",
            image: "/Project7.jpeg",
            tags: ["Automation", "Process Control", "SCADA"],
            description: "This plant introduces automation and digital control systems for consistent energy output. The design ensures operational safety while minimizing downtime. Its advanced process control enhances fuel quality and optimizes resource utilization."
        },
        {
            id: 6,
            title: "CBG PLANT 2TPD",
            image: "/Project8.jpeg",
            tags: ["Green Energy", "SCADA", "Sustainability"],
            description: "A sustainable project designed for optimized energy production with smart monitoring tools. It contributes to reducing greenhouse gas emissions and improving rural energy security. The facility integrates eco-friendly operations with long-term economic benefits."
        }
    ];



    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        CBG Commissioned
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-3"></div>
                    <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        A collection of my completed projects showcasing various technologies and solutions
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden h-80">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    4TPD
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
                                    {/* {project.title} */}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 text-justify">
                                    {project.description}
                                </p>



                                {/* Live Demo Button */}

                                <Link href="https://kecbiofuel.com" >
                                    <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                                        <span className="flex items-center justify-center gap-2">
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-10L12 3l-9 9h3v9h6V12h6V21h3l-9-9z"
                                                />
                                            </svg>
                                            Live Demo
                                        </span>
                                    </button>
                                </Link>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-300 transition-colors duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Additional Stats or CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                                <div className="text-gray-600">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">4TPD</div>
                                <div className="text-gray-600">Processing Capacity</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                                <div className="text-gray-600">Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CbgProject;