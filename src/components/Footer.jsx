import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-b from-black/72 to-black/80 text-white/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Usama Dev Studio</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We build modern, fast and scalable web applications using React,
              Tailwind CSS and modern tools. Our focus is performance, design and
              user experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="Home" className="hover:text-white transition">Home</a></li>
              <li><a href="Navbar" className="hover:text-white transition">About</a></li>
              <li><a href="Services" className="hover:text-white transition">Services</a></li>
              <li><a href="Footer" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} /> <span> <a href="https://wa.me/+923020400201" target="blank">+92 302 0400201</a> </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> <span> <a href="mailto:usamakhaliddomain@gmail.com">usamakhaliddomain@gmail.com</a></span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/in/usama-khalid-281904377/" target="blank" className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Usama Dev Studio. All rights reserved.</p>
          <p>Designed & Developed by Muhammad Usama Khalid</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
