import { Metadata } from 'next';
import { AboutHero } from '@/components/pages/about/components/AboutHero';
import { MissionVision } from '@/components/pages/about/components/MissionVission';
import { StorySection } from '@/components/pages/about/components/StorySection';
import { ValuesSection } from '@/components/pages/about/components/ValuesSection';
import { TeamSection } from '@/components/pages/about/components/TeamSection';
export const metadata: Metadata = {
  title: 'About Us - Growth Technos',
  description: 'Learn about Growth Technos, our mission, vision, and the passionate team behind our digital solutions.',
};

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen pt-16">
        <AboutHero />
        <MissionVision />
        <StorySection />
        <ValuesSection />
        <TeamSection />
      </div>
    </>
  );
}
