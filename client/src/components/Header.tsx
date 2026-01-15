import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary" />
            X.me <span className="text-muted-foreground font-normal">Tokenomics</span>
          </a>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#dual-token" className="hover:text-foreground transition-colors">{t("nav.dualToken")}</a>
          <a href="#roadmap" className="hover:text-foreground transition-colors">{t("nav.roadmap")}</a>
          <a href="#calculator" className="hover:text-foreground transition-colors">{t("nav.calculator")}</a>
          <a href="#allocation" className="hover:text-foreground transition-colors">{t("nav.allocation")}</a>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/whitepaper">
            <Button variant="outline" className="hidden sm:flex border-primary/50 hover:bg-primary/10 hover:text-primary-foreground">
              {t("nav.whitepaper")}
            </Button>
          </Link>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            {t("nav.launchApp")}
          </Button>
        </div>
      </div>
    </header>
  );
}
