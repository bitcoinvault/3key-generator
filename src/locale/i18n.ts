import i18next from 'i18next';
import en from './translations/en.json';
import es from './translations/es.json';
import pt from './translations/pt.json';
import hi from './translations/hi.json';
import ja from './translations/ja.json';
import ko from './translations/ko.json';
import tr from './translations/tr.json';
import vi from './translations/vi.json';
import zh from './translations/zh.json';
import detector from "i18next-browser-languagedetector";

const navigatorLanguage = navigator.languages
? navigator.languages[0]
: (navigator.language);
const lng = localStorage.getItem('language') || navigatorLanguage || 'en';

i18next
  .use(detector)
  .init({
    fallbackLng: 'en',
    resources: {
      en,
      es,
      pt,
      hi,
      ja,
      ko,
      tr,
      vi,
      zh
    },
    lng,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
