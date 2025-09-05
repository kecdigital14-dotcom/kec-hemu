'use client';
import React from 'react';
import Image from 'next/image';

const Aboutbanner = ({
  bannertitle = "About us",
  tagline = "HEMU — An Innovation-led Initiative of UCDF & KEC Joint Venture",
  bannerImage = "/allpagesbanner.png"
}) => {
  return (
    <div className="relative z-0 w-full h-[40vh] md:h-[70vh] lg:h-[75vh] overflow-hidden">
       
      {/* Background Image */}
      <Image
        src={bannerImage}
        alt={bannertitle || "Banner Image"}
        fill
        priority
        className="object-cover object-center z-0"
      />
       
      {/* Optional Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-10" />
       
      {/* Text Content Container - Styled to match industrial/metallic background */}
      <div className="absolute left-1/2 bottom-[-100px] -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-xl text-center px-4 md:pb-0 pb-4">
        
        {/* Glass-morphism container that matches the industrial aesthetic */}
        <div className="bg-slate-700/40 backdrop-blur-md rounded-3xl shadow-2xl px-6 md:px-6 pb-4 pt-4">
          
          {/* Banner Title */}
          {bannertitle && (
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 leading-tight drop-shadow-sm">
              {bannertitle}
            </h1>
          )}
          
          {/* Tagline */}
          {tagline && (
            <p className="text-white bg-slate-700/40 py-1 backdrop-blur-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-base font-medium tracking-wide leading-relaxed drop-shadow-sm pb-2 max-w-sm mx-auto px-4">
              {tagline}
            </p>
          )}
          
        </div>
        
      </div>
       
    </div>
  );
};

export default Aboutbanner;