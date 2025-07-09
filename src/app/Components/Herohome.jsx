"use client";
import React from "react";

const SolarHeroSection = () => {
  // Floating keyframes
  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via---ztc-bg-bg-10 to-slate-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Stars */}
        <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-blue-200 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-48 left-1/4 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-100 rounded-full animate-pulse delay-700"></div>

        {/* Geometric Shapes */}
        <div
          className="absolute top-1/4 right-20 w-32 h-32 border border-blue-400/20 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="absolute bottom-1/4 left-20 w-16 h-16 border border-green-400/20 rotate-45 animate-pulse"></div>

        {/* Radial Lines */}
        <div className="absolute top-20 right-40">
          <div className="w-24 h-24 relative">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-12 bg-gradient-to-t from-transparent to-blue-300/30 origin-bottom"
                style={{
                  transform: `rotate(${i * 45}deg)`,
                  transformOrigin: "50% 100%",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 text-sm text-slate-300">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>COMPRESSED BIO GAS</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-bold text-white leading-tight">
                Fuel the Future with
                <br />
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Compressed Bio Gas
                </span>
              </h1>
              <p className="text-md text-slate-300 max-w-lg leading-relaxed">
                Our advanced CBG solutions turn organic waste into clean,
                affordable, and sustainable energy — helping reduce carbon
                emissions and supporting a greener tomorrow.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                <span className="flex items-center gap-2">
                  Get Started
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>

              <button className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative w-full max-w-2xl mx-auto">
            <div
              className="relative mx-auto aspect-square w-80 sm:w-96 md:w-96 lg:w-[420px] xl:w-[550px] pt-6"
              style={{
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <img
                src="/herobannerthree.png"
                alt="CBG Energy Solution"
                className="w-[80%] h-[80%] object-cover rounded-full shadow-2xl mt-[10px]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 rounded-full"></div>
            </div>

            {/* Floating Elements */}
            <div
              className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-bounce"
              style={{ animationDuration: "3s" }}
            ></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-pulse"></div>

            {/* Energy Waves */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-green-400/20 rounded-full animate-ping"></div>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border-2 border-blue-400/20 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarHeroSection;
