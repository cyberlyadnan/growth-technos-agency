// lib/admin/getProjectById.js
import { adminDb } from "@/lib/firebase-admin";

export async function getProjectById(projectId) {
  const doc = await adminDb.collection("projects").doc(projectId).get();

  if (!doc.exists) return null;

  return {
    id: doc.id,
    ...doc.data(),
  };
}
