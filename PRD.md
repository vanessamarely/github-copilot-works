# GitHub Copilot Workshop Documentation Site

An interactive, comprehensive documentation platform that transforms the GitHub Copilot workshop repository into an accessible, searchable, and engaging learning experience.

**Experience Qualities**:
1. Professional - Clean, trustworthy interface that reflects GitHub's quality standards
2. Intuitive - Easy navigation and discovery of content without confusion 
3. Educational - Interactive elements that enhance learning and retention

**Complexity Level**: Light Application (multiple features with basic state)
- Combines content display with interactive features like search, navigation state, and user preferences while maintaining focus on documentation consumption.

## Essential Features

**Left Sidebar Navigation**
- Functionality: Hierarchical menu displaying all workshop sections and subsections
- Purpose: Provides clear content structure and enables quick topic jumping
- Trigger: Always visible on desktop, collapsible hamburger menu on mobile
- Progression: Click section → highlight active item → load content → update URL
- Success criteria: Users can navigate to any section within 2 clicks

**Markdown Content Rendering**
- Functionality: Fetches and displays markdown files with syntax highlighting and proper formatting
- Purpose: Makes technical content readable and visually appealing
- Trigger: Navigation selection or direct URL access
- Progression: Select content → fetch markdown → parse and render → display with code highlighting
- Success criteria: All markdown renders correctly with working code examples

**Search Functionality**
- Functionality: Real-time search across all documentation content
- Purpose: Enables quick discovery of specific topics or code examples
- Trigger: Type in search input field
- Progression: Enter query → filter content → highlight matches → display results list → click to navigate
- Success criteria: Returns relevant results within 500ms of typing

**Interactive Code Examples**
- Functionality: Syntax-highlighted code blocks with copy-to-clipboard functionality
- Purpose: Makes it easy for users to try examples in their own environment
- Trigger: Hover over code blocks reveals copy button
- Progression: View code → hover → click copy → show success feedback
- Success criteria: All code blocks are copyable with visual confirmation

**Responsive Layout**
- Functionality: Adaptive design that works seamlessly across device sizes
- Purpose: Ensures accessibility on all devices commonly used for development
- Trigger: Browser resize or device orientation change
- Progression: Detect screen size → adjust layout → collapse/expand navigation → reflow content
- Success criteria: Readable and functional on screens from 320px to 2560px wide

## Edge Case Handling

- **Network failures**: Show offline indicator and cached content when available
- **Missing content**: Display helpful 404 pages with navigation suggestions
- **Large code blocks**: Implement horizontal scrolling with scroll indicators
- **Search with no results**: Provide suggested alternative searches and popular topics
- **Mobile keyboard**: Adjust viewport when virtual keyboard appears

## Design Direction

The design should feel authoritative and developer-focused while remaining approachable - combining GitHub's professional aesthetic with the warmth of educational content, using a minimal interface that prioritizes content readability and code clarity.

## Color Selection

Custom palette that honors GitHub's brand identity while optimizing for documentation readability.

- **Primary Color**: GitHub Blue (oklch(0.45 0.13 233)) - establishes brand connection and used for primary CTAs
- **Secondary Colors**: Neutral grays (oklch(0.95 0 0) to oklch(0.15 0 0)) for content hierarchy and backgrounds
- **Accent Color**: GitHub Green (oklch(0.65 0.15 145)) - for success states, copy confirmations, and positive interactions
- **Foreground/Background Pairings**:
  - Background (White oklch(1 0 0)): Dark gray text (oklch(0.15 0 0)) - Ratio 21:1 ✓
  - Card (Light gray oklch(0.98 0 0)): Dark gray text (oklch(0.15 0 0)) - Ratio 19.5:1 ✓
  - Primary (GitHub Blue oklch(0.45 0.13 233)): White text (oklch(1 0 0)) - Ratio 4.8:1 ✓
  - Accent (GitHub Green oklch(0.65 0.15 145)): White text (oklch(1 0 0)) - Ratio 4.2:1 ✓

## Font Selection

Typography should convey technical precision while maintaining excellent readability for both prose and code, using GitHub's preferred font stack for brand consistency.

- **Typographic Hierarchy**:
  - H1 (Page Title): Inter Bold/32px/tight letter spacing
  - H2 (Section Headers): Inter Semibold/24px/normal spacing  
  - H3 (Subsections): Inter Medium/20px/normal spacing
  - Body Text: Inter Regular/16px/1.6 line height
  - Code Inline: JetBrains Mono/14px/1.4 line height
  - Code Blocks: JetBrains Mono/14px/1.5 line height with syntax highlighting

## Animations

Subtle, purposeful animations that guide user attention and provide feedback without being distracting, maintaining the professional tone expected in developer tools.

- **Purposeful Meaning**: Smooth transitions communicate state changes and guide attention to new content
- **Hierarchy of Movement**: Navigation state changes and search results get priority, with subtle hover effects on interactive elements

## Component Selection

- **Components**: Sidebar for navigation, Card for content sections, Button for CTAs, Input for search, Sheet for mobile menu, ScrollArea for long content, Separator for content divisions
- **Customizations**: Custom syntax highlighting component, search results dropdown, copy-to-clipboard button overlay for code blocks
- **States**: Navigation items show active/hover/default states, buttons have loading states for async operations, search shows loading/results/empty states
- **Icon Selection**: Menu (hamburger), Search (magnifying glass), Copy (clipboard), External Link (arrow-up-right), GitHub (logo), Check (success confirmation)
- **Spacing**: Consistent 4/8/16/24px spacing scale, generous whitespace around code blocks and between sections
- **Mobile**: Sidebar collapses to slide-out sheet, search moves to prominent header position, content stack vertically with increased padding