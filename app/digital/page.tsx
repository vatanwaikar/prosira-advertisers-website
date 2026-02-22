"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, TrendingUp, Users, Eye, Heart, MessageCircle, Share2, BarChart3, PieChart, Target, Zap, Award, Play, Volume2, VolumeX, Pause } from "lucide-react";
import Link from "next/link";

// Your Real Client Work Data
const clientWork = [
  {
    id: 1,
    clientName: "The Sea Secret",
    industry: "Restaurant & Hospitality",
    duration: "Last Months",
    platforms: ["Instagram", "Facebook", "Pinterest"],
    platformPerformance: [
      { label: "Instagram", value: 68 },
      { label: "Facebook", value: 32 },
    ],
    results: {
      reach: "212K+",
      engagement: "1.7K+",
      followers: "+115",
      sales: "1,374 Paid Clicks"
    },
    posts: [
      {
        id: 1,
        type: "Post",
        image: "/digital/seasecret.jpeg",
        caption: "New Collection Launch - Summer 2024 🌟",
        engagement: "12.5K likes, 890 comments",
        reach: "450K+"
      },
      {
        id: 2,
        type: "reel",
        video: "/reel/seascretreel.mp4",
        poster: "/digital/seasecret.jpeg",
        caption: "Behind the scenes - Fashion shoot 📸",
        engagement: "25.8K likes, 1.2K comments",
        reach: "680K+"
      },
      {
        id: 3,
        type: "story",
        image: "/portfolio/fashion-story-1.jpg",
        caption: "Limited time offer - 30% OFF! 🔥",
        engagement: "8.9K views, 450 shares",
        reach: "120K+"
      }
    ],
    metrics: {
      engagementRate: "0.46%",
      clickThroughRate: "0.65%",
      conversionRate: "3.8%",
      roi: "520%"
    }
  },
  {
    id: 2,
    clientName: "Stargaze Properties",
    industry: "Real Estate",
    duration: "Last Months",
    platforms: ["Instagram", "Facebook"],
    platformPerformance: [
      { label: "Instagram", value: 48 },
      { label: "Facebook", value: 52 }
    ],
    results: {
      reach: "1.48M+",
      engagement: "1.7K+",
      followers: "100+",
      sales: "2.9K Link Clicks"
    },
    posts: [
      {
        id: 1,
        type: "Post",
        image: "/digital/stargaed.jpeg",
        caption: "New Menu Launch - Authentic Maharashtrian 🍛",
        engagement: "8.2K likes, 567 comments",
        reach: "320K+"
      },
      {
        id: 2,
        type: "reel",
        video: "/reel/stargae2.mp4",
        poster: "/digital/stargaed.jpeg",
        caption: "Chef Special Recipe - Behind the scenes 👨‍🍳",
        engagement: "15.6K likes, 890 comments",
        reach: "520K+"
      },
      {
        id: 3,
        type: "story",
        image: "/portfolio/food-story-1.jpg",
        caption: "Today's Special Offer - 20% OFF! 🔥",
        engagement: "6.5K views, 320 shares",
        reach: "210K+"
      }
    ],
    metrics: {
      engagementRate: "0.11%",
      clickThroughRate: "0.39%",
      conversionRate: "2.9%",
      roi: "380%"
    }
  },
  {
    id: 3,
    clientName: "Vintex Crop Care",
    industry: "Agriculture & Fertilizers",
    duration: "Last Months",
    platforms: ["LinkedIn", "Twitter", "Instagram"],
    platformPerformance: [
      { label: "LinkedIn", value: 58 },
      { label: "Instagram", value: 42 }
    ],
    results: {
      reach: "127K+",
      engagement: "3.8K+",
      followers: "+998",
      leads: "2.6K+ Qualified Leads"
    },
    posts: [
      {
        id: 1,
        type: "Post",
        image: "/digital/ventex.jpeg",
        caption: "Product Launch - Revolutionary AI Solution 🚀",
        engagement: "5.6K likes, 445 comments",
        reach: "180K+"
      },
      {
        id: 2,
        type: "poll",
        image: "/portfolio/tech-poll-1.jpg",
        caption: "What's your biggest tech challenge? 🤔",
        engagement: "3.2K responses, 890 shares",
        reach: "95K+"
      },
      {
        id: 3,
        type: "reel",
        video: "/reel/stargagereel.mp4",
        poster: "/digital/ventex.jpeg",
        caption: "How our AI transforms agriculture 🌱🤖",
        engagement: "9.8K likes, 1.2K comments",
        reach: "245K+"
      }
    ],
    metrics: {
      engagementRate: "2.9%",
      clickThroughRate: "2.0%",
      conversionRate: "2.6%",
      roi: "285%"
    }
  }
];

