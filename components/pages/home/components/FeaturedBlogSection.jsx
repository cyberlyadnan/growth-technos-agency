import { getAllBlogs } from "@/hooks/getAllBlogs";
import { FeaturedBlogSectionClient } from "./FeaturedBlogSectionClient";

export async function FeaturedBlogSection() {
  let blogs = [];
  try {
    const allBlogs = await getAllBlogs();
    blogs = allBlogs
      .filter((blog) => blog.published !== false)
      .slice(0, 3);
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  return <FeaturedBlogSectionClient blogs={blogs} />;
}
