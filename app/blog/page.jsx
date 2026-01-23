import { getAllBlogs } from "@/hooks/getAllBlogs";
import BlogListPage from "@/components/pages/blog/BlogListPage";

export const metadata = {
  title: "Blog - Growth Technos | Digital Marketing & Web Development Insights",
  description:
    "Stay updated with the latest insights, tips, and trends in digital marketing, web development, SEO, technology, and business growth. Expert articles from Growth Technos.",
    keywords: [
      /* Core Blog Keywords */
      "digital marketing blog",
      "web development blog",
      "technology blog",
      "business growth blog",
      "IT company blog",
    
      /* Digital Marketing */
      "digital marketing tips",
      "digital marketing strategies",
      "online marketing insights",
      "content marketing tips",
      "social media marketing tips",
      "performance marketing blog",
      "paid ads strategy blog",
      "marketing automation insights",
      "branding and marketing blog",
    
      /* SEO */
      "SEO blog",
      "SEO tips",
      "SEO best practices",
      "on page SEO tips",
      "off page SEO strategies",
      "technical SEO blog",
      "local SEO tips",
      "Google ranking tips",
      "SEO for businesses",
      "SEO optimization techniques",
    
      /* Web Development */
      "web development insights",
      "website development blog",
      "full stack development blog",
      "MERN stack tutorials",
      "Next.js development blog",
      "React development blog",
      "backend development tips",
      "frontend development tutorials",
      "API development best practices",
    
      /* Technology */
      "latest technology trends",
      "software development blog",
      "IT industry insights",
      "tech trends for businesses",
      "startup technology blog",
      "SaaS development insights",
      "AI and automation blog",
      "cloud computing blog",
    
      /* Business & Growth */
      "business growth strategies",
      "startup growth tips",
      "scaling online businesses",
      "digital transformation blog",
      "enterprise technology insights",
      "small business marketing tips",
    
      /* Agency & Services */
      "digital marketing agency insights",
      "web development agency blog",
      "IT services blog",
      "software company blog",
      "tech consulting blog",
    
      /* Location + Brand */
      "Growth Technos blog",
      "Growth Technos digital marketing",
      "Growth Technos web development",
      "India digital marketing blog",
      "global IT services blog",
    
      /* Informational Search Intent */
      "how digital marketing works",
      "how SEO improves ranking",
      "how to grow business online",
      "how websites generate leads",
      "best tools for digital marketing",
      "latest web development frameworks"
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

