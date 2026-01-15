import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Coins, Crown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function DualTokenSection() {
  const { t } = useTranslation();

  return (
    <section id="dual-token" className="py-24 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-4xl font-bold">{t("dualToken.title")}</h2>
          <p className="text-muted-foreground text-lg">
            {t("dualToken.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* XME Card */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-full"
          >
            <Card className="h-full bg-gradient-to-b from-primary/10 to-transparent border-primary/20 overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <Crown size={120} />
              </div>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 text-primary">
                  <Crown size={24} />
                </div>
                <CardTitle className="font-display text-3xl text-primary">{t("dualToken.xme.title")}</CardTitle>
                <p className="text-sm font-mono text-primary/80">{t("dualToken.xme.type")}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-base md:text-lg leading-relaxed">
                  {t("dualToken.xme.desc")}
                </p>
                <ul className="space-y-3">
                  {(t("dualToken.xme.features", { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
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
            className="h-full"
          >
            <Card className="h-full bg-gradient-to-b from-secondary/10 to-transparent border-secondary/20 overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <Coins size={120} />
              </div>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 text-secondary">
                  <Coins size={24} />
                </div>
                <CardTitle className="font-display text-3xl text-secondary">{t("dualToken.xmex.title")}</CardTitle>
                <p className="text-sm font-mono text-secondary/80">{t("dualToken.xmex.type")}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-base md:text-lg leading-relaxed">
                  {t("dualToken.xmex.desc")}
                </p>
                <ul className="space-y-3">
                  {(t("dualToken.xmex.features", { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
