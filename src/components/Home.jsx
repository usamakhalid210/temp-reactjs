import React from 'react'
import { useState } from "react";
import { Menu, X } from "lucide-react";

import '../index.css'


export default function Hero() {
return (
<section className="relative min-h-screen w-full bg-linear-to-b from-black/10 to-black/70 text-white">
<div className="mx-auto max-w-7xl px-6 pt-40 pb-20">
<div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
{/* Left Content */}
<div className="space-y-6">
<span className="inline-block rounded-full border text-black/70 border-white/30 bg-white/30 px-4 py-1 text-sm backdrop-blur-md hover:scale-105 hover:shadow-xl-/30 duration-500 hover:text-black/90 hover:bg-black/5">
<a href="https://vercel.com/muhammad-usama-khalids-projects-2caa1ef1_blank" target="_blank">👋 Welcome to my website</a>
</span>


<h1 className="text-4xl font-bold leading-tight md:text-6xl">
Hi, I’m <span className="text-white/90">Usama</span>
<br />
<span className="bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
Web Developer
</span>
</h1>


<p className="max-w-xl text-white/70">
I design and build modern, responsive and high-quality websites
using React JS and Tailwind CSS. Clean UI, smooth animations and
performance-focused development.
</p>


<div className="flex flex-wrap gap-4 pt-4">
<button className="rounded-xl bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-xl-/30 ">
Get Started
</button>
<button className="rounded-xl border     px-6 py-3 transition-all duration-300 hover:bg-white/10  hover:scale-95 hover:shadow-xl-/30 hover:inset-shadow-sm/20">
<a href="https://wa.me/+923020400201"  target="_blank">Contact Me</a>
</button>
</div>
</div>
{/* 194858 */}

{/* Right Image */}
<div className="relative mx-auto w-full max-w-md">
<div className="absolute -inset-4 rounded-3xl bg-white/10 blur-2xl"></div>
<img
src="https://static.vecteezy.com/system/resources/thumbnails/035/592/452/small/businessmen-team-brainstorming-and-discussing-at-office-meeting-flat-design-character-png.png"
alt=""
className="relative z-10 w-full rounded-3xl object-contain"
/>
</div>
</div>
</div>
</section>
);
}

