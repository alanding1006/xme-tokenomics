export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/20">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2 font-display text-xl font-bold">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-secondary" />
              X.me
            </div>
            <p className="text-muted-foreground max-w-xs">
              Building the future of decentralized social interaction through sustainable tokenomics.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Whitepaper</a></li>
              <li><a href="#" className="hover:text-foreground">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground">Brand Assets</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Twitter</a></li>
              <li><a href="#" className="hover:text-foreground">Discord</a></li>
              <li><a href="#" className="hover:text-foreground">Telegram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
          © 2026 X.me Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
