"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { uploadImage } from "@/lib/imageUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, X, Upload, Loader2, ArrowLeft, Sparkles } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function EditServicePage() {
  const router = useRouter();
  const params = useParams();
  const serviceId = params.id;
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    icon: "",
    iconColor: "",
    iconBg: "",
    heroImage: "",
    keyBenefits: [],
    technologies: [],
    features: [],
    pricing: {
      starting: "",
      timeline: "",
      included: [],
    },
    faqs: [],
    subServices: {},
  });

  const [tempBenefit, setTempBenefit] = useState("");
  const [tempIncluded, setTempIncluded] = useState("");
  const [tempTech, setTempTech] = useState({ name: "", level: "" });
  const [tempFeature, setTempFeature] = useState({ title: "", description: "", iconImage: "" });
  const [tempFAQ, setTempFAQ] = useState({ question: "", answer: "" });
  const [tempSubService, setTempSubService] = useState({
    key: "",
    title: "",
    description: "",
    keyBenefits: [],
    pricing: { starting: "", timeline: "", included: [] },
  });

  const [heroImageFile, setHeroImageFile] = useState(null);
  const [featureImageFile, setFeatureImageFile] = useState(null);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const docRef = doc(db, "services", serviceId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setFormData({
            title: data.title || "",
            subtitle: data.subtitle || "",
            description: data.description || "",
            icon: data.icon || "",
            iconColor: data.iconColor || "",
            iconBg: data.iconBg || "",
            heroImage: data.heroImage || "",
            keyBenefits: data.keyBenefits || [],
            technologies: data.technologies || [],
            features: data.features || [],
            pricing: data.pricing || { starting: "", timeline: "", included: [] },
            faqs: data.faqs || [],
            subServices: data.subServices || {},
          });
        } else {
          toast.error("Service not found");
          router.push("/dashboard/services");
        }
      } catch (error) {
        console.error("Error fetching service:", error);
        toast.error("Failed to load service");
        router.push("/dashboard/services");
      } finally {
        setLoading(false);
      }
    };

    if (serviceId) {
      fetchService();
    }
  }, [serviceId, router]);

  // All the handler functions are the same as Add page
  const handleAddBenefit = () => {
    if (tempBenefit.trim()) {
      setFormData({
        ...formData,
        keyBenefits: [...formData.keyBenefits, tempBenefit.trim()],
      });
      setTempBenefit("");
    }
  };

  const handleRemoveBenefit = (index) => {
    setFormData({
      ...formData,
      keyBenefits: formData.keyBenefits.filter((_, i) => i !== index),
    });
  };

  const handleAddIncluded = () => {
    if (tempIncluded.trim()) {
      setFormData({
        ...formData,
        pricing: {
          ...formData.pricing,
          included: [...formData.pricing.included, tempIncluded.trim()],
        },
      });
      setTempIncluded("");
    }
  };

  const handleRemoveIncluded = (index) => {
    setFormData({
      ...formData,
      pricing: {
        ...formData.pricing,
        included: formData.pricing.included.filter((_, i) => i !== index),
      },
    });
  };

  const handleAddTechnology = () => {
    if (tempTech.name.trim() && tempTech.level) {
      setFormData({
        ...formData,
        technologies: [
          ...formData.technologies,
          { name: tempTech.name.trim(), level: parseInt(tempTech.level) },
        ],
      });
      setTempTech({ name: "", level: "" });
    }
  };

  const handleRemoveTechnology = (index) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter((_, i) => i !== index),
    });
  };

  const handleAddFeature = () => {
    if (tempFeature.title.trim() && tempFeature.description.trim()) {
      setFormData({
        ...formData,
        features: [...formData.features, { ...tempFeature }],
      });
      setTempFeature({ title: "", description: "", iconImage: "" });
      setFeatureImageFile(null);
    }
  };

  const handleRemoveFeature = (index) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index),
    });
  };

  const handleAddFAQ = () => {
    if (tempFAQ.question.trim() && tempFAQ.answer.trim()) {
      setFormData({
        ...formData,
        faqs: [...formData.faqs, { ...tempFAQ }],
      });
      setTempFAQ({ question: "", answer: "" });
    }
  };

  const handleRemoveFAQ = (index) => {
    setFormData({
      ...formData,
      faqs: formData.faqs.filter((_, i) => i !== index),
    });
  };

  const handleAddSubService = () => {
    if (tempSubService.key.trim() && tempSubService.title.trim()) {
      setFormData({
        ...formData,
        subServices: {
          ...formData.subServices,
          [tempSubService.key]: {
            title: tempSubService.title,
            description: tempSubService.description,
            keyBenefits: tempSubService.keyBenefits,
            pricing: tempSubService.pricing,
          },
        },
      });
      setTempSubService({
        key: "",
        title: "",
        description: "",
        keyBenefits: [],
        pricing: { starting: "", timeline: "", included: [] },
      });
    }
  };

  const handleRemoveSubService = (key) => {
    const newSubServices = { ...formData.subServices };
    delete newSubServices[key];
    setFormData({
      ...formData,
      subServices: newSubServices,
    });
  };

  const handleImageUpload = async (file, type) => {
    try {
      setUploadingImages(true);
      const url = await uploadImage(file, "services/images", true);

      if (type === "hero") {
        setFormData({ ...formData, heroImage: url });
        setHeroImageFile(null);
      } else if (type === "feature" && currentFeatureIndex !== null) {
        const updatedFeatures = [...formData.features];
        updatedFeatures[currentFeatureIndex].iconImage = url;
        setFormData({ ...formData, features: updatedFeatures });
        setFeatureImageFile(null);
        setCurrentFeatureIndex(null);
      }

      toast.success("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image");
    } finally {
      setUploadingImages(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      // Upload hero image if file is selected
      let heroImageUrl = formData.heroImage;
      if (heroImageFile) {
        heroImageUrl = await uploadImage(heroImageFile, "services/images", true);
      }

      // Prepare service data
      const serviceData = {
        title: formData.title,
        subtitle: formData.subtitle,
        description: formData.description,
        icon: formData.icon,
        iconColor: formData.iconColor,
        iconBg: formData.iconBg,
        heroImage: heroImageUrl,
        keyBenefits: formData.keyBenefits,
        technologies: formData.technologies,
        features: formData.features,
        pricing: formData.pricing,
        faqs: formData.faqs,
        subServices: formData.subServices,
      };

      // Update in Firestore
      await updateDoc(doc(db, "services", serviceId), serviceData);

      toast.success("Service updated successfully!");
      router.push("/dashboard/services");
    } catch (error) {
      console.error("Error updating service:", error);
      toast.error("Failed to update service");
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

  // The form JSX is identical to Add page, just change the header and submit button text
  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <Link href="/dashboard/services">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-primary" />
              Edit Service
            </h1>
          </div>
          <p className="text-foreground/60">Update service details</p>
        </div>
      </div>

      {/* Form - Same structure as Add page, I'll include the key sections */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Service details and metadata</CardDescription>
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
                <Label>Subtitle</Label>
                <Input
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Description *</Label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                rows={4}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Icon (Lucide icon name)</Label>
                <Input
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  placeholder="Palette"
                />
              </div>
              <div className="space-y-2">
                <Label>Icon Color</Label>
                <Input
                  value={formData.iconColor}
                  onChange={(e) => setFormData({ ...formData, iconColor: e.target.value })}
                  placeholder="text-pink-600"
                />
              </div>
              <div className="space-y-2">
                <Label>Icon Background</Label>
                <Input
                  value={formData.iconBg}
                  onChange={(e) => setFormData({ ...formData, iconBg: e.target.value })}
                  placeholder="bg-pink-100"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hero Image */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Hero Image</CardTitle>
            <CardDescription>Upload the main service image</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.heroImage && (
              <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border/50">
                <img src={formData.heroImage} alt="Hero" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="flex items-center gap-4">
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setHeroImageFile(e.target.files[0])}
                className="flex-1"
              />
              {heroImageFile && (
                <Button
                  type="button"
                  onClick={() => handleImageUpload(heroImageFile, "hero")}
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
            <Input
              type="url"
              placeholder="Or enter image URL"
              value={formData.heroImage}
              onChange={(e) => setFormData({ ...formData, heroImage: e.target.value })}
            />
          </CardContent>
        </Card>

        {/* Key Benefits */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Key Benefits</CardTitle>
            <CardDescription>List key benefits of the service</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={tempBenefit}
                onChange={(e) => setTempBenefit(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddBenefit())}
                placeholder="Enter benefit"
              />
              <Button type="button" onClick={handleAddBenefit}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              {formData.keyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span>{benefit}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveBenefit(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technologies */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Technologies</CardTitle>
            <CardDescription>Technologies used (with proficiency level)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <Input
                value={tempTech.name}
                onChange={(e) => setTempTech({ ...tempTech, name: e.target.value })}
                placeholder="Technology name"
              />
              <Input
                type="number"
                min="0"
                max="100"
                value={tempTech.level}
                onChange={(e) => setTempTech({ ...tempTech, level: e.target.value })}
                placeholder="Level (0-100)"
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
                    <span>{tech.name}</span>
                    <span className="text-xs text-foreground/60">({tech.level}%)</span>
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

        {/* Features */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Features</CardTitle>
            <CardDescription>Service features with icons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                value={tempFeature.title}
                onChange={(e) => setTempFeature({ ...tempFeature, title: e.target.value })}
                placeholder="Feature title"
              />
              <Textarea
                value={tempFeature.description}
                onChange={(e) => setTempFeature({ ...tempFeature, description: e.target.value })}
                placeholder="Feature description"
                rows={2}
              />
              <div className="flex gap-2">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFeatureImageFile(e.target.files[0])}
                  className="flex-1"
                  placeholder="Icon image"
                />
                <Input
                  type="url"
                  value={tempFeature.iconImage}
                  onChange={(e) => setTempFeature({ ...tempFeature, iconImage: e.target.value })}
                  placeholder="Or icon image URL"
                />
              </div>
              <Button type="button" onClick={handleAddFeature}>
                <Plus className="w-4 h-4 mr-2" />
                Add Feature
              </Button>
            </div>
            <div className="space-y-2">
              {formData.features.map((feature, index) => (
                <div key={index} className="p-3 bg-muted/50 rounded space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {feature.iconImage && (
                        <img src={feature.iconImage} alt={feature.title} className="w-6 h-6" />
                      )}
                      <span className="font-medium">{feature.title}</span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveFeature(index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pricing */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Pricing</CardTitle>
            <CardDescription>Service pricing information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Starting Price</Label>
                <Input
                  value={formData.pricing.starting}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pricing: { ...formData.pricing, starting: e.target.value },
                    })
                  }
                  placeholder="₹4,999"
                />
              </div>
              <div className="space-y-2">
                <Label>Timeline</Label>
                <Input
                  value={formData.pricing.timeline}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pricing: { ...formData.pricing, timeline: e.target.value },
                    })
                  }
                  placeholder="2–14 days"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>What's Included</Label>
              <div className="flex gap-2">
                <Input
                  value={tempIncluded}
                  onChange={(e) => setTempIncluded(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), handleAddIncluded())
                  }
                  placeholder="Enter included item"
                />
                <Button type="button" onClick={handleAddIncluded}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-2">
                {formData.pricing.included.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                    <span>{item}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveIncluded(index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQs */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>FAQs</CardTitle>
            <CardDescription>Frequently asked questions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                value={tempFAQ.question}
                onChange={(e) => setTempFAQ({ ...tempFAQ, question: e.target.value })}
                placeholder="Question"
              />
              <Textarea
                value={tempFAQ.answer}
                onChange={(e) => setTempFAQ({ ...tempFAQ, answer: e.target.value })}
                placeholder="Answer"
                rows={2}
              />
              <Button type="button" onClick={handleAddFAQ}>
                <Plus className="w-4 h-4 mr-2" />
                Add FAQ
              </Button>
            </div>
            <div className="space-y-2">
              {formData.faqs.map((faq, index) => (
                <div key={index} className="p-3 bg-muted/50 rounded space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{faq.question}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveFAQ(index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-foreground/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sub Services */}
        <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Sub Services</CardTitle>
            <CardDescription>Nested sub-services (optional)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border border-border/50 rounded-lg space-y-3">
              <Input
                value={tempSubService.key}
                onChange={(e) => setTempSubService({ ...tempSubService, key: e.target.value })}
                placeholder="Sub-service key (e.g., '3d-design-animation')"
              />
              <Input
                value={tempSubService.title}
                onChange={(e) => setTempSubService({ ...tempSubService, title: e.target.value })}
                placeholder="Sub-service title"
              />
              <Textarea
                value={tempSubService.description}
                onChange={(e) =>
                  setTempSubService({ ...tempSubService, description: e.target.value })
                }
                placeholder="Sub-service description"
                rows={3}
              />
              <div className="grid grid-cols-2 gap-2">
                <Input
                  value={tempSubService.pricing.starting}
                  onChange={(e) =>
                    setTempSubService({
                      ...tempSubService,
                      pricing: { ...tempSubService.pricing, starting: e.target.value },
                    })
                  }
                  placeholder="Starting price"
                />
                <Input
                  value={tempSubService.pricing.timeline}
                  onChange={(e) =>
                    setTempSubService({
                      ...tempSubService,
                      pricing: { ...tempSubService.pricing, timeline: e.target.value },
                    })
                  }
                  placeholder="Timeline"
                />
              </div>
              <Button type="button" onClick={handleAddSubService}>
                <Plus className="w-4 h-4 mr-2" />
                Add Sub Service
              </Button>
            </div>
            <div className="space-y-2">
              {Object.entries(formData.subServices).map(([key, subService]) => (
                <div key={key} className="p-3 bg-muted/50 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{subService.title}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveSubService(key)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-foreground/70">{subService.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          <Link href="/dashboard/services">
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
          <Button type="submit" disabled={saving} className="bg-gradient-to-r from-primary to-accent">
            {saving ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Updating Service...
              </>
            ) : (
              "Update Service"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

