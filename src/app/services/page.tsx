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
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Services & Pricing</h1>
      
      {/* Services Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">{service.title}</h2>
              <p className="opacity-70 mb-6">{service.description}</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">Key Features:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-success mr-2"
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

                <div className="space-y-2 opacity-70">
                  <p><span className="font-bold">Technologies:</span> {service.examples}</p>
                  <p><span className="font-bold">Price Range:</span> {service.priceRange}</p>
                  <p><span className="font-bold">Hosting:</span> {service.hosting}</p>
                  <p><span className="font-bold">Maintenance:</span> {service.maintenancePlan}</p>
                  <p><span className="font-bold">Ideal for:</span> {service.idealFor}</p>
                </div>
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
              className={`card bg-base-100 shadow-xl ${
                plan.recommended ? 'border-2 border-primary' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 right-4">
                  <div className="badge badge-primary">Recommended</div>
                </div>
              )}
              
              <div className="card-body">
                <h3 className="card-title text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="opacity-70 ml-1">{plan.period}</span>
                </div>
                <p className="opacity-70 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-success mr-2"
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
                
                <div className="card-actions justify-end">
                  <Link
                    href="/contact"
                    className={`btn btn-block ${
                      plan.recommended
                        ? 'btn-primary'
                        : 'btn-outline'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="hero bg-base-200 rounded-box p-8">
        <div className="hero-content text-center">
          <div>
            <p className="text-xl mb-6">Need a custom solution? Let's discuss your project requirements.</p>
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
