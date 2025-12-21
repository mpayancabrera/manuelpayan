'use client';

import type {Language, UiTranslations} from '@/lib/types';
import {uiTranslations, getTranslation as getTranslationHelper} from '@/lib/resume-data';
import React, {createContext, useState, useContext, ReactNode, useCallback, useEffect} from 'react';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: UiTranslations;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'preferred-language';

// Detectar el idioma del navegador
const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';

  const browserLang = navigator.language || (navigator.languages && navigator.languages[0]);

  // Si el idioma del navegador es español (es, es-ES, es-MX, etc.), usar español
  if (browserLang && browserLang.toLowerCase().startsWith('es')) {
    return 'es';
  }

  // Por defecto, inglés
  return 'en';
};

// Función para obtener el idioma inicial (se ejecuta de forma síncrona)
const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';

  // Intentar obtener de localStorage
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    if (savedLanguage === 'en' || savedLanguage === 'es') {
      return savedLanguage;
    }
  } catch (e) {
    // Si falla localStorage, continuar
  }

  // Detectar del navegador
  return detectBrowserLanguage();
};

export const LanguageProvider = ({children}: {children: ReactNode}) => {
  // Inicializar con el idioma detectado de forma síncrona
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Persistir en localStorage cuando cambie el idioma
  useEffect(() => {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch (e) {
      // Manejar error silenciosamente
    }
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

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
