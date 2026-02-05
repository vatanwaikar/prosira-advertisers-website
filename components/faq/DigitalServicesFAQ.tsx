"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much budget is required for Google Ads?",
    a: "There is no fixed budget. We usually start with a test budget to analyze performance and then scale based on ROI and conversion data.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term strategy. Initial improvements can appear within 2–3 months, while strong results usually come in 4–6 months depending on competition.",
  },
  {
    q: "Do you provide GA4 and conversion tracking setup?",
    a: "Yes. All digital campaigns include GA4 setup, conversion tracking, and goal configuration so every action is measurable.",
  },
  {
    q: "Is social media marketing paid or organic?",
    a: "It can be both. Organic builds long-term trust, while paid campaigns deliver faster reach and conversions. We usually combine both for best results.",
  },
  {
    q: "Can I track campaign performance in real time?",
    a: "Yes. We provide access to live dashboards and regular reports so you always know what is working and where to optimize.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Absolutely. We design scalable digital strategies that fit startup budgets and grow as your business grows.",
  },
];

export function DigitalServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Digital Marketing FAQs
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
                  ${isOpen
                    ? "bg-card shadow-[0_25px_80px_-30px_rgba(212,175,55,0.35)]"
                    : "bg-card/60"}
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
                    ${isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}
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
