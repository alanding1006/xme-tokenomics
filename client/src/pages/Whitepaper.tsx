import { Streamdown } from 'streamdown';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'wouter';

export default function Whitepaper() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/whitepaper_en.md')
      .then(res => res.text())
      .then(text => setContent(text));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            
            <Button variant="outline" className="gap-2" onClick={() => window.print()}>
              <Download className="w-4 h-4" />
              Save as PDF
            </Button>
          </div>

          <article className="prose prose-invert prose-lg max-w-none 
            prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:mb-8 prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-white prose-h1:to-white/60
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-primary
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-white/90
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-strong:text-white prose-strong:font-semibold
            prose-ul:text-muted-foreground prose-li:marker:text-primary/50
            prose-table:border-border prose-th:text-white prose-th:bg-white/5 prose-td:text-muted-foreground
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            bg-card/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl">
            <Streamdown>{content}</Streamdown>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
