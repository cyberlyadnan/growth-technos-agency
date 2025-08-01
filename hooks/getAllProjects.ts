import { adminDb } from "@/lib/firebase-admin";

/**
 * Fetches all projects from Firestore
 * @returns {Promise<Array>} List of project objects
 */
export async function getAllProjects() {
  const snapshot = await adminDb.collection("projects").get();

  const projects = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return projects;
}
