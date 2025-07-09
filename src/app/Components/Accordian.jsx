"use client";

import { useState } from "react";

export default function Accordian() {
  const [openAccordion, setOpenAccordion] = useState(1);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqData = [
    {
      id: 1,
      question: " How do I know if CBG is right for my business or farm?",
      answer:
        "Compressed Bio Gas is ideal for industries, transport fleets, and even rural areas with agro-waste availability. If you generate organic waste (like agri residue, cow dung, food waste), CBG can turn it into valuable fuel. Our experts can evaluate your location and guide you on feasibility, ROI, and plant setup.",
    },
    {
      id: 2,
      question: "Can CBG be used during the monsoon or in humid climates?",
      answer:
        "Yes. CBG plants are designed to operate year-round, including in rainy or humid weather. While feedstock handling may require slight adjustments, gas production remains stable with proper process control and covered storage.",
    },
    {
      id: 3,
      question: " Can I become energy independent with a CBG plant?",
      answer:
        "Absolutely. A well-designed CBG plant can help industries, transport depots, or farms reduce dependence on fossil fuels, LPG, or diesel. It also supports grid-independence when paired with biogas-powered generators or microgrids.",
    },
    {
      id: 4,
      question: "What happens if there's a technical fault or gas production drops?",
      answer:
        "Our systems are built with monitoring tools to track performance. In case of issues like feedstock inconsistency or pressure drops, automatic alerts are triggered. Our technical team offers both remote support and on-ground maintenance to ensure continuous operation.",
    },
  ];

  return (
    <div className="max-w-full mx-auto p-6 bg-gray-50 min-h-screen px-36">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <span className="text-lg font-bold">+</span>
          SOLAR FAQ
        </div>
        <h1 className="text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h1>
      </div>

      {/* Main Content - Image Left, Accordion Right */}
      <div className="grid grid-cols-1 lg:flex gap-8 mb-8">
        {/* Image - Left Side */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <img
            src="/faq7.jpg"
            alt="Solar Energy Solution"
            className="w-[80%] h-[480px] mx-auto object-cover rounded-lg shadow-2xl"
          />
        </div>

        {/* Accordion - Right Side */}
        <div className="w-full lg:w-1/2 space-y-4 flex flex-col">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className={`border rounded-lg transition-all duration-300 ${
                openAccordion === faq.id
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg font-medium text-gray-900">
                    {faq.id}.
                  </span>
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  {openAccordion === faq.id ? (
                    <span className="text-xl font-bold text-gray-600">−</span>
                  ) : (
                    <span className="text-xl font-bold text-gray-600">+</span>
                  )}
                </div>
              </button>

              {openAccordion === faq.id && (
                <div className="px-6 pb-4 animate-in slide-in-from-top-2 duration-300">
                  <div className="pl-8">
                    <p className="text-gray-700 leading-relaxed text-sm font-normal">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Still have questions about CBG ?
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-lg transition-colors">
          Contact Our CBG Experts
        </button>
      </div>
    </div>
  );
}
