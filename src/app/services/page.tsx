'use client';

import Link from 'next/link';

const services = [
  {
    title: 'Static Sites',
    description: 'Simple, fast-loading sites with fixed content, ideal for small businesses, portfolios, or personal websites.',
    features: [
      'Responsive design',
      'SEO optimization',
      'Performance optimization',
      'Contact forms',
      'Analytics integration',
    ],
    idealFor: 'Small businesses, personal brands, and portfolios',
    examples: 'HTML, CSS, JavaScript (no backend)',
    priceRange: '£300–£1,000',
    hosting: 'Platforms like Vercel or Netlify (free/low-cost for static sites)',
    maintenancePlan: '£15–£30/month',
  },
  {
    title: 'CMS-Based Websites',
    description: 'Websites with a Content Management System, allowing clients to update content without technical knowledge.',
    features: [
      'Custom CMS integration',
      'Content management system',
      'User management',
      'Advanced SEO features',
      'Regular content updates',
      'Multiple user roles',
    ],
    idealFor: 'Medium-sized businesses, blogs, and content-heavy websites',
    examples: 'WordPress, Webflow, or Strapi',
    priceRange: '£800–£2,500+',
    hosting: 'WordPress Hosting (e.g., SiteGround or Kinsta) or cloud hosting',
    maintenancePlan: '£50–£150/month',
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Full-featured online stores with secure payment processing and inventory management.',
    features: [
      'Product management',
      'Secure payment gateway',
      'Inventory tracking',
      'Order management',
      'Customer accounts',
      'Shopping cart',
      'Multiple payment methods',
    ],
    idealFor: 'Online retailers, digital products, and subscription services',
    examples: 'Shopify, WooCommerce, or custom solutions (e.g., Next.js + Snipcart)',
    priceRange: '£1,500–£5,000+',
    hosting: 'Shopify (built-in hosting) or WooCommerce hosting',
    maintenancePlan: '£150–£300/month',
  },
];

const maintenancePlans = [
  {
    name: 'Basic Plan',
    price: '£15–£30',
    period: '/month',
    description: 'Perfect for static websites that need minimal maintenance',
    features: [
      'Regular software updates',
      'Security monitoring',
      'Basic hosting included',
      'Monthly performance reports',
      'Email support',
    ],
    recommended: false,
  },
  {
    name: 'Advanced Plan',
    price: '£50–£150',
    period: '/month',
    description: 'Ideal for CMS-based websites requiring regular updates',
    features: [
      'CMS updates and maintenance',
      'Daily backups',
      'Premium hosting included',
      'Weekly performance reports',
      'Priority email & phone support',
      'Monthly content updates',
      'SEO monitoring',
    ],
    recommended: true,
  },
  {
    name: 'E-Commerce Plan',
    price: '£150–£300',
    period: '/month',
    description: 'Comprehensive support for online stores',
    features: [
      'Full e-commerce platform maintenance',
      'Real-time backup systems',
      'High-performance hosting',
      'Daily performance monitoring',
      '24/7 emergency support',
      'Payment gateway maintenance',
      'Inventory system updates',
      'Security patches & updates',
    ],
    recommended: false,
  },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Services & Pricing</h1>
      
      {/* Services Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Key Features:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <p><span className="font-bold">Technologies:</span> {service.examples}</p>
                <p><span className="font-bold">Price Range:</span> {service.priceRange}</p>
                <p><span className="font-bold">Hosting:</span> {service.hosting}</p>
                <p><span className="font-bold">Maintenance:</span> {service.maintenancePlan}</p>
                <p><span className="font-bold">Ideal for:</span> {service.idealFor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Maintenance Plans */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Maintenance & Hosting Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {maintenancePlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.recommended ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-blue-500 text-white">
                    Recommended
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-blue-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.recommended
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-xl mb-6">Need a custom solution? Let's discuss your project requirements.</p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
