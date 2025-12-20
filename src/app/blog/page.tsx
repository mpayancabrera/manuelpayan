'use client';

import React from 'react';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {ArrowLeft, Feather} from 'lucide-react';
import {useLanguage} from '@/contexts/LanguageContext';

export default function BlogPage() {
  const {t} = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Button asChild variant="ghost" size="sm" className="mb-8 md:mb-12 print:hidden hover:bg-accent/10">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('blogPage.backToHomeButton')}
          </Link>
        </Button>

        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <Feather className="h-16 w-16 text-accent mb-6" strokeWidth={1.5} />
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">{t('blogPage.pageTitle')}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">{t('blogPage.comingSoonIntro')}</p>
        </div>
      </main>
    </div>
  );
}
