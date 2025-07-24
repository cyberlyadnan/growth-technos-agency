import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const getServiceById = async (serviceId: string) => {
  try {
    const serviceRef = doc(db, 'services', serviceId);
    const docSnap = await getDoc(serviceRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.warn(`No service found for ID: ${serviceId}`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
};
