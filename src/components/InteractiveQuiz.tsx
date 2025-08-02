import { useState } from 'react'
import { Check, X } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslation } from '@/hooks/useTranslation'

interface QuizQuestion {
  question: {
    en: string
    es: string
  }
  options: {
    en: string[]
    es: string[]
  }
  correctAnswer: number
  explanation: {
    en: string
    es: string
  }
}

const quizQuestions: QuizQuestion[] = [
  {
    question: {
      en: "What key combination opens Copilot suggestions?",
      es: "¿Qué combinación de teclas abre las sugerencias de Copilot?"
    },
    options: {
      en: ["Ctrl+Space", "Ctrl+Enter", "Alt+Tab", "Shift+Enter"],
      es: ["Ctrl+Espacio", "Ctrl+Enter", "Alt+Tab", "Shift+Enter"]
    },
    correctAnswer: 1,
    explanation: {
      en: "Ctrl+Enter (or Cmd+Enter on Mac) opens the Copilot suggestions panel with multiple options.",
      es: "Ctrl+Enter (o Cmd+Enter en Mac) abre el panel de sugerencias de Copilot con múltiples opciones."
    }
  },
  {
    question: {
      en: "What's the best way to get quality suggestions from Copilot?",
      es: "¿Cuál es la mejor manera de obtener sugerencias de calidad de Copilot?"
    },
    options: {
      en: [
        "Write minimal comments",
        "Use generic variable names",
        "Provide clear context and intent",
        "Copy-paste from documentation"
      ],
      es: [
        "Escribir comentarios mínimos",
        "Usar nombres de variables genéricos",
        "Proporcionar contexto e intención claros",
        "Copiar-pegar de la documentación"
      ]
    },
    correctAnswer: 2,
    explanation: {
      en: "Clear, descriptive comments and context help Copilot understand your intent and provide better suggestions.",
      es: "Comentarios claros y descriptivos y el contexto ayudan a Copilot a entender tu intención y proporcionar mejores sugerencias."
    }
  }
]

export const InteractiveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const { currentLanguage, t } = useTranslation()

  const question = quizQuestions[currentQuestion]
  const isCorrect = selectedAnswer === question.correctAnswer

  const handleAnswerSelect = (answerIndex: number) => {
    if (showAnswer) return
    
    setSelectedAnswer(answerIndex)
    setShowAnswer(true)
    
    if (answerIndex === question.correctAnswer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowAnswer(false)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowAnswer(false)
    setScore(0)
  }

  const isQuizComplete = currentQuestion === quizQuestions.length - 1 && showAnswer

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {t('content.quiz.question')} {currentQuestion + 1} of {quizQuestions.length}
          <span className="text-sm font-normal">
            Score: {score}/{quizQuestions.length}
          </span>
        </CardTitle>
        <CardDescription>
          {question.question[currentLanguage]}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {question.options[currentLanguage].map((option, index) => (
            <Button
              key={index}
              variant={
                showAnswer
                  ? index === question.correctAnswer
                    ? "default"
                    : index === selectedAnswer && selectedAnswer !== question.correctAnswer
                    ? "destructive"
                    : "outline"
                  : selectedAnswer === index
                  ? "secondary"
                  : "outline"
              }
              className={`justify-start h-auto p-4 text-left whitespace-normal ${
                showAnswer && index === question.correctAnswer
                  ? "bg-green-100 border-green-500 text-green-800 hover:bg-green-100"
                  : showAnswer && index === selectedAnswer && selectedAnswer !== question.correctAnswer
                  ? "bg-red-100 border-red-500 text-red-800 hover:bg-red-100"
                  : ""
              }`}
              onClick={() => handleAnswerSelect(index)}
              disabled={showAnswer}
            >
              <div className="flex items-center gap-3 w-full">
                <span className="flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-sm">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option}</span>
                {showAnswer && index === question.correctAnswer && (
                  <Check className="h-5 w-5 text-green-600" />
                )}
                {showAnswer && index === selectedAnswer && selectedAnswer !== question.correctAnswer && (
                  <X className="h-5 w-5 text-red-600" />
                )}
              </div>
            </Button>
          ))}
        </div>

        {showAnswer && (
          <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <p className={`font-medium mb-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {isCorrect ? t('content.quiz.correct') : t('content.quiz.incorrect')}
            </p>
            <p className="text-sm text-muted-foreground">
              {question.explanation[currentLanguage]}
            </p>
          </div>
        )}

        <div className="flex justify-between items-center pt-4">
          <div className="flex gap-2">
            {quizQuestions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index < currentQuestion 
                    ? 'bg-primary' 
                    : index === currentQuestion 
                    ? 'bg-primary/50' 
                    : 'bg-muted'
                }`}
              />
            ))}
          </div>
          
          {showAnswer && (
            isQuizComplete ? (
              <Button onClick={resetQuiz} variant="outline">
                {t('content.quiz.tryAgain')}
              </Button>
            ) : (
              <Button onClick={nextQuestion}>
                Next Question
              </Button>
            )
          )}
        </div>

        {isQuizComplete && (
          <div className="text-center p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Quiz Complete! 🎉
            </h3>
            <p className="text-muted-foreground">
              Final Score: {score} out of {quizQuestions.length}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}