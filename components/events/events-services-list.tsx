"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Building2, Rocket, Store, Megaphone, Users, Palette, Wrench, Newspaper, Printer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Store,
    title: "Exhibition Planning & Management",
    description:
      "Complete exhibition planning services including stall design, space planning, exhibitor coordination, and visitor flow management. We help brands maximize visibility at trade fairs, B2B expos, and industry exhibitions through strategic layouts and professional execution.",
    image: "/images/events/exhibition.jpg",
    features: [
      "Stall layout planning",
      "Exhibitor coordination",
      "Visitor flow management",
      "Trade fair execution",
      "Post-event reporting",
    ],
  },
  {
    icon: Building2,
    title: "Trade Show & B2B Expo Management",
    description:
      "End-to-end trade show management solutions covering exhibitor onboarding, branding, logistics, sponsorship integration, and marketing support. Our structured approach ensures successful participation and strong networking opportunities for businesses.",
    image: "/images/events/exhibition.jpg",
    features: [
      "Exhibitor onboarding",
      "Logistics & branding setup",
      "Sponsorship integration",
      "Marketing coordination",
      "Business networking support",
    ],
  },
  {
    icon: Palette,
    title: "Event Concept & Creative Design",
    description:
      "Strategic event concept development with innovative themes, stage design, branding elements, and audience engagement ideas. We focus on creating memorable brand experiences that align with marketing goals.",
    image: "/images/events/product-launch.jpg",
    features: [
      "Theme development",
      "Stage & set design",
      "Brand storytelling elements",
      "Creative installations",
      "Audience engagement planning",
    ],
  },
  {
    icon: Wrench,
    title: "Stall Design & Fabrication",
    description:
      "Custom exhibition stall design and fabrication that enhances brand presence and attracts footfall. Our designs combine creative aesthetics with functional layouts to deliver high-impact visual branding.",
    image: "/images/events/exhibition.jpg",
    features: [
      "Custom stall design",
      "3D visualization",
      "Fabrication & setup",
      "Lighting integration",
      "Branding elements installation",
    ],
  },
  {
    icon: Users,
    title: "On-Ground Execution & Event Management",
    description:
      "Professional on-site event execution managed by experienced teams handling logistics, vendor coordination, production setup, registrations, and technical support to ensure smooth operations.",
    image: "/images/events/corporate-event.jpg",
    features: [
      "Vendor coordination",
      "Production management",
      "Registration handling",
      "Technical supervision",
      "On-site operations control",
    ],
  },
  {
    icon: Rocket,
    title: "Corporate Events & Brand Activations",
    description:
      "Strategic corporate event planning including product launches, conferences, roadshows, and experiential marketing campaigns designed to increase brand engagement and audience interaction.",
    image: "/images/events/brand-activation.jpg",
    features: [
      "Product launches",
      "Conferences & seminars",
      "Roadshows",
      "Experiential marketing",
      "Audience engagement campaigns",
    ],
  },
  {
    icon: Newspaper,
    title: "Sponsorship & Media Integration",
    description:
      "Integrated event marketing strategies including media partnerships, sponsorship planning, promotional campaigns, and digital amplification to maximize event reach and visibility.",
    image: "/images/events/product-launch.jpg",
    features: [
      "Media partnerships",
      "Sponsorship strategy",
      "PR & promotional campaigns",
      "Digital amplification",
      "Brand visibility planning",
    ],
  },
  {
    icon: Megaphone,
    title: "Exhibition Marketing & Lead Generation",
    description:
      "Targeted event promotion and lead generation strategies using digital marketing, social media campaigns, and database outreach to attract the right audience before, during, and after the event.",
    image: "/images/events/brand-activation.jpg",
    features: [
      "Pre-event promotion",
      "Social media campaigns",
      "Database outreach",
      "Lead capture systems",
      "Post-event follow-up strategy",
    ],
  },
  {
    icon: Printer,
    title: "Printing, Branding & Production Support",
    description:
      "Complete event branding solutions including backdrops, standees, signage, stage graphics, flex printing, and on-site installations to maintain consistent brand communication across the venue.",
    image: "/images/events/corporate-event.jpg",
    features: [
      "Backdrop & stage graphics",
      "Flex & signage printing",
      "Standee production",
      "Venue branding setup",
      "On-site installation support",
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
      <div className="site-container">
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
