import Link from "next/link";
import { Monitor, Check, ArrowRight, Smartphone, ShoppingCart, BarChart2, Headphones, Cloud, Code, Palette, Layout } from "lucide-react";

interface ServiceCardProps {
  service: {
    id: string;
    // icon: React.ReactNode;
    icon:string;
    title: string;
    description: string;
    features: { title: string }[];
    technologies: { name: string }[];
    iconBg: string;
    iconColor: string;
  };
  index: number;
}

const iconComponents = {
 Monitor: Monitor,
  Smartphone: Smartphone,
  ShoppingCart: ShoppingCart,
  BarChart2: BarChart2,
  Headphones: Headphones,
  Cloud: Cloud,
  Code: Code,
  Palette: Palette,
};

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
const IconComponent = iconComponents[service.icon as keyof typeof iconComponents] || Monitor;


  return (
     <div
      className="opacity-0 animate-slide-up [animation-fill-mode:forwards] h-full"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link
        href={`/services/${service.id}`}
        className="group rounded-xl bg-card p-5 border border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      >
        {/* Icon container with dynamic classes */}
        <div
          className={`inline-flex items-start justify-start p-3 rounded-lg mb-4 w-fit ${service.iconBg} ${service.iconColor}`}
        >
          <IconComponent className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-semibold mb-2 text-foreground">
          {service.title}
        </h3>

        <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
          {service.description.split(".")[0]}
        </p>

        <ul className="space-y-1 mb-4 flex-grow">
          {service.features.slice(0, 4).map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="flex items-center text-sm text-foreground/70"
            >
              <Check className="w-4 h-4 text-primary mr-2" />
              {feature.title}
            </li>
          ))}
        </ul>

        <div className="pt-2 border-t border-border/50 mb-4">
          <p className="text-xs text-foreground/60 mb-2">
            Technologies:
          </p>
          <div className="flex flex-wrap gap-2">
            {service.technologies.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border/50 mt-auto">
          <span className="text-sm font-medium text-primary group-hover:text-accent transition-colors duration-300">
            Learn More
          </span>
          <ArrowRight className="w-4 h-4 text-primary group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </Link>
    </div>
  );
};