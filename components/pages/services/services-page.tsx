// app/services/page.tsx or pages/services.tsx (depending on your setup)
import { ServicesSection } from "@/components/pages/home/components/ServicesSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { process } from "@/lib/mainData";
import { Card, CardContent } from "@/components/ui/card";
import { useServices } from "@/hooks/useServices"; // updated to server-safe function

const ServicesPage = async () => {
  const services = await useServices();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-primary-100 mb-8">
            Comprehensive digital solutions to help your business grow and succeed in the digital landscape. 
            From web development to digital marketing, we've got you covered.
          </p>
          <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
            <Link href="/contact">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection
      hideViewAllSection={false}
        services={services}
        title="What We Do"
        desc="We offer a comprehensive suite of digital services designed to help your business thrive online."
      />

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 opacity-0 animate-slide-up [animation-fill-mode:forwards]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We follow a proven process to ensure every project is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-800 hidden md:block" />
            <div className="space-y-12">
              {process.map((step, index) => (
                <div
                  key={step.step}
                  className={`flex items-center opacity-0 animate-slide-up [animation-fill-mode:forwards] ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="text-primary-600 dark:text-primary-400 font-bold text-lg mb-2">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-primary-600 rounded-full items-center justify-center text-white font-bold absolute left-1/2 transform -translate-x-1/2 shadow-lg">
                    {step.step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-primary-100 mb-8">
            Let's discuss your project and see how we can help you achieve your digital goals. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
