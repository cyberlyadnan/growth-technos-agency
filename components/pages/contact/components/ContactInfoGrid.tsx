import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  { 
    icon: Mail, 
    title: "Email", 
    content: "info@growthtechnos.com", 
    description: "Send us an email anytime!", 
    link: "mailto:info@growthtechnos.com" 
  },
  { 
    icon: Phone, 
    title: "Phone", 
    content: "+91 98979 21038, +91 9756896250", 
    description: "Mon-Saturday from 8am to 6pm", 
    link: ["tel:+919897921038", "tel:+919756896250"] 
  },
  // { 
  //   icon: MessageCircle, 
  //   title: "WhatsApp", 
  //   content: "+91 98979 21038", 
  //   description: "Chat with us on WhatsApp", 
  //   link: "https://wa.me/919897921038" 
  // },
  { 
    icon: MapPin, 
    title: "Office", 
    content: "Noida Sector 62, Uttar Pradesh, India", 
    description: "Come say hello at our office" 
  },
  { 
    icon: Clock, 
    title: "Working Hours", 
    content: "Monday - Friday: 8am - 6pm", 
    description: "Saturday: 9am - 4pm" 
  }
];

export default function ContactInfoGrid() {
  return (
    <section className="py-16 px-4 md:px-[2%] bg-white dark:bg-gray-800">
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contactInfo.map((info, i) => (
          <div
            key={info.title}
            className={`animate-slide-up [animation-fill-mode:both] [animation-delay:${i * 100}ms]`}
          >
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {info.title}
                </h3>
                
                {/* Handle clickable links */}
                {Array.isArray(info.link) ? (
                  <div className="flex flex-row justify-center gap-1">
                    {info.link.map((l, idx) => (
                      <Link
                        key={idx}
                        href={l}
                        className="text-gray-900 text-sm dark:text-white font-medium hover:underline"
                      >
                        {info.content.split(",")[idx]?.trim()}
                      </Link>
                    ))}
                  </div>
                ) : info.link ? (
                  <Link
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-white font-medium hover:underline"
                  >
                    {info.content}
                  </Link>
                ) : (
                  <p className="text-gray-900 text-sm dark:text-white font-medium mb-1">
                    {info.content}
                  </p>
                )}

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {info.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
