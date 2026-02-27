"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const channelPartners = {
  television: [
    { name: "Zee TV", logo: "/partners/tv1.jpg" },
    { name: "Star Plus", logo: "/partners/tv2.jpg" },
    { name: "Sony Entertainment", logo: "/partners/tv3.jpg" },
    { name: "Zee TV", logo: "/partners/tv5.jpg" },
    { name: "Star Plus", logo: "/partners/tv6.jpg" },
    { name: "Sony Entertainment", logo: "/partners/tv7.jpg" },
    { name: "Colors TV", logo: "/partners/tv8.jpg" },
    { name: "Zee TV", logo: "/partners/tv9.jpg" },
    { name: "Star Plus", logo: "/partners/tv10.jpg" },
   
  ],
  newspaper: [
    { name: "Times of India", logo: "/partners/news1.jpg" },
    { name: "Indian Express", logo: "/partners/news2.jpg" },
    { name: "Sakal", logo: "/partners/news3.jpg" },
    { name: "Lokmat", logo: "/partners/news4.jpg" },
    { name: "Indian Express", logo: "/partners/news5.jpg" },
    { name: "Sakal", logo: "/partners/news6.jpg" },
    { name: "Lokmat", logo: "/partners/news7.jpg" },

  ],
  cinema: [
    { name: "PVR", logo: "/partners/cine1.jpg" },
    { name: "INOX", logo: "/partners/cine2.jpg" },
    { name: "Cinepolis", logo: "/partners/cine3.jpg" },
    { name: "Carnival Cinemas", logo: "/partners/cine4.jpg" },
        { name: "Carnival Cinemas", logo: "/partners/cine5.jpg" },
    { name: "Carnival Cinemas", logo: "/partners/cine6.jpg" },

  ],
  radio: [
    { name: "Radio Mirchi", logo: "/partners/radio1.jpg" },
    { name: "Red FM", logo: "/partners/radio2.jpg" },
    { name: "Radio City", logo: "/partners/radio3.jpg" },
    { name: "BIG FM", logo: "/partners/radio4.jpg" },
    { name: "Radio Mirchi", logo: "/partners/radio5.jpg" },
    { name: "Red FM", logo: "/partners/radio6.jpg" },
    { name: "Radio City", logo: "/partners/radio7.jpg" },
    { name: "BIG FM", logo: "/partners/radio8.jpg" },
    { name: "BIG FM", logo: "/partners/radio9.jpg" },

  ],
};

const Section = ({ title, partners }: any) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 relative inline-block">
        {title}
        <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {partners.map((partner: any, index: number) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-lg border border-yellow-500/20 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 rounded-xl p-6 flex items-center justify-center h-32"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={140}
              height={60}
className="object-contain transition-all duration-300"              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default function ChannelPartnersClient() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="py-24 text-center bg-gradient-to-b from-black via-gray-900 to-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
         <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
  Our{" "}
  <span className="text-primary font-serif">
    Channel Partners
  </span>
</h1>
          <p className="text-lg text-gray-400">
            We collaborate with India's leading television networks,
            newspapers, cinema chains, and radio stations to deliver
            maximum reach and impact for your brand.
          </p>
        </motion.div>
      </section>

      {/* PARTNER SECTIONS */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <Section title="Television Partners" partners={channelPartners.television} />
        <Section title="Newspaper Partners" partners={channelPartners.newspaper} />
        <Section title="Cinema Advertising Partners" partners={channelPartners.cinema} />
        <Section title="Radio Partners" partners={channelPartners.radio} />
      </div>
{/* PREMIUM CTA SECTION */}
<section className="py-28 bg-black border-t border-yellow-500/10">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Ready to Transform Your Brand?
    </h2>

    <p className="text-lg md:text-xl text-gray-400 mb-12">
      Let us create powerful advertising campaigns that deliver
      exceptional results across all platforms.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

      {/* Primary Gold Button */}
<Link
  href="/contact"
  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105"
>
  Get Started →
</Link>

{/* Secondary Outline Button */}
<Link
  href="/team"
  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 rounded-xl font-semibold transition-all duration-300"
>
  Meet Our Team
</Link>
    </div>
  </div>
</section>
    </div>
  );
}