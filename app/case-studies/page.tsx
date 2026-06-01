import { Metadata } from "next";

import { Hero } from "@/components/case-studies/hero";
import { FeaturedCaseStudies } from "@/components/case-studies/featured-case-studies";
import { Results } from "@/components/case-studies/results";
import { Industries } from "@/components/case-studies/industries";
import { Process } from "@/components/case-studies/process";
import { Testimonials } from "@/components/case-studies/testimonials";
import { CTA } from "@/components/case-studies/cta";

export const metadata: Metadata = {
  title: "Case Studies | Prosira Advertisers",
  description:
    "Explore real-world marketing case studies, SEO growth, Google Ads performance, website transformations, and AI-driven marketing success stories by Prosira.",
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Hero />
      <FeaturedCaseStudies />
      <Results />
      <Industries />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  );
}