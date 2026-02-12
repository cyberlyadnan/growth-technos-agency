"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, X, Loader2, ArrowLeft, Sparkles } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { slugify } from "@/lib/utils";

export default function EditProjectPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = params.id;
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    client: "",
    description: "",
    fullDescription: "",
    budget: "",
    duration: "",
    completionDate: "",
    team: "",
    liveUrl: "",
    image: "",
    features: [],
    gallery: [],
    technologies: [],
    solutions: [],
    achievements: [],
    challenges: [],
    testimonial: {
      author: "",
      position: "",
      text: "",
      avatar: "",
    },
  });

  const [tempFeature, setTempFeature] = useState("");
  const [tempSolution, setTempSolution] = useState("");
  const [tempAchievement, setTempAchievement] = useState("");
  const [tempChallenge, setTempChallenge] = useState("");
  const [tempTech, setTempTech] = useState({ name: "", logo: "" });
  const [galleryUrl, setGalleryUrl] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, "projects", projectId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          setFormData({
            title: data.title || "",
            slug: data.slug || slugify(data.title || ""),
            category: data.category || "",
            client: data.client || "",
            description: data.description || "",
            fullDescription: data.fullDescription || "",
            budget: data.budget || "",
            duration: data.duration || "",
            completionDate: data.completionDate || "",
            team: data.team || "",
            liveUrl: data.liveUrl || "",
            image: data.image || "",
            features: data.features || [],
            gallery: data.gallery || [],
            technologies: data.technologies || [],
            solutions: data.solutions || [],
            achievements: data.achievements || [],
            challenges: data.challenges || [],
            testimonial: data.testimonial || {
              author: "",
              position: "",
              text: "",
              avatar: "",
            },
          });
        } else {
          toast.error("Project not found");
          router.push("/dashboard/projects");
        }
      } catch (error) {
        console.error("Error fetching project:", error);
        toast.error("Failed to load project");
        router.push("/dashboard/projects");
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchProject();
    }
  }, [projectId, router]);

  const handleAddFeature = () => {
    if (tempFeature.trim()) {
      setFormData({
        ...formData,
        features: [...formData.features, tempFeature.trim()],
      });
      setTempFeature("");
    }
  };

  const handleRemoveFeature = (index) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index),
    });
  };

  const handleAddSolution = () => {
    if (tempSolution.trim()) {
      setFormData({
        ...formData,
        solutions: [...formData.solutions, tempSolution.trim()],
      });
      setTempSolution("");
    }
  };

  const handleRemoveSolution = (index) => {
    setFormData({
      ...formData,
      solutions: formData.solutions.filter((_, i) => i !== index),
    });
  };

  const handleAddAchievement = () => {
    if (tempAchievement.trim()) {
      setFormData({
        ...formData,
        achievements: [...formData.achievements, tempAchievement.trim()],
      });
      setTempAchievement("");
    }
  };

  const handleRemoveAchievement = (index) => {
    setFormData({
      ...formData,
      achievements: formData.achievements.filter((_, i) => i !== index),
    });
  };

  const handleAddChallenge = () => {
    if (tempChallenge.trim()) {
      setFormData({
        ...formData,
        challenges: [...formData.challenges, tempChallenge.trim()],
      });
      setTempChallenge("");
    }
  };

  const handleRemoveChallenge = (index) => {
    setFormData({
      ...formData,
      challenges: formData.challenges.filter((_, i) => i !== index),
    });
  };

  const handleAddTechnology = () => {
    if (tempTech.name.trim() && tempTech.logo.trim()) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, { ...tempTech }],
      });
      setTempTech({ name: "", logo: "" });
    }
  };

  const handleRemoveTechnology = (index) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter((_, i) => i !== index),
    });
  };

  const handleAddGalleryUrl = () => {
    if (galleryUrl.trim()) {
      setFormData({
        ...formData,
        gallery: [...formData.gallery, galleryUrl.trim()],
      });
      setGalleryUrl("");
      toast.success("Gallery image URL added");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      // Prepare project data (images are URL-only)
      const projectData = {
        title: formData.title,
        slug: slugify(formData.title || "") || formData.slug,
        category: formData.category,
        client: formData.client,
        description: formData.description,
        fullDescription: formData.fullDescription,
        budget: formData.budget,
        duration: formData.duration,
        completionDate: formData.completionDate,
        team: formData.team,
        liveUrl: formData.liveUrl,
        image: formData.image?.trim() || "",
        features: formData.features,
        gallery: formData.gallery,
        technologies: formData.technologies,
        solutions: formData.solutions,
        achievements: formData.achievements,
        challenges: formData.challenges,
        testimonial: formData.testimonial,
      };

      // Update in Firestore
      await updateDoc(doc(db, "projects", projectId), projectData);

      toast.success("Project updated successfully!");
      router.push("/dashboard/projects");
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("Failed to update project");
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
            <Link href="/dashboard/projects">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-primary" />
              Edit Project
            </h1>
          </div>
          <p className="text-foreground/60">Update project details</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information - Same as Add Page */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Project details and metadata</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Title *</Label>
                <Input
                  value={formData.title}
                  onChange={(e) => {
                    const newTitle = e.target.value;
                    setFormData((prev) => ({
                      ...prev,
                      title: newTitle,
                      slug: slugify(newTitle),
                    }));
                  }}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Category *</Label>
                <Input
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Slug (URL)</Label>
              <Input
                value={formData.slug}
                readOnly
                className="font-mono text-sm bg-muted/50"
              />
              <p className="text-xs text-foreground/60">Auto-generated from title for the project URL.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Client</Label>
                <Input
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Budget</Label>
                <Input
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  placeholder="$50,000"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Duration</Label>
                <Input
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  placeholder="6 months"
                />
              </div>
              <div className="space-y-2">
                <Label>Completion Date</Label>
                <Input
                  value={formData.completionDate}
                  onChange={(e) => setFormData({ ...formData, completionDate: e.target.value })}
                  placeholder="May 2023"
                />
              </div>
              <div className="space-y-2">
                <Label>Team</Label>
                <Input
                  value={formData.team}
                  onChange={(e) => setFormData({ ...formData, team: e.target.value })}
                  placeholder="8 developers"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Live URL</Label>
              <Input
                type="url"
                value={formData.liveUrl}
                onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                placeholder="https://example.com"
              />
            </div>
            <div className="space-y-2">
              <Label>Description *</Label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label>Full Description</Label>
              <Textarea
                value={formData.fullDescription}
                onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                rows={5}
              />
            </div>
          </CardContent>
        </Card>

        {/* Rest of the form sections are identical to Add Page - I'll include the key sections */}
        {/* Main Image */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Main Image</CardTitle>
            <CardDescription>Enter image URL (any domain supported)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.image && (
              <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border/50">
                <img src={formData.image} alt="Main" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            )}
            <Input
              type="url"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Features</CardTitle>
            <CardDescription>List project features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={tempFeature}
                onChange={(e) => setTempFeature(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddFeature())}
                placeholder="Enter feature"
              />
              <Button type="button" onClick={handleAddFeature}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              {formData.features.map((feature, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span>{feature}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveFeature(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Gallery */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Gallery</CardTitle>
            <CardDescription>Add image URLs for the project gallery (any domain supported)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.gallery.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {formData.gallery.map((url, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={url}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg border border-border/50"
                      referrerPolicy="no-referrer"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          gallery: formData.gallery.filter((_, i) => i !== index),
                        })
                      }
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
            <div className="flex items-center gap-2">
              <Input
                type="url"
                placeholder="https://example.com/image.jpg"
                value={galleryUrl}
                onChange={(e) => setGalleryUrl(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddGalleryUrl())}
                className="flex-1"
              />
              <Button
                type="button"
                onClick={handleAddGalleryUrl}
                variant="outline"
              >
                <Plus className="w-4 h-4" />
                Add URL
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Technologies */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Technologies</CardTitle>
            <CardDescription>Technologies used in the project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <Input
                value={tempTech.name}
                onChange={(e) => setTempTech({ ...tempTech, name: e.target.value })}
                placeholder="Technology name"
              />
              <Input
                value={tempTech.logo}
                onChange={(e) => setTempTech({ ...tempTech, logo: e.target.value })}
                placeholder="Logo URL"
              />
            </div>
            <Button type="button" onClick={handleAddTechnology}>
              <Plus className="w-4 h-4 mr-2" />
              Add Technology
            </Button>
            <div className="space-y-2">
              {formData.technologies.map((tech, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <div className="flex items-center gap-2">
                    <img src={tech.logo} alt={tech.name} className="w-6 h-6" referrerPolicy="no-referrer" />
                    <span>{tech.name}</span>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveTechnology(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Solutions */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Solutions</CardTitle>
            <CardDescription>Solutions implemented</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Textarea
                value={tempSolution}
                onChange={(e) => setTempSolution(e.target.value)}
                placeholder="Enter solution"
                rows={2}
              />
              <Button type="button" onClick={handleAddSolution}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              {formData.solutions.map((solution, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span>{solution}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveSolution(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
            <CardDescription>Project achievements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={tempAchievement}
                onChange={(e) => setTempAchievement(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" && (e.preventDefault(), handleAddAchievement())
                }
                placeholder="Enter achievement"
              />
              <Button type="button" onClick={handleAddAchievement}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              {formData.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span>{achievement}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveAchievement(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Challenges */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Challenges</CardTitle>
            <CardDescription>Challenges faced and overcome</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Textarea
                value={tempChallenge}
                onChange={(e) => setTempChallenge(e.target.value)}
                placeholder="Enter challenge"
                rows={2}
              />
              <Button type="button" onClick={handleAddChallenge}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              {formData.challenges.map((challenge, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span>{challenge}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveChallenge(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Testimonial */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Testimonial</CardTitle>
            <CardDescription>Client testimonial</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Author</Label>
                <Input
                  value={formData.testimonial.author}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      testimonial: { ...formData.testimonial, author: e.target.value },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Position</Label>
                <Input
                  value={formData.testimonial.position}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      testimonial: { ...formData.testimonial, position: e.target.value },
                    })
                  }
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Testimonial Text</Label>
              <Textarea
                value={formData.testimonial.text}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    testimonial: { ...formData.testimonial, text: e.target.value },
                  })
                }
                rows={4}
              />
            </div>
            {formData.testimonial.avatar && (
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-border/50">
                <img
                  src={formData.testimonial.avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
            <Input
              type="url"
              placeholder="https://example.com/avatar.jpg"
              value={formData.testimonial.avatar}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  testimonial: { ...formData.testimonial, avatar: e.target.value },
                })
              }
            />
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          <Link href="/dashboard/projects">
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
          <Button type="submit" disabled={saving} className="bg-gradient-to-r from-primary to-accent">
            {saving ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Updating Project...
              </>
            ) : (
              "Update Project"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

