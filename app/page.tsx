import { useEffect } from 'react';
import { Hero } from '../components/pages/home/components/Hero';
import { StatsSection } from '../components/pages/home/components/StatsSection';
import { ServicesSection } from '../components/pages/home/components/ServicesSection';
import { ProjectsSection } from '../components/pages/home/components/ProjectSection';
import { TestimonialsSection } from '../components/pages/home/components/TestimonialsSection';
import { Newsletter } from '../components/pages/home/components/Newsletter';
import { AboutSection } from '@/components/pages/home/components/AboutSection';
// import { listAllCollections } from '@/lib/firebase';

export default function HomePage() {
  // useEffect(() => {
  //   listAllCollections();
  // }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
       <Newsletter />
    </div>
  );
}