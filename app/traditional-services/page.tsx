import type { Metadata } from "next";
import { TraditionalHero } from "@/components/traditional/traditional-hero";
import { ServicesList } from "@/components/traditional/services-list";
import { ServicesCTA } from "@/components/traditional/services-cta";
import { TraditionalServicesFAQ } from "@/components/faq/TraditionalServicesFAQ";

export const metadata: Metadata = {
  title: "Advertising Services in Pune",
  description:
    "Comprehensive traditional advertising services including TV advertising, radio advertising, outdoor & hoardings, cinema advertising, newspaper & print media, celebrity management, and creative design in Pune.",
  keywords: [
    "advertising services in Pune",
    "TV advertising",
    "radio advertising",
    "outdoor advertising",
    "newspaper ads",
    "hoarding advertising Pune",
  ],
  openGraph: {
    title: "Advertising Services - Prosira Advertisers",
    description:
      "TV, Radio, Outdoor, Print, Cinema advertising and more. Full-service traditional media solutions in Pune.",
    url: "https://prosiraadvertisers.com/traditional-services",
  },
};

export default function TraditionalServicesPage() {
  return (
    <>
      <TraditionalHero />
      <ServicesList />
      <TraditionalServicesFAQ />
      <ServicesCTA />
      
    </>
  );
}
