import { Metadata } from "next";
import Link from "next/link";
import { FileText, Mail, MapPin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terms of Service - Growth Technos | Digital Agency",
  description:
    "Terms of Service for Growth Technos. Read the terms and conditions governing the use of our website and digital agency services.",
  openGraph: {
    title: "Terms of Service - Growth Technos",
    url: "https://growthtechnos.com/terms",
    siteName: "Growth Technos",
    type: "website",
  },
  alternates: { canonical: "https://growthtechnos.com/terms" },
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the Growth Technos website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.",
    ],
  },
  {
    title: "Services",
    content: [
      "Growth Technos provides digital agency services including web development, SEO, digital marketing, branding, and related consulting. Scope, deliverables, and timelines are defined in separate project agreements or statements of work.",
      "We reserve the right to modify, suspend, or discontinue any service with reasonable notice where applicable.",
    ],
  },
  {
    title: "User Conduct",
    content: [
      "You agree to use our website and services only for lawful purposes. You must not use our site to transmit harmful code, spam, or misleading information, or to violate any applicable laws or third-party rights.",
      "You are responsible for the accuracy of information you provide to us and for maintaining the confidentiality of any account credentials.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All content on this website (text, graphics, logos, design) is owned by Growth Technos or its licensors and is protected by copyright and other intellectual property laws.",
      "Deliverables created for you under a project agreement will be governed by the terms of that agreement regarding ownership and licensing.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, Growth Technos shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services.",
      "Our total liability for any claim related to our services shall not exceed the amount paid by you for the relevant service in the twelve (12) months preceding the claim.",
    ],
  },
  {
    title: "Indemnification",
    content: [
      "You agree to indemnify and hold harmless Growth Technos, its directors, employees, and affiliates from any claims, damages, or expenses (including legal fees) arising from your breach of these terms or your use of our services.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh.",
    ],
  },
  {
    title: "Changes",
    content: [
      "We may update these Terms of Service from time to time. Changes will be posted on this page with an updated effective date. Your continued use of our website or services after changes constitutes acceptance of the revised terms.",
    ],
  },
];

export default function TermsPage() {
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
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Terms of Service
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
          <div className="max-w-3xl mx-auto">
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-10">
              Welcome to Growth Technos. These Terms of Service (&quot;Terms&quot;) govern your use of our website and the digital agency services we provide. Please read them carefully.
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
              <h3 className="text-lg font-semibold text-foreground mb-3">Contact</h3>
              <p className="text-foreground/70 text-sm md:text-base mb-4">
                For questions about these Terms, please contact us:
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
