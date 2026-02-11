"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ---------------- FLOATING PARTICLE ---------------- */
function FloatingParticle({
  delay,
  size,
  left,
  duration,
}: {
  delay: number;
  size: number;
  left: number;
  duration: number;
}) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${left}%`,
        bottom: "-20px",
        animation: `particle-float ${duration}s linear ${delay}s infinite`,
      }}
    >
      <div
        className="rounded-full bg-gradient-to-t from-primary/80 to-primary/20"
        style={{
          width: size,
          height: size,
          boxShadow: `0 0 ${size * 2}px rgba(212,175,55,0.4)`,
        }}
      />
    </div>
  );
}

/* ---------------- HERO IMAGE SWITCHER (CLEAR PERSON IMAGE) ---------------- */
function HeroImageSwitcher({ currentHeading }: { currentHeading: number }) {
  const getImageSrc = (heading: number) => {
    switch (heading) {
      case 1:
        return "/images/spp.jpg";
      case 2:
        return "/images/VJ.jpeg";
      case 3:
        return "/images/nm.jpg";
      default:
        return "/images/SP.jpg";
    }
  };

  const getAltText = (heading: number) => {
    switch (heading) {
      case 1:
        return "SP - More than an advertising agency";
      case 2:
        return "VJ - Improve your business";
      case 3:
        return "NM - We are energetic";
      default:
        return "Prosira Advertisers team";
    }
  };

  return (
    <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
      {/* Background inside image card */}
      <div className="absolute inset-0">
        {/* <Image
          src="/images/hero-bg.jpg"
          alt="Hero background"
          fill
          sizes="(min-width:1024px) 420px, 100vw"
          className="object-cover scale-110"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-gray-800/40 to-slate-900/60" />
      </div>

      {/* PERSON IMAGE — CLEAR (NO BLUR) */}
      <Image
        src={getImageSrc(currentHeading)}
        alt={getAltText(currentHeading)}
        fill
        sizes="(min-width:1024px) 420px, 100vw"
        className="object-contain object-center scale-[1.1] transition-all duration-1000"
      />

      <div className="absolute inset-0 rounded-xl ring-2 ring-primary/20 ring-offset-2 ring-offset-background/80" />
    </div>
  );
}

/* ---------------- HERO SECTION ---------------- */
export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentHeading, setCurrentHeading] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [particles, setParticles] = useState<
    { delay: number; size: number; left: number; duration: number }[]
  >([]);

  const headings = [
  {
    id: 1,
    text: (
      <>
        WE ARE MORE THAN AN{" "}
        <span className="text-primary font-serif">
          ADVERTISING AGENCY
        </span>
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        IMPROVE YOUR{" "}
        <span className="text-primary font-serif">
          BUSINESS
        </span>
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        WE ARE{" "}
        <span className="text-primary font-serif">
          ENERGETIC
        </span>
      </>
    ),
  },
];



  /* Particles */
  useEffect(() => {
    if (window.innerWidth < 768) return;
    setParticles(
      Array.from({ length: 14 }, (_, i) => ({
        delay: i * 0.8,
        size: 4 + Math.random() * 6,
        left: Math.random() * 100,
        duration: 18 + Math.random() * 8,
      }))
    );
  }, []);

  /* Mouse parallax */
  useEffect(() => {
    if (window.innerWidth < 1024) return;

    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 60,
          y: (e.clientY - rect.top - rect.height / 2) / 60,
        });
        rafId = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* Heading rotation with blur */
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentHeading((prev) => (prev % 3) + 1);
        setIsAnimating(false);
      }, 350);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* HERO BACKGROUND — AS IT IS */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Premium advertising agency in Pune"
          fill
          sizes="100vw"
          className="object-cover"
          style={{
            transform: `scale(1.08) translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-8 lg:pl-28 xl:pl-36 max-w-xl">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-gold text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Leading Advertising Agency in Pune
          </span>

          {/* HEADING WITH BLUR EFFECT */}
          <h1
  className={`text-3xl md:text-4xl lg:text-6xl
    font-bold leading-tight tracking-wide transition-all duration-500
    ${
      isAnimating
        ? "blur-sm opacity-0 translate-y-2"
        : "blur-0 opacity-100 translate-y-0"
    }
  `}
>

            {headings.find((h) => h.id === currentHeading)?.text}
            {/* <span className="text-primary font-serif block mt-4">
              Prosira Advertisers
            </span> */}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            Prosira Advertisers is a full-service advertising agency in Pune
            delivering TV, radio, outdoor hoardings, digital marketing, and brand
            strategy solutions.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/about-prosira-advertisers">
                <Play className="mr-2 h-5 w-5" />
                Our Story
              </Link>
            </Button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:flex justify-center">
          <HeroImageSwitcher currentHeading={currentHeading} />
        </div>
      </div>
    </section>
  );
}
