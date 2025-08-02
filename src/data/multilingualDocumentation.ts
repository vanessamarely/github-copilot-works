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

### Free Tier Limitations and Considerations

**Important**: GitHub Copilot does not offer a permanent free tier. However, certain users may qualify for free access:

- **Students**: Free access through GitHub Education Pack
- **Open Source Maintainers**: Free access for verified maintainers of popular open source projects
- **Free Trial**: 30-day trial for all new users

**Token Usage and Rate Limits**:
- GitHub Copilot doesn't use a traditional "token" system like other AI services
- Instead, it operates on request-based limits to ensure fair usage
- Heavy usage may be subject to rate limiting during peak times
- Free trial users have the same technical capabilities as paid users during the trial period

**What You Can Do During Free Trial**:
✅ Generate code completions and suggestions  
✅ Use Copilot Chat for code explanations  
✅ Generate unit tests and documentation  
✅ Access all supported programming languages  
✅ Use in all supported IDEs  

**After Free Trial Expires**:
❌ No access to any Copilot features without subscription  
❌ No "freemium" model with limited daily usage  
❌ Must subscribe to continue using any Copilot functionality  

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

### Limitaciones y Consideraciones del Nivel Gratuito

**Importante**: GitHub Copilot no ofrece un nivel gratuito permanente. Sin embargo, ciertos usuarios pueden calificar para acceso gratuito:

- **Estudiantes**: Acceso gratuito a través del GitHub Education Pack
- **Mantenedores de Código Abierto**: Acceso gratuito para mantenedores verificados de proyectos populares de código abierto
- **Prueba Gratuita**: Prueba de 30 días para todos los nuevos usuarios

**Uso de Tokens y Límites de Velocidad**:
- GitHub Copilot no usa un sistema tradicional de "tokens" como otros servicios de IA
- En su lugar, opera con límites basados en solicitudes para asegurar un uso justo
- El uso intensivo puede estar sujeto a limitación de velocidad durante horas pico
- Los usuarios de prueba gratuita tienen las mismas capacidades técnicas que los usuarios de pago durante el período de prueba

**Lo Que Puedes Hacer Durante la Prueba Gratuita**:
✅ Generar completados y sugerencias de código  
✅ Usar Copilot Chat para explicaciones de código  
✅ Generar pruebas unitarias y documentación  
✅ Acceder a todos los lenguajes de programación soportados  
✅ Usar en todos los IDEs soportados  

**Después de que Expire la Prueba Gratuita**:
❌ Sin acceso a ninguna característica de Copilot sin suscripción  
❌ No hay modelo "freemium" con uso diario limitado  
❌ Debes suscribirte para continuar usando cualquier funcionalidad de Copilot  

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

## Step 1: Install the GitHub Copilot Extension

1. Open Visual Studio Code
2. Go to the Extensions view (\`Ctrl+Shift+X\` or \`Cmd+Shift+X\`)
3. Search for "GitHub Copilot"
4. Click "Install" on the official GitHub Copilot extension

## Step 2: Sign in to GitHub

1. After installation, you'll see a notification to sign in
2. Click "Sign in to GitHub"
3. Your browser will open - authorize the application
4. Return to VS Code when prompted

## Step 3: Verify Installation

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

## Paso 1: Instalar la Extensión de GitHub Copilot

1. Abre Visual Studio Code
2. Ve a la vista de Extensiones (\`Ctrl+Shift+X\` o \`Cmd+Shift+X\`)
3. Busca "GitHub Copilot"
4. Haz clic en "Instalar" en la extensión oficial de GitHub Copilot

## Paso 2: Iniciar Sesión en GitHub

1. Después de la instalación, verás una notificación para iniciar sesión
2. Haz clic en "Iniciar sesión en GitHub"
3. Tu navegador se abrirá - autoriza la aplicación
4. Regresa a VS Code cuando se te solicite

## Paso 3: Verificar la Instalación

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
¿Cómo puedes obtener múltiples sugerencias para el mismo código?

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