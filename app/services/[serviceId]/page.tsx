// app/services/[serviceId]/page.tsx
import ServiceDetailPage from "@/components/pages/servicedetails/serviceDetailPage";
import { Metadata } from "next";
import { db } from "@/lib/firebase-admin";

interface ServiceDetailParams {
  serviceId: string;
}

interface ServiceDetailPageProps {
  params: ServiceDetailParams;
}

export default function ServiceDetail({ params }: ServiceDetailPageProps) {
  return <ServiceDetailPage serviceId={params.serviceId} />;
}

// 🧠 Dynamically generate paths at build time
export async function generateStaticParams(): Promise<ServiceDetailParams[]> {
  const snapshot = await db.collection("services").get();
  return snapshot.docs.map(doc => ({
    serviceId: doc.data().slug, // assuming slug is used as dynamic path
  }));
}

// 🧠 Generate SEO metadata per page
export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const snapshot = await db
    .collection("services")
    .where("slug", "==", params.serviceId)
    .limit(1)
    .get();

  if (snapshot.empty) {
    return {
      title: "Service Not Found | Growth Technos",
      description: "Requested service was not found in our database.",
    };
  }

  const service = snapshot.docs[0].data();

  return {
    title: `${service.metaTitle || service.title || "Service"} - Growth Technos`,
    description: service.metaDescription || service.description || `Explore ${service.title || "our professional service"} by Growth Technos. Expert digital solutions for your business.`,
    keywords: [
      service.title?.toLowerCase() || "",
      "digital services",
      "web development",
      "SEO services",
      "digital marketing",
    ],
    openGraph: {
      title: `${service.metaTitle || service.title || "Service"} - Growth Technos`,
      description: service.metaDescription || service.description || `Explore ${service.title || "our professional service"} by Growth Technos.`,
      url: `https://growthtechnos.com/services/${params.serviceId}`,
      siteName: "Growth Technos",
      type: "website",
      images: service.image ? [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title || "Service",
        }
      ] : [
        {
          url: "/og-services.jpg",
          width: 1200,
          height: 630,
          alt: service.title || "Service",
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.metaTitle || service.title || "Service"} - Growth Technos`,
      description: service.metaDescription || service.description || `Explore ${service.title || "our professional service"}.`,
      images: service.image ? [service.image] : ["/og-services.jpg"],
    },
    alternates: {
      canonical: `https://growthtechnos.com/services/${params.serviceId}`,
    },
  };
}
