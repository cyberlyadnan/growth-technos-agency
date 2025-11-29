import { MetadataRoute } from 'next';
import { getAllProjects } from '@/hooks/getAllProjects';
import { db } from '@/lib/firebase-admin';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://growthtechnos.com';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  // Dynamic project pages
  let projectPages: MetadataRoute.Sitemap = [];
  try {
    const projects = await getAllProjects();
    projectPages = projects.map((project: any) => {
      const updatedAt = (project.updatedAt as any)?.toDate?.() || 
                        (project.updatedAt instanceof Date ? project.updatedAt : null) ||
                        new Date();
      return {
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: updatedAt,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      };
    });
  } catch (error) {
    console.error('Error fetching projects for sitemap:', error);
  }

  // Dynamic service pages
  let servicePages: MetadataRoute.Sitemap = [];
  try {
    const servicesSnapshot = await db.collection('services').get();
    servicePages = servicesSnapshot.docs.map((doc) => {
      const service = doc.data();
      return {
        url: `${baseUrl}/services/${service.slug || doc.id}`,
        lastModified: service.updatedAt?.toDate() || new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      };
    });
  } catch (error) {
    console.error('Error fetching services for sitemap:', error);
  }

  // Dynamic blog pages
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const blogsSnapshot = await db.collection('blogs').get();
    blogPages = blogsSnapshot.docs
      .filter(doc => doc.data().published !== false)
      .map((doc) => {
        const blog = doc.data();
        return {
          url: `${baseUrl}/blog/${blog.slug || doc.id}`,
          lastModified: blog.updatedAt?.toDate() || blog.createdAt?.toDate() || new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        };
      });
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }

  return [...staticPages, ...projectPages, ...servicePages, ...blogPages];
}

