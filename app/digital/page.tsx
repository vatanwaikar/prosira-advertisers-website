"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Monitor, Smartphone } from "lucide-react";
import Link from "next/link";

/* ================= DATA ================= */

const webProjects = [
  { id: 1, client: "E-commerce Store", logo: "/clients/ecommerce-store.png", projectUrl: "https://example-store.com", description: "Custom e-commerce platform with 300% sales increase" },
  { id: 2, client: "Corporate Website", logo: "/clients/corporate-website.png", projectUrl: "https://example-corp.com", description: "Enterprise website with advanced CMS" },
  { id: 3, client: "Restaurant Portal", logo: "/clients/restaurant-portal.png", projectUrl: "https://example-food.com", description: "Food delivery and reservation system" },
  { id: 4, client: "Real Estate Platform", logo: "/clients/real-estate.png", projectUrl: "https://example-property.com", description: "Property listing and management system" },
  { id: 5, client: "Educational Platform", logo: "/clients/education-platform.png", projectUrl: "https://example-edu.com", description: "Online learning management system" }
];

const socialCampaigns = [
  { id: 1, client: "Fashion Brand", logo: "/clients/fashion-brand.png", campaignImage: "/portfolio/fashion-campaign.jpg", description: "Instagram campaign with 2M+ engagements" },
  { id: 2, client: "Tech Startup", logo: "/clients/tech-startup.png", campaignImage: "/portfolio/tech-campaign.jpg", description: "LinkedIn B2B campaign with 85% lead increase" },
  { id: 3, client: "Food Chain", logo: "/clients/food-chain.png", campaignImage: "/portfolio/food-campaign.jpg", description: "Facebook campaign driving 50K+ store visits" },
  { id: 4, client: "Fitness Brand", logo: "/clients/fitness-brand.png", campaignImage: "/portfolio/fitness-campaign.jpg", description: "YouTube influencer campaign with 1M+ views" },
  { id: 5, client: "Travel Agency", logo: "/clients/travel-agency.png", campaignImage: "/portfolio/travel-campaign.jpg", description: "Instagram travel campaign with 500K+ saves" }
];

export default function DigitalMarketingPortfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof webProjects[0] | null>(null);
  const [selectedCampaign, setSelectedCampaign] = useState<typeof socialCampaigns[0] | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">

      {/* HERO */}
      <section className="relative py-20 lg:py-24">
        <div className="site-container">
          <Link href="/work" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 mb-8">
            <X size={20} />
            Back to Our Work
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Digital Marketing </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Cutting-edge digital campaigns and web solutions that drive measurable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TWO SEPARATE CARDS */}
      <section className="py-12">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-8">

            {/* WEB DEVELOPMENT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-blue-500/20 p-8 lg:p-12"
            >
              <h2 className="text-3xl font-bold mb-2 text-blue-400">
                Web Development
              </h2>
              <p className="text-gray-400 mb-8">Custom Website Solutions</p>

              <div className="space-y-6">
                {webProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-blue-600/10 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white/10">
                        <Image src={project.logo} alt={project.client} fill className="object-contain p-2" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{project.client}</h3>
                        <p className="text-sm text-gray-400">{project.description}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-400/30"
                    >
                      <Monitor size={16} />
                      View Site
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* SOCIAL MEDIA CARD */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-blue-500/20 p-8 lg:p-12"
            >
              <h2 className="text-3xl font-bold mb-2 text-blue-400">
                Social Media
              </h2>
              <p className="text-gray-400 mb-8">Campaign Management</p>

              <div className="space-y-6">
                {socialCampaigns.map((campaign, index) => (
                  <motion.div
                    key={campaign.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-blue-600/10 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white/10">
                        <Image src={campaign.logo} alt={campaign.client} fill className="object-contain p-2" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{campaign.client}</h3>
                        <p className="text-sm text-gray-400">{campaign.description}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedCampaign(campaign)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-400/30"
                    >
                      <Smartphone size={16} />
                      View Campaign
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MODALS remain EXACT SAME below (unchanged from your original) */}
      {/* 👉 Keep your existing modal code here without changes */}

    </div>
  );
}