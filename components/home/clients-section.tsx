"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * ⚠️ IMPORTANT
 * Logo sequence is INTENTIONAL.
 * DO NOT sort, shuffle, or reorder this array.
 */
const clients = [
  { name: "Client 1", logo: "/clogo1.png" },
  { name: "Client 5", logo: "/clogo5.png" },
  { name: "Client 2", logo: "/clogo2.png" },
  { name: "Client 6", logo: "/clogo6.png" },
  { name: "Client 3", logo: "/clogo3.png" },
  { name: "Client 8", logo: "/clogo8.png" },
  { name: "Client 4", logo: "/clogo4.png" },
  { name: "Client 9", logo: "/clogo9.png" },
  { name: "Client 7", logo: "/clogo7.png" },
  { name: "Client 10", logo: "/clogo10.png" },
  { name: "Client 11", logo: "/clogo11.png" },
  { name: "Client 12", logo: "/clogo12.png" },
  { name: "Client 15", logo: "/clogo15.png" },
  { name: "Client 13", logo: "/clogo13.png" },
  { name: "Client 17", logo: "/clogo17.png" },
  { name: "Client 14", logo: "/clogo14.png" },
  { name: "Client 20", logo: "/clogo20.png" },
  { name: "Client 16", logo: "/clogo16.png" },
  { name: "Client 21", logo: "/clogo21.png" },
  { name: "Client 18", logo: "/clogo18.png" },
  { name: "Client 22", logo: "/clogo22.png" },
  { name: "Client 19", logo: "/clogo19.png" },
];

export function ClientsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const halfWidth = track.scrollWidth / 2;

    track.style.setProperty("--marquee-distance", `${halfWidth}px`);
  }, []);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Clients
          </span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold">
            Trusted by{" "}
            <span className="text-primary font-serif">Industry Leaders</span>
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="marquee-track flex items-center gap-14"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} – trusted advertising client`}
                  width={160}
                  height={80}
                  loading="lazy"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          width: max-content;
          animation: marquee 32s linear infinite;
          will-change: transform;
        }

        

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(
              calc(-1 * var(--marquee-distance))
            );
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
