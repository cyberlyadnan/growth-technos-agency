// hooks/getServiceById.ts
import { adminDb } from "@/lib/firebase-admin";

export type Service = {
  id: string;
  title?: string;
  description?: string;
  iconName?: string;
  slug?: string;
  [key: string]: unknown;
};

export async function getServiceById(serviceId: string): Promise<Service | null> {
  if (!serviceId?.trim()) return null;
  if (!adminDb) {
    console.warn("Firebase Admin SDK is not initialized");
    return null;
  }

  // Try lookup by slug first (URLs often use slug)
  const bySlug = await adminDb
    .collection("services")
    .where("slug", "==", serviceId)
    .limit(1)
    .get();

  if (!bySlug.empty) {
    const doc = bySlug.docs[0];
    return { id: doc.id, ...(doc.data() as Omit<Service, "id">) };
  }

  // Fallback: lookup by document ID
  const docRef = await adminDb.collection("services").doc(serviceId).get();
  if (!docRef.exists) return null;

  return { id: docRef.id, ...(docRef.data() as Omit<Service, "id">) };
}
