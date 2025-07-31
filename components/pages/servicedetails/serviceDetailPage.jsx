// app/services/[serviceId]/page.tsx
import { HeroSection } from "./components/HeroSection";
import { KeyBenefitsSection } from "./components/KeyBenefitsSection";
import FeaturesSection from "./components/FeaturesSection";
import { TechnologiesSection } from "./components/TechnologiesSection";
import { PricingSection } from "./components/PricingSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { getServiceById } from "@/hooks/getServiceById";


export default async function ServiceDetailPage({ serviceId }) {
  const service = await getServiceById(serviceId);

  if (!service) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Service not found</h1>
          <p className="mt-2">The requested service does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <HeroSection service={service} />
      <KeyBenefitsSection service={service} />
      <FeaturesSection service={service} />
      <TechnologiesSection service={service} />
      <PricingSection service={service} />
      <TestimonialsSection service={service} />
      <FAQSection service={service} />
      <CTASection service={service} />
    </div>
  );
}
