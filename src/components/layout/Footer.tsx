'use client';

import React, {useEffect, useState} from 'react';
import {useLanguage} from '@/hooks/useLanguage';
import {useTheme} from 'next-themes';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {Moon, Sun, Globe as LanguageGlobeIcon} from 'lucide-react';
import type {Language} from '@/lib/types';

export function Footer() {
  const {theme, setTheme} = useTheme();
  const {language, setLanguage, t} = useLanguage();
  const currentYear = new Date().getFullYear();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 print:hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; {currentYear} {t('appName')}. {t('allRightsReserved')}
          </p>

          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" aria-label={t('footer.languageSelectorTooltip')}>
                  <LanguageGlobeIcon className="h-5 w-5" />
                  <span className="ml-2">{t('languageName')}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en' as Language)} disabled={language === 'en'}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('es' as Language)} disabled={language === 'es'}>
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="h-9 w-9"
              aria-label={t('footer.toggleThemeTooltip')}
            >
              {mounted ? (
                theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )
              ) : (
                <div className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
