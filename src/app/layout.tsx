import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import '@/assets/styles/styles.scss'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://codigoinerte.github.io'),
  title: {
    default: 'Fredy Martinez | Frontend Developer React & Next.js',
    template: '%s | Fredy Martinez',
  },
  description:
    'Frontend Developer con 5+ años de experiencia. Especializado en React, Next.js y TypeScript. Disponible para proyectos freelance. Lima, Perú.',
  keywords: [
    'Frontend Developer React',
    'Next.js Developer',
    'TypeScript Developer',
    'React Developer Lima Peru',
    'Desarrollador Frontend Peru',
    'Desarrollador React LATAM',
    'Next.js TypeScript',
    'Fredy Martinez Developer',
    'Portfolio Frontend',
    'React Native Developer',
  ],
  authors: [{ name: 'Fredy Martinez', url: 'https://codigoinerte.github.io' }],
  creator: 'Fredy Martinez',
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    alternateLocale: 'en_US',
    url: 'https://codigoinerte.github.io',
    title: 'Fredy Martinez | Frontend Developer React & Next.js',
    description:
      'Frontend Developer especializado en React, Next.js y TypeScript. 5+ años de experiencia. Lima, Perú.',
    siteName: 'Fredy Martinez Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fredy Martinez - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@codigoinerte',
    creator: '@codigoinerte',
    title: 'Fredy Martinez | Frontend Developer React & Next.js',
    description:
      'Frontend Developer especializado en React, Next.js y TypeScript.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: 'https://codigoinerte.github.io',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fredy Martinez',
  alternateName: 'Fredy Jhoel Martinez Bustamante',
  url: 'https://codigoinerte.github.io',
  image: 'https://codigoinerte.github.io/profile.webp',
  jobTitle: 'Frontend Developer',
  description:
    'Frontend Developer con 5+ años de experiencia, especializado en React, Next.js y TypeScript.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lima',
    addressCountry: 'PE',
  },
  sameAs: [
    'https://github.com/codigoinerte',
    'https://www.linkedin.com/in/fredy-martinez-bustamante/',
    'https://twitter.com/codigoinerte',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Frontend Development',
    'React Native',
    'Sass',
    'Node.js',
  ],
  offers: {
    '@type': 'Offer',
    description: 'Servicios de desarrollo frontend freelance',
    availability: 'https://schema.org/InStock',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
