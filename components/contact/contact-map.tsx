"use client";

import Image from "next/image";

export function ContactMap() {
  const mapLink =
    "https://maps.app.goo.gl/7igP69Dd7r3iD2B98?g_st=ic";

  return (
    <section
      className="bg-[#0B0B0B] py-24"
      aria-labelledby="office-location-heading"
    >
      <div className="site-container">

        {/* TEXT ABOVE MAP */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2
            id="office-location-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Visit Our Office
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Located in the heart of Pune, our Swargate office is easily accessible
            and ready to welcome you for strategic discussions and consultations.
          </p>
        </div>

        {/* MAP WRAPPER */}
        <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden group">

          {/* IMAGE WITH MASK */}
          <div
            className="relative"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskComposite: "intersect",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              maskComposite: "intersect",
            }}
          >
            <Image
              src="/map/patil-plaza-gold-map.png"
              alt="Prosira Advertisers office location at Patil Plaza, Swargate, Pune"
              width={1920}
              height={600}
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="w-full h-auto object-contain brightness-[0.82] contrast-[1.04] saturate-[0.75] transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/25 pointer-events-none" />
          </div>

          {/* OVERLAY TEXT */}
          <div className="pointer-events-none absolute top-8 left-8 max-w-md text-white z-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#E6C766]/80">
              Our Location
            </p>
            <h3 className="mt-2 text-2xl font-semibold leading-snug">
              Patil Plaza, Swargate, Pune
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Meet us for consultation and campaign planning.
            </p>
          </div>

          {/* PIN CTA */}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Prosira Advertisers location in Google Maps"
            className="absolute right-6 bottom-6 z-10
                       flex items-center gap-3
                       rounded-full bg-black/65 backdrop-blur-md
                       px-5 py-3 border border-white/10
                       hover:bg-black/80 transition-all duration-300"
          >
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-[#D4AF37]/40 blur-md animate-pulse" />
              <span className="relative flex h-3.5 w-3.5 rounded-full bg-[#D4AF37]" />
            </div>

            <div className="leading-tight">
              <p className="text-[10px] uppercase tracking-widest text-[#E6C766]/80">
                Location
              </p>
              <p className="text-sm font-medium text-white">
                Get Real-Time Directions
              </p>
            </div>
          </a>
        </div>

        {/* SECONDARY CTA */}
        <div className="mt-6 flex justify-center">
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Prosira Advertisers in Google Maps"
            className="
              relative inline-flex items-center justify-center
              rounded-full px-10 py-4
              text-white font-semibold tracking-wide
              bg-[#0B0B0B]
              border border-[#D4AF37]
              shadow-[0_0_0_1px_rgba(212,175,55,0.4)]
              transition-all duration-300
              hover:bg-[#D4AF37]
              hover:text-black
              hover:shadow-[0_12px_40px_rgba(212,175,55,0.45)]
            "
          >
            📍 Open in Google Maps
          </a>
        </div>

        {/* ADDRESS TEXT */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            <span className="text-[#E6C766] font-medium">
              3rd Floor, Patil Plaza, Swargate, Pune – 411037
            </span>
            <br />
            Open Monday to Saturday, 10 AM – 6 PM
          </p>
        </div>

      </div>
    </section>
  );
}
