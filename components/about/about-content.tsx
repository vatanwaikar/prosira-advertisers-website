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

      <div className="relative site-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* CONTENT SIDE - Now on LEFT */}
          <div data-animate className="f-reveal lg:order-1">
            <div className="prose prose-lg prose-invert max-w-none">

  {/* SECTION 1 */}
  <h3 className="inline-flex items-center gap-2 px-4 py-1.5 mb-3
    rounded-full border border-primary/30 bg-primary/10
    text-xs md:text-sm font-medium text-primary
    shadow-[0_0_14px_rgba(212,175,55,0.15)]">
    ✦ Who We Are
  </h3>

  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
    Founded by industry professionals Shashikantt Paanchal and Vijayant Saini,
    we are a data-driven media planning and buying agency helping brands
    achieve measurable growth across India and global markets.
  </p>

  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
    We combine strategic thinking, media intelligence, and execution excellence
    to ensure brands reach the right audience with maximum efficiency and ROI.
  </p>


  {/* SECTION 2 */}
  <h3 className="inline-flex items-center gap-2 px-4 py-1.5 mb-3
    rounded-full border border-primary/30 bg-primary/10
    text-xs md:text-sm font-medium text-primary
    shadow-[0_0_14px_rgba(212,175,55,0.15)]">
    ✦ What We Do
  </h3>

  <div className="space-y-5 mb-8">

    <p className="text-lg text-muted-foreground leading-relaxed">
      <span className="font-semibold text-foreground">
        Integrated Media Planning —
      </span>{" "}
      Audience research, media mix optimization, and reach & frequency planning
      aligned with business objectives.
    </p>

    <p className="text-lg text-muted-foreground leading-relaxed">
      <span className="font-semibold text-foreground">
        Digital & Traditional Media Buying —
      </span>{" "}
      Efficient buying across digital, TV, print, radio, outdoor, and integrated
      platforms backed by strong negotiation leverage.
    </p>

    <p className="text-lg text-muted-foreground leading-relaxed">
      <span className="font-semibold text-foreground">
        ROI-Focused Media Execution —
      </span>{" "}
      Campaign execution designed to maximize visibility, engagement,
      and measurable return on advertising investment.
    </p>

  </div>


  {/* SECTION 3 */}
  <h3 className="inline-flex items-center gap-2 px-4 py-1.5 mb-3
    rounded-full border border-primary/30 bg-primary/10
    text-xs md:text-sm font-medium text-primary
    shadow-[0_0_14px_rgba(212,175,55,0.15)]">
    ✦ How We Work
  </h3>

  <p className="text-lg text-muted-foreground leading-relaxed mb-5">
    Our approach is rooted in insight-led planning and transparent media buying,
    ensuring every media rupee delivers value.
  </p>

  <div className="space-y-5">

    <p className="text-lg text-muted-foreground leading-relaxed">
      <span className="font-semibold text-foreground">
        Audience & Data-Led Strategy —
      </span>{" "}
      We analyze audience behavior, market trends, and performance data
      to build precise media strategies.
    </p>

    <p className="text-lg text-muted-foreground leading-relaxed">
      <span className="font-semibold text-foreground">
        Smart Buying & Optimization —
      </span>{" "}
      We negotiate optimal media placements and continuously optimize
      campaigns using real-time performance insights.
    </p>

    <p className="text-lg text-muted-foreground leading-relaxed">
      <span className="font-semibold text-foreground">
        Measurable Outcomes & Reporting —
      </span>{" "}
      Every campaign aligns with clear business objectives, supported by
      transparent reporting and measurable ROI tracking.
    </p>

  </div>

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
                  Advertising Services
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

          {/* IMAGE SIDE - Now on RIGHT */}
          <div
            ref={imageRef}
            data-animate
            className="f-reveal relative hover-lift lg:order-2"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/team-meeting.jpg"
                alt="Prosira Advertisers team collaborating on campaign strategy"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/50 via-transparent to-primary/10" />
            </div>

            {/* Decorative depth accents */}
            <div className="absolute -bottom-8 -left-8 w-28 h-28 border-2 border-primary/30 rounded-xl -z-10" />
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-primary/10 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
