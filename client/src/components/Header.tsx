import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export default function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/">
          <a className="flex items-center gap-2 font-display text-lg md:text-xl font-bold tracking-tight">
            <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-gradient-to-br from-primary to-secondary" />
            X.me <span className="text-muted-foreground font-normal hidden sm:inline">Tokenomics</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#dual-token" className="hover:text-foreground transition-colors">{t("nav.dualToken")}</a>
          <a href="#roadmap" className="hover:text-foreground transition-colors">{t("nav.roadmap")}</a>
          <a href="#calculator" className="hover:text-foreground transition-colors">{t("nav.calculator")}</a>
          <a href="#allocation" className="hover:text-foreground transition-colors">{t("nav.allocation")}</a>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSwitcher />
          
          <div className="hidden sm:flex items-center gap-4">
            <Link href="/whitepaper">
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10 hover:text-primary-foreground">
                {t("nav.whitepaper")}
              </Button>
            </Link>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              {t("nav.launchApp")}
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-xl border-l border-white/10">
              <nav className="flex flex-col gap-6 mt-10">
                <a href="#dual-token" onClick={closeMenu} className="text-lg font-medium hover:text-primary transition-colors">{t("nav.dualToken")}</a>
                <a href="#roadmap" onClick={closeMenu} className="text-lg font-medium hover:text-primary transition-colors">{t("nav.roadmap")}</a>
                <a href="#calculator" onClick={closeMenu} className="text-lg font-medium hover:text-primary transition-colors">{t("nav.calculator")}</a>
                <a href="#allocation" onClick={closeMenu} className="text-lg font-medium hover:text-primary transition-colors">{t("nav.allocation")}</a>
                <hr className="border-white/10" />
                <Link href="/whitepaper" onClick={closeMenu}>
                  <Button variant="outline" className="w-full justify-start text-lg h-12 border-primary/50">
                    {t("nav.whitepaper")}
                  </Button>
                </Link>
                <Button className="w-full text-lg h-12 bg-gradient-to-r from-primary to-secondary">
                  {t("nav.launchApp")}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
