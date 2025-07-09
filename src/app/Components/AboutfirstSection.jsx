import React from "react";
import Image from "next/image";

const AboutfirstSection = () => {
  return (
    <div className="max-w-full mx-auto p-6 bg-gray-100 rounded-lg mt-36 py-20">
      <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:w-[80%] mx-auto">
        {/* Left Content Section */}
        <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            The Objectives Of Compressed Bio-Gas (CBG)
          </h1>

          <div className="space-y-4">
            <div>
              <span className="font-bold text-gray-700 text-xl">
                Clean Energy Promotion:
              </span>
              <span className="text-gray-600 leading-relaxed text-justify text-[1.1rem] font-medium">
                The objective of promoting Compressed Bio-Gas is to create a
                renewable, eco-friendly alternative to fossil fuels. Derived
                from agricultural waste, animal dung, and municipal solid waste,
                CBG offers a clean energy solution that reduces dependency on
                imported fuels.
              </span>
            </div>

            <div>
              <span className="font-semibold text-gray-700 text-lg">
                Waste to Wealth:
              </span>
              <span className="text-gray-600 leading-relaxed text-justify text-[1.1rem] font-medium">
                CBG projects aim to transform organic waste into valuable fuel.
                This supports the Swachh Bharat (Clean India) mission by
                encouraging effective waste management while simultaneously
                generating energy and economic value.
              </span>
            </div>

            <div>
              <span className="font-semibold text-gray-700 text-xl">
                Rural Empowerment: 
              </span>
              <span className="text-gray-600 leading-relaxed text-justify text-[1.1rem] font-medium">
                CBG production enables rural entrepreneurship by creating
                decentralized energy systems. Farmers, cooperatives, and local
                enterprises can benefit economically through waste collection,
                CBG production, and distribution networks.
              </span>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 relative min-h-[100%]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Image
              src="/aboutsecond.jpg"
              alt="Solar panels installed in a green field"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutfirstSection;
