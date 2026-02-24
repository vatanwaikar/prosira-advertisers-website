// app/layout.tsx
import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Script from "next/script";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { Providers } from "./Providers";
import ScrollToTop from "@/components/ScrollToTop";

/* ---------- GA4 ---------- */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/* ---------- FONTS ---------- */
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


/* ---------- VIEWPORT ---------- */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/* ---------- SEO METADATA ---------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://prosira.in"),

  title: {
    default:
      "Prosira Advertisers - Top Digital Marketing & Advertising Agency in Pune | SEO & Ads",
    template: "%s | Prosira Advertisers",
  },

  description:
    "Trusted Digital Marketing & Advertising Experts in Pune delivering leads, visibility & brand growth through SEO, Google Ads, performance marketing and 360° advertising solutions.",

  keywords: [
    "digital marketing agency in Pune",
    "advertising agency Pune",
    "SEO services Pune",
    "Google Ads agency Pune",
    "media planning and buying Pune",
  ],

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Prosira Advertisers",
    title:
      "Prosira Advertisers - Top Digital Marketing & Advertising Agency in Pune",
    description:
      "Trusted Digital Marketing & Advertising Experts in Pune delivering measurable growth.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Prosira Advertisers - Digital Marketing Agency in Pune",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image.png"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
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
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground min-h-screen overflow-x-hidden">
        <Providers>
          <CustomCursor />

          <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-1 pt-[80px] lg:pt-[96px]">
              {children}
            </main>

            <Footer />
          </div>

          <ScrollToTop />

          {/* ---------- GA4 SCRIPT ---------- */}
          {GA_ID && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `}
              </Script>
            </>
          )}

          <Analytics />

          {/* LOCAL BUSINESS SCHEMA */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "AdvertisingAgency",
                name: "Prosira Advertisers",
                url: "https://prosira.in",
                logo: "https://prosira.in/logo.png",
                image: "https://prosira.in/opengraph-image.png",
                telephone: "+91-9028815714",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "3rd Floor, Patil Plaza, Swargate",
                  addressLocality: "Pune",
                  addressRegion: "Maharashtra",
                  postalCode: "411037",
                  addressCountry: "IN",
                },
                areaServed: "Maharashtra",
                openingHours: "Mo-Sa 10:00-18:00",
                sameAs: [
                  "https://www.instagram.com/prosira_advertisers",
                  "https://www.linkedin.com/company/prosiraadvertisers",
                  "https://www.facebook.com/share/1DnoEvbjBx/",
                ],
              }),
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
