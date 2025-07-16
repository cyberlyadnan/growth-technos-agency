import { Metadata } from 'next';
import { ServicesPage } from '@/components/pages/services-page';

export const metadata: Metadata = {
  title: 'Services - Growth Technos',
  description: 'Discover our comprehensive digital services including web development, SEO, digital marketing, and branding solutions.',
};

export default function Services() {
  return <ServicesPage />;
}