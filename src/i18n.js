import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const domain = "https://gothic2lobos.com";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "pl",
    backend: {
      loadPath: "{{lng}}.json",
    },
    fallbackLng: "pl",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: { wait: true },
  });

export default i18n;
