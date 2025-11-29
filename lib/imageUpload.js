import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

/**
 * Optimize image before upload
 * @param {File} file - The image file to optimize
 * @param {number} maxWidth - Maximum width (default: 1200)
 * @param {number} maxHeight - Maximum height (default: 1200)
 * @param {number} quality - JPEG quality 0-1 (default: 0.8)
 * @returns {Promise<File>} - Optimized image file
 */
export async function optimizeImage(file, maxWidth = 1200, maxHeight = 1200, quality = 0.8) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        // Calculate new dimensions
        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              const optimizedFile = new File([blob], file.name, {
                type: "image/jpeg",
                lastModified: Date.now(),
              });
              resolve(optimizedFile);
            } else {
              reject(new Error("Failed to optimize image"));
            }
          },
          "image/jpeg",
          quality
        );
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Upload image to Firebase Storage
 * @param {File} file - The image file to upload
 * @param {string} path - Storage path (e.g., 'projects/images')
 * @param {boolean} optimize - Whether to optimize before upload (default: true)
 * @returns {Promise<string>} - Download URL
 */
export async function uploadImage(file, path, optimize = true) {
  try {
    let fileToUpload = file;

    // Optimize image if requested
    if (optimize && file.type.startsWith("image/")) {
      fileToUpload = await optimizeImage(file);
    }

    // Create storage reference
    const timestamp = Date.now();
    const fileName = `${timestamp}_${fileToUpload.name}`;
    const storageRef = ref(storage, `${path}/${fileName}`);

    // Upload file
    await uploadBytes(storageRef, fileToUpload);

    // Get download URL
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

/**
 * Upload multiple images
 * @param {File[]} files - Array of image files
 * @param {string} path - Storage path
 * @param {boolean} optimize - Whether to optimize before upload
 * @returns {Promise<string[]>} - Array of download URLs
 */
export async function uploadMultipleImages(files, path, optimize = true) {
  const uploadPromises = files.map((file) => uploadImage(file, path, optimize));
  return Promise.all(uploadPromises);
}

