'use client';

import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {BrowserMockup} from '@/components/ui/browser-mockup';
import {useLanguage} from '@/contexts/LanguageContext';
import type {PortfolioItemEntry} from '@/lib/types';
import {portfolioItemsData} from '@/lib/resume-data';
import {ArrowLeft, ExternalLink, Code2, ChevronDown, ChevronUp} from 'lucide-react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  const {t, language} = useLanguage();
  const pageTitleRef = useRef<HTMLHeadingElement>(null);
  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const tl = gsap.timeline();
    if (pageTitleRef.current) {
      tl.fromTo(pageTitleRef.current, {opacity: 0, y: -20}, {opacity: 1, y: 0, duration: 0.6, ease: 'power3.out'});
    }

    projectCardsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          {opacity: 0, y: 50},
          {
            opacity: 1,
            y: 0,
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

  const toggleDescription = (id: string) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-6xl">
        <Button asChild variant="ghost" size="sm" className="mb-8 md:mb-12 print:hidden hover:bg-accent/10">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('portfolioPage.backToHomeButton')}
          </Link>
        </Button>

        <div className="mb-12 md:mb-20">
          <h1
            ref={pageTitleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-primary mb-4 tracking-tight"
          >
            {t('portfolioPage.pageTitle')}
          </h1>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </div>

        {portfolioItemsData.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
            <Code2 className="h-16 w-16 text-muted-foreground/40 mb-4" />
            <p className="text-muted-foreground text-lg max-w-md">{t('portfolioPage.noProjectsFound')}</p>
          </div>
        ) : (
          <div className="space-y-16 md:space-y-24">
            {portfolioItemsData.map((item, index) => {
              const description = t(item.descriptionKey);
              const isLongDescription = description.length > 200;
              const isExpanded = expandedDescriptions[item.id];

              return (
                <div key={item.id} ref={(el) => (projectCardsRef.current[index] = el)} className="group">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    {/* Image Section with Browser Mockup */}
                    <div className="lg:col-span-3 order-1">
                      <BrowserMockup
                        imageUrl={item.imageUrl}
                        imageAlt={t(item.imageAltKey)}
                        url={item.liveLink && item.liveLink !== '#' ? item.liveLink : undefined}
                        dataAiHint={item.dataAiHint}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-2 order-2 space-y-4">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-headline font-bold text-foreground mb-2">
                          {t(item.titleKey)}
                        </h2>
                        <p className="text-sm text-accent font-medium">{t(item.categoryKey)}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        <p className={isLongDescription && !isExpanded ? 'line-clamp-4' : ''}>{description}</p>
                        {isLongDescription && (
                          <button
                            onClick={() => toggleDescription(item.id)}
                            className="mt-2 text-accent hover:text-accent/80 text-sm font-medium inline-flex items-center transition-colors"
                          >
                            {isExpanded ? (
                              <>
                                {language === 'es' ? 'Ver menos' : 'Show less'}
                                <ChevronUp className="ml-1 h-4 w-4" />
                              </>
                            ) : (
                              <>
                                {language === 'es' ? 'Ver más' : 'Read more'}
                                <ChevronDown className="ml-1 h-4 w-4" />
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      {item.liveLink && item.liveLink !== '#' && (
                        <Button asChild variant="default" size="sm" className="w-full md:w-auto">
                          <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
                            {t('portfolioPage.viewProjectButton')}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  {index < portfolioItemsData.length - 1 && (
                    <div className="mt-16 md:mt-24 border-t border-border/30"></div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
