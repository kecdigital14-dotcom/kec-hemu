"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function Abouttestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote: "Tempora, cum soluta nobis est apio cumque nihil impedit quo minus ide maxime placeat facere possimus nia voluptas assumenda est, omni dolor repellendus emaribus autem quibusdam et aut officiis.",
      name: "Paul Scholes",
      role: "Customer",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 2,
      quote: "Doloramus laudantium totam rem aperiam eaque lesa zuae ab illo inventore veritatis et ua i architecto beatae vitae dicta sunt explicabo nemo am voluptatem vitae dicta sunfruita.enim is am voluptatem nula.",
      name: "Monica Lisa",
      role: "Customer",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 3,
      quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      name: "John Anderson",
      role: "Customer",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 4,
      quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      name: "Sarah Johnson",
      role: "Customer",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 5,
      quote: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      name: "Mike Wilson",
      role: "Customer",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 6,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Emily Davis",
      role: "Customer",
      avatar: "/api/placeholder/60/60"
    }
  ];

  // Calculate total slides (pairs of testimonials)
  const totalSlides = Math.ceil(testimonials.length / 2);

  // Auto-scroll functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // Get testimonials for current slide
  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-600 text-sm font-medium rounded-full mb-4 tracking-wider uppercase">
            Testimonial
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            What Our Clients Say About Us
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative ">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-green-50"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-green-50"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div className="overflow-hidden pt-4">
            <div
              ref={scrollContainerRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                  <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                      <div key={testimonial.id} className="w-full">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative h-full flex flex-col">
                          {/* Quote Icon */}
                          <div className="absolute -top-4 left-8">
                            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shadow-lg">
                              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                              </svg>
                            </div>
                          </div>

                          {/* Quote Text */}
                          <div className="mt-8 mb-8 flex-grow">
                            <p className="text-gray-700 text-lg leading-relaxed">
                              "{testimonial.quote}"
                            </p>
                          </div>

                          {/* Author */}
                          <div className="flex items-center space-x-4 mt-auto">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                              <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                                <span className="text-white font-semibold text-lg">
                                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-gray-900 font-semibold text-lg">
                                {testimonial.name}
                              </h4>
                              <p className="text-gray-500 text-sm">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>

                          {/* Decorative elements */}
                          <div className="absolute top-4 right-4 w-20 h-20 bg-green-50 rounded-full -z-10"></div>
                          <div className="absolute bottom-4 left-4 w-16 h-16 bg-gray-50 rounded-full -z-10"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-green-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-xs mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-green-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}