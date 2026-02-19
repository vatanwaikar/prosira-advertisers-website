"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Radio, Monitor, Calendar } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Services",
    description: "Traditional & media advertising solutions including radio, print, outdoor & branding.",
    icon: <Radio className="h-12 w-12" />,
    href: "/services",
    gradient: "from-purple-600/20 to-purple-800/20",
    borderColor: "border-purple-500/30",
    hoverGlow: "hover:shadow-purple-500/25",
    
  },
  {
    id: 2,
    title: "Digital",
    description: "Performance marketing, social media growth, paid ads & website solutions.",
    icon: <Monitor className="h-12 w-12" />,
    href: "/digital",
    gradient: "from-blue-600/20 to-blue-800/20",
    borderColor: "border-blue-500/30",
    hoverGlow: "hover:shadow-blue-500/25",
    stats: {
      projects: "200+",
      clients: "80+",
      experience: "8+ years"
    }
  },
  {
    id: 3,
    title: "Event & Expo",
    description: "Experiential marketing, exhibitions, activations & on-ground branding.",
    icon: <Calendar className="h-12 w-12" />,
    href: "/event-expo",
    gradient: "from-green-600/20 to-green-800/20",
    borderColor: "border-green-500/30",
    hoverGlow: "hover:shadow-green-500/25",
    stats: {
      projects: "100+",
      clients: "30+",
      experience: "6+ years"
    }
  }
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="relative site-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
               Signature Work
              </span>
            </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-16"
          >
            Explore our comprehensive advertising solutions designed to elevate your brand presence 
            and deliver measurable results across traditional media, digital platforms, and experiential marketing.
          </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Premium Service Cards */}
      <section className="py-20">
        <div className="site-container">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
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
                        className="text-primary mb-6 flex justify-center"
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
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-primary font-semibold">
                          Explore →
                        </span>
                        <ArrowRight 
                          size={24} 
                          className="text-primary group-hover:translate-x-3 transition-transform duration-300" 
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
        <div className="site-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us create powerful advertising campaigns that deliver exceptional results across all platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary text-black px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
              
              <Link
                href="/team"
                className="inline-flex items-center gap-3 border-2 border-primary/50 text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-black hover:scale-105 transition-all duration-300"
              >
                Meet Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
