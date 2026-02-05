"use client";

import Image from "next/image";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Strategic Approach",
    description:
      "Every campaign starts with deep market research and strategic planning to ensure maximum ROI.",
  },
  {
    title: "Creative Excellence",
    description:
      "Our award-winning creative team delivers compelling visuals and messaging that resonates.",
  },
  {
    title: "Media Expertise",
    description:
      "Strong relationships with media partners ensure premium placements at competitive rates.",
  },
  {
    title: "Results Driven",
    description:
      "We focus on measurable outcomes with detailed analytics and performance tracking.",
  },
  {
    title: "Full-Service Agency",
    description:
      "From concept to execution, we handle everything under one roof for seamless campaigns.",
  },
  {
    title: "Local Market Knowledge",
    description:
      "Deep understanding of Pune and Maharashtra markets for targeted regional campaigns.",
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

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
    <section ref={sectionRef} className="py-32 bg-secondary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float delay-700" />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-60px)",
              transition: "all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src="/images/services-bg.jpg"
                alt="Professional advertising team at work"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/40 to-primary/20" />
              
              {/* Overlay content */}
              <div className="absolute inset-0 flex items-end p-8">
                <div className="glass rounded-xl p-6 w-full max-w-sm">
                  <div className="flex items-center gap-4">
<div
  className="
    relative
    w-16 h-16
    rounded-full
    flex items-center justify-center

    bg-primary/90
    backdrop-blur-[2px]

    ring-1 ring-primary/30
    shadow-[0_0_20px_rgba(212,175,55,0.25)]
  "
>
  <span className="
    relative z-10
    text-2xl
    font-bold
    text-primary-foreground
  ">
    15+
  </span>
</div>

                    <div>
                      <div className="font-semibold text-lg text-foreground">Years of Excellence</div>
                      <div className="text-sm text-muted-foreground">Serving brands since 2009</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl animate-spin-slow" />
<div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/20 rounded-full flex items-center justify-center overflow-hidden">
  <Image
    src="/prosra-icon-black-png.png"
    alt="Prosira Advertisers"
    width={130}
    height={130}
    className="
      object-contain
      pointer-events-none

      /* WATERMARK GOLD */
      invert
      brightness-180

      opacity-30
      scale-90
    "
  />
</div>

          </div>

          {/* Content Side */}
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-primary text-sm font-medium mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s ease-out 200ms",
              }}
            >
              <Sparkles className="w-4 h-4" />
              Why Choose Us
            </span>

            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s ease-out 300ms",
              }}
            >
              <span className="text-foreground">Your Trusted</span>
              <br />
              <span className="text-primary font-serif italic">Media Partner</span>
            </h2>

            <p
              className="text-lg text-muted-foreground mb-10 leading-relaxed"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s ease-out 400ms",
              }}
            >
              We act as a true media partner, not just a service provider. Our
              experienced team collaborates closely with clients to understand business
              goals and translate them into powerful brand stories.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative"
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.6s ease-out ${500 + index * 100}ms`,
                  }}
                >
                  <div
                    className={`p-4 rounded-xl transition-all duration-300 cursor-default ${
                      activeFeature === index
                        ? "bg-card border border-primary/30"
                        : "hover:bg-card/50"
                    }`}
                  >
                    <div className="flex gap-3">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          activeFeature === index
                            ? "bg-primary scale-110"
                            : "bg-primary/20"
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 transition-colors duration-300 ${
                            activeFeature === index
                              ? "text-primary-foreground"
                              : "text-primary"
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p
                          className={`text-sm text-muted-foreground transition-all duration-300 ${
                            activeFeature === index
                              ? "max-h-20 opacity-100"
                              : "max-h-0 opacity-0 overflow-hidden sm:max-h-20 sm:opacity-100"
                          }`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="mt-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s ease-out 1100ms",
              }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 magnetic-btn h-12 px-6 group"
              >
                <Link href="/about-prosira-advertisers">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
