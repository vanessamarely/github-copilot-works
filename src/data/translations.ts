export interface Translations {
  en: TranslationKeys
  es: TranslationKeys
}

export interface TranslationKeys {
  header: {
    title: string
    subtitle: string
    search: string
    viewOnGitHub: string
  }
  navigation: {
    introduction: string
    setup: string
    usage: string
    bestPractices: string
    troubleshooting: string
    exercises: string
  }
  search: {
    noResults: string
    searchIn: string
    foundIn: string
  }
  footer: {
    resources: string
    learning: string
    workshop: string
    copyright: string
    builtWith: string
    officialCopilot: string
    documentation: string
    vsCodeIntegration: string
    bestPractices: string
    skillsCourse: string
    blogPosts: string
    repository: string
    author: string
  }
  content: {
    copyCode: string
    copied: string
    quiz: {
      question: string
      checkAnswer: string
      correct: string
      incorrect: string
      tryAgain: string
    }
  }
  languageSelector: {
    language: string
    english: string
    spanish: string
  }
}

export const translations: Translations = {
  en: {
    header: {
      title: "GitHub Copilot Workshop",
      subtitle: "Interactive Documentation",
      search: "Search documentation...",
      viewOnGitHub: "View on GitHub"
    },
    navigation: {
      introduction: "Introduction to GitHub Copilot",
      setup: "Setting up GitHub Copilot",
      usage: "Using GitHub Copilot",
      bestPractices: "Best Practices",
      troubleshooting: "Troubleshooting & FAQ",
      exercises: "Exercises & Challenges"
    },
    search: {
      noResults: "No results found",
      searchIn: "Search in",
      foundIn: "Found in"
    },
    footer: {
      resources: "GitHub Copilot Resources",
      learning: "Learning Resources",
      workshop: "Workshop",
      copyright: "© 2025 GitHub Copilot Workshop Documentation",
      builtWith: "Built with React, TypeScript, and Tailwind CSS",
      officialCopilot: "Official GitHub Copilot",
      documentation: "Copilot Documentation",
      vsCodeIntegration: "VS Code Integration",
      bestPractices: "Copilot Best Practices",
      skillsCourse: "GitHub Skills Course",
      blogPosts: "Copilot Blog Posts",
      repository: "Workshop Repository",
      author: "Workshop Author"
    },
    content: {
      copyCode: "Copy code",
      copied: "Copied!",
      quiz: {
        question: "Question",
        checkAnswer: "Check Answer",
        correct: "Correct! 🎉",
        incorrect: "Incorrect. Try again!",
        tryAgain: "Try Again"
      }
    },
    languageSelector: {
      language: "Language",
      english: "English",
      spanish: "Español"
    }
  },
  es: {
    header: {
      title: "Taller de GitHub Copilot",
      subtitle: "Documentación Interactiva",
      search: "Buscar en la documentación...",
      viewOnGitHub: "Ver en GitHub"
    },
    navigation: {
      introduction: "Introducción a GitHub Copilot",
      setup: "Configuración de GitHub Copilot",
      usage: "Uso de GitHub Copilot",
      bestPractices: "Mejores Prácticas",
      troubleshooting: "Solución de Problemas y FAQ",
      exercises: "Ejercicios y Desafíos"
    },
    search: {
      noResults: "No se encontraron resultados",
      searchIn: "Buscar en",
      foundIn: "Encontrado en"
    },
    footer: {
      resources: "Recursos de GitHub Copilot",
      learning: "Recursos de Aprendizaje",
      workshop: "Taller",
      copyright: "© 2025 Documentación del Taller de GitHub Copilot",
      builtWith: "Construido con React, TypeScript y Tailwind CSS",
      officialCopilot: "GitHub Copilot Oficial",
      documentation: "Documentación de Copilot",
      vsCodeIntegration: "Integración con VS Code",
      bestPractices: "Mejores Prácticas de Copilot",
      skillsCourse: "Curso de GitHub Skills",
      blogPosts: "Artículos del Blog de Copilot",
      repository: "Repositorio del Taller",
      author: "Autora del Taller"
    },
    content: {
      copyCode: "Copiar código",
      copied: "¡Copiado!",
      quiz: {
        question: "Pregunta",
        checkAnswer: "Verificar Respuesta",
        correct: "¡Correcto! 🎉",
        incorrect: "Incorrecto. ¡Inténtalo de nuevo!",
        tryAgain: "Intentar de Nuevo"
      }
    },
    languageSelector: {
      language: "Idioma",
      english: "English",
      spanish: "Español"
    }
  }
}