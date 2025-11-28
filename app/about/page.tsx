import { Metadata } from "next";
import { AboutHero } from "@/components/pages/about/components/AboutHero";
import { MissionVision } from "@/components/pages/about/components/MissionVission";
import { StorySection } from "@/components/pages/about/components/StorySection";
import { ValuesSection } from "@/components/pages/about/components/ValuesSection";
import { TeamSection } from "@/components/pages/about/components/TeamSection";


export const metadata: Metadata = {
  title: "About Us - Growth Technos | Our Story, Mission & Vision",
  description:
    "Learn about Growth Technos, our mission, vision, values, and the passionate team behind our digital solutions. Discover how we help businesses grow through innovative web development, SEO, and digital marketing services.",
  keywords: [
    "about Growth Technos",
    "digital agency team",
    "web development company",
    "SEO agency",
    "digital marketing team",
    "company mission",
    "company vision",
    "Noida digital agency",
  ],
  openGraph: {
    title: "About Us - Growth Technos | Our Story & Mission",
    description:
      "Learn about Growth Technos, our mission, vision, and the passionate team behind our digital solutions. We're dedicated to helping businesses grow online.",
    url: "https://growthtechnos.com/about",
    siteName: "Growth Technos",
    images: [
      {
        url: "/og-about.jpg", // You need to provide this: 1200x630px
        width: 1200,
        height: 630,
        alt: "About Growth Technos - Our Team & Mission",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Growth Technos",
    description:
      "Learn about Growth Technos, our mission, vision, and the passionate team behind our digital solutions.",
    images: ["/og-about.jpg"],
  },
  alternates: {
    canonical: "https://growthtechnos.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen pt-16">
        <AboutHero />
        <MissionVision />
        <StorySection />
        <ValuesSection />
        {/* <TeamSection /> */}
      </div>
    </>
  );
}
