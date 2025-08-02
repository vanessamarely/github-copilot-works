import { useKV } from '@github/spark/hooks'
import { translations } from '../data/translations'

export type Language = 'en' | 'es'

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useKV<Language>('language', 'en')

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[currentLanguage]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Fallback to English if translation not found
        value = translations.en
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey]
          } else {
            return key // Return key if no translation found
          }
        }
        break
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language)
  }

  return {
    t,
    currentLanguage,
    changeLanguage,
    isSpanish: currentLanguage === 'es',
    isEnglish: currentLanguage === 'en'
  }
}