// ProjectTestimonial.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ProjectTestimonialProps {
  testimonial: {
    text: string;
    avatar: string;
    author: string;
    position: string;
  };
}

export const ProjectTestimonial: React.FC<ProjectTestimonialProps> = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-primary-200 dark:border-primary-500/20">
      <CardContent className="p-8">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-warning-400 fill-current" />
          ))}
        </div>
        <blockquote className="text-xl text-gray-700 dark:text-gray-200 mb-6 italic">
          "{testimonial.text}"
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden relative">
            <Image
              src={testimonial.avatar}
              alt={testimonial.author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);
