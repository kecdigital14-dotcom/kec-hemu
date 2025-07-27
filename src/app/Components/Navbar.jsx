"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <img className="h-10 w-auto" src="/logoheader.png" alt="Logo" />
                <p className="sr-only">Website Title</p>
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex md:items-center md:justify-center md:gap-8 font-bold text-xl px-12">
              <a className="nav-link" href="/">Home</a>
              <a className="nav-link" href="/about">About us</a>
              <a className="nav-link" href="/project">Our Projects</a>
              <a className="nav-link" href="/contact">Contact us</a>
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-800 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
            <div className="md:hidden">
              <div className="mt-4 flex flex-col space-y-3 bg-gray-100 rounded-xl px-6 py-4 shadow font-bold">
                <a className="nav-link" href="/">Home</a>
                <a className="nav-link" href="/about">About us</a>
                <a className="nav-link" href="/project">Our Projects</a>
                <a className="nav-link" href="/contact">Contact us</a>
              </div>
            </div>
          )}


        </div>
      </header>

      {/* Tailwind Custom Reusable Class (Optional) */}
      <style jsx>{`
        .nav-link {
          @apply inline-block rounded-lg px-2 py-1 text-xl font-bold text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
