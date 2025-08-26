"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ShoppingCart, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div>
      {/* Green Top Bar */}
      <div className="bg-green-700 text-white py-3 px-4 text-sm">
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
            <span className="font-medium">UCDF, Mangal Paro, Haldwani, Uttarakhand, 263139</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="w-full bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex w-56 relative">
              <img src="/logoheader.png" alt="" className="h-auto w-auto object-contain" />
              <span className="text-2xl font-bold text-yellow-500 absolute top-4 left-[160px]">HEMU</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 font-sans font-bold">
              <a href="/" className="nav-link active">
                Home
              </a>
              <a href="/about" className="nav-link">
                About Us
              </a>
              <a href="/services" className="nav-link">
                Our Services
              </a>
              <a href="/project" className="nav-link">
                Our Projects
              </a>
              <a href="/socialresponsibility" className="nav-link">
                Social Responsibility
              </a>

              {/* <div className="relative">
                <button 
                  className="nav-link flex items-center space-x-1"
                  onMouseEnter={() => setActiveDropdown('training')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span> Our Products</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'training' && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50">
                    <a href="#" className="dropdown-link">Farmer Training</a>
                    <a href="#" className="dropdown-link">Technical Programs</a>
                    <a href="#" className="dropdown-link">Skill Development</a>
                  </div>
                )}
              </div> */}

              <a href="/contact" className="nav-link">
                Contact Us
              </a>
            </nav>

            {/* Shop Now Button */}
            <div className="hidden lg:flex items-center mr-16">
              <a
                href="/product"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-colors duration-200"
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
                <a href="#" className="mobile-nav-link">UCDF</a>
                <a href="/milk-union" className="mobile-nav-link">Milk Union</a>
                <a href="#" className="mobile-nav-link">UCDF Unit</a>
                <a href="/products" className="mobile-nav-link">Our Products</a>
                <a href="#" className="mobile-nav-link">Training & Programs</a>
                <a href="#" className="mobile-nav-link">Social Responsibility</a>
                <a href="/quality" className="mobile-nav-link">Quality and food safety</a>
                <a href="#" className="mobile-nav-link">Tender & Notice</a>
                <a href="/gallery" className="mobile-nav-link">Gallery</a>
                <a href="/contact" className="mobile-nav-link">Contact Us</a>
                <div className="pt-4">
                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200">
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
          @apply text-gray-700 font-medium text-sm px-4 py-2 rounded-lg transition-all duration-200 hover:text-yellow-500 hover:bg-yellow-50 relative whitespace-nowrap;
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