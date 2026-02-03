"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export function AboutContent() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div data-animate className="relative duration-700">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/team-meeting.jpg"
                alt="Prosira Advertisers team collaborating on campaign strategy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/50 via-transparent to-primary/10" />
            </div>
            {/* Accent element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-primary/30 rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <div
              data-animate
              className="prose prose-lg prose-invert max-w-none duration-700 delay-100"
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

            {/* Internal Links */}
            <div
              data-animate
              className="mt-8 pt-8 border-t border-border duration-700 delay-200"
            >
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Explore Our Services
              </h3>
              <div className="flex flex-wrap gap-4">
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
