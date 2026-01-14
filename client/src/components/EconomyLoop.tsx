import { motion } from "framer-motion";

export default function EconomyLoop() {
  return (
    <section className="py-24 bg-white/5 relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-4xl font-bold">The Economic Flywheel</h2>
          <p className="text-muted-foreground text-lg">
            A self-sustaining loop where activity generates value, and value rewards participation.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto aspect-[16/9] bg-black/40 rounded-3xl border border-white/10 p-8 flex items-center justify-center">
          {/* Central Hub */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-3xl" />
            <div className="relative z-10 text-center">
              <h3 className="font-display text-2xl font-bold">X.me Platform</h3>
              <p className="text-sm text-muted-foreground">Value Aggregation</p>
            </div>
          </div>

          {/* Orbital Nodes */}
          <div className="absolute inset-0">
            {/* Top: User Activity */}
            <motion.div 
              className="absolute top-8 left-1/2 -translate-x-1/2 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-2">
                User Activity
              </div>
              <p className="text-xs text-muted-foreground w-48">
                Content creation, social interaction, engagement
              </p>
            </motion.div>

            {/* Right: XMEX Rewards */}
            <motion.div 
              className="absolute right-8 top-1/2 -translate-y-1/2 text-right"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-2 inline-block">
                XMEX Rewards
              </div>
              <p className="text-xs text-muted-foreground w-48 ml-auto">
                Incentivizing growth and participation
              </p>
            </motion.div>

            {/* Bottom: Value Capture */}
            <motion.div 
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold mb-2">
                Value Capture
              </div>
              <p className="text-xs text-muted-foreground w-48">
                Fees, services, and burn mechanisms
              </p>
            </motion.div>

            {/* Left: XME Governance */}
            <motion.div 
              className="absolute left-8 top-1/2 -translate-y-1/2 text-left"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold mb-2 inline-block">
                XME Governance
              </div>
              <p className="text-xs text-muted-foreground w-48">
                Staking, voting, and long-term holding
              </p>
            </motion.div>
          </div>

          {/* Connecting Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
            <circle cx="50%" cy="50%" r="35%" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="8 8" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--secondary)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
