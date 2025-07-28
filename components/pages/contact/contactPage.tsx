"use client";

import ContactForm from "./components/ContactForm";
import ContactHero from "./components/ContactHero";
import ContactInfoGrid from "./components/ContactInfoGrid";
import ContactMap from "./components/ContactMap";
import ContactSteps from "./components/ContactSteps";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <ContactHero />
      <ContactInfoGrid />
      <section className="py-20 px-4 md:px-[5%] bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16">
          <ContactSteps />
          <ContactForm />
        </div>
      </section>
      <ContactMap />
    </div>
  );
}
