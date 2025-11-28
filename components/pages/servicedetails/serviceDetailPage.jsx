import { HeroSection } from "./components/HeroSection";
import { KeyBenefitsSection } from "./components/KeyBenefitsSection";
import FeaturesSection from "./components/FeaturesSection";
import { TechnologiesSection } from "./components/TechnologiesSection";
import { PricingSection } from "./components/PricingSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { SubServices } from "./components/SubServices";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { getServiceById } from "@/hooks/getServiceById";
import Link from "next/link";
import { Construction } from "lucide-react";


export default async function ServiceDetailPage({ serviceId }) {
  const service = await getServiceById(serviceId);


  if (!service) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-background to-background/95">
        <div className="text-center p-8 max-w-md mx-4">
          <div className="inline-flex items-center justify-center p-4 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
            <Construction className="w-10 h-10 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Service Not Found
          </h1>
          <p className="text-foreground/70 mb-6">
            We couldn&apos;t find the service you&apos;re looking for. It might be under construction or no longer available.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/services"
              className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
            >
              Browse All Services
            </Link>
            <Link
              href="/"
              className="px-4 py-2 border border-border text-foreground hover:bg-primary/5 rounded-lg transition-colors duration-300 text-sm font-medium"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <HeroSection service={service} />
      <KeyBenefitsSection service={service} />
      <FeaturesSection service={service} />
      {service.subServices && Object.keys(service.subServices).length > 0 && (
        <SubServices service={service} />
      )}
      {service.technologies && service.technologies.length > 0 && (
        <TechnologiesSection service={service} />
      )}
      {service.pricing && (
        <PricingSection service={service} />
      )}
      {service.testimonials && service.testimonials.length > 0 && (
        <TestimonialsSection service={service} />
      )}
      {service.faqs && service.faqs.length > 0 && (
        <FAQSection service={service} />
      )}
      <CTASection service={service} />
    </div>
  );
}
