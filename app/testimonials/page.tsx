export const metadata = {
  title: "Client Testimonials | Prosira Advertisers",
  description:
    "Watch real client testimonials and success stories from Prosira Advertisers.",
};

const testimonials = [
  {
    quote:
      "We have been one of the best partners. We value the experimentation, the reformation of the message, and the smart incentives.",
    name: "Mahesh Kunte",
    role: "Director - Varad Property Solutions Pvt. Ltd.",
  },
  {
    quote:
      "It was pleasure to work with the team. Designer was very cooperative and accommodative throughout the campaign.",
    name: "Ashish Mishra",
    role: "Sales & Marketing Head - Ceratech Group",
  },
  {
    quote:
      "The team has been very supportive, adaptive and creative. They provide complete 360 degree marketing solutions.",
    name: "Smita Patil",
    role: "Managing Director - SSPL",
  },
  {
    quote:
      "My association was quite satisfactory. The people are highly professional and committed to quality.",
    name: "Tejas Yewale",
    role: "Director - Yewale Amruttulya",
  },
  {
    quote:
      "The team is very dedicated and supportive with deadlines. They always deliver quality work.",
    name: "Arpan Chatterjee",
    role: "Group Head Sales & Marketing - Tyagi & G Mittal Group",
  },
  {
    quote:
      "They have always catered to our demands with fresh creatives and innovative ideas.",
    name: "Shweta Bhosale",
    role: "CEO - Garve Group",
  },
];

export default function TestimonialsPage() {
  return (
    <section className="bg-black text-white py-20">
      <div className="site-container">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            What Our Clients Say
          </h1>
          <div className="w-20 h-1 bg-[#C6A052] mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative bg-[#111] p-8 rounded-2xl border border-[#222] hover:border-[#C6A052] transition-all duration-300 group"
            >
              {/* Quote Symbol */}
              <div className="absolute -top-6 left-6 text-6xl text-[#C6A052] opacity-20">
                “
              </div>

              {/* Text */}
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                {t.quote}
              </p>

              {/* Divider */}
              <div className="h-px bg-[#222] mb-4 group-hover:bg-[#C6A052] transition-all"></div>

              {/* Name & Role */}
              <h3 className="text-lg font-semibold text-white">
                {t.name}
              </h3>
              <p className="text-sm text-[#C6A052] mt-1">
                {t.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}