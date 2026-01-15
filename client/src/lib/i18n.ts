import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en.json';
import id from '../locales/id.json';
import th from '../locales/th.json';
import vi from '../locales/vi.json';
import zh from '../locales/zh.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
      th: { translation: th },
      vi: { translation: vi },
      id: { translation: id },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
