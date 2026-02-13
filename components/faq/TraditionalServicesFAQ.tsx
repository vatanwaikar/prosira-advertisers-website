"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  // 1️⃣ RADIO
  {
    q: "How effective is radio advertising for local businesses?",
    a: "Radio advertising is highly effective for local businesses because it offers frequent exposure, strong recall, and targeted reach within specific cities or regions. It works especially well for retail promotions, events, and brand awareness campaigns.",
  },

  // 2️⃣ TELEVISION
  {
    q: "How much does television advertising cost in India?",
    a: "Television advertising costs depend on channel type, time slot, region, and campaign duration. Prime-time national channels cost more, while regional and local channels offer cost-effective options with strong audience reach.",
  },

  // 3️⃣ NEWSPAPER
  {
    q: "Is newspaper advertising still relevant for marketing?",
    a: "Yes. Newspaper advertising remains highly effective for credibility-driven campaigns such as real estate, corporate announcements, government notices, and regional brand promotions with trusted readership.",
  },

  // 4️⃣ CINEMA
  {
    q: "Why is cinema advertising considered a premium medium?",
    a: "Cinema advertising offers a distraction-free environment with a captive audience, large screens, and surround sound. This results in high attention, emotional impact, and superior brand recall compared to many other formats.",
  },

  // 5️⃣ AUTO HOOD & BACK PANEL
  {
    q: "What is auto hood and back panel advertising?",
    a: "Auto hood and back panel advertising places brand creatives on auto rickshaws, turning them into moving billboards. It delivers high-frequency visibility across busy roads and residential areas at a very cost-effective rate.",
  },

  // 6️⃣ OUTDOOR
  {
    q: "How does outdoor hoarding advertising help brand visibility?",
    a: "Outdoor hoardings provide 24/7 brand exposure in high-traffic locations. They are ideal for city branding, launches, and mass awareness campaigns where consistent visibility is the primary objective.",
  },

  // 7️⃣ SOCIETY ACTIVATION & DIGITAL SCREENS
  {
    q: "What is society activation and digital screen advertising?",
    a: "Society activation involves on-ground brand engagement within residential societies using kiosks, sampling, and digital screens. It allows direct interaction with targeted audiences in a trusted local environment.",
  },

  // 8️⃣ PRINTING SERVICES
  {
    q: "What printing services do you provide for advertising?",
    a: "We provide high-quality printing services including vinyl printing, flex banners, hoardings, standees, posters, and other promotional materials designed for durability and strong visual impact.",
  },

  // 9️⃣ CREATIVE DESIGN
  {
    q: "Why is creative design important for advertising campaigns?",
    a: "Creative design ensures your brand communicates clearly, consistently, and attractively. Strong visuals and messaging significantly improve recall, engagement, and overall campaign performance across all media.",
  },

  // 🔟 CORPORATE GIFTING
  {
    q: "How does corporate gifting help in brand building?",
    a: "Corporate gifting strengthens business relationships, improves brand recall, and creates positive emotional associations. Customized gifts are especially effective for client appreciation, festive gifting, and employee rewards.",
  },

  // 1️⃣1️⃣ MAGAZINE
  {
    q: "Who should choose magazine or in-flight magazine advertising?",
    a: "Magazine and in-flight advertising is ideal for luxury brands, premium products, and businesses targeting niche or high-income audiences such as business travelers and decision-makers.",
  },
];

export function TraditionalServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="site-container">
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
                  ${
                    isOpen
                      ? "bg-card shadow-[0_25px_80px_-30px_rgba(212,175,55,0.35)]"
                      : "bg-card/60"
                  }
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
