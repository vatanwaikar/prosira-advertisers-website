"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Pause, X, ExternalLink, Volume2 } from "lucide-react";
import Link from "next/link";

// Radio Campaigns Data
const radioCampaigns = [
  {
    id: 1,
    client: "Radio City FM",
    logo: "/clients/radio-city.png",
    audioFile: "/audio/radio-city-campaign.mp3",
    description: "Morning Drive Time Campaign"
  },
  {
    id: 2,
    client: "Red FM",
    logo: "/clients/red-fm.png",
    audioFile: "/audio/red-fm-campaign.mp3",
    description: "Weekend Prime Time Slots"
  },
  {
    id: 3,
    client: "Mirchi FM",
    logo: "/clients/mirchi-fm.png",
    audioFile: "/audio/mirchi-campaign.mp3",
    description: "Festival Special Campaign"
  },
  {
    id: 4,
    client: "Vividh Bharati",
    logo: "/clients/vividh-bharati.png",
    audioFile: "/audio/vividh-campaign.mp3",
    description: "Rural Outreach Program"
  },
  {
    id: 5,
    client: "FM Rainbow",
    logo: "/clients/fm-rainbow.png",
    audioFile: "/audio/rainbow-campaign.mp3",
    description: "Youth Engagement Campaign"
  }
];

// Newspaper Campaigns Data
const newspaperCampaigns = [
  {
    id: 1,
    client: "Times of India",
    logo: "/clients/times-of-india.png",
    adImage: "/portfolio/times-ad.jpg",
    description: "Front Page Premium Placement"
  },
  {
    id: 2,
    client: "Maharashtra Times",
    logo: "/clients/maharashtra-times.png",
    adImage: "/portfolio/maharashtra-ad.jpg",
    description: "Regional Language Campaign"
  },
  {
    id: 3,
    client: "Indian Express",
    logo: "/clients/indian-express.png",
    adImage: "/portfolio/express-ad.jpg",
    description: "Business Section Spotlight"
  },
  {
    id: 4,
    client: "Sakal Newspaper",
    logo: "/clients/sakal.png",
    adImage: "/portfolio/sakal-ad.jpg",
    description: "Marathi Daily Campaign"
  },
  {
    id: 5,
    client: "Pune Mirror",
    logo: "/clients/pune-mirror.png",
    adImage: "/portfolio/mirror-ad.jpg",
    description: "City Lifestyle Feature"
  }
];

export default function TraditionalMediaPortfolio() {
  const [activeAudio, setActiveAudio] = useState<number | null>(null);
  const [selectedAd, setSelectedAd] = useState<typeof newspaperCampaigns[0] | null>(null);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement }>({});

  // Handle audio play/pause
  const toggleAudio = (campaignId: number) => {
    if (activeAudio === campaignId) {
      // Pause current audio
      if (audioRefs.current[campaignId]) {
        audioRefs.current[campaignId].pause();
      }
      setActiveAudio(null);
    } else {
      // Stop any currently playing audio
      if (activeAudio !== null && audioRefs.current[activeAudio]) {
        audioRefs.current[activeAudio].pause();
      }
      
      // Play new audio
      if (audioRefs.current[campaignId]) {
        audioRefs.current[campaignId].play();
        setActiveAudio(campaignId);
      }
    }
  };

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      Object.values(audioRefs.current).forEach(audio => {
        if (audio) audio.pause();
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-amber-500/20 animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24">
        <div className="site-container">
          <Link 
            href="/work"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
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
              <span className="text-white">Traditional Media </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Award-winning traditional advertising campaigns that connect brands with audiences through radio, print, and outdoor media.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Premium Card - Radio & Newspaper */}
      <section className="py-12">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/5 backdrop-blur-xl border border-primary/20 hover:border-primary/40 hover:shadow-primary/20 transition-all duration-500 overflow-hidden"
          >
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-primary/20">
              
              {/* LEFT SIDE - Radio Advertising */}
              <div className="p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
                      Radio Advertising
                    </span>
                  </h2>
                  <p className="text-gray-400 mb-8">Client FM Brand Activations</p>

                  <div className="space-y-6">
                    {radioCampaigns.map((campaign, index) => (
                      <motion.div
                        key={campaign.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
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
                          onClick={() => toggleAudio(campaign.id)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary hover:text-primary-foreground border border-primary/30 transition-all duration-300"
                        >
                          {activeAudio === campaign.id ? (
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

                        {/* Hidden Audio Element */}
                        <audio
                          ref={(el) => {
                            if (el) audioRefs.current[campaign.id] = el;
                          }}
                          src={campaign.audioFile}
                          onEnded={() => setActiveAudio(null)}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* RIGHT SIDE - Newspaper Advertising */}
              <div className="p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
                      Newspaper Campaigns
                    </span>
                  </h2>
                  <p className="text-gray-400 mb-8">Print Media Launches</p>

                  <div className="space-y-6">
                    {newspaperCampaigns.map((campaign, index) => (
                      <motion.div
                        key={campaign.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
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
                          onClick={() => setSelectedAd(campaign)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary hover:text-primary-foreground border border-primary/30 transition-all duration-300"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">View Ad</span>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for Newspaper Ads */}
      <AnimatePresence>
        {selectedAd && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedAd(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full rounded-3xl bg-gray-900 border border-primary/30 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedAd(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Ad Content */}
              <div className="p-6 lg:p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedAd.client}</h3>
                  <p className="text-gray-400">{selectedAd.description}</p>
                </div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
                  <Image
                    src={selectedAd.adImage}
                    alt={`${selectedAd.client} Advertisement`}
                    fill
                    className="object-contain"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedAd.client + ' Ad')}&background=0d1117&color=ffffff&size=400`;
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
              Ready to Create Your Campaign?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us craft powerful traditional advertising campaigns that drive real results for your business.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-primary text-black px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
            >
              Start Your Project
              <ExternalLink size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
