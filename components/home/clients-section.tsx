"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";


const clients = [
  { name: "Client 1", logo: "/clogo1.webp" },
  { name: "Client 5", logo: "/clogo5.webp" },
  { name: "Client 2", logo: "/clogo2.webp" },
  { name: "Client 6", logo: "/clogo6.webp" },
  { name: "Client 3", logo: "/clogo3.webp" },
  { name: "Client 8", logo: "/clogo8.webp" },
  { name: "Client 4", logo: "/clogo4.webp" },
  { name: "Client 9", logo: "/clogo9.webp" },
  { name: "Client 7", logo: "/clogo7.webp" },
  { name: "Client 10", logo: "/clogo10.webp" },
  { name: "Client 11", logo: "/clogo11.webp" },
  { name: "Client 12", logo: "/clogo12.webp" },
  { name: "Client 15", logo: "/clogo15.webp" },
  { name: "Client 13", logo: "/clogo13.webp" },
  { name: "Client 17", logo: "/clogo17.webp" },
  { name: "Client 14", logo: "/clogo14.webp" },
  { name: "Client 20", logo: "/clogo20.webp" },
  { name: "Client 16", logo: "/clogo16.webp" },
  { name: "Client 21", logo: "/clogo21.webp" },
  { name: "Client 18", logo: "/clogo18.webp" },
  { name: "Client 22", logo: "/clogo22.webp" },
  { name: "Client 19", logo: "/clogo19.webp" },
];

export function ClientsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateDistance = () => {
      const halfWidth = track.scrollWidth / 2;
      track.style.setProperty("--marquee-distance", `${halfWidth}px`);
    };

    updateDistance();

    const resizeObserver = new ResizeObserver(updateDistance);
    resizeObserver.observe(track);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="site-container">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Clients
          </span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold">
            Trusted by{" "}
            <span className="text-primary font-serif">
              Industry Leaders
            </span>
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
                  sizes="(max-width: 768px) 120px, 160px"
                  loading="lazy"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
