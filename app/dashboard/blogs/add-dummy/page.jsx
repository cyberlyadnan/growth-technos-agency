"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { addDummyBlogs } from "@/lib/addDummyBlogs";
import { CheckCircle, XCircle, Loader2, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddDummyBlogsPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const router = useRouter();

  const handleAddDummyBlogs = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await addDummyBlogs();
      setResult(response);
    } catch (error) {
      setResult({
        success: false,
        error: error.message || "Failed to add dummy blogs",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Add Dummy Blog Data
        </h1>
        <p className="text-foreground/60">
          Add sample blog posts to Firebase for testing and demonstration purposes.
        </p>
      </div>

      {/* Info Card */}
      <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Dummy Blog Posts
          </CardTitle>
          <CardDescription>
            This will add 3 sample blog posts to your Firebase Firestore database:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>
                <strong>The Future of Web Development: Next.js 14 and Server Components</strong> - Web Development category
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>
                <strong>SEO Best Practices for 2024: A Complete Guide</strong> - SEO category
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>
                <strong>Top Digital Marketing Trends to Watch in 2024</strong> - Digital Marketing category
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Action Card */}
      <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Add Blogs</CardTitle>
          <CardDescription>
            Click the button below to add the dummy blog posts to Firebase.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={handleAddDummyBlogs}
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-lg shadow-primary/20"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Adding blogs...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Add Dummy Blogs
              </span>
            )}
          </Button>

          {result && (
            <div
              className={`p-4 rounded-lg border ${
                result.success
                  ? "bg-green-500/10 border-green-500/50 text-green-600 dark:text-green-400"
                  : "bg-red-500/10 border-red-500/50 text-red-600 dark:text-red-400"
              }`}
            >
              <div className="flex items-start gap-3">
                {result.success ? (
                  <CheckCircle className="w-5 h-5 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 mt-0.5" />
                )}
                <div className="flex-1">
                  {result.success ? (
                    <div>
                      <p className="font-semibold mb-1">
                        Successfully added {result.count} blog posts!
                      </p>
                      <p className="text-sm opacity-90">
                        You can now view them on the blog page or in the blog list.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="font-semibold mb-1">Error adding blogs</p>
                      <p className="text-sm opacity-90">{result.error}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {result?.success && (
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => router.push("/dashboard/blogs")}
                className="flex-1"
              >
                View Blogs
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push("/blog")}
                className="flex-1"
              >
                View Blog Page
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

