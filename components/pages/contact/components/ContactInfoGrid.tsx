"use client";
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Mail, title: "Email", content: "hello@growthtechnos.com", description: "Send us an email anytime!" },
  { icon: Phone, title: "Phone", content: "+1 (555) 123-4567", description: "Mon-Fri from 8am to 6pm" },
  { icon: MapPin, title: "Office", content: "123 Business Street, City, State 12345", description: "Come say hello at our office" },
  { icon: Clock, title: "Working Hours", content: "Monday - Friday: 8am - 6pm", description: "Saturday: 9am - 4pm" }
];

export default function ContactInfoGrid() {
  return (
    <section className="py-16 px-4 md:px-[2%] bg-white dark:bg-gray-800">
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contactInfo.map((info, i) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{info.title}</h3>
                <p className="text-gray-900 dark:text-white font-medium mb-1">{info.content}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{info.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
