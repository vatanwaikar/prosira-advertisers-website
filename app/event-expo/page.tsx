"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Calendar, MapPin, Users, Clock, Star, ChevronLeft, ChevronRight, Heart, MessageCircle, Share2 } from "lucide-react";
import Link from "next/link";

// Your Real Event Work Data
const events = [

   {
    id: 3,
    eventName: "Great Home & Land Expo 2018",
    clientName: "InHouse",
    eventDate: "Jan 5 to 8, 2018",
    venue: "Shivgorksh Maidan Katraj Kondhwa Road, Katraj",
    attendees: "800+",
    category: "Property Exhibition",
    description:"Following the successful 2017 edition held during a challenging market phase, the 2nd edition of the Property Exhibition was organized in 2018, building on renewed industry confidence and positive buyer sentiment. The event witnessed stronger participation from leading developers, increased footfall, and a wider showcase of residential and commercial projects aligned with the evolving regulatory environment.",
    photos: [
      {
        id: 1,
        url: "/event/gh18/gh18.webp",
        caption: "Product unveiling ceremony",
        engagement: "340 likes, 78 comments"
      },
      {
        id: 2,
        url: "/event/gh18/gh182.webp",
        caption: "Live product demonstration",
        engagement: "280 likes, 56 comments"
      },
      {
        id: 3,
        url: "/event/gh18/gh183.webp",
        caption: "Press conference with media",
        engagement: "190 likes, 34 comments"
      }
    ],
    highlights: [
  "Sponsored by Ceratec Group",
  "Inaugurated by Aanand Agarwal",
  "Celebrity Guest – Prajakta Mali",
  "Top Real Estate Participation"
],
    results: {
      satisfaction: "100%",
      orders: "8500+",
      media: "45+ Media",
      social: "2M+  Reach"
    }
  },
  {
    id: 4,
    eventName: "Great Home & Land Expo 2017",
    clientName: "InHouse",
    eventDate: "March 3-5, 2017",
    venue: "Shivgorksh Maidan Katraj Kondhwa Road, Katraj",
    attendees: "5000+",
    category: "Property Exhibition",
    description: "Held during the challenging business climate following demonetization and the implementation of GST reforms, the 2017 Property Exhibition emerged as a resilient platform for the real estate industry. Despite market uncertainty, the event successfully brought together developers, investors, and serious homebuyers, creating opportunities for direct engagement and transparent discussions around evolving regulations and investment strategies.",
    photos: [
      {
        id: 1,
        url: "/event/gh17/gh171.webp",
        caption: "Opening ceremony with march past",
        engagement: "560 likes, 89 comments"
      },
      {
        id: 2,
        url: "/event/gh17/gh172.webp",
        caption: "Cricket finals match",
        engagement: "890 likes, 167 comments"
      },
      {
        id: 3,
        url: "/event/gh17/gh173.webp",
        caption: "Award ceremony for winners",
        engagement: "450 likes, 78 comments"
      }
    ],
    highlights: [
  "Supported by SKD Group",
  "Grand Inauguration by Shrenik Karnawat",
  "Celebrity Presence – Prarthna Behere",
  "Leading Real Estate Brands"
],
    results: {
      satisfaction: "100%",
      participants: "6500+",
      media: "35+ Media",
      social: "1.5M+ Reach"
    }
  },
   {
    id: 5,
    eventName: "CBRE Propfest 2019",
    clientName: "CBRE",
    eventDate: "OCT 4 to 6, 2019",
    venue: "East- Hotel Hyatt Regency -Viman Nagar and West- Hotel Taj Vivanta-Hinjewadi",
    attendees: "1200+",
    category: "Property Exhibition",
    description: "CBRE Propfest showcased a diverse range of exclusive, affordable, and luxurious homes from leading residential developers across East and West Pune. The event brought together top projects under one platform, offering homebuyers and investors an opportunity to explore premium residences, discover attractive deals, and connect directly with trusted developers across Pune’s rapidly growing residential corridors.",
    photos: [
      {
        id: 1,
        url: "/event/cbre/cbre1.webp",
        caption: "CEO's keynote address",
        engagement: "230 likes, 45 comments"
      },
      {
        id: 2,
        url: "/event/cbre/cbre2.webp",
        caption: "Team building activities",
        engagement: "180 likes, 34 comments"
      },
      {
        id: 3,
        url: "/event/cbre/cbre3.webp",
        caption: "Awards ceremony for top performers",
        engagement: "290 likes, 56 comments"
      }
    ],
    highlights: [
  "Leading Pune Developers",
  "Luxury & Affordable Homes",
  "Exclusive Property Deals",
  "East & West Pune Projects"
],
    results: {
      satisfaction: "100%",
      engagement: "1200+",
      feedback: "75+ Media",
      social: "3M+ Reach"
    }
  },
  {
  id: 8,
  eventName: "Blessing Tree",
  clientName: "InHouse",
  eventDate: "October 25 to 29, 2017",
  venue: "Ganesh Kala krida manch Swargate",
  attendees: "1200+",
  category: "Sprutial Expo",
description: "Blessing Tree 2017 was a unique spiritual and wellness exhibition that brought together renowned astrologers, numerologists, tarot readers, palm readers, and holistic practitioners under one roof. The event created a vibrant platform for visitors to explore spiritual guidance, positive energy products, and alternative healing practices. The expo featured personalized consultations, spiritual merchandise, and interactive sessions focused on self-discovery, mindfulness, and holistic living, successfully establishing itself as a distinctive gathering for the spiritual and metaphysical community.",
  photos: [
    { id: 1, url: "/event/bt/bt.jpeg", caption: "Startup pitch presentation", engagement: "420 likes, 70 comments" },
    { id: 2, url: "/event/bt/bt2.jpeg", caption: "Investor panel", engagement: "380 likes, 55 comments" },
    { id: 3, url: "/event/bt/bt3.jpeg", caption: "Winner announcement", engagement: "500 likes, 88 comments" }
  ],
 highlights: [
  "Renowned Spiritual Experts",
  "Personalized Consultations",
  "Holistic & Wellness Expo",
  "Interactive Healing Sessions"
],
  results: {
    satisfaction: "200%",
    leads: "45000+",
    media: "30+ Media",
    social: "5M Reach"
  }
},
   {
    id: 2,
    eventName: "Udyog Dindi By Saturday Club",
    clientName: "Maharashtra Tourism",
    eventDate: "April 20-22, 2024",
    venue: "Shaniwarwada Ground, Pune",
    attendees: "15000+",
    category: "Cultural Festival",
    description: "Three-day cultural festival celebrating Maharashtra's rich heritage with traditional music, dance, art, and cuisine.",
    photos: [
      {
        id: 1,
        url: "/event/saturday/sat1.webp",
        caption: "Traditional Lavani performance",
        engagement: "890 likes, 156 comments"
      },
      {
        id: 2,
        url: "/event/saturday/sat2.webp",
        caption: "Food festival with local delicacies",
        engagement: "1.2K likes, 234 comments"
      },
      {
        id: 3,
        url: "/event/saturday/sat3.webp",
        caption: "Art exhibition featuring local artists",
        engagement: "670 likes, 98 comments"
      }
    ],
    highlights: [
      "100+ Cultural Performances",
      "50+ Food Stalls",
      "Art & Craft Exhibition",
      "Traditional Fashion Show"
    ],
    results: {
      satisfaction: "94%",
      visitors: "50K+ Total Visitors",
      media: "25+ Media Coverages",
      social: "2M+ Social Reach"
    }
  },
 
  {
    id: 1,
    eventName: "Sanam Consert",
    clientName: "Sanam",
    eventDate: "March 15-16, 2024",
    venue: "Pune Convention Center",
    attendees: "2500+",
    category: "Technology Conference",
    description: "Annual technology summit featuring keynote speakers, workshops, and networking sessions for tech professionals.",
    photos: [
      {
        id: 1,
        url: "/event/sanam/1.webp",
        caption: "Main stage with keynote speaker",
        engagement: "450 likes, 89 comments"
      },
      {
        id: 2,
        url: "/event/sanam/2.webp",
        caption: "Networking session during break",
        engagement: "320 likes, 67 comments"
      },
      {
        id: 3,
        url: "/event/sanam/3.webp",
        caption: "Workshop on AI and Machine Learning",
        engagement: "280 likes, 45 comments"
      }
    ],
    highlights: [
      "25+ Industry Speakers",
      "15+ Technical Workshops", 
      "50+ Exhibition Stalls",
      "Live Streaming to 10K+ Online Viewers"
    ],
    results: {
      satisfaction: "96%",
      leads: "850+ Qualified Leads",
      media: "15+ Media Mentions",
      social: "500K+ Social Reach"
    }
  },
 
 
  {
  id: 6,
  eventName: "Varad Property Festival Season 1",
  clientName: "Velocity Motors",
  eventDate: "August 12-14, 2024",
  venue: "Auto Cluster Exhibition Center, Pune",
  attendees: "10000+",
  category: "Exhibition",
  description: "Grand automobile expo showcasing latest electric vehicles and performance cars.",
  photos: [
    { id: 1, url: "/event/varad/varad1.webp", caption: "Luxury car showcase", engagement: "780 likes, 120 comments" },
    { id: 2, url: "/event/varad/varad2.webp", caption: "EV launch ceremony", engagement: "640 likes, 98 comments" },
    { id: 3, url: "/event/varad/varad3.webp", caption: "Test drive zone", engagement: "520 likes, 76 comments" }
  ],
  highlights: ["30+ Auto Brands", "Live Test Drives", "EV Launch", "Celebrity Appearance"],
  results: {
    satisfaction: "95%",
    visitors: "40K+ Visitors",
    media: "20+ Media Coverages",
    social: "1.5M+ Social Reach"
  }
},
{
  id: 7,
  eventName: "Chandramukhi",
  clientName: "Prime Infra Group",
  eventDate: "September 5, 2024",
  venue: "JW Marriott, Pune",
  attendees: "1500+",
  category: "Business Conference",
  description: "Premium real estate summit with top developers and investors.",
  photos: [
    { id: 1, url: "/event/chandra/chnd.webp", caption: "Panel discussion", engagement: "310 likes, 54 comments" },
    { id: 2, url: "/event/chandra/chnad2.webp", caption: "Networking session", engagement: "280 likes, 40 comments" },
    { id: 3, url: "/event/chandra/chnad3.webp", caption: "Project unveiling", engagement: "350 likes, 60 comments" }
  ],
  highlights: ["Top Developers Panel", "Investment Insights", "Live Q&A", "VIP Networking"],
  results: {
    satisfaction: "93%",
    leads: "600+ Qualified Leads",
    media: "10+ Media Mentions",
    social: "400K+ Social Reach"
  }
},

{
  id: 9,
  eventName: "Varad Property Festival Season 2",
  clientName: "StyleWave",
  eventDate: "November 18-19, 2024",
  venue: "Phoenix Mall, Pune",
  attendees: "7000+",
  category: "Fashion Show",
  description: "Luxury fashion showcase featuring top designers and celebrity models.",
  photos: [
    { id: 1, url: "/event/varad/varad4.webp", caption: "Ramp walk highlight", engagement: "1K likes, 210 comments" },
    { id: 2, url: "/event/varad/varad5.webp", caption: "Designer showcase", engagement: "890 likes, 180 comments" },
    { id: 3, url: "/event/varad/varad6.webp", caption: "Closing ceremony", engagement: "760 likes, 150 comments" }
  ],
  highlights: ["20+ Designers", "Celebrity Showstopper", "Luxury Brands", "Live Media Coverage"],
  results: {
    satisfaction: "94%",
    visitors: "20K+ Visitors",
    media: "30+ Media Coverages",
    social: "2.2M+ Social Reach"
  }
},
{
  id: 10,
  eventName: "Varad Property Festival Season 3",
  clientName: "EduFuture India",
  eventDate: "December 2-3, 2024",
  venue: "Balewadi Stadium, Pune",
  attendees: "9000+",
  category: "Education Expo",
  description: "Mega education fair connecting students with universities and institutions.",
  photos: [
    { id: 1, url: "/event/varad/varad7.webp", caption: "University stalls", engagement: "500 likes, 90 comments" },
    { id: 2, url: "/event/varad/varad8.webp", caption: "Career counseling session", engagement: "450 likes, 75 comments" },
    { id: 3, url: "/event/varad/varad9.webp", caption: "Student registration desk", engagement: "380 likes, 60 comments" }
  ],
  highlights: ["100+ Universities", "Career Counseling", "Scholarship Info", "Workshops"],
  results: {
    satisfaction: "96%",
    visitors: "35K+ Visitors",
    media: "18+ Media Mentions",
    social: "1M+ Social Reach"
  }
},
{
  id: 11,
  eventName: "Channel Partner Summit",
  clientName: "Taste Maharashtra",
  eventDate: "January 15-17, 2025",
  venue: "Amanora Park, Pune",
  attendees: "12000+",
  category: "Food Festival",
  description: "Grand food carnival featuring street food, gourmet dishes, and live music.",
  photos: [
    { id: 1, url: "/event/cp/cp1.webp", caption: "Live cooking demo", engagement: "950 likes, 160 comments" },
    { id: 2, url: "/event/cp/cp2.webp", caption: "Crowd enjoying food", engagement: "1.3K likes, 240 comments" },
    { id: 3, url: "/event/cp/cp3.webp", caption: "Music performance", engagement: "870 likes, 140 comments" }
  ],
  highlights: ["150+ Food Stalls", "Celebrity Chefs", "Live Music", "Family Activities"],
  results: {
    satisfaction: "98%",
    visitors: "45K+ Visitors",
    media: "22+ Media Coverages",
    social: "2.5M+ Social Reach"
  }
}
  
];

