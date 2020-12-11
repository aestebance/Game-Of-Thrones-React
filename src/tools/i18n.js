import i18n from "i18next"
import { initReactI18next } from "react-i18next";
import enTranslation from '../assets/translations/en.json';
import esTranslation from '../assets/translations/es.json';
import roTranslation from '../assets/translations/ro.json';

const resources = {
    en: {
        translation: enTranslation,
    },
    es: {
        translation: esTranslation,
    },
    ro: {
        translation: roTranslation,
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
