'use client';

import React, {useState, useEffect} from 'react';
import {useLanguage} from '@/hooks/useLanguage';
import {useTheme} from 'next-themes';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {Moon, Sun, Globe as LanguageGlobeIcon} from 'lucide-react';
import type {Language} from '@/lib/types';

export function Footer() {
  const {language, setLanguage, t} = useLanguage();
  const {theme, setTheme} = useTheme();
  const [displayYear, setDisplayYear] = useState<string>('...');

  useEffect(() => {
    setDisplayYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="py-6 border-t bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; {displayYear} {t('appName')}. {t('allRightsReserved')}
          </p>
          <div className="flex items-center space-x-2">
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

            <Button
              variant="outline"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={t('footer.toggleThemeTooltip')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="ml-2">{t('themeLabel')}</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
