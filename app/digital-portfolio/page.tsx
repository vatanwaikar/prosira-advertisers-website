import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Digital Marketing Portfolio - Prosira Advertisers",
  description: "Explore our portfolio of successful digital marketing campaigns including social media, SEO, paid ads and website development projects.",
};

const portfolioProjects = [
  {
    id: 1,
    title: "E-commerce Website Development",
    category: "Website Development",
    description: "Custom e-commerce platform with 300% increase in online sales and improved user experience.",
    image: "/portfolio/ecommerce-website.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Social Media Brand Campaign",
    category: "Social Media Marketing",
    description: "Comprehensive social media campaign achieving 2M+ engagements and 45% follower growth.",
    image: "/portfolio/social-campaign.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Google Ads Performance Campaign",
    category: "SEM",
    description: "PPC campaign with 8.5x ROI and 65% reduction in cost-per-acquisition.",
    image: "/portfolio/google-ads-campaign.jpg",
    featured: false
  },
  {
    id: 4,
    title: "SEO Optimization Project",
    category: "SEO",
    description: "Technical SEO implementation resulting in #1 rankings for 15+ competitive keywords.",
    image: "/portfolio/seo-project.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Mobile App Launch Campaign",
    category: "App Marketing",
    description: "Complete digital launch strategy driving 100K+ app downloads in first month.",
    image: "/portfolio/app-launch.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Content Marketing Strategy",
    category: "Content Marketing",
    description: "Content strategy and blog development increasing organic traffic by 250%.",
    image: "/portfolio/content-marketing.jpg",
    featured: false
  }
];

export default function DigitalPortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24">
        <div className="site-container">
          <Link 
            href="/digital"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Digital
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
              Explore our successful digital marketing campaigns that have delivered exceptional ROI and growth for our clients across websites, social media, SEO and paid advertising.
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
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600/5 to-transparent border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 ${
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
                    <div className="text-blue-400 text-sm font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <ExternalLink className="h-8 w-8 text-blue-400 mb-3" />
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
