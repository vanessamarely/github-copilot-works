import { Globe, Check } from '@phosphor-icons/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useTranslation } from '@/hooks/useTranslation'

export const LanguagePreview = () => {
  const { currentLanguage, isSpanish, isEnglish } = useTranslation()

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
          <Globe className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-lg">
          {isEnglish ? 'Language Selection' : 'Selección de Idioma'}
        </CardTitle>
        <CardDescription>
          {isEnglish 
            ? 'This documentation is available in multiple languages'
            : 'Esta documentación está disponible en múltiples idiomas'
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          <div className={`p-3 rounded-lg border-2 transition-all ${
            isEnglish 
              ? 'border-primary bg-primary/5' 
              : 'border-muted bg-muted/20 hover:border-primary/50'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg">🇺🇸</span>
                <div>
                  <p className="font-medium">English</p>
                  <p className="text-sm text-muted-foreground">Original language</p>
                </div>
              </div>
              {isEnglish && <Check className="h-5 w-5 text-primary" />}
            </div>
          </div>

          <div className={`p-3 rounded-lg border-2 transition-all ${
            isSpanish 
              ? 'border-primary bg-primary/5' 
              : 'border-muted bg-muted/20 hover:border-primary/50'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg">🇪🇸</span>
                <div>
                  <p className="font-medium">Español</p>
                  <p className="text-sm text-muted-foreground">
                    {isEnglish ? 'Spanish translation' : 'Idioma español'}
                  </p>
                </div>
              </div>
              {isSpanish && <Check className="h-5 w-5 text-primary" />}
            </div>
          </div>
        </div>

        <div className="text-center pt-2">
          <Badge variant="secondary" className="text-xs">
            {isEnglish 
              ? `Currently viewing: English` 
              : `Viendo actualmente: Español`
            }
          </Badge>
        </div>
        
        <div className="text-xs text-muted-foreground text-center">
          {isEnglish 
            ? 'Use the language selector in the header to switch languages'
            : 'Usa el selector de idioma en el encabezado para cambiar idiomas'
          }
        </div>
      </CardContent>
    </Card>
  )
}