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
            entry.target.classList.add("is-visible");
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
    <section
      ref={sectionRef}
      className="relative py-24 bg-secondary overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl float-slow" />
        <div className="absolute bottom-24 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl float-slow" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span
            data-animate
            className="f-reveal inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4"
          >
            Our Purpose
          </span>
          <h2
            data-animate
            className="f-reveal text-3xl md:text-4xl font-bold"
          >
            Guided by{" "}
            <span className="text-primary font-serif italic">
              Vision & Mission
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* MISSION CARD */}
          <Card
            data-animate
            className="f-reveal hover-lift group bg-card border-border relative overflow-hidden"
          >
            {/* BACK LIGHT GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-[radial-gradient(circle,rgba(212,175,55,0.35),transparent_60%)] blur-3xl" />
            </div>

            <CardContent className="relative p-10">
              <div className="flex items-center gap-5 mb-6">
                <div className="p-4 rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg">
                Our mission is to deliver strategically driven, creatively compelling,
                and performance-oriented advertising solutions that help brands stand
                out, connect with the right audience, and achieve measurable business
                growth. We are committed to exceeding client expectations through
                innovation, transparency, and long-term brand-building strategies.
              </p>
            </CardContent>
          </Card>

          {/* VISION CARD */}
          <Card
            data-animate
            className="f-reveal hover-lift group bg-card border-border relative overflow-hidden"
          >
            {/* BACK LIGHT GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[radial-gradient(circle,rgba(212,175,55,0.35),transparent_60%)] blur-3xl" />
            </div>

            <CardContent className="relative p-10">
              <div className="flex items-center gap-5 mb-6">
                <div className="p-4 rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
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

        {/* Core Values */}
        <div data-animate className="f-reveal mt-20">
          <h3 className="text-center text-xl font-semibold mb-10">
            Our Core Values
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Integrity", desc: "Honest partnerships built on trust" },
              { title: "Innovation", desc: "Creative solutions that stand out" },
              { title: "Excellence", desc: "Quality in every deliverable" },
              { title: "Results", desc: "Measurable outcomes that matter" },
            ].map((value) => (
              <div
  key={value.title}
  className="
    group relative
    rounded-2xl
    bg-card
    border border-border
    p-6
    transition-all duration-500 ease-out
    hover:-translate-y-3
    hover:border-primary/40
    overflow-hidden
  "
>
  {/* GOLDEN RADIAL GLOW */}
  <div
    className="
      pointer-events-none
      absolute inset-0
      opacity-0
      group-hover:opacity-100
      transition-opacity duration-500
      bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.25),transparent_70%)]
    "
  />

  {/* EXTRA BLUR DEPTH */}
  <div
    className="
      pointer-events-none
      absolute -inset-12
      opacity-0
      group-hover:opacity-100
      transition-opacity duration-700
      blur-3xl
      bg-primary/20
    "
  />

  {/* CONTENT */}
  <div className="relative z-10 text-center">
    <h4 className="font-semibold text-primary mb-2">
      {value.title}
    </h4>
    <p className="text-sm text-muted-foreground">
      {value.desc}
    </p>
  </div>
</div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
