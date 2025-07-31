// hooks/server/getServiceById.ts
import { adminDb } from "@/lib/firebase-admin";
import { Service } from "./useServices";

export async function getServiceById(serviceId: string): Promise<Service | null> {
  if (!adminDb) {
    throw new Error("Firebase Admin SDK is not initialized");
  }

  const doc = await adminDb.collection("services").doc(serviceId).get();

  if (!doc.exists) return null;

  return { id: doc.id, ...(doc.data() as Omit<Service, "id">) };
}
