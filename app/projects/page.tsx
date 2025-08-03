import ProjectsPage from '@/components/pages/project/projects-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Growth Technos',
  description: 'Explore our portfolio of successful projects including web development, SEO, and digital marketing campaigns.',
};

export default function Projects() {
  return <ProjectsPage />;
}