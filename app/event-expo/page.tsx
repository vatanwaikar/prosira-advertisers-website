"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  ExternalLink,
  Calendar,
  MapPin,
  Users,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import Link from "next/link";

// Your Real Event Work Data
const events = [
  {
    id: 4,
    eventName: "Great Home and Land Expo 2017",
    clientName: "InHouse",
    eventDate: "March 3-5, 2017",
    venue: "Shivgorksh Maidan Katraj Kondhwa Road, Katraj",
    stalls: "30+",
    category: "Property Exhibition",
    description:
      "Held during the challenging business climate following demonetization and the implementation of GST reforms, the 2017 Property Exhibition emerged as a resilient platform for the real estate industry. Despite market uncertainty, the event successfully brought together developers, investors, and serious homebuyers, creating opportunities for direct engagement and transparent discussions around evolving regulations and investment strategies.",
    photos: [
      {
        id: 1,
        url: "/event/gh17/gh171.webp",
      },
      {
        id: 2,
        url: "/event/gh17/gh172.webp",
      },
      {
        id: 3,
        url: "/event/gh17/gh173.webp",
      },
    ],
    highlights: [
      "Supported by SKD Group",
      "Grand Inauguration by Shrenik Karnawat",
      "Celebrity Presence – Prarthna Behere",
      "Leading Real Estate Brands",
    ],
    results: {
      satisfaction: "100%",
      participants: "6500+",
      media: "35+ Media",
      social: "1.5M+ Reach",
    },
  },
  {
    id: 8,
    eventName: "Blessing Tree",
    clientName: "InHouse",
    eventDate: "October 25 to 29, 2017",
    venue: "Ganesh Kala krida manch Swargate",
    stalls: "100+",
    category: "Sprutial Expo",
    description:
      "Blessing Tree 2017 was a unique spiritual and wellness exhibition that brought together renowned astrologers, numerologists, tarot readers, palm readers, and holistic practitioners under one roof. The event created a vibrant platform for visitors to explore spiritual guidance, positive energy products, and alternative healing practices. The expo featured personalized consultations, spiritual merchandise, and interactive sessions focused on self-discovery, mindfulness, and holistic living, successfully establishing itself as a distinctive gathering for the spiritual and metaphysical community.",
    photos: [
      {
        id: 1,
        url: "/event/bt/bt.jpeg",
      },
      {
        id: 2,
        url: "/event/bt/bt2.jpeg",
      },
      {
        id: 3,
        url: "/event/bt/bt3.jpeg",
      },
    ],
    highlights: [
      "Renowned Spiritual Experts",
      "Personalized Consultations",
      "Holistic & Wellness Expo",
      "Interactive Healing Sessions",
    ],
    results: {
      satisfaction: "200%",
      leads: "45000+",
      media: "30+ Media",
      social: "5M Reach",
    },
  },
  {
    id: 3,
    eventName: "Great Home and Land Expo 2018",
    clientName: "InHouse",
    eventDate: "Jan 5 to 8, 2018",
    venue: "Shivgorksh Maidan Katraj Kondhwa Road, Katraj",
    stalls: "200+",
    category: "Property Exhibition",
    description:
      "Following the successful 2017 edition held during a challenging market phase, the 2nd edition of the Property Exhibition was organized in 2018, building on renewed industry confidence and positive buyer sentiment. The event witnessed stronger participation from leading developers, increased footfall, and a wider showcase of residential and commercial projects aligned with the evolving regulatory environment.",
    photos: [
      {
        id: 1,
        url: "/event/gh18/gh18.webp",
      },
      {
        id: 2,
        url: "/event/gh18/gh182.webp",
      },
      {
        id: 3,
        url: "/event/gh18/gh183.webp",
      },
    ],
    highlights: [
      "Sponsored by Ceratec Group",
      "Inaugurated by Aanand Agarwal",
      "Celebrity Guest – Prajakta Mali",
      "Top Real Estate Participation",
    ],
    results: {
      satisfaction: "100%",
      orders: "8500+",
      media: "45+ Media",
      social: "2M+  Reach",
    },
  },

  {
    id: 5,
    eventName: "CBRE Propfest 2019",
    clientName: "CBRE",
    eventDate: "OCT 4 to 6, 2019",
    venue:
      "East- Hotel Hyatt Regency -Viman Nagar and West- Hotel Taj Vivanta-Hinjewadi",
    stalls: "60+",
    category: "Property Exhibition",
    description:
      "CBRE Propfest showcased a diverse range of exclusive, affordable, and luxurious homes from leading residential developers across East and West Pune. The event brought together top projects under one platform, offering homebuyers and investors an opportunity to explore premium residences, discover attractive deals, and connect directly with trusted developers across Pune’s rapidly growing residential corridors.",
    photos: [
      {
        id: 1,
        url: "/event/cbre/cbre1.webp",
      },
      {
        id: 2,
        url: "/event/cbre/cbre2.webp",
      },
      {
        id: 3,
        url: "/event/cbre/cbre3.webp",
      },
    ],
    highlights: [
      "Leading Pune Developers",
      "Luxury & Affordable Homes",
      "Exclusive Property Deals",
      "East & West Pune Projects",
    ],
    results: {
      satisfaction: "100%",
      engagement: "1200+",
      media: "40+",
      social: "3M+ Reach",
    },
  },

  {
    id: 2,
    eventName: "Udyog Dindi By Saturday Club",
    clientName: "Saturday Club Global Trust",
    eventDate: "18th Nov 2019",
    venue: "JW Marriott Hotel Pune",
    stalls: "45+",
    category: "Business Conclave",
    description:
      "UDYOG DINDI – Business Conclave Pune, brought together Maharashtra’s dynamic entrepreneurs, business owners, manufacturers, service providers, and startups on a powerful networking platform. The event featured experiential learning sessions from renowned speakers and self-made industry leaders, offering valuable business insights and growth strategies. With participation from over 800 entrepreneurs and organizations across the state, the conclave enabled meaningful connections, potential collaborations, and opportunities for business tie-ups, mergers, and strategic partnerships, making it a high-impact milestone for the regional business ecosystem.",
    photos: [
      {
        id: 1,
        url: "/event/saturday/sat1.webp",
      },
      {
        id: 2,
        url: "/event/saturday/sat2.webp",
      },
      {
        id: 3,
        url: "/event/saturday/sat3.webp",
      },
    ],
    highlights: [
      "800+ Participants",
      "Entrepreneurs & Startups",
      "Business Owners Network",
      "Across Maharashtra",
    ],
    results: {
      satisfaction: "100%",
      visitors: "2500+ Total Visitors",
      media: "NA",
      social: "NA",
    },
  },

  {
    id: 1,
    eventName: "Sanam Concert",
    clientName: "Fuel Nation",
    eventDate: "9th Feb 2020",
    venue: "Sunny's World Pune",
    stalls: "NA",
    category: "Music Concert",
    description:
      "FUEL–SANAM Fundraising Musical Concert 2020 is a special fundraising event hosted by FUEL (Friends Union for Energising Lives), where India’s leading band SANAM performed to support the education of girl children of Army Jawans while celebrating the success of FUEL Aptitude Champions.",
    photos: [
      {
        id: 1,
        url: "/event/sanam/1.webp",
      },
      {
        id: 2,
        url: "/event/sanam/2.webp",
      },
      {
        id: 3,
        url: "/event/sanam/3.webp",
      },
    ],
    highlights: [
      "Live by Band SANAM",
      "Education for Army Jawans’ Daughters",
      "FUEL Fundraising Event",
      "Celebrating Aptitude Champions",
    ],
    results: {
      satisfaction: "100%",
      leads: "3000+ visitors ",
      media: "10+ Media Mentions",
      social: "1M Reach",
    },
  },
  {
    id: 12,
    eventName: "Success Party",
    clientName: "Varad Property Solutions Pvt Ltd",
    eventDate: "7th April 2022",
    venue: "JW Marriott Hotel Pune",
    stalls: "NA",
    category: "Channel Partner Meet",
    description:
      "Following the successful execution of the first edition of the Varad Property Festival, we strategically initiated plans for the second edition with a stronger vision and expanded industry participation. As a key step toward this growth, we organized an exclusive Channel Partner Meet to strengthen relationships, extend new collaboration opportunities, and align our partners with the upcoming edition’s roadmap. The meet served as a platform to share event success insights, discuss market strategies, and build a more powerful sales and distribution network ahead of the next festival.",
    photos: [
      {
        id: 1,
        url: "/event/sucess/s1.webp",
      },
      {
        id: 2,
        url: "/event/sucess/s2.webp",
      },
      {
        id: 3,
        url: "/event/sucess/s3.webp",
      },
    ],
    highlights: [
      "Top Booking Achievers Awarded",
      "1st Edition Recognition",
      "Outstanding Sales Performance",
      "Builders & Channel Partners Honored",
    ],
    results: {
      satisfaction: "100%",
      visitors: "2000+ Visitors",
      media: "NA",
      social: "NA",
    },
  },
  {
    id: 11,
    eventName: "Channel Partner Summit",
    clientName: "Varad Property Solutions Pvt Ltd",
    eventDate: "7th April 2023",
    venue: "JW Marriott Hotel Pune",
    stalls: "NA",
    category: "Channel Partner Meet",
    description:
      "Following the successful execution of the first edition of the Varad Property Festival, we strategically initiated plans for the second edition with a stronger vision and expanded industry participation. As a key step toward this growth, we organized an exclusive Channel Partner Meet to strengthen relationships, extend new collaboration opportunities, and align our partners with the upcoming edition’s roadmap. The meet served as a platform to share event success insights, discuss market strategies, and build a more powerful sales and distribution network ahead of the next festival.",
    photos: [
      {
        id: 1,
        url: "/event/cp/cp1.webp",
      },
      {
        id: 2,
        url: "/event/cp/cp2.webp",
      },
      {
        id: 3,
        url: "/event/cp/cp3.webp",
      },
    ],
    highlights: [
      "Top Booking Achievers Awarded",
      "1st Edition Recognition",
      "Outstanding Sales Performance",
      "Builders & Channel Partners Honored",
    ],
    results: {
      satisfaction: "100%",
      visitors: "2000+ Visitors",
      media: "NA",
      social: "NA",
    },
  },
  {
    id: 7,
    eventName: "Chandramukhi",
    clientName: "Varad Property Solutions Pvt Ltd",
    eventDate: "29th April 2022",
    venue: "Kothrud City Pride",
    stalls: "NA",
    category: "Movie Premier",
    description:
      "Premium real estate summit with top developers and investors.",
    photos: [
      {
        id: 1,
        url: "/event/chandra/chnd.webp",
      },
      {
        id: 2,
        url: "/event/chandra/chnad2.webp",
      },
      {
        id: 3,
        url: "/event/chandra/chnad3.webp",
      },
    ],
    highlights: [
      "Star-Studded Movie Premiere",
      "Presence of Amruta Khanvilkar",
      "Celebrity Guest – Aditya Kothare",
      "Grand Media & Glamour Evening",
    ],
    results: {
      satisfaction: "100%",
      leads: "500+ Visitors",
      media: "NA",
      social: "NA",
    },
  },

  {
    id: 6,
    eventName: "Varad Property Festival 2022",
    clientName: "Varad Property Solutions Pvt Ltd",
    eventDate: " March 11 to 12 2022",
    venue: "Shubharambh Lawns, Pune",
    stalls: "50+",
    category: "Property Exhibition",
    description:
      "At the Varad Property Festival, we introduced a first-of-its-kind revenue model to the market. Instead of traditional exhibition fees, builders were invited to showcase their projects at our property expo and pay a brokerage only after successful sales bookings — up to 5% per transaction. This performance-driven approach created strong builder participation and buyer engagement. With the dedicated on-ground team of our client, Varad Property Solutions Pvt. Ltd., the festival successfully achieved 100+ confirmed property bookings, establishing the event as a results-focused real estate sales platform.",
    photos: [
      {
        id: 1,
        url: "/event/varad/varad1.webp",
      },
      {
        id: 2,
        url: "/event/varad/varad2.webp",
      },
      {
        id: 3,
        url: "/event/varad/varad3.webp",
      },
    ],
    highlights: [
      "Leading Real Estate Brands",
      "Celebrity Guest – Sai Tamhankar",
      "Dignitaries Murlidhar Mohol & Medha Kulkarni",
      "Varad Properties Director Presence",
    ],
    results: {
      satisfaction: "200%",
      visitors: "6500+ Visitors",
      media: "60+ Media Coverages",
      social: "2M+ Reach",
    },
  },

  {
    id: 9,
    eventName: "Varad Property Festival 2022",
    clientName: "Varad Property Solutions Pvt Ltd",
    eventDate: "15th & 16th Oct 2022",
    venue: "Pandit Farm Pune",
    stalls: "60+",
    category: "Property Exhibition",
    description:
      "Following the successful execution of the first edition of the Varad Property Festival, we strategically launched the second edition to build on the strong market response and proven performance-based model. The continued collaboration with builders and the growing trust of homebuyers enabled us to scale participation, enhance buyer engagement, and further position the festival as a high-conversion real estate exhibition platform driven by measurable sales outcomes.",
    photos: [
      {
        id: 1,
        url: "/event/varad/varad4.webp",
      },
      {
        id: 2,
        url: "/event/varad/varad5.webp",
      },
      {
        id: 3,
        url: "/event/varad/varad6.webp",
      },
    ],
    highlights: [
      "2nd Successful Edition",
      "Reputed Real Estate Brands",
      "High Buyer Footfall",
      "Strong Booking Momentum",
    ],
    results: {
      satisfaction: "100%",
      visitors: "4500+ Visitors",
      media: "60+ Media Coverages",
      social: "2M+ Reach",
    },
  },
  {
    id: 10,
    eventName: "Varad Property Festival 2023",
    clientName: "Varad Property Solutions Pvt Ltd",
    eventDate: "15th & 16th April 2023",
    venue: "Center Pune- Pandit Farm & West Pune - The Orchid Hotel",
    stalls: "85+",
    category: "Property Exhibition",
    description:
      "Building on the success of the third Grand Property Expo across Central Pune and West Pune, we introduced a new addition — the Real Estate Conclave — designed as a thought-leadership platform to discuss Pune’s urban growth, infrastructure development, investment potential, and future real estate trends. The conclave brought together developers, industry experts, and key stakeholders, creating a knowledge-driven environment that complemented the exhibition while strengthening credibility, networking opportunities, and market insights for all participants.",
    photos: [
      {
        id: 1,
        url: "/event/varad/varad7.webp",
      },
      {
        id: 2,
        url: "/event/varad/varad8.webp",
      },
      {
        id: 3,
        url: "/event/varad/varad9.webp",
      },
    ],
    highlights: [
      "Key Policymakers & Industry Leaders",
      "Shri Chandrakantdada Patil Presence",
      "MLAs & Civic Dignitaries Attended",
      "Infrastructure & Real Estate Dialogue",
    ],
    results: {
      satisfaction: "100%",
      visitors: "8500+ Visitors",
      media: "60+ Media Mentions",
      social: "3M+ Social Reach",
    },
  },
];

