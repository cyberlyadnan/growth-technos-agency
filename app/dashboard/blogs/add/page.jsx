"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import RichTextEditor from "@/components/ui/RichTextEditor";
import { Loader2, ArrowLeft, Sparkles, Plus, X } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function AddBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    description: "",
    content: "",
    category: "",
    author: "",
    featuredImage: "",
    tags: [],
    published: false,
    seoTitle: "",
    seoDescription: "",
    seoKeywords: [],
  });

  const [tempTag, setTempTag] = useState("");
  const [tempKeyword, setTempKeyword] = useState("");

  // Auto-generate slug from title
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
      seoTitle: title || "",
    });
  };

  const handleAddTag = () => {
    if (tempTag.trim()) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tempTag.trim()],
      });
      setTempTag("");
    }
  };

  const handleRemoveTag = (index) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((_, i) => i !== index),
    });
  };

  const handleAddKeyword = () => {
    if (tempKeyword.trim()) {
      setFormData({
        ...formData,
        seoKeywords: [...formData.seoKeywords, tempKeyword.trim()],
      });
      setTempKeyword("");
    }
  };

  const handleRemoveKeyword = (index) => {
    setFormData({
      ...formData,
      seoKeywords: formData.seoKeywords.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Prepare blog data (featured image is URL-only)
      const blogData = {
        title: formData.title,
        slug: formData.slug || generateSlug(formData.title),
        excerpt: formData.excerpt,
        description: formData.description,
        content: formData.content,
        category: formData.category,
        author: formData.author,
        featuredImage: formData.featuredImage?.trim() || "",
        tags: formData.tags,
        published: formData.published,
        seoTitle: formData.seoTitle || formData.title,
        seoDescription: formData.seoDescription || formData.excerpt,
        seoKeywords: formData.seoKeywords,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      };

      // Add to Firestore
      await addDoc(collection(db, "blogs"), blogData);

      toast.success("Blog added successfully!");
      router.push("/dashboard/blogs");
    } catch (error) {
      console.error("Error adding blog:", error);
      toast.error("Failed to add blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <Link href="/dashboard/blogs">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-primary" />
              Add New Blog
            </h1>
          </div>
          <p className="text-foreground/60">Create a new blog post</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Blog post details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Title *</Label>
              <Input
                value={formData.title}
                onChange={handleTitleChange}
                required
                placeholder="Enter blog title"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Slug *</Label>
                <Input
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  required
                  placeholder="blog-post-slug"
                />
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Input
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="Web Development"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Author</Label>
                <Input
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  placeholder="Author name"
                />
              </div>
              <div className="space-y-2 flex items-center gap-4">
                <div className="flex-1">
                  <Label>Published</Label>
                  <div className="flex items-center gap-2 mt-2">
                    <Switch
                      checked={formData.published}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, published: checked })
                      }
                    />
                    <span className="text-sm text-foreground/60">
                      {formData.published ? "Published" : "Draft"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Excerpt</Label>
              <Textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="Short description for preview"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Meta description"
                rows={2}
              />
            </div>
          </CardContent>
        </Card>

        {/* Featured Image */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Featured Image</CardTitle>
            <CardDescription>Enter image URL (any domain supported)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.featuredImage && (
              <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border/50">
                <img
                  src={formData.featuredImage}
                  alt="Featured"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
            <Input
              type="url"
              placeholder="https://example.com/image.jpg"
              value={formData.featuredImage}
              onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
            />
          </CardContent>
        </Card>

        {/* Content */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Content</CardTitle>
            <CardDescription>Use the toolbar above for headings, bold, lists, links, and more. Works in light and dark mode.</CardDescription>
          </CardHeader>
          <CardContent className="p-0 sm:p-6">
            <RichTextEditor
              value={formData.content}
              onChange={(value) => setFormData({ ...formData, content: value })}
              placeholder="Start writing your blog post..."
            />
          </CardContent>
        </Card>

        {/* Tags */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
            <CardDescription>Add tags for better categorization</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={tempTag}
                onChange={(e) => setTempTag(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                placeholder="Enter tag"
              />
              <Button type="button" onClick={handleAddTag}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(index)}
                    className="ml-1 hover:text-primary/70"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* SEO Settings */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>SEO Settings</CardTitle>
            <CardDescription>Optimize for search engines</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>SEO Title</Label>
              <Input
                value={formData.seoTitle}
                onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                placeholder="SEO optimized title"
              />
            </div>
            <div className="space-y-2">
              <Label>SEO Description</Label>
              <Textarea
                value={formData.seoDescription}
                onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                placeholder="SEO meta description"
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label>SEO Keywords</Label>
              <div className="flex gap-2">
                <Input
                  value={tempKeyword}
                  onChange={(e) => setTempKeyword(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), handleAddKeyword())
                  }
                  placeholder="Enter keyword"
                />
                <Button type="button" onClick={handleAddKeyword}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.seoKeywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs bg-muted text-foreground"
                  >
                    {keyword}
                    <button
                      type="button"
                      onClick={() => handleRemoveKeyword(index)}
                      className="ml-1 hover:text-foreground/70"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          <Link href="/dashboard/blogs">
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
          <Button type="submit" disabled={loading} className="bg-gradient-to-r from-primary to-accent">
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Adding Blog...
              </>
            ) : (
              "Add Blog"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

