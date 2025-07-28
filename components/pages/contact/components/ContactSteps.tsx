"use client";
import { motion } from "framer-motion";

export default function ContactSteps() {
  const steps = [
    {
      number: "1",
      title: "Tell us about your project",
      desc: "Share your ideas, goals, and requirements"
    },
    {
      number: "2",
      title: "We'll schedule a consultation",
      desc: "Free 30-minute consultation to discuss your needs"
    },
    {
      number: "3",
      title: "Get a custom proposal",
      desc: "Detailed proposal with timeline and pricing"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Let's Start a Conversation
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>
      <div className="space-y-6">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-primary-600 dark:text-primary-400 font-bold text-sm">{s.number}</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
