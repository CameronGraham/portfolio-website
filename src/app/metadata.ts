import { Metadata } from 'next';

export const sharedMetadata: Metadata = {
  title: {
    default: 'DevPortfolio - Freelance Web Developer',
    template: '%s | DevPortfolio',
  },
  description: 'Professional web development services for businesses and individuals',
  keywords: [
    'freelance web developer',
    'web development',
    'React developer',
    'Next.js developer',
    'UK developer',
    'frontend development',
    'full-stack development',
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://your-domain.com',
    siteName: 'DevPortfolio',
    title: 'DevPortfolio - Freelance Web Developer',
    description: 'Professional web development services for businesses and individuals',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DevPortfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    creator: '@yourtwitterhandle',
    title: 'DevPortfolio - Freelance Web Developer',
    description: 'Professional web development services for businesses and individuals',
    images: ['https://your-domain.com/twitter-image.jpg'],
  },
};
