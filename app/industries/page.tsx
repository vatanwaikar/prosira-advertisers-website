import { Metadata } from "next";

import { Hero } from "@/components/industries/hero";
import { IndustriesGrid } from "@/components/industries/industries-grid";
import { WhyIndustrySEO } from "@/components/industries/why-industry-seo";
import { Process } from "@/components/industries/process";
import { Benefits } from "@/components/industries/benefits";
import { FAQ } from "@/components/industries/faq";
import { CTA } from "@/components/industries/cta";

export const metadata: Metadata = {
  title: "Industries We Serve | Prosira Advertisers",
  description:
    "Explore industry-focused marketing, SEO, AI SEO, branding, and digital growth solutions for healthcare, builders, restaurants, education, pest control, manufacturing, and more.",
};

export default function IndustriesPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Hero />
      <IndustriesGrid />
      <WhyIndustrySEO />
      <Process />
      <Benefits />
      <FAQ />
      <CTA />
    </main>
  );
}