// Video Player Component - Fully Responsive & Optimized
const VideoPlayer = ({ 
  video, 
  poster, 
  caption, 
  engagement, 
  reach,
  isHovered 
}: { 
  video: string, 
  poster: string, 
  caption: string, 
  engagement: string, 
  reach: string, 
  isHovered: boolean 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle video play/pause on hover
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered && isLoaded) {
      video.muted = true;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isHovered, isLoaded]);

  const togglePlayPause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
      <video
        ref={videoRef}
        src={video}
        poster={poster}
        className="w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(e) => {
          console.log('Video load error:', e);
          // Fallback to poster image
        }}
      />
      
      {/* Play Button Overlay */}
      {!isPlaying && isLoaded && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={togglePlayPause}
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40 cursor-pointer hover:bg-white/30 transition-all">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </motion.div>
      )}

      {/* Volume Toggle */}
      {isHovered && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute bottom-4 left-4 p-2 bg-black/60 backdrop-blur-md rounded-full hover:bg-black/80 transition-all"
          onClick={toggleMute}
        >
          {isMuted ? <VolumeX size={18} className="text-white" /> : <Volume2 size={18} className="text-white" />}
        </motion.button>
      )}

      {/* Hover Overlay with Caption & Stats */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 flex flex-col justify-end"
        >
          <p className="text-white text-sm mb-4 line-clamp-2 font-medium leading-relaxed">{caption}</p>
          <div className="flex items-center gap-4 text-white/90 text-xs">
            <div className="flex items-center gap-1">
              <Heart size={12} />
              <span>{engagement.split(' ')[0]}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={12} />
              <span>{engagement.split(', ')[1]?.split(' ')[0] || 'N/A'}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={12} />
              <span>{reach}</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Updated Social Post Card Component
const SocialPostCard = ({ post, index }: { post: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-2 border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
        
        {/* Video Post - Check if it's a video by file extension or type */}
        {post.video && (
          <VideoPlayer
            video={post.video}
            poster={post.poster || post.image}
            caption={post.caption}
            engagement={post.engagement}
            reach={post.reach}
            isHovered={isHovered}
          />
        )}
        
        {/* Image Post */}
        {post.image && !post.video && (
          <>
            <Image
              src={post.image}
              alt={post.caption}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={(e) => {
                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(post.caption)}&background=0d1117&color=ffffff&size=400`;
              }}
            />
            
            {/* Image overlay on hover */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 flex flex-col justify-end"
              >
                <p className="text-white text-sm mb-4 line-clamp-2 font-medium leading-relaxed">{post.caption}</p>
                <div className="flex items-center gap-4 text-white/90 text-xs">
                  <div className="flex items-center gap-1">
                    <Heart size={12} />
                    <span>{post.engagement.split(' ')[0]}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={12} />
                    <span>{post.engagement.split(', ')[1]?.split(' ')[0] || 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye size={12} />
                    <span>{post.reach}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </>
        )}
        
        {/* Platform Badge */}
        <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/40 shadow-lg">
          <span className="text-white text-xs font-bold uppercase tracking-wider">
            {post.type}
            {post.video && <span className="ml-1 text-red-400">🎥</span>}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// Chart Component (unchanged)
const PieChartComponent = ({ data, label }: { data: any[], label: string }) => {
  const colors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];
  
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
      <h4 className="text-white font-semibold mb-4">{label}</h4>
      <div className="flex items-center justify-center">
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 42 42" className="w-full h-full transform -rotate-90">
            {data.map((item, index) => {
              const percentage = (item.value / data.reduce((a, b) => a + b.value, 0)) * 100;
              const strokeDasharray = `${percentage} ${100 - percentage}`;
              const previousPercentages = data.slice(0, index).reduce((a, b) => a + (b.value / data.reduce((x, y) => x + y.value, 0)) * 100, 0);
              
              return (
                <circle
                  key={index}
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke={colors[index % colors.length]}
                  strokeWidth="3"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={previousPercentages}
                  className="transition-all duration-1000"
                />
              );
            })}
          </svg>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: colors[index % colors.length] }} />
              <span className="text-gray-300">{item.label}</span>
            </div>
            <span className="text-white font-medium">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function DigitalMarketingPortfolio() {
  const [selectedClient, setSelectedClient] = useState<number | null>(null);
  const [activeMetric, setActiveMetric] = useState<string>("reach");

  const selectedClientData = clientWork.find(client => client.id === selectedClient);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated Background */}
<div className="fixed inset-0 opacity-20 pointer-events-none">        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-cyan-400/30 animate-pulse" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Real results from real clients. Data-driven social media campaigns that deliver measurable growth and exceptional ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Results Overview */}
      <section className="py-12">
        <div className="site-container">
          <div className="grid md:grid-cols-3 gap-6">
            {clientWork.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedClient(client.id)}
                className="group cursor-pointer"
              >
                <div className="relative p-6 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{client.clientName}</h3>
                      <p className="text-sm text-gray-400">{client.industry}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-blue-500/20">
                      <TrendingUp className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-white/5">
                      <p className="text-2xl font-bold text-blue-400">{client.results.reach}</p>
                      <p className="text-xs text-gray-400">Reach</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5">
                      <p className="text-2xl font-bold text-purple-400">{client.results.engagement}</p>
                      <p className="text-xs text-gray-400">Engagement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-gray-300">{client.metrics.roi} ROI</span>
                    </div>
                    <div className="flex items-center gap-1 text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span className="text-sm">View Details</span>
                      <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Client View Modal */}
      <AnimatePresence>
        {selectedClient && selectedClientData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedClient(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-gray-900 border border-blue-400/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedClient(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-6 lg:p-8">
                {/* Client Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedClientData.clientName}</h2>
                  <div className="flex items-center gap-6 text-gray-400">
                    <span>{selectedClientData.industry}</span>
                    <span>•</span>
                    <span>{selectedClientData.duration}</span>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-600/10 border border-blue-500/30">
                    <Eye className="h-6 w-6 text-blue-400 mb-2" />
                    <p className="text-2xl font-bold text-white">{selectedClientData.results.reach}</p>
                    <p className="text-sm text-gray-400">Total Reach</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-600/20 to-purple-600/10 border border-purple-500/30">
                    <Users className="h-6 w-6 text-purple-400 mb-2" />
                    <p className="text-2xl font-bold text-white">{selectedClientData.results.engagement}</p>
                    <p className="text-sm text-gray-400">Engagement</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-green-600/20 to-green-600/10 border border-green-500/30">
                    <TrendingUp className="h-6 w-6 text-green-400 mb-2" />
                    <p className="text-2xl font-bold text-white">{selectedClientData.results.followers}</p>
                    <p className="text-sm text-gray-400">New Followers</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-600/20 to-yellow-600/10 border border-yellow-500/30">
                    <Target className="h-6 w-6 text-yellow-400 mb-2" />
                    <p className="text-2xl font-bold text-white">
                      {selectedClientData.results.sales ? selectedClientData.results.sales.split(' ')[0] : selectedClientData.results.leads}
                    </p>
                    <p className="text-sm text-gray-400">Revenue/Leads</p>
                  </div>
                </div>

                {/* Charts Section */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <PieChartComponent
                    data={selectedClientData.platformPerformance}
                    label="Platform Performance"
                  />
                  <PieChartComponent
                    data={[
                      { label: "Engagement", value: parseFloat(selectedClientData.metrics.engagementRate) },
                      { label: "Clicks", value: parseFloat(selectedClientData.metrics.clickThroughRate) },
                      { label: "Conversions", value: parseFloat(selectedClientData.metrics.conversionRate) }
                    ]}
                    label="Metrics Breakdown"
                  />
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
                    <h4 className="text-white font-semibold mb-4">Key Metrics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Engagement Rate</span>
                        <span className="text-blue-400 font-medium">{selectedClientData.metrics.engagementRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Click-Through Rate</span>
                        <span className="text-purple-400 font-medium">{selectedClientData.metrics.clickThroughRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Conversion Rate</span>
                        <span className="text-green-400 font-medium">{selectedClientData.metrics.conversionRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Return on Investment</span>
                        <span className="text-yellow-400 font-medium">{selectedClientData.metrics.roi}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Posts Gallery */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Campaign Posts</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {selectedClientData.posts.map((post, index) => (
                      <SocialPostCard key={post.id} post={post} index={index} />
                    ))}
                  </div>
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
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us create data-driven social media campaigns that deliver real results for your brand.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              Start Your Campaign
              <Zap size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
