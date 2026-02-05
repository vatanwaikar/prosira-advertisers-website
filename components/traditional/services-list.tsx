"use client";

import { useEffect, useRef, useState } from "react";
import {
  Tv,
  Radio,
  Megaphone,
  Film,
  Newspaper,
  Star,
  Palette,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "tv",
    icon: Tv,
    title: "Television Advertising",
    description:
"Television advertising helps your brand reach millions of viewers through high-impact TV ad placements on leading national and regional television channels. This powerful advertising medium builds mass brand awareness, emotional connection, and long-term brand recall during prime-time shows, festive seasons, and high-viewership programs.",
    useCases: ["Product launches", "Brand awareness campaigns", "Festive promotions"],
    details: {
      whatItDoes:
        "Television advertising gives your brand mass visibility during high-attention moments, helping build trust, recall, and authority at scale.",
      strengths: [
        "Creates known-brand perception fast",
        "Builds strong emotional connection",
        "Excellent for launches and festive campaigns",
      ],
      considerations: [
        "Best used when awareness is the primary goal",
        "Performs best with consistent repetition",
        "More powerful when combined with digital follow-ups",
      ],
    },
  },

  {
    id: "radio",
    icon: Radio,
    title: "Radio Advertising",
    description:
"Radio advertising enables brands to connect with local and regional audiences through engaging FM radio advertising and audio campaigns. It is a cost-effective advertising solution for retail promotions, event marketing, brand jingles, and improving repeated brand recall.",
    useCases: ["Retail promotions", "Event announcements", "Brand jingles"],
    details: {
      whatItDoes:
        "Radio advertising builds familiarity and recall through frequent audio exposure, especially effective in local and regional markets.",
      strengths: [
        "Affordable mass reach",
        "High recall through repetition",
        "Strong local market penetration",
      ],
      considerations: [
        "Audio message quality is critical",
        "Works best with catchy offers or jingles",
      ],
    },
  },

  {
    id: "outdoor",
    icon: Megaphone,
    title: "Outdoor & Hoardings",
    description:
"Outdoor advertising and hoardings provide continuous brand visibility through billboards, transit media, and large-format outdoor displays in high-traffic locations. This form of OOH advertising delivers strong geographic targeting, high repetition, and impactful visual brand recall.",
    useCases: ["City branding", "Highway visibility", "Transit media"],
    details: {
      whatItDoes:
        "Outdoor advertising ensures continuous brand visibility in high-footfall and high-traffic locations.",
      strengths: [
        "24/7 brand exposure",
        "Strong geographic targeting",
        "High repetition recall",
      ],
      considerations: [
        "Best for short, impactful messaging",
        "Supports awareness more than direct conversions",
      ],
    },
  },

  {
    id: "cinema",
    icon: Film,
    title: "Cinema Advertising",
    description:
"Cinema advertising places your brand in a premium, distraction-free theatre environment with immersive big-screen visuals and surround sound. In-cinema advertising ensures high attention, strong emotional engagement, and superior brand recall among movie-going audiences.",
    useCases: ["Youth campaigns", "Luxury launches", "Movie tie-ups"],
    details: {
      whatItDoes:
        "Cinema advertising delivers immersive big-screen exposure, resulting in high brand recall.",
      strengths: [
        "Captive audience attention",
        "Premium brand association",
        "High recall value",
      ],
      considerations: [
        "Limited to movie show timings",
        "Works best when paired with digital retargeting",
      ],
    },
  },

  {
    id: "print",
    icon: Newspaper,
    title: "Print Media Advertising",
    description:
"Print media advertising builds credibility and trust through strategic newspaper advertising and magazine placements. It is ideal for detailed brand communication, corporate advertising, real estate promotions, and targeting high-intent print readership.",
    useCases: ["Corporate ads", "Real estate", "Recruitment"],
    details: {
      whatItDoes:
        "Print advertising allows detailed storytelling with strong editorial trust.",
      strengths: [
        "High credibility and trust",
        "Ideal for detailed information",
        "Targeted readership reach",
      ],
      considerations: [
        "Best for specific audiences",
        "Not ideal for instant lead generation",
      ],
    },
  },

  {
    id: "celebrity",
    icon: Star,
    title: "Celebrity Management",
    description:
"Celebrity management and endorsement services help brands gain instant recognition by collaborating with popular celebrities and public figures. Celebrity advertising strengthens brand image, emotional connection, and campaign amplification across television, digital, and social media platforms.",
    useCases: ["Brand endorsements", "Events", "Influencer launches"],
    details: {
      whatItDoes:
        "Celebrity endorsements create instant attention and emotional association with your brand.",
      strengths: [
        "High brand recall",
        "Strong emotional connect",
        "Quick amplification across media",
      ],
      considerations: [
        "Requires strong brand-celebrity alignment",
        "Needs careful reputation management",
      ],
    },
  },

  {
    id: "creative",
    icon: Palette,
    title: "Creative Design & Printing",
    description:
"Creative design and printing services convert brand strategy into visually compelling creatives, marketing collateral, and print materials. From graphic design to high-quality printing, we ensure brand consistency, premium aesthetics, and strong market presence.",
    useCases: ["Brochures", "Packaging", "Exhibition creatives"],
    details: {
      whatItDoes:
        "Creative services convert brand strategy into visually compelling communication assets.",
      strengths: [
        "Strong brand consistency",
        "Premium visual appeal",
        "Fast execution turnaround",
      ],
      considerations: [
        "Best results come with clear creative briefs",
      ],
    },
  },

  {
    id: "brand",
    icon: Sparkles,
    title: "Brand Creative Development",
    description:
"Brand creative development focuses on building a strong brand identity through strategic design, messaging, and visual systems. This service helps businesses improve brand positioning, customer perception, and long-term brand value across all marketing channels.",
    useCases: ["New brands", "Rebranding", "Brand refresh"],
    details: {
      whatItDoes:
        "Brand development defines how your brand looks, sounds, and connects with audiences.",
      strengths: [
        "Creates distinct brand identity",
        "Improves long-term brand value",
        "Clear strategic positioning",
      ],
      considerations: [
        "Best suited for long-term growth vision",
      ],
    },
  },
];

