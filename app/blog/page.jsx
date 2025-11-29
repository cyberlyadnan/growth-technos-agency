import { getAllBlogs } from "@/hooks/getAllBlogs";
import BlogListPage from "@/components/pages/blog/BlogListPage";

export const metadata = {
  title: "Blog - Growth Technos | Digital Marketing & Web Development Insights",
  description:
    "Stay updated with the latest insights, tips, and trends in digital marketing, web development, SEO, technology, and business growth. Expert articles from Growth Technos.",
  keywords: [
    "digital marketing blog",
    "web development blog",
    "SEO tips",
    "digital marketing insights",
    "technology blog",
    "business growth tips",
    "marketing strategies",
    "web development tutorials",
    "SEO best practices",
  ],
  openGraph: {
    title: "Blog - Growth Technos | Digital Marketing & Web Development Insights",
    description:
      "Stay updated with the latest insights, tips, and trends in digital marketing, web development, and technology.",
    url: "https://growthtechnos.com/blog",
    siteName: "Growth Technos",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Growth Technos Blog - Digital Insights",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Growth Technos",
    description:
      "Stay updated with the latest insights, tips, and trends in digital marketing, web development, and technology.",
    images: ["/og-blog.jpg"],
  },
  alternates: {
    canonical: "https://growthtechnos.com/blog",
  },
};

export default async function BlogPage() {
  let blogs = [];
  try {
    blogs = await getAllBlogs();
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  return <BlogListPage blogs={blogs} />;
}

