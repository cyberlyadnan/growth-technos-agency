// app/services/[serviceId]/page.tsx
import { ServiceDetailPage } from "@/components/pages/serviceDetailPage";
import { Metadata } from "next";

// Define the params type
interface ServiceDetailParams {
  serviceId: string;
}

// Define the page props type
interface ServiceDetailPageProps {
  params: ServiceDetailParams;
}

export default function ServiceDetail({ params }: ServiceDetailPageProps) {
  return <ServiceDetailPage serviceId={params.serviceId} />;
}

// Generate static params for better SEO
export async function generateStaticParams(): Promise<ServiceDetailParams[]> {
  return [
    { serviceId: 'web-development' },
    { serviceId: 'seo-services' },
    { serviceId: 'digital-marketing' },
    { serviceId: 'branding' },
    { serviceId: 'ui-ux-design' },
    { serviceId: 'mobile-development' },
    { serviceId: 'ecommerce-solutions' },
    { serviceId: 'analytics-reporting' }
  ];
}

// Generate metadata for each service
export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const serviceId = params.serviceId;
  
  const serviceTitles: Record<string, string> = {
    'web-development': 'Web Development Services',
    'seo-services': 'SEO Services',
    'digital-marketing': 'Digital Marketing Services',
    'branding': 'Branding Services',
    'ui-ux-design': 'UI/UX Design Services',
    'mobile-development': 'Mobile Development Services',
    'ecommerce-solutions': 'E-commerce Solutions',
    'analytics-reporting': 'Analytics & Reporting Services'
  };
  
  return {
    title: serviceTitles[serviceId] || 'Service Details',
    description: 'Professional digital services to help your business grow and succeed online.'
  };
}