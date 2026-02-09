import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutContent } from "@/components/about/about-content";
import { MissionVision } from "@/components/about/mission-vision";
import { TeamSection } from "@/components/about/team-section";
import { AboutCTA } from "@/components/about/about-cta";

export const metadata: Metadata = {
  title: "About Us | Prosira Advertisers – Advertising Agency in Pune",
  description:
    "Learn about Prosira Advertisers, a leading advertising agency in Pune offering strategic, creative, and performance-driven campaigns across media, events, and branding.",
  keywords: [
    "advertising agency in Pune",
    "media agency Pune",
    "event advertising company",
    "branding agency Pune",
  ],
  openGraph: {
    title: "About Prosira Advertisers – Advertising Agency in Pune",
    description:
      "Discover Prosira Advertisers, a full-service advertising and media agency delivering impactful campaigns in Pune and Maharashtra.",
    url: "https://prosiraadvertisers.com/about-prosira-advertisers",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutContent />
      <MissionVision />
      <TeamSection />
      <AboutCTA />
    </main>
  );
}
