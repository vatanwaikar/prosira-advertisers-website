"use client";

import { useEffect, useRef } from "react";
import { Users, Award, TrendingUp, Heart } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "50+ Professionals",
    description: "Expert team of strategists, creatives, and media specialists",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Multiple awards for creative excellence and campaign success",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "500+ successful campaigns delivered across industries",
  },
  {
    icon: Heart,
    title: "Client-Centric",
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            data-animate
            className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4 duration-700"
          >
            Our Team
          </span>
          <h2
            data-animate
            className="text-3xl md:text-4xl font-bold mb-6 duration-700 delay-100"
          >
            The People Behind{" "}
            <span className="text-primary font-serif italic">Your Success</span>
          </h2>
          <p
            data-animate
            className="text-muted-foreground text-lg leading-relaxed duration-700 delay-200"
          >
            Our diverse team brings together expertise in advertising, media, digital
            marketing, and event management to deliver comprehensive solutions for your
            brand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              data-animate
              className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-500 group"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
