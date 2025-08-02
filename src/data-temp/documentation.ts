export interface DocumentationSection {
  id: string
  title: string
  icon?: string
  content: string
  subsections?: DocumentationSection[]
}

export const documentation: DocumentationSection[] = [
  {
    id: 'introduction',
    title: 'Introduction to GitHub Copilot',
    content: `# Introduction to GitHub Copilot

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
- **Error Reduction**: Copilot helps avoid common programming mistakes
- **Exploration**: Try new libraries and frameworks with guidance

## Workshop Objectives

By the end of this workshop, you will:

1. ✅ Understand what GitHub Copilot is and how it works
2. ✅ Set up Copilot in Visual Studio Code
3. ✅ Learn effective prompting techniques
4. ✅ Apply best practices for AI-assisted development
5. ✅ Troubleshoot common issues
6. ✅ Integrate Copilot into your development workflow

Ready to get started? Let's dive into setting up GitHub Copilot in the next section!`
  },
  {
    id: 'setup',
    title: 'Setting up GitHub Copilot in VS Code',
    content: `# Setting up GitHub Copilot in Visual Studio Code

This section will guide you through the complete setup process for GitHub Copilot in Visual Studio Code.

## Prerequisites

Before you begin, ensure you have:

- **Visual Studio Code** (version 1.74.0 or later)
- **GitHub account** with Copilot access
- **Internet connection** for extension installation and AI suggestions

## Step 1: Verify GitHub Copilot Access

First, check if you have access to GitHub Copilot:

1. Visit [github.com/github-copilot/signup](https://github.com/github-copilot/signup)
2. Sign in with your GitHub account
3. Check your subscription status

### Copilot Plans

- **GitHub Copilot Individual**: $10/month or $100/year
- **GitHub Copilot Business**: $19/user/month
- **GitHub Copilot Enterprise**: $39/user/month
- **Free for Students**: Available through GitHub Education

## Step 2: Install the GitHub Copilot Extension

### Method 1: Through VS Code Marketplace

1. Open Visual Studio Code
2. Click the Extensions icon (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "GitHub Copilot"
4. Click "Install" on the official GitHub Copilot extension
5. Also install "GitHub Copilot Chat" for enhanced features

### Method 2: Command Line Installation

\`\`\`bash
# Install GitHub Copilot extension
code --install-extension GitHub.copilot

# Install GitHub Copilot Chat extension
code --install-extension GitHub.copilot-chat
\`\`\`

## Step 3: Authenticate with GitHub

1. After installation, VS Code will prompt you to sign in
2. Click "Sign in to GitHub"
3. Authorize the extension in your browser
4. Return to VS Code and confirm authentication

### Manual Authentication

If automatic authentication fails:

1. Open Command Palette (Ctrl+Shift+P / Cmd+Shift+P)
2. Type "GitHub Copilot: Sign In"
3. Follow the authentication flow

## Step 4: Configure Copilot Settings

### Basic Configuration

Open VS Code settings (Ctrl+, / Cmd+,) and configure:

\`\`\`json
{
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": true,
    "scminput": false
  },
  "github.copilot.inlineSuggest.enable": true,
  "github.copilot.chat.enableCodeActions": true
}
\`\`\`

### Language-Specific Settings

\`\`\`json
{
  "github.copilot.enable": {
    "javascript": true,
    "typescript": true,
    "python": true,
    "java": true,
    "go": true,
    "rust": true,
    "cpp": true,
    "csharp": true
  }
}
\`\`\`

## Step 5: Verify Installation

Create a test file to verify Copilot is working:

\`\`\`javascript
// test.js
// Function to calculate factorial
function factorial(n) {
  // Copilot should suggest the implementation here
}
\`\`\`

You should see Copilot suggestions appear as you type!

## Keyboard Shortcuts

Learn these essential shortcuts:

- **Accept suggestion**: Tab
- **Reject suggestion**: Esc
- **Next suggestion**: Alt+] (Option+] on Mac)
- **Previous suggestion**: Alt+[ (Option+[ on Mac)
- **Open Copilot Chat**: Ctrl+Shift+I (Cmd+Shift+I on Mac)

## Troubleshooting Setup Issues

### Common Issues

**Issue**: Copilot not showing suggestions
- **Solution**: Check internet connection and GitHub authentication

**Issue**: Extension not installed properly
- **Solution**: Restart VS Code and reinstall the extension

**Issue**: Authentication failed
- **Solution**: Clear VS Code credentials and re-authenticate

### Checking Copilot Status

Use the Command Palette:
- "GitHub Copilot: Check Status"
- "GitHub Copilot: Show Output Panel"

## Next Steps

Once setup is complete, you're ready to start using GitHub Copilot! The next section covers how to effectively use Copilot for code generation.

> **Pro Tip**: Start with simple functions and gradually work up to more complex code generation as you become comfortable with Copilot's suggestions.`
  },
  {
    id: 'usage',
    title: 'How to Use GitHub Copilot for Code Generation',
    content: `# How to Use GitHub Copilot for Code Generation

Now that you have Copilot set up, let's explore how to effectively use it for various coding tasks.

## Understanding Copilot Suggestions

Copilot provides two types of suggestions:

1. **Inline Suggestions**: Real-time code completion as you type
2. **Chat-based Assistance**: Interactive conversations for complex problems

## Basic Usage Patterns

### 1. Function Implementation

Write descriptive function signatures and comments:

\`\`\`javascript
// Calculate the area of a circle given its radius
function calculateCircleArea(radius) {
  // Copilot will suggest: return Math.PI * radius * radius;
}

// Sort an array of objects by a specific property
function sortByProperty(array, property) {
  // Copilot will suggest the implementation
}
\`\`\`

### 2. Data Processing

\`\`\`python
# Filter and transform user data
def process_user_data(users):
    """
    Filter active users and format their information
    """
    # Copilot will suggest list comprehension or filter/map operations
\`\`\`

### 3. API Integration

\`\`\`javascript
// Fetch user data from REST API
async function fetchUserData(userId) {
  // Copilot will suggest fetch implementation with error handling
}
\`\`\`

## Advanced Usage Techniques

### Effective Prompting

The key to getting great suggestions is writing clear, descriptive comments:

#### ❌ Poor Prompting
\`\`\`javascript
// do stuff
function doStuff(data) {
  
}
\`\`\`

#### ✅ Excellent Prompting
\`\`\`javascript
// Validate email format and check if it's from a business domain
// Returns true if email is valid and from business domain (.com, .org, .edu)
function validateBusinessEmail(email) {
  
}
\`\`\`

### Context Building

Provide relevant context to get better suggestions:

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
}

// Find all admin users and format them for display
function getAdminUsers(users: User[]) {
  // Copilot now has type context for better suggestions
}
\`\`\`

## Best Practices for Code Generation

### 1. Start Simple
Begin with simple functions and gradually increase complexity.

### 2. Review Suggestions
Always review and understand Copilot's suggestions before accepting them.

### 3. Iterate
If the first suggestion isn't perfect, modify your prompt and try again.

### 4. Combine Manual and AI Coding
Use Copilot for boilerplate and routine code, but write critical logic manually.

### 5. Test Generated Code
Always test AI-generated code thoroughly.

Ready to learn best practices? The next section covers professional development workflows with Copilot!`
  },
  {
    id: 'best-practices',
    title: 'Best Practices for Professional Development',
    content: `# Best Practices for Using Copilot in Professional Development

This section covers advanced strategies for integrating GitHub Copilot into professional software development workflows while maintaining code quality and security standards.

## Code Quality and Review Standards

### 1. Establish Review Guidelines

Create team guidelines for AI-generated code:

\`\`\`markdown
## Copilot Code Review Checklist

- [ ] Code logic is understood and verified
- [ ] Security implications reviewed
- [ ] Performance impact considered
- [ ] Error handling is appropriate
- [ ] Code follows team style guidelines
- [ ] Tests are included and pass
- [ ] Documentation is adequate
\`\`\`

## Security Best Practices

### 1. Sensitive Data Handling

Never let Copilot generate code with actual secrets:

\`\`\`javascript
// ❌ Don't do this
const apiKey = "sk-1234567890abcdef"; // Real API key

// ✅ Do this instead
const apiKey = process.env.API_KEY; // Environment variable
if (!apiKey) {
  throw new Error('API_KEY environment variable is required');
}
\`\`\`

## Testing Strategies

### 1. Test AI-Generated Code Thoroughly

\`\`\`javascript
// AI-generated function
function calculateDiscount(price, discountPercent, customerTier) {
  if (customerTier === 'premium') {
    discountPercent += 5;
  }
  return price * (1 - discountPercent / 100);
}

// Comprehensive tests for AI-generated code
describe('calculateDiscount', () => {
  test('applies basic discount correctly', () => {
    expect(calculateDiscount(100, 10, 'regular')).toBe(90);
  });
  
  test('applies premium tier bonus', () => {
    expect(calculateDiscount(100, 10, 'premium')).toBe(85);
  });
});
\`\`\`

## Measuring Success

### Key Performance Indicators

1. **Development Velocity**: Lines of code per hour
2. **Code Quality**: Bug density in AI-generated vs manual code
3. **Security**: Number of security issues in AI-generated code
4. **Team Satisfaction**: Developer happiness with AI assistance
5. **Learning Curve**: Time to proficiency with new technologies

Ready to handle issues when they arise? The next section covers troubleshooting and FAQ!`
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting and FAQ',
    content: `# Troubleshooting and FAQ

This section addresses common issues you might encounter while using GitHub Copilot and provides solutions to get you back on track quickly.

## Common Issues and Solutions

### Authentication Problems

#### Issue: "Not authenticated with GitHub"

**Symptoms:**
- Copilot icon shows as disabled
- No suggestions appearing
- Error message about authentication

**Solutions:**

1. **Re-authenticate with GitHub:**
   \`\`\`
   Ctrl+Shift+P (Cmd+Shift+P on Mac)
   > GitHub Copilot: Sign Out
   > GitHub Copilot: Sign In
   \`\`\`

2. **Clear VS Code credentials:**
   \`\`\`bash
   # Windows
   %APPDATA%\\Code\\User\\globalStorage\\github.copilot
   
   # macOS
   ~/Library/Application Support/Code/User/globalStorage/github.copilot
   
   # Linux
   ~/.config/Code/User/globalStorage/github.copilot
   \`\`\`
   Delete the folder and restart VS Code.

## Frequently Asked Questions

### General Usage

**Q: How much does GitHub Copilot cost?**
A: 
- Individual: $10/month or $100/year
- Business: $19/user/month  
- Enterprise: $39/user/month
- Free for verified students and maintainers of popular open source projects

**Q: What languages does Copilot support?**
A: Copilot works with dozens of languages including JavaScript/TypeScript, Python, Java, C/C++, C#, Go, Rust, Ruby, PHP, and many more.

**Q: Does Copilot store my code?**
A: GitHub Copilot processes your code to generate suggestions but does not store your code on GitHub's servers.

**Q: Can I use Copilot offline?**
A: No, Copilot requires an internet connection to generate suggestions as it uses cloud-based AI models.

## Quick Reference Card

\`\`\`
Essential Shortcuts:
Tab           - Accept suggestion
Esc           - Dismiss suggestion  
Alt+]         - Next suggestion
Alt+[         - Previous suggestion
Ctrl+Shift+I  - Open Copilot Chat

Troubleshooting Steps:
1. Check internet connection
2. Verify GitHub authentication
3. Restart VS Code
4. Update Copilot extension
5. Check VS Code logs
\`\`\`

That covers the most common issues and questions! Remember, effective troubleshooting often involves systematic elimination of potential causes.`
  }
];