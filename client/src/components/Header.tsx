import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary" />
            X.me <span className="text-muted-foreground font-normal">Tokenomics</span>
          </a>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#vision" className="hover:text-foreground transition-colors">Vision</a>
          <a href="#dual-token" className="hover:text-foreground transition-colors">Dual Token</a>
          <a href="#xme" className="hover:text-foreground transition-colors">XME</a>
          <a href="#xmex" className="hover:text-foreground transition-colors">XMEX</a>
          <a href="#allocation" className="hover:text-foreground transition-colors">Allocation</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex border-primary/50 hover:bg-primary/10 hover:text-primary-foreground">
            Whitepaper
          </Button>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            Launch App
          </Button>
        </div>
      </div>
    </header>
  );
}
