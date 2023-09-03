import './globals.css';
import type {Metadata} from 'next';
import Script from 'next/script';
import {Inter} from 'next/font/google';
import {Footer} from '@/components/Layout/Footer';
import {Header} from '@/components/Layout/Header';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Manuel Payán Cabrera - Software engineer',
  description: 'Manuel Payán Cabrera personal web. Software engineer, front end developer.'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
      <Script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript" />
    </html>
  );
}
