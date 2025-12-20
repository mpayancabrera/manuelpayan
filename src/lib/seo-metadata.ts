import type {Metadata} from 'next';
import type {Language} from './types';

interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    siteName: string;
  };
}

export const seoTranslations: Record<Language, SEOMetadata> = {
  en: {
    title: 'Manuel Payán Cabrera - Senior Frontend Developer | React & Next.js Expert',
    description:
      'Senior Frontend Developer with 10+ years of experience. Specialized in React, Next.js, TypeScript, and modern web technologies. Portfolio and resume of Manuel Payán Cabrera.',
    keywords: [
      'Manuel Payán',
      'Frontend Developer',
      'React Developer',
      'Next.js Developer',
      'TypeScript',
      'Senior Developer',
      'Web Development',
      'JavaScript'
    ],
    openGraph: {
      title: 'Manuel Payán Cabrera - Senior Frontend Developer',
      description:
        'Senior Frontend Developer with 10+ years of experience. Expert in React, Next.js, and modern web technologies.',
      siteName: 'Manuel Payán Portfolio'
    }
  },
  es: {
    title: 'Manuel Payán Cabrera - Desarrollador Frontend Senior | Experto en React y Next.js',
    description:
      'Desarrollador Frontend Senior con más de 10 años de experiencia. Especializado en React, Next.js, TypeScript y tecnologías web modernas. Portfolio y currículum de Manuel Payán Cabrera.',
    keywords: [
      'Manuel Payán',
      'Desarrollador Frontend',
      'Desarrollador React',
      'Desarrollador Next.js',
      'TypeScript',
      'Desarrollador Senior',
      'Desarrollo Web',
      'JavaScript'
    ],
    openGraph: {
      title: 'Manuel Payán Cabrera - Desarrollador Frontend Senior',
      description:
        'Desarrollador Frontend Senior con más de 10 años de experiencia. Experto en React, Next.js y tecnologías web modernas.',
      siteName: 'Portfolio de Manuel Payán'
    }
  }
};

export function getMetadata(language: Language = 'en'): Metadata {
  const seo = seoTranslations[language];
  const baseUrl = 'https://manuelpayan.com';

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{name: 'Manuel Payán Cabrera', url: baseUrl}],
    creator: 'Manuel Payán Cabrera',
    publisher: 'Manuel Payán Cabrera',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    openGraph: {
      type: 'website',
      locale: language === 'es' ? 'es_ES' : 'en_US',
      url: baseUrl,
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      siteName: seo.openGraph.siteName,
      images: [
        {
          url: 'https://res.cloudinary.com/mpayancabrera/image/upload/v1766169461/IMG_5437_mwnu3f.jpg',
          width: 1200,
          height: 630,
          alt: 'Manuel Payán Cabrera - Senior Frontend Developer',
          type: 'image/jpeg'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@mpayancabrera',
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      images: [
        {
          url: 'https://res.cloudinary.com/mpayancabrera/image/upload/v1766169461/IMG_5437_mwnu3f.jpg',
          alt: 'Manuel Payán Cabrera - Senior Frontend Developer'
        }
      ]
    },
    icons: {
      icon: [
        {url: '/favicon.svg', type: 'image/svg+xml'},
        {url: '/favicon.ico'},
        {url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
        {url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png'}
      ],
      apple: [{url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png'}],
      other: [
        {
          rel: 'mask-icon',
          url: '/safari-pinned-tab.svg',
          color: '#000000'
        }
      ]
    },
    manifest: '/site.webmanifest',
    alternates: {
      canonical: baseUrl
    },
    other: {
      'theme-color': '#0f172a'
    }
  };
}
