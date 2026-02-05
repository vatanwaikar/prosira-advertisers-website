"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export function AboutContent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal observer
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

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    // Lightweight parallax for image
    const handleScroll = () => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const offset = rect.top * 0.05;
      imageRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-background overflow-hidden">
      {/* Ambient background depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl float-slow" />
        <div className="absolute bottom-32 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl float-slow" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE SIDE */}
          <div
            ref={imageRef}
            data-animate
            className="f-reveal relative hover-lift"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/team-meeting.jpg"
                alt="Prosira Advertisers team collaborating on campaign strategy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/50 via-transparent to-primary/10" />
            </div>

            {/* Decorative depth accents */}
            <div className="absolute -bottom-8 -left-8 w-28 h-28 border-2 border-primary/30 rounded-xl -z-10" />
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-primary/10 rounded-xl -z-10" />
          </div>

          {/* CONTENT SIDE */}
          <div>
            <div
              data-animate
              className="f-reveal prose prose-lg prose-invert max-w-none"
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Prosira Advertisers is a comprehensive event and advertising company that
                provides a complete range of 360° media services. We deliver strategic,
                creative, and performance-driven campaigns, specializing in blending
                traditional media strength with modern digital innovation to help brands
                connect, engage, and grow.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With deep expertise in advertising strategy, creative design, media
                planning & buying, public relations, and large-scale event execution, we
                act as a true media partner—not just a service provider. From concept to
                execution, every campaign is crafted to deliver measurable impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Operating across Pune and Maharashtra, our experienced team collaborates
                closely with clients to understand business goals and translate them
                into powerful brand stories. Our approach is insight-driven,
                audience-focused, and results-oriented.
              </p>
            </div>

            {/* LINKS */}
            <div
              data-animate
              className="f-reveal mt-10 pt-8 border-t border-border"
            >
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Explore Our Services
              </h3>
              <div className="flex flex-wrap gap-6">
                <Link
                  href="/traditional-services"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                >
                  Traditional Services
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/digital-services"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                >
                  Digital Services
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/events-expo"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                >
                  Events & Expo
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
