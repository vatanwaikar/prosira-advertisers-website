import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event Management Company in Pune | Brand Events – Prosira Advertisers",
  description:
    "Prosira Advertisers is a professional event management company in Pune offering corporate events, product launches, exhibitions, and brand activations.",
};

export default function EventManagementPunePage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Event Management in <span className="text-primary">Pune</span>
      </h1>

      <p className="text-muted-foreground max-w-3xl mb-10">
        From concept to execution, we manage high-impact brand events and
        corporate experiences across Pune.
      </p>

      <Link href="/contact" className="bg-primary px-8 py-4 rounded-lg text-primary-foreground">
        Plan an Event with Us
      </Link>
    </main>
  );
}
