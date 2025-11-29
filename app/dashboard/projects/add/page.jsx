"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { uploadImage, uploadMultipleImages } from "@/lib/imageUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, X, Upload, Loader2, ArrowLeft, Sparkles } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function AddProjectPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
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

  const [imageFile, setImageFile] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [testimonialAvatarFile, setTestimonialAvatarFile] = useState(null);

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

  const handleImageUpload = async (file, type) => {
    try {
      setUploadingImages(true);
      const url = await uploadImage(file, "projects/images", true);
      
      if (type === "main") {
        setFormData({ ...formData, image: url });
        setImageFile(null);
      } else if (type === "testimonial") {
        setFormData({
          ...formData,
          testimonial: { ...formData.testimonial, avatar: url },
        });
        setTestimonialAvatarFile(null);
      }
      
      toast.success("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image");
    } finally {
      setUploadingImages(false);
    }
  };

  const handleGalleryUpload = async (files) => {
    try {
      setUploadingImages(true);
      const urls = await uploadMultipleImages(Array.from(files), "projects/gallery", true);
      setFormData({
        ...formData,
        gallery: [...formData.gallery, ...urls],
      });
      setGalleryFiles([]);
      toast.success("Gallery images uploaded successfully");
    } catch (error) {
      console.error("Error uploading gallery:", error);
      toast.error("Failed to upload gallery images");
    } finally {
      setUploadingImages(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload main image if file is selected
      let imageUrl = formData.image;
      if (imageFile) {
        imageUrl = await uploadImage(imageFile, "projects/images", true);
      }

      // Upload testimonial avatar if file is selected
      let testimonialData = { ...formData.testimonial };
      if (testimonialAvatarFile) {
        testimonialData.avatar = await uploadImage(
          testimonialAvatarFile,
          "projects/testimonials",
          true
        );
      }

      // Upload gallery images if files are selected
      let galleryUrls = [...formData.gallery];
      if (galleryFiles.length > 0) {
        const newUrls = await uploadMultipleImages(
          Array.from(galleryFiles),
          "projects/gallery",
          true
        );
        galleryUrls = [...galleryUrls, ...newUrls];
      }

      // Prepare project data
      const projectData = {
        title: formData.title,
        category: formData.category,
        client: formData.client,
        description: formData.description,
        fullDescription: formData.fullDescription,
        budget: formData.budget,
        duration: formData.duration,
        completionDate: formData.completionDate,
        team: formData.team,
        liveUrl: formData.liveUrl,
        image: imageUrl,
        features: formData.features,
        gallery: galleryUrls,
        technologies: formData.technologies,
        solutions: formData.solutions,
        achievements: formData.achievements,
        challenges: formData.challenges,
        testimonial: testimonialData,
      };

      // Add to Firestore
      await addDoc(collection(db, "projects"), projectData);

      toast.success("Project added successfully!");
      router.push("/dashboard/projects");
    } catch (error) {
      console.error("Error adding project:", error);
      toast.error("Failed to add project");
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
            <Link href="/dashboard/projects">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-primary" />
              Add New Project
            </h1>
          </div>
          <p className="text-foreground/60">Create a new project entry</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
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
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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

        {/* Main Image */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Main Image</CardTitle>
            <CardDescription>Upload the main project image</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.image && (
              <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border/50">
                <img src={formData.image} alt="Main" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="flex items-center gap-4">
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="flex-1"
              />
              {imageFile && (
                <Button
                  type="button"
                  onClick={() => handleImageUpload(imageFile, "main")}
                  disabled={uploadingImages}
                >
                  {uploadingImages ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Upload className="w-4 h-4" />
                  )}
                  Upload
                </Button>
              )}
            </div>
            <div className="flex items-center gap-4">
              <Input
                type="url"
                placeholder="Or enter image URL"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              />
            </div>
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
            <CardDescription>Upload multiple images for the project gallery</CardDescription>
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
            <div className="flex items-center gap-4">
              <Input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setGalleryFiles(Array.from(e.target.files || []))}
                className="flex-1"
              />
              {galleryFiles.length > 0 && (
                <Button
                  type="button"
                  onClick={() => handleGalleryUpload(galleryFiles)}
                  disabled={uploadingImages}
                >
                  {uploadingImages ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Upload className="w-4 h-4" />
                  )}
                  Upload {galleryFiles.length} Image(s)
                </Button>
              )}
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
                    <img src={tech.logo} alt={tech.name} className="w-6 h-6" />
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
                />
              </div>
            )}
            <div className="flex items-center gap-4">
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setTestimonialAvatarFile(e.target.files[0])}
                className="flex-1"
              />
              {testimonialAvatarFile && (
                <Button
                  type="button"
                  onClick={() => handleImageUpload(testimonialAvatarFile, "testimonial")}
                  disabled={uploadingImages}
                >
                  {uploadingImages ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Upload className="w-4 h-4" />
                  )}
                  Upload Avatar
                </Button>
              )}
            </div>
            <Input
              type="url"
              placeholder="Or enter avatar URL"
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
          <Button type="submit" disabled={loading} className="bg-gradient-to-r from-primary to-accent">
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Adding Project...
              </>
            ) : (
              "Add Project"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

