"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Research",
    description:
      "We start by understanding your business goals, target audience, and competitive landscape through comprehensive research and analysis.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "Based on insights gathered, we create a customized digital marketing strategy with clear KPIs and measurable objectives.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Our expert team executes the strategy across chosen channels, setting up campaigns, creating content, and optimizing for performance.",
  },
  {
    number: "04",
    title: "Monitor & Optimize",
    description:
      "We continuously monitor campaign performance, analyze data, and make data-driven optimizations to improve results.",
  },
  {
    number: "05",
    title: "Report & Scale",
    description:
      "Regular reporting keeps you informed of progress. Successful strategies are scaled for maximum impact and ROI.",
  },
];

export function DigitalProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate-in",
              "fade-in",
              "slide-in-from-bottom-6"
            );
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-secondary relative overflow-hidden">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span
            data-animate
            className="
              inline-block
              text-primary
              text-sm
              font-medium
              uppercase
              tracking-wider
              mb-4
              transition-all
              duration-700
            "
          >
            Our Process
          </span>

          <h2
            data-animate
            className="
              text-3xl md:text-4xl
              font-bold
              mb-6
              transition-all
              duration-700
              delay-100
            "
          >
            How We Drive{" "}
            <span className="text-primary font-serif italic">
              Digital Success
            </span>
          </h2>

          <p
            data-animate
            className="
              text-muted-foreground
              text-lg
              leading-relaxed
              transition-all
              duration-700
              delay-200
            "
          >
            Our proven methodology ensures consistent results across all digital
            marketing initiatives.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="h-full w-full bg-border relative overflow-hidden">
              {/* Animated gold pulse */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-pulse" />
            </div>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                data-animate
                style={{ animationDelay: `${index * 160}ms` }}
                className={`
                  relative
                  group
                  flex
                  flex-col
                  lg:flex-row
                  items-center
                  gap-10

                  transition-all
                  duration-[900ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}
                `}
              >
                {/* CONTENT */}
                <div
                  className={`
                    flex-1
                    transition-all
                    duration-700
                    delay-100
                    group-hover:opacity-90
                    ${
                      index % 2 === 0
                        ? "lg:text-right lg:pr-20"
                        : "lg:text-left lg:pl-20"
                    }
                  `}
                >
                  <h3 className="text-xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* STEP NUMBER */}
                <div
                  className="
                    relative
                    z-10
                    w-16
                    h-16
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    text-primary-foreground
                    font-bold
                    text-lg

                    transition-all
                    duration-700
                    group-hover:-translate-y-2
                    group-hover:scale-110
                  "
                >
                  {step.number}

                  {/* Glow ring */}
                  <div className="
                    absolute
                    inset-0
                    rounded-full
                    bg-primary/40
                    blur-xl
                    opacity-0
                    group-hover:opacity-70
                    transition
                  " />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
