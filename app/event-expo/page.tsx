"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Pause, X, ExternalLink, Calendar, Users, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";

// Event Management Projects
const eventProjects = [
  {
    id: 1,
    client: "Tech Summit 2024",
    logo: "/clients/tech-summit.png",
    eventImage: "/portfolio/tech-summit-event.jpg",
    description: "Annual technology conference with 5000+ attendees"
  },
  {
    id: 2,
    client: "Corporate Annual Meet",
    logo: "/clients/corporate-meet.png",
    eventImage: "/portfolio/corporate-event.jpg",
    description: "Company-wide annual meeting for 1000+ employees"
  },
  {
    id: 3,
    client: "Product Launch Expo",
    logo: "/clients/product-expo.png",
    eventImage: "/portfolio/product-expo.jpg",
    description: "New product exhibition with media coverage"
  },
  {
    id: 4,
    client: "Cultural Festival",
    logo: "/clients/cultural-festival.png",
    eventImage: "/portfolio/cultural-event.jpg",
    description: "Traditional cultural festival with 10K+ visitors"
  },
  {
    id: 5,
    client: "Sports Championship",
    logo: "/clients/sports-championship.png",
    eventImage: "/portfolio/sports-event.jpg",
    description: "Regional sports tournament with live streaming"
  }
];

// Brand Activation Campaigns
const activationCampaigns = [
  {
    id: 1,
    client: "Fashion Brand Launch",
    logo: "/clients/fashion-launch.png",
    campaignVideo: "/video/fashion-activation.mp4",
    description: "Interactive fashion brand activation with 500K+ social reach"
  },
  {
    id: 2,
    client: "Food Festival Activation",
    logo: "/clients/food-festival.png",
    campaignVideo: "/video/food-activation.mp4",
    description: "Food tasting experience with 2000+ participants"
  },
  {
    id: 3,
    client: "Tech Product Demo",
    logo: "/clients/tech-demo.png",
    campaignVideo: "/video/tech-activation.mp4",
    description: "Hands-on tech product demonstration event"
  },
  {
    id: 4,
    client: "Sports Brand Event",
    logo: "/clients/sports-brand.png",
    campaignVideo: "/video/sports-activation.mp4",
    description: "Athlete meet-and-greet with product trials"
  },
  {
    id: 5,
    client: "Music Festival Sponsorship",
    logo: "/clients/music-festival.png",
    campaignVideo: "/video/music-activation.mp4",
    description: "Music festival brand activation with 50K+ attendees"
  }
];

export default function EventExpoPortfolio() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<typeof eventProjects[0] | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({});

  // Handle video play/pause
  const toggleVideo = (campaignId: number) => {
    if (activeVideo === campaignId) {
      // Pause current video
      if (videoRefs.current[campaignId]) {
        videoRefs.current[campaignId].pause();
      }
      setActiveVideo(null);
    } else {
      // Stop any currently playing video
      if (activeVideo !== null && videoRefs.current[activeVideo]) {
        videoRefs.current[activeVideo].pause();
      }
      
      // Play new video
      if (videoRefs.current[campaignId]) {
        videoRefs.current[campaignId].play();
        setActiveVideo(campaignId);
      }
    }
  };

  // Cleanup video on unmount
  useEffect(() => {
    return () => {
      Object.values(videoRefs.current).forEach(video => {
        if (video) video.pause();
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-transparent to-emerald-400/20 animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24">
        <div className="site-container">
          <Link 
            href="/work"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors mb-8"
          >
            <X size={20} />
            Back to Our Work
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Event & Expo </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Spectacular events and brand activations that create unforgettable experiences and drive meaningful engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Premium Card - Events & Activations */}
      <section className="py-12">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/5 backdrop-blur-xl border border-green-500/20 hover:border-green-400/40 hover:shadow-green-500/20 transition-all duration-500 overflow-hidden"
          >
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-green-500/20">
              
              {/* LEFT SIDE - Event Management */}
              <div className="p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                      Event Management
                    </span>
                  </h2>
                  <p className="text-gray-400 mb-8">Complete Event Solutions</p>

                  <div className="space-y-6">
                    {eventProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-green-600/10 border border-transparent hover:border-green-400/30 transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white/10">
                            <Image
                              src={project.logo}
                              alt={project.client}
                              fill
                              className="object-contain p-2"
                              onError={(e) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.client)}&background=0d1117&color=ffffff&size=64`;
                              }}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">{project.client}</h3>
                            <p className="text-sm text-gray-400">{project.description}</p>
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedEvent(project)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600/20 hover:bg-green-600/30 text-green-400 hover:text-green-300 border border-green-400/30 transition-all duration-300"
                        >
                          <Calendar size={16} />
                          <span className="text-sm">View Event</span>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* RIGHT SIDE - Brand Activations */}
              <div className="p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                      Brand Activations
                    </span>
                  </h2>
                  <p className="text-gray-400 mb-8">Interactive Campaigns</p>

                  <div className="space-y-6">
                    {activationCampaigns.map((campaign, index) => (
                      <motion.div
                        key={campaign.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-green-600/10 border border-transparent hover:border-green-400/30 transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white/10">
                            <Image
                              src={campaign.logo}
                              alt={campaign.client}
                              fill
                              className="object-contain p-2"
                              onError={(e) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(campaign.client)}&background=0d1117&color=ffffff&size=64`;
                              }}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">{campaign.client}</h3>
                            <p className="text-sm text-gray-400">{campaign.description}</p>
                          </div>
                        </div>

                        <button
                          onClick={() => toggleVideo(campaign.id)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600/20 hover:bg-green-600/30 text-green-400 hover:text-green-300 border border-green-400/30 transition-all duration-300"
                        >
                          {activeVideo === campaign.id ? (
                            <>
                              <Pause size={16} />
                              <span className="text-sm">Pause</span>
                            </>
                          ) : (
                            <>
                              <Play size={16} />
                              <span className="text-sm">Play</span>
                            </>
                          )}
                        </button>

                        {/* Hidden Video Element */}
                        <video
                          ref={(el) => {
                            if (el) videoRefs.current[campaign.id] = el;
                          }}
                          src={campaign.campaignVideo}
                          onEnded={() => setActiveVideo(null)}
                          className="hidden"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for Events */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full rounded-3xl bg-gray-900 border border-green-400/30 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-6 lg:p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedEvent.client}</h3>
                  <p className="text-gray-400">{selectedEvent.description}</p>
                </div>

                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white/5">
                  <Image
                    src={selectedEvent.eventImage}
                    alt={`${selectedEvent.client} Event`}
                    fill
                    className="object-contain"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedEvent.client + ' Event')}&background=0d1117&color=ffffff&size=400`;
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20">
        <div className="site-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Create Unforgettable Experiences
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us design and execute exceptional events and activations that bring your brand to life and create lasting memories.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/25"
            >
              Plan Your Event
              <ExternalLink size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
