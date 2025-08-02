import { useState, useEffect } from 'react'
import { Search, FileText } from '@phosphor-icons/react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { DocumentationSection } from '../data-temp/documentation'

interface SearchResult {
  section: DocumentationSection
  matches: string[]
  score: number
}

interface SearchResultsProps {
  query: string
  documentation: DocumentationSection[]
  onSectionChange: (sectionId: string) => void
}

export function SearchResults({ query, documentation, onSectionChange }: SearchResultsProps) {
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)
    
    // Simulate search delay for better UX
    const searchTimeout = setTimeout(() => {
      const searchResults = searchDocumentation(query, documentation)
      setResults(searchResults)
      setIsLoading(false)
    }, 200)

    return () => clearTimeout(searchTimeout)
  }, [query, documentation])

  const searchDocumentation = (searchQuery: string, docs: DocumentationSection[]): SearchResult[] => {
    const results: SearchResult[] = []
    const lowercaseQuery = searchQuery.toLowerCase()

    docs.forEach(section => {
      const matches: string[] = []
      let score = 0

      // Search in title
      if (section.title.toLowerCase().includes(lowercaseQuery)) {
        matches.push(`Title: ${section.title}`)
        score += 10
      }

      // Search in content
      const contentLines = section.content.split('\n')
      contentLines.forEach((line, index) => {
        if (line.toLowerCase().includes(lowercaseQuery)) {
          // Get context around the match
          const context = getContextAroundMatch(line, lowercaseQuery)
          matches.push(`Line ${index + 1}: ${context}`)
          score += 1
        }
      })

      if (matches.length > 0) {
        results.push({
          section,
          matches: matches.slice(0, 3), // Limit to 3 matches per section
          score
        })
      }

      // Search in subsections if they exist
      if (section.subsections) {
        const subResults = searchDocumentation(searchQuery, section.subsections)
        results.push(...subResults)
      }
    })

    // Sort by relevance score
    return results.sort((a, b) => b.score - a.score)
  }

  const getContextAroundMatch = (line: string, query: string): string => {
    const index = line.toLowerCase().indexOf(query.toLowerCase())
    if (index === -1) return line

    const start = Math.max(0, index - 30)
    const end = Math.min(line.length, index + query.length + 30)
    let context = line.substring(start, end)

    if (start > 0) context = '...' + context
    if (end < line.length) context = context + '...'

    return context
  }

  const highlightMatch = (text: string, query: string): JSX.Element => {
    const regex = new RegExp(`(${query})`, 'gi')
    const parts = text.split(regex)

    return (
      <>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <span key={index} className="search-highlight font-medium">
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    )
  }

  if (!query.trim()) {
    return (
      <div className="container max-w-4xl mx-auto py-8 px-6">
        <div className="text-center py-12">
          <Search className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Search Documentation</h2>
          <p className="text-muted-foreground">
            Enter a search term to find relevant content in the GitHub Copilot workshop documentation.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="container max-w-4xl mx-auto py-8 px-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Search Results</h2>
        <p className="text-muted-foreground">
          {isLoading 
            ? 'Searching...' 
            : `Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`
          }
        </p>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-muted rounded w-1/2 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded w-full"></div>
                  <div className="h-3 bg-muted rounded w-5/6"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : results.length > 0 ? (
        <ScrollArea className="space-y-4">
          {results.map((result, index) => (
            <Card key={`${result.section.id}-${index}`} className="mb-4 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">
                      {highlightMatch(result.section.title, query)}
                    </h3>
                  </div>
                  <Badge variant="secondary">
                    {result.score} match{result.score !== 1 ? 'es' : ''}
                  </Badge>
                </div>

                <div className="space-y-2 mb-4">
                  {result.matches.map((match, matchIndex) => (
                    <div key={matchIndex} className="text-sm text-muted-foreground bg-muted/50 p-2 rounded">
                      {highlightMatch(match, query)}
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => onSectionChange(result.section.id)}
                  variant="outline"
                  size="sm"
                >
                  Go to Section
                </Button>
              </CardContent>
            </Card>
          ))}
        </ScrollArea>
      ) : (
        <div className="text-center py-12">
          <Search className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No results found</h3>
          <p className="text-muted-foreground mb-4">
            Try searching with different keywords or browse the documentation using the sidebar.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p><strong>Search tips:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Try different keywords or phrases</li>
              <li>Check your spelling</li>
              <li>Use broader terms (e.g., "setup" instead of "installation")</li>
              <li>Browse sections using the navigation menu</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}