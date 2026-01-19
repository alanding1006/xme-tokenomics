import { Streamdown } from 'streamdown';
import { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, List, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Whitepaper() {
  const [content, setContent] = useState('');
  const [activeSection, setActiveSection] = useState('');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch('/whitepaper_en.md')
      .then(res => res.text())
      .then(text => setContent(text));
  }, []);

  // Extract headings for TOC
  const headings = content.match(/^##\s+(.+)$/gm)?.map(h => h.replace(/^##\s+/, '')) || [];

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      if (!articleRef.current) return;
      
      const headingElements = articleRef.current.querySelectorAll('h2');
      let current = '';
      
      headingElements.forEach((h2) => {
        const rect = h2.getBoundingClientRect();
        if (rect.top < 150) {
          current = h2.id;
        }
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Header height + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setIsTocOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 relative">
        <div className="container max-w-7xl mx-auto px-4 flex gap-8">
          {/* Desktop TOC Sidebar */}
          <aside className="hidden lg:block w-64 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto pr-4">
            <div className="space-y-1 mb-4">
              <Link href="/">
                <Button variant="ghost" className="w-full justify-start gap-2 pl-0 hover:bg-transparent hover:text-primary mb-4">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
              <h3 className="font-display font-bold text-lg mb-4 text-white/90 px-2">Contents</h3>
              <nav className="space-y-1">
                {headings.map((heading, index) => {
                  const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return (
                    <button
                      key={index}
                      onClick={() => scrollToSection(id)}
                      className={cn(
                        "w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-200 flex items-center gap-2",
                        activeSection === id 
                          ? "bg-primary/10 text-primary font-medium" 
                          : "text-muted-foreground hover:text-white hover:bg-white/5"
                      )}
                    >
                      {activeSection === id && <ChevronRight className="w-3 h-3" />}
                      <span className="truncate">{heading}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
            
            <div className="pt-6 mt-6 border-t border-white/10">
              <Button variant="outline" className="w-full gap-2" onClick={() => window.print()}>
                <Download className="w-4 h-4" />
                Save as PDF
              </Button>
            </div>
          </aside>

          {/* Mobile TOC Toggle */}
          <div className="lg:hidden fixed bottom-6 right-6 z-50">
            <Button 
              size="icon" 
              className="h-12 w-12 rounded-full shadow-xl bg-primary hover:bg-primary/90"
              onClick={() => setIsTocOpen(!isTocOpen)}
            >
              <List className="w-6 h-6" />
            </Button>
          </div>

          {/* Mobile TOC Drawer */}
          <AnimatePresence>
            {isTocOpen && (
              <>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/80 z-40 lg:hidden"
                  onClick={() => setIsTocOpen(false)}
                />
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  className="fixed right-0 top-0 bottom-0 w-80 bg-card border-l border-white/10 z-50 p-6 overflow-y-auto"
                >
                  <h3 className="font-display font-bold text-xl mb-6 text-white">Contents</h3>
                  <nav className="space-y-2">
                    {headings.map((heading, index) => {
                      const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                      return (
                        <button
                          key={index}
                          onClick={() => scrollToSection(id)}
                          className={cn(
                            "w-full text-left px-4 py-3 text-sm rounded-lg transition-colors duration-200",
                            activeSection === id 
                              ? "bg-primary/10 text-primary font-medium" 
                              : "text-muted-foreground hover:text-white hover:bg-white/5"
                          )}
                        >
                          {heading}
                        </button>
                      );
                    })}
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <article 
            ref={articleRef}
            className="flex-1 min-w-0 prose prose-invert prose-lg max-w-none 
            prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-32
            prose-h1:text-4xl prose-h1:mb-8 prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-white prose-h1:to-white/60
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-primary prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-white/90
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-strong:text-white prose-strong:font-semibold
            prose-ul:text-muted-foreground prose-li:marker:text-primary/50
            prose-table:border-border prose-th:text-white prose-th:bg-white/5 prose-td:text-muted-foreground
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            bg-card/30 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-12 shadow-2xl"
          >
            <div className="lg:hidden mb-8">
              <Link href="/">
                <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <Streamdown>{content}</Streamdown>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
