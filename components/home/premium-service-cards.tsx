"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Services",
    description: "Traditional & media advertising solutions including radio, print, outdoor & branding.",
    icon: "📺",
    href: "/services",
    gradient: "from-purple-600/20 to-purple-800/20",
    borderColor: "border-purple-500/30",
    hoverGlow: "hover:shadow-purple-500/25"
  },
  {
    id: 2,
    title: "Digital",
    description: "Performance marketing, social media growth, paid ads & website solutions.",
    icon: "💻",
    href: "/digital",
    gradient: "from-blue-600/20 to-blue-800/20",
    borderColor: "border-blue-500/30",
    hoverGlow: "hover:shadow-blue-500/25"
  },
  {
    id: 3,
    title: "Event & Expo",
    description: "Experiential marketing, exhibitions, activations & on-ground branding.",
    icon: "🎯",
    href: "/event-expo",
    gradient: "from-green-600/20 to-green-800/20",
    borderColor: "border-green-500/30",
    hoverGlow: "hover:shadow-green-500/25"
  }
];

export function PremiumServiceCards() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="site-container">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
              Premium Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive advertising solutions tailored to elevate your brand presence
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link 
                href={service.href}
                className="block h-full"
              >
                <div className={`relative h-full p-8 rounded-3xl bg-gradient-to-br ${service.gradient} border-2 ${service.borderColor} backdrop-blur-sm transition-all duration-500 group-hover:shadow-2xl ${service.hoverGlow} group-hover:scale-105`}>
                  
                  {/* Glow Effect on Hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    
                    {/* Icon */}
                    <motion.div 
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-6xl mb-6"
                    >
                      {service.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>

                    {/* Arrow Indicator */}
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold">
                        Explore →
                      </span>
                      <ArrowRight 
                        size={20} 
                        className="text-primary group-hover:translate-x-2 transition-transform duration-300" 
                      />
                    </div>
                  </div>

                  {/* Decorative Border */}
                  <div className="absolute inset-0 rounded-3xl border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
