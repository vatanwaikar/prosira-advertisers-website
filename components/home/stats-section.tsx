"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Award, Briefcase } from "lucide-react";

const stats = [
  { value: 2000, suffix: "+", label: "Projects Completed", icon: Briefcase },
  { value: 300, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 10, suffix: "+", label: "Years Experience", icon: Award },
  { value: 10, suffix: "+", label: "Team Members", icon: TrendingUp },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2500;
    let startTime: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background via-secondary to-background" />
      <div className="absolute pointer-events-none inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* ✅ MOBILE FIX: grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView
                  ? "translateY(0) scale(1)"
                  : "translateY(40px) scale(0.95)",
                transition: `all 0.8s cubic-bezier(0.175,0.885,0.32,1.275) ${
                  index * 150
                }ms`,
              }}
            >
              {/* HOVER GLOW */}
              <div className="absolute -inset-0.5 z-0 rounded-2xl bg-gradient-to-r from-primary/30 to-primary/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* CARD */}
              <div
                className="
                  relative z-10
                  bg-card/60 backdrop-blur-sm
                  rounded-2xl
                  p-6 md:p-8
                  border border-border/50
                  transition-all duration-500
                  min-h-[220px]
                  flex flex-col

                  group-hover:-translate-y-3
                  group-hover:scale-[1.03]
                  group-hover:border-primary/40
                "
              >
                {/* ICON */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>

                {/* VALUE */}
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold mb-1 leading-tight">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </div>

                {/* LABEL */}
                <div className="text-sm sm:text-base text-muted-foreground leading-snug break-words">
                  {stat.label}
                </div>

                {/* DECORATIVE LINE */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
