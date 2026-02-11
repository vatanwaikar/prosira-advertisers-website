"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useRef } from "react";

export function DigitalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
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
      className="relative py-24 overflow-hidden bg-gradient-to-r from-primary/10 via-background to-primary/10"
    >
      {/* Spotlight glow – SAME AS ABOUT */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl float-slow" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <h2
          data-animate
          className="f-reveal text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Go{" "}
          <span className="text-primary font-serif ">Digital?</span>
        </h2>

        <p
          data-animate
          className="f-reveal text-lg text-muted-foreground mb-10 leading-relaxed"
        >
          Let&apos;s discuss how our digital marketing expertise can help grow your
          business online. Get a  consultation and a custom strategy proposal.
        </p>

        <div
          data-animate
          className="f-reveal flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="hover-lift bg-primary text-primary-foreground group"
          >
            <Link href="/contact">
              Get  Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="hover-lift border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary"
          >
            <a href="tel:+919028815714" className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              Call Us Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
