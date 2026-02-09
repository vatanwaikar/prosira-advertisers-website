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

/* ---------------- HERO IMAGE SWITCHER ---------------- */
function HeroImageSwitcher({ showAlt }: { showAlt: boolean }) {
  return (
    <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-xl">
      <Image
        src="/images/VJ.jpeg"
        alt="Advertising agency team at Prosira Advertisers Pune"
        fill
        sizes="(min-width:1024px) 420px, 100vw"
        className={`object-cover transition-opacity duration-700 ${
          showAlt ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src="/images/SP.jpeg"
        alt="Creative advertising campaigns by Prosira Advertisers"
        fill
        loading="lazy"
        sizes="(min-width:1024px) 420px, 100vw"
        className={`absolute inset-0 object-cover transition-opacity duration-700 ${
          showAlt ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

/* ---------------- HERO SECTION ---------------- */
export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showAlt, setShowAlt] = useState(false);
  const [particles, setParticles] = useState<
    { delay: number; size: number; left: number; duration: number }[]
  >([]);

  /* ✅ PARTICLES – DESKTOP ONLY */
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

  /* ✅ THROTTLED MOUSEMOVE – DESKTOP ONLY */
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

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlt((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* BACKGROUND */}
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

      {/* PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 lg:pl-28 xl:pl-36 max-w-xl lg:ml-4 xl:ml-6">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-gold text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Leading Advertising Agency in Pune
          </span>

          {/* ✅ SINGLE SEO-SAFE H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Transform Your Brand With{" "}
            <span className="text-primary font-serif">Prosira Advertisers</span>
          </h1>

          {/* SEO reinforcement */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            Prosira Advertisers is a full-service advertising agency in Pune
            delivering TV, radio, outdoor hoardings, digital marketing, and brand strategy solutions.
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

        <div className="hidden lg:flex justify-center">
          <HeroImageSwitcher showAlt={showAlt} />
        </div>
      </div>
    </section>
  );
}
