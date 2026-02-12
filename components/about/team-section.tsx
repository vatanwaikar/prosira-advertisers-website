"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Users, Award, TrendingUp, Heart } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "10+ Professionals",
    description: "Expert team of strategists, creatives, and media specialists",
  },
  {
    icon: Award,
    title: "6+ Industry Recognition",
    description: "Multiple awards for media excellence and campaign success",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "1503+ successful campaigns delivered across industries",
  },
  {
    icon: Heart,
    title: "100% Client Satisfaction Rate",
    description: "Long-term partnerships built on trust and results",
  },
];

export function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate-in",
              "fade-in",
              "slide-in-from-bottom-8"
            );
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
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span
            data-animate
            className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4 duration-700"
          >
            Our Strength
          </span>

          <h2
            data-animate
            className="text-3xl md:text-4xl font-bold mb-6 duration-700 delay-100"
          >
            The People Behind{" "}
            <span className="text-primary font-serif">
              Your Success
            </span>
          </h2>

          <p
            data-animate
            className="text-muted-foreground text-lg leading-relaxed duration-700 delay-200"
          >
            A powerhouse team combining strategy, creativity, media expertise,
            and execution excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Card = (
              <div
                data-animate
                style={{ animationDelay: `${index * 120}ms` }}
                className="
                  group relative
                  rounded-2xl
                  bg-card
                  border border-border
                  p-8
                  transition-all duration-500 ease-out
                  hover:-translate-y-3
                  hover:border-primary/40
                  overflow-hidden
                  cursor-pointer
                "
              >
                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.25),transparent_70%)]" />

                <div className="pointer-events-none absolute -inset-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl bg-primary/20" />

                <div className="relative z-10 text-center">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-5 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {index === 0 && (
                    <span className="text-primary text-sm mt-3 inline-block">
                      View Team →
                    </span>
                  )}
                </div>
              </div>
            );

            // 👇 Only first card clickable
            if (index === 0) {
              return (
                <Link key={item.title} href="/team">
                  {Card}
                </Link>
              );
            }

            return (
              <div key={item.title}>
                {Card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
