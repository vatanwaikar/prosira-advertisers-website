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

      <div className="relative site-container">

        

        {/* ================= CORE VALUES (TOP) ================= */}
        <div data-animate className="f-reveal mb-20">
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
                  group relative rounded-2xl bg-card border border-border
                  p-6 transition-all duration-500 ease-out
                  hover:-translate-y-3 hover:border-primary/40 overflow-hidden
                "
              >
                <div
                  className="
                    pointer-events-none absolute inset-0 opacity-0
                    group-hover:opacity-100 transition-opacity duration-500
                    bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.25),transparent_70%)]
                  "
                />

                <div
                  className="
                    pointer-events-none absolute -inset-12 opacity-0
                    group-hover:opacity-100 transition-opacity duration-700
                    blur-3xl bg-primary/20
                  "
                />

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
            <span className="text-primary font-serif">
              Vision & Mission
            </span>
          </h2>
        </div>

        {/* ================= MISSION & VISION (BOTTOM) ================= */}
<div className="grid md:grid-cols-2 gap-8">

  {/* Vision */}
  <Card
    data-animate
    className="f-reveal hover-lift group bg-card border-border relative overflow-hidden"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[radial-gradient(circle,rgba(212,175,55,0.35),transparent_60%)] blur-3xl" />
    </div>

    <CardContent className="relative p-8">
      <div className="flex items-center gap-4 mb-5">
        <div className="p-3 rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-105">
          <Eye className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">Our Vision</h3>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        To become a leading media planning and buying agency known for innovative advertising solutions, transparent media investments, and measurable brand growth.
      </p>
    </CardContent>
  </Card>

  {/* Mission */}
  <Card
    data-animate
    className="f-reveal hover-lift group bg-card border-border relative overflow-hidden"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[radial-gradient(circle,rgba(212,175,55,0.35),transparent_60%)] blur-3xl" />
    </div>

    <CardContent className="relative p-8">
      <div className="flex items-center gap-4 mb-5">
        <div className="p-3 rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-105">
          <Target className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">Our Mission</h3>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        To deliver result-driven media planning and buying through data-led strategies, smart audience targeting, and performance-focused advertising that maximizes ROI.
      </p>
    </CardContent>
  </Card>

</div>
      </div>
    </section>
  );
}
