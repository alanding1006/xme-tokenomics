import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Ecosystem & Treasury", value: 40, color: "var(--chart-1)" },
  { name: "Team & Advisors", value: 20, color: "var(--chart-2)" },
  { name: "Private Sale", value: 15, color: "var(--chart-3)" },
  { name: "Airdrop", value: 10, color: "var(--chart-4)" },
  { name: "Liquidity", value: 10, color: "var(--chart-5)" },
  { name: "Public Sale", value: 5, color: "var(--secondary)" },
];

export default function AllocationChart() {
  return (
    <section id="allocation" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="font-display text-4xl font-bold">XME Token Allocation</h2>
            <p className="text-muted-foreground text-lg">
              A fair and sustainable distribution model designed to align incentives across all stakeholders.
              Total Supply: <span className="text-foreground font-mono font-bold">1,000,000,000 XME</span>
            </p>
            
            <div className="space-y-4">
              {data.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <span className="font-mono font-bold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--popover)', 
                    borderColor: 'var(--border)',
                    borderRadius: 'var(--radius)',
                    color: 'var(--popover-foreground)'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
