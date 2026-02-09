"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useRef } from "react";

export function CTASection() {
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
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/events-bg.jpg"
          alt="Contact us background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <span
            data-animate
            className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4 duration-700"
          >
            Let's Work Together
          </span>
          <h2
            data-animate
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 duration-700 delay-100"
          >
            Ready to{" "}
            <span className="text-primary font-serif ">Transform</span> Your
            Brand?
          </h2>
          <p
            data-animate
            className="text-lg text-muted-foreground mb-8 leading-relaxed duration-700 delay-200"
          >
            Get in touch with our team to discuss your advertising goals. We'll create
            a customized strategy that delivers measurable results for your business.
          </p>

          <div
            data-animate
            className="flex flex-col sm:flex-row gap-4 duration-700 delay-300"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
            >
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary bg-transparent"
            >
             <a
  href="tel:+919028815714"
  aria-label="Call Prosira Advertisers Pune"
>
  <Phone className="mr-2 h-4 w-4" />
  +91 90288 15714
</a>

            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
