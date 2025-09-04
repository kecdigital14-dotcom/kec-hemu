


'use client';
import React from 'react';
import Image from 'next/image';

const Aboutbanner = ({ bannertitle, bannerImage = "/Aboutusbanner.png" }) => {
  return (
    <div className="relative w-full min-h-[460px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={bannerImage}
        alt={bannertitle || "Banner Image"}
        fill
        className="object-cover object-center z-0 fixed top-0 left-0 w-full h-full"
        priority
      />

      {/* Optional Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-20 z-10" /> */}     
    </div>
  );
};

export default Aboutbanner;
