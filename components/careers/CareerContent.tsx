"use client";

import { useState } from "react";
import JobApplicationForm from "./JobApplicationForm";

export default function CareerContent() {
  const [selectedPosition, setSelectedPosition] = useState<
    (typeof positions)[0] | null
  >(null);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const positions = [
    {
      id: 1,

      title: "Business Development Executive",

      type: "Full-Time",

      experience: "2+ Years Experience",

      location: "Pune",

      qualification:
        "Graduate / MBA in Marketing, Advertising, or related field",

      salary:
        "As per industry standards + attractive incentives",

      description:
        "We are a Pune-based advertising agency specializing in Media Planning and Media Buying across Radio, Newspaper Advertising, Cinema Ads, Digital Marketing, Events, Branding Solutions, and Integrated Media Campaigns.",

      highlights: [
        "Generate new business opportunities and acquire clients for media and advertising solutions",
        "Handle client meetings, presentations, and pitch proposals",
        "Develop strong relationships with brands and marketing agencies",
        "Suggest suitable media planning and advertising solutions",
        "Coordinate with internal teams for campaign execution",
        "Achieve monthly and quarterly sales targets",
        "Prepare sales reports, proposals, quotations, and presentations",
        "Explore opportunities in Radio, Print Media, Cinema Advertising & Digital Marketing",
        "Maintain a healthy sales pipeline and lead follow-ups",
      ],

      skills: [
        "Strong communication and presentation skills",
        "Good understanding of advertising and media industry",
        "Client servicing and negotiation skills",
        "Knowledge of digital marketing and media buying",
        "MS Office and presentation tools",
      ],

      benefits: [
        "Attractive incentive structure",
        "Opportunity to work with brands and corporate clients",
        "Exposure to integrated advertising campaigns",
        "Career growth in media & advertising industry",
      ],
    },

    {
      id: 2,

      title: "Graphic Designer Intern",

      type: "Internship (3 Months)",

      experience: "Fresher",

      location: "Pune",

      qualification: "Diploma / Degree in Design",

      salary: "Stipend as per company policy",

      description:
        "Join our creative team and work on branding, advertising campaigns, social media creatives, brochures, and digital marketing projects.",

      highlights: [
        "Design social media posts, reels covers, banners, and ad creatives",
        "Create branding materials, brochures, flyers, and marketing collateral",
        "Edit and optimize images for digital campaigns",
        "Maintain brand consistency across all creatives",
        "Collaborate with marketing and content teams",
        "Support video editors with graphic elements and motion assets",
        "Stay updated with latest design trends and social media formats",
      ],

      skills: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Canva",
        "Typography & Layout Design",
        "Social Media Creative Design",
        "Creative Thinking & Attention to Detail",
      ],

      benefits: [
        "Hands-on experience with real client campaigns",
        "Exposure to branding and digital marketing projects",
        "Portfolio-building opportunities",
        "Opportunity for full-time role based on performance",
      ],
    },

    {
      id: 3,

      title: "Video Editor Intern",

      type: "Internship (3 Months)",

      experience: "Fresher",

      location: "Pune",

      qualification: "Degree in Film / Media Studies",

      salary: "Stipend as per company policy",

      description:
        "Work on reels, promotional videos, motion graphics, and campaign creatives for brands and digital marketing projects.",

      highlights: [
        "Edit and assemble videos for social media and ad campaigns",
        "Create reels, shorts, promotional videos, and motion graphics",
        "Add transitions, effects, text animations, and sound design",
        "Collaborate with graphic designers and marketing teams",
        "Ensure videos align with brand guidelines",
        "Stay updated with latest editing trends and platform requirements",
        "Manage and organize video assets efficiently",
      ],

      skills: [
        "Adobe Premiere Pro",
        "CapCut",
        "Canva",
        "Colour Correction & Grading",
        "Sound Editing",
        "Creative Storytelling",
        "Time Management",
      ],

      benefits: [
        "Hands-on experience with real client campaigns",
        "Exposure to agency workflows and creative projects",
        "Portfolio-building opportunities",
        "Opportunity for full-time role based on performance",
      ],
    },
  ];

  const handleApplyClick = (position: typeof positions[0]) => {
    setSelectedPosition(position);
    setIsFormOpen(true);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black py-20 text-white">

        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="site-container relative z-10 max-w-7xl mx-auto px-4">

          {/* Heading */}
          <div className="mb-20 text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
              Careers at Prosira
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Build Your Career With{" "}
              <span className="mt-2 block font-serif text-primary">
                Prosira Advertisers
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Join our creative advertising team in Pune and work on impactful
              branding, media planning, digital marketing and advertising campaigns.
            </p>
          </div>

          {/* Job Cards - Compact Thumbnail Style */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {positions.map((position) => (
              <div
                key={position.id}
                className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-primary/20 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-primary/20"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full p-6">
                  
                  {/* Header Section */}
                  <div className="mb-4">
                    {/* Type & Experience Badges */}
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full border border-primary/30 bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary whitespace-nowrap">
                        {position.type}
                      </span>
                      <span className="rounded-full border border-primary/30 bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary whitespace-nowrap">
                        {position.experience}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h3 className="text-xl font-bold text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                      {position.title}
                    </h3>

                    {/* Location */}
                    <p className="text-xs text-gray-400 flex items-center gap-1.5">
                      <span>📍</span>
                      {position.location}
                    </p>
                  </div>

                  {/* Description - 2-3 lines */}
                  <p className="text-sm text-gray-400 leading-6 mb-4 line-clamp-3 flex-shrink-0">
                    {position.description}
                  </p>

                  {/* Skills Tags - Show 3 max */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {position.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300 whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                    {position.skills.length > 3 && (
                      <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-400">
                        +{position.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-grow" />

                  {/* View Details Button */}
                  <button
                    onClick={() => handleApplyClick(position)}
                    className="w-full rounded-xl border border-primary/40 bg-primary/20 px-4 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/50 active:scale-95"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Resume Section */}
          <div className="mx-auto mt-24 max-w-4xl rounded-3xl border border-primary/20 bg-white/[0.03] p-10 text-center backdrop-blur-xl">

            <h3 className="text-3xl font-bold text-white">
              Don&apos;t See Your Role?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400 leading-7">
              We&apos;re always open to talented individuals. Send your resume and let us know how you can contribute to our growing team.
            </p>

            <a
              href="mailto:connect@prosira.in?subject=Resume%20Submission"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/90"
            >
              Send Your Resume
            </a>

            <p className="mt-6 text-sm text-gray-500">
              connect@prosira.in
            </p>

          </div>

          {/* Footer */}
          <div className="mt-16 text-center">

            <p className="text-sm text-gray-600">
              Prosira Advertisers – Advertising Agency in Pune |
              Digital Marketing | Media Planning | Media Buying |
              Events & Exhibitions
            </p>

          </div>

        </div>
      </section>

      {/* Job Application Modal */}
      {selectedPosition && (
        <JobApplicationForm
          position={selectedPosition}
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </>
  );
}