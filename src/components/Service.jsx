import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Modern and scalable web applications.",
      icon: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
    },
    {
      title: "UI / UX Design",
      desc: "Clean, user-friendly and modern designs.",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB7ojEz8kjDZsc6uPB1NWOFwt6gST_yc1wxQ&s",
    },
    {
      title: "React Development",
      desc: "Fast and reusable React components.",
      icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    },
    {
      title: "E-Commerce Solutions",
      desc: "Online stores with secure payments.",
      icon: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png",
    },
    {
      title: "Performance Optimization",
      desc: "Speed and SEO optimized websites.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    },
    {
      title: "Maintenance & Support",
      desc: "Regular updates and bug fixes.",
      icon: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
    },
  ];

  return (
    <section className="w-full py-20 bg-linear-to-b from-black/70 to-black/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We provide high‑quality services to help grow your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-linear-to-br from-black/40  to-white/10 p-px rounded-2xl shadow-xl transition-all duration-500 hover:scale-105  hover:shadow-xl/30 hover:inset-shadow-sm/20  "
            >
              <div className="h-full rounded-2xl p-8 backdrop-blur-md bg-white/10 border border-white/20 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/70 backdrop-blur-md flex items-center justify-center shadow-md">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
