

export function TechnologiesSection({ service }) {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technologies We Use
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to deliver the best results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {service.technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <span className="font-semibold text-gray-900 dark:text-white">{tech.name}</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${tech.level}%`, transitionDelay: `${index * 100}ms` }}
                  />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 w-12 text-right">
                  {tech.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
