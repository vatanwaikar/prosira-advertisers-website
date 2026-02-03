"use client";

import { useEffect, useRef } from "react";

const clients = [
  "Tech Corp",
  "FinanceHub",
  "Healthcare Plus",
  "EduLearn",
  "RetailMax",
  "AutoDrive",
  "FoodChain",
  "PropertyOne",
];

export function ClientsSection() {
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
        <div className="text-center mb-12">
          <span
            data-animate
            className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4 duration-700"
          >
            Our Clients
          </span>
          <h2
            data-animate
            className="text-2xl md:text-3xl font-bold duration-700 delay-100"
          >
            Trusted by{" "}
            <span className="text-primary font-serif italic">Industry Leaders</span>
          </h2>
        </div>

        {/* Client Logos Marquee */}
        <div
          data-animate
          className="relative overflow-hidden duration-700 delay-200"
        >
          <div className="flex animate-marquee gap-12">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 px-8 py-4 border border-border/50 rounded-lg bg-card/50 hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
