import React from "react";

const OurClients = () => {
  const firstRowLogos = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "PhonePe", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2df0bf1e0ae180db48fa1_Frame-4.avif" },
    { name: "Zomato", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2df0bf0f503224b96376d_Frame-5.avif" },
    { name: "Coinbase", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2df0be84f15e44d9e75bf_Frame-6.avif" },
    { name: "PayTM", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e14856723c31a3f37d21_paytm.svg" },
    { name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Meta", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2df0b02c2d809de1d3fe9_Frame-1.avif" },
  ];

  const secondRowLogos = [
    { name: "CRED", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1da323e091750829be2_Frame-7.avif" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
    { name: "Stripe", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1d86e362dd649c2c911_Frame.avif" },
    { name: "Netflix", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1d89a0557fcd86344f0_Frame-1.avif" },
    { name: "Flipkart", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1d802c2d809de1ec43c_flipkart.avif" },
    { name: "RazorPay", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1d9df9ed25fc882efeb_Frame-3.avif" },
    { name: "Visa", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1da02c2d809de1ec50b_Frame-4.avif" },
    { name: "Atlassian", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1d85e3feca9b3b0f06e_Frame-5.avif" },
    { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Who We <span className="text-primary-600">Work</span> with
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-300 max-w-3xl mx-auto">
            Our clients inspire us to push boundaries. Together, we’ve built
            high-performance websites, apps, and platforms that solve real
            business challenges.
          </p>
        </div>

        {/* First Row */}
        <div className="relative mb-8">
          <div className="flex animate-marquee-right space-x-12">
            {[...firstRowLogos, ...firstRowLogos].map((client, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 flex items-center justify-center w-28 h-14">
                <img src={client.logo} alt={client.name} className="mx-auto mb-2 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="relative">
          <div className="flex animate-marquee-left space-x-12">
            {[...secondRowLogos, ...secondRowLogos].map((client, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 flex items-center justify-center w-28 h-14">
                <img src={client.logo} alt={client.name} className="mx-auto mb-2 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
