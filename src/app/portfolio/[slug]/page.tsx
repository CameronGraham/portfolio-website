import Image from 'next/image';
import Link from 'next/link';

// This would typically come from a CMS or database
const projects = {
  'ecommerce-platform': {
    title: 'E-Commerce Platform',
    client: 'Fashion Retailer',
    image: '/placeholder-project-1.jpg',
    logo: '/placeholder-logo-1.jpg',
    overview: 'A modern e-commerce platform built for a fashion retailer, featuring a seamless shopping experience and robust inventory management.',
    problem: 'The client needed a scalable e-commerce solution that could handle their growing product catalog and provide a better user experience for their customers.',
    solution: 'Implemented a custom e-commerce platform using Next.js and Shopify, with features like real-time inventory tracking, advanced search, and a streamlined checkout process.',
    results: [
      'Increased conversion rate by 25%',
      'Reduced page load time by 40%',
      'Improved mobile shopping experience',
      'Simplified inventory management',
    ],
    technologies: [
      'Next.js',
      'Shopify',
      'Tailwind CSS',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
    ],
    screenshots: [
      '/placeholder-screenshot-1.jpg',
      '/placeholder-screenshot-2.jpg',
      '/placeholder-screenshot-3.jpg',
    ],
  },
  // Add more case studies as needed
};

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link
            href="/portfolio"
            className="text-blue-600 hover:underline"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <div className="mb-20">
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600">Client: {project.client}</p>
          </div>
          <div className="relative h-16 w-16">
            <Image
              src={project.logo}
              alt={`${project.client} logo`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-600">{project.overview}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Problem & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">The Problem</h2>
          <p className="text-gray-600">{project.problem}</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">The Solution</h2>
          <p className="text-gray-600">{project.solution}</p>
        </div>
      </div>

      {/* Results */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.results.map((result, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex items-center"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-gray-800 font-medium">{result}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Screenshots */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Project Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="relative h-[200px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 text-center">
        <Link
          href="/portfolio"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
