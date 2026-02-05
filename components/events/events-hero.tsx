"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
        bottom: "-40px",
        animationName: "particle-float",
        animationDuration: `${duration}s`,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        animationDelay: `${delay}s`,
      }}
    >
      <div
        className="rounded-full bg-gradient-to-t from-primary to-primary/30"
        style={{
          width: size,
          height: size,
          boxShadow: `
            0 0 ${size * 3}px rgba(212,175,55,0.9),
            0 0 ${size * 6}px rgba(212,175,55,0.4)
          `,
          opacity: 1,
        }}
      />
    </div>
  );
}

export function EventsHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  /* particles – client only */
  const [particles, setParticles] = useState<
    { delay: number; size: number; left: number; duration: number }[]
  >([]);

  /* reveal animation observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* generate floating particles */
  useEffect(() => {
    const generated = Array.from({ length: 24 }, (_, i) => ({
      delay: i * 0.85,
      size: 6 + Math.random() * 10,
      left: Math.random() * 100,
      duration: 18 + Math.random() * 10,
    }));

    setParticles(generated);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-24 bg-gradient-to-b from-secondary to-background overflow-hidden"
    >
      {/* AMBIENT BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-16 w-72 h-72 bg-primary/10 rounded-full blur-3xl float-slow" />
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl float-slow" />
      </div>

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Breadcrumb */}
        <nav
          data-animate
          className="f-reveal flex items-center gap-2 text-sm text-muted-foreground mb-8"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Events & Expo</span>
        </nav>

        <div className="max-w-4xl">
          <span
            data-animate
            className="f-reveal inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4"
          >
            Event Management
          </span>

          <h1
            data-animate
            className="f-reveal text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Event Management Company in{" "}
            <span className="text-primary font-serif italic">Pune</span>
          </h1>

          <p
            data-animate
            className="f-reveal text-xl text-muted-foreground leading-relaxed"
          >
            From intimate corporate gatherings to large-scale exhibitions, we
            create memorable experiences that leave lasting impressions and
            achieve your business objectives.
          </p>
        </div>
      </div>
    </section>
  );
}
