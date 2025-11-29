import { adminDb } from "@/lib/firebase-admin";

export async function getBlogBySlug(slug) {
  if (!adminDb) {
    throw new Error("❌ Firebase Admin SDK is not initialized.");
  }

  const snapshot = await adminDb
    .collection("blogs")
    .where("slug", "==", slug)
    .limit(1)
    .get();

  if (snapshot.empty) return null;

  const doc = snapshot.docs[0];
  return {
    id: doc.id,
    ...doc.data(),
  };
}

