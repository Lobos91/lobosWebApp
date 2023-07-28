import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import common_pl from "./translations/pl/common.json";
import common_en from "./translations/en/common.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "pl",
    resources: {
      pl: {
        common: common_pl,
      },
      en: {
        common: common_en,
      },
    },
    ns: ["common"],

    fallbackLng: "pl",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: { wait: true },
  });

export default i18n;
