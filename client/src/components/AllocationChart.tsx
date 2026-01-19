import { useTranslation } from "react-i18next";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, TooltipProps } from "recharts";

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-black/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: data.color }} />
          <p className="text-white font-bold text-sm">{data.name}</p>
        </div>
        <p className="text-white/80 font-mono text-xs pl-4">
          Allocation: <span className="text-white font-bold">{data.value}%</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function AllocationChart() {
  const { t } = useTranslation();

  const data = [
    { name: t("allocation.items.ecosystem"), value: 25, color: "#10b981" }, // emerald-500
    { name: t("allocation.items.airdrop"), value: 15, color: "#f59e0b" }, // amber-500
    { name: t("allocation.items.team"), value: 15, color: "#ef4444" }, // red-500
    { name: t("allocation.items.private"), value: 10, color: "#ec4899" }, // pink-500
    { name: t("allocation.items.liquidity"), value: 10, color: "#8b5cf6" }, // violet-500
    { name: t("allocation.items.public"), value: 25, color: "#3b82f6" }, // blue-500
  ];

  return (
    <section id="allocation" className="py-16 md:py-24 bg-black/20">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold">{t("allocation.title")}</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            {t("allocation.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="h-[300px] md:h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center lg:text-left">{t("allocation.totalSupply")}</h3>
            <div className="grid gap-3 md:gap-4">
              {data.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 md:p-4 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="font-medium text-sm md:text-base">{item.name}</span>
                  </div>
                  <span className="font-mono font-bold text-sm md:text-base">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