// Event Card Component
const EventCard = ({ event, index }: { event: typeof events[0], index: number }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % event.photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + event.photos.length) % event.photos.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextPhoto, 3000);
    return () => clearInterval(interval);
  }, [isHovered, event.photos.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-600/10 to-emerald-600/10 border border-green-500/20 hover:border-green-400/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-green-500/20">
        
        {/* Photo Carousel */}
        <div className="relative h-64 md:h-80">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhotoIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              <Image
                src={event.photos[currentPhotoIndex].url}
                alt={event.photos[currentPhotoIndex].caption}
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(event.eventName)}&background=0d1117&color=ffffff&size=400`;
                }}
              />
              
              {/* Photo Navigation */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Photo Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {event.photos.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentPhotoIndex ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Event Details */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{event.eventName}</h3>
              <p className="text-sm text-gray-400">{event.clientName}</p>
            </div>
            <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
              <span className="text-xs text-green-400 font-medium">{event.category}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{event.eventDate.split(',')[0]}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{event.venue.split(',')[0]}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span>{event.attendees}</span>
            </div>
          </div>

          <p className="text-gray-300 text-sm mb-4 line-clamp-2">{event.description}</p>

          {/* Engagement Stats */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-400 text-xs">
              <div className="flex items-center gap-1">
                <Heart size={12} />
                <span>{event.photos[currentPhotoIndex].engagement.split(' ')[0]}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle size={12} />
                <span>{event.photos[currentPhotoIndex].engagement.split(', ')[1]}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-green-400 group-hover:text-green-300 transition-colors">
              <span className="text-sm">View Details</span>
              <ExternalLink size={14} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Event Detail Modal Component
const EventDetailModal = ({ event, onClose }: { event: typeof events[0], onClose: () => void }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % event.photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + event.photos.length) % event.photos.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-gray-900 border border-green-400/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-6 lg:p-8">
          {/* Event Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">{event.eventName}</h2>
            <div className="flex items-center gap-6 text-gray-400">
              <span>{event.clientName}</span>
              <span>•</span>
              <span>{event.eventDate}</span>
              <span>•</span>
              <span>{event.venue}</span>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mb-8">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-green-600/10 to-emerald-600/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhotoIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={event.photos[currentPhotoIndex].url}
                    alt={event.photos[currentPhotoIndex].caption}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(event.photos[currentPhotoIndex].caption)}&background=0d1117&color=ffffff&size=800`;
                    }}
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-lg mb-2">{event.photos[currentPhotoIndex].caption}</p>
                    <div className="flex items-center gap-4 text-white/80">
                      <div className="flex items-center gap-1">
                        <Heart size={16} />
                        <span>{event.photos[currentPhotoIndex].engagement}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Gallery Navigation */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Photo Thumbnails */}
            <div className="flex gap-2 mt-4">
              {event.photos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentPhotoIndex ? 'border-green-400' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={photo.url}
                    alt={photo.caption}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(photo.caption)}&background=0d1117&color=ffffff&size=80`;
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Event Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Event Details</h3>
              <p className="text-gray-300 mb-6">{event.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">{event.eventDate}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">{event.venue}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">{event.attendees} Attendees</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Event Highlights</h3>
              <ul className="space-y-2">
                {event.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results Grid */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Event Results</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-green-600/20 to-green-600/10 border border-green-500/30">
                <Star className="h-6 w-6 text-yellow-400 mb-2" />
                <p className="text-2xl font-bold text-white">{event.results.satisfaction}</p>
                <p className="text-sm text-gray-400">Satisfaction</p>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-600/10 border border-blue-500/30">
                <Users className="h-6 w-6 text-blue-400 mb-2" />
                <p className="text-2xl font-bold text-white">{event.results.leads || event.results.visitors || event.results.participants || event.results.engagement}</p>
                <p className="text-sm text-gray-400">Impact</p>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-600/20 to-purple-600/10 border border-purple-500/30">
                <Share2 className="h-6 w-6 text-purple-400 mb-2" />
                <p className="text-2xl font-bold text-white">{event.results.media}</p>
                <p className="text-sm text-gray-400">Media Coverage</p>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-600/20 to-orange-600/10 border border-orange-500/30">
                <Heart className="h-6 w-6 text-orange-400 mb-2" />
                <p className="text-2xl font-bold text-white">{event.results.social}</p>
                <p className="text-sm text-gray-400">Social Reach</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function EventExpoPortfolio() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated Background */}
<div className="fixed inset-0 opacity-20 pointer-events-none">        <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 via-emerald-600/20 to-teal-400/30 animate-pulse" />
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
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
            className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors mb-8"
          >
            ← Back to Our Work
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Event & Expo </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Spectacular events and memorable experiences. From tech conferences to cultural festivals, we create unforgettable moments that leave lasting impressions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="site-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={event.id} onClick={() => setSelectedEvent(event)}>
                <EventCard event={event} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventDetailModal 
            event={selectedEvent} 
            onClose={() => setSelectedEvent(null)} 
          />
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
              Ready to Create Your Next Event?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us design and execute exceptional events that bring your vision to life and create unforgettable experiences.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/25"
            >
              Plan Your Event
              <Calendar size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
