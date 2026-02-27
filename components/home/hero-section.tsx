"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Play,
  Facebook,
  Linkedin,
  Instagram,
  ArrowDown,
  Youtube,
} from "lucide-react";

import { Kanit } from "next/font/google";
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["500"],
});

export function HeroSection() {
  const [currentHeading, setCurrentHeading] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      heading: (
        <div className={kanit.className}>
          MORE THAN AN <br />
          <span className="gold-fill" data-text="ADVERTISING">
            ADVERTISING
          </span>{" "}
          AGENCY
        </div>
      ),
      image: "/images/shashikantsirr.webp",
    },
    {
      id: 2,
      heading: (
        <div className={kanit.className}>
          IMPROVE YOUR <br />
          <span className="gold-fill" data-text="BUSINESS">
            BUSINESS
          </span>{" "}
          TODAY
        </div>
      ),
      image: "/images/Vijayantsir.webp",
    },
    {
      id: 3,
      heading: (
        <div className={kanit.className}>
          WE ARE <br />
          <span className="gold-fill" data-text="ENERGETIC">
            ENERGETIC
          </span>
        </div>
      ),
      image: "/images/neetamadamm.webp",
    },
  ];

  useEffect(() => {
  const interval = setInterval(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentHeading((prev) => (prev % 3) + 1);
      setIsAnimating(false);
    }, 300);
  }, 4000);

  return () => clearInterval(interval);
}, []);

  const activeSlide = slides.find((s) => s.id === currentHeading);

  

  

  return (
<section className="relative bg-black text-white overflow-hidden min-h-[75vh] md:min-h-screen">      {/* Background */}
  <div className="absolute inset-0 -z-10 bg-black md:hidden" />
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src="/images/hero-bg.jpg"
          alt="Prosira background"
          fill 
          priority
          sizes="100vw"
          quality={75}
          className="object-cover opacity-50"
           fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Main Content */}
<div className="site-container pt-14 pb-0 grid lg:grid-cols-2 gap-12 items-end">        {/* LEFT TEXT */}
        <div className="space-y-8 text-center lg:text-left">

          <span className="inline-flex px-5 py-2 rounded-full border border-primary/40 text-primary text-sm tracking-wide">
            ✦ Leading Advertising Agency in Pune
          </span>
<div className="relative min-h-[180px] sm:min-h-[220px] md:min-h-[260px]">  <div
    key={currentHeading}
    className={`absolute inset-0 transition-all duration-700 ease-in-out transform-gpu ${
      isAnimating
        ? "opacity-0 translate-y-4 scale-95"
        : "opacity-100 translate-y-0 scale-100"
    }`}
  >
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
      {activeSlide?.heading}
    </h1>
  </div>
</div>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0">
            Prosira Advertisers delivers powerful TV, radio, outdoor,
            digital marketing and branding solutions that grow businesses.
          </p>

<div className="flex gap-4 flex-wrap justify-center lg:justify-start mb-10">            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-black px-8 md:px-12 py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              Get Started <ArrowRight size={18} />
            </Link>

            <Link
              href="/about-prosira-advertisers"
              className="inline-flex items-center gap-2 border border-white/30 px-8 md:px-12 py-3 rounded-lg hover:bg-white/10 transition"
            >
              <Play size={18} />
              Our Story
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
<div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] h-auto overflow-hidden rounded-xl md:shadow-2xl">
            {activeSlide && (
              <Image
  key={activeSlide.image}
  src={activeSlide.image}
  alt="Prosira team member"
  width={420}
  height={560}
  className={`object-contain w-full h-auto transition-all duration-700 ${
    isAnimating ? "opacity-0 scale-105" : "opacity-100 scale-100"
  }`}
/>
            )}

            <div className="absolute inset-0 rounded-xl ring-2 ring-primary/30" />
          </div>
        </div>
      </div>

      {/* SOCIAL COLUMN */}
<div className="hidden lg:flex flex-col items-center gap-6 absolute right-10 top-12">        <span className="text-xs tracking-widest text-gray-400 [writing-mode:vertical-rl]">
          FOLLOW&nbsp;US
        </span>
        <div className="w-px h-16 bg-gray-600" />

        {[Facebook, Youtube, Linkedin, Instagram].map((Icon, i) => (
          <div
            key={i}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-black transition cursor-pointer"
          >
            <Icon size={18} />
          </div>
        ))}

        <div className="w-px h-16 bg-gray-600" />
        <ArrowDown className="animate-bounce text-gray-400" />
      </div>

      {/* MARQUEE */}
<div className="w-full bg-primary text-black py-3 overflow-hidden">
  <div className="marquee">
    <div className="marquee-inner">
      <span>
        UI/UX Design ✳ Website Design ✳ Mobile Application ✳ Digital Marketing ✳ Branding ✳ Outdoor Advertising ✳
      </span>
      <span>
        UI/UX Design ✳ Website Design ✳ Mobile Application ✳ Digital Marketing ✳ Branding ✳ Outdoor Advertising ✳
      </span>
    </div>
  </div>
</div>

    </section>
  );
}