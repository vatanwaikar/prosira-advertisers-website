import type { Metadata } from "next";
import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "Meet Our Team - Prosira Advertisers Pune",
  description:
    "Meet the expert team behind Prosira Advertisers delivering creative strategy, media planning, and impactful brand campaigns.",
};

const teamMembers = [

    {
    name: "Shashikant Panchal",
    role: "CEO & Founder",
    image: "/team/ss.jpeg",
    bio: "Visionary leader with strong expertise in media strategy, advertising planning, and brand growth. Driving innovation and results across multiple industries.",
  },
  {
    name: "Vatan Waikar",
    role: "Web Developer",
    image: "/team/vatan.jpeg",
    bio: "Passionate web developer specializing in modern frontend frameworks, performance optimization, and scalable web architecture. Focused on building high-converting digital experiences for brands.",
  },
  
  {
    name: "Kabir Patel",
    role: "Performance Marketer",
    image: "/team/member3.jpg",
    bio: "Performance-driven marketer specializing in paid media campaigns, analytics, and ROI-focused strategies.",
  },
  {
    name: "Sneha Joshi",
    role: "Brand Consultant",
    image: "/team/member4.jpg",
    bio: "Creative brand strategist helping businesses craft powerful positioning and impactful communication.",
  },
];

export default function TeamPage() {
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
            className={`flex flex-col lg:flex-row items-center gap-12 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
<div className="w-full lg:w-1/2 flex justify-center">
  <Image
    src={member.image}
    alt={member.name}
    width={350}
    height={500}
    className="w-[260px] md:w-[300px] lg:w-[340px] h-auto rounded-2xl shadow-xl"
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
                <Linkedin className="h-6 w-6 text-primary hover:scale-110 transition cursor-pointer" />
                <Instagram className="h-6 w-6 text-primary hover:scale-110 transition cursor-pointer" />
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
