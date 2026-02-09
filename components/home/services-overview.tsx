"use client";

import Link from "next/link";
import { Tv, Radio, Megaphone, Globe, Calendar, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Tv,
    title: "Television Advertising",
    description:
      "Reach millions through strategic TV campaigns with premium placements across leading channels.",
    href: "/traditional-services#tv",
    category: "Television",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Radio,
    title: "Radio Advertising",
    description:
      "Connect with your audience through engaging audio campaigns on top radio stations.",
    href: "/traditional-services#radio",
    category: "Radio",
    gradient: "from-primary/20 to-yellow-500/20",
  },
  {
    icon: Megaphone,
    title: "Outdoor & Hoardings",
    description:
      "High-impact outdoor advertising solutions including billboards, transit ads, and more.",
    href: "/traditional-services#outdoor",
    category: "Hoardings",
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description:
      "Data-driven digital campaigns including SEO, social media, and performance marketing.",
    href: "/digital-services",
    category: "Digital",
    gradient: "from-primary/20 to-amber-500/20",
  },
  {
    icon: Calendar,
    title: "Events & Expo",
    description:
      "End-to-end event management for corporate events, product launches, and exhibitions.",
    href: "/events-expo",
    category: "Events",
    gradient: "from-orange-500/20 to-primary/20",
  },
  {
    icon: Sparkles,
    title: "Brand Strategy",
    description:
      "Comprehensive brand development from creative design to full brand identity systems.",
    href: "/traditional-services#creative",
    category: "Creative",
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
];

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: (typeof services)[0];
  index: number;
  isVisible: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(60px)",
        transition: `all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 100}ms`,
      }}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative h-full bg-card border border-border/50 rounded-2xl p-6 overflow-hidden hover:border-primary/30 transition-all duration-500 hover-lift">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16" />

        {/* Category badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
          {service.category}
        </div>

        {/* Icon with animated background */}
        <div className="relative mb-4">
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
              isHovered ? "bg-primary scale-110" : "bg-primary/10"
            }`}
          >
            <service.icon
              className={`h-7 w-7 transition-all duration-500 ${
                isHovered ? "text-primary-foreground scale-110" : "text-primary"
              }`}
            />
          </div>
          {/* Floating particles on hover */}
          {isHovered && (
            <>
              <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-primary animate-float" />
              <div className="absolute bottom-0 left-8 w-1.5 h-1.5 rounded-full bg-primary/60 animate-float delay-200" />
            </>
          )}
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
          {service.title} Services
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Link */}
        <Link
  href="/traditional-services"
  className="inline-flex items-center gap-2 text-primary group"
>
  <span className="text-sm font-medium">Explore</span>

  <span className="w-9 h-9 rounded-full border border-primary/40 flex items-center justify-center
                   group-hover:bg-primary/10 transition-all duration-300">
    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
  </span>
</Link>
          
      </div>
    </div>
  );
}

export function ServicesOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-primary text-sm font-medium mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out",
            }}
          >
            <Sparkles className="w-4 h-4" />
            Our Services
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease-out 100ms",
            }}
          >
            <span className="text-foreground">Comprehensive</span>
            <br />
<span className="text-primary font-serif ">
    Advertising Solutions
  </span>          </h2>
          <p
            className="text-lg text-muted-foreground leading-relaxed"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease-out 200ms",
            }}
          >
            From traditional media to digital innovation, we offer end-to-end advertising
            and marketing solutions tailored to your business goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out 800ms",
          }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 magnetic-btn h-14 px-8 text-base relative overflow-hidden group"
          >
            <Link href="/traditional-services">
              <span className="relative z-10 flex items-center gap-2">
                View All Services
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground text-center">
  Looking for a trusted{" "}
  <Link
    href="/advertising-agency-in-pune"
    className="text-primary font-medium hover:underline"
  >
    advertising agency in Pune
  </Link>
  ? Explore how Prosira Advertisers helps brands grow locally.
</p>

      </div>
    </section>
  );
}
