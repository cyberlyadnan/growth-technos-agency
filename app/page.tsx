import { Hero } from "../components/pages/home/components/Hero";
import { StatsSection } from "../components/pages/home/components/StatsSection";
import { ServicesSection } from "../components/pages/home/components/ServicesSection";
import { ProjectsSection } from "../components/pages/home/components/ProjectSection";
import { TestimonialsSection } from "../components/pages/home/components/TestimonialsSection";
import { Newsletter } from "../components/pages/home/components/Newsletter";
import { AboutSection } from "@/components/pages/home/components/AboutSection";
import { useServices } from "@/hooks/useServices";
import { resetAndPushServices } from "@/lib/firebase";
import { servicess } from "@/lib/data";
import { projectsss } from "@/lib/projects";


const HomePage = async () => {
  const services = await useServices();
  // resetAndPushServices(projectsss)
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection hideViewAllSection={true} title={"Our Services"} desc={"We offer comprehensive digital solutions to help your business grow and succeed online."} services={services.slice(0,6)} />
      <ProjectsSection />
      <TestimonialsSection />
      <Newsletter />
    </div>
  );
}


export default HomePage;