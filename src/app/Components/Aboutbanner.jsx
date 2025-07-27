'use client';
import React from 'react';
import Image from 'next/image';

const Aboutbanner = ({ bannertitle }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/aboutbanner.jpg"
        alt="Wind turbines on rolling hills with blue sky"
        fill
        className="object-cover object-center z-0 fixed top-0 left-0 w-full h-full"
        priority
      />

      {/* Optional Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-20 z-10" /> */}

      {/* Centered Content */}
      <div className="relative z-20 max-w-4xl w-full mx-auto px-4 py-16 top-36">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 md:p-10 text-center transform hover:scale-105 transition-all duration-300">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
            {bannertitle}
          </h1>
          <p className="text-base md:text-xl text-gray-700 font-medium leading-relaxed">
            Renewable Energy for a Sustainable World.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutbanner;
