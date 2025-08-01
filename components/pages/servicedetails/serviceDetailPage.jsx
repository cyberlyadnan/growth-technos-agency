// app/services/[serviceId]/page.tsx
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
    <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center p-8 max-w-md mx-4">
        <div className="inline-flex items-center justify-center p-4 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
          <Construction className="w-10 h-10 text-red-600 dark:text-red-400" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Service Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We couldn't find the service you're looking for. It might be under construction or no longer available.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/services"
            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
          >
            Browse All Services
          </Link>
          <Link
            href="/"
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300 text-sm font-medium"
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
      <SubServices service={service} />
      <TechnologiesSection service={service} />
      <PricingSection service={service} />
      <TestimonialsSection service={service} />
      <FAQSection service={service} />
      <CTASection service={service} />
    </div>
  );
}
