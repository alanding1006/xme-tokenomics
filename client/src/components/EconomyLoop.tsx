import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function EconomyLoop() {
  const { t } = useTranslation();

  // Animation variants for the energy pulses
  const pulseVariants = {
    animate: {
      pathLength: [0, 1],
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear" as const,
      }
    }
  };

  const nodeVariants = {
    initial: { scale: 1, opacity: 0.8 },
    hover: { scale: 1.1, opacity: 1, boxShadow: "0 0 20px currentColor" },
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/5 rounded-full blur-[60px] md:blur-[100px]" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 space-y-4 px-4">
          <h2 className="font-display text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            {t("economy.title")}
          </h2>
          <p className="text-muted-foreground text-base md:text-xl">
            {t("economy.subtitle")}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto aspect-[1/1] sm:aspect-[4/3] md:aspect-[16/9] bg-black/40 rounded-3xl border border-white/10 p-2 md:p-8 flex items-center justify-center overflow-hidden backdrop-blur-sm isolate">
          
          {/* Central Reactor Core */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.div 
              className="relative w-24 h-24 md:w-48 md:h-48 flex items-center justify-center rounded-full"
              animate={{ 
                boxShadow: ["0 0 20px rgba(79,70,229,0.2)", "0 0 60px rgba(79,70,229,0.4)", "0 0 20px rgba(79,70,229,0.2)"] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* Core Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl" />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h3 className="font-display text-lg md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-white/80">X.me</h3>
                <p className="text-[10px] md:text-sm text-muted-foreground mt-1">{t("economy.platform")}</p>
              </div>
              
              {/* Rotating Rings */}
              <div className="absolute inset-[-5px] md:inset-[-10px] border border-primary/30 rounded-full border-t-transparent animate-[spin_8s_linear_infinite]" />
              <div className="absolute inset-[-10px] md:inset-[-20px] border border-secondary/30 rounded-full border-b-transparent animate-[spin_12s_linear_infinite_reverse]" />
            </motion.div>
          </div>

          {/* Energy Circuit SVG Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="energy-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#4F46E5" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Main Circuit Path - Adjusted for responsiveness */}
            <path
              d="M400,100 C530,100 650,160 650,225 C650,290 530,350 400,350 C270,350 150,290 150,225 C150,160 270,100 400,100"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              className="hidden md:block"
            />
            {/* Mobile Circuit Path (Simpler/Smaller) */}
            <path
              d="M400,50 C550,50 700,150 700,225 C700,300 550,400 400,400 C250,400 100,300 100,225 C100,150 250,50 400,50"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              className="md:hidden"
              transform="scale(0.8) translate(100, 25)"
            />

            {/* Animated Energy Pulses */}
            <motion.path
              d="M400,100 C530,100 650,160 650,225 C650,290 530,350 400,350 C270,350 150,290 150,225 C150,160 270,100 400,100"
              fill="none"
              stroke="url(#energy-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="hidden md:block"
            />
            <motion.path
              d="M400,50 C550,50 700,150 700,225 C700,300 550,400 400,400 C250,400 100,300 100,225 C100,150 250,50 400,50"
              fill="none"
              stroke="url(#energy-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="md:hidden"
              transform="scale(0.8) translate(100, 25)"
            />
          </svg>

          {/* Interactive Nodes */}
          <div className="absolute inset-0 z-10">
            {/* Top Node: User Activity */}
            <div className="absolute top-[10%] md:top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-20">
              <motion.div 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black border-2 border-secondary flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer relative overflow-hidden"
                variants={nodeVariants}
                initial="initial"
                whileHover="hover"
                animate="pulse"
              >
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/40 transition-colors" />
                <span className="text-xl md:text-2xl">👥</span>
              </motion.div>
              <div className="mt-2 md:mt-4 text-center bg-black/80 backdrop-blur px-2 md:px-4 py-1 md:py-2 rounded-lg border border-white/10">
                <h4 className="text-secondary font-bold text-xs md:text-base">{t("economy.activity")}</h4>
                <p className="text-xs text-muted-foreground hidden md:block w-40">{t("economy.activityDesc")}</p>
              </div>
            </div>

            {/* Right Node: XMEX Rewards */}
            <div className="absolute top-1/2 right-[2%] md:right-[8%] translate-x-0 -translate-y-1/2 flex flex-col items-center group z-20">
              <motion.div 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black border-2 border-secondary flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer relative overflow-hidden"
                variants={nodeVariants}
                initial="initial"
                whileHover="hover"
                animate="pulse"
                transition={{ delay: 1 }}
              >
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/40 transition-colors" />
                <span className="text-xl md:text-2xl">🎁</span>
              </motion.div>
              <div className="mt-2 md:mt-4 text-center bg-black/80 backdrop-blur px-2 md:px-4 py-1 md:py-2 rounded-lg border border-white/10">
                <h4 className="text-secondary font-bold text-xs md:text-base">{t("economy.rewards")}</h4>
                <p className="text-xs text-muted-foreground hidden md:block w-40">{t("economy.rewardsDesc")}</p>
              </div>
            </div>

            {/* Bottom Node: Value Capture */}
            <div className="absolute bottom-[10%] md:bottom-[15%] left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col-reverse items-center group z-20">
              <motion.div 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black border-2 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.3)] cursor-pointer relative overflow-hidden"
                variants={nodeVariants}
                initial="initial"
                whileHover="hover"
                animate="pulse"
                transition={{ delay: 2 }}
              >
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors" />
                <span className="text-xl md:text-2xl">💎</span>
              </motion.div>
              <div className="mb-2 md:mb-4 text-center bg-black/80 backdrop-blur px-2 md:px-4 py-1 md:py-2 rounded-lg border border-white/10">
                <h4 className="text-primary font-bold text-xs md:text-base">{t("economy.capture")}</h4>
                <p className="text-xs text-muted-foreground hidden md:block w-40">{t("economy.captureDesc")}</p>
              </div>
            </div>

            {/* Left Node: XME Governance */}
            <div className="absolute top-1/2 left-[2%] md:left-[8%] translate-x-0 -translate-y-1/2 flex flex-col items-center group z-20">
              <motion.div 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black border-2 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.3)] cursor-pointer relative overflow-hidden"
                variants={nodeVariants}
                initial="initial"
                whileHover="hover"
                animate="pulse"
                transition={{ delay: 3 }}
              >
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors" />
                <span className="text-xl md:text-2xl">🗳️</span>
              </motion.div>
              <div className="mt-2 md:mt-4 text-center bg-black/80 backdrop-blur px-2 md:px-4 py-1 md:py-2 rounded-lg border border-white/10">
                <h4 className="text-primary font-bold text-xs md:text-base">{t("economy.governance")}</h4>
                <p className="text-xs text-muted-foreground hidden md:block w-40">{t("economy.governanceDesc")}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
