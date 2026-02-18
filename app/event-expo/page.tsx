"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";

const portfolioProjects = [
  {
    id: 1,
    title: "Tech Expo 2024",
    category: "Exhibition",
    description: "Large-scale technology exhibition with 50+ exhibitors and 10,000+ attendees over 3 days.",
    image: "/portfolio/tech-expo.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Brand Activation Campaign",
    category: "Brand Activation",
    description: "Immersive brand experience creating 500K+ social media impressions and 85% positive sentiment.",
    image: "/portfolio/brand-activation.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Corporate Annual Event",
    category: "Event Management",
    description: "Complete corporate event production for 1000+ employees with live streaming and virtual engagement.",
    image: "/portfolio/corporate-event.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Product Launch Experience",
    category: "Live Experience",
    description: "Multi-city product launch tour with interactive experiences and media coverage across 5 cities.",
    image: "/portfolio/product-launch.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Trade Show Exhibition",
    category: "Trade Show",
    description: "Industry trade show booth design and management generating 300+ qualified leads for client.",
    image: "/portfolio/trade-show.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Festival Brand Activation",
    category: "Cultural Event",
    description: "Cultural festival sponsorship and activation connecting brand with 100K+ festival attendees.",
    image: "/portfolio/festival-activation.jpg",
    featured: false
  }
];

export default function EventExpoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24">
        <div className="site-container">
          <Link 
            href="/work"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
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
              Discover our successful experiential marketing campaigns that have created unforgettable brand experiences and delivered exceptional engagement for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12">
        <div className="site-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600/5 to-transparent border border-green-500/20 hover:border-green-400/40 transition-all duration-300 ${
                  project.featured ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="relative h-64 md:h-full">
                  {/* Project Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&background=0d1117&color=ffffff&size=400`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="text-green-400 text-sm font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <ExternalLink className="h-8 w-8 text-green-400 mb-3" />
                      <p className="text-white font-medium">View Project</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
