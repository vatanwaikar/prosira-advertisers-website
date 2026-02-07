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
  Gift, 
  BookOpen,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  // 1️⃣ RADIO
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

  // 2️⃣ TELEVISION
  {
    id: "tv",
    icon: Tv,
    title: "Television Advertising",
    description:
      "Television advertising helps your brand reach millions of viewers through high-impact TV ad placements on leading national and regional television channels.",
    useCases: ["Product launches", "Brand awareness campaigns", "Festive promotions"],
    details: {
      whatItDoes:
        "Television advertising gives your brand mass visibility during high-attention moments.",
      strengths: [
        "Creates known-brand perception fast",
        "Builds strong emotional connection",
        "Excellent for launches",
      ],
      considerations: [
        "Best used when awareness is the primary goal",
        "Works best with repetition",
      ],
    },
  },

  // 3️⃣ NEWSPAPER
  {
    id: "print",
    icon: Newspaper,
    title: "Newspaper Advertising",
    description:
      "Newspaper advertising builds credibility and trust through high-impact print placements in leading publications.",
    useCases: ["Corporate ads", "Real estate", "Public notices"],
    details: {
      whatItDoes:
        "Delivers trusted brand messaging to high-intent readers.",
      strengths: [
        "High credibility",
        "Strong regional targeting",
        "Editorial trust",
      ],
      considerations: [
        "Not ideal for instant conversions",
      ],
    },
  },

  // 4️⃣ CINEMA
  {
    id: "cinema",
    icon: Film,
    title: "Cinema Advertising",
    description:
      "Cinema advertising places your brand in a distraction-free premium theatre environment.",
    useCases: ["Youth campaigns", "Luxury launches"],
    details: {
      whatItDoes:
        "Delivers immersive big-screen exposure with high recall.",
      strengths: [
        "Captive audience",
        "Premium brand image",
      ],
      considerations: [
        "Limited show timings",
      ],
    },
  },

  // 5️⃣ AUTO HOOD & BACK PANEL (NEW)
  {
    id: "auto-branding",
    icon: Megaphone,
    title: "Auto Hood & Back Panel Advertising",
    description:
      "Auto rickshaw hood and back panel advertising delivers high-frequency brand visibility across busy city routes and local neighborhoods.",
    useCases: ["Local branding", "Retail promotions"],
    details: {
      whatItDoes:
        "Turns moving vehicles into mobile brand billboards.",
      strengths: [
        "High daily impressions",
        "Excellent local reach",
        "Cost-effective outdoor medium",
      ],
      considerations: [
        "Best for short, bold creatives",
      ],
    },
  },

  // 6️⃣ OUTDOOR
  {
    id: "outdoor",
    icon: Megaphone,
    title: "Outdoor & Hoardings",
    description:
      "Outdoor advertising provides 24/7 brand visibility through billboards and transit media.",
    useCases: ["City branding", "Highway visibility"],
    details: {
      whatItDoes:
        "Ensures constant brand exposure in high-footfall areas.",
      strengths: [
        "24/7 exposure",
        "Strong geographic targeting",
      ],
      considerations: [
        "Short messaging works best",
      ],
    },
  },

  // 7️⃣ SOCIETY ACTIVATION & DIGITAL SCREENS (NEW)
  {
    id: "society-activation",
    icon: Sparkles,
    title: "Society Activation & Digital Screen Advertising",
    description:
      "Society activations and digital screen advertising connect brands directly with residential audiences through events, kiosks, and digital displays.",
    useCases: ["Product sampling", "Local launches"],
    details: {
      whatItDoes:
        "Creates direct engagement at residential touchpoints.",
      strengths: [
        "Highly targeted audience",
        "Interactive engagement",
      ],
      considerations: [
        "Requires on-ground coordination",
      ],
    },
  },

  // 8️⃣ PRINTING SERVICES
  {
    id: "printing",
    icon: Palette,
    title: "Printing Services (Vinyl, Flex & More)",
    description:
      "High-quality printing services including vinyl, flex, banners, standees, and promotional materials.",
    useCases: ["Outdoor creatives", "Retail branding"],
    details: {
      whatItDoes:
        "Transforms creative designs into physical brand assets.",
      strengths: [
        "Durable materials",
        "Quick execution",
      ],
      considerations: [
        "Material selection impacts longevity",
      ],
    },
  },

  // 9️⃣ CREATIVE DESIGN
  {
    id: "creative",
    icon: Palette,
    title: "Creative Design Services",
    description:
      "Creative design services for branding, advertising creatives, and marketing communication.",
    useCases: ["Ad creatives", "Brand identity"],
    details: {
      whatItDoes:
        "Builds visually strong and consistent brand communication.",
      strengths: [
        "Strong visual appeal",
        "Brand consistency",
      ],
      considerations: [
        "Clear briefs improve output quality",
      ],
    },
  },

  // 🔟 CORPORATE GIFTS
  {
    id: "corporate-gifts",
    icon: Gift,
    title: "Corporate Gifting Solutions",
    description:
      "Customized corporate gifting solutions to strengthen business relationships.",
    useCases: ["Client appreciation", "Employee rewards"],
    details: {
      whatItDoes:
        "Creates emotional goodwill through thoughtful gifting.",
      strengths: [
        "High recall value",
        "Custom branding",
      ],
      considerations: [
        "Quality impacts brand image",
      ],
    },
  },

  // 1️⃣1️⃣ MAGAZINE
  {
    id: "magazine-ads",
    icon: BookOpen,
    title: "Magazine & In-Flight Magazine Advertising",
    description:
      "Premium magazine and in-flight advertising for luxury and niche audiences.",
    useCases: ["Luxury branding", "Business travelers"],
    details: {
      whatItDoes:
        "Delivers long-lasting brand visibility in trusted publications.",
      strengths: [
        "Premium audience",
        "High trust factor",
      ],
      considerations: [
        "Best for brand-building campaigns",
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
