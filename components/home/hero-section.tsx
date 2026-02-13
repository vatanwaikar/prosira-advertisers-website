"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Play,
  Facebook,
  Twitter,
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
      <div className={`${kanit.className}`}>
        MORE THAN AN <br />
        <span className="gold-fill" data-text="ADVERTISING">
          ADVERTISING
        </span>{" "}
        AGENCY
      </div>
    ),
    image: "/images/ss.png",
  },
  {
    id: 2,
    heading: (
      <div className={`${kanit.className}`}>
        IMPROVE YOUR <br />
        <span className="gold-fill" data-text="BUSINESS">
          BUSINESS
        </span>{" "}
        TODAY
      </div>
    ),
    image: "/images/vs.png",
  },
  {
    id: 3,
    heading: (
      <div className={`${kanit.className}`}>
        WE ARE <br />
        <span className="gold-fill" data-text="ENERGETIC">
          ENERGETIC
        </span>
      </div>
    ),
    image: "/images/nm.png",
  },
];


  /* Auto Rotation */
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">

      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Abstract pattern"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 w-full flex flex-col h-screen">
        <div className="site-container py-24 grid lg:grid-cols-2 gap-12 items-center flex-1">

          {/* LEFT TEXT */}
          <div className="space-y-8">

          <span className="inline-flex px-5 py-2 rounded-full border border-primary/40 text-primary text-sm tracking-wide">
            ✦ Leading Advertising Agency in Pune
          </span>

          <h1
            className={`text-3xl md:text-4xl lg:text-6xl font-bold leading-tight transition-all duration-500 ${
              isAnimating
                ? "blur-sm opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            }`}
          >
            {activeSlide?.heading}
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl">
            Prosira Advertisers delivers powerful TV, radio, outdoor,
            digital marketing and branding solutions that grow businesses.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              Get Started <ArrowRight size={18} />
            </Link>

            <Link
              href="/about-prosira-advertisers"
              className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 rounded-lg hover:bg-white/10 transition"
            >
              <Play size={18} />
              Our Story
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE (Changes With Heading) */}
        <div className="hidden lg:flex justify-center relative flex-1">

          <div className="relative w-[400px] h-full overflow-hidden rounded-xl shadow-2xl transition-all duration-700">

            <Image
              key={activeSlide?.image}
              src={activeSlide?.image || ""}
              alt="Hero Image"
              fill
              className={`object-cover transition-all duration-700 ${
                isAnimating ? "opacity-0 scale-105" : "opacity-100 scale-100"
              }`}
            />

            <div className="absolute inset-0 rounded-xl ring-2 ring-primary/30" />
          </div>
        </div>
        
        {/* Right Social Column - Fixed positioning outside flow */}
        <div className="hidden lg:flex flex-col items-center gap-6 fixed top-1/2 -translate-y-1/2 z-20 right-8">


  <span className="rotate-90 text-xs tracking-widest text-gray-400">
    FOLLOW US
  </span>

  <div className="w-px h-16 bg-gray-600" />

  <Link
    href="https://www.facebook.com/share/1DnoEvbjBx/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-black transition"
  >
    <Facebook size={18} />
  </Link>

  <Link
    href="https://www.youtube.com/@Prosira"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-black transition"
  >
    <Youtube size={18} />
  </Link>

  <Link
    href="https://www.linkedin.com/company/prosiraadvertisers/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-black transition"
  >
    <Linkedin size={18} />
  </Link>

  <Link
    href="https://www.instagram.com/prosira_advertisers?igsh=MXc3bjkwb2h3aThq"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-black transition"
  >
    <Instagram size={18} />
  </Link>

  <div className="w-px h-16 bg-gray-600" />

  <ArrowDown className="animate-bounce text-gray-400" />
        </div>
      </div>
    
      {/* Bottom Marquee - Full width bar */}
<div className="absolute bottom-0 left-0 w-full bg-primary text-black py-4 z-30">
  <div className="marquee-track whitespace-nowrap text-lg font-semibold tracking-wide">
    UI/UX Design ✳ Website Design ✳ Mobile Application ✳ Digital Marketing ✳ Branding ✳ Outdoor Advertising ✳
    &nbsp;&nbsp;&nbsp;
    UI/UX Design ✳ Website Design ✳ Mobile Application ✳ Digital Marketing ✳ Branding ✳ Outdoor Advertising ✳
  </div>
</div>




    </section>
  );
} 

