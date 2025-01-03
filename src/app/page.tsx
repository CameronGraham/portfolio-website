'use client';

import Link from 'next/link';

const services = [
  {
    title: 'Static Sites',
    description: 'Simple, fast-loading sites with fixed content, ideal for small businesses, portfolios, or personal websites.',
    priceRange: '£300–£1,000',
    features: [
      'Responsive design',
      'SEO optimization',
      'Performance optimization',
      'Contact forms',
      'Analytics integration',
    ],
  },
  {
    title: 'CMS-Based Websites',
    description: 'Websites with a Content Management System, allowing clients to update content without technical knowledge.',
    priceRange: '£800–£2,500+',
    features: [
      'Custom CMS integration',
      'Content management system',
      'User management',
      'Advanced SEO features',
      'Regular content updates',
    ],
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Full-featured online stores with secure payment processing and inventory management.',
    priceRange: '£1,500–£5,000+',
    features: [
      'Product management',
      'Secure payment gateway',
      'Inventory tracking',
      'Order management',
      'Customer accounts',
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Transforming Ideas into Digital Reality
            </h1>
            <p className="py-6 text-xl md:text-2xl">
              I create beautiful, high-performance websites that help businesses grow and succeed in the digital world.
            </p>
            <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Services & Pricing</h2>
            <p className="text-xl opacity-70 max-w-3xl mx-auto">
              From simple static websites to complex e-commerce solutions, I provide a range of services to meet your digital needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="card-body">
                  <h3 className="card-title text-2xl mb-4">{service.title}</h3>
                  <p className="opacity-70 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-primary mb-2">{service.priceRange}</p>
                    <p className="opacity-60">Starting from</p>
                  </div>
                  <ul className="space-y-3 mb-8">
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
                  <div className="card-actions justify-end">
                    <Link href="/services" className="btn btn-outline btn-block">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="link link-primary inline-flex items-center text-lg"
            >
              View detailed pricing and maintenance plans
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero bg-primary text-primary-content py-20">
        <div className="hero-content text-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let's work together to create something amazing. Get in touch to discuss your project requirements.
            </p>
            <Link href="/contact" className="btn btn-outline btn-white">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
