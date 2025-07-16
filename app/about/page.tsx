import { Metadata } from 'next';
import { AboutPage } from '@/components/pages/about-page';

export const metadata: Metadata = {
  title: 'About Us - Growth Technos',
  description: 'Learn about Growth Technos, our mission, vision, and the passionate team behind our digital solutions.',
};

export default function About() {
  return <AboutPage />;
}