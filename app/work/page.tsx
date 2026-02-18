"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Calendar, TrendingUp } from "lucide-react";
import Image from "next/image";

const workCategories = [
  "All",
  "TV Advertising",
  "Digital Marketing",
  "Outdoor Campaigns",
  "Brand Activation",
  "Event Management",
];

const portfolioItems = [
  {
    id: 1,
    title: "Festive Campaign - National Brand",
    category: "TV Advertising",
    image: "/images/work/campaign1.jpg",
    description: "Multi-city TV campaign reaching 50+ million viewers during festive season",
    metrics: {
      reach: "50M+",
      engagement: "85%",
      roi: "320%"
    },
    date: "2024",
    featured: true
  },
  {
    id: 2,
    title: "Digital Transformation - Retail Chain",
    category: "Digital Marketing",
    image: "/images/work/digital1.jpg",
    description: "Complete digital overhaul with social media, SEO, and performance marketing",
    metrics: {
      reach: "2M+",
      engagement: "92%",
      roi: "450%"
    },
    date: "2024",
    featured: true
  },
  {
    id: 3,
    title: "Hoarding Campaign - Real Estate",
    category: "Outdoor Campaigns",
    image: "/images/work/outdoor1.jpg",
    description: "Strategic hoarding placement across prime locations in Pune",
    metrics: {
      reach: "10M+",
      engagement: "78%",
      roi: "280%"
    },
    date: "2023",
    featured: false
  },
  {
    id: 4,
    title: "Product Launch - Tech Startup",
    category: "Brand Activation",
    image: "/images/work/activation1.jpg",
    description: "Ground activation events across 20+ locations with experiential marketing",
    metrics: {
      reach: "500K+",
      engagement: "88%",
      roi: "380%"
    },
    date: "2024",
    featured: true
  },
  {
    id: 5,
    title: "Corporate Event - Financial Services",
    category: "Event Management",
    image: "/images/work/event1.jpg",
    description: "Annual conference with 2000+ attendees and live streaming",
    metrics: {
      reach: "100K+",
      engagement: "95%",
      roi: "290%"
    },
    date: "2023",
    featured: false
  },
  {
    id: 6,
    title: "Radio Campaign - FMCG Brand",
    category: "TV Advertising",
    image: "/images/work/radio1.jpg",
    description: "Jingle-based radio campaign across multiple stations",
    metrics: {
      reach: "15M+",
      engagement: "72%",
      roi: "260%"
    },
    date: "2023",
    featured: false
  }
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredWork = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const featuredWork = portfolioItems.filter(item => item.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <div className="site-container px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent">
                Our Work
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our portfolio of successful advertising campaigns and brand transformations 
              that have delivered exceptional results for our clients across various industries.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">10M+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Reach</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">350%</div>
                <div className="text-sm sm:text-base text-muted-foreground">Avg ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 sm:py-20">
        <div className="site-container px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Campaigns</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most successful campaigns that delivered exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredWork.map((work) => (
              <Card key={work.id} className="group overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Play className="h-5 w-5 mr-2" />
                      View Case Study
                    </Button>
                  </div>
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {work.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {work.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{work.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{work.description}</p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-primary/5 rounded-lg p-2">
                      <div className="text-lg font-bold text-primary">{work.metrics.reach}</div>
                      <div className="text-xs text-muted-foreground">Reach</div>
                    </div>
                    <div className="bg-green-500/5 rounded-lg p-2">
                      <div className="text-lg font-bold text-green-600">{work.metrics.engagement}</div>
                      <div className="text-xs text-muted-foreground">Engagement</div>
                    </div>
                    <div className="bg-orange-500/5 rounded-lg p-2">
                      <div className="text-lg font-bold text-orange-600">{work.metrics.roi}</div>
                      <div className="text-xs text-muted-foreground">ROI</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Work with Filter */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="site-container px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">All Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our complete portfolio across different advertising verticals
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {workCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Work Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredWork.map((work) => (
              <Card key={work.id} className="group overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <div className="absolute top-4 right-4 z-20">
                    <Badge variant="secondary" className="text-xs">
                      {work.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Details
                    </Button>
                  </div>
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {work.date}
                    </div>
                    {work.featured && (
                      <Badge className="bg-primary/10 text-primary text-xs">Featured</Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{work.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{work.description}</p>
                  
                  {/* Quick Metrics */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3 text-primary" />
                      <span className="text-primary font-semibold">{work.metrics.roi}</span>
                      <span className="text-muted-foreground">ROI</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-green-600 font-semibold">{work.metrics.engagement}</span>
                      <span className="text-muted-foreground">Engagement</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredWork.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No work found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="site-container px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our list of successful clients and let's create an amazing campaign 
              that delivers exceptional results for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
