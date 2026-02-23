"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Pause, X, ExternalLink, Maximize2 } from "lucide-react";
import Link from "next/link";

/* ================= RADIO DATA ================= */
const radioCampaigns = [
  { id: 1, client: "Shubh Developers", logo: "/clients/shubh.webp", audioFile: "/audio/shubh.mp4"  },
  { id: 2, client: "SSPL Group", logo: "/clients/SSPL.webp", audioFile: "/audio/sspl.mp4"  },
  { id: 3, client: "Ceratec Group", logo: "/clients/ceratec.webp", audioFile: "/audio/ceratec.mp4" },
  { id: 4, client: "RRLunkad", logo: "/clients/rrlunkad.webp", audioFile: "/audio/rrlunkadaudio.mp4"},
  { id: 5, client: "Tulip Group", logo: "/clients/tulip.webp", audioFile: "/audio/tulip.mp4" }
];

const newspaperCampaigns = [
  { id: 1, client: "Ashwamedh", logo: "/clients/Ashwamedh.webp", adImage: "/portfolio/ash.jpg", description: "Front Page Premium Placement" },
  { id: 2, client: "Circle of Crust", logo: "/clients/crust.jpg", adImage: "/portfolio/crust.jpg", description: "Regional Language Campaign" },
  { id: 3, client: "Parth", logo: "/clients/Parth.jpg", adImage: "/portfolio/parth.jpg", description: "Business Section Spotlight" },
  { id: 4, client: "CityOne", logo: "/clients/cityone.jpg", adImage: "/portfolio/city.jpg", description: "Marathi Daily Campaign" },
  { id: 5, client: "Kocuonut Tree", logo: "/clients/cck.jpg", adImage: "/portfolio/koconuttree.jpg", description: "City Lifestyle Feature" }
];

const tvCampaigns = [
  { id: 1, client: "Inifinity Acedemy", thumbnail: "/clients/infinity.jpg", video: "/video/infinity.mp4" },
  { id: 2, client: "Ekvira Nuro", thumbnail: "/clients/EkviraEuro.jpg", video: "/video/EkviraNuro.mp4" },
  { id: 3, client: "Windsor Shelter", thumbnail: "/clients/Windsorshelter.jpg", video: "/video/windsorshelter.mp4" },
  { id: 4, client: "Mangalam", thumbnail: "/clients/Mangalam.jpg", video: "/video/mangalam.mp4" },
  { id: 5, client: "Helios", thumbnail: "/clients/helios.jpg", video: "/video/helios.mp4" }
];

const outdoorCampaigns = [
  { id: 1, client: "SSPL Group", image: "/clients/ssploutdoor.webp" },
  { id: 2, client: "Shubh Developers  ", image: "/clients/shubhoutdoor.webp" },
];

/* ================= CORPORATE GIFTING - JUST IMAGES ================= */
const corporateGiftingImages = [
  { id: 1, image: "/gifts/gift1.jpg" },
  { id: 2, image: "/gifts/gift5.jpg" },
  { id: 3, image: "/gifts/gift3.jpg" },
  { id: 4, image: "/gifts/gift4.jpg" }
];

/* ================= AUTO ADVERTISING ================= */
const autoAdvertisingImages = [
  { id: 1, image: "/auto/auto1.webp" },
  { id: 2, image: "/auto/auto2.webp" }
];

/* ================= DESIGNS & BRANDING ================= */
const designBrandingImages = [
  { id: 1, image: "/design/1.jpg" },
  { id: 2, image: "/design/2.jpg" },
  { id: 3, image: "/design/3.jpg" },
  { id: 4, image: "/design/4.jpg" }
];

