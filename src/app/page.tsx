'use client';

import Link from 'next/link';
import Image from 'next/image';

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

const featuredWork = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern online store built with Next.js and Shopify',
    image: '/placeholder-project-1.jpg',
    link: '/portfolio/ecommerce-platform',
  },
  {
    title: 'Corporate Website',
    description: 'A responsive website for a financial services company',
    image: '/placeholder-project-2.jpg',
    link: '/portfolio/corporate-website',
  },
  {
    title: 'Blog Platform',
    description: 'A custom blog platform with CMS integration',
    image: '/placeholder-project-3.jpg',
    link: '/portfolio/blog-platform',
  },
];

const testimonials = [
  {
    quote: "Working with this developer was an absolute pleasure. They delivered our project on time and exceeded our expectations.",
    author: "Jane Smith",
    company: "Tech Solutions Ltd",
  },
  {
    quote: "Exceptional attention to detail and great communication throughout the project. Highly recommended!",
    author: "John Doe",
    company: "Creative Agency",
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
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
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

      {/* Featured Work Section */}
      <section className="w-full py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of my recent projects and see how I've helped businesses achieve their digital goals.
            </p>
          </div>
          
          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWork.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <span className="text-blue-600 font-medium">
                      View Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what my clients have to say about working with me.
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
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
