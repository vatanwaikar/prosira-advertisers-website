"use client";

const steps = [
  {
    title: "Discovery & Research",
    description:
      "Understanding your business, market landscape, and audience behavior before launching campaigns.",
  },
  {
    title: "Strategy Development",
    description:
      "Crafting a KPI-driven digital strategy focused on ROI, conversions, and long-term growth.",
  },
  {
    title: "Implementation",
    description:
      "Executing high-performance campaigns across paid ads, SEO, and digital platforms.",
  },
  {
    title: "Monitor & Optimize",
    description:
      "Real-time analytics monitoring with continuous performance optimization.",
  },
  {
    title: "Report & Scale",
    description:
      "Transparent reporting with insights and scaling strategies for sustainable growth.",
  },
];

export default function DigitalProcess() {
  return (
    <section className="bg-secondary py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-primary font-serif">Digital Process</span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A structured and performance-focused digital marketing framework
            designed to generate leads and accelerate business growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-primary/20"></div>

          {/* Steps */}
          <div className="grid md:grid-cols-5 gap-10 items-stretch relative">

            {steps.map((step, index) => (
              <div key={index} className="text-center group">

                {/* Circle */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-black border border-primary/30 flex items-center justify-center text-primary text-lg font-bold group-hover:bg-primary group-hover:text-black transition">
                  {index + 1}
                </div>

                {/* Card */}
                <div
                  className="
                  p-6
                  rounded-2xl
                  bg-black/60
                  backdrop-blur-lg
                  border border-primary/20
                  shadow-lg
                  hover:border-primary/40
                  transition
                  h-[230px]
                  flex
                  flex-col
                  justify-between
                  "
                >
                  <h3 className="text-lg font-semibold text-primary">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}