export default function TraditionalMediaPortfolio() {
  const [activeAudio, setActiveAudio] = useState<number | null>(null);
  const [selectedAd, setSelectedAd] = useState<typeof newspaperCampaigns[0] | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<typeof tvCampaigns[0] | null>(null);
  const [selectedGiftImage, setSelectedGiftImage] = useState<typeof corporateGiftingImages[0] | null>(null);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement }>({});

  const toggleAudio = (campaignId: number) => {
    if (activeAudio === campaignId) {
      audioRefs.current[campaignId]?.pause();
      setActiveAudio(null);
    } else {
      if (activeAudio !== null) {
        audioRefs.current[activeAudio]?.pause();
      }
      audioRefs.current[campaignId]?.play();
      setActiveAudio(campaignId);
    }
  };

  useEffect(() => {
    return () => {
      Object.values(audioRefs.current).forEach(audio => audio?.pause());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">

      {/* HERO */}
      <section className="relative py-20 lg:py-24">
        <div className="site-container">
          <Link href="/work" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8">
            ←Back to Our Work
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Traditional Media </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Award-winning campaigns across radio, print, TV, outdoor & corporate gifting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RADIO + NEWSPAPER */}
      <section className="py-12">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Radio Card */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="rounded-3xl bg-white/5 backdrop-blur-xl border border-primary/20 p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-2 text-primary">Radio Advertising</h2>
              <p className="text-gray-400 mb-8">Client FM Brand Activations</p>
              <div className="space-y-6">
                {radioCampaigns.map((campaign, index) => (
                  <motion.div key={campaign.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-primary/10 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                        <Image src={campaign.logo} alt={campaign.client} fill className="object-cover" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{campaign.client}</h3>
                      </div>
                    </div>
                    <button onClick={() => toggleAudio(campaign.id)} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-all">
                      {activeAudio === campaign.id ? <Pause size={16}/> : <Play size={16}/>}
                      {activeAudio === campaign.id ? "Pause" : "Play"}
                    </button>
                    <audio ref={(el) => { if (el) audioRefs.current[campaign.id] = el; }} src={campaign.audioFile} onEnded={() => setActiveAudio(null)} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newspaper Card */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="rounded-3xl bg-white/5 backdrop-blur-xl border border-primary/20 p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-2 text-primary">Newspaper Campaigns</h2>
              <p className="text-gray-400 mb-8">Print Media Launches</p>
              <div className="space-y-6">
                {newspaperCampaigns.map((campaign, index) => (
                  <motion.div key={campaign.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-primary/10 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                        <Image src={campaign.logo} alt={campaign.client} fill className="object-cover" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{campaign.client}</h3>
                        <p className="text-sm text-gray-400">{campaign.description}</p>
                      </div>
                    </div>
                    <button onClick={() => setSelectedAd(campaign)} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-all">
                      <ExternalLink size={16} /> View Ad
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TV + OUTDOOR */}
      <section className="py-12">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* TV Card */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="rounded-3xl bg-white/5 backdrop-blur-xl border border-primary/20 p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-2 text-primary">Television Campaigns</h2>
              <p className="text-gray-400 mb-8">TV Commercial Productions</p>
              <div className="space-y-6">
                {tvCampaigns.map((campaign, index) => (
                  <motion.div key={campaign.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-primary/10 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white/10">
                        <Image src={campaign.thumbnail} alt={campaign.client} fill className="object-cover" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{campaign.client}</h3>
                      </div>
                    </div>
                    <button onClick={() => setSelectedVideo(campaign)} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-all">
                      <ExternalLink size={16} /> Watch Video
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Outdoor Card */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="rounded-3xl bg-white/5 backdrop-blur-xl border border-primary/20 p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-2 text-primary">Outdoor Advertising</h2>
              <p className="text-gray-400 mb-8">OOH & Billboard Campaigns</p>
              <div className="space-y-6">
                {outdoorCampaigns.map((campaign, index) => (
                  <motion.div key={campaign.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="p-4 rounded-xl bg-white/5 hover:bg-primary/10 transition-all cursor-pointer">
                    <div className="relative w-full h-48 rounded-xl overflow-hidden">
                      <Image src={campaign.image} alt={campaign.client} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-semibold text-white text-lg">{campaign.client}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORPORATE GIFTING - IMAGE GALLERY (TV+Outdoor नंतर) */}
      <section className="py-12">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/5 backdrop-blur-xl border border-primary/20 p-8 lg:p-12"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                <span className="text-primary font-bold text-xl">🎁</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary">Corporate Gifting</h2>
                <p className="text-gray-400">Premium Branded Gifts Gallery</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {corporateGiftingImages.map((gift, index) => (
                <motion.div
                  key={gift.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-black/30 border-2 border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-500 cursor-pointer aspect-square"
                  onClick={() => setSelectedGiftImage(gift)}
                >
                  <div className="relative w-full h-full">
                    <Image 
  src={gift.image} 
  alt="Corporate Gift" 
  fill 
  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105" 
/>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    <motion.div 
                      className="absolute -top-4 -right-4 w-16 h-16 bg-primary/90 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-2xl border-4 border-black/20 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", bounce: 0.4 }}
                    >
                      <Maximize2 size={20} className="text-black font-bold" />
                    </motion.div>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= AUTO + DESIGN & BRANDING ================= */}
<section className="py-12">
  <div className="site-container">
    <div className="grid md:grid-cols-2 gap-8">

      {/* AUTO ADVERTISING CARD */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-white/5 backdrop-blur-xl border border-primary/20 p-8 lg:p-12"
      >
        <div className="flex items-center gap-4 mb-10">
          
          <div>
            <h2 className="text-3xl font-bold text-primary">Auto Advertising</h2>
            <p className="text-gray-400">Vehicle Branding & Transit Media</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {autoAdvertisingImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all"
            >
              <Image
                src={item.image}
                alt="Auto Advertising"
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* DESIGN & BRANDING CARD */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-white/5 backdrop-blur-xl border border-primary/20 p-8 lg:p-12"
      >
        <div className="flex items-center gap-4 mb-10">
          
          <div>
            <h2 className="text-3xl font-bold text-primary">Designs & Branding</h2>
            <p className="text-gray-400">Creative Identity & Visual Systems</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {designBrandingImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all"
            >
              <Image
                src={item.image}
                alt="Design & Branding"
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* MODALS */}
      <AnimatePresence>
        {selectedAd && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedAd(null)}>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="relative max-w-2xl w-full rounded-3xl bg-gray-900 border border-primary/30 shadow-2xl overflow-hidden p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedAd(null)} className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all">
                <X size={20} />
              </button>
              <h3 className="text-2xl font-bold text-white mb-4">{selectedAd.client}</h3>
              <div className="relative w-full max-h-[70vh] aspect-[3/4] rounded-2xl overflow-hidden">
                <Image src={selectedAd.adImage} alt="Advertisement" fill className="object-contain" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedVideo(null)}>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="relative max-w-3xl w-full rounded-3xl bg-gray-900 border border-primary/30 shadow-2xl overflow-hidden p-6" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedVideo(null)} className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70">
                <X size={20} />
              </button>
              <h3 className="text-2xl font-bold text-white mb-4">{selectedVideo.client}</h3>
              <video src={selectedVideo.video} controls autoPlay className="w-full rounded-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corporate Gifting Modal */}
      <AnimatePresence>
        {selectedGiftImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
            onClick={() => setSelectedGiftImage(null)}
          >
            <motion.div
              initial={{ scale: 0.7, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.7, rotate: 5 }}
              className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-8 right-8 z-10">
                <button
                  onClick={() => setSelectedGiftImage(null)}
                  className="w-16 h-16 bg-black/60 hover:bg-black/80 backdrop-blur-xl rounded-3xl flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110"
                >
                  <X size={32} />
                </button>
              </div>

              <Image
                src={selectedGiftImage.image}
                alt="Corporate Gift"
                fill
                className="object-contain"
              />
              
              <div className="absolute bottom-8 left-8 right-8 bg-black/70 backdrop-blur-xl rounded-3xl p-6 text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                 
                </div>
                <h3 className="text-3xl font-bold text-white drop-shadow-2xl">Corporate Gifting Excellence</h3>
                <p className="text-xl text-primary/90 mt-2 drop-shadow-lg">Premium branded gifts & hampers</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
