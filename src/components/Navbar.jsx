import { useState } from "react";
import { Menu, X } from "lucide-react";

import '../index.css'


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Main", "About", "Services", "Contact", "Email"];

  return (
    <header className="fixed top-0 left-0 w-full z-50  ">
      <nav className="mx-auto max-w-7xl px-6 py-4 ">
        <div className="flex items-center justify-between rounded-2xl bg-black/30 backdrop-blur-xl px-6 py-3  shadow-xl/10 ">
          {/* Logo */}
          <span className=" inset-shadow-sm/15 bg-black/5 text-lg font-semibold tracking-wide text-white cursor-pointer group-hover:text-black/60 hover:scale-105 duration-500 hover: hover:bg-transparent  hover:text-white  shadow-xl/15     rounded-xl   px-3 py-2 hover:shadow-xl/30  transition ">
            MyLogo
          </span>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10 text-sm text-white/70">
            {links.map((link) => (
              <li
                key={link}
                className="group relative cursor-pointer transition-all duration-500  hover:scale-110  rounded-lg shadow-xl/13 inset-shadow-sm/10 px-2 py-1 hover:shadow-xl/30   hover:inset-shadow-sm/10 bg-black/5  "
              >
                <span className="transition-colors duration-300 group-hover:text-white   ">
                  {link}
                </span>
                {/* underline */}
                <span className="absolute -bottom-1 left-1/2 h-\[2px\] w-0 -translate-x-1/2 rounded-full bg-white transition-all duration-300 group-hover:w-full "></span>
                {/* glow */}
                <span className="absolute inset-0 -z-10 rounded-lg opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40 bg-white/20 "></span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="rounded-xl px-4 py-2 text-sm text-white/80 transition       duration-800 hover:text-white  hover:opacity-300 scale-105 hover:scale-95 hover:bg-white/10 hover:shadow-xl/30 shadow-xl/13  hover:inset-shadow-sm/20  inset-shadow-sm/10  ">
              Sign In
            </button>
            <button className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition duration-300 hover:scale-105">
              Sign Up
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-3 overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl transition-all duration-500  ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-6 px-6 py-6 text-white/90">
            {links.map((link) => (
              <li
                key={link}
                className="cursor-pointer text-base transition hover:translate-x-1 hover:text-white "
              >
                {link}
              </li>
            ))}
            <div className="flex gap-3 pt-2">
              <button className="flex-1 rounded-xl border border-white/20 py-2 text-sm transition hover:bg-white/10 ">
                Sign In
              </button>
              <button className="flex-1 rounded-xl bg-white py-2 text-sm font-medium text-black transition hover:scale-105">
                Sign Up
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}
