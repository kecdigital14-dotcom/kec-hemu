"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ShoppingCart, ChevronDown, Zap, Leaf, Coffee } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const projectItems = [
    {
      title: "Renewable Energy Generation",
      icon: <Zap className="w-5 h-5" />,
      href: "https://kecbiofuel.com/",
      color: "text-blue-600",
      external: true
    },
    {
      title: "Agri – Inputs",
      icon: <Leaf className="w-5 h-5" />,
      href: "https://kisanexperience.com/",
      color: "text-green-600",
      external: true
    },
    {
      title: "Dairy, Bakery & Food Enterprises",
      icon: <Coffee className="w-5 h-5" />,
      href: "https://ucdfaanchal.com/",
      color: "text-orange-600",
      external: true
    }
  ];

  return (
    <div>
      {/* Green Top Bar - Hidden on Mobile */}
      <div className="hidden md:block bg-green-700 text-white py-3 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="font-medium">Send Your Mail</span>
              <span className="font-medium">ucdfktd@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Phone Number</span>
              <span className="font-medium">+91-05946-255867, 255385</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">Office Address</span>
            <span className="font-medium">
              UCDF, Mangal Paro, Haldwani, Uttarakhand, 263139
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="w-full bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex">
              <img
                src="/hemufooterlogo.png"
                alt="Logo"
                className="h-16 object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 font-sans font-bold">
              <a href="/" className="nav-link active">Home</a>
              <a href="/about" className="nav-link">About Us</a>
              <a href="/services" className="nav-link">Our Services</a>

              {/* Projects with Dropdown */}
              <div className="relative">
                <button
                  className="nav-link flex items-center space-x-1 group"
                  onClick={() => handleDropdownToggle("projects")}
                >
                  <span>Our Projects</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "projects" ? "rotate-180" : ""
                    }`} />
                </button>

                {activeDropdown === "projects" && (
                  <div className="absolute top-full left-0 mt-2 w-60 bg-white shadow-2xl rounded-2xl border border-gray-100 py-4 z-50 animate-fadeIn">
                    {/* Header */}
                    <div className="px-6 pb-2 pt-1 border-b border-gray-100 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-orange-50 transition-all duration-200">
                      <Link href="/project">
                        <h3 className="text-lg font-bold text-gray-800 hover:text-green-700 cursor-pointer">
                          Our Projects
                        </h3>

                        <p className="text-sm text-gray-500 ">Explore our innovative solutions</p>
                      </Link>
                    </div>

                    {/* Project Items */}
                    <div className="py-2">
                      {projectItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="group flex items-start px-6 py-4 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all duration-200 border-l-4 border-transparent hover:border-yellow-400"
                        >
                          <div className={`flex-shrink-0 mt-0.5 ${item.color} group-hover:scale-110 transition-transform duration-200`}>
                            {item.icon}
                          </div>
                          <div className="ml-4 flex-1">
                            <h4 className="text-sm font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-200">
                              {item.title}
                            </h4>
                          </div>
                          {item.external && (
                            <div className="flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="/socialresponsibility" className="nav-link">Social Responsibility</a>
              <a href="/contact" className="nav-link">Contact Us</a>
            </nav>

            {/* Shop Now Button */}
            <div className="hidden lg:flex items-center mr-16">
              <a
                href="/product"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Shop Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white py-4">
              <div className="flex flex-col space-y-3">
                <a href="/" className="mobile-nav-link">Home</a>
                <a href="/about" className="mobile-nav-link">About Us</a>
                <a href="/services" className="mobile-nav-link">Our Services</a>

                {/* Projects Submenu for Mobile */}
                <div className="flex flex-col">
                  <button
                    className="mobile-nav-link font-bold flex items-center justify-between"
                    onClick={() => handleDropdownToggle("mobileProjects")}
                  >
                    <span>Our Projects</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "mobileProjects" ? "rotate-180" : ""
                      }`} />
                  </button>

                  {activeDropdown === "mobileProjects" && (
                    <div className="mt-2 mx-4 bg-gray-50 rounded-lg p-3 space-y-3">
                      {projectItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-transparent hover:border-yellow-400"
                        >
                          <div className={`flex-shrink-0 ${item.color}`}>
                            {item.icon}
                          </div>
                          <div className="ml-3 flex-1">
                            <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a href="/socialresponsibility" className="mobile-nav-link">Social Responsibility</a>
                <a href="/contact" className="mobile-nav-link">Contact Us</a>

                <div className="pt-4">
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 shadow-md">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Shop Now</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Custom Styles */}
      <style jsx>{`
        .nav-link {
          @apply text-gray-700 font-medium text-sm px-4 py-2 rounded-lg transition-all duration-200 relative whitespace-nowrap;
        }
        .nav-link.active {
          @apply text-yellow-500 bg-yellow-50 font-semibold;
        }
        .dropdown-link {
          @apply block px-4 py-2 text-gray-700 hover:text-yellow-500 hover:bg-yellow-50 transition-colors duration-200;
        }
        .mobile-nav-link {
          @apply block px-4 py-3 text-gray-700 font-medium hover:text-yellow-500 hover:bg-yellow-50 transition-colors duration-200 rounded-lg mx-2;
        }
        .mobile-nav-link:hover {
          @apply bg-yellow-50 text-yellow-500;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
