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
    {/* SECTION 1 */}
    <h3 className="inline-flex items-center gap-2 px-4 py-1.5 mb-3
  rounded-full border border-primary/30 bg-primary/10
  text-xs md:text-sm font-medium text-primary
  shadow-[0_0_14px_rgba(212,175,55,0.15)]">
  ✦ Who We Are
</h3>

    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
      Prosira Advertisers is a full-service event and advertising company delivering
      comprehensive 360° media solutions. We design strategic, creative, and
      performance-driven campaigns by integrating traditional media strength with
      modern digital innovation—helping brands connect, engage, and grow.
    </p>

    {/* SECTION 2 */}
    <h3 className="inline-flex items-center gap-2 px-4 py-1.5 mb-3
  rounded-full border border-primary/30 bg-primary/10
  text-xs md:text-sm font-medium text-primary
  shadow-[0_0_14px_rgba(212,175,55,0.15)]">
  ✦ What We Do
</h3>

    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
      With expertise in advertising strategy, creative design, media planning and
      buying, public relations, and large-scale event execution, we work as a true
      media partner—from concept to execution—focused on measurable impact.
    </p>

    {/* SECTION 3 */}
   <h3 className="inline-flex items-center gap-2 px-4 py-1.5 mb-3
  rounded-full border border-primary/30 bg-primary/10
  text-xs md:text-sm font-medium text-primary
  shadow-[0_0_14px_rgba(212,175,55,0.15)]">
  ✦ How We Work
</h3>

    <p className="text-lg text-muted-foreground leading-relaxed">
      Operating across Pune and Maharashtra, our team collaborates closely with
      clients to understand business goals and transform them into powerful brand
      stories through insight-driven, audience-focused strategies.
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
