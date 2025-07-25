import { useEffect } from 'react';
import { Hero } from './_components/home/Hero';
import { StatsSection } from './_components/home/StatsSection';
import { AboutSection } from './_components/home/AboutSection';
import { ServicesSection } from './_components/home/ServicesSection';
import { ProjectsSection } from './_components/home/ProjectSection';
import { TestimonialsSection } from './_components/home/TestimonialsSection';
import { Newsletter } from './_components/home/Newsletter';
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