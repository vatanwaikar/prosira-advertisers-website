"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/* ✅ HE ITHÉ ADD KARAYCHA */
const clients = [
  { name: "Client 1", logo: "/clogo1.png" },
  { name: "Client 2", logo: "/clogo2.png" },
  { name: "Client 3", logo: "/clogo3.png" },
  { name: "Client 4", logo: "/clogo4.png" },
  { name: "Client 5", logo: "/clogo6.png" },
  { name: "Client 6", logo: "/clogo5.png" },
  { name: "Client 7", logo: "/clogo7.png" },
];

export function ClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate-in",
              "fade-in",
              "slide-in-from-bottom-8"
            );
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRef.current
      ?.querySelectorAll("[data-animate]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span
            data-animate
            className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4 duration-700"
          >
            Our Clients
          </span>
          <h2
            data-animate
            className="text-2xl md:text-3xl font-bold duration-700 delay-100"
          >
            Trusted by{" "}
            <span className="text-primary font-serif ">
              Industry Leaders
            </span>
          </h2>
        </div>

        {/* Marquee */}
        <div
          data-animate
          className="relative overflow-hidden duration-700 delay-200"
        >
          <div className="marquee flex gap-14 items-center">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image
  src={client.logo}
  alt={`${client.name} advertising client`}
  width={140}
  height={70}
  className="h-12 md:h-16 w-auto object-contain"
  loading="lazy"
/>

              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          width: max-content;
          animation: marquee 28s linear infinite;
          will-change: transform;
        }

        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
