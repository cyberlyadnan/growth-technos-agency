import { adminDb } from "@/lib/firebase-admin";

// Function to fetch all blogs from Firebase
export const getAllBlogs = async () => {
  if (!adminDb) {
    throw new Error("❌ Firebase Admin SDK is not initialized.");
  }

  const snapshot = await adminDb.collection("blogs").orderBy("createdAt", "desc").get();

  const blogs = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return blogs;
};

