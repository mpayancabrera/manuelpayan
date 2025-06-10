'use client';

import type {Language, UiTranslations} from '@/lib/types';
import {uiTranslations, getTranslation as getTranslationHelper} from '@/lib/resume-data';
import React, {createContext, useState, useContext, ReactNode, useCallback} from 'react';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: UiTranslations;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({children}: {children: ReactNode}) => {
  const [language, setLanguage] = useState<Language>('en');

  const currentTranslations = uiTranslations[language];

  const t = useCallback(
    (path: string) => {
      return getTranslationHelper(uiTranslations, path, language);
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{language, setLanguage, translations: currentTranslations, t}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
