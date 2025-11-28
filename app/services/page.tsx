import { Metadata } from 'next';
import  ServicesPage  from '@/components/pages/services/services-page';

export const metadata: Metadata = {
  title: 'Services - Growth Technos | Web Development, SEO & Digital Marketing',
  description: 'Discover our comprehensive digital services including web development, SEO optimization, digital marketing, branding, e-commerce solutions, UI/UX design, and content marketing. We help businesses grow online.',
  keywords: [
    'web development services',
    'SEO services',
    'digital marketing services',
    'branding services',
    'e-commerce development',
    'UI/UX design',
    'content marketing',
    'social media marketing',
    'PPC advertising',
    'website maintenance',
  ],
  openGraph: {
    title: 'Services - Growth Technos | Digital Solutions',
    description: 'Discover our comprehensive digital services including web development, SEO, digital marketing, and branding solutions. Transform your business with our innovative digital strategies.',
    url: 'https://growthtechnos.com/services',
    siteName: 'Growth Technos',
    images: [
      {
        url: '/og-services.jpg', // You need to provide this: 1200x630px
        width: 1200,
        height: 630,
        alt: 'Growth Technos Services - Digital Solutions',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services - Growth Technos',
    description: 'Discover our comprehensive digital services including web development, SEO, digital marketing, and branding solutions.',
    images: ['/og-services.jpg'],
  },
  alternates: {
    canonical: 'https://growthtechnos.com/services',
  },
};

export default function Services() {
  return <ServicesPage />;
}
