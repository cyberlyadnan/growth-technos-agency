import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  getDocs,
  collection,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { projectsss } from "./projects";

// // Firebase config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Init Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// 👇 Manually list and read known collections
const collectionNames = ["services", "projects", "inquiries"]; // Add your known collections here

export const listAllCollections = async () => {
  try {
    const results = {};

    for (const name of collectionNames) {
      const snapshot = await getDocs(collection(db, "projects"));
      results[name] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    }

    console.log("Fetched Collections:", results);
    return results;
  } catch (error) {
    console.error("Error fetching collections:", error);
    return {};
  }
};

// Database, auth, storage

// Nextjs

// Nodejs/express

// Backend
// Firebase







export const resetAndPushServices = async (projectsss) => {
  const servicesCol = collection(db, 'projects');

  try {
    // Step 1: Delete all existing documents
    const snapshot = await getDocs(servicesCol);
    const deletePromises = snapshot.docs.map((docSnap) =>
      deleteDoc(doc(db, 'projects', docSnap.id))
    );
    await Promise.all(deletePromises);
    console.log('All existing documents deleted from "services" collection.');

    // Step 2: Add new services
    const addPromises = Object.entries(projectsss).map(([key, value]) =>
      setDoc(doc(db, 'projects', key), value)
    );
    await Promise.all(addPromises);
    console.log('New services added successfully.');
  } catch (error) {
    console.error('Error resetting services collection:', error);
  }
};










function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')      // Replace spaces with -
    .replace(/[^\w-]+/g, '')   // Remove all non-word chars
    .replace(/--+/g, '-');     // Replace multiple - with single -
}



// export async function migrateProjectsToSlugIDs() {
//   const snapshot = await getDocs(collection(db, "projects"));

//   for (const docSnap of snapshot.docs) {
//     const data = docSnap.data();

//     const slug = data?.title
//       ?.toLowerCase()
//       .replace(/\s+/g, "-")
//       .replace(/[^\w-]+/g, "");

//     console.log("Migrating:", slug);
//     // updateDoc or setDoc here if needed
//   }
// }










export async function resetProjectsCollection() {
  const projectsCol = collection(db, "projects");

  // Step 1 — Delete existing documents
  const snapshot = await getDocs(projectsCol);
  for (const docSnap of snapshot.docs) {
    await deleteDoc(docSnap.ref);
    console.log(`Deleted: ${docSnap.id}`);
  }

  // Step 2 — Recreate documents with proper IDs
  for (const project of projectsss) {
    await setDoc(doc(db, "projects", project.id), project);
    console.log(`Created: ${project.id}`);
  }

  console.log("✅ Projects collection reset successfully!");
}



