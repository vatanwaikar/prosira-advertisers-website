import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactMap } from "@/components/contact/contact-map";

export const metadata: Metadata = {
  title: "Contact Us - Advertising Agency Contact Pune",
  description:
    "Get in touch with Prosira Advertisers, the leading advertising agency in Pune. Contact us for TV advertising, digital marketing, event management, and brand solutions.",
  keywords: [
    "advertising agency contact Pune",
    "contact Prosira Advertisers",
    "advertising services Pune",
    "marketing agency contact",
  ],
  openGraph: {
    title: "Contact Prosira Advertisers - Get a Free Quote",
    description:
      "Contact our advertising experts for a free consultation. We offer TV, radio, digital marketing, and event management services in Pune.",
    url: "https://prosiraadvertisers.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <ContactMap />
    </>
  );
}