// Event Card Component
const EventCard = ({
  event,
  index,
}: {
  event: (typeof events)[0];
  index: number;
}) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % event.photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex(
      (prev) => (prev - 1 + event.photos.length) % event.photos.length,
    );
  };

  
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
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-600/10 to-yellow-600/10 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-yellow-500/20">
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
                alt={event.eventName}
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
                onClick={(e) => {
                  e.stopPropagation();
                  prevPhoto();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextPhoto();
                }}
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
                      index === currentPhotoIndex
                        ? "bg-white w-6"
                        : "bg-white/50"
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
              <h3 className="text-xl font-bold text-white mb-1">
                {event.eventName}
              </h3>
              <p className="text-sm text-gray-400">{event.clientName}</p>
            </div>
            <div
              className="px-3 py-1 rounded-full 
                bg-yellow-500/20 
                border border-yellow-500/30 
                whitespace-nowrap 
                max-w-[140px] 
                text-center"
            >
              <span
                className="text-[11px] md:text-xs 
                   text-yellow-400 
                   font-medium 
                   truncate block"
              >
                {event.category}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{event.eventDate.split(",")[0]}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{event.venue.split(",")[0]}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span>{event.stalls}</span>{" "}
            </div>
          </div>

          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {event.description}
          </p>

            <div className="flex items-center gap-1 text-yellow-400 group-hover:text-yellow-300 transition-colors">
              <span className="text-sm">View Details</span>
              <ExternalLink size={14} />
            </div>
        </div>
      </div>
    </motion.div>
  );
};

