import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t("hero.tag")}
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            {t("hero.title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{t("hero.titleHighlight")}</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            {t("hero.description")}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="h-12 px-8 text-lg bg-primary hover:bg-primary/90">
              {t("hero.explore")}
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-white/10 hover:bg-white/5">
              {t("hero.readWhitepaper")}
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Abstract representation of the dual token system */}
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full border border-white/5 backdrop-blur-sm" />
            
            {/* XME Orbit */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 border border-dashed border-primary/30 rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-full shadow-[0_0_30px_rgba(79,70,229,0.5)] flex items-center justify-center font-display font-bold text-white">
                XME
              </div>
            </motion.div>

            {/* XMEX Orbit */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-32 border border-dashed border-secondary/30 rounded-full"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-secondary rounded-full shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center font-display font-bold text-black text-sm">
                XMEX
              </div>
            </motion.div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-white/5 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center">
                <span className="font-display text-2xl font-bold">X.me</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
