import { Metadata } from "next";
import { AboutHero } from "@/components/pages/about/components/AboutHero";
import { MissionVision } from "@/components/pages/about/components/MissionVission";
import { StorySection } from "@/components/pages/about/components/StorySection";
import { ValuesSection } from "@/components/pages/about/components/ValuesSection";
import { TeamSection } from "@/components/pages/about/components/TeamSection";


export const metadata: Metadata = {
  title: "About Us - Growth Technos | Leading Digital Marketing Agency in Noida | Web Development & SEO Services",
  description:
    "Growth Technos is a premier digital marketing agency and web development company. We specialize in SEO services, e-commerce development, website design, and digital marketing solutions. With 500+ successful projects, we help businesses rank #1 on Google and achieve measurable growth through innovative digital strategies.",
  keywords: [
    "digital marketing agency Noida",
    "web development company Noida",
    "SEO services Noida",
    "digital agency India",
    "about Growth Technos",
    "web development services Noida",
    "SEO company Noida",
    "digital marketing company Noida",
    "website development company",
    "e-commerce development Noida",
    "best digital marketing agency",
    "top SEO agency Noida",
    "web design company Noida",
    "digital marketing services Delhi NCR",
    "affordable SEO services Noida",
    "professional web development",
    "content marketing services",
    "social media marketing Noida",
    "PPC advertising services",
    "WordPress development Noida",
  ],
  openGraph: {
    title: "About Us - Growth Technos | Leading Digital Marketing Agency in Noida",
    description:
      "Growth Technos is a premier digital marketing agency and web development company. We specialize in SEO services, e-commerce development, and digital marketing solutions. With 500+ successful projects, we help businesses rank #1 on Google.",
    url: "https://growthtechnos.com/about",
    siteName: "Growth Technos",
    images: [
      {
        url: "/og-about.jpg", // You need to provide this: 1200x630px
        width: 1200,
        height: 630,
        alt: "About Growth Technos - Leading Digital Marketing Agency & Web Development Company in Noida",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Growth Technos | Digital Marketing Agency Noida",
    description:
      "Leading digital marketing agency and web development company in Noida. Specializing in SEO services, e-commerce development, and comprehensive digital marketing solutions.",
    images: ["/og-about.jpg"],
  },
  alternates: {
    canonical: "https://growthtechnos.com/about",
  },
};

export default function AboutPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Growth Technos",
      "description": "Leading digital marketing agency and web development company. We specialize in SEO services, e-commerce development, website design, and comprehensive digital marketing solutions.",
      "url": "https://growthtechnos.com",
      "logo": "https://growthtechnos.com/growth-technos-logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/growthtechnos",
        "https://www.linkedin.com/company/growthtechnos"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "knowsAbout": [
        "Digital Marketing",
        "SEO Services",
        "Web Development",
        "E-commerce Development",
        "Website Design",
        "Search Engine Optimization",
        "Content Marketing",
        "Social Media Marketing"
      ],
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "50+"
      },
      "foundingDate": "2018"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
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
