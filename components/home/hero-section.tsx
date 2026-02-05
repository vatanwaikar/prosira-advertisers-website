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

/* ---------------- ANIMATED COUNTER ---------------- */
function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-gradient-gold">
      {count}
      {suffix}
    </div>
  );
}

/* ---------------- HERO SECTION ---------------- */
export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAlt, setShowAlt] = useState(false);


  /* FIX 1: particles generated ONLY on client */
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
  }, 4000); // change every 4s

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

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* BADGE */}
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

        {/* HEADING ROTATOR – GRID LOCK (FINAL) */}
<div className="relative h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden">
  {/* HEADING 1 */}
  <div
    className={`
      absolute inset-0
      transition-all duration-800 ease-out
      ${showAlt ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}
    `}
  >
    <h1 className="grid grid-rows-[auto_auto_auto] text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.15]">
      <span>Transform Your</span>
      <span>Brand With</span>

      {/* ✅ GOLD TEXT — STATIC */}
      <span className="mt-2 text-primary font-serif italic">
  Prosira Advertisers
      </span>
    </h1>
  </div>

  {/* HEADING 2 */}
  <div
    className={`
      absolute inset-0
      transition-all duration-800 ease-out
      ${showAlt ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
    `}
  >
    <h1 className="grid grid-rows-[auto_auto_auto] text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.15]">
      <span>More Than An</span>

      {/* ✅ GOLD TEXT — STATIC */}
      <span className="mt-2 text-primary font-serif italic">
  Advertising Agency
      </span>

      <span />
    </h1>
  </div>
</div>



            {/* DESCRIPTION */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              From traditional advertising to cutting-edge digital campaigns, we craft
              strategic, creative, and performance-driven solutions that connect your
              brand with the right audience.
            </p>

            {/* CTA */}
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

            {/* STATS */}
            <div className="pt-10 border-t border-border/30">
              <div className="flex gap-10">
                <div>
                  <AnimatedCounter target={15} suffix="+" />
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <AnimatedCounter target={500} suffix="+" />
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div>
                  <AnimatedCounter target={200} suffix="+" />
                  <p className="text-sm text-muted-foreground">Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL – ORGANIC / INTEGRATED */}
<div className="hidden lg:block relative z-30 self-start pt-1">
  <div
    className="relative max-w-lg mx-auto"
    style={{
      aspectRatio: "1 / 1",
      filter: "drop-shadow(0 0 60px rgba(212,175,55,0.15))",
    }}
  >
    {/* Soft organic background glow */}
    <div className="absolute inset-0 rounded-[42%_58%_55%_45%/48%_46%_54%_52%] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl animate-morph-slow" />

    {/* Outer floating ring */}
    <div className="absolute inset-6 rounded-full border border-primary/25 animate-spin-slow" />

    {/* Inner dashed ring */}
<div className="absolute inset-14 rounded-full border-2 border-dotted border-primary/30 animate-spin" />

   {/* Core glass soft diamond */}
<div className="absolute inset-24 flex items-center justify-center">
  <div className="w-full h-full rounded-[28%] glass-gold animate-glow-pulse rotate-45 flex items-center justify-center ring-1 ring-primary/30">
    <div className="-rotate-45 text-center select-none">
      <div className="text-5xl md:text-6xl font-bold text-gradient-gold font-serif tracking-tight">
        Prosira
      </div>
      <div className="text-xs mt-2 tracking-[0.35em] uppercase text-muted-foreground">
        Advertisers
      </div>
    </div>
  </div>
</div>


    {/* Floating accent dots */}
    <div className="absolute top-10 right-16 w-2.5 h-2.5 rounded-full bg-primary/60 animate-float" />
    <div className="absolute bottom-16 left-10 w-3 h-3 rounded-full bg-primary/40 animate-float-slow" />
    <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-primary/50 animate-float delay-300" />
  </div>
</div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
} 
