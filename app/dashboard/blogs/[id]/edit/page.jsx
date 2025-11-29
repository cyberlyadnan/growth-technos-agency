"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { doc, getDoc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { uploadImage } from "@/lib/imageUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import RichTextEditor from "@/components/ui/RichTextEditor";
import { Upload, Loader2, ArrowLeft, Sparkles, Plus, X } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id;
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

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
  const [featuredImageFile, setFeaturedImageFile] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, "blogs", blogId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setFormData({
            title: data.title || "",
            slug: data.slug || "",
            excerpt: data.excerpt || "",
            description: data.description || "",
            content: data.content || "",
            category: data.category || "",
            author: data.author || "",
            featuredImage: data.featuredImage || data.image || "",
            tags: data.tags || [],
            published: data.published || false,
            seoTitle: data.seoTitle || data.title || "",
            seoDescription: data.seoDescription || data.excerpt || "",
            seoKeywords: data.seoKeywords || [],
          });
        } else {
          toast.error("Blog not found");
          router.push("/dashboard/blogs");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        toast.error("Failed to load blog");
        router.push("/dashboard/blogs");
      } finally {
        setLoading(false);
      }
    };

    if (blogId) {
      fetchBlog();
    }
  }, [blogId, router]);

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
      slug: formData.slug || generateSlug(title),
      seoTitle: formData.seoTitle || title,
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

  const handleImageUpload = async () => {
    if (!featuredImageFile) return;

    try {
      setUploadingImage(true);
      const url = await uploadImage(featuredImageFile, "blogs/images", true);
      setFormData({ ...formData, featuredImage: url });
      setFeaturedImageFile(null);
      toast.success("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      // Upload featured image if file is selected
      let featuredImageUrl = formData.featuredImage;
      if (featuredImageFile) {
        featuredImageUrl = await uploadImage(featuredImageFile, "blogs/images", true);
      }

      // Prepare blog data
      const blogData = {
        title: formData.title,
        slug: formData.slug || generateSlug(formData.title),
        excerpt: formData.excerpt,
        description: formData.description,
        content: formData.content,
        category: formData.category,
        author: formData.author,
        featuredImage: featuredImageUrl,
        tags: formData.tags,
        published: formData.published,
        seoTitle: formData.seoTitle || formData.title,
        seoDescription: formData.seoDescription || formData.excerpt,
        seoKeywords: formData.seoKeywords,
        updatedAt: Timestamp.now(),
      };

      // Update in Firestore
      await updateDoc(doc(db, "blogs", blogId), blogData);

      toast.success("Blog updated successfully!");
      router.push("/dashboard/blogs");
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Failed to update blog");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 lg:p-8 flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

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
              Edit Blog
            </h1>
          </div>
          <p className="text-foreground/60">Update blog post details</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information - Same structure as Add page */}
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
            <CardDescription>Upload the main blog image</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.featuredImage && (
              <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border/50">
                <img
                  src={formData.featuredImage}
                  alt="Featured"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex items-center gap-4">
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setFeaturedImageFile(e.target.files[0])}
                className="flex-1"
              />
              {featuredImageFile && (
                <Button
                  type="button"
                  onClick={handleImageUpload}
                  disabled={uploadingImage}
                >
                  {uploadingImage ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Upload className="w-4 h-4" />
                  )}
                  Upload
                </Button>
              )}
            </div>
            <Input
              type="url"
              placeholder="Or enter image URL"
              value={formData.featuredImage}
              onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
            />
          </CardContent>
        </Card>

        {/* Content */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Content</CardTitle>
            <CardDescription>Write your blog post content</CardDescription>
          </CardHeader>
          <CardContent>
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
          <Button type="submit" disabled={saving} className="bg-gradient-to-r from-primary to-accent">
            {saving ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Updating Blog...
              </>
            ) : (
              "Update Blog"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

