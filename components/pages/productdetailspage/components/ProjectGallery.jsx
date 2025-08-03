// ProjectGallery.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export const ProjectGallery = ({ gallery, title }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-8">
            <div className="aspect-video relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={gallery[selectedImage]}
                alt={`${title} - Image ${selectedImage + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {gallery.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-video relative overflow-hidden rounded-lg transition-all duration-300 ${
                  selectedImage === index
                    ? "ring-4 ring-primary-500 scale-105"
                    : "hover:scale-105 opacity-70 hover:opacity-100"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={image}
                  alt={`${title} - Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};