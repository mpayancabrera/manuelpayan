'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sheet, SheetContent, SheetTrigger, SheetClose} from '@/components/ui/sheet';
import {Menu, User, Briefcase, BookOpen} from 'lucide-react';
import {useLanguage} from '@/contexts/LanguageContext';

const navItems = [
  {href: '/resume', labelKey: 'header.resumeLink', icon: User},
  {href: '/portfolio', labelKey: 'header.portfolioLink', icon: Briefcase},
  {href: '/blog', labelKey: 'header.blogLink', icon: BookOpen}
];

export function Header() {
  const pathname = usePathname();
  const {t} = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (pathname === '/') {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <div>
          <Link href="/" className="text-lg font-headline font-bold text-primary hover:text-accent transition-colors">
            {t('appName').split(' - ')[0]}
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground'
              }`}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label={t('header.toggleNavTooltip')}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-6 pt-10">
              <Link
                href="/"
                className="text-xl font-headline font-bold text-primary mb-8 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('appName').split(' - ')[0]}
              </Link>
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-3 rounded-md py-3 px-3 text-base font-medium transition-colors hover:bg-accent/10 ${
                        pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                          ? 'text-primary bg-accent/5'
                          : 'text-foreground'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="h-5 w-5 text-accent" />
                      <span>{t(item.labelKey)}</span>
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
