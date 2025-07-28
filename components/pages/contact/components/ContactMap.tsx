"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Visit Our Office</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We'd love to meet you in person. Stop by our office for a coffee and a chat.
          </p>
        </motion.div>

        {/* Map Container */}
        <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 shadow-lg">

          {/* 🔳 Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

          {/* 🧭 Address Card (Original Design Preserved) */}
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white p-6 rounded-lg shadow-xl max-w-xs text-center">
            <MapPin className="w-10 h-10 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <p>123 Business Street, City, State 12345</p>
            <p className="text-sm opacity-80 mt-2">We’re here Mon–Fri, 8am–6pm</p>
          </div>

          {/* 🗺 Map Iframe */}
          <iframe
            className="w-full h-full absolute top-0 left-0"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197779211713!2d-122.42067958468142!3d37.77902697975707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5e1135e7%3A0x9b1e0e9091f5efdb!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1625678999999!5m2!1sen!2sus"
          />
        </div>
      </div>
    </section>
  );
}
