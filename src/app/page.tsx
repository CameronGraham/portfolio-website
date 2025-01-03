import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      title: 'Static Sites',
      description: 'Fast, lightweight websites perfect for small businesses and personal brands.',
      icon: '🚀',
    },
    {
      title: 'CMS-Based Websites',
      description: 'Easily manageable content-rich websites powered by modern CMS solutions.',
      icon: '📝',
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Scalable online stores with secure payment processing and inventory management.',
      icon: '🛍️',
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

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bespoke Web Development for Your Business Needs
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Building modern, scalable websites for individuals and businesses
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/portfolio"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              See My Work
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </section>
    </div>
  );
}
