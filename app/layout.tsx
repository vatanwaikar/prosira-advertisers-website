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



/* ---------- FONTS (NO BLINK) ---------- */
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

/* ---------- METADATA ---------- */
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
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen">
        <Providers>
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
           <ScrollToTop />
          <Analytics />
          
        </Providers>
      </body>
    </html>
  );
}
