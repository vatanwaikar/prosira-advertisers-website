"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useRef } from "react";

export function ServicesCTA() {
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
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-primary/10 via-secondary to-primary/10"
    >
      <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <h2
          data-animate
          className="text-3xl md:text-4xl font-bold mb-6 duration-700"
        >
          Ready to Launch Your{" "}
          <span className="text-primary font-serif italic">Campaign?</span>
        </h2>
        <p
          data-animate
          className="text-lg text-muted-foreground mb-8 leading-relaxed duration-700 delay-100"
        >
          Our media experts will help you choose the right mix of traditional advertising
          channels to maximize your brand's reach and impact.
        </p>
        <div
          data-animate
          className="flex flex-col sm:flex-row gap-4 justify-center duration-700 delay-200"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 group"
          >
            <Link href="/contact">
              Get a Media Plan
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary bg-transparent"
          >
            <a href="tel:+919876543210">
              <Phone className="mr-2 h-4 w-4" />
              Call Us Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
