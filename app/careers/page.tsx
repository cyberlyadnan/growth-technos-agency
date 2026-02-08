import { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Mail, ArrowLeft, Heart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers - Growth Technos | Join Our Team",
  description:
    "Careers at Growth Technos. We are not currently hiring, but we welcome expressions of interest for future opportunities in web development, SEO, and digital marketing.",
  openGraph: {
    title: "Careers - Growth Technos | Digital Agency",
    url: "https://growthtechnos.com/careers",
    siteName: "Growth Technos",
    type: "website",
  },
  alternates: { canonical: "https://growthtechnos.com/careers" },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-6 -ml-2 text-foreground/70 hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Careers
            </h1>
          </div>
          <p className="text-foreground/70 text-base md:text-lg max-w-2xl">
            Join our team and help build the future of digital solutions.
          </p>
        </div>
      </section>

      {/* Not hiring + Expression of interest */}
      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Status card */}
            <div className="rounded-2xl border border-border/50 bg-card p-6 md:p-8 mb-10 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                We&apos;re not hiring right now
              </h2>
              <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                We don&apos;t have any open positions at the moment. We appreciate your interest in Growth Technos and encourage you to check back later or send us your details for future opportunities.
              </p>
            </div>

            {/* Expression of interest */}
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Interested in future opportunities?
              </h3>
              <p className="text-foreground/70 text-sm md:text-base mb-6">
                We often look for talented people in web development, SEO, digital marketing, design, and content. Send us your resume and a short note about your interests. We&apos;ll keep your details on file and reach out when a suitable role opens up.
              </p>
              <Button asChild className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                <Link href="mailto:info@growthtechnos.com?subject=Career%20Interest%20-%20Growth%20Technos" className="inline-flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Email Your Interest
                </Link>
              </Button>
            </div>

            {/* What we do */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-foreground mb-4">What we do</h3>
              <p className="text-foreground/70 text-sm md:text-base leading-relaxed mb-4">
                Growth Technos is a digital agency based in Noida. We work on web development, SEO, digital marketing, branding, and e-commerce. When we hire, we look for people who are curious, collaborative, and committed to quality.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Web Development", "SEO", "Digital Marketing", "UI/UX Design", "Content", "Branding"].map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="mt-10 p-6 rounded-2xl bg-card border border-border/50">
              <p className="text-foreground/70 text-sm mb-2">
                Questions? Reach us at{" "}
                <a href="mailto:info@growthtechnos.com" className="text-primary hover:underline">
                  info@growthtechnos.com
                </a>
              </p>
              <Link href="/contact">
                <Button variant="outline" size="sm" className="mt-2 border-border hover:border-primary/50">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
