import ProjectsPage from '@/components/pages/project/projects-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Growth Technos | Case Studies & Success Stories',
  description: 'Explore our portfolio of successful projects including web development, SEO campaigns, digital marketing strategies, and e-commerce solutions. See real results and case studies from our clients.',
  keywords: [
    'project portfolio',
    'case studies',
    'web development projects',
    'SEO success stories',
    'digital marketing campaigns',
    'client success stories',
    'project showcase',
  ],
  openGraph: {
    title: 'Projects - Growth Technos | Case Studies & Success Stories',
    description: 'Explore our portfolio of successful projects including web development, SEO, and digital marketing campaigns. See real results from our clients.',
    url: 'https://growthtechnos.com/projects',
    siteName: 'Growth Technos',
    images: [
      {
        url: '/og-projects.jpg', // You need to provide this: 1200x630px
        alt: 'Growth Technos Projects - Case Studies',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Growth Technos',
    description: 'Explore our portfolio of successful projects including web development, SEO, and digital marketing campaigns.',
    images: ['/og-projects.jpg'],
  },
  alternates: {
    canonical: 'https://growthtechnos.com/projects',
  },
};

export default function Projects() {
  return <ProjectsPage />;
}
