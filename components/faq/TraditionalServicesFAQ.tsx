"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does hoarding or outdoor advertising cost?",
    a: "Costs depend on location, size, and duration. Premium locations cost more but deliver significantly higher visibility and recall.",
  },
  {
    q: "Can outdoor advertising be location targeted?",
    a: "Yes. Campaigns can be planned around highways, business zones, residential areas, or specific city landmarks.",
  },
  {
    q: "Do you handle creative design and media buying?",
    a: "Yes. We manage everything end-to-end — from creative design and production to media planning, buying, and execution.",
  },
  {
    q: "How do you measure success in traditional advertising?",
    a: "Success is measured through reach, frequency, visibility reports, brand recall indicators, and alignment with business goals.",
  },
];

export function TraditionalServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`
                  group relative overflow-hidden rounded-2xl border border-border
                  transition-all duration-500
                  ${isOpen ? "bg-card shadow-[0_25px_80px_-30px_rgba(212,175,55,0.35)]" : "bg-card/60"}
                `}
              >
                {/* GOLD GLOW */}
                <div
                  className={`
                    pointer-events-none absolute inset-0 opacity-0
                    transition duration-700
                    bg-gradient-to-r from-transparent via-primary/20 to-transparent
                    ${isOpen ? "opacity-100" : "group-hover:opacity-100"}
                  `}
                />

                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="
                    relative z-10 w-full flex items-center justify-between
                    gap-4 p-5 md:p-6 text-left
                  "
                >
                  <span className="text-base md:text-lg font-medium">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`
                      h-5 w-5 shrink-0 text-primary
                      transition-transform duration-500
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {/* EXPAND */}
                <div
                  className={`
                    relative z-10 overflow-hidden
                    transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="px-5 md:px-6 pb-6 pt-1">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
