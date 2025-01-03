'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern online store built with Next.js and Shopify',
    image: '/placeholder-project-1.jpg',
    category: 'e-commerce',
    technologies: ['Next.js', 'Shopify', 'Tailwind CSS'],
    link: '/portfolio/ecommerce-platform',
  },
  {
    id: 2,
    title: 'Corporate Website',
    description: 'A responsive website for a financial services company',
    image: '/placeholder-project-2.jpg',
    category: 'static',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: '/portfolio/corporate-website',
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'A custom blog platform with CMS integration',
    image: '/placeholder-project-3.jpg',
    category: 'cms',
    technologies: ['Next.js', 'Sanity.io', 'Vercel'],
    link: '/portfolio/blog-platform',
  },
  {
    id: 4,
    title: 'Restaurant Website',
    description: 'A dynamic website for a local restaurant',
    image: '/placeholder-project-4.jpg',
    category: 'cms',
    technologies: ['WordPress', 'PHP', 'MySQL'],
    link: '/portfolio/restaurant-website',
  },
];

export default function Portfolio() {
  const categories = ['all', 'static', 'cms', 'e-commerce'];
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter(
    project => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">My Portfolio</h1>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full capitalize ${
              activeFilter === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            } transition-colors`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            className="group"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-blue-600 font-medium">
                  View Details →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
