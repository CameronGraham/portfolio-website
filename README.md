# DevPortfolio - Professional Web Developer Portfolio

A modern, responsive portfolio website built with Next.js 13+ and Tailwind CSS. This portfolio showcases web development services, projects, and professional experience.

## Features

- 🚀 Built with Next.js 13+ (App Router)
- 💅 Styled with Tailwind CSS
- 📱 Fully Responsive Design
- 🎨 Modern and Clean UI
- 🔍 SEO Optimized
- 🌐 Dynamic Case Studies
- 📬 Contact Form
- 🎯 Performance Optimized

## Pages

- **Home**: Landing page with hero section, services, featured work, and testimonials
- **Portfolio**: Grid of projects with filtering capability
- **Services**: Detailed service offerings with comparison table
- **About**: Professional background, skills, and experience
- **Contact**: Contact form and professional contact information
- **Case Studies**: Dynamic pages for detailed project showcases

## Getting Started

### Prerequisites

- Node.js 16.8.0 or newer
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/portfolio-website.git
\`\`\`

2. Navigate to the project directory:
\`\`\`bash
cd portfolio-website
\`\`\`

3. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

4. Create a \`.env.local\` file in the root directory and add your environment variables:
\`\`\`env
# Add any required environment variables here
\`\`\`

5. Start the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

\`\`\`
portfolio-website/
├── src/
│   ├── app/                 # App router pages
│   ├── components/          # Reusable components
│   ├── styles/             # Global styles
│   └── types/              # TypeScript types
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json           # Project dependencies and scripts
\`\`\`

## Customization

1. Update the metadata in \`src/app/metadata.ts\` with your information
2. Replace placeholder images in the \`public\` directory with your own
3. Modify the content in each page component to match your services and experience
4. Update the color scheme in \`tailwind.config.js\` if desired

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure your environment variables
4. Deploy!

## Performance Optimization

- Images are optimized using Next.js Image component
- Fonts are optimized using next/font
- CSS is minimized in production
- Code splitting is implemented by default
- Static pages are pre-rendered at build time

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - [your@email.com](mailto:your@email.com)

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)
