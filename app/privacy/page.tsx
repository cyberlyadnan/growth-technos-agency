import { Metadata } from "next";
import Link from "next/link";
import { Shield, Mail, MapPin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy - Growth Technos | Digital Agency",
  description:
    "Privacy Policy of Growth Technos. Learn how we collect, use, and protect your data when you use our website and digital services.",
  openGraph: {
    title: "Privacy Policy - Growth Technos",
    url: "https://growthtechnos.com/privacy",
    siteName: "Growth Technos",
    type: "website",
  },
  alternates: { canonical: "https://growthtechnos.com/privacy" },
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "We collect information you provide directly (name, email, phone, company) when you contact us, request a quote, or subscribe to our newsletter.",
      "We automatically collect certain technical data (IP address, browser type, device information, pages visited) to improve our website and services.",
      "We may use cookies and similar technologies to enhance your experience and analyze site traffic.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To respond to your inquiries and provide requested services.",
      "To send updates, marketing communications (with your consent), and service-related notices.",
      "To improve our website, services, and user experience.",
      "To comply with legal obligations and protect our rights.",
    ],
  },
  {
    title: "Data Sharing and Disclosure",
    content: [
      "We do not sell your personal information. We may share data with trusted service providers (hosting, analytics, email) who assist our operations under strict confidentiality.",
      "We may disclose information if required by law or to protect our rights, safety, or property.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement industry-standard security measures to protect your data from unauthorized access, alteration, or destruction.",
      "While we strive to protect your information, no method of transmission over the internet is 100% secure.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You may request access, correction, or deletion of your personal data by contacting us.",
      "You can opt out of marketing emails at any time via the unsubscribe link in our emails.",
      "You may disable or limit cookies through your browser settings.",
    ],
  },
  {
    title: "Updates",
    content: [
      "We may update this Privacy Policy from time to time. The revised version will be posted on this page with an updated effective date. We encourage you to review this policy periodically.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-6 -ml-2 text-foreground/70 hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Privacy Policy
            </h1>
          </div>
          <p className="text-foreground/70 text-base md:text-lg max-w-2xl">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-10">
              Growth Technos (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our digital agency services.
            </p>

            {sections.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 mt-8">
                  {section.title}
                </h2>
                <ul className="space-y-3 list-disc pl-6 text-foreground/80 text-sm md:text-base leading-relaxed">
                  {section.content.map((para, j) => (
                    <li key={j}>{para}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-12 p-6 rounded-2xl bg-card border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-3">Contact Us</h3>
              <p className="text-foreground/70 text-sm md:text-base mb-4">
                For privacy-related questions or to exercise your rights, contact us:
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
                <a href="mailto:info@growthtechnos.com" className="flex items-center gap-2 text-primary hover:underline">
                  <Mail className="w-4 h-4" />
                  info@growthtechnos.com
                </a>
                <span className="hidden sm:inline text-border">|</span>
                <span className="flex items-center gap-2 text-foreground/70">
                  <MapPin className="w-4 h-4" />
                  Noida Sector 62, U.P, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
