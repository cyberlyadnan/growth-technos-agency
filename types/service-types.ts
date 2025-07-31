import { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  iconImage: string; // ← Add this line
}

export interface Technology {
  name: string;
  level: number;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  company: string;
  rating: number;
  comment: string;
}

export interface Pricing {
  starting: string;
  timeline: string;
  included: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  keyBenefits: string[];
  features: Feature[];
  technologies: Technology[];
  process?: ProcessStep[];
  testimonials?: Testimonial[];
  pricing: Pricing;
  faqs?: FAQ[];
}

export interface ServiceDetails {
  [key: string]: ServiceDetail;
}

export interface ServiceDetailParams {
  serviceId: string;
}

export interface ServiceDetailPageProps {
  params: ServiceDetailParams;
}