import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export default function Hero() {
  const { t } = useTranslation();
  const [hoveredToken, setHoveredToken] = useState<"XME" | "XMEX" | null>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Reduced blur radius and size for mobile performance */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[80px] md:blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-[80px] md:blur-[128px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{ 
              y: [null, Math.random() * -100],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 items-center pt-8 md:pt-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs md:text-sm font-medium mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t("hero.tag")}
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            {t("hero.title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary block md:inline">{t("hero.titleHighlight")}</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0">
            {t("hero.description")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="h-12 px-8 text-lg bg-primary hover:bg-primary/90 w-full sm:w-auto shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-shadow">
              {t("hero.explore")}
            </Button>
            <Link href="/whitepaper">
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-white/10 hover:bg-white/5 w-full sm:w-auto">
                {t("hero.readWhitepaper")}
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block perspective-[1000px]"
        >
          {/* Interstellar Gravity Field Animation */}
          <div className="relative w-full aspect-square transform-style-3d rotate-x-12 rotate-y-12">
            
            {/* Central Energy Core */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-40 animate-pulse" />
                <div className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                  <span className="font-display text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70">X.me</span>
                </div>
                {/* Core Rings */}
                <div className="absolute inset-[-10px] border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-[-20px] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              </div>
            </div>

            {/* XMEX Orbit System (Outer) */}
            <motion.div 
              className="absolute inset-0 z-10"
              animate={{ rotate: hoveredToken === "XMEX" ? 0 : 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-4 border border-secondary/20 rounded-full transform rotate-x-60" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-20 cursor-pointer group"
                   onMouseEnter={() => setHoveredToken("XMEX")}
                   onMouseLeave={() => setHoveredToken(null)}>
                {/* Planet XMEX */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-secondary rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-secondary to-secondary/50 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                    <span className="font-display font-bold text-black text-sm">XMEX</span>
                  </div>
                  {/* Trail Effect */}
                  <div className="absolute top-1/2 left-1/2 w-32 h-1 bg-gradient-to-r from-secondary to-transparent -translate-y-1/2 -translate-x-full opacity-50 blur-sm group-hover:opacity-0 transition-opacity" />
                </div>
              </div>
            </motion.div>

            {/* XME Orbit System (Inner) */}
            <motion.div 
              className="absolute inset-20 z-10"
              animate={{ rotate: hoveredToken === "XME" ? 0 : -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 border border-primary/20 rounded-full transform rotate-y-60" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 cursor-pointer group"
                   onMouseEnter={() => setHoveredToken("XME")}
                   onMouseLeave={() => setHoveredToken(null)}>
                {/* Planet XME */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                  <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/50 rounded-full shadow-[0_0_30px_rgba(79,70,229,0.6)] flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                    <span className="font-display font-bold text-white text-xs">XME</span>
                  </div>
                  {/* Trail Effect */}
                  <div className="absolute top-1/2 left-1/2 w-24 h-1 bg-gradient-to-l from-primary to-transparent -translate-y-1/2 translate-x-0 opacity-50 blur-sm group-hover:opacity-0 transition-opacity" />
                </div>
              </div>
            </motion.div>
            
            {/* HUD Data Card */}
            <AnimatePresence>
              {hoveredToken && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.9 }}
                  className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 z-30 w-64"
                >
                  <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-1 h-full ${hoveredToken === "XME" ? "bg-primary" : "bg-secondary"}`} />
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display font-bold text-lg">{hoveredToken}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${hoveredToken === "XME" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"}`}>
                          {hoveredToken === "XME" ? "Governance" : "Utility"}
                        </span>
                      </div>
                      
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Simulated Price</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-mono font-bold">
                            {hoveredToken === "XME" ? "$1.25" : "$0.05"}
                          </span>
                          <span className="text-xs text-green-500 font-mono">+5.2%</span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Circulating Supply</p>
                        <p className="text-sm font-mono">
                          {hoveredToken === "XME" ? "12,500,000" : "450,000,000"}
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative HUD lines */}
                    <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
