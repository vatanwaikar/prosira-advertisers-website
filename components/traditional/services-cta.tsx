"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function ServicesCTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-black">
      {/* STRONG GOLD LIGHT – MATCHES ABOUT CTA */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(60%_50%_at_50%_45%,rgba(212,175,55,0.35),rgba(0,0,0,0.95)_75%)]
        "
      />

      <div className="relative site-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Launch Your{" "}
          <span className="text-primary font-serif ">
            Campaign?
          </span>
        </h2>

        <p className="text-lg text-neutral-300 mb-10 leading-relaxed">
          Our media experts will help you choose the right mix of traditional advertising
          channels to maximize your brand&apos;s reach and impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground group"
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
            className="border-primary/40 text-white hover:bg-primary/10 hover:text-primary bg-transparent"
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
