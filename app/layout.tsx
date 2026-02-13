// app/layout.tsx - UPDATED UNIVERSAL SINGLE-LINE LAYOUT
import React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { Providers } from "./Providers";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollSafety from "@/components/ScrollSafety";
import ScrollFailsafe from "@/components/ScrollFailsafe";

/* ---------- FONTS (CLS SAFE) ---------- */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

/* ---------- SEO METADATA ---------- */
export const metadata: Metadata = {
  title: {
    default: "Prosira Advertisers | 360° Advertising & Media Solutions in Pune",
    template: "%s | Prosira Advertisers",
  },
  description:
    "Prosira Advertisers is a leading advertising agency in Pune offering TV, radio, outdoor advertising, digital marketing, event management, and brand solutions across Maharashtra.",
  keywords: [
    "advertising agency in Pune",
    "media agency Pune",
    "digital marketing agency Pune",
    "outdoor advertising Pune",
    "event management Pune",
    "branding agency Maharashtra",
  ],
  authors: [{ name: "Prosira Advertisers" }],
  creator: "Prosira Advertisers",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://prosiraadvertisers.com",
    siteName: "Prosira Advertisers",
    title: "Prosira Advertisers | 360° Advertising & Media Solutions",
    description:
      "Full-service advertising, media, and event solutions company delivering strategic, creative, and performance-driven campaigns in Pune and Maharashtra.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosira Advertisers | 360° Advertising & Media Solutions",
    description:
      "Full-service advertising, media, and event solutions company in Pune.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ---------- ROOT LAYOUT ---------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen overflow-x-hidden">
        <Providers>
          {/* UX SAFETY */}
          <ScrollSafety />
          <ScrollFailsafe />

          {/* DESKTOP CURSOR */}
          <CustomCursor />

          <div className="flex flex-col min-h-screen w-full">
            {/* HEADER */}
            <Header />

            {/* MAIN CONTENT */}
            <main
              id="app-scroll-root"
              className="flex-1 pt-[80px] lg:pt-[96px]"
            >
              {children}
            </main>

            {/* FOOTER */}
            <Footer />
          </div>

          <ScrollToTop />
          <Analytics />

          {/* SCHEMA */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                {
                  "@context": "https://schema.org",
                  "@type": "AdvertisingAgency",
                  name: "Prosira Advertisers",
                  url: "https://prosiraadvertisers.com",
                  telephone: "+91-9028815714",
                  logo: "https://prosiraadvertisers.com/logo.png",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "3rd Floor, Patil Plaza, Swargate",
                    addressLocality: "Pune",
                    addressRegion: "MH",
                    postalCode: "411037",
                    addressCountry: "IN",
                  },
                  areaServed: {
                    "@type": "AdministrativeArea",
                    name: "Maharashtra",
                  },
                  sameAs: [
                    "https://www.instagram.com/",
                    "https://www.facebook.com/",
                    "https://www.linkedin.com/",
                  ],
                },
                {
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  name: "Prosira Advertisers",
                  url: "https://prosiraadvertisers.com",
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://prosiraadvertisers.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
              ]),
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
