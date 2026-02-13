"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export function DigitalHero() {
  const heroRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-20 bg-gradient-to-b from-secondary to-background overflow-hidden"
    >
      <div className="site-container">
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
          <span className="text-foreground">Digital Services</span>
        </nav>

        <div className="max-w-4xl">
          <span
            data-animate
            className="f-reveal inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4"
          >
           Digital Marketing, Performance Advertising & Website Development Services
          </span>

          <h1
            data-animate
            className="f-reveal text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
           We provide end-to-end digital marketing, performance advertising, and website development services  {" "}
            {/* <span className="text-primary font-serif ">Pune</span> */}
          </h1>

          <p
            data-animate
            className="f-reveal text-xl text-muted-foreground leading-relaxed"
          >
            designed to help brands grow faster online. Our integrated approach combines SEO, paid advertising, social media strategy, and high-performance website development to increase visibility on Google, generate quality leads, and deliver measurable ROI.
          </p>
        </div>
      </div>
    </section>
  );
}
