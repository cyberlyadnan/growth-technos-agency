// app/services/[serviceId]/page.tsx
import ServiceDetailPage from "@/components/pages/servicedetails/serviceDetailPage";
import { Metadata } from "next";
import { adminDb } from "@/lib/firebase-admin";

interface ServiceDetailParams {
  serviceId: string;
}

interface ServiceDetailPageProps {
  params: Promise<ServiceDetailParams>;
}

export default async function ServiceDetail({ params }: ServiceDetailPageProps) {
  const { serviceId } = await params;
  return <ServiceDetailPage serviceId={serviceId} />;
}

// 🧠 Dynamically generate paths at build time
export async function generateStaticParams(): Promise<ServiceDetailParams[]> {
  if (!adminDb) return [];
  const snapshot = await adminDb.collection("services").get();
  return snapshot.docs.map((d) => {
    const data = d.data();
    return { serviceId: data.slug || d.id };
  });
}

// 🧠 Generate SEO metadata per page
export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { serviceId } = await params;
  if (!adminDb) {
    return { title: "Service | Growth Technos", description: "Explore our services." };
  }
  const bySlug = await adminDb
    .collection("services")
    .where("slug", "==", serviceId)
    .limit(1)
    .get();

  let service: Record<string, unknown> | null = null;
  if (!bySlug.empty) {
    service = bySlug.docs[0].data() as Record<string, unknown>;
  } else {
    const docRef = await adminDb.collection("services").doc(serviceId).get();
    if (docRef.exists) service = docRef.data() as Record<string, unknown>;
  }

  if (!service) {
    return {
      title: "Service Not Found | Growth Technos",
      description: "Requested service was not found in our database.",
    };
  }

  const desc =
    typeof service.metaDescription === "string"
      ? service.metaDescription
      : typeof service.description === "string"
        ? service.description
        : `Explore ${String(service.title || "our professional service")} by Growth Technos. Expert digital solutions for your business.`;
  return {
    title: `${service.metaTitle || service.title || "Service"} - Growth Technos`,
    description: desc,
    keywords: [
      typeof service.title === "string" ? service.title.toLowerCase() : "",
      "digital services",
      "web development",
      "SEO services",
      "digital marketing",
    ],
    openGraph: {
      title: `${service.metaTitle || service.title || "Service"} - Growth Technos`,
      description: desc,
      url: `https://growthtechnos.com/services/${serviceId}`,
      siteName: "Growth Technos",
      type: "website",
      images: typeof service.image === "string" ? [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: typeof service.title === "string" ? service.title : "Service",
        }
      ] : [
        {
          url: "/og-services.jpg",
          width: 1200,
          height: 630,
          alt: typeof service.title === "string" ? service.title : "Service",
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.metaTitle || service.title || "Service"} - Growth Technos`,
      description: desc,
      images: typeof service.image === "string" ? [service.image] : ["/og-services.jpg"],
    },
    alternates: {
      canonical: `https://growthtechnos.com/services/${serviceId}`,
    },
  };
}
