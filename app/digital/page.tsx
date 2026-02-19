"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Pause, X, ExternalLink, Monitor, Smartphone, Search, BarChart3 } from "lucide-react";
import Link from "next/link";

// Website Development Projects
const webProjects = [
  {
    id: 1,
    client: "E-commerce Store",
    logo: "/clients/ecommerce-store.png",
    projectUrl: "https://example-store.com",
    description: "Custom e-commerce platform with 300% sales increase"
  },
  {
    id: 2,
    client: "Corporate Website",
    logo: "/clients/corporate-website.png",
    projectUrl: "https://example-corp.com",
    description: "Enterprise website with advanced CMS"
  },
  {
    id: 3,
    client: "Restaurant Portal",
    logo: "/clients/restaurant-portal.png",
    projectUrl: "https://example-food.com",
    description: "Food delivery and reservation system"
  },
  {
    id: 4,
    client: "Real Estate Platform",
    logo: "/clients/real-estate.png",
    projectUrl: "https://example-property.com",
    description: "Property listing and management system"
  },
  {
    id: 5,
    client: "Educational Platform",
    logo: "/clients/education-platform.png",
    projectUrl: "https://example-edu.com",
    description: "Online learning management system"
  }
];

// Social Media Campaigns
const socialCampaigns = [
  {
    id: 1,
    client: "Fashion Brand",
    logo: "/clients/fashion-brand.png",
    campaignImage: "/portfolio/fashion-campaign.jpg",
    description: "Instagram campaign with 2M+ engagements"
  },
  {
    id: 2,
    client: "Tech Startup",
    logo: "/clients/tech-startup.png",
    campaignImage: "/portfolio/tech-campaign.jpg",
    description: "LinkedIn B2B campaign with 85% lead increase"
  },
  {
    id: 3,
    client: "Food Chain",
    logo: "/clients/food-chain.png",
    campaignImage: "/portfolio/food-campaign.jpg",
    description: "Facebook campaign driving 50K+ store visits"
  },
  {
    id: 4,
    client: "Fitness Brand",
    logo: "/clients/fitness-brand.png",
    campaignImage: "/portfolio/fitness-campaign.jpg",
    description: "YouTube influencer campaign with 1M+ views"
  },
  {
    id: 5,
    client: "Travel Agency",
    logo: "/clients/travel-agency.png",
    campaignImage: "/portfolio/travel-campaign.jpg",
    description: "Instagram travel campaign with 500K+ saves"
  }
];

export default function DigitalMarketingPortfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof webProjects[0] | null>(null);
  const [selectedCampaign, setSelectedCampaign] = useState<typeof socialCampaigns[0] | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-400/20 animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24">
        <div className="site-container">
          <Link 
            href="/work"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-8"
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
              <span className="text-white">Digital Marketing </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Cutting-edge digital campaigns and web solutions that drive measurable growth and exceptional ROI for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Premium Card - Web Development & Social Media */}
      <section className="py-12">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/5 backdrop-blur-xl border border-blue-500/20 hover:border-blue-400/40 hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden"
          >
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-blue-500/20">
              
              {/* LEFT SIDE - Web Development */}
              <div className="p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      Web Development
                    </span>
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
                        className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-blue-600/10 border border-transparent hover:border-blue-400/30 transition-all duration-300 hover:scale-[1.02]"
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
                          onClick={() => setSelectedProject(project)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 border border-blue-400/30 transition-all duration-300"
                        >
                          <Monitor size={16} />
                          <span className="text-sm">View Site</span>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* RIGHT SIDE - Social Media Campaigns */}
              <div className="p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      Social Media
                    </span>
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
                        className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-blue-600/10 border border-transparent hover:border-blue-400/30 transition-all duration-300 hover:scale-[1.02]"
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
                          onClick={() => setSelectedCampaign(campaign)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 border border-blue-400/30 transition-all duration-300"
                        >
                          <Smartphone size={16} />
                          <span className="text-sm">View Campaign</span>
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

      {/* Modal for Web Projects */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full rounded-3xl bg-gray-900 border border-blue-400/30 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-6 lg:p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.client}</h3>
                  <p className="text-gray-400 mb-4">{selectedProject.description}</p>
                  <a
                    href={selectedProject.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Visit Website
                  </a>
                </div>

                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Monitor className="h-24 w-24 text-blue-400/30" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for Social Campaigns */}
      <AnimatePresence>
        {selectedCampaign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCampaign(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full rounded-3xl bg-gray-900 border border-blue-400/30 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCampaign(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-6 lg:p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedCampaign.client}</h3>
                  <p className="text-gray-400">{selectedCampaign.description}</p>
                </div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
                  <Image
                    src={selectedCampaign.campaignImage}
                    alt={`${selectedCampaign.client} Campaign`}
                    fill
                    className="object-contain"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedCampaign.client + ' Campaign')}&background=0d1117&color=ffffff&size=400`;
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
              Transform Your Digital Presence
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us create data-driven digital campaigns that deliver measurable growth and exceptional ROI for your business.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              Start Your Digital Journey
              <ExternalLink size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
