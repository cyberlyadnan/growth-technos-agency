"use client";

import { useEffect, useState } from 'react';
import { getServiceById } from '@/hooks/getServiceById';
import { HeroSection } from './components/HeroSection';
import { KeyBenefitsSection } from './components/KeyBenefitsSection';
import  FeaturesSection  from './components/FeaturesSection';
import { TechnologiesSection } from './components/TechnologiesSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { ServiceDetailParams } from '@/types/service-types';

export function ServiceDetailPage({ serviceId }) {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const data = await getServiceById(serviceId);
        if (data) {
          setService(data);
          console.log("This is data",data)
        } else {
          setError("Service not found");
        }
      } catch (err) {
        console.error("Error fetching service:", err);
        setError("Failed to fetch service");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [serviceId]);

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Service not found</h1>
          <p className="mt-2">{error || "The requested service does not exist."}</p>
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
