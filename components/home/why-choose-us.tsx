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
    title: "Local Market Knowledge",
    description:
      "Deep understanding of Pune and Maharashtra markets for targeted regional campaigns.",
  },
  {
    title: "Pan-India Network",
    description:
      "Extensive media network across major cities ensuring wider brand visibility and reach.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Detailed campaign reports with clear insights, performance metrics, and ROI tracking.",
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  // const topFeatures = features.slice(0, 2);
  // const bottomFeatures = features.slice(2);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const FeatureCard = ({
    feature,
    index,
  }: {
    feature: (typeof features)[0];
    index: number;
  }) => (
    <div
      className="group relative"
      onMouseEnter={() => setActiveFeature(index)}
      onMouseLeave={() => setActiveFeature(null)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease-out ${index * 100}ms`,
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
              activeFeature === index ? "bg-primary scale-110" : "bg-primary/20"
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
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-secondary relative overflow-hidden"
    >
      <div className="site-container relative space-y-16">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-20 items-start lg:items-start">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <span
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-gold text-primary text-sm font-medium"
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
              className="text-4xl md:text-5xl font-bold"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s ease-out 300ms",
              }}
            >
              <span className="text-foreground">Your Trusted</span>
              <br />
              <span className="text-primary font-serif">Media Partner</span>
            </h2>

            <p
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s ease-out 400ms",
              }}
            >
              We act as a true media partner, not just a service provider. Our
              experienced team collaborates closely with clients to understand
              business goals and translate them into powerful brand stories that
              create real impact. From strategy and creative development to
              media planning and execution, we ensure every campaign is aligned
              with your vision, target audience, and long-term growth
              objectives.
            </p>

            {/* TOP 2 FEATURES */}
          </div>

          {/* RIGHT IMAGE */}
          {/* RIGHT IMAGE */}
          <div
            className="relative flex justify-center self-start"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(60px)",
              transition: "all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          >
            <div className="relative group w-full max-w-[500px]">
              {/* Square Ring Behind */}
              <div className="absolute -top-6 -right-6 w-28 h-28 border-2 border-primary/40 rounded-xl -z-10" />

              {/* Main Image */}
              <div className="relative h-[320px] md:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-background">
                {" "}
                <Image
                  src="/images/services-bg.jpg"
                  alt="Professional advertising team at work"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-primary/20" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURES FULL WIDTH */}
        {/* FIRST ROW */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* SECOND ROW */}
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {features.slice(3, 6).map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index + 3}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="pt-6">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-12 group"
          >
            <Link href="/about-prosira-advertisers">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
