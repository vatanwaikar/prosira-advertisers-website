"use client";

import { useEffect, useRef } from "react";
import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function MissionVision() {
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
    <section ref={sectionRef} className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            data-animate
            className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4 duration-700"
          >
            Our Purpose
          </span>
          <h2
            data-animate
            className="text-3xl md:text-4xl font-bold duration-700 delay-100"
          >
            Guided by{" "}
            <span className="text-primary font-serif italic">Vision & Mission</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <Card
            data-animate
            className="bg-card border-border hover:border-primary/50 transition-colors duration-500"
          >
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
  Our mission is to deliver strategically driven, creatively compelling, and
  performance-oriented advertising solutions that help brands stand out,
  connect with the right audience, and achieve measurable business growth.
  We are committed to exceeding client expectations through innovation,
  transparency, and long-term brand-building strategies.
</p>

            </CardContent>
          </Card>

          {/* Vision */}
          <Card
            data-animate
            className="bg-card border-border hover:border-primary/50 transition-colors duration-500 delay-100"
          >
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg bg-primary/10">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
  Our vision is to become one of Maharashtra’s most trusted and influential
  advertising and media agencies, setting benchmarks in creativity,
  technology, and execution. We aspire to empower brands of all sizes by
  delivering impactful campaigns, embracing innovation, and consistently
  driving meaningful results in an ever-evolving digital world.
</p>

            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div data-animate className="mt-16 duration-700 delay-300">
          <h3 className="text-center text-xl font-semibold mb-8">Our Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Integrity", desc: "Honest partnerships built on trust" },
              { title: "Innovation", desc: "Creative solutions that stand out" },
              { title: "Excellence", desc: "Quality in every deliverable" },
              { title: "Results", desc: "Measurable outcomes that matter" },
            ].map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <h4 className="font-semibold text-primary mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
