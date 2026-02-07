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
        animationName: "particle-float",
        animationDuration: `${duration}s`,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        animationDelay: `${delay}s`,
      }}
    >
      <div
        className="rounded-full bg-gradient-to-t from-primary/80 to-primary/20"
        style={{
          width: size,
          height: size,
          boxShadow: `0 0 ${size * 2}px rgba(212, 175, 55, 0.5)`,
        }}
      />
    </div>
  );
}

/* ---------------- HERO IMAGE SWITCHER ---------------- */
function HeroImageSwitcher({ showAlt }: { showAlt: boolean }) {
  return (
    <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-xl">
      <Image
        src="/images/VJ.jpeg"
        alt="Transform your brand with Prosira Advertisers"
        fill
        priority
        sizes="(min-width:1024px) 420px, 100vw"
        className={`object-cover transition-opacity duration-700 ease-out ${
          showAlt ? "opacity-0" : "opacity-100"
        }`}
      />

      <Image
        src="/images/SP.jpeg"
        alt="More than an advertising agency"
        fill
        loading="lazy"
        sizes="(min-width:1024px) 420px, 100vw"
        className={`absolute inset-0 object-cover transition-opacity duration-700 ease-out ${
          showAlt ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
    </div>
  );
}

/* ---------------- HERO SECTION ---------------- */
export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAlt, setShowAlt] = useState(false);

  const [particles, setParticles] = useState<
    { delay: number; size: number; left: number; duration: number }[]
  >([]);

  useEffect(() => {
    setIsLoaded(true);

    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      delay: i * 0.8,
      size: 4 + Math.random() * 8,
      left: Math.random() * 100,
      duration: 15 + Math.random() * 10,
    }));

    setParticles(generatedParticles);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlt((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Premium advertising agency workspace"
          fill
          priority
          className="object-cover transition-transform duration-1000 ease-out"
          style={{
            transform: `scale(1.1) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 animate-gradient-shift" />
      </div>

      {/* PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            <div
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-gold transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">
                Leading Advertising Agency in Pune
              </span>
            </div>

            {/* HEADING ROTATOR */}
            <div className="relative h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden">
              <div
                className={`absolute inset-0 transition-all duration-800 ease-out ${
                  showAlt ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
                }`}
              >
                <h1 className="grid grid-rows-[auto_auto_auto] text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.15]">
                  <span>Transform Your</span>
                  <span>Brand With</span>
                  <span className="mt-2 text-primary font-serif">
                    Prosira Advertisers
                  </span>
                </h1>
              </div>

              <div
                className={`absolute inset-0 transition-all duration-800 ease-out ${
                  showAlt ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
                }`}
              >
                <h1 className="grid grid-rows-[auto_auto_auto] text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.15]">
                  <span>More Than An</span>
                  <span className="mt-2 text-primary font-serif">
                    Advertising Agency
                  </span>
                </h1>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              From traditional advertising to cutting-edge digital campaigns, we craft
              strategic, creative, and performance-driven solutions that connect your
              brand with the right audience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="h-14 px-8">
                <Link href="/about-prosira-advertisers">
                  <Play className="mr-2 h-5 w-5" />
                  Our Story
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden lg:flex justify-center">
            <HeroImageSwitcher showAlt={showAlt} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
