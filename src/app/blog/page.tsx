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
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4 md:p-8">
        <Feather className="h-16 w-16 text-accent mb-6" strokeWidth={1.5} />
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">{t('blogPage.pageTitle')}</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">{t('blogPage.comingSoonIntro')}</p>
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('blogPage.backToHomeButton')}
          </Link>
        </Button>
      </main>
    </div>
  );
}
