"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function ContactMap() {
  const globeRef = useRef<SVGSVGElement>(null);
  const indiaRef = useRef<SVGPathElement>(null);
  const puneRef = useRef<SVGCircleElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    // STEP 1 – globe appear
    tl.fromTo(
      globeRef.current,
      { opacity: 0, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 1.5 }
    );

    // STEP 2 – globe slow rotate
    tl.to(globeRef.current, {
      rotate: 360,
      transformOrigin: "50% 50%",
      duration: 3,
      ease: "none",
    });

    // STEP 3 – India highlight
    tl.to(
      indiaRef.current,
      {
        stroke: "#D4AF37",
        strokeWidth: 2,
        duration: 1,
      },
      "-=2"
    );

    // STEP 4 – Pune marker
    tl.fromTo(
      puneRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        transformOrigin: "center",
      }
    );

    // STEP 5 – Text reveal
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8 }
    );
  }, []);

  return (
    <section className="bg-[#0B0B0B] py-20 flex flex-col items-center">
      {/* SVG GLOBE */}
      <svg
        ref={globeRef}
        width="320"
        height="320"
        viewBox="0 0 320 320"
        className="mb-6"
      >
        {/* Globe circle */}
        <circle
          cx="160"
          cy="160"
          r="140"
          fill="none"
          stroke="#2A2A2A"
          strokeWidth="1"
        />

        {/* Latitude lines */}
        {[60, 100, 160, 220].map((y, i) => (
          <ellipse
            key={i}
            cx="160"
            cy="160"
            rx="140"
            ry={Math.abs(160 - y)}
            fill="none"
            stroke="#1F1F1F"
            strokeWidth="0.6"
          />
        ))}

        {/* INDIA (abstract shape) */}
        <path
          ref={indiaRef}
          d="M190 140 L200 150 L195 170 L180 180 L170 160 Z"
          fill="none"
          stroke="#444"
          strokeWidth="1"
        />

        {/* PUNE DOT */}
        <circle
          ref={puneRef}
          cx="185"
          cy="165"
          r="4"
          fill="#D4AF37"
        />
      </svg>

      {/* TEXT */}
      <div ref={textRef} className="text-center text-white">
        <p className="text-sm tracking-widest uppercase opacity-70">
          Global thinking
        </p>
        <h3 className="text-xl font-medium mt-2">
          Prosira Advertisers
        </h3>
        <p className="text-sm opacity-60">
          Patil Plaza, Swargate, Pune
        </p>
      </div>
    </section>
  );
}
