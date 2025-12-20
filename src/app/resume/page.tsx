'use client';

import React, {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {PortfolioLayout} from '@/components/layout/PortfolioLayout';
import {useLanguage} from '@/contexts/LanguageContext';
import type {ResumeFormData, Language, CourseEntry, LanguageEntry, ExperienceEntry, EducationEntry} from '@/lib/types';
import {defaultResumeDataEn, defaultResumeDataEs} from '@/lib/resume-data';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {
  User,
  Briefcase,
  GraduationCap,
  Lightbulb,
  ExternalLink,
  Award,
  Languages as LanguagesIcon,
  Coffee,
  CalendarDays,
  ArrowLeft
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
  title: string;
  icon?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  ref?: React.RefObject<HTMLElement>;
}

function Section({title, icon: Icon, children, className, ref}: SectionProps) {
  return (
    <section ref={ref} className={`mb-10 md:mb-16 portfolio-section ${className}`}>
      <h2 className="text-2xl md:text-3xl font-headline font-semibold text-primary border-b-2 border-primary/40 pb-3 mb-8 flex items-center">
        {Icon && <Icon className="h-6 w-6 mr-3 text-accent shrink-0" />} {title}
      </h2>
      {children}
    </section>
  );
}

function ResumePageContent() {
  const {language, t} = useLanguage();
  const skillsSectionRef = useRef<HTMLElement>(null);

  const generateDefaultData = (lang: Language): ResumeFormData => {
    return lang === 'es' ? defaultResumeDataEs : defaultResumeDataEn;
  };

  const [resumeData, setResumeData] = useState<ResumeFormData>(generateDefaultData(language));

  useEffect(() => {
    setResumeData(generateDefaultData(language));
  }, [language]);

  useEffect(() => {
    gsap.set('.portfolio-section', {opacity: 0, y: 50});
    ScrollTrigger.batch('.portfolio-section', {
      onEnter: (batch) => gsap.to(batch, {opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.2}),
      start: 'top 85%',
      once: true
    });

    if (skillsSectionRef.current) {
      gsap.set('.portfolio-skill-pill', {opacity: 0, y: 20, scale: 0.9});
      const pills = skillsSectionRef.current.querySelectorAll('.portfolio-skill-pill');
      if (pills.length > 0) {
        ScrollTrigger.batch(pills, {
          trigger: skillsSectionRef.current,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              ease: 'power2.out',
              stagger: 0.07
            }),
          start: 'top 90%',
          once: true
        });
      }
    }
  }, [resumeData]);

  const renderLink = (
    url: string | undefined,
    textKey: string,
    defaultText: string,
    className?: string,
    showIcon = true
  ) => {
    if (!url || url === '#') return null;
    const linkText = t(textKey) || defaultText;
    const displayUrl = url.replace(/^(https?:\/\/)?(www\.)?/, '');
    const fullUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
    return (
      <a
        href={fullUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center text-accent hover:text-primary transition-colors group ${className}`}
      >
        {showIcon && <ExternalLink className="h-4 w-4 mr-1.5 shrink-0" />}
        <span className="truncate" title={fullUrl}>
          {linkText === defaultText ? displayUrl : linkText}
        </span>
      </a>
    );
  };

  const getSkillCategoryTitle = (categoryKey: string) => {
    const normalizedKey = categoryKey
      .toLowerCase()
      .replace(/\s*\([\s\S]*?\)/, '')
      .replace(/[^a-z0-9&-]/gi, '');
    return t(`resumePage.sections.skills.categories.${normalizedKey}`) || categoryKey;
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <PortfolioLayout resumeData={resumeData}>
        <Button asChild variant="ghost" size="sm" className="mb-8 md:mb-12 print:hidden hover:bg-accent/10">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('resumePage.backToHomeButton')}
          </Link>
        </Button>
        <div className="font-body leading-relaxed text-sm md:text-base">
          {resumeData.summary && (
            <Section title={t('resumePage.sections.summary.title')} icon={User}>
              <p className="text-foreground/90 whitespace-pre-wrap">{resumeData.summary}</p>
            </Section>
          )}

          {resumeData.experience && resumeData.experience.length > 0 && (
            <Section title={t('resumePage.sections.experience.title')} icon={Briefcase}>
              <div className="relative space-y-10">
                {resumeData.experience.map((exp: ExperienceEntry, index: number) => (
                  <div
                    key={exp.id}
                    className="flex items-start space-x-4 relative pl-4 before:absolute before:left-0 before:top-2 before:h-[calc(100%-0.5rem)] before:w-0.5 before:bg-border/70 data-[last=true]:before:h-2"
                  >
                    <div className="z-10 flex-shrink-0 mt-0.5">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground shadow-md">
                        <Briefcase className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="flex-grow pb-2">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground/95">{exp.title}</h3>
                      <p className="text-sm font-medium text-primary/90 mb-1">{exp.company}</p>
                      <p className="text-xs text-muted-foreground mb-3 flex items-center">
                        <CalendarDays className="w-3 h-3 mr-1.5" /> {exp.dates}
                      </p>
                      {exp.description && (
                        <ul className="list-disc list-outside ml-5 text-foreground/80 whitespace-pre-wrap space-y-1.5 text-xs md:text-sm">
                          {exp.description
                            .split('\n')
                            .map((line, lineIndex) => line.trim() && <li key={lineIndex}>{line.trim()}</li>)}
                        </ul>
                      )}
                    </div>
                    {index === resumeData.experience.length - 1 && <div data-last="true"></div>}
                  </div>
                ))}
              </div>
            </Section>
          )}

          {resumeData.skills && Object.keys(resumeData.skills).length > 0 && (
            <Section title={t('resumePage.sections.skills.title')} icon={Lightbulb} ref={skillsSectionRef}>
              <div className="space-y-6">
                {Object.entries(resumeData.skills).map(
                  ([category, skillsList]) =>
                    skillsList.length > 0 && (
                      <div key={category}>
                        <h3 className="text-md font-semibold text-primary mb-3">{getSkillCategoryTitle(category)}</h3>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                          {skillsList.map((skill, idx) => (
                            <span
                              key={idx}
                              className="portfolio-skill-pill bg-accent/10 text-accent font-medium py-1.5 px-3 md:py-2 md:px-4 rounded-full text-xs md:text-sm shadow-sm hover:scale-105 transform transition-transform duration-150 ease-in-out cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                )}
              </div>
            </Section>
          )}

          {resumeData.education && resumeData.education.length > 0 && (
            <Section title={t('resumePage.sections.education.title')} icon={GraduationCap}>
              <div className="relative space-y-10">
                {resumeData.education.map((edu: EducationEntry, index: number) => (
                  <div
                    key={edu.id}
                    className="flex items-start space-x-4 relative pl-4 before:absolute before:left-0 before:top-2 before:h-[calc(100%-0.5rem)] before:w-0.5 before:bg-border/70 data-[last=true]:before:h-2"
                  >
                    <div className="z-10 flex-shrink-0 mt-0.5">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground shadow-md">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="flex-grow pb-2">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground/95">{edu.degree}</h3>
                      <p className="text-sm font-medium text-primary/90 mb-1">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground mb-2 flex items-center">
                        <CalendarDays className="w-3 h-3 mr-1.5" /> {edu.dates}
                      </p>
                      {edu.description && (
                        <p className="text-foreground/80 whitespace-pre-wrap text-xs md:text-sm">{edu.description}</p>
                      )}
                    </div>
                    {index === resumeData.education.length - 1 && <div data-last="true"></div>}
                  </div>
                ))}
              </div>
            </Section>
          )}

          {resumeData.courses && resumeData.courses.length > 0 && (
            <Section title={t('resumePage.sections.courses.title')} icon={Award}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {resumeData.courses.map((course: CourseEntry) => (
                  <div key={course.id} className="bg-card p-4 rounded-lg shadow-sm border border-border/50">
                    <h3 className="text-md font-semibold text-foreground/95">{course.name}</h3>
                    <p className="text-sm text-accent mb-1">
                      {course.issuer} - {course.year}
                    </p>
                    {renderLink(course.link, 'resumePage.courseLinkText', 'View Course', 'text-xs mt-1')}
                  </div>
                ))}
              </div>
            </Section>
          )}

          {resumeData.languages && resumeData.languages.length > 0 && (
            <Section title={t('resumePage.sections.languages.title')} icon={LanguagesIcon}>
              <ul className="space-y-2">
                {resumeData.languages.map((lang: LanguageEntry) => (
                  <li
                    key={lang.id}
                    className="flex items-center bg-card p-3 rounded-md shadow-sm border border-border/50"
                  >
                    <span className="font-semibold text-foreground/90 w-28">{lang.language}:</span>
                    <span className="text-foreground/80">{lang.proficiency}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {resumeData.interests && resumeData.interests.length > 0 && (
            <Section title={t('resumePage.sections.interests.title')} icon={Coffee}>
              <div className="flex flex-wrap gap-3">
                {resumeData.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-secondary/80 text-secondary-foreground font-medium py-1.5 px-3 rounded-full text-sm shadow-sm hover:bg-secondary transition-colors cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </Section>
          )}
        </div>
      </PortfolioLayout>
    </div>
  );
}

export default function ResumePage() {
  return <ResumePageContent />;
}
