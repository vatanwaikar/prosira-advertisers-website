"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-20 bg-gradient-to-b from-secondary to-background"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Breadcrumb */}
        <nav
          data-animate
          className="flex items-center gap-2 text-sm text-muted-foreground mb-8 duration-700"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">About Us</span>
        </nav>

        <div className="max-w-4xl">
          <span
            data-animate
            className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4 duration-700 delay-100"
          >
            About Prosira Advertisers
          </span>
          <h1
            data-animate
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 duration-700 delay-200"
          >
            About Prosira Advertisers –{" "}
            <span className="text-primary font-serif italic">
              Complete Range of 360° Media Services
            </span>
          </h1>
          <p
            data-animate
            className="text-xl text-muted-foreground leading-relaxed duration-700 delay-300"
          >
            Your trusted partner for strategic, creative, and performance-driven
            advertising solutions in Pune and across Maharashtra.
          </p>
        </div>
      </div>
    </section>
  );
}
