import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import InteractiveParticle from "./InteractiveParticle";

export default function Hero() {
  const { t } = useTranslation();
  const [hoveredToken, setHoveredToken] = useState<"XME" | "XMEX" | null>(null);
  
  // Mouse position for parallax effect (normalized from -0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized position (-0.5 to 0.5)
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30 mix-blend-screen filter blur-[2px]"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Overlay gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        {/* Reduced blur radius and size for mobile performance */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[60px] md:blur-[128px] animate-pulse mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-[60px] md:blur-[128px] animate-pulse delay-1000 mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        {/* Interactive Floating Particles - Reduced count for mobile */}
        <div className="hidden md:block">
          {[...Array(30)].map((_, i) => (
            <InteractiveParticle 
              key={i} 
              mouseX={mouseX} 
              mouseY={mouseY} 
              depth={Math.random() * 2 - 0.5} // Random depth from -0.5 to 1.5 for varied movement
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
        >

          
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight px-4 md:px-0">
            {t("hero.title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary block md:inline mt-2 md:mt-0">{t("hero.titleHighlight")}</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0 px-4 md:px-0">
            {t("hero.description")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 md:px-0 w-full sm:w-auto">
            <Button size="lg" className="h-12 px-8 text-lg bg-primary hover:bg-primary/90 w-full sm:w-auto shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-shadow">
              {t("hero.explore")}
            </Button>
            <Link href="/whitepaper" className="w-full sm:w-auto">
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
          className="relative perspective-[1000px] h-[300px] md:h-[500px] order-1 lg:order-2"
        >
          {/* Interstellar Gravity Field Animation */}
          <div className="relative w-full h-full transform-style-3d rotate-x-12 rotate-y-12 flex items-center justify-center">
            
            {/* Central Energy Core */}
            <div className="absolute z-20">
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-40 animate-pulse" />
                <div className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                  <span className="font-display text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70">X.me</span>
                </div>
                {/* Core Rings */}
                <div className="absolute inset-[-10px] border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-[-20px] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              </div>
            </div>

            {/* XMEX Orbit System (Outer) */}
            <motion.div 
              className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] z-10"
              animate={{ rotate: hoveredToken === "XMEX" ? 0 : 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 border border-secondary/20 rounded-full transform rotate-x-60" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 cursor-pointer group"
                   onMouseEnter={() => setHoveredToken("XMEX")}
                   onMouseLeave={() => setHoveredToken(null)}
                   onClick={() => setHoveredToken(hoveredToken === "XMEX" ? null : "XMEX")}>
                {/* Planet XMEX */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-secondary rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                  <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-secondary/50 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                    <span className="font-display font-bold text-black text-xs md:text-sm">XMEX</span>
                  </div>
                  {/* Trail Effect */}
                  <div className="absolute top-1/2 left-1/2 w-24 md:w-32 h-1 bg-gradient-to-r from-secondary to-transparent -translate-y-1/2 -translate-x-full opacity-50 blur-sm group-hover:opacity-0 transition-opacity" />
                </div>
              </div>
            </motion.div>

            {/* XME Orbit System (Inner) */}
            <motion.div 
              className="absolute w-[180px] h-[180px] md:w-[260px] md:h-[260px] z-10"
              animate={{ rotate: hoveredToken === "XME" ? 0 : -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 border border-primary/20 rounded-full transform rotate-y-60" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 cursor-pointer group"
                   onMouseEnter={() => setHoveredToken("XME")}
                   onMouseLeave={() => setHoveredToken(null)}
                   onClick={() => setHoveredToken(hoveredToken === "XME" ? null : "XME")}>
                {/* Planet XME */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                  <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-primary/50 rounded-full shadow-[0_0_30px_rgba(79,70,229,0.6)] flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                    <span className="font-display font-bold text-white text-[10px] md:text-xs">XME</span>
                  </div>
                  {/* Trail Effect */}
                  <div className="absolute top-1/2 left-1/2 w-16 md:w-24 h-1 bg-gradient-to-l from-primary to-transparent -translate-y-1/2 translate-x-0 opacity-50 blur-sm group-hover:opacity-0 transition-opacity" />
                </div>
              </div>
            </motion.div>
            
            {/* HUD Data Card */}
            <AnimatePresence>
              {hoveredToken && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  className="absolute bottom-[-140px] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-1/4 md:top-1/2 md:bottom-auto md:right-[-50px] md:-translate-y-1/2 z-30 w-64"
                >
                  <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-1 h-full ${hoveredToken === "XME" ? "bg-primary" : "bg-secondary"}`} />
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display font-bold text-lg">{hoveredToken}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${hoveredToken === "XME" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"}`}>
                            {hoveredToken === "XME" ? t("dualToken.xme.type") : t("dualToken.xmex.type")}
                          </span>
                        </div>
                        
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">{t("calculator.estimatedReturns")}</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl font-mono font-bold">
                              {hoveredToken === "XME" ? "$1.25" : "$0.05"}
                            </span>
                            <span className="text-xs text-green-500 font-mono">+5.2%</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">{t("allocation.totalSupply")}</p>
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
