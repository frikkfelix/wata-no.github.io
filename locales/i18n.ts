import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en'
import no from './no'

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'no',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: { translation: en },
      no: { translation: no }
    }
  })

export default i18n;