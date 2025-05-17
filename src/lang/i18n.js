import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageCode } from './LanguageCode';
import enJson from './en/english.json'
import msJson from './ms/malay.json'

export const resources = {
    en: {
        translation: enJson
    },
    ms: {
        translation: msJson
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: LanguageCode.MELAYU
});

export { i18n };