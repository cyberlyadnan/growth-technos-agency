import React from 'react';
import Image from 'next/image';

export function TechnologiesSection({ service }) {
  // Image mapping for common technologies
  const getImageUrl = (techName) => {
    const imageMap = {
      // Web Development Technologies
      'HTML5 / CSS3': 'https://cdn.simpleicons.org/html5/E34F26',
      'JavaScript': 'https://cdn.simpleicons.org/javascript/F7DF1E',
      'React.js': 'https://cdn.simpleicons.org/react/61DAFB',
      'Next.js': 'https://cdn.simpleicons.org/next.js/000000',
      'WordPress': 'https://cdn.simpleicons.org/wordpress/21759B',
      'WooCommerce': 'https://cdn.simpleicons.org/woocommerce/96588A',
      'Shopify': 'https://cdn.simpleicons.org/shopify/7AB55C',
      'PHP / Laravel': 'https://cdn.simpleicons.org/laravel/FF2D20',

      // Mobile App Development Technologies
      'Flutter': 'https://cdn.simpleicons.org/flutter/02569B',
      'React Native': 'https://cdn.simpleicons.org/react/61DAFB',
      'Kotlin': 'https://cdn.simpleicons.org/kotlin/7F52FF',
      'Swift': 'https://cdn.simpleicons.org/swift/F05138',
      'Firebase': 'https://cdn.simpleicons.org/firebase/FFCA28',
      'Node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',
      'MongoDB': 'https://cdn.simpleicons.org/mongodb/47A248',

      // E-Commerce Technologies
      'Shopify': 'https://cdn.simpleicons.org/shopify/7AB55C',
      'WooCommerce': 'https://cdn.simpleicons.org/woocommerce/96588A',
      'Magento': 'https://cdn.simpleicons.org/magento/EE672F',
      'Stripe': 'https://cdn.simpleicons.org/stripe/008CDD',
      'Razorpay': 'https://cdn.simpleicons.org/razorpay/0C2451',
      'PayPal': 'https://cdn.simpleicons.org/paypal/00457C',
      'MySQL / Firebase': 'https://cdn.simpleicons.org/mysql/4479A1',

      // Digital Marketing Technologies
      'Google Ads': 'https://cdn.simpleicons.org/googleads/4285F4',
      'Google Analytics & GA4': 'https://cdn.simpleicons.org/googleanalytics/E37400',
      'Facebook & Instagram Ads': 'https://cdn.simpleicons.org/meta/0467DF',
      'Ahrefs / SEMrush': 'https://cdn.simpleicons.org/semrush/FF6B35',
      'Mailchimp': 'https://cdn.simpleicons.org/mailchimp/FFE01B',
      'HubSpot': 'https://cdn.simpleicons.org/hubspot/FF7A59',
      'Zoho Campaigns': 'https://cdn.simpleicons.org/zoho/CC0000',

      // Cloud & DevOps Technologies
      'Amazon Web Services (AWS)': 'https://cdn.simpleicons.org/amazonaws/232F3E',
      'Google Cloud Platform (GCP)': 'https://cdn.simpleicons.org/googlecloud/4285F4',
      'Firebase': 'https://cdn.simpleicons.org/firebase/FFCA28',
      'NGINX / Apache': 'https://cdn.simpleicons.org/nginx/009639',
      'Docker': 'https://cdn.simpleicons.org/docker/2496ED',
      'GitHub Actions': 'https://cdn.simpleicons.org/githubactions/2088FF',
      'Vercel / Netlify': 'https://cdn.simpleicons.org/vercel/000000',
      'DigitalOcean': 'https://cdn.simpleicons.org/digitalocean/0080FF',

      // Design & Branding Tools
      'Adobe Photoshop': 'https://cdn.simpleicons.org/adobephotoshop/31A8FF',
      'Adobe Illustrator': 'https://cdn.simpleicons.org/adobeillustrator/FF9A00',
      'Figma': 'https://cdn.simpleicons.org/figma/F24E1E',
      'Blender': 'https://cdn.simpleicons.org/blender/F5792A',
      'Adobe After Effects': 'https://cdn.simpleicons.org/adobeaftereffects/9999FF',
      'Adobe Premiere Pro': 'https://cdn.simpleicons.org/adobepremierepro/9999FF',
      'Canva Pro': 'https://cdn.simpleicons.org/canva/00C4CC',
      'DaVinci Resolve': 'https://cdn.simpleicons.org/davinciresolve/1E1930',

      // Software & SaaS Development
      'Node.js / Express': 'https://cdn.simpleicons.org/nodedotjs/339933',
      'React / Next.js': 'https://cdn.simpleicons.org/next.js/000000',
      'Laravel / PHP': 'https://cdn.simpleicons.org/laravel/FF2D20',
      'Python / Django': 'https://cdn.simpleicons.org/django/092E20',
      'MongoDB / PostgreSQL': 'https://cdn.simpleicons.org/mongodb/47A248',
      'Firebase': 'https://cdn.simpleicons.org/firebase/FFCA28',
      'Stripe / Razorpay APIs': 'https://cdn.simpleicons.org/stripe/008CDD',
      'REST / GraphQL': 'https://cdn.simpleicons.org/graphql/E10098',

      // IT Support & Consulting
      'React / Next.js': 'https://cdn.simpleicons.org/next.js/000000',
      'Node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',
      'Laravel / PHP': 'https://cdn.simpleicons.org/laravel/FF2D20',
      'Python / Django': 'https://cdn.simpleicons.org/django/092E20',
      'MongoDB / MySQL': 'https://cdn.simpleicons.org/mongodb/47A248',
      'AWS / GCP': 'https://cdn.simpleicons.org/amazonaws/232F3E',
      'GitHub / Docker': 'https://cdn.simpleicons.org/docker/2496ED',
      'Jira / Trello / Slack': 'https://cdn.simpleicons.org/jira/0052CC'
    };
    return imageMap[techName] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
  };

  // Color schemes for different tech categories
  const getColorScheme = (techName) => {
    const colorMap = {
      'React': 'from-cyan-400 to-blue-500',
      'Node.js': 'from-green-400 to-emerald-500',
      'TypeScript': 'from-blue-400 to-indigo-500',
      'JavaScript': 'from-yellow-400 to-orange-500',
      'MongoDB': 'from-green-500 to-teal-500',
      'PostgreSQL': 'from-blue-500 to-purple-500',
      'MySQL': 'from-orange-400 to-red-500',
      'AWS': 'from-orange-400 to-red-500',
      'Azure': 'from-blue-400 to-cyan-500',
      'Google Cloud': 'from-red-400 to-pink-500',
      'React Native': 'from-purple-400 to-pink-500',
      'Flutter': 'from-blue-400 to-cyan-500',
      'Docker': 'from-blue-500 to-cyan-500',
      'Kubernetes': 'from-purple-500 to-indigo-500',
      'GraphQL': 'from-pink-400 to-rose-500',
      'REST API': 'from-green-400 to-blue-500',
      'Python': 'from-blue-400 to-green-500',
      'Java': 'from-orange-400 to-red-500',
      'C++': 'from-blue-500 to-purple-500',
      'PHP': 'from-purple-400 to-indigo-500',
      'Laravel': 'from-red-400 to-pink-500',
      'Django': 'from-green-500 to-teal-500',
      'Express': 'from-gray-600 to-gray-800',
      'Next.js': 'from-gray-800 to-black',
      'Vue.js': 'from-green-400 to-teal-500',
      'Angular': 'from-red-500 to-pink-500'
    };
    return colorMap[techName] || 'from-primary-400 to-primary-600';
  };

  const getLevelBadge = (level) => {
    if (level >= 90) return { label: 'Expert', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' };
    if (level >= 80) return { label: 'Advanced', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' };
    if (level >= 70) return { label: 'Proficient', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' };
    return { label: 'Learning', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' };
  };

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-blue-950/20 dark:to-indigo-950/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with slide-up animation */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            Technologies We Use
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in">
            We leverage cutting-edge technologies to deliver the best results
          </p>
        </div>

        {/* Cards grid with staggered animations */}
<div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          {service.technologies.map((tech, index) => {
            const colorScheme = getColorScheme(tech.name);
            const levelBadge = getLevelBadge(tech.level);

            return (
              <div
                key={index}
                className="relative rounded-xl backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border border-white/20 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                {/* Background glow animation */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {/* Logo with float animation on hover */}
                      <div className={`relative w-10 h-10 rounded-lg bg-white dark:bg-gray-700 p-1.5 shadow-md flex items-center justify-center hover:animate-float`}>
                         <Image 
    src={getImageUrl(tech.name) || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg'}
    // alt={`${tech.name} logo`}
    width={32}
    height={32}
    className="object-contain"
    unoptimized={true}
   
  />
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white animate-fade-in">
                          {tech.name}
                        </h3>
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${levelBadge.color} animate-scale-in`}
                          style={{ animationDelay: `${index * 100 + 200}ms` }}>
                          {levelBadge.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progress bar with grow animation */}
                  <div className="mb-2 overflow-hidden">
                    <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1 animate-fade-in">
                      <span>Proficiency</span>
                      <span className="font-medium">{tech.level}%</span>
                    </div>
                    
                    <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme} opacity-20 blur-sm`} />
                      
                      <div
                        className={`h-full bg-gradient-to-r ${colorScheme} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${tech.level}%`,
                          boxShadow: `0 0 4px rgba(59, 130, 246, 0.2)`,
                          animation: 'scaleIn 0.6s ease-out forwards',
                          animationDelay: `${index * 100 + 300}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats with fade-in animation */}
        <div className="mt-10 text-center animate-fade-in" style={{ animationDelay: `${service.technologies.length * 50 + 300}ms` }}>
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/50 shadow hover:scale-[1.02] transition-transform">
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400 animate-pulse">
                {Math.round(service.technologies.reduce((sum, tech) => sum + tech.level, 0) / service.technologies.length)}%
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Average</div>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
            <div className="text-center">
              <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400 animate-pulse">
                {service.technologies.filter(tech => tech.level >= 90).length}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Expert</div>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
            <div className="text-center">
              <div className="text-xl font-bold text-purple-600 dark:text-purple-400 animate-pulse">
                {service.technologies.length}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}