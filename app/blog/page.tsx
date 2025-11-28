import BlogPage from '@/components/pages/blog/blog-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Growth Technos | Digital Marketing & Web Development Insights',
  description: 'Stay updated with the latest insights, tips, and trends in digital marketing, web development, SEO, technology, and business growth. Expert articles from Growth Technos.',
  keywords: [
    'digital marketing blog',
    'web development blog',
    'SEO tips',
    'digital marketing insights',
    'technology blog',
    'business growth tips',
    'marketing strategies',
  ],
  openGraph: {
    title: 'Blog - Growth Technos | Digital Marketing & Web Development Insights',
    description: 'Stay updated with the latest insights, tips, and trends in digital marketing, web development, and technology.',
    url: 'https://growthtechnos.com/blog',
    siteName: 'Growth Technos',
    images: [
      {
        url: '/og-blog.jpg', // You need to provide this: 1200x630px
        width: 1200,
        height: 630,
        alt: 'Growth Technos Blog - Digital Insights',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Growth Technos',
    description: 'Stay updated with the latest insights, tips, and trends in digital marketing, web development, and technology.',
    images: ['/og-blog.jpg'],
  },
  alternates: {
    canonical: 'https://growthtechnos.com/blog',
  },
};

export default function Blog() {
  return <BlogPage />;
}
