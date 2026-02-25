"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  services: [
    { name: "Traditional Media", href: "/advertising-services" },
    { name: "Digital Marketing", href: "/digital-marketing" },
    { name: "Event & Expo", href: "/event-expo" },
    { name: "Services Portfolio", href: "/services" },
    { name: "Digital Portfolio", href: "/digital" },
    { name: "Event Portfolio", href: "/event-expo" },

  ],
  company: [
    { name: "About Us", href: "/about-prosira-advertisers" },
    { name: "Our Team", href: "/team" },
    { name: "Our Work", href: "/work" },
    { name: "Contact", href: "/contact" },
    { name: "List Your Media", href: "/list-your-media" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Channel Partners", href: "/channel-partners" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setIsSubscribed(true);
        setEmail("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="site-container py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="space-y-6">

            {/* Newsletter */}
            <div className="space-y-3">
             <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
                Subscribe to Newsletter
              </h3>

              {isSubscribed ? (
                <div className="text-sm text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                  ✓ Successfully subscribed!
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex gap-2"
                >
                  <Input
                    type="email"
                    placeholder="Your email"
                    aria-label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-10 text-sm bg-background border-border"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="sm"
                    className="h-10 px-3 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}

              <p className="text-xs text-muted-foreground">
                Get latest advertising insights and updates
              </p>
            </div>

            <Link href="/" className="inline-block" aria-label="Prosira Advertisers Home">
              <div className="flex flex-col">
                {/* <span className="text-2xl font-bold tracking-tight text-primary font-serif">
                  PROSIRA
                </span>
                <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Advertisers
                </span> */}
              </div>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Prosira Advertisers is a comprehensive advertising and event company delivering
              360° media solutions with strategic and creative campaigns.
            </p>

          </div>

          {/* SERVICES */}
          <div className="lg:pl-20">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div className="lg:pl-12">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:pl-16">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">

              <li>
                <a
                  href="tel:+919028815714"
                  aria-label="Call Prosira Advertisers"
                  className="flex gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +91 90288 15714
                </a>
              </li>

              <li>
                <a
                  href="mailto:connect@prosira.in"
                  aria-label="Email Prosira Advertisers"
                  className="flex gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  connect@prosira.in
                </a>
              </li>

              <li className="flex gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Pune, Maharashtra, India
              </li>

            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Prosira Advertisers. All rights reserved.
            </p>

            <div className="flex gap-4">
              <Link
                href="/privacy-policy"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
