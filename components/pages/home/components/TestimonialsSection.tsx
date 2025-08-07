
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/lib/mainData';



export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 md:px-[10%] bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Don’t just take our word for it. Hear what satisfied clients say about partnering with us.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="h-full shadow-md border border-gray-200 dark:border-gray-700">
            <CardContent className="p-6 flex flex-col h-full">
              <Quote className="w-8 h-8 text-accent-500 mb-4" />

              <p className="text-gray-700 dark:text-gray-300 mb-6 italic text-[16px] leading-relaxed">
                “{testimonial.content}”
              </p>

              <div className="mt-auto">
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
