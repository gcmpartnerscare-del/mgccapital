// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../src/locales/en/translation.json';
import fr from '../src/locales/fr/translation.json';
import yoruba from '../src/locales/yoruba/translation.json';
import hausa from '../src/locales/hausa/translation.json';
import igbo from '../src/locales/igbo/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      yoruba: { translation: yoruba },
      hausa: { translation: hausa },
      igbo: { translation: igbo },
    },
  });

export default i18n;
