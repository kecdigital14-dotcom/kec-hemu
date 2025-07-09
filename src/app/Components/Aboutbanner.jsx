'use client';
import React from 'react';
import Image from 'next/image';

const Aboutbanner = ({bannertitle}) => {
  return (
    <div className="relative w-full h-[490px] overflow-hidden flex items-center justify-center ">
      {/* Background Image */}
      <Image
        src="/aboutbanner.jpg"
        alt="Wind turbines on rolling hills with blue sky"
        fill
        className="object-cover"
        priority
      />

      {/* Optional Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-20 z-0" /> */}

      {/* Centered Content */}
      <div className="relative z-20 max-w-4xl w-full mx-auto px-4 top-44 border-red-400 shadow-4xl">
        <div className="bg-white/100 rounded-2xl shadow-2xl p-6 md:p-10 lg:p-8 transform hover:scale-105 transition-all duration-300 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
            {bannertitle}
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed">
            Renewable Energy for a Sustainable World.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutbanner;
