import React from 'react';
import Image from 'next/image';
import { AnimatedDivider } from '@/components/ui/AnimatedDivider';
import { Sparkles } from 'lucide-react';

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
    <section className="relative py-20 bg-gradient-to-b from-background/95 to-background overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title with slide-up animation */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Technologies We Use
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to deliver the best results
          </p>
        </div>

        {/* Cards grid with staggered animations */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {service.technologies.map((tech, index) => {
            const colorScheme = getColorScheme(tech.name);
            const levelBadge = getLevelBadge(tech.level);

            return (
              <div
                key={index}
                className="group relative rounded-xl backdrop-blur-sm bg-card/60 border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Background glow animation */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />
                
                {/* Corner Indicators */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                
                <div className="relative p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {/* Logo with float animation on hover */}
                      <div className="relative w-12 h-12 rounded-lg bg-primary/10 p-2 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Image 
                          src={getImageUrl(tech.name) || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg'}
                          alt={`${tech.name} logo`}
                          width={32}
                          height={32}
                          className="object-contain"
                          unoptimized={true}
                        />
                        <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {tech.name}
                        </h3>
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${levelBadge.color}`}>
                          {levelBadge.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progress bar with grow animation */}
                  <div className="overflow-hidden">
                    <div className="flex items-center justify-between text-xs text-foreground/60 mb-2">
                      <span>Proficiency</span>
                      <span className="font-medium text-foreground">{tech.level}%</span>
                    </div>
                    
                    <div className="relative h-2.5 bg-background/50 rounded-full overflow-hidden border border-border/30">
                      <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme} opacity-20 blur-sm`} />
                      
                      <div
                        className={`h-full bg-gradient-to-r ${colorScheme} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                        style={{ 
                          width: `${tech.level}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Scan Line Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats with fade-in animation */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:scale-105 transition-all">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {Math.round(service.technologies.reduce((sum, tech) => sum + tech.level, 0) / service.technologies.length)}%
              </div>
              <div className="text-xs text-foreground/60 font-medium">Average</div>
            </div>
            <div className="w-px h-8 bg-border/50" />
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {service.technologies.filter(tech => tech.level >= 90).length}
              </div>
              <div className="text-xs text-foreground/60 font-medium">Expert</div>
            </div>
            <div className="w-px h-8 bg-border/50" />
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {service.technologies.length}
              </div>
              <div className="text-xs text-foreground/60 font-medium">Technologies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <AnimatedDivider />
      </div>
    </section>
  );
}