export const metadata = {
  title: "Careers at Prosira Advertisers | Advertising Jobs in Pune",
  description:
    "Explore career opportunities at Prosira Advertisers in advertising, media planning and event management.",
};

export default function CareersPage() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Careers at Prosira Advertisers</h1>

      <p className="text-muted-foreground mb-10">
        We are always looking for passionate people in advertising and media.
      </p>

      <div className="space-y-6">
        <div className="border rounded-xl p-5">
          <h3 className="font-semibold">Business Development Executive</h3>
          <p className="text-sm text-muted-foreground">
            Experience in advertising or media sales preferred.
          </p>
        </div>
      </div>

      <p className="mt-10 text-sm">
        Send your resume to{" "}
        <a href="mailto:careers@prosira.in" className="text-primary underline">
          careers@prosira.in
        </a>
      </p>
    </section>
  );
}
