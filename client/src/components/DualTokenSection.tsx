import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Coins, Crown } from "lucide-react";

export default function DualTokenSection() {
  return (
    <section id="dual-token" className="py-24 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-4xl font-bold">Two Tokens, One Ecosystem</h2>
          <p className="text-muted-foreground text-lg">
            Separating governance from utility to ensure long-term stability and sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* XME Card */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full bg-gradient-to-b from-primary/10 to-transparent border-primary/20 overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Crown size={120} />
              </div>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 text-primary">
                  <Crown size={24} />
                </div>
                <CardTitle className="font-display text-3xl text-primary">XME</CardTitle>
                <p className="text-sm font-mono text-primary/80">GOVERNANCE TOKEN</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  The anchor of value and governance. Represents ownership, decision-making power, and long-term value capture.
                </p>
                <ul className="space-y-3">
                  {[
                    "Platform Ownership & Governance",
                    "Revenue Sharing & Staking Rewards",
                    "Deflationary Buyback & Burn",
                    "Exclusive Premium Access"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* XMEX Card */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full bg-gradient-to-b from-secondary/10 to-transparent border-secondary/20 overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Coins size={120} />
              </div>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 text-secondary">
                  <Coins size={24} />
                </div>
                <CardTitle className="font-display text-3xl text-secondary">XMEX</CardTitle>
                <p className="text-sm font-mono text-secondary/80">UTILITY TOKEN</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  The fuel for growth. Drives daily activity, content creation, and user engagement through a balanced economy.
                </p>
                <ul className="space-y-3">
                  {[
                    "User Activity Rewards",
                    "Content Creation Incentives",
                    "Platform Services Payment",
                    "Convertible to XME (Burn Mechanism)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Connection Arrow */}
        <div className="hidden md:flex justify-center -mt-8 relative z-10">
          <div className="bg-background border border-white/10 rounded-full p-2 text-muted-foreground">
            <ArrowRight size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
