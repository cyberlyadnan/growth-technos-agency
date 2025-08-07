import { Metadata } from 'next';
import  PortfolioPage  from '@/components/pages/portfolio/PortfolioPage';

export const metadata = {
  title: 'Our Work - Portfolio | Growth Technos',
  description: 'Explore our portfolio of professionally designed websites and digital solutions for various industries including healthcare, construction, interior design, and more.',
  keywords: [
    'Growth Technos portfolio',
    'web development projects',
    'client work Growth Technos',
    'website design samples',
    'digital agency work',
    'responsive web design',
    'branding and development',
    'industry specific websites',
  ],
  authors: [{ name: 'Growth Technos' }],
  openGraph: {
    title: 'Our Portfolio | Growth Technos',
    description: 'See how Growth Technos brings businesses to life online through clean, modern, and responsive websites across industries.',
    url: 'https://growthtechnos.com/portfolio',
    siteName: 'Growth Technos',
    images: [
      {
        url: 'https://imgscf.slidemembers.com/docs/1/1/381/our_portfolio_slide_page_380232.jpg', // optional og image
        width: 1200,
        height: 630,
        alt: 'Growth Technos Portfolio Showcase',
      },
    ],
    type: 'website',
  },
};

export default function page() {
  return <PortfolioPage />;
}