import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Radio Advertising in Pune | FM Radio Ads – Prosira Advertisers",
  description:
    "Prosira Advertisers offers effective radio advertising in Pune with creative jingles, media planning, and FM radio campaign execution.",
};

export default function RadioAdvertisingPunePage() {
  return (
    <>
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Radio Advertising in <span className="text-primary">Pune</span>
        </h1>

        <p className="text-muted-foreground max-w-3xl mb-10">
          We deliver impactful radio advertising campaigns in Pune through
          popular FM stations, creative scripting, and strategic media planning.
        </p>

        <ul className="list-disc pl-5 mb-12">
          <li>FM Radio Spot Advertising</li>
          <li>Jingle Creation & Voice Overs</li>
          <li>Campaign Scheduling & Media Buying</li>
          <li>Retail & Local Promotions</li>
        </ul>

        <Link href="/contact" className="bg-primary px-8 py-4 rounded-lg text-primary-foreground">
          Enquire for Radio Advertising
        </Link>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Radio Advertising",
          "areaServed": { "@type": "City", "name": "Pune" },
          "provider": { "@type": "AdvertisingAgency", "name": "Prosira Advertisers" }
        })
      }} />
    </>
  );
}
