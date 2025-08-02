import { Globe, Check } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTranslation, Language } from '@/hooks/useTranslation'
import { toast } from 'sonner'

export const LanguageSelector = () => {
  const { t, currentLanguage, changeLanguage } = useTranslation()

  const languages: { code: Language; name: string; flag: string; nativeName: string }[] = [
    { code: 'en', name: t('languageSelector.english'), flag: '🇺🇸', nativeName: 'English' },
    { code: 'es', name: t('languageSelector.spanish'), flag: '🇪🇸', nativeName: 'Español' },
  ]

  const currentLang = languages.find(lang => lang.code === currentLanguage)

  const handleLanguageChange = (language: Language) => {
    changeLanguage(language)
    const selectedLang = languages.find(lang => lang.code === language)
    toast.success(
      currentLanguage === 'en' 
        ? `Language switched to ${selectedLang?.nativeName}` 
        : `Idioma cambiado a ${selectedLang?.nativeName}`
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2 min-w-[100px]">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLang?.flag}</span>
          <span className="hidden md:inline">{currentLang?.nativeName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center gap-3 cursor-pointer ${
              currentLanguage === language.code ? 'bg-accent' : ''
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <div className="flex-1">
              <div className="font-medium">{language.nativeName}</div>
              <div className="text-xs text-muted-foreground">{language.name}</div>
            </div>
            {currentLanguage === language.code && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}