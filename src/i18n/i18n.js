import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      navbar: {
        learn: "Learn",
        use: "Use",
        build: "Build",
        participate: "Participate",
        research: "Research",
        language: "Languages",
        action: "Action",
      },
      home: {
        title: "HELLO FUTURE by DEEP ROOTS",
        subtitle:
          "From Impossible to Possible – A Platform for Innovative Apps and the New-Level of Blockchain Network",
      },
    },
  },
  ar: {
    translation: {
      navbar: {
        learn: "تعلم",
        use: "استخدام",
        build: "بناء",
        participate: "مشاركة",
        research: "بحث",
        language: "اللغات",
        action: "إجراء",
      },
      home: {
        title: "مرحباً بالمستقبل مع الجذور العميقة",
        subtitle:
          "من المستحيل إلى الممكن - منصة للتطبيقات المبتكرة ومستوى جديد من شبكة البلوكتشين",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
