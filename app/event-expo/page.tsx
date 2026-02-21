"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Pause, X, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";

/* ================= DATA ================= */

const eventProjects = [
  { id: 1, client: "Tech Summit 2024", logo: "/clients/tech-summit.png", eventImage: "/portfolio/tech-summit-event.jpg", description: "Annual technology conference with 5000+ attendees" },
  { id: 2, client: "Corporate Annual Meet", logo: "/clients/corporate-meet.png", eventImage: "/portfolio/corporate-event.jpg", description: "Company-wide annual meeting for 1000+ employees" },
  { id: 3, client: "Product Launch Expo", logo: "/clients/product-expo.png", eventImage: "/portfolio/product-expo.jpg", description: "New product exhibition with media coverage" },
  { id: 4, client: "Cultural Festival", logo: "/clients/cultural-festival.png", eventImage: "/portfolio/cultural-event.jpg", description: "Traditional cultural festival with 10K+ visitors" },
  { id: 5, client: "Sports Championship", logo: "/clients/sports-championship.png", eventImage: "/portfolio/sports-event.jpg", description: "Regional sports tournament with live streaming" }
];

const activationCampaigns = [
  { id: 1, client: "Fashion Brand Launch", logo: "/clients/fashion-launch.png", campaignVideo: "/video/fashion-activation.mp4", description: "Interactive fashion brand activation with 500K+ reach" },
  { id: 2, client: "Food Festival Activation", logo: "/clients/food-festival.png", campaignVideo: "/video/food-activation.mp4", description: "Food tasting experience with 2000+ participants" },
  { id: 3, client: "Tech Product Demo", logo: "/clients/tech-demo.png", campaignVideo: "/video/tech-activation.mp4", description: "Hands-on tech product demonstration event" },
  { id: 4, client: "Sports Brand Event", logo: "/clients/sports-brand.png", campaignVideo: "/video/sports-activation.mp4", description: "Athlete meet-and-greet with product trials" },
  { id: 5, client: "Music Festival Sponsorship", logo: "/clients/music-festival.png", campaignVideo: "/video/music-activation.mp4", description: "Music festival brand activation with 50K+ attendees" }
];

export default function EventExpoPortfolio() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<typeof eventProjects[0] | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({});

  const toggleVideo = (id: number) => {
    if (activeVideo === id) {
      videoRefs.current[id]?.pause();
      setActiveVideo(null);
    } else {
      if (activeVideo !== null) videoRefs.current[activeVideo]?.pause();
      videoRefs.current[id]?.play();
      setActiveVideo(id);
    }
  };

  useEffect(() => {
    return () => {
      Object.values(videoRefs.current).forEach(v => v?.pause());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">

      {/* HERO */}
      <section className="relative py-20 lg:py-24">
        <div className="site-container">
          <Link href="/work" className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 mb-8">
            <X size={20} />
            Back to Our Work
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Event & Expo </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Spectacular events and brand activations that create unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TWO SEPARATE CARDS */}
      <section className="py-12">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-8">

            {/* EVENT MANAGEMENT CARD */}
            <motion.div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-green-500/20 p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-green-400 mb-2">Event Management</h2>
              <p className="text-gray-400 mb-8">Complete Event Solutions</p>

              <div className="space-y-6">
                {eventProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-green-600/10 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white/10">
                        <Image src={project.logo} alt={project.client} fill className="object-contain p-2" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{project.client}</h3>
                        <p className="text-sm text-gray-400">{project.description}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedEvent(project)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600/20 text-green-400 border border-green-400/30"
                    >
                      <Calendar size={16} />
                      View Event
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* BRAND ACTIVATION CARD */}
            <motion.div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-green-500/20 p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-green-400 mb-2">Brand Activations</h2>
              <p className="text-gray-400 mb-8">Interactive Campaigns</p>

              <div className="space-y-6">
                {activationCampaigns.map((campaign, index) => (
                  <motion.div
                    key={campaign.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-green-600/10 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white/10">
                        <Image src={campaign.logo} alt={campaign.client} fill className="object-contain p-2" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{campaign.client}</h3>
                        <p className="text-sm text-gray-400">{campaign.description}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleVideo(campaign.id)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600/20 text-green-400 border border-green-400/30"
                    >
                      {activeVideo === campaign.id ? <Pause size={16} /> : <Play size={16} />}
                      {activeVideo === campaign.id ? "Pause" : "Play"}
                    </button>

                    <video
                      ref={(el) => { if (el) videoRefs.current[campaign.id] = el; }}
                      src={campaign.campaignVideo}
                      className="hidden"
                      onEnded={() => setActiveVideo(null)}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MODAL SAME AS BEFORE (unchanged logic) */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full rounded-3xl bg-gray-900 border border-green-400/30 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedEvent(null)} className="absolute top-4 right-4">
                <X size={20} />
              </button>

              <h3 className="text-2xl text-white mb-4">{selectedEvent.client}</h3>
              <p className="text-gray-400 mb-6">{selectedEvent.description}</p>

              <div className="relative aspect-[16/9]">
                <Image src={selectedEvent.eventImage} alt={selectedEvent.client} fill className="object-contain" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}