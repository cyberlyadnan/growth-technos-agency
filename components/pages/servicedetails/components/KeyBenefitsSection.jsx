import { Check } from 'lucide-react';


export function KeyBenefitsSection({ service }) {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Why Choose Our {service.title}?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here's what makes our service stand out from the competition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-12 lg:px-20">
          {service.keyBenefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <Check className="w-6 h-6 text-success-500 flex-shrink-0" />
              <span className="text-gray-900 dark:text-white font-medium">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
