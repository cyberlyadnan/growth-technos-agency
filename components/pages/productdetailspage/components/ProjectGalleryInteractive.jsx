"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectGalleryInteractive({ images, title }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const mainImage = images[selectedImage] || images[0];
  const thumbnailImages = images.slice(0, 6); // Show max 6 thumbnails

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      {/* Main Image Display */}
      <div className="relative">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
          <Image
            src={mainImage}
            alt={`${title} - Image ${selectedImage + 1}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
          {/* Overlay with scan line effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Compact Gallery Thumbnails */}
      {thumbnailImages.length > 1 && (
        <div className="mt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
            <span className="text-sm font-medium text-foreground/60">Project Gallery</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {thumbnailImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`group relative aspect-video rounded-lg overflow-hidden border transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 ${
                  selectedImage === index
                    ? "border-primary ring-2 ring-primary/50 shadow-lg shadow-primary/20"
                    : "border-border/50 hover:border-primary/50"
                }`}
              >
                <Image
                  src={image}
                  alt={`${title} - Thumbnail ${index + 1}`}
                  fill
                  className={`object-cover transition-all duration-500 ${
                    selectedImage === index
                      ? "scale-100"
                      : "group-hover:scale-110"
                  }`}
                />
                {/* Corner Indicators */}
                <div className={`absolute top-1 left-1 w-2 h-2 border-t border-l transition-colors ${
                  selectedImage === index
                    ? "border-primary"
                    : "border-primary/30 group-hover:border-primary"
                }`}></div>
                <div className={`absolute top-1 right-1 w-2 h-2 border-t border-r transition-colors ${
                  selectedImage === index
                    ? "border-primary"
                    : "border-primary/30 group-hover:border-primary"
                }`}></div>
                <div className={`absolute bottom-1 left-1 w-2 h-2 border-b border-l transition-colors ${
                  selectedImage === index
                    ? "border-primary"
                    : "border-primary/30 group-hover:border-primary"
                }`}></div>
                <div className={`absolute bottom-1 right-1 w-2 h-2 border-b border-r transition-colors ${
                  selectedImage === index
                    ? "border-primary"
                    : "border-primary/30 group-hover:border-primary"
                }`}></div>
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 transition-opacity ${
                  selectedImage === index
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}></div>
                {/* Active Indicator */}
                {selectedImage === index && (
                  <div className="absolute inset-0 border-2 border-primary/50 rounded-lg"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

