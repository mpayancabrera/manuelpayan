'use client';

import React, {useEffect, useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {useLanguage} from '@/contexts/LanguageContext';
import type {PortfolioItemEntry} from '@/lib/types';
import {portfolioItemsData} from '@/lib/resume-data';
import {ArrowLeft, ExternalLink} from 'lucide-react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  const {t, language} = useLanguage();
  const pageTitleRef = useRef<HTMLHeadingElement>(null);
  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();
    if (pageTitleRef.current) {
      tl.fromTo(pageTitleRef.current, {opacity: 0, y: -20}, {opacity: 1, y: 0, duration: 0.6, ease: 'power3.out'});
    }

    projectCardsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          {opacity: 0, y: 50, scale: 0.95},
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true
            }
          }
        );
      }
    });
    ScrollTrigger.refresh();
  }, [language, portfolioItemsData]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Button asChild variant="outline" className="mb-6 md:mb-10 print:hidden">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('portfolioPage.backToHomeButton')}
          </Link>
        </Button>

        <h1
          ref={pageTitleRef}
          className="text-4xl md:text-5xl font-headline font-bold text-primary mb-10 md:mb-16 text-center"
        >
          {t('portfolioPage.pageTitle')}
        </h1>

        {portfolioItemsData.length === 0 ? (
          <p className="text-center text-muted-foreground text-lg">{t('portfolioPage.noProjectsFound')}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {portfolioItemsData.map((item, index) => (
              <div key={item.id} ref={(el) => (projectCardsRef.current[index] = el)}>
                <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                  <CardHeader className="p-0">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={t(item.imageAltKey)}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={item.dataAiHint || 'project interface'}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <CardTitle className="text-xl lg:text-2xl font-headline font-semibold text-primary mb-3">
                      {t(item.titleKey)}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t(item.descriptionKey)}</p>
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                        {t('portfolioPage.technologiesLabel')}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold">{t('portfolioPage.categoryLabel')}:</span> {t(item.categoryKey)}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 border-t">
                    <Button asChild className="w-full group">
                      <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
                        {t('portfolioPage.viewProjectButton')}
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
