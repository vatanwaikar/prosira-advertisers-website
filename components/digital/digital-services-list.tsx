"use client";

import { useEffect, useRef, useState } from "react";
import {
  Search,
  Share2,
  Target,
  BarChart3,
  FileText,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "google-ads",
    icon: Target,
    title: "Google Ads",
    description:
      "Maximize ROI with expertly managed Google Ads campaigns. We handle search, display, shopping, and YouTube ads with data-driven optimization for consistent performance.",
    features: [
      "Search & Display campaigns",
      "Shopping & YouTube ads",
      "Conversion tracking setup",
      "A/B testing & optimization",
      "Detailed performance reports",
    ],
    details: {
      whatItDoes:
        "Google Ads helps your business appear instantly in front of high-intent customers who are actively searching for your products or services.",
      strengths: [
        "Immediate visibility & traffic",
        "Highly measurable ROI",
        "Full control over budgets & targeting",
      ],
      considerations: [
        "Best results come with continuous optimization",
        "Works best when landing pages are conversion-optimized",
      ],
    },
  },

  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build a powerful social presence across Facebook, Instagram, LinkedIn, and Twitter.",
    features: [
      "Content creation & curation",
      "Community management",
      "Paid social campaigns",
      "Influencer collaborations",
      "Social analytics & insights",
    ],
    details: {
      whatItDoes:
        "Social media marketing builds brand awareness, trust, and engagement by consistently showing up in your audience’s daily digital life.",
      strengths: [
        "Strong brand recall & engagement",
        "Supports organic + paid growth",
        "Great for community building",
      ],
      considerations: [
        "Results compound over time",
        "Consistency is more important than virality",
      ],
    },
  },

  {
    id: "seo",
    icon: Search,
    title: "SEO Services",
    description:
      "Dominate organic search results with our comprehensive SEO services.",
    features: [
      "Technical SEO audits",
      "On-page optimization",
      "Content strategy & creation",
      "Link building",
      "Local SEO for Pune businesses",
    ],
    details: {
      whatItDoes:
        "SEO improves your website’s visibility on Google organically, bringing long-term, high-quality traffic without paying for every click.",
      strengths: [
        "Sustainable long-term growth",
        "High trust & credibility",
        "Lower cost per lead over time",
      ],
      considerations: [
        "Results take time to build",
        "Works best with quality content & technical foundations",
      ],
    },
  },

  {
    id: "performance",
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Results-focused campaigns designed to drive conversions.",
    features: [
      "Conversion rate optimization",
      "Retargeting campaigns",
      "Lead generation funnels",
      "E-commerce optimization",
      "Attribution modeling",
    ],
    details: {
      whatItDoes:
        "Performance marketing focuses on measurable actions like leads, sales, and sign-ups rather than just impressions.",
      strengths: [
        "Directly tied to business goals",
        "Highly data-driven decisions",
        "Scalable once optimized",
      ],
      considerations: [
        "Needs clean tracking setup",
        "Requires continuous testing & iteration",
      ],
    },
  },

  {
    id: "content",
    icon: FileText,
    title: "Content & Creative Strategy",
    description:
      "Compelling content that tells your brand story across formats.",
    features: [
      "Brand storytelling",
      "Blog & article writing",
      "Video content production",
      "Infographics & visuals",
      "Email marketing campaigns",
    ],
    details: {
      whatItDoes:
        "Content strategy defines how your brand communicates value, builds authority, and educates customers.",
      strengths: [
        "Builds trust & expertise",
        "Supports SEO & social media",
        "Improves conversion quality",
      ],
      considerations: [
        "Consistency matters more than volume",
        "Quality beats quantity always",
      ],
    },
  },

  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & Optimization",
    description:
      "Make data-driven decisions with advanced analytics services.",
    features: [
      "GA4 setup & configuration",
      "Custom dashboard creation",
      "Conversion tracking",
      "Monthly performance reports",
      "Strategic recommendations",
    ],
    details: {
      whatItDoes:
        "Analytics services help you understand what’s working, what’s not, and where to invest for maximum returns.",
      strengths: [
        "Clear visibility into performance",
        "Better marketing decisions",
        "Improved ROI across channels",
      ],
      considerations: [
        "Tracking must be set up correctly from day one",
        "Insights are only useful when acted upon",
      ],
    },
  },
];

export function DigitalServicesList() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);


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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

 useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  const setInitialPosition = () => {
    const half = container.scrollWidth / 2;
    container.scrollLeft = half / 2;
  };

  requestAnimationFrame(setInitialPosition);
  setTimeout(setInitialPosition, 50); // safety

  const handleScroll = () => {
    const half = container.scrollWidth / 2;
    const current = container.scrollLeft;

    if (current > half + 200) {
      container.scrollLeft = current - half;
    }

    if (current < 200) {
      container.scrollLeft = current + half;
    }
  };

  container.addEventListener("scroll", handleScroll, { passive: true });
  return () => container.removeEventListener("scroll", handleScroll);
}, []);



  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        <div  ref={scrollRef}
        className="
    relative flex gap-6 overflow-x-auto pb-6
    snap-none
    scrollbar-hide
  ">
          {/* LEFT FADE */}
<div className="pointer-events-none absolute left-0 top-0 h-full w-10 
  bg-gradient-to-r from-background to-transparent z-20" />

{/* RIGHT FADE */}
<div className="pointer-events-none absolute right-0 top-0 h-full w-14 
  bg-gradient-to-l from-background to-transparent z-20" />

         {[...services, ...services].map((service, index) => {

            const isOpen = openId === service.id;

            return (
              <Card
  key={`${service.id}-${index}`}
  data-animate
  style={{ animationDelay: `${index * 120}ms` }}
  className="
    snap-start
    min-w-[90%] sm:min-w-[48%] md:min-w-[48%] lg:min-w-[48%]
    group relative bg-card border border-border overflow-hidden
    transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
    hover:-translate-y-3 hover:scale-[1.02]
    hover:shadow-[0_25px_60px_-20px_rgba(212,175,55,0.45)]
  "
>

                {/* GOLD LIGHT */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                <CardContent className="relative z-10 p-8 space-y-5">
                  <div className="p-4 rounded-xl w-fit mb-4 bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-black group-hover:-translate-y-1.5 group-hover:scale-110">
                    <service.icon className="h-6 w-6" />
                  </div>

                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                 <button
  onClick={() => setOpenId(isOpen ? null : service.id)}
  className="
    inline-flex items-center justify-center
    h-7 w-7 rounded-full
    text-primary border border-primary/30
    transition-all hover:bg-primary hover:text-black
    mt-2
  "
  aria-label="Toggle details"
>
  <ChevronDown
    className={`h-4 w-4 transition-transform ${
      isOpen ? "rotate-180" : ""
    }`}
  />
</button>
 

                  {/* EXPAND */}
                  <div
                    className={`overflow-hidden transition-all duration-700 ease-out ${
                      isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-4 border-t border-border space-y-4">
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

                  <div className="pt-4 border-t border-border mt-6">
                    <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                      What We Offer
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* SCROLL INDICATOR DOTS (MOBILE ONLY) */}
<div className="flex justify-center gap-2 mt-6 sm:hidden">
  {[1, 2, 3].map((i) => (
    <span
      key={i}
      className={`h-1.5 rounded-full transition-all
        ${i === 1 ? "w-8 bg-primary" : "w-5 bg-primary/30"}
      `}
    />
  ))}
</div>

      </div>
      
    </section>
  );
}
