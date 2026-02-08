import { adminDb } from "@/lib/firebase-admin";
import { slugify } from "@/lib/utils";

/**
 * Fetch project by slug (SEO-friendly URL) or by Firestore document ID.
 * Tries slug first, then falls back to document ID for backward compatibility.
 */
export async function getProjectById(slugOrId) {
  if (!slugOrId?.trim()) return null;
  if (!adminDb) {
    console.warn("Firebase Admin SDK is not initialized");
    return null;
  }

  const id = String(slugOrId).trim();

  // 1) Try lookup by slug first (SEO-friendly URLs)
  const bySlug = await adminDb
    .collection("projects")
    .where("slug", "==", id)
    .limit(1)
    .get();

  if (!bySlug.empty) {
    const doc = bySlug.docs[0];
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      slug: data.slug || slugify(data.title || ""),
    };
  }

  // 2) Fallback: lookup by document ID (backward compatibility)
  const docRef = await adminDb.collection("projects").doc(id).get();
  if (!docRef.exists) return null;

  const data = docRef.data();
  return {
    id: docRef.id,
    ...data,
    slug: data.slug || slugify(data.title || ""),
  };
}
