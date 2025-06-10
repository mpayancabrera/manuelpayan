export interface ExperienceEntry {
  id: string;
  title: string;
  company: string;
  dates: string;
  description: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  dates: string;
  description?: string;
}

export interface CourseEntry {
  id: string;
  name: string;
  issuer: string;
  year: string;
  link?: string;
}

export interface LanguageEntry {
  id: string;
  language: string;
  proficiency: string;
}

export interface ResumeFormData {
  name: string;
  jobTitle?: string;
  email: string;
  phone: string;
  website?: string;
  linkedin?: string;
  github?: string;
  summary: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: Record<string, string[]>;
  courses?: CourseEntry[];
  languages?: LanguageEntry[];
  interests?: string[];
}

export type DisplayResumeData = ResumeFormData;

export interface PortfolioItemEntry {
  id: string;
  titleKey: string;
  descriptionKey: string;
  imageUrl: string;
  imageAltKey: string;
  liveLink: string;
  tags: string[];
  categoryKey: string;
  dataAiHint?: string;
}

export type Language = 'en' | 'es';

// New structured UiTranslations
interface HeaderTranslations {
  resumeLink: string;
  portfolioLink: string;
  blogLink: string;
  toggleNavTooltip: string;
}

interface FooterTranslations {
  languageSelectorTooltip: string;
  toggleThemeTooltip: string;
}

interface HomePageTranslations {
  welcomeTitle: string;
  viewResumeButton: string;
  viewPortfolioButton: string;
  goToBlogButton: string;
}

interface SkillCategoryTranslations {
  frontend: string;
  testing: string;
  devops: string;
  tooling: string;
  backend: string;
  others: string;
  [key: string]: string | undefined;
}

interface ResumePageSectionTranslations {
  contact: {title: string};
  summary: {title: string};
  experience: {title: string};
  education: {title: string};
  skills: {title: string; categories: SkillCategoryTranslations};
  courses: {title: string};
  languages: {title: string};
  interests: {title: string};
}

interface ResumeSidebarTranslations {
  emailLabel: string;
  phoneLabel: string;
  linkedinLabel: string;
  githubLabel: string;
  websiteLabel: string;
  jobTitleDefault: string;
}

interface ResumePageTranslations {
  backToHomeButton: string;
  sections: ResumePageSectionTranslations;
  sidebar: ResumeSidebarTranslations;
  courseLinkText: string;
}

interface PortfolioProjectDetailTranslations {
  title: string;
  description: string;
  imageAlt: string;
  category: string;
}

interface PortfolioPageTranslations {
  pageTitle: string;
  backToHomeButton: string;
  noProjectsFound: string;
  viewProjectButton: string;
  technologiesLabel: string;
  categoryLabel: string;
  projectDetails: {
    [projectKey: string]: PortfolioProjectDetailTranslations;
  };
}

interface BlogPageTranslations {
  pageTitle: string;
  backToHomeButton: string;
  comingSoonIntro: string;
}

export interface UiTranslations {
  appName: string;
  languageName: string;
  allRightsReserved: string;
  themeLabel: string;

  header: HeaderTranslations;
  footer: FooterTranslations;
  homePage: HomePageTranslations;
  resumePage: ResumePageTranslations;
  portfolioPage: PortfolioPageTranslations;
  blogPage: BlogPageTranslations;
}
