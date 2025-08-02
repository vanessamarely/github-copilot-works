import { useState } from 'react'
import { Copy, Check, ExternalLink } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { DocumentationSection } from '../data/multilingualDocumentation'
import { InteractiveQuiz } from './InteractiveQuiz'
import { LanguagePreview } from './LanguagePreview'
import { useTranslation } from '@/hooks/useTranslation'
import { toast } from 'sonner'

interface ContentRendererProps {
  content: DocumentationSection
  onSectionChange: (sectionId: string) => void
}

export function ContentRenderer({ content }: ContentRendererProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const { currentLanguage, t } = useTranslation()

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedCode(id)
      toast.success(t('content.copied'))
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      toast.error('Failed to copy code')
    }
  }

  const renderMarkdown = (markdown: string) => {
    // Simple markdown parser for demo purposes
    // In a real app, you'd use a library like react-markdown
    const lines = markdown.split('\n')
    const elements: JSX.Element[] = []
    let currentElement: string[] = []
    let inCodeBlock = false
    let codeBlockLanguage = ''
    let codeBlockId = 0

    const flushCurrentElement = () => {
      if (currentElement.length > 0) {
        const text = currentElement.join('\n')
        if (inCodeBlock) {
          const codeId = `code-block-${codeBlockId++}`
          elements.push(
            <div key={elements.length} className="relative group">
              <pre className="prose pre">
                <code className={`language-${codeBlockLanguage}`}>
                  {text}
                </code>
              </pre>
              <Button
                size="sm"
                variant="outline"
                className="copy-button absolute top-2 right-2"
                onClick={() => copyToClipboard(text, codeId)}
                title={t('content.copyCode')}
              >
                {copiedCode === codeId ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          )
        } else {
          // Handle custom components with a simpler approach
          if (text.includes('<InteractiveQuiz />') || text.includes('<LanguagePreview />')) {
            // Simple split approach
            let content = text
            const elements_local: JSX.Element[] = []
            
            if (content.includes('<LanguagePreview />')) {
              const [before, after] = content.split('<LanguagePreview />')
              if (before.trim()) {
                elements_local.push(<div key="before-preview" dangerouslySetInnerHTML={{ __html: parseSimpleMarkdown(before) }} />)
              }
              elements_local.push(<div key="language-preview" className="my-6"><LanguagePreview /></div>)
              content = after
            }
            
            if (content.includes('<InteractiveQuiz />')) {
              const [before, after] = content.split('<InteractiveQuiz />')
              if (before.trim()) {
                elements_local.push(<div key="before-quiz" dangerouslySetInnerHTML={{ __html: parseSimpleMarkdown(before) }} />)
              }
              elements_local.push(<div key="interactive-quiz" className="my-8"><InteractiveQuiz /></div>)
              if (after.trim()) {
                elements_local.push(<div key="after-quiz" dangerouslySetInnerHTML={{ __html: parseSimpleMarkdown(after) }} />)
              }
            } else if (content.trim()) {
              elements_local.push(<div key="remaining" dangerouslySetInnerHTML={{ __html: parseSimpleMarkdown(content) }} />)
            }
            
            elements.push(
              <div key={elements.length} className="space-y-4">
                {elements_local}
              </div>
            )
          } else {
            elements.push(
              <div key={elements.length} dangerouslySetInnerHTML={{ 
                __html: parseSimpleMarkdown(text) 
              }} />
            )
          }
        }
        currentElement = []
      }
    }

    lines.forEach(line => {
      if (line.startsWith('```')) {
        flushCurrentElement()
        if (!inCodeBlock) {
          inCodeBlock = true
          codeBlockLanguage = line.substring(3).trim()
        } else {
          inCodeBlock = false
          codeBlockLanguage = ''
        }
      } else {
        currentElement.push(line)
      }
    })

    flushCurrentElement()

    return elements
  }

  const parseSimpleMarkdown = (text: string): string => {
    return text
      // Headers
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Inline code
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1 <svg class="inline w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg></a>')
      // Lists
      .replace(/^- (.*$)/gm, '<li>$1</li>')
      .replace(/^(\d+)\. (.*$)/gm, '<li>$1. $2</li>')
      // Paragraphs
      .replace(/\n\n/g, '</p><p>')
      // Wrap in paragraph if not already wrapped
      .replace(/^(?!<[h|l|d|p])/gm, '<p>')
      .replace(/(?<!>)$/gm, '</p>')
      // Clean up empty paragraphs
      .replace(/<p><\/p>/g, '')
      // Wrap lists
      .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
      // Line breaks
      .replace(/\n/g, '<br>')
  }

  return (
    <ScrollArea className="h-full">
      <article className="prose prose-lg max-w-none">
        <div className="mb-6">
          <Badge variant="outline" className="mb-2">
            Workshop Documentation
          </Badge>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Section: {
              typeof content.title === 'string' 
                ? content.title 
                : content.title[currentLanguage] || content.title.en
            }</span>
            <ExternalLink className="h-3 w-3" />
          </div>
        </div>
        
        {renderMarkdown(
          typeof content.content === 'string' 
            ? content.content 
            : content.content[currentLanguage] || content.content.en
        )}
      </article>
    </ScrollArea>
  )
}