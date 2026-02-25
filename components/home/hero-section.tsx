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
      image: "/images/shashikantsirr.webp",
      touchMarquee: true,
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
      image: "/images/Vijayantsir.webp",
      touchMarquee: true,
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
      image: "/images/neetamadamm.webp",
      touchMarquee: true,
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
          src="/images/hero-bg.jpg"
          alt="Prosira Advertisers abstract background"
          fill
          priority
          sizes="100vw"
          className="object-contain object-right opacity-60"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content Grid */}
<div className="relative z-10 site-container pt-12 pb-24 grid lg:grid-cols-2 gap-12 items-center">
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
              className="inline-flex items-center gap-2 bg-primary text-black px-12 py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              Get Started <ArrowRight size={18} />
            </Link>

            <Link
              href="/about-prosira-advertisers"
              className="inline-flex items-center gap-2 border border-white/30 px-12 py-3 rounded-lg hover:bg-white/10 transition"
            >
              <Play size={18} />
              Our Story
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:flex justify-center relative h-screen">
          <div className="relative w-full max-w-[400px] h-full overflow-hidden rounded-xl shadow-2xl transition-all duration-700">

            {activeSlide && (
              <Image
                key={activeSlide.image}
                src={activeSlide.image}
                alt="Prosira team member"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className={`object-contain transition-all duration-700 ${
                  isAnimating ? "opacity-0 scale-105" : "opacity-100 scale-100"
                }`}
              />
            )}

            <div className="absolute inset-0 rounded-xl ring-2 ring-primary/30" />
          </div>
        </div>
      </div>

      {/* Right Social Column */}
      <div className="hidden lg:flex flex-col items-center gap-6 absolute right-10 top-17 z-20">
  <span className="text-xs tracking-widest text-gray-400 [writing-mode:vertical-rl]">
    FOLLOW&nbsp;US
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

      {/* Bottom Marquee */}
      <div className="absolute bottom-8 sm:bottom-12 lg:bottom-14 left-0 w-full bg-primary text-black py-2 sm:py-3 lg:py-4 z-30">
        <div className="marquee-track whitespace-nowrap text-sm sm:text-base lg:text-lg font-semibold tracking-wide">
          UI/UX Design ✳ Website Design ✳ Mobile Application ✳ Digital Marketing ✳ Branding ✳ Outdoor Advertising ✳
          &nbsp;&nbsp;&nbsp;
          UI/UX Design ✳ Website Design ✳ Mobile Application ✳ Digital Marketing ✳ Branding ✳ Outdoor Advertising ✳
        </div>
      </div>

    </section>
  );
}
