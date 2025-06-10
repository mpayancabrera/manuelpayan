'use client';

import React, {useEffect, useRef} from 'react';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import gsap from 'gsap';
import {ArrowRight, BookOpen, Briefcase} from 'lucide-react';
import {useLanguage} from '@/contexts/LanguageContext';

export default function WelcomePage() {
  const {t} = useLanguage();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const fullWelcomeMessage = t('homePage.welcomeTitle');
  const [line1, line2] = fullWelcomeMessage.split('\n');

  useEffect(() => {
    const tl = gsap.timeline();

    if (headingRef.current) {
      const chars = headingRef.current.querySelectorAll('span.char');
      tl.fromTo(chars, {opacity: 0, y: 20}, {opacity: 1, y: 0, stagger: 0.05, duration: 0.5, ease: 'power3.out'});
    }

    if (buttonsRef.current) {
      const buttons = buttonsRef.current.querySelectorAll('a, button');
      tl.fromTo(
        buttons,
        {opacity: 0, y: 20},
        {opacity: 1, y: 0, stagger: 0.2, duration: 0.6, ease: 'back.out(1.7)'},
        '-=0.3'
      );
    }
  }, [fullWelcomeMessage]);

  const splitText = (text: string | undefined) => {
    if (!text) return [];
    return text.split('').map((char, index) => (
      <span key={`${char}-${index}`} className="char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4 md:p-8">
        <div className="w-full max-w-3xl mx-auto">
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-headline font-bold text-primary mb-4 md:mb-6 leading-tight"
            aria-label={fullWelcomeMessage.replace('\n', ' ')}
          >
            <div>{splitText(line1)}</div>
            {line2 && (
              <div className="mt-1 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-headline font-normal text-muted-foreground">
                {splitText(line2)}
              </div>
            )}
          </h1>
        </div>
        <div ref={buttonsRef} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-6 md:mt-8">
          <Button asChild size="lg" className="group">
            <Link href="/resume">
              {t('homePage.viewResumeButton')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="group">
            <Link href="/portfolio">
              {t('homePage.viewPortfolioButton')}
              <Briefcase className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/blog">
              {t('homePage.goToBlogButton')}
              <BookOpen className="ml-2 h-5 w-5 transition-transform group-hover:rotate-[5deg]" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
