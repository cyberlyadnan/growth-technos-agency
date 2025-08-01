import BlogPage from '@/components/pages/blog/blog-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Growth Technos',
  description: 'Stay updated with the latest insights, tips, and trends in digital marketing, web development, and technology.',
};

export default function Blog() {
  return <BlogPage />;
}