import ContactForm from "./components/ContactForm";
import ContactHero from "./components/ContactHero";
import ContactInfoGrid from "./components/ContactInfoGrid";
import ContactMap from "./components/ContactMap";
import ContactSteps from "./components/ContactSteps";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <ContactHero />
      <ContactInfoGrid />
      
      {/* Form Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated Divider at Top */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <AnimatedDivider />
        </div>

        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 dark:via-accent/10 to-primary/5 dark:to-primary/10"></div>
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto">
            <ContactSteps />
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactMap />
    </div>
  );
}
