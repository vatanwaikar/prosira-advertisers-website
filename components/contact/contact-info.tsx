"use client";

import { useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* CONTACT DETAILS */
const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 90288 15714",
    href: "tel:+919028815714",
    description: "Mon–Sat, 9:00 AM – 7:00 PM",
  },
  {
    icon: Mail,
    label: "Email",
    value: "connect@prosira.in",
    href: "mailto:connect@prosira.in",
    description: "Response within 6 hours",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra",
    href: "#map",
    description: "India-based operations",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Sat",
    href: null,
    description: "Sunday Closed",
  },
];

/* SOCIAL LINKS */
const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1DnoEvbjBx/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/prosira_advertisers",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/prosiraadvertisers/",
    icon: Linkedin,
  },
];

export function ContactInfo() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="space-y-12">
      {/* HEADER */}
      <div data-animate className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold">
          Contact Prosira Advertisers
        </h2>

        <p className="text-primary/80 font-medium">
          We don’t just place ads. We build visibility.
        </p>

        <p className="text-muted-foreground max-w-2xl">
          Connect with our advertising experts for media planning, outdoor
          advertising, radio, television, print, and branding solutions in India.
        </p>
      </div>

      {/* HORIZONTAL CONTACT BAR (FIXED SIZE + TIGHT) */}
      <div
  data-animate
  className="
    grid grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
    gap-5
  "
>

        {contactDetails.map((detail, index) => (
          <div
            key={detail.label}
            className={`
              relative min-w-[240px] max-w-[260px]
              flex gap-3 items-start
              p-5 rounded-xl
              border border-white/10
              backdrop-blur-lg
              transition-all duration-400
              hover:-translate-y-0.5
              opacity-80 hover:opacity-100
              bg-gradient-to-b from-white/[0.06] to-white/[0.015]
            `}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="p-2.5 rounded-lg bg-primary/15 text-primary shrink-0">
              <detail.icon className="h-4.5 w-4.5" />
            </div>

            <div className="space-y-0.5">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                {detail.label}
              </div>

              {detail.href ? (
                <a
                  href={detail.href}
                  className="block font-semibold text-sm hover:text-primary transition-colors"
                >
                  {detail.value}
                </a>
              ) : (
                <div className="font-semibold text-sm">{detail.value}</div>
              )}

              <div className="text-xs text-muted-foreground">
                {detail.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GOLD DIVIDER (THINNER + SUBTLE) */}
      <div data-animate className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <span className="text-[11px] tracking-widest uppercase text-primary/70">
          Trusted Advertising Partner Since 2018
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

    {/* COMPACT WHATSAPP TILE (SQUARE & CENTERED) */}
<div
  data-animate
  className="
    mx-auto
    flex flex-col items-center justify-center
    gap-3
    px-6 py-5
    rounded-xl
    border border-primary/30
    bg-gradient-to-b from-primary/15 to-primary/5
    w-[220px]
  "
>
  <div className="p-2.5 rounded-full bg-green-500/25">
    <MessageCircle className="h-5 w-5 text-green-500" />
  </div>

  <div className="text-center">
    <h3 className="text-sm font-semibold">
      WhatsApp Support
    </h3>
    <p className="text-xs text-muted-foreground">
      Quick replies
    </p>
  </div>

  <Button
    asChild
    className="
      h-8 px-4
      bg-green-600 hover:bg-green-700
      text-white text-xs font-medium
      rounded-full
    "
  >
    <a
      href="https://wa.me/919028815714?text=Hi,%20I%20am%20interested%20in%20your%20advertising%20services"
      target="_blank"
      rel="noopener noreferrer"
    >
      Chat
    </a>
  </Button>
</div>
      </section>
  );
}
