export const metadata = {
  title: "Careers at Prosira Advertisers | Join Our Team in Pune",
  description:
    "Looking to build your career in advertising, digital marketing, media planning or events? Send your resume to Prosira Advertisers and grow with us.",
};

export default function CareersPage() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-neutral-950 to-black text-white">
      <div className="site-container max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Build Your Career With{" "}
            <span className="block mt-2 text-primary font-serif text-2xl md:text-3xl lg:text-4xl">
            Prosira Advertisers
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-12">
          We’re always looking for creative thinkers, marketing strategists,
          media planners and event professionals passionate about delivering
          impactful advertising campaigns.
        </p>

        {/* Resume Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-yellow-500/30 rounded-3xl p-10 shadow-2xl shadow-yellow-500/10">

          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
            Share Your Resume
          </h2>

          <p className="text-gray-400 mb-8">
            Interested in working with us? Send your updated resume and portfolio.
            Our team will contact you if your profile matches our requirements.
          </p>

          {/* Gold Email Button */}
          <a
            href="mailto:careers@prosira.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/30"
          >
            Send Resume via Email
          </a>

          <p className="mt-6 text-sm text-gray-500">
            careers@prosira.in
          </p>
        </div>

        {/* Footer Note */}
        <div className="mt-16">
          <p className="text-gray-500 text-sm">
            Prosira Advertisers – Advertising Agency in Pune | Digital Marketing | Media Planning | Media Buying | Events & Exhibitions
          </p>
        </div>

      </div>
    </section>
  );
}