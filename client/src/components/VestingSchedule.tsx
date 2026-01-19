import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface VestingPhase {
  name: string;
  color: string;
  startMonth: number;
  durationMonths: number;
  totalPercentage: number;
  tgeUnlock: number; // Percentage unlocked at TGE
  details: string;
}

const vestingData: VestingPhase[] = [
  {
    name: "Public Sale",
    color: "#3b82f6", // blue-500
    startMonth: 0,
    durationMonths: 1, // Immediate unlock
    totalPercentage: 25,
    tgeUnlock: 25,
    details: "100% unlocked at TGE to ensure wide distribution."
  },
  {
    name: "Ecosystem & Treasury",
    color: "#10b981", // emerald-500
    startMonth: 0,
    durationMonths: 48,
    totalPercentage: 25,
    tgeUnlock: 2.5, // 10% of 25%
    details: "10% at TGE, then linear vesting over 48 months."
  },
  {
    name: "User Incentive Airdrop",
    color: "#f59e0b", // amber-500
    startMonth: 0,
    durationMonths: 12,
    totalPercentage: 15,
    tgeUnlock: 5, // ~33% of 15%
    details: "5% at TGE, remaining 10% vested over 12 months based on activity."
  },
  {
    name: "Liquidity Provision",
    color: "#8b5cf6", // violet-500
    startMonth: 0,
    durationMonths: 24,
    totalPercentage: 10,
    tgeUnlock: 2, // 20% of 10%
    details: "Released prudently based on market demand over 24 months."
  },
  {
    name: "Private Sale",
    color: "#ec4899", // pink-500
    startMonth: 6, // 6 months cliff
    durationMonths: 24,
    totalPercentage: 10,
    tgeUnlock: 0,
    details: "6-month cliff, then linear vesting over 24 months."
  },
  {
    name: "Team & Advisors",
    color: "#ef4444", // red-500
    startMonth: 12, // 12 months cliff
    durationMonths: 36,
    totalPercentage: 15,
    tgeUnlock: 0,
    details: "12-month cliff, then linear vesting over 36 months."
  }
];

const totalMonths = 48;

export default function VestingSchedule() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/60">
            Token Release Schedule
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A transparent 4-year vesting plan designed to align long-term interests of the community, team, and investors.
          </p>
        </motion.div>

        <Card className="bg-black/40 border-white/10 backdrop-blur-sm overflow-hidden">
          <CardHeader className="border-b border-white/5 pb-6">
            <div className="flex justify-between items-center text-sm text-muted-foreground px-2">
              <span>TGE (Month 0)</span>
              <span>Year 1</span>
              <span>Year 2</span>
              <span>Year 3</span>
              <span>Year 4</span>
            </div>
            {/* Timeline Grid */}
            <div className="relative h-4 mt-2 w-full flex">
              {[0, 12, 24, 36, 48].map((month, i) => (
                <div 
                  key={month} 
                  className="absolute h-full border-l border-white/10 flex flex-col items-center"
                  style={{ left: `${(month / totalMonths) * 100}%` }}
                >
                  <div className="w-2 h-2 rounded-full bg-white/20 -ml-[1px] mt-[-4px]" />
                </div>
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="pt-8 pb-8 space-y-8 relative">
            {/* Vertical Grid Lines for Content Area */}
            <div className="absolute inset-0 top-8 bottom-8 pointer-events-none">
              {[12, 24, 36].map((month) => (
                <div 
                  key={month} 
                  className="absolute h-full border-l border-dashed border-white/5"
                  style={{ left: `${(month / totalMonths) * 100}%` }}
                />
              ))}
            </div>

            <TooltipProvider delayDuration={0}>
              {vestingData.map((phase, index) => (
                <motion.div
                  key={phase.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="flex items-center mb-2 justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: phase.color }} />
                      <span className="font-medium text-white/90">{phase.name}</span>
                    </div>
                    <span className="text-muted-foreground text-xs">{phase.totalPercentage}% Total</span>
                  </div>
                  
                  <div className="h-8 w-full bg-white/5 rounded-full overflow-hidden relative">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div 
                          className="h-full absolute top-0 rounded-full transition-all duration-300 hover:brightness-110 cursor-help flex items-center"
                          style={{ 
                            left: `${(phase.startMonth / totalMonths) * 100}%`,
                            width: `${Math.max((phase.durationMonths / totalMonths) * 100, 1)}%`,
                            backgroundColor: phase.color,
                            opacity: 0.8
                          }}
                        >
                          {/* TGE Unlock Indicator */}
                          {phase.tgeUnlock > 0 && phase.startMonth === 0 && (
                            <div className="h-full w-1 bg-white/50 absolute left-0" />
                          )}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent 
                        side="top" 
                        className="bg-black/90 border-white/10 text-white p-3 max-w-xs"
                      >
                        <p className="font-bold mb-1">{phase.name}</p>
                        <p className="text-xs text-gray-300 mb-2">{phase.details}</p>
                        <div className="text-xs grid grid-cols-2 gap-x-4 gap-y-1">
                          <span className="text-gray-400">Start:</span>
                          <span>{phase.startMonth === 0 ? "TGE" : `Month ${phase.startMonth}`}</span>
                          <span className="text-gray-400">Duration:</span>
                          <span>{phase.durationMonths} Months</span>
                          <span className="text-gray-400">TGE Unlock:</span>
                          <span>{phase.tgeUnlock > 0 ? `${phase.tgeUnlock}%` : "0%"}</span>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </motion.div>
              ))}
            </TooltipProvider>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
