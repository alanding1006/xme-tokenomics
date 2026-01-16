import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, TooltipProps } from "recharts";

const DURATIONS = [
  { days: 30, apy: 0.10 },
  { days: 60, apy: 0.20 },
  { days: 90, apy: 0.30 },
  { days: 180, apy: 1.00 },
];

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
          Value: <span className="text-white font-bold">{data.value.toLocaleString(undefined, { maximumFractionDigits: 0 })} XMEX</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function StakingCalculator() {
  const { t } = useTranslation();
  const [amount, setAmount] = useState(10000);
  const [selectedDuration, setSelectedDuration] = useState(DURATIONS[0]);

  const estimatedReturns = amount * selectedDuration.apy * (selectedDuration.days / 365);
  const totalValue = amount + estimatedReturns;

  const chartData = [
    { name: "Principal", value: amount, color: "var(--primary)" },
    { name: "Returns", value: estimatedReturns, color: "var(--secondary)" },
  ];

  return (
    <section id="calculator" className="py-24 bg-white/5">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-4xl font-bold flex items-center gap-3">
                <Calculator className="text-primary" />
                {t("calculator.title")}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t("calculator.subtitle")}
              </p>
            </div>

            <Card className="bg-card/50 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8 space-y-8">
                {/* Amount Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium text-muted-foreground">
                      {t("calculator.amountLabel")}
                    </label>
                    <span className="font-mono font-bold text-xl">
                      {amount.toLocaleString()} XMEX
                    </span>
                  </div>
                  <Slider
                    value={[amount]}
                    onValueChange={(vals) => setAmount(vals[0])}
                    min={1000}
                    max={1000000}
                    step={1000}
                    className="py-6 touch-none" // Increased padding for touch target and added touch-none
                  />
                </div>

                {/* Duration Selection */}
                <div className="space-y-4">
                  <label className="text-sm font-medium text-muted-foreground">
                    {t("calculator.durationLabel")}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {DURATIONS.map((d) => (
                      <button
                        key={d.days}
                        onClick={() => setSelectedDuration(d)}
                        className={`p-4 sm:p-3 rounded-lg border text-sm font-medium transition-all min-h-[44px] active:scale-95 ${
                          selectedDuration.days === d.days
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background border-white/10 hover:border-primary/50"
                        }`}
                      >
                        <div className="font-bold text-base sm:text-sm">{d.days} {t("calculator.days")}</div>
                        <div className="text-sm sm:text-xs opacity-80">{(d.apy * 100).toFixed(0)}% APY</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {t("calculator.estimatedReturns")}
                    </div>
                    <div className="text-2xl font-bold text-secondary flex items-center gap-2">
                      +{estimatedReturns.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      <TrendingUp size={16} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {t("calculator.totalValue")}
                    </div>
                    <div className="text-2xl font-bold">
                      {totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Visualization */}
          <div className="relative h-[400px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={100}
                  outerRadius={140}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="text-sm text-muted-foreground">Total Projected</div>
              <div className="text-3xl font-bold font-display">
                {totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
              <div className="text-sm text-secondary font-bold mt-1">
                +{(estimatedReturns / amount * 100).toFixed(2)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
