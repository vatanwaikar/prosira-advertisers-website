import type { Metadata } from "next";
import { EventsHero } from "@/components/events/events-hero";
import { EventsServicesList } from "@/components/events/events-services-list";
import { EventsGallery } from "@/components/events/events-gallery";
import { EventsCTA } from "@/components/events/events-cta";

export const metadata: Metadata = {
  title: "Event Management Company in Pune",
  description:
    "Leading event management company in Pune specializing in corporate events, product launches, exhibitions, expos, brand activations, and on-ground promotions. End-to-end event solutions.",
  keywords: [
    "event management company in Pune",
    "corporate events Pune",
    "product launch events",
    "exhibitions and expos",
    "brand activations",
    "event planning Pune",
  ],
  openGraph: {
    title: "Events & Expo Management - Prosira Advertisers",
    description:
      "Professional event management services for corporate events, product launches, exhibitions, and brand activations in Pune.",
    url: "https://prosiraadvertisers.com/events-expo",
  },
};

export default function EventsExpoPage() {
  return (
    <>
      <EventsHero />
      <EventsServicesList />
      <EventsGallery />
      <EventsCTA />
    </>
  );
}
