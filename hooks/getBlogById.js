import { adminDb } from "@/lib/firebase-admin";

export async function getBlogById(blogId) {
  if (!adminDb) {
    throw new Error("❌ Firebase Admin SDK is not initialized.");
  }

  const doc = await adminDb.collection("blogs").doc(blogId).get();

  if (!doc.exists) return null;

  return {
    id: doc.id,
    ...doc.data(),
  };
}

