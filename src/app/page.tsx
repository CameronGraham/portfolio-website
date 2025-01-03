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
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Transforming Ideas into Digital Reality
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            I create beautiful, high-performance websites that help businesses grow and succeed in the digital world.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Services & Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple static websites to complex e-commerce solutions, I provide a range of services to meet your digital needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{service.priceRange}</p>
                  <p className="text-gray-500">Starting from</p>
                </div>
                <ul className="space-y-3 mb-8">
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
                <Link
                  href="/services"
                  className="block w-full text-center py-3 px-6 bg-gray-50 text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
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
      <section className="w-full py-20 bg-gradient-to-br from-blue-600 to-indigo-600 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's work together to create something amazing. Get in touch to discuss your project requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
