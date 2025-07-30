import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    features: { title: string }[];
    technologies: { name: string }[];
    iconBg: string;
    iconColor: string;
  };
  index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <div
      className="opacity-0 animate-slide-up [animation-fill-mode:forwards]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link
        href={`/services/${service.id}`}
        className="block group rounded-xl bg-white dark:bg-gray-800 p-5 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-xl transition-all duration-300"
      >
        <div
          className={`inline-flex items-center justify-center p-3 rounded-lg mb-4 ${service.iconBg} ${service.iconColor}`}
        >
          {service.icon}
        </div>

        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {service.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {service.description.split(".")[0]}
        </p>

        <ul className="space-y-1 mb-4">
          {service.features.slice(0, 4).map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="flex items-center text-sm text-gray-600 dark:text-gray-400"
            >
              <Check className="w-4 h-4 text-green-500 mr-2" />
              {feature.title}
            </li>
          ))}
        </ul>

        <div className="pt-2 border-t border-gray-100 dark:border-gray-700 mb-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            Technologies:
          </p>
          <div className="flex flex-wrap gap-2">
            {service.technologies.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md text-gray-600 dark:text-gray-300"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:text-primary-700 transition-colors duration-300">
            Learn More
          </span>
          <ArrowRight className="w-4 h-4 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </Link>
    </div>
  );
};
