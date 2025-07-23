import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  getDocs,
  collection,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase config
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
const collectionNames = ['services', 'projects', 'inquiries']; // Add your known collections here

export const listAllCollections = async () => {
  try {
    const results = {};

    for (const name of collectionNames) {
      const snapshot = await getDocs(collection(db, name));
      results[name] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
    }

    console.log('Fetched Collections:', results);
    return results;
  } catch (error) {
    console.error('Error fetching collections:', error);
    return {};
  }
};

// Run it