// Event Detail Modal Component
const EventDetailModal = ({
  event,
  onClose,
}: {
  event: (typeof events)[0];
  onClose: () => void;
}) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % event.photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex(
      (prev) => (prev - 1 + event.photos.length) % event.photos.length,
    );
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
        className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-gray-900 border border-yellow-400/30 shadow-2xl"
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
            <h2 className="text-3xl font-bold text-white mb-2">
              {event.eventName}
            </h2>
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
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-600/10 to-yellow-600/10">
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
                    alt={event.eventName}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(event.eventName)}&background=0d1117&color=ffffff&size=800`;
                    }}
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-lg mb-2">
                      {event.eventName}
                    </p>
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
                    index === currentPhotoIndex
                      ? "border-yellow-400"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={photo.url}
                    alt={event.eventName}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(event.eventName)}&background=0d1117&color=ffffff&size=80`;
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Event Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Event Details
              </h3>
              <p className="text-gray-300 mb-6">{event.description}</p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300">{event.eventDate}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300">{event.venue}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300">
                    {event.stalls} Stalls
                  </span>{" "}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Event Highlights
              </h3>
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
              <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-600/20 to-yellow-600/10 border border-yellow-500/30">
                <Star className="h-6 w-6 text-yellow-400 mb-2" />
                <p className="text-2xl font-bold text-white">
                  {event.results.satisfaction}
                </p>
                <p className="text-sm text-gray-400">Satisfaction</p>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-600/20 to-yellow-600/10 border border-yellow-500/30">
                <Users className="h-6 w-6 text-yellow-400 mb-2" />
                <p className="text-2xl font-bold text-white">
                  {event.results.leads ||
                    event.results.visitors ||
                    event.results.participants ||
                    event.results.engagement ||
                    event.results.orders}
                </p>
                <p className="text-sm text-gray-400">Impact</p>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-600/20 to-orange-600/10 border border-orange-500/30">
                <Share2 className="h-6 w-6 text-orange-400 mb-2" />
                <p className="text-2xl font-bold text-white">
                  {event.results.media}
                </p>
                <p className="text-sm text-gray-400">Media Coverage</p>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-600/20 to-orange-600/10 border border-orange-500/30">
                <Heart className="h-6 w-6 text-orange-400 mb-2" />
                <p className="text-2xl font-bold text-white">
                  {event.results.social}
                </p>
                <p className="text-sm text-gray-400">Reach</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function EventExpoPortfolio() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(
    null,
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        {" "}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 via-yellow-600/20 to-yellow-400/30 animate-pulse" />
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
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
            className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-8"
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
              <span className="text-primary font-serif">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Spectacular events and memorable experiences. From tech
              conferences to cultural festivals, we create unforgettable moments
              that leave lasting impressions.
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
              Let us design and execute exceptional events that bring your
              vision to life and create unforgettable experiences.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 
  bg-primary 
  text-primary-foreground 
  px-8 py-4 rounded-lg font-semibold 
  hover:bg-primary/90 
  hover:scale-105 
  transition-all duration-300 
  shadow-lg shadow-primary/30"
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
