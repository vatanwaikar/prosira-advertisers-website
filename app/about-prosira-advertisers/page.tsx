import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutContent } from "@/components/about/about-content";
import { MissionVision } from "@/components/about/mission-vision";
import { TeamSection } from "@/components/about/team-section";
import { AboutCTA } from "@/components/about/about-cta";

export const metadata: Metadata = {
  title: "About Prosira Advertisers - 360° Advertising & Media Solutions",
  description:
    "Prosira Advertisers is a leading advertising agency in Pune offering strategic, creative, and performance-driven campaigns. Learn about our mission, vision, and expertise in media, events, and branding.",
  keywords: [
    "advertising agency in Pune",
    "media agency in Pune",
    "event advertising company",
    "branding agency Pune",
  ],
  openGraph: {
    title: "About Prosira Advertisers - 360° Advertising & Media Solutions",
    description:
      "Full-service advertising, media, and event solutions company delivering strategic campaigns in Pune and Maharashtra.",
    url: "https://prosiraadvertisers.com/about-prosira-advertisers",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <MissionVision />
      <TeamSection />
      <AboutCTA />
    </>
  );
}
