"use client";

import { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 90288 15714",
    href: "tel:+919876543210",
    description: "Mon-Sat, 9:00 AM - 7:00 PM",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "vijayant@prosira.in",
    href: "mailto:vijayant@prosira.in",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Pune, Maharashtra, India",
    href: "#map",
    description: "Schedule an appointment",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat: 9:00 AM - 7:00 PM",
    href: null,
    description: "Sunday: Closed",
  },
];

export function ContactInfo() {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <div data-animate className="mb-8 duration-700">
        <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
        <p className="text-muted-foreground">
          Reach out through any of these channels and our team will assist you.
        </p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div
            key={detail.label}
            data-animate
            className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors duration-700"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <detail.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">{detail.label}</div>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="font-semibold hover:text-primary transition-colors"
                >
                  {detail.value}
                </a>
              ) : (
                <div className="font-semibold">{detail.value}</div>
              )}
              <div className="text-sm text-muted-foreground mt-1">
                {detail.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp CTA */}
      <div
        data-animate
        className="mt-8 p-6 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 duration-700 delay-500"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-full bg-green-500/20">
            <MessageCircle className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <h3 className="font-semibold">Quick Response on WhatsApp</h3>
            <p className="text-sm text-muted-foreground">
              Get instant replies from our team
            </p>
          </div>
        </div>
        <Button
          asChild
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          <a
            href="https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20your%20advertising%20services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Chat on WhatsApp
          </a>
        </Button>
      </div>

      {/* Social Media */}
      <div data-animate className="mt-8 duration-700 delay-600">
        <h3 className="font-semibold mb-4">Follow Us</h3>
        <div className="flex gap-4">
          {["Facebook", "Instagram", "LinkedIn", "Twitter"].map((social) => (
            <a
              key={social}
              href="#"
              className="px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/30 hover:text-primary transition-colors text-sm"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
