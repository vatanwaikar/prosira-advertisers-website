import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "List Your Media With Prosira Advertisers",
  description:
    "Register your media with Prosira Advertisers. We collaborate with TV, Radio, Outdoor, Digital and Event media partners across India.",
};

export default function ListYourMediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
