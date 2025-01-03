import Image from 'next/image';

const skills = [
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL'],
  },
  {
    category: 'Tools & Platforms',
    technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'Firebase'],
  },
  {
    category: 'CMS & E-commerce',
    technologies: ['WordPress', 'Shopify', 'Sanity.io', 'Strapi'],
  },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Profile Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder-profile.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-gray-600 mb-6">
            Hello! I'm a passionate web developer with over 5 years of experience in creating
            beautiful, functional, and user-friendly websites. I specialize in building
            modern web applications using cutting-edge technologies.
          </p>
          <p className="text-gray-600 mb-6">
            My journey in web development started with a deep curiosity about how things
            work on the internet. Since then, I've had the privilege of working with
            various clients, from small businesses to large corporations, helping them
            achieve their online goals.
          </p>
          <p className="text-gray-600">
            I believe in writing clean, maintainable code and staying up-to-date with
            the latest web technologies and best practices. My goal is to deliver
            solutions that not only meet but exceed client expectations.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">Senior Web Developer</h3>
                <p className="text-gray-600">Tech Solutions Ltd</p>
              </div>
              <span className="text-gray-500">2020 - Present</span>
            </div>
            <p className="text-gray-600">
              Lead developer for various client projects, specializing in e-commerce
              solutions and custom web applications. Managed a team of developers and
              implemented best practices for code quality and project management.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">Web Developer</h3>
                <p className="text-gray-600">Creative Agency</p>
              </div>
              <span className="text-gray-500">2018 - 2020</span>
            </div>
            <p className="text-gray-600">
              Developed and maintained client websites using WordPress and custom solutions.
              Collaborated with designers to implement responsive and accessible web designs.
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold">BSc Computer Science</h3>
              <p className="text-gray-600">University of Technology</p>
            </div>
            <span className="text-gray-500">2014 - 2018</span>
          </div>
          <p className="text-gray-600">
            Graduated with First Class Honours. Specialized in Web Technologies and
            Software Engineering. Completed a final year project on building scalable
            web applications.
          </p>
        </div>
      </div>
    </div>
  );
}
