import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full py-16 bg-linear-to-b from-black/30 to-black/72">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            About Us
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We build modern, fast and responsive web experiences using the
            latest technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="group bg-linear-to-br from-black/40 to-white/10 p-\[1px\] rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-xl/30">
            <div className="h-full rounded-2xl p-6 text-center backdrop-blur-md bg-white/10 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                Modern Design
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Clean, modern and user-friendly UI designs for all devices.
              </p>
              <button className="px-4 py-2 rounded-full text-sm text-white bg-white/20 backdrop-blur-md border border-white/30 shadow-md hover:bg-white/30 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-linear-to-br from-black/40 to-white/10 p-\[1px\] rounded-2xl shadow-xl transition-all duration-500 hover:scale-95 hover:shadow-xl/30">
            <div className="h-full rounded-2xl p-6 text-center backdrop-blur-md bg-white/10 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                Fast Performance
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Optimized code with best practices for fast performance.
              </p>
              <button className="px-4 py-2 rounded-full text-sm text-white bg-white/20 backdrop-blur-md border border-white/30 shadow-md hover:bg-white/30 transition">
                Explore
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-linear-to-br  from-black/40 to-white/10 p-\[1px\] rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl/30">
            <div className="h-full rounded-2xl p-6 text-center backdrop-blur-md bg-white/10 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                Fully Responsive
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Mobile, tablet aur desktop par perfect experience.
              </p>
              <button className="px-4 py-2 rounded-full text-sm text-white bg-white/20 backdrop-blur-md border border-white/30 shadow-md hover:bg-white/30 transition">
                View More
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-linear-to-br from-black/40 to-white/10 p-\[1px\] rounded-2xl shadow-xl transition-all duration-300 hover:translate-y-1 hover:shadow-xl/30">
            <div className="h-full rounded-2xl p-6 text-center backdrop-blur-md bg-white/10 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                Secure & Scalable
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Secure architecture with scalable solutions for growth.
              </p>
              <button className="px-4 py-2 rounded-full text-sm text-white bg-white/20 backdrop-blur-md border border-white/30 shadow-md hover:bg-white/30 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
