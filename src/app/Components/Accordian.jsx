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
  question: "Is CBG suitable for my farm or business?",
  answer:
    "Yes. Farms and businesses generating organic waste (crop residue, cow dung, food waste) can convert it into clean energy and additional income. HEMU experts guide you on feasibility, ROI, and plant setup.",
},
{
  id: 2,
  question: "Can I achieve energy independence with a CBG plant?",
  answer:
    "Absolutely. Properly sized plants can meet your energy needs, reduce reliance on conventional fuels, and provide surplus energy for local use.",
},
{
  id: 3,
  question: "How does HEMU support dairy farmers?",
  answer:
    "Through UCDF’s cooperative network, we provide milk collection, quality testing, processing, and bottling, ensuring better income and farm-to-consumer quality.",
},
{
  id: 4,
  question: "Does HEMU provide fertiliser solutions?",
  answer:
    "Yes. By-products from dairy and CBG operations are converted into organic fertiliser, enriching soil and promoting sustainable farming practices.",
},
{
  id: 5,
  question: "What support is available for rural entrepreneurship (e.g., bakery)?",
  answer:
    "HEMU offers training, small-scale bakery setups, and integration of renewable energy, enabling farmers and rural entrepreneurs to generate additional income.",
},
{
  id: 6,
  question: "What technical and operational support does HEMU provide?",
  answer:
    "We provide 24/7 consultation and monitoring across CBG, dairy, fertiliser, and bakery operations, ensuring consistent performance and sustainability.",
},


  ];

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-36 py-8 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <span className="text-lg font-bold">+</span>
          HEMU FAQ
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-start">
        {/* Image Section */}
        <div className="w-full">
          <img
            src="/faq7.jpg"
            alt="Solar Energy Solution"
            className="w-full max-w-md mx-auto h-[360px] sm:h-[400px] lg:h-[480px] object-cover rounded-lg shadow-2xl"
          />
        </div>

        {/* Accordion Section */}
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className={`border rounded-lg transition-all duration-300 ${openAccordion === faq.id
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white"
                }`}
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2 sm:gap-4 text-sm sm:text-base">
                  <span className="font-medium text-gray-900">{faq.id}.</span>
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                </div>
                <span className="text-xl font-bold text-gray-600">
                  {openAccordion === faq.id ? "−" : "+"}
                </span>
              </button>
              {openAccordion === faq.id && (
                <div className="px-4 sm:px-6 pb-4 animate-in slide-in-from-top-2 duration-300">
                  <div className="pl-6 sm:pl-8">
                    <p className="text-gray-700 leading-relaxed text-sm font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Still have questions about CBG?
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition">
          Contact Our CBG Experts
        </button>
      </div>
    </div>
  );
}
