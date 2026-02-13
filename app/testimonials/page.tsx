export const metadata = {
  title: "Client Testimonials | Prosira Advertisers",
  description:
    "Watch real client testimonials and success stories from Prosira Advertisers.",
};

export default function TestimonialsPage() {
  return (
    <section className="site-container py-16">
      <h1 className="text-3xl font-bold mb-10">Client Testimonials</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <video controls className="rounded-xl w-full">
          <source src="/videos/testimonial1.mp4" type="video/mp4" />
        </video>

        <video controls className="rounded-xl w-full">
          <source src="/videos/testimonial2.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
