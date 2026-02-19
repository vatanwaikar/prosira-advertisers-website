import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { StatsSection } from "@/components/home/stats-section";
import { ClientsSection } from "@/components/home/clients-section";
import { CTASection } from "@/components/home/cta-section";
import { HomepageSEOSection } from "@/components/home/homepage-seo-section";


export const metadata: Metadata = {
  title: "Prosira Advertisers | Leading Advertising Agency in Pune",
  description:
    "Prosira Advertisers is a full-service advertising agency in Pune offering TV, radio, outdoor hoardings, digital marketing, branding, and event management solutions across Maharashtra.",
  keywords: [
    "advertising agency in Pune",
    "digital marketing agency Pune",
    "outdoor advertising Pune",
    "radio advertising Pune",
    "TV advertising agency",
    "event management Pune",
    "branding agency Maharashtra",
  ],

  alternates: {
    canonical: "https://prosira.in/",
  },

  openGraph: {
    type: "website",
    url: "https://prosira.in/",
    title: "Prosira Advertisers | Premium Advertising Agency in Pune",
    description:
      "Strategic advertising, media planning, digital marketing, and event solutions delivering measurable growth for brands in Pune and across Maharashtra.",
    siteName: "Prosira Advertisers",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Prosira Advertisers | Advertising Agency Pune",
    description:
      "TV, Radio, Outdoor, Digital & Event Marketing Solutions in Pune.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <StatsSection />
      <ClientsSection />
      <CTASection />
      <HomepageSEOSection />
    </>
  );
}
