  "use client";

  import Link from "next/link";
  import Image from "next/image";
  import { motion } from "framer-motion";
  import { ArrowRight } from "lucide-react";

  const services = [
    {
      id: 1,
      title: "Services",
      description:
        "Traditional & media advertising solutions including radio, print, outdoor & branding.",
      image: "/images/ad1.jpeg",
      href: "/services",
    },
    {
      id: 2,
      title: "Digital",
      description:
        "Performance marketing, social media growth, paid ads & website solutions.",
      image: "/images/dd22.jpeg",
      href: "/digital",
    },
    {
      id: 3,
      title: "Event & Expo",
      description:
        "Experiential marketing, exhibitions, activations & on-ground branding.",
      image: "/images/ev.jpeg",
      href: "/event-expo",
    },
  ];

  export default function WorkPage() {
    return (
      <div className="min-h-screen bg-black">

        {/* HERO SECTION */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          <div className="relative site-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Our </span>
                <span className="text-primary">Signature Work</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
                Explore our comprehensive advertising solutions designed to elevate your brand presence 
                and deliver measurable results across traditional media, digital platforms, and experiential marketing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SERVICE CARDS */}
        <section className="py-20">
          <div className="site-container">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">

              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link href={service.href} className="block h-full">

                    <div className="h-full bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 flex flex-col">

                      {/* IMAGE SECTION */}
                      <div className="w-full h-56 bg-gray-100 flex items-center justify-center p-6">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={500}
                          height={250}
                          className="object-contain w-full h-full"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="p-8 flex flex-col flex-grow">

                        <h3 className="text-2xl font-bold text-black mb-4">
                          {service.title}
                        </h3>

                        <p className="text-gray-700 leading-relaxed mb-8 flex-grow">
                          {service.description}
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                          <span className="font-semibold text-black">
                          Explore →
                          </span>

                          <ArrowRight
                            size={22}
                            className="transition-transform duration-300 group-hover:translate-x-2"
                          />
                        </div>

                      </div>

                    </div>

                  </Link>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-primary/5">
          <div className="site-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Brand?
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Let us create powerful advertising campaigns that deliver exceptional results across all platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary text-black px-12 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/team"
                className="inline-flex items-center gap-3 border-2 border-primary text-primary px-12 py-4 rounded-lg font-semibold hover:bg-primary hover:text-black transition-all duration-300"
              >
                Meet Our Team
              </Link>

            </div>
          </div>
        </section>

      </div>
    );
  }