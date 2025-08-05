import React from "react";


export default function ProjectHero({ title, subtitle, description }) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <h2 className="text-2xl font-semibold text-primary-100 mb-2">{subtitle}</h2>}
        {description && (
          <p className="text-lg text-primary-100">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}