export function ServicesList() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate-in",
              "fade-in",
              "slide-in-from-bottom-8"
            );
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
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-14">
        {services.map((service, index) => {
          const isOpen = openId === service.id;

          return (
            <Card
              key={service.id}
              data-animate
              style={{ animationDelay: `${index * 120}ms` }}
              className="
                group relative bg-card/80 border border-border overflow-hidden
                scroll-mt-24
                transition-all duration-700 ease-out
                hover:-translate-y-4 hover:scale-[1.02]
                hover:shadow-[0_35px_90px_-25px_rgba(212,175,55,0.35)]
              "
            >
              <CardContent className="relative p-8">
                {!isOpen && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 backdrop-blur-[6px] bg-white/[0.02]" />
                )}

                <div className="relative grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex gap-4 mb-4 items-start">
                      <div className="p-4 rounded-xl bg-primary/10 text-primary">
                        <service.icon className="h-7 w-7" />
                      </div>
                      <h2 className="text-2xl font-bold">{service.title}</h2>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <button
  onClick={() => setOpenId(isOpen ? null : service.id)}
  aria-label={isOpen ? "Hide details" : "Show details"}
  className="
    flex items-center justify-center
    h-9 w-9 rounded-full
    border border-primary/30
    text-primary
    transition-all duration-300
    hover:bg-primary hover:text-black
  "
>
  <ChevronDown
    className={`h-4 w-4 transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`}
  />
</button>

                  </div>

                  <div className="lg:border-l lg:border-border lg:pl-8">
                    <h3 className="text-sm font-semibold text-primary uppercase mb-3">
                      Use Cases
                    </h3>
                    <div className="space-y-3">
                      {service.useCases.map((u) => (
                        <div
                          key={u}
                          className="px-4 py-2 bg-secondary rounded-lg text-sm transition-all duration-500 hover:bg-primary/10 hover:text-primary hover:translate-x-2"
                        >
                          {u}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-700 ease-out ${
                    isOpen ? "max-h-[900px] mt-8 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="rounded-xl border border-border bg-secondary/40 p-6 space-y-5">
                    <p className="text-sm text-muted-foreground">
                      {service.details.whatItDoes}
                    </p>

                    <ul className="space-y-2 text-sm">
                      {service.details.strengths.map((s) => (
                        <li key={s}>✔ {s}</li>
                      ))}
                    </ul>

                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.details.considerations.map((c) => (
                        <li key={c}>• {c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
