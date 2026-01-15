import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Roadmap() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const items = [
    {
      key: "q1_2026",
      status: "completed",
      icon: CheckCircle2,
    },
    {
      key: "q2_2026",
      status: "active",
      icon: Circle,
    },
    {
      key: "q3_2026",
      status: "upcoming",
      icon: Circle,
    },
    {
      key: "q4_2026",
      status: "upcoming",
      icon: Circle,
    },
  ];

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      <div className="container" ref={containerRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-4xl font-bold">{t("roadmap.title")}</h2>
          <p className="text-muted-foreground text-lg">{t("roadmap.subtitle")}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 hidden md:block">
            <motion.div
              className="w-full bg-gradient-to-b from-primary to-secondary"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Left Line (Mobile) */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/10 md:hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-primary to-secondary"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-8 md:space-y-24">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`flex flex-row md:flex-row items-start md:items-center gap-4 md:gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon Node */}
                  <div className="relative z-10 flex-shrink-0 mt-1 md:mt-0">
                    <div
                      className={`w-12 h-12 rounded-full border-4 flex items-center justify-center bg-background ${
                        item.status === "completed"
                          ? "border-primary text-primary"
                          : item.status === "active"
                          ? "border-primary text-primary shadow-[0_0_20px_rgba(79,70,229,0.5)]"
                          : "border-muted text-muted-foreground"
                      }`}
                    >
                      <item.icon size={20} strokeWidth={3} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-left">
                    <div
                      className={`p-6 rounded-2xl border bg-card/50 backdrop-blur-sm ${
                        item.status === "active"
                          ? "border-primary/50 shadow-[0_0_30px_rgba(79,70,229,0.1)]"
                          : "border-white/5"
                      }`}
                    >
                      <div className="inline-flex items-center gap-2 mb-2">
                        <span
                          className={`text-sm font-mono font-bold ${
                            item.status === "active"
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {t(`roadmap.${item.key}.title`).split(":")[0]}
                        </span>
                        {item.status === "active" && (
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {t(`roadmap.${item.key}.title`).split(":")[1]}
                      </h3>
                      <p className="text-muted-foreground">
                        {t(`roadmap.${item.key}.desc`)}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for layout balance (Desktop only) */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
