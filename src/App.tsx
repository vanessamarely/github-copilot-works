import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Search, Menu, Github } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Toaster } from '@/components/ui/sonner'
import { Sidebar } from './components/Sidebar'
import { ContentRenderer } from './components/ContentRenderer'
import { SearchResults } from './components/SearchResults'
import { documentation } from './data-temp/documentation'

function App() {
  const [activeSection, setActiveSection] = useKV('active-section', 'introduction')
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId)
    setSearchQuery('')
    setIsSearching(false)
    setIsMobileMenuOpen(false)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setIsSearching(query.length > 0)
  }

  const activeContent = documentation.find(doc => doc.id === activeSection)

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center gap-4">
            {/* Mobile menu trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <Sidebar 
                  activeSection={activeSection}
                  onSectionChange={handleSectionChange}
                  documentation={documentation}
                />
              </SheetContent>
            </Sheet>

            {/* Logo and title */}
            <div className="flex items-center gap-2">
              <Github className="h-6 w-6 text-primary" />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">GitHub Copilot Workshop</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Interactive Documentation</p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* GitHub link */}
          <Button variant="outline" size="sm" asChild>
            <a 
              href="https://github.com/vanessamarely/taller-github-copilot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">View on GitHub</span>
            </a>
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex w-80 border-r bg-sidebar">
          <Sidebar 
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
            documentation={documentation}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {isSearching ? (
            <SearchResults 
              query={searchQuery}
              documentation={documentation}
              onSectionChange={handleSectionChange}
            />
          ) : (
            <div className="container max-w-4xl mx-auto py-8 px-6">
              {activeContent && (
                <ContentRenderer 
                  content={activeContent}
                  onSectionChange={handleSectionChange}
                />
              )}
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto py-8 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">GitHub Copilot Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Official GitHub Copilot
                  </a>
                </li>
                <li>
                  <a href="https://docs.github.com/en/copilot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Copilot Documentation
                  </a>
                </li>
                <li>
                  <a href="https://code.visualstudio.com/docs/editor/github-copilot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    VS Code Integration
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Learning Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://github.com/github/copilot-docs" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Copilot Best Practices
                  </a>
                </li>
                <li>
                  <a href="https://github.com/skills/copilot-codespaces-vscode" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    GitHub Skills Course
                  </a>
                </li>
                <li>
                  <a href="https://github.blog/tag/github-copilot/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Copilot Blog Posts
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Workshop</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://github.com/vanessamarely/taller-github-copilot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Workshop Repository
                  </a>
                </li>
                <li>
                  <a href="https://github.com/vanessamarely" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Workshop Author
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2024 GitHub Copilot Workshop Documentation</p>
            <p>Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}

export default App