import { Metadata } from "next";
import { Hero } from "../components/pages/home/components/Hero";
import { StatsSection } from "../components/pages/home/components/StatsSection";
import { ServicesSection } from "../components/pages/home/components/ServicesSection";
import ProjectsSection from "../components/pages/home/components/ProjectSection";
import { TestimonialsSection } from "../components/pages/home/components/TestimonialsSection";
import { Newsletter } from "../components/pages/home/components/Newsletter";
import { AboutSection } from "@/components/pages/home/components/AboutSection";
import { FeaturedBlogSection } from "@/components/pages/home/components/FeaturedBlogSection";
import { useServices } from "@/hooks/useServices";
import { servicess } from "@/lib/data";
import { projectsss } from "@/lib/projects";
import { portfolioProjects } from "@/lib/mainData";
import PortfolioSection from "@/components/pages/portfolio/components/PortfolioSection"
import { getAllProjects } from "@/hooks/getAllProjects";
import OurClients from "@/components/pages/home/components/OurClients";
import { resetAndPushServices, resetProjectsCollection } from "@/lib/firebase";

export const metadata: Metadata = {
  title: "Best Marketing Agency in Noida | Web Development",
  description:
    "Growth Technos is the #1 digital marketing agency and web development company . We specialize in SEO services, e-commerce development, website design, and digital marketing solutions that help businesses rank #1 on Google. Get top Google rankings, increase organic traffic, and drive measurable business growth with our proven SEO strategies and professional web development services.",
  keywords: [
    "digital marketing agency Noida",
    "best SEO services Noida",
    "web development company Noida",
    "digital agency India",
    "SEO services India",
    "website development Noida",
    "e-commerce development company",
    "top digital marketing agency",
    "Google ranking services",
    "website design Noida",
    "SEO company Noida",
    "web development services India",
    "digital marketing services Delhi NCR",
    "affordable SEO services",
    "professional web development",
    "content marketing services",
    "social media marketing",
    "PPC advertising services",
    "WordPress development",
    "responsive website design",
  ],
  openGraph: {
    title: "Best Digital Marketing Agency in Noida | Web Development & SEO Services India",
    description:
      "Growth Technos is the #1 digital marketing agency and web development company . We help businesses rank #1 on Google with our proven SEO strategies, professional web development, and comprehensive digital marketing solutions.",
    url: "https://growthtechnos.com",
    siteName: "Growth Technos - Digital Marketing Agency Noida",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Growth Technos - Best Digital Marketing Agency & Web Development Company ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Agency in Noida | Web Development",
    description:
      "Leading digital marketing agency and web development company . Specializing in SEO services, website development, and digital marketing solutions that help businesses rank #1 on Google.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://growthtechnos.com",
  },
};

const HomePage = async () => {
  
  const services = await useServices();
  const projects = await getAllProjects()
  // resetAndPushServices(projectsss)
  // await resetProjectsCollection();
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Growth Technos",
    "description": "Leading digital marketing agency and web development company . We specialize in SEO services, web development, e-commerce solutions, and digital marketing that help businesses rank #1 on Google.",
    "url": "https://growthtechnos.com",
    "logo": "https://growthtechnos.com/growth-technos-logo.png",
    "image": "https://growthtechnos.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Noida Sector 62",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    "telephone": "+91-98979-21038",
    "email": "info@growthtechnos.com",
    "priceRange": "₹₹",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": [
      "Digital Marketing",
      "SEO Services",
      "Web Development",
      "E-commerce Development",
      "Website Design",
      "Content Marketing",
      "Social Media Marketing",
      "PPC Advertising"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing & Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services",
            "description": "Professional SEO services to help your business rank #1 on Google"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom website development and responsive web design services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Comprehensive digital marketing solutions including content marketing, social media marketing, and PPC advertising"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Development",
            "description": "E-commerce website development and online store solutions"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      {/* <StatsSection /> */}
      <AboutSection />
      <OurClients />
      <ServicesSection hideViewAllSection={true} title={"Digital Marketing & Web Development Services"} desc={"We deliver result-driven web development, SEO, and digital marketing solutions that help businesses grow online. "} services={services.slice(0,6)} />
      <ProjectsSection projects={projects.slice(0,6)}/>
      <PortfolioSection projects={portfolioProjects.slice(0,6)}/>
      <FeaturedBlogSection />
      <TestimonialsSection />
      <Newsletter />
    </div>
  );
}


export default HomePage;
