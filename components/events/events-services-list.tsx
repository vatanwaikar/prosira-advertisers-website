"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Building2, Rocket, Store, Megaphone, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Professional corporate event management including conferences, seminars, annual meetings, award ceremonies, and team-building activities. We handle everything from venue selection to post-event reporting.",
    image: "/images/events/corporate-event.jpg",
    features: [
      "Venue selection & setup",
      "Audio-visual production",
      "Guest management",
      "Catering coordination",
      "Event documentation",
    ],
  },
  {
    icon: Rocket,
    title: "Product Launches",
    description:
      "Create buzz and excitement around your new product with spectacular launch events. We design immersive experiences that showcase your product's unique value proposition.",
    image: "/images/events/product-launch.jpg",
    features: [
      "Creative concept development",
      "Stage & set design",
      "Media coordination",
      "Live demonstrations",
      "Social media integration",
    ],
  },
  {
    icon: Store,
    title: "Exhibitions & Expos",
    description:
      "Stand out at trade shows and exhibitions with our comprehensive expo management services. From booth design to lead capture, we ensure maximum impact and ROI.",
    image: "/images/events/exhibition.jpg",
    features: [
      "Exhibition booth design",
      "Stall fabrication",
      "Product display solutions",
      "Lead generation systems",
      "Post-event analytics",
    ],
  },
  {
    icon: Megaphone,
    title: "Brand Activations",
    description:
      "Engage your audience with interactive brand activations that create memorable experiences. We design activations that drive engagement, sampling, and brand recall.",
    image: "/images/events/brand-activation.jpg",
    features: [
      "Experiential marketing",
      "Sampling campaigns",
      "Interactive installations",
      "Contest & giveaways",
      "Brand ambassador programs",
    ],
  },
  {
    icon: Users,
    title: "On-Ground Promotions",
    description:
      "Take your brand directly to consumers with strategic on-ground promotions. Our field teams execute flawless campaigns that drive awareness and conversions.",
    image: "/images/events/corporate-event.jpg",
    features: [
      "Mall activations",
      "Residential campaigns",
      "Road shows",
      "Canopy activities",
      "Mobile van campaigns",
    ],
  },
];

export function EventsServicesList() {
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
        <div className="space-y-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              data-animate
              className="bg-card border-border hover:border-primary/30 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div
                  className={`grid lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-video lg:aspect-auto ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/50" />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                        What We Deliver
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-2">
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
