"use client";

import { useEffect, useRef } from "react";
import {
  Search,
  Share2,
  Target,
  BarChart3,
  FileText,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
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
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build a powerful social presence across Facebook, Instagram, LinkedIn, and Twitter. We create engaging content and run targeted campaigns that convert followers into customers.",
    features: [
      "Content creation & curation",
      "Community management",
      "Paid social campaigns",
      "Influencer collaborations",
      "Social analytics & insights",
    ],
  },
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Dominate organic search results with our comprehensive SEO services. From technical audits to content optimization, we improve your visibility and drive qualified traffic.",
    features: [
      "Technical SEO audits",
      "On-page optimization",
      "Content strategy & creation",
      "Link building",
      "Local SEO for Pune businesses",
    ],
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Results-focused campaigns designed to drive conversions. We optimize every touchpoint of the customer journey to maximize your marketing spend efficiency.",
    features: [
      "Conversion rate optimization",
      "Retargeting campaigns",
      "Lead generation funnels",
      "E-commerce optimization",
      "Attribution modeling",
    ],
  },
  {
    icon: FileText,
    title: "Content & Creative Strategy",
    description:
      "Compelling content that tells your brand story. Our creative team develops strategic content across formats—from blogs to videos—that engages and converts.",
    features: [
      "Brand storytelling",
      "Blog & article writing",
      "Video content production",
      "Infographics & visuals",
      "Email marketing campaigns",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Optimization",
    description:
      "Make data-driven decisions with our analytics services. We set up tracking, analyze performance, and provide actionable insights to continuously improve results.",
    features: [
      "GA4 setup & configuration",
      "Custom dashboard creation",
      "Conversion tracking",
      "Monthly performance reports",
      "Strategic recommendations",
    ],
  },
];

export function DigitalServicesList() {
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              data-animate
              className="bg-card border-border hover:border-primary/30 transition-all duration-500 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-border">
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
          ))}
        </div>
      </div>
    </section>
  );
}
