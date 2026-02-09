import type { Metadata } from "next";
import { DigitalHero } from "@/components/digital/digital-hero";
import { DigitalServicesList } from "@/components/digital/digital-services-list";
import  DigitalProcess  from "@/components/digital/digital-process";
import { DigitalCTA } from "@/components/digital/digital-cta";
import { DigitalServicesFAQ } from "@/components/faq/DigitalServicesFAQ";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Pune",
  description:
    "Leading digital marketing agency in Pune offering Google Ads, SEO services, social media marketing, performance marketing, content strategy, and analytics optimization for measurable business growth.",
  keywords: [
    "digital marketing agency in Pune",
    "Google Ads Pune",
    "SEO services Pune",
    "social media marketing",
    "performance marketing",
    "content strategy",
  ],
  openGraph: {
    title: "Digital Marketing Services - Prosira Advertisers",
    description:
      "Data-driven digital marketing solutions including Google Ads, SEO, social media, and performance marketing in Pune.",
    url: "https://prosiraadvertisers.com/digital-services",
  },
};

export default function DigitalServicesPage() {
  return (
    <>
      <DigitalHero />
      <DigitalServicesList />
      <DigitalProcess />
      <DigitalServicesFAQ />
      <DigitalCTA />
    </>
  );
}
