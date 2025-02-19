import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from "@app/locales";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    lng: 'en', // default
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },

  });

export default i18n;

