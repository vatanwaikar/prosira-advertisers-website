"use client";

import Image from "next/image";
import { Linkedin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const teamMembers = [
  {
    name: "Shashikant Panchal",
    role: "CEO & Founder",
    image: "/team/shashikantsir.png",
    bio: "Strategic leader driving brand innovation, large-scale media planning, and integrated advertising solutions.",
    expandedBio:
      "With extensive experience in traditional and digital advertising, Shashikant leads Prosira Advertisers with a clear vision for performance-driven branding. He specializes in media strategy, campaign architecture, and high-impact brand positioning. Under his leadership, Prosira has executed multi-channel campaigns across print, outdoor, radio, television, and digital platforms, helping brands scale visibility and revenue in competitive markets.",
    linkedin: "https://www.linkedin.com/in/shashikantt-paanchal-8a576467/",
  },
  {
    name: "Vijayant Saini",
    role: "Co-Founder",
    image: "/team/vijyantsir.png",
    bio: "Business strategist focused on partnerships, growth expansion, and client acquisition.",
    expandedBio:
      "Vijayant plays a key role in business development and strategic alliances. His expertise lies in identifying growth opportunities, negotiating media partnerships, and strengthening long-term client relationships. He ensures every campaign aligns with business objectives while expanding Prosira’s footprint across industries and markets.",
    linkedin: "https://www.linkedin.com/in/vijayant-saini-483382a2/",
  },
  {
    name: "Neeta Pawar",
    role: "Director - Revenue Growth",
    image: "/team/neetamadam.png",
    bio: "Revenue strategist driving sales performance, client retention, and sustainable growth.",
    expandedBio:
      "Neeta leads revenue generation initiatives by building strong client networks and performance-driven sales systems. She focuses on scalable growth models, client acquisition strategies, and long-term account management. Her leadership ensures consistent revenue expansion while maintaining strong brand-client trust.",
    linkedin: "https://www.linkedin.com/in/neeta-pawar-19539823b/",
  },
  {
    name: "Saurabh Rathod",
    role: "Digital Marketing Expert",
    image: "/team/saurabhh.png",
    bio: "Performance-driven digital strategist specializing in SEO, paid media, and web growth.",
    expandedBio:
      "Saurabh manages digital campaigns focused on measurable ROI. From SEO optimization and Google Ads to social media performance marketing, he builds data-driven strategies that enhance brand visibility and lead generation. His expertise ensures clients achieve sustainable online growth through analytics-backed decision-making.",
    linkedin: "https://www.linkedin.com/in/saurabh-rathod-7b9a12325/",
  },
  {
    name: "Seema Mujumdar",
    role: "Account Manager",
    image: "/team/seemamadam.png",
    bio: "Client relationship specialist ensuring seamless campaign execution and satisfaction.",
    expandedBio:
      "Seema bridges the gap between clients and internal teams. She manages campaign timelines, coordinates creative and media departments, and ensures smooth execution across platforms. Her structured communication and proactive approach help maintain strong, long-term client relationships.",
    linkedin: "https://www.linkedin.com/in/seema-mujumdar",
  },
  {
    name: "Dhanshree Gaikwad",
    role: "Graphic Designer",
    image: "/team/dhanshree.png",
    bio: "Creative visual designer crafting compelling brand identities and campaign creatives.",
    expandedBio:
      "Dhanshree specializes in brand identity design, ad creatives, social media visuals, and print media layouts. She transforms strategic concepts into visually impactful designs that enhance brand recall and audience engagement across both digital and traditional platforms.",
    linkedin: "https://www.linkedin.com/in/dhanashree-gaikwad-1196451a0/",
  },
  {
    name: "Vinay Mali",
    role: "Video Editor",
    image: "/team/vinay.png",
    bio: "Creative video specialist producing engaging ad films and promotional content.",
    expandedBio:
      "Vinay manages video production and post-production for brand campaigns, social media ads, corporate films, and promotional content. His storytelling approach combined with modern editing techniques ensures impactful visual communication that drives audience engagement and conversions.",
    linkedin: "https://www.linkedin.com/in/vinay-mali",
  },
  {
    name: "Vatan Waikar",
    role: "Full Stack Developer",
    image: "/team/vatan.png",
    bio: "Full-stack developer building scalable, SEO-optimized, and performance-focused web solutions.",
    expandedBio:
      "Vatan develops modern, responsive, and conversion-optimized websites using Next.js and advanced frontend technologies. He ensures technical SEO implementation, GA4 integration, performance optimization, and scalable architecture for digital campaigns. His work enables brands to convert traffic into measurable business results.",
    linkedin: "https://www.linkedin.com/in/vatanwaikar/",
  },
  {
    name: "Shourya Shinde",
    role: "Social Media Intern",
    image: "/team/Shaurya.png",
    bio: "Emerging social media executive supporting content strategy and engagement growth.",
    expandedBio:
      "Shourya assists in content planning, social media management, and community engagement. She supports campaign execution, trend analysis, and platform optimization to enhance brand interaction and digital reach.",
    linkedin: "https://www.linkedin.com/in/11shourya-shinde/",
  },
  {
    name: "Sayaji Teji",  
    role: "Activation Head",
    image: "/team/sayjisir.png",
    bio: "Experiential marketing leader managing on-ground activations and brand promotions.",
    expandedBio:
      "Sayaji oversees field activations, event marketing, and outdoor campaign execution. From mall promotions to large-scale brand activations, he ensures flawless on-ground presence. His operational expertise guarantees strong brand visibility and audience engagement in real-world environments.",
    linkedin: "https://www.linkedin.com/in/sayaji-teji-72914416b/",
  },
  
  {
    name: "Vishal",
    role: "Field Work Executive",
    image: "/team/vishal.png",
    bio: "On-ground operations executive ensuring smooth campaign deployment.",
    expandedBio:
      "Vishal manages field logistics, vendor coordination, and execution support for outdoor and activation campaigns. His role ensures timely implementation, quality control, and smooth coordination between clients and operational teams.",
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
