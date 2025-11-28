import { Metadata } from 'next';
import  PortfolioPage  from '@/components/pages/portfolio/PortfolioPage';

export const metadata = {
  title: 'Portfolio - Growth Technos | Our Work & Client Projects',
  description: 'Explore our portfolio of professionally designed websites and digital solutions for various industries including healthcare, construction, interior design, e-commerce, and more. See how we help businesses grow online.',
  keywords: [
    'Growth Technos portfolio',
    'web development projects',
    'client work Growth Technos',
    'website design samples',
    'digital agency portfolio',
    'responsive web design',
    'e-commerce websites',
    'portfolio showcase',
    'case studies',
    'industry specific websites',
  ],
  authors: [{ name: 'Growth Technos' }],
  openGraph: {
    title: 'Portfolio - Growth Technos | Our Work & Projects',
    description: 'Explore our portfolio of professionally designed websites and digital solutions. See how Growth Technos brings businesses to life online through clean, modern, and responsive websites across industries.',
    url: 'https://growthtechnos.com/portfolio',
    siteName: 'Growth Technos',
    images: [
      {
        url: '/og-portfolio.jpg', // You need to provide this: 1200x630px
        width: 1200,
        height: 630,
        alt: 'Growth Technos Portfolio Showcase',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Growth Technos | Our Work',
    description: 'Explore our portfolio of professionally designed websites and digital solutions across various industries.',
    images: ['/og-portfolio.jpg'],
  },
  alternates: {
    canonical: 'https://growthtechnos.com/portfolio',
  },
};

export default function page() {
  return <PortfolioPage />;
}
