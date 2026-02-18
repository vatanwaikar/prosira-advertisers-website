import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Traditional Media Portfolio - Prosira Advertisers",
  description: "Explore our portfolio of successful traditional advertising campaigns including radio, print, outdoor advertising and branding projects.",
};

const portfolioProjects = [
  {
    id: 1,
    title: "FM Radio Brand Campaign",
    category: "Radio Advertising",
    description: "Comprehensive radio campaign for leading FM brand across Maharashtra with 40% increase in brand recall.",
    image: "/portfolio/radio-campaign.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Newspaper Brand Launch",
    category: "Print Media",
    description: "Strategic newspaper campaign for new product launch achieving 2M+ impressions across major publications.",
    image: "/portfolio/newspaper-campaign.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Highway Billboard Series",
    category: "Outdoor Advertising",
    description: "Premium highway billboard campaign with strategic placement for maximum visibility and impact.",
    image: "/portfolio/billboard-campaign.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Retail Brand Identity",
    category: "Branding",
    description: "Complete brand identity redesign for retail chain including logo, packaging and in-store branding.",
    image: "/portfolio/brand-identity.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Festival Print Campaign",
    category: "Print Media",
    description: "Cultural festival themed print campaign connecting brand with local traditions and values.",
    image: "/portfolio/festival-campaign.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Metro Station Branding",
    category: "Outdoor Advertising",
    description: "Comprehensive metro station branding campaign reaching daily commuters with high-frequency exposure.",
    image: "/portfolio/metro-branding.jpg",
    featured: false
  }
];

export default function ServicesPortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24">
        <div className="site-container">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Services
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
              Discover our successful traditional advertising campaigns that have delivered exceptional results for our clients across radio, print, outdoor media and branding.
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
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 hover:border-primary/40 transition-all duration-300 ${
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
                    <div className="text-primary text-sm font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <ExternalLink className="h-8 w-8 text-primary mb-3" />
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
              Ready to Create Your Success Story?
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
