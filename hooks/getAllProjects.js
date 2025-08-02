import { adminDb } from "@/lib/firebase-admin";

// Function to fetch all projects from Firebase
export const getAllProjects = async () => {
  if (!adminDb) {
    throw new Error("❌ Firebase Admin SDK is not initialized.");
  }

  const snapshot = await adminDb.collection("projects").get();

  const projects = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return projects;
};
