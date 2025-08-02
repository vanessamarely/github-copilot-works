import { useState } from 'react'
import { ChevronRight, ChevronDown, FileText } from '@phosphor-icons/react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { DocumentationSection } from '../data/multilingualDocumentation'
import { useTranslation } from '@/hooks/useTranslation'

interface SidebarProps {
  activeSection: string
  onSectionChange: (sectionId: string) => void
  documentation: DocumentationSection[]
}

export function Sidebar({ activeSection, onSectionChange, documentation }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const { currentLanguage } = useTranslation()

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const renderSection = (section: DocumentationSection, level = 0) => {
    const isActive = activeSection === section.id
    const isExpanded = expandedSections.has(section.id)
    const hasSubsections = section.subsections && section.subsections.length > 0
    
    // Get title in current language
    const title = typeof section.title === 'string' 
      ? section.title 
      : section.title[currentLanguage] || section.title.en

    return (
      <div key={section.id}>
        <Button
          variant={isActive ? "default" : "ghost"}
          size="sm"
          onClick={() => onSectionChange(section.id)}
          className={cn(
            "w-full justify-start text-left h-auto p-3 mb-1",
            level > 0 && "ml-4",
            isActive && "bg-primary text-primary-foreground"
          )}
        >
          <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
          <span className="flex-1">{title}</span>
          {hasSubsections && (
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                toggleSection(section.id)
              }}
              className="p-0 h-auto w-auto ml-2"
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
          )}
        </Button>
        
        {hasSubsections && isExpanded && (
          <div className="ml-4">
            {section.subsections!.map(subsection => 
              renderSection(subsection, level + 1)
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col bg-sidebar border-r">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-sidebar-foreground">Documentation</h2>
        <p className="text-sm text-muted-foreground">GitHub Copilot Workshop</p>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <nav className="space-y-1">
          {documentation.map(section => renderSection(section))}
        </nav>
      </ScrollArea>
    </div>
  )
}