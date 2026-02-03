"use client";

import { useEffect, useRef } from "react";
import {
  Tv,
  Radio,
  Megaphone,
  Film,
  Newspaper,
  Star,
  Palette,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "tv",
    icon: Tv,
    title: "Television Advertising",
    description:
      "Reach millions of viewers through strategic TV ad placements across leading national and regional channels. Our media buying expertise ensures premium slots at competitive rates.",
    benefits: [
      "Wide audience reach across demographics",
      "High impact visual storytelling",
      "Brand credibility and trust building",
    ],
    useCases: [
      "Product launches",
      "Brand awareness campaigns",
      "Festive promotions",
    ],
  },
  {
    id: "radio",
    icon: Radio,
    title: "Radio Advertising",
    description:
      "Connect with your target audience through engaging audio campaigns on popular FM and community radio stations. Perfect for local market penetration and frequency-based campaigns.",
    benefits: [
      "Cost-effective reach",
      "High frequency messaging",
      "Local market targeting",
    ],
    useCases: [
      "Retail promotions",
      "Event announcements",
      "Brand jingles",
    ],
  },
  {
    id: "outdoor",
    icon: Megaphone,
    title: "Outdoor & Hoardings",
    description:
      "Dominate the visual landscape with high-impact outdoor advertising including billboards, hoardings, bus shelters, transit ads, and digital screens across prime locations.",
    benefits: [
      "24/7 brand visibility",
      "Location-based targeting",
      "Large format impact",
    ],
    useCases: [
      "Highway advertising",
      "City center visibility",
      "Airport/railway placements",
    ],
  },
  {
    id: "cinema",
    icon: Film,
    title: "Cinema Advertising",
    description:
      "Captivate audiences in a distraction-free environment with cinema advertising across multiplexes and single screens. High engagement rates and premium brand positioning.",
    benefits: [
      "Captive audience attention",
      "Premium brand association",
      "High recall rates",
    ],
    useCases: [
      "Movie tie-ups",
      "Premium product launches",
      "Youth-targeted campaigns",
    ],
  },
  {
    id: "print",
    icon: Newspaper,
    title: "Newspaper & Print Media",
    description:
      "Build credibility and reach informed audiences through strategic placements in leading newspapers and magazines. Ideal for detailed messaging and announcement campaigns.",
    benefits: [
      "Editorial credibility",
      "Targeted readership",
      "Detailed information delivery",
    ],
    useCases: [
      "Corporate announcements",
      "Recruitment advertising",
      "Real estate campaigns",
    ],
  },
  {
    id: "celebrity",
    icon: Star,
    title: "Celebrity Management Services",
    description:
      "Leverage the power of celebrity endorsements with our end-to-end celebrity management services. From selection to campaign execution, we handle it all.",
    benefits: [
      "Instant brand recall",
      "Emotional connection",
      "Social media amplification",
    ],
    useCases: [
      "Brand endorsements",
      "Event appearances",
      "Social media collaborations",
    ],
  },
  {
    id: "creative",
    icon: Palette,
    title: "Creative Design & Printing",
    description:
      "Transform ideas into stunning visuals with our creative design services. From brochures to banners, packaging to point-of-sale materials, we deliver print-ready excellence.",
    benefits: [
      "Professional design quality",
      "Brand consistency",
      "Quick turnaround",
    ],
    useCases: [
      "Marketing collaterals",
      "Packaging design",
      "Exhibition materials",
    ],
  },
  {
    id: "brand",
    icon: Sparkles,
    title: "Brand Creative Development",
    description:
      "Build a powerful brand identity from the ground up. Our strategic brand development services include logo design, brand guidelines, messaging, and complete visual identity systems.",
    benefits: [
      "Distinctive brand identity",
      "Strategic positioning",
      "Long-term brand value",
    ],
    useCases: [
      "New brand launches",
      "Rebranding projects",
      "Brand refresh initiatives",
    ],
  },
];

export function ServicesList() {
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
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="space-y-12">
          {services.map((service, index) => (
            <Card
              key={service.id}
              id={service.id}
              data-animate
              className="bg-card border-border hover:border-primary/30 transition-all duration-500 overflow-hidden scroll-mt-24"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{service.title}</h2>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                        Business Benefits
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="lg:border-l lg:border-border lg:pl-8">
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                      Use Cases
                    </h3>
                    <div className="space-y-3">
                      {service.useCases.map((useCase) => (
                        <div
                          key={useCase}
                          className="px-4 py-2 bg-secondary rounded-lg text-sm"
                        >
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
