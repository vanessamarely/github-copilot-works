export interface DocumentationSection {
  id: string
  title: {
    en: string
    es: string
  }
  icon?: string
  content: {
    en: string
    es: string
  }
  subsections?: DocumentationSection[]
}

export const multilingualDocumentation: DocumentationSection[] = [
  {
    id: 'introduction',
    title: {
      en: 'Introduction to GitHub Copilot',
      es: 'Introducción a GitHub Copilot'
    },
    content: {
      en: `# Introduction to GitHub Copilot

Welcome to the GitHub Copilot Workshop! This comprehensive guide will take you through everything you need to know about GitHub Copilot, from basic setup to advanced usage patterns.

## What is GitHub Copilot?

GitHub Copilot is an AI-powered code completion tool developed by GitHub in collaboration with OpenAI. It acts as your AI pair programmer, suggesting whole lines or entire functions as you type.

### Key Features

- **Contextual Code Suggestions**: Copilot analyzes your code context to provide relevant suggestions
- **Multi-language Support**: Works with dozens of programming languages
- **Documentation Generation**: Helps write comments and documentation
- **Test Generation**: Assists in creating unit tests and test cases
- **Code Explanation**: Can explain complex code snippets

## How Does It Work?

Copilot uses a large language model trained on billions of lines of public code from GitHub repositories. It:

1. Analyzes your current code context
2. Understands your coding patterns and intent
3. Generates relevant code suggestions in real-time
4. Learns from your acceptance or rejection of suggestions

\`\`\`javascript
// Example: Copilot can complete this function
function calculateTotalPrice(items) {
  // Copilot suggests the implementation
  return items.reduce((total, item) => total + item.price, 0);
}
\`\`\`

## Benefits for Developers

- **Increased Productivity**: Write code faster with intelligent suggestions
- **Learning Tool**: Discover new coding patterns and best practices
- **Reduced Boilerplate**: Quickly generate repetitive code structures
- **Better Documentation**: Get help writing clear comments and docs
- **Test Coverage**: Generate comprehensive test suites

## Getting Started

This documentation supports multiple languages to serve developers worldwide:

<LanguagePreview />

## GitHub Copilot Plans and Licensing

Understanding GitHub Copilot's licensing model is crucial before getting started. GitHub offers different plans with varying features and limitations:

### GitHub Copilot Individual (Free Trial + Paid)
- **Free Trial**: 30-day free trial for new users
- **Monthly Pricing**: $10/month after trial
- **Features**: Full access to code completions, chat, and CLI assistance
- **Usage Limits**: No specific token limits for regular usage
- **Supported IDEs**: VS Code, Visual Studio, JetBrains IDEs, Neovim

### GitHub Copilot Business
- **Pricing**: $19/user/month
- **Enterprise Features**: Organization-level policy management
- **Enhanced Security**: Exclude public code suggestions
- **Administrative Controls**: Usage analytics and policy settings

### GitHub Copilot Enterprise
- **Pricing**: $39/user/month
- **Advanced Features**: Copilot knowledge bases, fine-tuning capabilities
- **Integration**: Deep integration with GitHub repositories
- **Personalization**: Custom models trained on your organization's code

### GitHub Copilot Free in VS Code (2025 Update)

**NEW: GitHub Copilot Free Tier in VS Code**

In 2025, GitHub introduced a limited free tier specifically for VS Code users:

**Free Tier Features**:
- **Monthly Completions**: 2,000 code completions per month
- **Monthly Chat Interactions**: 50 chat interactions per month  
- **VS Code Only**: Available exclusively in Visual Studio Code
- **No Credit Card Required**: Sign up with just your GitHub account
- **All Languages**: Support for all programming languages Copilot supports

**Free Tier Limitations**:
- **Usage Caps**: Hard limits on monthly completions and chat messages
- **No Overflow**: No additional usage when limits are reached
- **Single IDE**: Only works in VS Code, not other supported IDEs
- **No CLI Access**: GitHub Copilot CLI not included
- **No Enterprise Features**: No advanced security or admin controls

**What Happens When You Hit the Limit**:
- ⚠️ Completions stop working until next month
- ⚠️ Chat becomes unavailable until reset
- ⚠️ No "pay-per-use" option to extend limits
- ✅ Can upgrade to paid plan anytime for unlimited usage

### Other Free Access Options

**Students & Educators**: Free access through GitHub Education Pack
- **Requirements**: Verified student or educator status
- **Benefits**: Full GitHub Copilot Individual features
- **Duration**: While maintaining eligible status

**Open Source Maintainers**: Free access for qualifying projects
- **Requirements**: Maintainer of popular open source repositories
- **Verification**: GitHub reviews and approves applications
- **Benefits**: Full GitHub Copilot Individual features

**Traditional Free Trial**: 30-day trial for all new users
- **Duration**: One-time 30-day trial
- **Features**: Full access to all GitHub Copilot Individual features
- **After Trial**: Must subscribe or switch to free tier (VS Code only)  

Before we dive into the technical setup, let's understand what makes Copilot special:

> GitHub Copilot doesn't just autocomplete - it understands context, intent, and coding patterns to provide meaningful suggestions that can significantly speed up your development workflow.`,
      es: `# Introducción a GitHub Copilot

¡Bienvenido al Taller de GitHub Copilot! Esta guía completa te llevará a través de todo lo que necesitas saber sobre GitHub Copilot, desde la configuración básica hasta patrones de uso avanzados.

## ¿Qué es GitHub Copilot?

GitHub Copilot es una herramienta de completado de código impulsada por IA desarrollada por GitHub en colaboración con OpenAI. Actúa como tu programador de IA en pareja, sugiriendo líneas completas o funciones enteras mientras escribes.

### Características Principales

- **Sugerencias de Código Contextuales**: Copilot analiza el contexto de tu código para proporcionar sugerencias relevantes
- **Soporte Multi-lenguaje**: Funciona con docenas de lenguajes de programación
- **Generación de Documentación**: Ayuda a escribir comentarios y documentación
- **Generación de Pruebas**: Asiste en la creación de pruebas unitarias y casos de prueba
- **Explicación de Código**: Puede explicar fragmentos de código complejos

## ¿Cómo Funciona?

Copilot utiliza un modelo de lenguaje grande entrenado en miles de millones de líneas de código público de repositorios de GitHub. Esto:

1. Analiza el contexto actual de tu código
2. Entiende tus patrones de codificación e intención
3. Genera sugerencias de código relevantes en tiempo real
4. Aprende de tu aceptación o rechazo de las sugerencias

\`\`\`javascript
// Ejemplo: Copilot puede completar esta función
function calculateTotalPrice(items) {
  // Copilot sugiere la implementación
  return items.reduce((total, item) => total + item.price, 0);
}
\`\`\`

## Beneficios para Desarrolladores

- **Mayor Productividad**: Escribe código más rápido con sugerencias inteligentes
- **Herramienta de Aprendizaje**: Descubre nuevos patrones de codificación y mejores prácticas
- **Menos Código Repetitivo**: Genera rápidamente estructuras de código repetitivas
- **Mejor Documentación**: Obtén ayuda escribiendo comentarios y documentación claros
- **Cobertura de Pruebas**: Genera suites de pruebas comprensivas

## Comenzando

Esta documentación soporta múltiples idiomas para servir a desarrolladores de todo el mundo:

<LanguagePreview />

## Planes y Licencias de GitHub Copilot

Entender el modelo de licencias de GitHub Copilot es crucial antes de comenzar. GitHub ofrece diferentes planes con características y limitaciones variadas:

### GitHub Copilot Individual (Prueba Gratuita + Pago)
- **Prueba Gratuita**: Prueba gratuita de 30 días para nuevos usuarios
- **Precio Mensual**: $10/mes después de la prueba
- **Características**: Acceso completo a completados de código, chat y asistencia CLI
- **Límites de Uso**: Sin límites específicos de tokens para uso regular
- **IDEs Soportados**: VS Code, Visual Studio, IDEs de JetBrains, Neovim

### GitHub Copilot Business
- **Precio**: $19/usuario/mes
- **Características Empresariales**: Gestión de políticas a nivel organizacional
- **Seguridad Mejorada**: Excluir sugerencias de código público
- **Controles Administrativos**: Análisis de uso y configuración de políticas

### GitHub Copilot Enterprise
- **Precio**: $39/usuario/mes
- **Características Avanzadas**: Bases de conocimiento de Copilot, capacidades de ajuste fino
- **Integración**: Integración profunda con repositorios de GitHub
- **Personalización**: Modelos personalizados entrenados en el código de tu organización

### GitHub Copilot Gratuito en VS Code (Actualización 2025)

**NUEVO: Nivel Gratuito de GitHub Copilot en VS Code**

En 2025, GitHub introdujo un nivel gratuito limitado específicamente para usuarios de VS Code:

**Características del Nivel Gratuito**:
- **Completados Mensuales**: 2,000 completados de código por mes
- **Interacciones de Chat Mensuales**: 50 interacciones de chat por mes  
- **Solo VS Code**: Disponible exclusivamente en Visual Studio Code
- **Sin Tarjeta de Crédito**: Regístrate solo con tu cuenta de GitHub
- **Todos los Lenguajes**: Soporte para todos los lenguajes de programación que Copilot admite

**Limitaciones del Nivel Gratuito**:
- **Límites de Uso**: Límites estrictos en completados mensuales y mensajes de chat
- **Sin Sobrepaso**: Sin uso adicional cuando se alcanzan los límites
- **IDE Único**: Solo funciona en VS Code, no en otros IDEs soportados
- **Sin Acceso CLI**: GitHub Copilot CLI no incluido
- **Sin Características Empresariales**: Sin controles avanzados de seguridad o administración

**Qué Sucede Cuando Alcanzas el Límite**:
- ⚠️ Los completados dejan de funcionar hasta el próximo mes
- ⚠️ El chat se vuelve no disponible hasta el reinicio
- ⚠️ No hay opción de "pago por uso" para extender límites
- ✅ Puedes actualizar al plan pago en cualquier momento para uso ilimitado

### Otras Opciones de Acceso Gratuito

**Estudiantes y Educadores**: Acceso gratuito a través del GitHub Education Pack
- **Requisitos**: Estado de estudiante o educador verificado
- **Beneficios**: Características completas de GitHub Copilot Individual
- **Duración**: Mientras mantengas el estado elegible

**Mantenedores de Código Abierto**: Acceso gratuito para proyectos que califican
- **Requisitos**: Mantenedor de repositorios populares de código abierto
- **Verificación**: GitHub revisa y aprueba aplicaciones
- **Beneficios**: Características completas de GitHub Copilot Individual

**Prueba Gratuita Tradicional**: Prueba de 30 días para todos los nuevos usuarios
- **Duración**: Prueba única de 30 días
- **Características**: Acceso completo a todas las características de GitHub Copilot Individual
- **Después de la Prueba**: Debes suscribirte o cambiar al nivel gratuito (solo VS Code)  

Antes de sumergirnos en la configuración técnica, entendamos qué hace especial a Copilot:

> GitHub Copilot no solo autocompleta - entiende el contexto, la intención y los patrones de codificación para proporcionar sugerencias significativas que pueden acelerar significativamente tu flujo de trabajo de desarrollo.`
    }
  },
  {
    id: 'setup',
    title: {
      en: 'Setting up GitHub Copilot',
      es: 'Configuración de GitHub Copilot'
    },
    content: {
      en: `# Setting up GitHub Copilot

This section will guide you through the complete setup process for GitHub Copilot in Visual Studio Code.

## Prerequisites

Before setting up Copilot, ensure you have:

- **GitHub Account**: A valid GitHub account with Copilot access
- **Visual Studio Code**: Latest version installed
- **Active Subscription**: GitHub Copilot subscription (free trial available)

## Step 1: Choose Your Access Plan

### Option A: GitHub Copilot Free (VS Code Only)

**New in 2025**: Start with the free tier in VS Code:

1. Open Visual Studio Code
2. Go to Extensions (\`Ctrl+Shift+X\` or \`Cmd+Shift+X\`)
3. Search for "GitHub Copilot"
4. Install the extension
5. Sign in with your GitHub account
6. **No credit card required** - automatically get:
   - 2,000 code completions per month
   - 50 chat interactions per month

**Free Tier Usage Tips**:
- Monitor your usage in VS Code status bar
- Prioritize complex code over simple completions
- Use chat for learning and debugging rather than basic questions
- Plan upgrade timing if you approach limits

### Option B: Start Free Trial (All IDEs)

For full access across all supported IDEs:

1. Visit [github.com/copilot](https://github.com/copilot)
2. Click "Start free trial"
3. Complete the setup process
4. 30 days of unlimited access to all features

### Option C: Educational/Open Source Access

**Students & Educators**:
- Apply through [GitHub Education Pack](https://education.github.com)
- Verification required for academic status
- Full access while enrolled/teaching

**Open Source Maintainers**:
- Apply for free access if you maintain popular repositories
- GitHub reviews applications case-by-case
- Criteria based on project impact and community involvement

## Step 2: Install the GitHub Copilot Extension

## Step 2: Install the GitHub Copilot Extension

1. Open Visual Studio Code
2. Go to the Extensions view (\`Ctrl+Shift+X\` or \`Cmd+Shift+X\`)
3. Search for "GitHub Copilot"
4. Click "Install" on the official GitHub Copilot extension

## Step 3: Sign in to GitHub

1. After installation, you'll see a notification to sign in
2. Click "Sign in to GitHub"
3. Your browser will open - authorize the application
4. Return to VS Code when prompted

## Step 4: Verify Installation

Create a new file and start typing. You should see Copilot suggestions appear as gray text.

\`\`\`javascript
// Type this comment and see Copilot suggest code
// Function to calculate fibonacci sequence
\`\`\`

## Configuration Options

Access Copilot settings through:
- \`Ctrl+,\` (or \`Cmd+,\`) → Search "copilot"
- Command Palette → "GitHub Copilot: Configure"

### Key Settings

- **Enable/Disable**: Toggle Copilot on/off
- **Inline Suggestions**: Control suggestion visibility
- **Language Specific**: Configure per programming language

## Maximizing Your Free Trial

If you're using the 30-day free trial, here are tips to get the most value:

### Smart Usage Strategies
- **Focus on Learning**: Use the trial period to understand how Copilot works with your coding style
- **Try Different Languages**: Experiment with various programming languages to see Copilot's versatility
- **Explore Features**: Test code completion, chat, explanations, and documentation generation
- **Document Patterns**: Note which types of suggestions work best for your projects

### Trial Period Best Practices
- **Set Clear Goals**: Define what you want to achieve during the trial
- **Daily Usage**: Use Copilot regularly to understand its full potential
- **Compare Productivity**: Measure your coding speed and accuracy with and without Copilot
- **Team Evaluation**: If evaluating for a team, gather feedback from multiple developers

### Planning for Post-Trial
- **Budget Planning**: Factor the monthly cost into your development budget
- **ROI Assessment**: Calculate time saved vs. subscription cost
- **Team Discussion**: Discuss adoption with your team before trial expires
- **Alternative Evaluation**: Compare with other AI coding assistants if needed

### Usage Monitoring
While there are no strict token limits, be mindful of:
- **Heavy Usage**: Avoid excessive requests in short periods
- **Network Latency**: Some suggestions may be slower during peak times
- **Context Quality**: Provide clear, well-structured code for better suggestions`,
      es: `# Configuración de GitHub Copilot

Esta sección te guiará a través del proceso completo de configuración de GitHub Copilot en Visual Studio Code.

## Requisitos Previos

Antes de configurar Copilot, asegúrate de tener:

- **Cuenta de GitHub**: Una cuenta válida de GitHub con acceso a Copilot
- **Visual Studio Code**: Última versión instalada
- **Suscripción Activa**: Suscripción a GitHub Copilot (prueba gratuita disponible)

## Paso 1: Elige Tu Plan de Acceso

### Opción A: GitHub Copilot Gratuito (Solo VS Code)

**Nuevo en 2025**: Comienza con el nivel gratuito en VS Code:

1. Abre Visual Studio Code
2. Ve a Extensiones (\`Ctrl+Shift+X\` o \`Cmd+Shift+X\`)
3. Busca "GitHub Copilot"
4. Instala la extensión
5. Inicia sesión con tu cuenta de GitHub
6. **No se requiere tarjeta de crédito** - automáticamente obtienes:
   - 2,000 completados de código por mes
   - 50 interacciones de chat por mes

**Consejos para el Uso del Nivel Gratuito**:
- Monitorea tu uso en la barra de estado de VS Code
- Prioriza código complejo sobre completados simples
- Usa el chat para aprender y depurar en lugar de preguntas básicas
- Planifica el tiempo de actualización si te acercas a los límites

### Opción B: Iniciar Prueba Gratuita (Todos los IDEs)

Para acceso completo en todos los IDEs soportados:

1. Visita [github.com/copilot](https://github.com/copilot)
2. Haz clic en "Iniciar prueba gratuita"
3. Completa el proceso de configuración
4. 30 días de acceso ilimitado a todas las características

### Opción C: Acceso Educativo/Código Abierto

**Estudiantes y Educadores**:
- Aplica a través del [GitHub Education Pack](https://education.github.com)
- Verificación requerida para estado académico
- Acceso completo mientras estés inscrito/enseñando

**Mantenedores de Código Abierto**:
- Aplica para acceso gratuito si mantienes repositorios populares
- GitHub revisa las aplicaciones caso por caso
- Criterios basados en el impacto del proyecto y participación comunitaria

## Paso 2: Instalar la Extensión de GitHub Copilot

## Paso 2: Instalar la Extensión de GitHub Copilot

1. Abre Visual Studio Code
2. Ve a la vista de Extensiones (\`Ctrl+Shift+X\` o \`Cmd+Shift+X\`)
3. Busca "GitHub Copilot"
4. Haz clic en "Instalar" en la extensión oficial de GitHub Copilot

## Paso 3: Iniciar Sesión en GitHub

1. Después de la instalación, verás una notificación para iniciar sesión
2. Haz clic en "Iniciar sesión en GitHub"
3. Tu navegador se abrirá - autoriza la aplicación
4. Regresa a VS Code cuando se te solicite

## Paso 4: Verificar la Instalación

Crea un nuevo archivo y comienza a escribir. Deberías ver las sugerencias de Copilot aparecer como texto gris.

\`\`\`javascript
// Escribe este comentario y ve cómo Copilot sugiere código
// Función para calcular la secuencia de fibonacci
\`\`\`

## Opciones de Configuración

Accede a las configuraciones de Copilot a través de:
- \`Ctrl+,\` (o \`Cmd+,\`) → Buscar "copilot"
- Paleta de Comandos → "GitHub Copilot: Configure"

### Configuraciones Clave

- **Habilitar/Deshabilitar**: Activar/desactivar Copilot
- **Sugerencias en Línea**: Controlar la visibilidad de sugerencias
- **Específico por Lenguaje**: Configurar por lenguaje de programación

## Maximizando Tu Prueba Gratuita

Si estás usando la prueba gratuita de 30 días, aquí tienes consejos para obtener el máximo valor:

### Estrategias de Uso Inteligente
- **Enfócate en Aprender**: Usa el período de prueba para entender cómo funciona Copilot con tu estilo de codificación
- **Prueba Diferentes Lenguajes**: Experimenta con varios lenguajes de programación para ver la versatilidad de Copilot
- **Explora Características**: Prueba completado de código, chat, explicaciones y generación de documentación
- **Documenta Patrones**: Nota qué tipos de sugerencias funcionan mejor para tus proyectos

### Mejores Prácticas del Período de Prueba
- **Establece Metas Claras**: Define qué quieres lograr durante la prueba
- **Uso Diario**: Usa Copilot regularmente para entender su potencial completo
- **Compara Productividad**: Mide tu velocidad y precisión de codificación con y sin Copilot
- **Evaluación de Equipo**: Si evalúas para un equipo, reúne retroalimentación de múltiples desarrolladores

### Planificación Post-Prueba
- **Planificación de Presupuesto**: Incluye el costo mensual en tu presupuesto de desarrollo
- **Evaluación de ROI**: Calcula el tiempo ahorrado vs. el costo de suscripción
- **Discusión de Equipo**: Discute la adopción con tu equipo antes de que expire la prueba
- **Evaluación de Alternativas**: Compara con otros asistentes de codificación IA si es necesario

### Monitoreo de Uso
Aunque no hay límites estrictos de tokens, ten en cuenta:
- **Uso Intensivo**: Evita solicitudes excesivas en períodos cortos
- **Latencia de Red**: Algunas sugerencias pueden ser más lentas durante horas pico
- **Calidad del Contexto**: Proporciona código claro y bien estructurado para mejores sugerencias`
    }
  },
  {
    id: 'usage',
    title: {
      en: 'Using GitHub Copilot',
      es: 'Uso de GitHub Copilot'
    },
    content: {
      en: `# Using GitHub Copilot

Learn how to effectively use GitHub Copilot to enhance your coding workflow.

## Basic Usage Patterns

### Accepting Suggestions

- **Tab**: Accept the entire suggestion
- **Ctrl+→** (or **Cmd+→**): Accept word by word
- **Esc**: Dismiss the current suggestion

### Generating Multiple Suggestions

1. Type your code or comment
2. Press **Ctrl+Enter** (or **Cmd+Enter**)
3. Browse through multiple suggestions
4. Select the best one for your needs

## Best Practices

### Write Descriptive Comments

Good comments help Copilot understand your intent:

\`\`\`python
# Function to validate email address using regex
def validate_email(email):
    # Copilot will suggest appropriate implementation
\`\`\`

### Provide Context

Give Copilot context about your project:

\`\`\`javascript
// E-commerce shopping cart functionality
class ShoppingCart {
    // Add item to cart with quantity validation
    addItem(product, quantity) {
        // Copilot suggests implementation based on context
    }
}
\`\`\`

### Break Down Complex Tasks

Instead of asking for everything at once, break tasks into smaller pieces:

\`\`\`python
# Step 1: Parse user input
def parse_user_input(input_string):
    # Implementation here

# Step 2: Validate parsed data  
def validate_data(parsed_data):
    # Implementation here
\`\`\`

## Advanced Techniques

### Code Generation from Tests

Write tests first, then let Copilot suggest implementation:

\`\`\`javascript
// Test case
test('should calculate compound interest', () => {
    expect(calculateCompoundInterest(1000, 0.05, 2)).toBe(1102.50);
});

// Function implementation - Copilot suggests based on test
function calculateCompoundInterest(principal, rate, time) {
    // Suggestion appears here
}
\`\`\``,
      es: `# Uso de GitHub Copilot

Aprende cómo usar efectivamente GitHub Copilot para mejorar tu flujo de trabajo de codificación.

## Patrones de Uso Básicos

### Aceptar Sugerencias

- **Tab**: Acepta toda la sugerencia
- **Ctrl+→** (o **Cmd+→**): Acepta palabra por palabra
- **Esc**: Descartar la sugerencia actual

### Generar Múltiples Sugerencias

1. Escribe tu código o comentario
2. Presiona **Ctrl+Enter** (o **Cmd+Enter**)
3. Navega a través de múltiples sugerencias
4. Selecciona la mejor para tus necesidades

## Mejores Prácticas

### Escribir Comentarios Descriptivos

Buenos comentarios ayudan a Copilot a entender tu intención:

\`\`\`python
# Función para validar dirección de email usando regex
def validate_email(email):
    # Copilot sugerirá una implementación apropiada
\`\`\`

### Proporcionar Contexto

Da contexto a Copilot sobre tu proyecto:

\`\`\`javascript
// Funcionalidad de carrito de compras de e-commerce
class ShoppingCart {
    // Agregar artículo al carrito con validación de cantidad
    addItem(product, quantity) {
        // Copilot sugiere implementación basada en el contexto
    }
}
\`\`\`

### Dividir Tareas Complejas

En lugar de pedir todo de una vez, divide las tareas en piezas más pequeñas:

\`\`\`python
# Paso 1: Analizar entrada del usuario
def parse_user_input(input_string):
    # Implementación aquí

# Paso 2: Validar datos analizados
def validate_data(parsed_data):
    # Implementación aquí
\`\`\`

## Técnicas Avanzadas

### Generación de Código desde Pruebas

Escribe las pruebas primero, luego deja que Copilot sugiera la implementación:

\`\`\`javascript
// Caso de prueba
test('debería calcular interés compuesto', () => {
    expect(calculateCompoundInterest(1000, 0.05, 2)).toBe(1102.50);
});

// Implementación de función - Copilot sugiere basado en la prueba
function calculateCompoundInterest(principal, rate, time) {
    // La sugerencia aparece aquí
}
\`\`\``
    }
  },
  {
    id: 'best-practices',
    title: {
      en: 'Best Practices',
      es: 'Mejores Prácticas'
    },
    content: {
      en: `# Best Practices for GitHub Copilot

Master these practices to get the most out of GitHub Copilot while maintaining code quality and security.

## Code Quality Guidelines

### Review All Suggestions

- Never blindly accept suggestions
- Understand what the code does before using it
- Test generated code thoroughly
- Ensure it follows your project's conventions

### Maintain Consistent Style

\`\`\`javascript
// Good: Provide style context
const apiEndpoints = {
    users: '/api/v1/users',
    products: '/api/v1/products'
};

// Copilot will follow the established pattern
const newEndpoint = {
    orders: '/api/v1/orders' // Follows convention
};
\`\`\`

## Security Considerations

### Never Include Sensitive Data

- Avoid hardcoded passwords, API keys, or tokens
- Review suggestions for potential security vulnerabilities
- Use environment variables for sensitive configuration

### Validate Input Handling

\`\`\`python
# Always review input validation suggestions
def process_user_data(user_input):
    # Ensure Copilot suggests proper validation
    if not user_input or len(user_input.strip()) == 0:
        raise ValueError("Invalid input")
    # Continue processing...
\`\`\`

## Performance Optimization

### Efficient Algorithms

Guide Copilot toward efficient solutions:

\`\`\`python
# Instead of: "sort the list"
# Write: "sort the list using merge sort for O(n log n) performance"
def efficient_sort(data):
    # Copilot suggests optimized implementation
\`\`\`

### Memory Management

\`\`\`javascript
// Help Copilot understand memory constraints
// Process large dataset in chunks to avoid memory issues
function processLargeDataset(data) {
    const chunkSize = 1000;
    // Copilot suggests chunked processing
}
\`\`\`

## Team Collaboration

### Document Generated Code

\`\`\`python
def complex_algorithm(input_data):
    """
    Generated with GitHub Copilot assistance.
    Implements advanced sorting algorithm for large datasets.
    
    Args:
        input_data: List of items to sort
    Returns:
        Sorted list with O(n log n) complexity
    """
    # Implementation here
\`\`\`

### Code Review Process

1. **Flag AI-generated code** in pull requests
2. **Extra scrutiny** for complex algorithms
3. **Performance testing** for critical paths
4. **Security review** for user-facing features`,
      es: `# Mejores Prácticas para GitHub Copilot

Domina estas prácticas para obtener el máximo provecho de GitHub Copilot mientras mantienes la calidad y seguridad del código.

## Directrices de Calidad del Código

### Revisar Todas las Sugerencias

- Nunca aceptes sugerencias ciegamente
- Entiende qué hace el código antes de usarlo
- Prueba el código generado exhaustivamente
- Asegúrate de que siga las convenciones de tu proyecto

### Mantener Estilo Consistente

\`\`\`javascript
// Bueno: Proporcionar contexto de estilo
const apiEndpoints = {
    users: '/api/v1/users',
    products: '/api/v1/products'
};

// Copilot seguirá el patrón establecido
const newEndpoint = {
    orders: '/api/v1/orders' // Sigue la convención
};
\`\`\`

## Consideraciones de Seguridad

### Nunca Incluir Datos Sensibles

- Evita contraseñas codificadas, claves API o tokens
- Revisa las sugerencias por vulnerabilidades de seguridad potenciales
- Usa variables de entorno para configuración sensible

### Validar Manejo de Entrada

\`\`\`python
# Siempre revisa las sugerencias de validación de entrada
def process_user_data(user_input):
    # Asegúrate de que Copilot sugiera validación apropiada
    if not user_input or len(user_input.strip()) == 0:
        raise ValueError("Entrada inválida")
    # Continuar procesamiento...
\`\`\`

## Optimización de Rendimiento

### Algoritmos Eficientes

Guía a Copilot hacia soluciones eficientes:

\`\`\`python
# En lugar de: "ordena la lista"
# Escribe: "ordena la lista usando merge sort para rendimiento O(n log n)"
def efficient_sort(data):
    # Copilot sugiere implementación optimizada
\`\`\`

### Gestión de Memoria

\`\`\`javascript
// Ayuda a Copilot a entender restricciones de memoria
// Procesar conjunto de datos grande en chunks para evitar problemas de memoria
function processLargeDataset(data) {
    const chunkSize = 1000;
    // Copilot sugiere procesamiento en chunks
}
\`\`\`

## Colaboración en Equipo

### Documentar Código Generado

\`\`\`python
def complex_algorithm(input_data):
    """
    Generado con asistencia de GitHub Copilot.
    Implementa algoritmo de ordenamiento avanzado para conjuntos de datos grandes.
    
    Args:
        input_data: Lista de elementos a ordenar
    Returns:
        Lista ordenada con complejidad O(n log n)
    """
    # Implementación aquí
\`\`\`

### Proceso de Revisión de Código

1. **Marcar código generado por IA** en pull requests
2. **Escrutinio extra** para algoritmos complejos
3. **Pruebas de rendimiento** para rutas críticas
4. **Revisión de seguridad** para características de cara al usuario`
    }
  },
  {
    id: 'troubleshooting',
    title: {
      en: 'Troubleshooting & FAQ',
      es: 'Solución de Problemas y FAQ'
    },
    content: {
      en: `# Troubleshooting & FAQ

Common issues and solutions when working with GitHub Copilot.

## Common Issues

### Copilot Not Showing Suggestions

**Symptoms**: No gray text suggestions appear while typing

**Solutions**:
1. Check if Copilot is enabled: \`Ctrl+Shift+P\` → "GitHub Copilot: Enable"
2. Verify your subscription status in GitHub account settings
3. Restart VS Code
4. Check internet connection

\`\`\`bash
# Check Copilot status
code --list-extensions | grep copilot
\`\`\`

### Authentication Issues

**Symptoms**: "Not authenticated" errors

**Solutions**:
1. Sign out and sign back in: Command Palette → "GitHub Copilot: Sign Out"
2. Clear VS Code authentication cache
3. Check GitHub token permissions

### Free Tier Limit Management (VS Code Free - 2025)

**NEW**: Managing your monthly limits with GitHub Copilot Free

**Symptoms**: Hitting monthly completion or chat limits

**Monitoring Your Usage**:
1. Check VS Code status bar for current usage
2. View detailed usage: Command Palette → "GitHub Copilot: Check Usage"
3. Monthly reset occurs on your signup anniversary date

**Strategies to Optimize Limited Usage**:
1. **Smart Completion Usage**:
   - Use for complex logic rather than simple syntax
   - Prioritize unfamiliar APIs or languages
   - Skip completions for obvious code patterns

2. **Efficient Chat Usage**:
   - Ask comprehensive questions rather than multiple small ones
   - Use for debugging complex issues, not basic syntax help
   - Save chat for learning new concepts

3. **Preparation for Limit Reset**:
   - Plan complex projects around reset dates
   - Document useful patterns Copilot suggests
   - Consider upgrading before hitting limits on important deadlines

**When You Hit the Limit**:
- ❌ No "emergency" completions available
- ❌ Cannot purchase additional usage
- ✅ Can upgrade to paid plan instantly for unlimited access
- ✅ Can continue using VS Code normally without AI assistance

**Upgrade Timing Tips**:
- Upgrade mid-month to get full month's usage immediately
- Downgrade after paid month to return to free tier
- Compare monthly productivity gains vs. $10 subscription cost

### Subscription and Licensing Issues

**Symptoms**: "Copilot subscription expired" or access denied errors

**Solutions**:
1. **Check Subscription Status**:
   - Go to GitHub.com → Settings → Copilot
   - Verify your subscription is active
   - Check payment method if subscription failed

2. **Free Trial Expired**:
   - Subscribe to a paid plan to continue using Copilot
   - No free tier available after trial period
   - Student discounts available through GitHub Education

3. **Organization Licensing**:
   - Contact your organization admin for Copilot Business/Enterprise access
   - Verify you're part of the correct GitHub organization
   - Check if organization policies allow Copilot usage

4. **Rate Limiting Issues**:
   - Wait a few minutes if experiencing temporary slowdowns
   - Heavy usage during peak hours may cause delays
   - Consider upgrading to Business/Enterprise for priority access

### Usage Optimization During Trial

**Symptoms**: Want to maximize trial value

**Solutions**:
1. **Track Usage Patterns**:
   - Note which features provide most value
   - Document time savings for ROI calculation
   - Test with different programming languages

2. **Performance Monitoring**:
   - Monitor suggestion quality across different contexts
   - Compare productivity with and without Copilot
   - Evaluate team collaboration benefits

3. **Trial Extension Options**:
   - Students can get free access through GitHub Education Pack
   - Open source maintainers may qualify for free access
   - Contact GitHub for enterprise trial extensions if needed

### Poor Suggestion Quality

**Symptoms**: Irrelevant or incorrect suggestions

**Solutions**:
1. Provide better context with comments
2. Use more descriptive function/variable names
3. Add type annotations where possible

\`\`\`typescript
// Better context helps Copilot understand intent
interface User {
    id: string;
    email: string;
    lastLogin: Date;
}

// Function to find users who haven't logged in for 30 days
function findInactiveUsers(users: User[]): User[] {
    // Copilot provides better suggestions with clear context
}
\`\`\`

## Frequently Asked Questions

### Q: Does Copilot work offline?
**A**: No, Copilot requires an internet connection to generate suggestions.

### Q: Can I use Copilot for commercial projects?
**A**: Yes, with a GitHub Copilot for Business subscription.

### Q: How accurate are Copilot suggestions?
**A**: Accuracy varies by context. Always review and test suggestions.

### Q: Can Copilot generate entire applications?
**A**: Copilot works best for code snippets and functions, not entire applications.

## Performance Optimization

### Reduce Latency
- Close unnecessary files in VS Code
- Disable other AI extensions temporarily
- Use a stable internet connection

### Improve Suggestion Relevance
- Write clear, descriptive comments
- Use consistent naming conventions
- Provide type information when possible

## Getting Help

### Official Resources
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [VS Code Extension Issues](https://github.com/github/copilot-docs)
- [Community Forum](https://github.community/c/copilot)

### Diagnostic Commands

\`\`\`bash
# Check extension status
code --list-extensions --show-versions | grep copilot

# VS Code logs location
# Windows: %APPDATA%\\Code\\logs
# macOS: ~/Library/Application Support/Code/logs
# Linux: ~/.config/Code/logs
\`\`\``,
      es: `# Solución de Problemas y FAQ

Problemas comunes y soluciones al trabajar con GitHub Copilot.

## Problemas Comunes

### Copilot No Muestra Sugerencias

**Síntomas**: No aparecen sugerencias de texto gris mientras escribes

**Soluciones**:
1. Verifica si Copilot está habilitado: \`Ctrl+Shift+P\` → "GitHub Copilot: Enable"
2. Verifica el estado de tu suscripción en la configuración de cuenta de GitHub
3. Reinicia VS Code
4. Verifica la conexión a internet

\`\`\`bash
# Verificar estado de Copilot
code --list-extensions | grep copilot
\`\`\`

### Problemas de Autenticación

**Síntomas**: Errores de "No autenticado"

**Soluciones**:
1. Cerrar sesión y volver a iniciar: Paleta de Comandos → "GitHub Copilot: Sign Out"
2. Limpiar caché de autenticación de VS Code
3. Verificar permisos del token de GitHub

### Gestión de Límites del Nivel Gratuito (VS Code Gratuito - 2025)

**NUEVO**: Gestionar tus límites mensuales con GitHub Copilot Gratuito

**Síntomas**: Alcanzar límites mensuales de completados o chat

**Monitoreo de Tu Uso**:
1. Verificar barra de estado de VS Code para uso actual
2. Ver uso detallado: Paleta de Comandos → "GitHub Copilot: Check Usage"
3. El reinicio mensual ocurre en la fecha de aniversario de tu registro

**Estrategias para Optimizar Uso Limitado**:
1. **Uso Inteligente de Completados**:
   - Usar para lógica compleja en lugar de sintaxis simple
   - Priorizar APIs o lenguajes desconocidos
   - Omitir completados para patrones de código obvios

2. **Uso Eficiente del Chat**:
   - Hacer preguntas comprensivas en lugar de múltiples pequeñas
   - Usar para depurar problemas complejos, no ayuda de sintaxis básica
   - Reservar chat para aprender nuevos conceptos

3. **Preparación para Reinicio de Límite**:
   - Planificar proyectos complejos alrededor de fechas de reinicio
   - Documentar patrones útiles que Copilot sugiere
   - Considerar actualizar antes de alcanzar límites en fechas límite importantes

**Cuando Alcanzas el Límite**:
- ❌ No hay completados de "emergencia" disponibles
- ❌ No se puede comprar uso adicional
- ✅ Puedes actualizar al plan pago instantáneamente para acceso ilimitado
- ✅ Puedes continuar usando VS Code normalmente sin asistencia de IA

**Consejos de Tiempo de Actualización**:
- Actualizar a mitad de mes para obtener uso completo del mes inmediatamente
- Degradar después del mes pagado para regresar al nivel gratuito
- Comparar ganancias de productividad mensual vs. costo de suscripción de $10

### Problemas de Suscripción y Licencias

**Síntomas**: Errores de "Suscripción de Copilot expirada" o acceso denegado

**Soluciones**:
1. **Verificar Estado de Suscripción**:
   - Ir a GitHub.com → Configuración → Copilot
   - Verificar que tu suscripción esté activa
   - Revisar método de pago si la suscripción falló

2. **Prueba Gratuita Expirada**:
   - Suscribirse a un plan de pago para continuar usando Copilot
   - No hay nivel gratuito disponible después del período de prueba
   - Descuentos para estudiantes disponibles a través de GitHub Education

3. **Licencias Organizacionales**:
   - Contactar al administrador de tu organización para acceso a Copilot Business/Enterprise
   - Verificar que seas parte de la organización correcta de GitHub
   - Revisar si las políticas de la organización permiten el uso de Copilot

4. **Problemas de Limitación de Velocidad**:
   - Esperar unos minutos si experimentas ralentizaciones temporales
   - El uso intensivo durante horas pico puede causar retrasos
   - Considerar actualizar a Business/Enterprise para acceso prioritario

### Optimización de Uso Durante la Prueba

**Síntomas**: Querer maximizar el valor de la prueba

**Soluciones**:
1. **Rastrear Patrones de Uso**:
   - Notar qué características proporcionan más valor
   - Documentar ahorros de tiempo para cálculo de ROI
   - Probar con diferentes lenguajes de programación

2. **Monitoreo de Rendimiento**:
   - Monitorear calidad de sugerencias en diferentes contextos
   - Comparar productividad con y sin Copilot
   - Evaluar beneficios de colaboración en equipo

3. **Opciones de Extensión de Prueba**:
   - Los estudiantes pueden obtener acceso gratuito a través del GitHub Education Pack
   - Los mantenedores de código abierto pueden calificar para acceso gratuito
   - Contactar a GitHub para extensiones de prueba empresarial si es necesario

### Calidad Pobre de Sugerencias

**Síntomas**: Sugerencias irrelevantes o incorrectas

**Soluciones**:
1. Proporcionar mejor contexto con comentarios
2. Usar nombres de función/variable más descriptivos
3. Agregar anotaciones de tipo cuando sea posible

\`\`\`typescript
// Mejor contexto ayuda a Copilot a entender la intención
interface User {
    id: string;
    email: string;
    lastLogin: Date;
}

// Función para encontrar usuarios que no han iniciado sesión en 30 días
function findInactiveUsers(users: User[]): User[] {
    // Copilot proporciona mejores sugerencias con contexto claro
}
\`\`\`

## Preguntas Frecuentes

### P: ¿Funciona Copilot sin conexión?
**R**: No, Copilot requiere una conexión a internet para generar sugerencias.

### P: ¿Puedo usar Copilot para proyectos comerciales?
**R**: Sí, con una suscripción de GitHub Copilot for Business.

### P: ¿Qué tan precisas son las sugerencias de Copilot?
**R**: La precisión varía según el contexto. Siempre revisa y prueba las sugerencias.

### P: ¿Puede Copilot generar aplicaciones completas?
**R**: Copilot funciona mejor para fragmentos de código y funciones, no aplicaciones completas.

## Optimización de Rendimiento

### Reducir Latencia
- Cerrar archivos innecesarios en VS Code
- Deshabilitar otras extensiones de IA temporalmente
- Usar una conexión a internet estable

### Mejorar Relevancia de Sugerencias
- Escribir comentarios claros y descriptivos
- Usar convenciones de nomenclatura consistentes
- Proporcionar información de tipos cuando sea posible

## Obtener Ayuda

### Recursos Oficiales
- [Documentación de GitHub Copilot](https://docs.github.com/en/copilot)
- [Problemas de Extensión VS Code](https://github.com/github/copilot-docs)
- [Foro de la Comunidad](https://github.community/c/copilot)

### Comandos de Diagnóstico

\`\`\`bash
# Verificar estado de extensión
code --list-extensions --show-versions | grep copilot

# Ubicación de logs de VS Code
# Windows: %APPDATA%\\Code\\logs
# macOS: ~/Library/Application Support/Code/logs
# Linux: ~/.config/Code/logs
\`\`\``
    }
  },
  {
    id: 'cheat-sheet',
    title: {
      en: 'GitHub Copilot Cheat Sheet',
      es: 'Hoja de Referencia de GitHub Copilot'
    },
    content: {
      en: `# GitHub Copilot Cheat Sheet

Quick reference guide for GitHub Copilot shortcuts, commands, and essential tips.

## 🚀 Essential Shortcuts & Commands

### Code Completion
| Action | Shortcut | Description |
|--------|----------|-------------|
| **Accept suggestion** | \`Tab\` | Accept the entire inline suggestion |
| **Accept word** | \`Ctrl+→\` / \`Cmd+→\` | Accept suggestion word by word |
| **Dismiss suggestion** | \`Esc\` | Reject current suggestion |
| **Next suggestion** | \`Alt+]\` / \`Option+]\` | Cycle to next suggestion |
| **Previous suggestion** | \`Alt+[\` / \`Option+[\` | Cycle to previous suggestion |
| **Multiple suggestions** | \`Ctrl+Enter\` / \`Cmd+Enter\` | Open suggestions panel |

### GitHub Copilot Chat
| Action | Shortcut | Description |
|--------|----------|-------------|
| **Open chat** | \`Ctrl+Shift+I\` / \`Cmd+Shift+I\` | Open Copilot chat panel |
| **Quick chat** | \`Ctrl+I\` / \`Cmd+I\` | Inline chat in editor |
| **Explain code** | \`/explain\` | Ask Copilot to explain selected code |
| **Fix errors** | \`/fix\` | Ask Copilot to fix code issues |
| **Generate tests** | \`/tests\` | Generate unit tests for code |
| **Optimize code** | \`/optimize\` | Suggest performance improvements |

### Command Palette Actions
Press \`Ctrl+Shift+P\` (Windows/Linux) or \`Cmd+Shift+P\` (Mac), then type:

| Command | Function |
|---------|----------|
| \`GitHub Copilot: Enable\` | Enable Copilot suggestions |
| \`GitHub Copilot: Disable\` | Disable Copilot suggestions |
| \`GitHub Copilot: Toggle\` | Quick toggle on/off |
| \`GitHub Copilot: Sign Out\` | Sign out of GitHub account |
| \`GitHub Copilot: Check Usage\` | View usage statistics (Free tier) |

## 💡 Writing Effective Prompts

### Comment Patterns That Work
\`\`\`javascript
// ✅ GOOD: Specific and descriptive
// Function to validate email address using RFC 5322 standard
function validateEmail(email) {
    // Copilot provides accurate regex implementation
}

// ✅ GOOD: Include context and constraints
// Sort array of products by price (ascending) and handle null values
function sortProductsByPrice(products) {
    // Implementation appears here
}

// ❌ AVOID: Vague or too brief
// sort function
function sort(arr) {
    // Poor context leads to generic suggestions
}
\`\`\`

### Function Signature Patterns
\`\`\`typescript
// ✅ GOOD: Clear types and purpose
interface User {
    id: string;
    email: string;
    lastLogin: Date;
}

// Find users who haven't logged in for specified days
function findInactiveUsers(users: User[], daysSinceLogin: number): User[] {
    // Copilot understands the full context
}

// ✅ GOOD: Error handling context
// Fetch user data with retry logic and timeout handling
async function fetchUserWithRetry(userId: string, maxRetries = 3): Promise<User> {
    // Robust implementation with error handling
}
\`\`\`

## 🏷️ Language-Specific Tips

### JavaScript/TypeScript
\`\`\`javascript
// Use JSDoc for better suggestions
/**
 * Calculate monthly payment for a loan
 * @param {number} principal - Loan amount
 * @param {number} rate - Annual interest rate (as decimal)
 * @param {number} years - Loan term in years
 * @returns {number} Monthly payment amount
 */
function calculateMonthlyPayment(principal, rate, years) {
    // Copilot provides accurate financial calculation
}

// Leverage modern JavaScript patterns
// Create debounced search function for API calls
const debouncedSearch = debounce((query) => {
    // API search logic
}, 300);
\`\`\`

### Python
\`\`\`python
# Use type hints for better suggestions
from typing import List, Dict, Optional

def analyze_sales_data(
    sales: List[Dict[str, float]], 
    period: str = "monthly"
) -> Dict[str, float]:
    """
    Analyze sales data and return key metrics.
    Handles missing data and calculates trends.
    """
    # Copilot provides comprehensive data analysis
    pass

# Data science context helps
import pandas as pd
import numpy as np

# Clean dataset by removing outliers using IQR method
def remove_outliers_iqr(df: pd.DataFrame, column: str) -> pd.DataFrame:
    # Statistical outlier removal implementation
    pass
\`\`\`

### React Components
\`\`\`tsx
// Provide component context and props interface
interface ProductCardProps {
    product: {
        id: string;
        name: string;
        price: number;
        imageUrl: string;
    };
    onAddToCart: (productId: string) => void;
}

// Interactive product card with image, price, and add to cart button
const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    // Copilot creates complete component with proper JSX
    return (
        // Component JSX here
    );
};
\`\`\`

## 🔧 Configuration Tips

### VS Code Settings
Add to your \`settings.json\`:
\`\`\`json
{
    // Enable/disable inline suggestions
    "github.copilot.enable": {
        "*": true,
        "yaml": false,
        "plaintext": false
    },
    
    // Control suggestion trigger
    "github.copilot.inlineSuggest.enable": true,
    
    // Language-specific settings
    "github.copilot.autocomplete.enable": true
}
\`\`\`

### File-level Control
\`\`\`javascript
// Disable Copilot for specific file
// copilot:disable

// Enable only for this file (if globally disabled)
// copilot:enable
\`\`\`

## ⚡ Free Tier Optimization (2025)

### Smart Usage Strategies
- **Monitor Usage**: Check status bar for remaining completions/chats
- **Quality over Quantity**: Use for complex logic, skip simple syntax
- **Batch Questions**: Ask comprehensive chat questions vs. multiple small ones
- **Plan Timing**: Save usage for challenging tasks and deadlines

### Chat Efficiency
\`\`\`
❌ Inefficient:
"How do I declare a variable?"
"What's a function?"
"How to use if statements?"

✅ Efficient:
"Explain the best practices for variable naming, function organization, and control flow patterns in JavaScript for a React application. Include examples."
\`\`\`

## 🛡️ Security & Best Practices

### Always Review These Areas
- [ ] Authentication and authorization logic
- [ ] Input validation and sanitization  
- [ ] Database queries and SQL injection prevention
- [ ] API key and secret management
- [ ] Error handling that might leak information

### Code Quality Checklist
- [ ] Understand what the suggested code does
- [ ] Verify it matches your coding standards
- [ ] Test edge cases and error scenarios
- [ ] Check performance implications
- [ ] Ensure proper error handling

## 🎯 Common Use Cases

### API Integration
\`\`\`javascript
// REST API client with error handling and retry logic
class APIClient {
    constructor(baseURL, apiKey) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
    }
    
    // GET request with authentication and error handling
    async get(endpoint, params = {}) {
        // Copilot suggests fetch implementation
    }
}
\`\`\`

### Data Processing
\`\`\`python
# Process CSV file and generate analytics report
def generate_analytics_report(csv_file_path: str) -> Dict[str, Any]:
    """
    Read CSV, clean data, calculate metrics, and export results.
    Handles missing values and data type conversion.
    """
    # Comprehensive data processing pipeline
    pass
\`\`\`

### Form Validation
\`\`\`javascript
// Comprehensive form validation with real-time feedback
const FormValidator = {
    // Validate email with multiple checks
    email: (value) => {
        // Email validation logic
    },
    
    // Strong password requirements
    password: (value) => {
        // Password strength validation
    },
    
    // Credit card validation using Luhn algorithm
    creditCard: (number) => {
        // Credit card validation
    }
};
\`\`\`

## 🚨 Troubleshooting Quick Fixes

| Problem | Quick Solution |
|---------|----------------|
| No suggestions appearing | \`Ctrl+Shift+P\` → "GitHub Copilot: Enable" |
| Authentication error | \`Ctrl+Shift+P\` → "GitHub Copilot: Sign Out" → Sign back in |
| Hit free tier limit | Upgrade to paid plan or wait for monthly reset |
| Poor suggestion quality | Add more context with comments and type annotations |
| Slow suggestions | Check internet connection, close unused VS Code tabs |

## 📊 Productivity Metrics to Track

### During Free Trial/Evaluation
- **Lines of code written per hour**
- **Time spent on debugging vs. new feature development** 
- **Code quality metrics** (test coverage, complexity)
- **Learning acceleration** for new languages/frameworks
- **Documentation writing speed**

### ROI Calculation
\`\`\`
Monthly time saved (hours) × Hourly rate ($) = Value generated
Compare to subscription cost: $10/month Individual
Break-even: ~1 hour saved per month at $10/hour rate
\`\`\`

---

> 💡 **Pro Tip**: The best way to master Copilot is through consistent daily use. Start with simple tasks and gradually work up to complex challenges. Remember: Copilot is a powerful assistant, but you remain the architect of your code.`,
      es: `# Hoja de Referencia de GitHub Copilot

Guía de referencia rápida para atajos, comandos y consejos esenciales de GitHub Copilot.

## 🚀 Atajos y Comandos Esenciales

### Completado de Código
| Acción | Atajo | Descripción |
|--------|-------|-------------|
| **Aceptar sugerencia** | \`Tab\` | Acepta toda la sugerencia en línea |
| **Aceptar palabra** | \`Ctrl+→\` / \`Cmd+→\` | Acepta la sugerencia palabra por palabra |
| **Descartar sugerencia** | \`Esc\` | Rechaza la sugerencia actual |
| **Siguiente sugerencia** | \`Alt+]\` / \`Option+]\` | Cicla a la siguiente sugerencia |
| **Sugerencia anterior** | \`Alt+[\` / \`Option+[\` | Cicla a la sugerencia anterior |
| **Múltiples sugerencias** | \`Ctrl+Enter\` / \`Cmd+Enter\` | Abre panel de sugerencias |

### Chat de GitHub Copilot
| Acción | Atajo | Descripción |
|--------|-------|-------------|
| **Abrir chat** | \`Ctrl+Shift+I\` / \`Cmd+Shift+I\` | Abre panel de chat de Copilot |
| **Chat rápido** | \`Ctrl+I\` / \`Cmd+I\` | Chat en línea en el editor |
| **Explicar código** | \`/explain\` | Pide a Copilot que explique el código seleccionado |
| **Corregir errores** | \`/fix\` | Pide a Copilot que corrija problemas en el código |
| **Generar pruebas** | \`/tests\` | Genera pruebas unitarias para el código |
| **Optimizar código** | \`/optimize\` | Sugiere mejoras de rendimiento |

### Acciones de Paleta de Comandos
Presiona \`Ctrl+Shift+P\` (Windows/Linux) o \`Cmd+Shift+P\` (Mac), luego escribe:

| Comando | Función |
|---------|---------|
| \`GitHub Copilot: Enable\` | Habilita sugerencias de Copilot |
| \`GitHub Copilot: Disable\` | Deshabilita sugerencias de Copilot |
| \`GitHub Copilot: Toggle\` | Activar/desactivar rápido |
| \`GitHub Copilot: Sign Out\` | Cerrar sesión de cuenta de GitHub |
| \`GitHub Copilot: Check Usage\` | Ver estadísticas de uso (Nivel gratuito) |

## 💡 Escribiendo Prompts Efectivos

### Patrones de Comentarios que Funcionan
\`\`\`javascript
// ✅ BUENO: Específico y descriptivo
// Función para validar dirección de email usando estándar RFC 5322
function validateEmail(email) {
    // Copilot proporciona implementación precisa con regex
}

// ✅ BUENO: Incluye contexto y restricciones
// Ordenar array de productos por precio (ascendente) y manejar valores null
function sortProductsByPrice(products) {
    // La implementación aparece aquí
}

// ❌ EVITAR: Vago o muy breve
// función de ordenamiento
function sort(arr) {
    // Contexto pobre lleva a sugerencias genéricas
}
\`\`\`

### Patrones de Firma de Función
\`\`\`typescript
// ✅ BUENO: Tipos claros y propósito
interface User {
    id: string;
    email: string;
    lastLogin: Date;
}

// Encontrar usuarios que no han iniciado sesión por días especificados
function findInactiveUsers(users: User[], daysSinceLogin: number): User[] {
    // Copilot entiende el contexto completo
}

// ✅ BUENO: Contexto de manejo de errores
// Obtener datos de usuario con lógica de reintento y manejo de timeout
async function fetchUserWithRetry(userId: string, maxRetries = 3): Promise<User> {
    // Implementación robusta con manejo de errores
}
\`\`\`

## 🏷️ Consejos Específicos por Lenguaje

### JavaScript/TypeScript
\`\`\`javascript
// Usar JSDoc para mejores sugerencias
/**
 * Calcular pago mensual para un préstamo
 * @param {number} principal - Monto del préstamo
 * @param {number} rate - Tasa de interés anual (como decimal)
 * @param {number} years - Plazo del préstamo en años
 * @returns {number} Monto de pago mensual
 */
function calculateMonthlyPayment(principal, rate, years) {
    // Copilot proporciona cálculo financiero preciso
}

// Aprovechar patrones modernos de JavaScript
// Crear función de búsqueda con debounce para llamadas a API
const debouncedSearch = debounce((query) => {
    // Lógica de búsqueda en API
}, 300);
\`\`\`

### Python
\`\`\`python
# Usar type hints para mejores sugerencias
from typing import List, Dict, Optional

def analyze_sales_data(
    sales: List[Dict[str, float]], 
    period: str = "monthly"
) -> Dict[str, float]:
    """
    Analizar datos de ventas y retornar métricas clave.
    Maneja datos faltantes y calcula tendencias.
    """
    # Copilot proporciona análisis de datos comprensivo
    pass

# El contexto de ciencia de datos ayuda
import pandas as pd
import numpy as np

# Limpiar dataset removiendo outliers usando método IQR
def remove_outliers_iqr(df: pd.DataFrame, column: str) -> pd.DataFrame:
    # Implementación de remoción de outliers estadísticos
    pass
\`\`\`

### Componentes React
\`\`\`tsx
// Proporcionar contexto de componente e interfaz de props
interface ProductCardProps {
    product: {
        id: string;
        name: string;
        price: number;
        imageUrl: string;
    };
    onAddToCart: (productId: string) => void;
}

// Tarjeta de producto interactiva con imagen, precio y botón agregar al carrito
const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    // Copilot crea componente completo con JSX apropiado
    return (
        // JSX del componente aquí
    );
};
\`\`\`

## 🔧 Consejos de Configuración

### Configuraciones de VS Code
Agregar a tu \`settings.json\`:
\`\`\`json
{
    // Habilitar/deshabilitar sugerencias en línea
    "github.copilot.enable": {
        "*": true,
        "yaml": false,
        "plaintext": false
    },
    
    // Controlar activación de sugerencias
    "github.copilot.inlineSuggest.enable": true,
    
    // Configuraciones específicas por lenguaje
    "github.copilot.autocomplete.enable": true
}
\`\`\`

### Control a Nivel de Archivo
\`\`\`javascript
// Deshabilitar Copilot para archivo específico
// copilot:disable

// Habilitar solo para este archivo (si está deshabilitado globalmente)
// copilot:enable
\`\`\`

## ⚡ Optimización del Nivel Gratuito (2025)

### Estrategias de Uso Inteligente
- **Monitorear Uso**: Verificar barra de estado para completados/chats restantes
- **Calidad sobre Cantidad**: Usar para lógica compleja, omitir sintaxis simple
- **Preguntas en Lote**: Hacer preguntas comprensivas en chat vs. múltiples pequeñas
- **Planificar Tiempo**: Guardar uso para tareas desafiantes y fechas límite

### Eficiencia en Chat
\`\`\`
❌ Ineficiente:
"¿Cómo declaro una variable?"
"¿Qué es una función?"
"¿Cómo usar declaraciones if?"

✅ Eficiente:
"Explica las mejores prácticas para nombres de variables, organización de funciones y patrones de flujo de control en JavaScript para una aplicación React. Incluye ejemplos."
\`\`\`

## 🛡️ Seguridad y Mejores Prácticas

### Siempre Revisar Estas Áreas
- [ ] Lógica de autenticación y autorización
- [ ] Validación y sanitización de entrada
- [ ] Consultas de base de datos y prevención de inyección SQL
- [ ] Gestión de claves API y secretos
- [ ] Manejo de errores que podrían filtrar información

### Lista de Verificación de Calidad de Código
- [ ] Entender qué hace el código sugerido
- [ ] Verificar que coincida con tus estándares de codificación
- [ ] Probar casos límite y escenarios de error
- [ ] Verificar implicaciones de rendimiento
- [ ] Asegurar manejo apropiado de errores

## 🎯 Casos de Uso Comunes

### Integración de API
\`\`\`javascript
// Cliente API REST con manejo de errores y lógica de reintento
class APIClient {
    constructor(baseURL, apiKey) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
    }
    
    // Petición GET con autenticación y manejo de errores
    async get(endpoint, params = {}) {
        // Copilot sugiere implementación con fetch
    }
}
\`\`\`

### Procesamiento de Datos
\`\`\`python
# Procesar archivo CSV y generar reporte de analíticas
def generate_analytics_report(csv_file_path: str) -> Dict[str, Any]:
    """
    Leer CSV, limpiar datos, calcular métricas y exportar resultados.
    Maneja valores faltantes y conversión de tipos de datos.
    """
    # Pipeline comprensivo de procesamiento de datos
    pass
\`\`\`

### Validación de Formularios
\`\`\`javascript
// Validación comprensiva de formularios con retroalimentación en tiempo real
const FormValidator = {
    // Validar email con múltiples verificaciones
    email: (value) => {
        // Lógica de validación de email
    },
    
    // Requisitos de contraseña fuerte
    password: (value) => {
        // Validación de fortaleza de contraseña
    },
    
    // Validación de tarjeta de crédito usando algoritmo de Luhn
    creditCard: (number) => {
        // Validación de tarjeta de crédito
    }
};
\`\`\`

## 🚨 Soluciones Rápidas de Problemas

| Problema | Solución Rápida |
|----------|-----------------|
| No aparecen sugerencias | \`Ctrl+Shift+P\` → "GitHub Copilot: Enable" |
| Error de autenticación | \`Ctrl+Shift+P\` → "GitHub Copilot: Sign Out" → Volver a iniciar sesión |
| Límite de nivel gratuito alcanzado | Actualizar a plan pago o esperar reinicio mensual |
| Calidad pobre de sugerencias | Agregar más contexto con comentarios y anotaciones de tipo |
| Sugerencias lentas | Verificar conexión a internet, cerrar pestañas no usadas de VS Code |

## 📊 Métricas de Productividad a Rastrear

### Durante Prueba Gratuita/Evaluación
- **Líneas de código escritas por hora**
- **Tiempo gastado en depuración vs. desarrollo de nuevas características**
- **Métricas de calidad de código** (cobertura de pruebas, complejidad)
- **Aceleración de aprendizaje** para nuevos lenguajes/frameworks
- **Velocidad de escritura de documentación**

### Cálculo de ROI
\`\`\`
Tiempo ahorrado mensual (horas) × Tarifa por hora ($) = Valor generado
Comparar con costo de suscripción: $10/mes Individual
Punto de equilibrio: ~1 hora ahorrada por mes a tarifa de $10/hora
\`\`\`

---

> 💡 **Consejo Pro**: La mejor manera de dominar Copilot es a través del uso diario consistente. Comienza con tareas simples y gradualmente trabaja hacia desafíos complejos. Recuerda: Copilot es un asistente poderoso, pero tú sigues siendo el arquitecto de tu código.`
    },
  },
  {
    id: 'exercises',
    title: {
      en: 'Exercises & Challenges',
      es: 'Ejercicios y Desafíos'
    },
    content: {
      en: `# Exercises & Challenges

Practice using GitHub Copilot with these hands-on exercises and challenges.

## Beginner Exercises

### Exercise 1: Basic Function Generation

**Goal**: Use Copilot to generate a simple utility function

**Instructions**:
1. Create a new JavaScript file
2. Write this comment and let Copilot suggest the implementation:

\`\`\`javascript
// Function to convert temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    // Let Copilot complete this
}
\`\`\`

**Expected Learning**: How to write effective comments for code generation

### Exercise 2: Array Manipulation

**Challenge**: Generate array utility functions

\`\`\`javascript
// Function to remove duplicates from an array
function removeDuplicates(arr) {
    // Copilot implementation here
}

// Function to find the most frequent element in an array
function findMostFrequent(arr) {
    // Copilot implementation here
}
\`\`\`

## Intermediate Challenges

### Challenge 1: API Integration

**Goal**: Build a simple API client with Copilot's help

\`\`\`javascript
// API client for a todo application
class TodoAPI {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    
    // Get all todos from the API
    async getAllTodos() {
        // Copilot suggests fetch implementation
    }
    
    // Create a new todo item
    async createTodo(todoData) {
        // Copilot suggests POST request
    }
    
    // Update an existing todo
    async updateTodo(id, updates) {
        // Copilot suggests PUT/PATCH request
    }
}
\`\`\`

### Challenge 2: Form Validation

**Goal**: Create comprehensive form validation

\`\`\`javascript
// Email validation with multiple checks
function validateEmail(email) {
    // Copilot suggests regex and validation logic
}

// Password strength validator
function validatePassword(password) {
    // Should check: length, uppercase, lowercase, numbers, special chars
}

// Credit card number validator
function validateCreditCard(cardNumber) {
    // Copilot suggests Luhn algorithm implementation
}
\`\`\`

## Advanced Projects

### Project 1: Data Visualization Helper

\`\`\`javascript
// Chart data processor for visualization libraries
class ChartDataProcessor {
    // Convert raw data to chart.js format
    static toChartJS(data, chartType) {
        // Copilot suggests transformation logic
    }
    
    // Calculate statistical measures
    static calculateStats(dataset) {
        // mean, median, mode, standard deviation
    }
    
    // Group data by time periods
    static groupByTimeInterval(data, interval) {
        // daily, weekly, monthly grouping
    }
}
\`\`\`

### Project 2: Algorithm Implementation

**Goal**: Implement classic algorithms with Copilot assistance

\`\`\`python
# Binary search implementation
def binary_search(arr, target):
    """
    Implement binary search algorithm.
    Returns index of target element or -1 if not found.
    """
    # Let Copilot suggest the implementation

# Quicksort algorithm
def quicksort(arr):
    """
    Implement quicksort algorithm for efficient sorting.
    """
    # Copilot suggests divide-and-conquer approach

# Dijkstra's shortest path algorithm
def dijkstra(graph, start_node):
    """
    Find shortest paths from start_node to all other nodes.
    """
    # Complex algorithm - test Copilot's capabilities
\`\`\`

## Quiz: Test Your Understanding

Try this interactive quiz to test your GitHub Copilot knowledge:

<InteractiveQuiz />

### Question 1
What's the best way to get quality suggestions from Copilot for a complex function?

A) Write minimal comments
B) Use generic variable names  
C) Provide detailed context and clear intent
D) Copy-paste from documentation

### Question 2
When should you be most careful reviewing Copilot suggestions?

A) Simple utility functions
B) Security-related code
C) Variable declarations
D) Import statements

### Question 3
How can you get multiple suggestions for the same code?

A) Press Tab multiple times
B) Use Ctrl+Enter (Cmd+Enter)
C) Restart VS Code
D) Change the file extension

## Challenge Solutions

> **Note**: Don't peek at solutions until you've tried the exercises! The learning comes from working with Copilot, not from reading finished code.

### Pro Tips for Exercises

1. **Start with comments**: Clear comments lead to better suggestions
2. **Iterate gradually**: Build complex functions step by step
3. **Test everything**: Always verify Copilot's suggestions work correctly
4. **Learn patterns**: Notice how Copilot responds to different prompts`,
      es: `# Ejercicios y Desafíos

Practica usando GitHub Copilot con estos ejercicios prácticos y desafíos.

## Ejercicios para Principiantes

### Ejercicio 1: Generación de Función Básica

**Objetivo**: Usar Copilot para generar una función de utilidad simple

**Instrucciones**:
1. Crea un nuevo archivo JavaScript
2. Escribe este comentario y deja que Copilot sugiera la implementación:

\`\`\`javascript
// Función para convertir temperatura de Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    // Deja que Copilot complete esto
}
\`\`\`

**Aprendizaje Esperado**: Cómo escribir comentarios efectivos para generación de código

### Ejercicio 2: Manipulación de Arrays

**Desafío**: Generar funciones de utilidad para arrays

\`\`\`javascript
// Función para remover duplicados de un array
function removeDuplicates(arr) {
    // Implementación de Copilot aquí
}

// Función para encontrar el elemento más frecuente en un array
function findMostFrequent(arr) {
    // Implementación de Copilot aquí
}
\`\`\`

## Desafíos Intermedios

### Desafío 1: Integración de API

**Objetivo**: Construir un cliente API simple con ayuda de Copilot

\`\`\`javascript
// Cliente API para una aplicación de todos
class TodoAPI {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    
    // Obtener todos los todos de la API
    async getAllTodos() {
        // Copilot sugiere implementación con fetch
    }
    
    // Crear un nuevo elemento todo
    async createTodo(todoData) {
        // Copilot sugiere petición POST
    }
    
    // Actualizar un todo existente
    async updateTodo(id, updates) {
        // Copilot sugiere petición PUT/PATCH
    }
}
\`\`\`

### Desafío 2: Validación de Formularios

**Objetivo**: Crear validación de formularios comprensiva

\`\`\`javascript
// Validación de email con múltiples verificaciones
function validateEmail(email) {
    // Copilot sugiere regex y lógica de validación
}

// Validador de fortaleza de contraseña
function validatePassword(password) {
    // Debe verificar: longitud, mayúsculas, minúsculas, números, caracteres especiales
}

// Validador de número de tarjeta de crédito
function validateCreditCard(cardNumber) {
    // Copilot sugiere implementación del algoritmo de Luhn
}
\`\`\`

## Proyectos Avanzados

### Proyecto 1: Ayudante de Visualización de Datos

\`\`\`javascript
// Procesador de datos de gráfico para librerías de visualización
class ChartDataProcessor {
    // Convertir datos crudos a formato de chart.js
    static toChartJS(data, chartType) {
        // Copilot sugiere lógica de transformación
    }
    
    // Calcular medidas estadísticas
    static calculateStats(dataset) {
        // media, mediana, moda, desviación estándar
    }
    
    // Agrupar datos por períodos de tiempo
    static groupByTimeInterval(data, interval) {
        // agrupación diaria, semanal, mensual
    }
}
\`\`\`

### Proyecto 2: Implementación de Algoritmos

**Objetivo**: Implementar algoritmos clásicos con asistencia de Copilot

\`\`\`python
# Implementación de búsqueda binaria
def binary_search(arr, target):
    """
    Implementar algoritmo de búsqueda binaria.
    Retorna índice del elemento objetivo o -1 si no se encuentra.
    """
    # Deja que Copilot sugiera la implementación

# Algoritmo quicksort
def quicksort(arr):
    """
    Implementar algoritmo quicksort para ordenamiento eficiente.
    """
    # Copilot sugiere enfoque divide-y-vencerás

# Algoritmo de ruta más corta de Dijkstra
def dijkstra(graph, start_node):
    """
    Encontrar rutas más cortas desde start_node a todos los otros nodos.
    """
    # Algoritmo complejo - prueba las capacidades de Copilot
\`\`\`

## Quiz: Prueba tu Entendimiento

Prueba este quiz interactivo para probar tu conocimiento de GitHub Copilot:

<InteractiveQuiz />

### Pregunta 1
¿Cuál es la mejor manera de obtener sugerencias de calidad de Copilot para una función compleja?

A) Escribir comentarios mínimos
B) Usar nombres de variables genéricos
C) Proporcionar contexto detallado e intención clara
D) Copiar-pegar de la documentación

### Pregunta 2
¿Cuándo deberías ser más cuidadoso revisando las sugerencias de Copilot?

A) Funciones de utilidad simples
B) Código relacionado con seguridad
C) Declaraciones de variables
D) Declaraciones de import

### Pregunta 3
��Cómo puedes obtener múltiples sugerencias para el mismo código?

A) Presionar Tab múltiples veces
B) Usar Ctrl+Enter (Cmd+Enter)
C) Reiniciar VS Code
D) Cambiar la extensión del archivo

## Soluciones de Desafíos

> **Nota**: ¡No veas las soluciones hasta que hayas intentado los ejercicios! El aprendizaje viene de trabajar con Copilot, no de leer código terminado.

### Consejos Pro para Ejercicios

1. **Empieza con comentarios**: Comentarios claros llevan a mejores sugerencias
2. **Itera gradualmente**: Construye funciones complejas paso a paso
3. **Prueba todo**: Siempre verifica que las sugerencias de Copilot funcionen correctamente
4. **Aprende patrones**: Nota cómo Copilot responde a diferentes prompts`
    }
  }
]