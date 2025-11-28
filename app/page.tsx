import { Metadata } from "next";
import { Hero } from "../components/pages/home/components/Hero";
import { StatsSection } from "../components/pages/home/components/StatsSection";
import { ServicesSection } from "../components/pages/home/components/ServicesSection";
import ProjectsSection from "../components/pages/home/components/ProjectSection";
import { TestimonialsSection } from "../components/pages/home/components/TestimonialsSection";
import { Newsletter } from "../components/pages/home/components/Newsletter";
import { AboutSection } from "@/components/pages/home/components/AboutSection";
import { useServices } from "@/hooks/useServices";
import { servicess } from "@/lib/data";
import { projectsss } from "@/lib/projects";
import { portfolioProjects } from "@/lib/mainData";
import PortfolioSection from "@/components/pages/portfolio/components/PortfolioSection"
import { getAllProjects } from "@/hooks/getAllProjects";
import OurClients from "@/components/pages/home/components/OurClients";
import { resetAndPushServices, resetProjectsCollection } from "@/lib/firebase";

export const metadata: Metadata = {
  title: "Home - Digital Agency | Web Development, SEO & Digital Marketing Services",
  description:
    "Growth Technos is a leading digital agency offering web development, SEO services, digital marketing, and branding solutions. Transform your business with our innovative digital strategies and cutting-edge technology.",
  keywords: [
    "digital agency",
    "web development company",
    "SEO services",
    "digital marketing agency",
    "website design",
    "e-commerce development",
    "Noida digital agency",
    "India web development",
  ],
  openGraph: {
    title: "Growth Technos - Digital Agency | Web Development & SEO Services",
    description:
      "Leading digital agency specializing in web development, SEO, digital marketing, and branding solutions. Transform your business with innovative digital strategies.",
    url: "https://growthtechnos.com",
    siteName: "Growth Technos",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Growth Technos - Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Technos - Digital Agency | Web Development & SEO",
    description:
      "Leading digital agency specializing in web development, SEO, digital marketing, and branding solutions.",
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
  return (
    <div className="min-h-screen">
      <Hero />
      {/* <StatsSection /> */}
      <AboutSection />
      <OurClients />
      <ServicesSection hideViewAllSection={true} title={"Our Services"} desc={"We offer comprehensive digital solutions to help your business grow and succeed online."} services={services.slice(0,6)} />
      <ProjectsSection projects={projects.slice(0,6)}/>
      <PortfolioSection projects={portfolioProjects.slice(0,6)}/>
      <TestimonialsSection />
      <Newsletter />
    </div>
  );
}


export default HomePage;
