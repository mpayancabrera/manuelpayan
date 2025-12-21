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

// Función para obtener cookie
const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

// Función para establecer cookie
const setCookie = (name: string, value: string, days: number = 365) => {
  if (typeof document === 'undefined') return;
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
};

// Detectar idioma del navegador
const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  const browserLang = navigator.language || (navigator.languages && navigator.languages[0]);
  if (browserLang && browserLang.toLowerCase().startsWith('es')) {
    return 'es';
  }
  return 'en';
};

// Obtener idioma inicial de forma síncrona
const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';

  // 1. Intentar desde cookie (tiene prioridad porque puede venir del servidor)
  const cookieLanguage = getCookie(LANGUAGE_STORAGE_KEY) as Language | null;
  if (cookieLanguage === 'en' || cookieLanguage === 'es') {
    return cookieLanguage;
  }

  // 2. Intentar desde localStorage
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    if (savedLanguage === 'en' || savedLanguage === 'es') {
      // Sincronizar con cookie
      setCookie(LANGUAGE_STORAGE_KEY, savedLanguage);
      return savedLanguage;
    }
  } catch (e) {
    // localStorage no disponible
  }

  // 3. Detectar del navegador
  const detectedLanguage = detectBrowserLanguage();
  // Guardar la detección
  setCookie(LANGUAGE_STORAGE_KEY, detectedLanguage);
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, detectedLanguage);
  } catch (e) {
    // localStorage no disponible
  }
  return detectedLanguage;
};

export const LanguageProvider = ({children}: {children: ReactNode}) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    setCookie(LANGUAGE_STORAGE_KEY, lang);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch (e) {
      // Manejar error silenciosamente
    }
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
