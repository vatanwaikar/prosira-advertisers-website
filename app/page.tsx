import { HeroSection } from "@/components/home/hero-section";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { StatsSection } from "@/components/home/stats-section";
import { ClientsSection } from "@/components/home/clients-section";
import { CTASection } from "@/components/home/cta-section";

export const metadata = {
  title: "Prosira Advertisers - Premium Advertising Agency | Pune",
  description: "We build powerful brand presence through strategic advertising, digital growth, and experiential marketing. Leading advertising agency in Pune delivering measurable results.",
  keywords: ["advertising agency", "digital marketing", "branding", "pune", "prosira advertisers"],
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
    </>
  );
}
