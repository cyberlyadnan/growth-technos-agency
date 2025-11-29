import { getBlogBySlug } from "@/hooks/getBlogBySlug";
import { getAllBlogs } from "@/hooks/getAllBlogs";
import BlogDetailPage from "@/components/pages/blog/BlogDetailPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  try {
    const blogs = await getAllBlogs();
    return blogs
      .filter((blog) => blog.published !== false)
      .map((blog) => ({
        slug: blog.slug || blog.id,
      }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}


export async function generateMetadata({ params }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found - Growth Technos",
    };
  }

  return {
    title: `${blog.title} | Growth Technos Blog`,
    description: blog.excerpt || blog.description || blog.title,
    keywords: blog.tags || blog.categories || [],
    authors: [{ name: blog.author || "Growth Technos" }],
    openGraph: {
      title: blog.title,
      description: blog.excerpt || blog.description || blog.title,
      url: `https://growthtechnos.com/blog/${blog.slug || blog.id}`,
      siteName: "Growth Technos",
      images: [
        {
          url: blog.featuredImage || blog.image || "/og-blog.jpg",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "article",
      publishedTime: blog.createdAt?.toDate?.()?.toISOString(),
      modifiedTime: blog.updatedAt?.toDate?.()?.toISOString(),
      authors: [blog.author || "Growth Technos"],
      tags: blog.tags || [],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt || blog.description || blog.title,
      images: [blog.featuredImage || blog.image || "/og-blog.jpg"],
    },
    alternates: {
      canonical: `https://growthtechnos.com/blog/${blog.slug || blog.id}`,
    },
    other: {
      "article:published_time": blog.createdAt?.toDate?.()?.toISOString(),
      "article:modified_time": blog.updatedAt?.toDate?.()?.toISOString(),
      "article:author": blog.author || "Growth Technos",
      "article:section": blog.category || "General",
      "article:tag": (blog.tags || []).join(", "),
    },
  };
}

export default async function BlogDetail({ params }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog || blog.published === false) {
    notFound();
  }

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt || blog.description || blog.title,
    image: blog.featuredImage || blog.image || "",
    datePublished: blog.createdAt?.toDate?.()?.toISOString(),
    dateModified: blog.updatedAt?.toDate?.()?.toISOString() || blog.createdAt?.toDate?.()?.toISOString(),
    author: {
      "@type": "Person",
      name: blog.author || "Growth Technos",
    },
    publisher: {
      "@type": "Organization",
      name: "Growth Technos",
      logo: {
        "@type": "ImageObject",
        url: "https://growthtechnos.com/growth-technos-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://growthtechnos.com/blog/${blog.slug || blog.id}`,
    },
    keywords: (blog.tags || []).join(", "),
    articleSection: blog.category || "General",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BlogDetailPage blog={blog} />
    </>
  );
}

