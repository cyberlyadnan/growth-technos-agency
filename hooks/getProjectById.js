// lib/admin/getProjectById.js
import { adminDb } from "@/lib/firebase-admin";

export async function getProjectById(projectId) {
  // console.log("Project id we getting",projectId)
  const doc = await adminDb.collection("projects").doc(`${projectId}`).get();

  if (!doc.exists) return null;

  // console.log("data from project",...doc.data())
  return {
    id: doc.id,
    ...doc.data(),
  };
}
