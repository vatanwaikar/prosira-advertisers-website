"use client";

import Image from "next/image";
import { Linkedin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const teamMembers = [
  {
    name: "Shashikant Panchal",
    role: "CEO & Founder",
    image: "/team/shashikantsir.png",
    bio: "Visionary leader with strong expertise in media strategy, advertising planning, and brand growth.",
    expandedBio: "With over 15 years of experience in the advertising industry, Shashikant has successfully led numerous high-profile campaigns for Fortune 500 companies. His strategic vision and innovative approach have been instrumental in establishing Prosira Advertisers as a leading agency in Pune.",
    linkedin: "https://www.linkedin.com/in/shashikantt-paanchal-8a576467/"
  },
  {
    name: "Vijayant Saini",
    role: "Co-Founder",
    image: "/team/vijyantsir.png",
    bio: "Strategic co-founder with expertise in business development and client relationships.",
    expandedBio: "Vijayant brings extensive experience in building lasting client partnerships and driving business growth. His expertise in understanding market trends and client needs has been crucial in expanding Prosira's portfolio across diverse industries.",
    linkedin: "https://www.linkedin.com/in/vijayant-saini-483382a2/"
  },
  {
    name: "Neeta Pawar",
    role: "Sales Head",
    image: "/team/neetamadam.png",
    bio: "Dynamic sales leader with proven track record in revenue growth and team building.",
    expandedBio: "Neeta has consistently exceeded sales targets and built high-performing sales teams. Her client-centric approach and deep understanding of the advertising landscape have resulted in long-term partnerships and sustained revenue growth.",
    linkedin: "https://www.linkedin.com/in/neeta-pawar-19539823b/"
  },
  {
    name: "Saurabh Rathod",
    role: "Digital Marketing Expert",
    image: "/team/saurabhh.png",
    bio: "Passionate web developer specializing in modern frontend frameworks and scalable web architecture.",
    expandedBio: "Saurabh is proficient in React, Next.js, and modern web technologies. He has successfully delivered numerous high-performance web applications with focus on user experience and technical excellence.",
    linkedin: "https://www.linkedin.com/in/saurabh-rathod-7b9a12325/"
  },
   {
    name: "Seema Mujumdar",
    role: "Account Manager",
    image: "/team/seemamadam.png",
    bio: "Proactive business development executive building strategic partnerships and expanding client base.",
    expandedBio: "Seema excels in identifying new business opportunities and nurturing client relationships. Her strategic approach to business development has been instrumental in expanding Prosira's market presence.",
    linkedin: "https://www.linkedin.com/in/seema-mujumdar"
  },
  {
    name: "Dhanshree Gaikwad",
    role: "Graphic Designer",
    image: "/team/dhanshree.png",
    bio: "Creative graphic designer with expertise in brand identity, visual storytelling, and digital design.",
    expandedBio: "Dhanshree brings creative vision to every project, specializing in brand identity development, digital illustrations, and creating compelling visual narratives that resonate with target audiences.",
    linkedin: "https://www.linkedin.com/in/dhanashree-gaikwad-1196451a0/"
  },
  {
    name: "Vinay Mali",
    role: "Video Editor",
    image: "/team/vinay.png",
    bio: "Results-driven digital marketing manager specializing in SEO, SEM, and social media strategies.",
    expandedBio: "Vinay has successfully managed multi-channel digital campaigns with measurable ROI. His expertise in data-driven marketing strategies has helped clients achieve significant growth in online visibility and conversions.",
    linkedin: "https://www.linkedin.com/in/vinay-mali"
  },
  {
    name: "Vatan Waikar",
    role: "Full Stack Developer",
    image: "/team/vatan.png",
    bio: "Strategic content creator developing compelling narratives that engage audiences and drive conversions.",
    expandedBio: "Vatan specializes in creating content strategies that align with business objectives. His expertise spans blog content, video scripts, and comprehensive content marketing campaigns.",
    linkedin: "https://www.linkedin.com/in/vatanwaikar/"
  },
  {
    name: "Sayaji Teji",
    role: "Activation Head",
    image: "/team/sayjisir.png",
    bio: "Expert media planner optimizing ad spend and targeting across multiple channels.",
    expandedBio: "Sayaji has extensive experience in media planning and buying across traditional and digital platforms. His analytical approach ensures optimal media mix and maximum campaign effectiveness.",
    linkedin: "https://www.linkedin.com/in/sayaji-teji-72914416b/"
  },
  {
    name: "Shourya Shinde",
    role: "Social Media Intern",
    image: "/team/shourya.png",
    bio: "Creative social media manager building brand presence and engagement across platforms.",
    expandedBio: "Shaurya has successfully grown social media presence for multiple brands, creating engaging content and community management strategies that drive brand loyalty and customer engagement.",
    linkedin: "https://www.linkedin.com/in/11shourya-shinde/"
  },
  {
    name: "Vishal ",
    role: "field work executive",
    image: "/team/vishal.png",
    bio: "Field work executive managing client relationships and ensuring smooth project execution.",
    expandedBio: "Vishal is responsible for managing field operations, coordinating with clients, and ensuring all projects are executed smoothly and efficiently.",
    // linkedin: "https://www.linkedin.com/in/rahul-verma"
  },
 
];

export default function TeamContent() {
  const [expandedMembers, setExpandedMembers] = useState<Set<string>>(new Set());

  const toggleExpanded = (name: string) => {
    setExpandedMembers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(name)) {
        newSet.delete(name);
      } else {
        newSet.add(name);
      }
      return newSet;
    });
  };

  return (
    <section className="py-24 bg-background">
      <div className="site-container space-y-24">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-primary font-serif">Experts</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate team driving strategy, creativity, and measurable growth.
          </p>
        </div>

        {/* Members */}
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className={`border-2 border-primary p-8 rounded-2xl bg-background shadow-lg flex flex-col lg:flex-row items-center gap-12 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={member.image}
                alt={member.name}
                width={280}
                height={400}
                className="w-full max-w-[260px] h-auto object-contain rounded-2xl shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0d1117&color=ffffff&size=280`;
                }}
              />
            </div>

            {/* Info */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-3">
                {member.name}
              </h2>

              <p className="text-primary font-medium mb-4">
                {member.role}
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {member.bio}
              </p>

              <div className="flex gap-5">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <Linkedin className="h-6 w-6 hover:scale-110 transition cursor-pointer" />
                </a>
              </div>

              <button
                onClick={() => toggleExpanded(member.name)}
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-4"
              >
                <span className="text-sm font-medium">
                  {expandedMembers.has(member.name) ? 'Show Less' : 'More'}
                </span>
                {expandedMembers.has(member.name) ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>

              {expandedMembers.has(member.name) && (
                <p className="text-muted-foreground leading-relaxed mt-4 animate-in slide-in-from-top-2 duration-300">
                  {member.expandedBio}
                </p>
              )}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
