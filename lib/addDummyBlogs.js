import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebase";

// Dummy blog data
const dummyBlogs = [
  {
    id: "nextjs-14-server-components",
    slug: "nextjs-14-server-components",
    title: "The Future of Web Development: Next.js 14 and Server Components",
    excerpt: "Explore how Next.js 14's server components are revolutionizing web development, improving performance, and enhancing SEO capabilities for modern applications.",
    description: "A comprehensive guide to Next.js 14 server components and their impact on modern web development practices.",
    content: `
      <h2>Introduction to Next.js 14</h2>
      <p>Next.js 14 represents a significant leap forward in React-based web development. With the introduction of server components, developers can now build more efficient, SEO-friendly applications that leverage the power of server-side rendering.</p>
      
      <h3>What Are Server Components?</h3>
      <p>Server Components allow you to build UI that renders on the server, reducing the amount of JavaScript sent to the client. This results in:</p>
      <ul>
        <li><strong>Faster page loads:</strong> Less JavaScript means quicker initial page renders</li>
        <li><strong>Better SEO:</strong> Content is fully rendered on the server, making it immediately available to search engines</li>
        <li><strong>Improved performance:</strong> Reduced client-side bundle size and faster Time to Interactive (TTI)</li>
        <li><strong>Enhanced security:</strong> Sensitive data and API keys never reach the client</li>
      </ul>
      
      <h3>Key Features of Next.js 14</h3>
      <p>Next.js 14 introduces several groundbreaking features:</p>
      
      <h4>1. App Router</h4>
      <p>The new App Router provides a more intuitive file-based routing system with support for layouts, loading states, and error boundaries.</p>
      
      <h4>2. Server Actions</h4>
      <p>Server Actions enable you to run server-side code directly from client components, simplifying data mutations and form handling.</p>
      
      <h4>3. Improved Image Optimization</h4>
      <p>Enhanced image optimization with better support for modern formats and automatic responsive images.</p>
      
      <h3>Best Practices</h3>
      <p>When working with Next.js 14, consider these best practices:</p>
      <ol>
        <li>Use Server Components by default and only opt for Client Components when interactivity is needed</li>
        <li>Leverage the App Router for better code organization</li>
        <li>Implement proper error boundaries and loading states</li>
        <li>Optimize images using the built-in Image component</li>
        <li>Take advantage of static generation for better performance</li>
      </ol>
      
      <h3>Code Example</h3>
      <pre><code>// app/blog/page.jsx
import { getAllBlogs } from '@/hooks/getAllBlogs';

export default async function BlogPage() {
  const blogs = await getAllBlogs();
  
  return (
    &lt;div&gt;
      {blogs.map(blog => (
        &lt;BlogCard key={blog.id} blog={blog} /&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>Performance Benefits</h3>
      <p>By leveraging server components, you can achieve:</p>
      <ul>
        <li>Up to 70% reduction in JavaScript bundle size</li>
        <li>Faster initial page loads</li>
        <li>Better Core Web Vitals scores</li>
        <li>Improved SEO rankings</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Next.js 14 with server components represents the future of React development. By adopting these new patterns, developers can build faster, more efficient, and more SEO-friendly applications that provide better user experiences.</p>
      
      <p>Whether you're building a simple blog or a complex enterprise application, Next.js 14 provides the tools and patterns needed to create exceptional web experiences.</p>
    `,
    category: "Web Development",
    author: "Growth Technos Team",
    featuredImage: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Next.js", "React", "Web Development", "Server Components", "SEO", "Performance"],
    published: true,
    seoTitle: "The Future of Web Development: Next.js 14 and Server Components",
    seoDescription: "Explore how Next.js 14's server components are revolutionizing web development, improving performance, and enhancing SEO capabilities.",
    seoKeywords: ["Next.js", "React", "Web Development", "Server Components", "SEO"],
    createdAt: Timestamp.fromDate(new Date("2024-01-15")),
    updatedAt: Timestamp.fromDate(new Date("2024-01-20")),
  },
  {
    id: "seo-best-practices-2024",
    slug: "seo-best-practices-2024",
    title: "SEO Best Practices for 2024: A Complete Guide",
    excerpt: "Discover the latest SEO strategies and best practices for 2024. Learn how to improve your search engine rankings, increase organic traffic, and boost your online visibility.",
    description: "Comprehensive guide to SEO best practices for 2024, covering technical SEO, content optimization, and link building strategies.",
    content: `
      <h2>Introduction to Modern SEO</h2>
      <p>Search Engine Optimization (SEO) continues to evolve, and 2024 brings new challenges and opportunities. This guide covers the essential SEO practices you need to implement to stay competitive in today's digital landscape.</p>
      
      <h3>1. Technical SEO Fundamentals</h3>
      <p>Technical SEO forms the foundation of your website's search engine visibility:</p>
      <ul>
        <li><strong>Site Speed:</strong> Optimize loading times to improve user experience and rankings</li>
        <li><strong>Mobile Responsiveness:</strong> Ensure your site works perfectly on all devices</li>
        <li><strong>HTTPS:</strong> Secure your site with SSL certificates</li>
        <li><strong>Structured Data:</strong> Implement schema markup for better search visibility</li>
        <li><strong>XML Sitemaps:</strong> Help search engines crawl and index your content</li>
      </ul>
      
      <h3>2. Content Optimization</h3>
      <p>High-quality, relevant content remains the cornerstone of effective SEO:</p>
      <ul>
        <li>Create comprehensive, in-depth content that answers user queries</li>
        <li>Use natural keyword integration (avoid keyword stuffing)</li>
        <li>Optimize headings (H1, H2, H3) with relevant keywords</li>
        <li>Include internal and external links strategically</li>
        <li>Add alt text to all images</li>
      </ul>
      
      <h3>3. User Experience (UX) Signals</h3>
      <p>Search engines increasingly prioritize user experience metrics:</p>
      <ul>
        <li><strong>Core Web Vitals:</strong> Focus on LCP, FID, and CLS scores</li>
        <li><strong>Bounce Rate:</strong> Create engaging content that keeps users on your site</li>
        <li><strong>Time on Page:</strong> Provide valuable, comprehensive content</li>
        <li><strong>Click-Through Rate:</strong> Write compelling meta titles and descriptions</li>
      </ul>
      
      <h3>4. Link Building Strategies</h3>
      <p>Quality backlinks remain important for SEO success:</p>
      <ul>
        <li>Create linkable assets (infographics, research studies, tools)</li>
        <li>Build relationships with industry influencers</li>
        <li>Guest posting on reputable websites</li>
        <li>Internal linking to distribute page authority</li>
      </ul>
      
      <h3>5. Local SEO (If Applicable)</h3>
      <p>For businesses with physical locations:</p>
      <ul>
        <li>Optimize Google Business Profile</li>
        <li>Collect and respond to customer reviews</li>
        <li>Include location-specific keywords</li>
        <li>Ensure NAP (Name, Address, Phone) consistency</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>SEO in 2024 requires a holistic approach that combines technical excellence, quality content, and exceptional user experience. By implementing these best practices, you can improve your search rankings and drive more organic traffic to your website.</p>
    `,
    category: "SEO",
    author: "Growth Technos Team",
    featuredImage: "https://images.pexels.com/photos/5905708/pexels-photo-5905708.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["SEO", "Digital Marketing", "Search Engine Optimization", "Content Marketing", "Google"],
    published: true,
    seoTitle: "SEO Best Practices for 2024: A Complete Guide",
    seoDescription: "Discover the latest SEO strategies and best practices for 2024. Learn how to improve your search engine rankings and increase organic traffic.",
    seoKeywords: ["SEO", "Digital Marketing", "Search Engine Optimization", "Content Marketing"],
    createdAt: Timestamp.fromDate(new Date("2024-01-10")),
    updatedAt: Timestamp.fromDate(new Date("2024-01-15")),
  },
  {
    id: "digital-marketing-trends-2024",
    slug: "digital-marketing-trends-2024",
    title: "Top Digital Marketing Trends to Watch in 2024",
    excerpt: "Stay ahead of the curve with these emerging digital marketing trends. From AI-powered campaigns to voice search optimization, discover what's shaping the future of marketing.",
    description: "Explore the top digital marketing trends for 2024, including AI, voice search, video marketing, and personalization strategies.",
    content: `
      <h2>Introduction</h2>
      <p>The digital marketing landscape is constantly evolving. As we move through 2024, several key trends are reshaping how businesses connect with their audiences. This article explores the most impactful trends you need to know.</p>
      
      <h3>1. Artificial Intelligence and Machine Learning</h3>
      <p>AI is transforming digital marketing in unprecedented ways:</p>
      <ul>
        <li><strong>Chatbots and Virtual Assistants:</strong> Providing 24/7 customer support</li>
        <li><strong>Predictive Analytics:</strong> Forecasting customer behavior and trends</li>
        <li><strong>Content Generation:</strong> AI-powered tools for creating marketing copy</li>
        <li><strong>Personalization:</strong> Delivering tailored experiences at scale</li>
      </ul>
      
      <h3>2. Voice Search Optimization</h3>
      <p>With the rise of smart speakers and voice assistants, optimizing for voice search is crucial:</p>
      <ul>
        <li>Focus on conversational, long-tail keywords</li>
        <li>Answer questions directly in your content</li>
        <li>Optimize for featured snippets</li>
        <li>Consider local voice search queries</li>
      </ul>
      
      <h3>3. Video Marketing Dominance</h3>
      <p>Video continues to be the most engaging content format:</p>
      <ul>
        <li>Short-form video content (TikTok, Instagram Reels, YouTube Shorts)</li>
        <li>Live streaming for real-time engagement</li>
        <li>Interactive video experiences</li>
        <li>Video SEO optimization</li>
      </ul>
      
      <h3>4. Social Commerce</h3>
      <p>Shopping directly through social media platforms is growing rapidly:</p>
      <ul>
        <li>Instagram Shopping and Facebook Shops</li>
        <li>Pinterest Product Pins</li>
        <li>TikTok Shopping features</li>
        <li>Social media payment integration</li>
      </ul>
      
      <h3>5. Sustainability and Purpose-Driven Marketing</h3>
      <p>Consumers increasingly value brands with strong values:</p>
      <ul>
        <li>Environmental responsibility messaging</li>
        <li>Social impact initiatives</li>
        <li>Transparent business practices</li>
        <li>Authentic brand storytelling</li>
      </ul>
      
      <h3>6. Privacy-First Marketing</h3>
      <p>With increased privacy regulations, marketers must adapt:</p>
      <ul>
        <li>First-party data collection strategies</li>
        <li>Cookie-less tracking alternatives</li>
        <li>Consent management platforms</li>
        <li>Building direct customer relationships</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Staying current with digital marketing trends is essential for maintaining a competitive edge. By embracing AI, optimizing for voice search, leveraging video content, and focusing on authentic customer relationships, businesses can thrive in 2024's digital landscape.</p>
    `,
    category: "Digital Marketing",
    author: "Growth Technos Team",
    featuredImage: "https://images.pexels.com/photos/5905708/pexels-photo-5905708.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Digital Marketing", "Marketing Trends", "AI", "Video Marketing", "Social Media"],
    published: true,
    seoTitle: "Top Digital Marketing Trends to Watch in 2024",
    seoDescription: "Stay ahead of the curve with these emerging digital marketing trends. From AI-powered campaigns to voice search optimization.",
    seoKeywords: ["Digital Marketing", "Marketing Trends", "AI", "Video Marketing"],
    createdAt: Timestamp.fromDate(new Date("2024-01-05")),
    updatedAt: Timestamp.fromDate(new Date("2024-01-12")),
  },
];

/**
 * Add dummy blogs to Firebase Firestore
 * Run this function to populate your blog collection with sample data
 */
export async function addDummyBlogs() {
  try {
    const blogsCollection = collection(db, "blogs");
    
    for (const blog of dummyBlogs) {
      await setDoc(doc(blogsCollection, blog.id), blog);
      console.log(`✅ Added blog: ${blog.title}`);
    }
    
    console.log(`\n🎉 Successfully added ${dummyBlogs.length} dummy blogs to Firebase!`);
    return { success: true, count: dummyBlogs.length };
  } catch (error) {
    console.error("❌ Error adding dummy blogs:", error);
    return { success: false, error: error.message };
  }
}

