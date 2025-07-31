// hooks/useServices.ts
import { adminDb } from "@/lib/firebase-admin";

export type Service = {
  id: string;
  title: string;
  description: string;
  iconName: string;
};

export const useServices = async () => {
  if (!adminDb) {
    throw new Error("❌ Firebase Admin SDK is not initialized.");
  }

  const snapshot = await adminDb.collection("services").get();

  const services: Service[] = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Service, "id">),
  }));

  return services;
};

