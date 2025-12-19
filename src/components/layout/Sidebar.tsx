'use client';
import Image from 'next/image';
import type {ResumeFormData} from '@/lib/types';
import {Mail, Linkedin, Github, Phone, Globe as WebsiteIcon} from 'lucide-react';
import {useLanguage} from '@/hooks/useLanguage';

interface SidebarProps {
  resumeData: ResumeFormData;
}

export function Sidebar({resumeData}: SidebarProps) {
  const {t} = useLanguage();

  const socialLinks = [
    {
      href: `mailto:${resumeData.email}`,
      icon: Mail,
      label: resumeData.email,
      srText: t('resumePage.sidebar.emailLabel')
    },
    {
      href: resumeData.phone ? `tel:${resumeData.phone}` : undefined,
      icon: Phone,
      label: resumeData.phone,
      srText: t('resumePage.sidebar.phoneLabel')
    },
    {
      href: resumeData.linkedin,
      icon: Linkedin,
      label: t('resumePage.sidebar.linkedinLabel'),
      srText: 'LinkedIn Profile'
    },
    {href: resumeData.github, icon: Github, label: t('resumePage.sidebar.githubLabel'), srText: 'GitHub Profile'},
    {
      href: resumeData.website,
      icon: WebsiteIcon,
      label: t('resumePage.sidebar.websiteLabel'),
      srText: 'Personal Website'
    }
  ];

  return (
    <aside className="w-full md:w-80 lg:w-96 bg-card text-card-foreground p-6 md:p-8 flex-shrink-0 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:overflow-y-auto">
      <div className="flex flex-col items-center text-center pt-8 md:pt-0">
        <div className="mb-6 mt-8 md:mt-0 relative">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src="https://res.cloudinary.com/mpayancabrera/image/upload/v1766169461/IMG_5437_mwnu3f.jpg"
              alt={resumeData.name || 'Profile Picture'}
              width={208}
              height={208}
              className="relative rounded-3xl mx-auto shadow-2xl border-2 border-primary/20 w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 object-cover transition-all duration-300 group-hover:scale-105"
              priority
              data-ai-hint="profile portrait"
            />
          </div>
        </div>
        <h1 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-1">{resumeData.name}</h1>
        <p className="text-lg text-accent mb-8">{resumeData.jobTitle || t('resumePage.sidebar.jobTitleDefault')}</p>

        <nav className="space-y-4 w-full max-w-xs">
          {socialLinks.map(
            (link, index) =>
              link.href &&
              link.label && (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-2 rounded-md transition-colors group hover:bg-primary/10"
                  aria-label={link.srText}
                >
                  <link.icon className="h-5 w-5 text-accent group-hover:text-primary transition-colors shrink-0" />
                  <span
                    className="text-sm text-foreground group-hover:text-primary truncate"
                    title={
                      link.label === t('resumePage.sidebar.linkedinLabel') ||
                      link.label === t('resumePage.sidebar.githubLabel') ||
                      link.label === t('resumePage.sidebar.websiteLabel')
                        ? link.href.replace(/^(https?:\/\/)?(www\.)?/, '')
                        : link.label
                    }
                  >
                    {link.label === t('resumePage.sidebar.linkedinLabel') ||
                    link.label === t('resumePage.sidebar.githubLabel') ||
                    link.label === t('resumePage.sidebar.websiteLabel')
                      ? link.href.replace(/^(https?:\/\/)?(www\.)?/, '')
                      : link.label}
                  </span>
                </a>
              )
          )}
        </nav>
      </div>
    </aside>
  );
}
