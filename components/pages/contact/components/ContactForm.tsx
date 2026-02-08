"use client";

import React, { useState } from "react";
import { Send, Zap, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const services = [
  "Web Development", "SEO Services", "Digital Marketing", "Branding",
  "UI/UX Design", "Mobile Development", "E-commerce Solutions", "Analytics & Reporting", "Other"
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s+\-()]{10,}$/;

function validateForm(data: { name: string; email: string; phone: string; message: string }) {
  const errors: Record<string, string> = {};
  const name = data.name.trim();
  const email = data.email.trim();
  const message = data.message.trim();
  const phone = data.phone.trim();

  if (!name) errors.name = "Name is required.";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters.";

  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_REGEX.test(email)) errors.email = "Please enter a valid email address.";

  if (phone && !PHONE_REGEX.test(phone)) errors.phone = "Please enter a valid phone number (at least 10 digits).";

  if (!message) errors.message = "Message is required.";
  else if (message.length < 10) errors.message = "Message must be at least 10 characters.";

  return errors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const validation = validateForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmitError(data.message || "Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", phone: "", service: "", budget: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("Submission failed:", err);
      setSubmitError("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-card/60 dark:bg-card/40 backdrop-blur-xl border border-border/50 dark:border-border/40 p-8 md:p-10 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl opacity-0 hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 dark:border-primary/40 mb-6 backdrop-blur-sm">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Contact Form</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Send Us a Message
        </h2>
        <p className="text-foreground/80 dark:text-foreground/90">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      {isSubmitted ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
          <p className="text-foreground/80 dark:text-foreground/90">
            We've received your message and will get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {submitError && (
            <div className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              {submitError}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group">
              <Label htmlFor="name" className="text-foreground/90 mb-2 block">Name *</Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                minLength={2}
                className={`bg-background border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-foreground/50 dark:placeholder:text-foreground/40 ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            <div className="group">
              <Label htmlFor="email" className="text-foreground/90 mb-2 block">Email *</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className={`bg-background border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-foreground/50 dark:placeholder:text-foreground/40 ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group">
              <Label htmlFor="company" className="text-foreground/90 mb-2 block">Company</Label>
              <Input 
                id="company" 
                name="company" 
                value={formData.company} 
                onChange={handleChange} 
                className="bg-background border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-foreground/50 dark:placeholder:text-foreground/40"
                placeholder="Your company name"
              />
            </div>
            <div className="group">
              <Label htmlFor="phone" className="text-foreground/90 mb-2 block">Phone</Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                value={formData.phone} 
                onChange={handleChange} 
                className={`bg-background border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-foreground/50 dark:placeholder:text-foreground/40 ${errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                placeholder="+91 12345 67890"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            <div className="group">
              <Label htmlFor="service" className="text-foreground/90 mb-2 block">Service Needed</Label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
              >
                <option value="">Select a service</option>
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
            <div className="group">
              <Label htmlFor="budget" className="text-foreground/90 mb-2 block">Budget Range</Label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
              >
                <option value="">Select budget range</option>
                <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                <option value="₹50,000+">₹50,000+</option>
              </select>
            </div>
          </div>

          <div className="group">
            <Label htmlFor="message" className="text-foreground/90 mb-2 block">Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              minLength={10}
              rows={5}
              className={`bg-background border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none text-foreground placeholder:text-foreground/50 dark:placeholder:text-foreground/40 ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}`}
              placeholder="Tell us about your project, goals, and any specific requirements..."
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
          </Button>
        </form>
      )}
    </div>
  );
}
