import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { period: "Mar '25", usedAI: 7.4, willUseAI: 9.9 },
  { period: "Mar '25", usedAI: 7.8, willUseAI: 10.5 },
  { period: "Apr '25", usedAI: 8.0, willUseAI: 10.5 },
  { period: "Apr '25", usedAI: 8.3, willUseAI: 10.9 },
  { period: "May '25", usedAI: 8.7, willUseAI: 11.0 },
  { period: "May '25", usedAI: 8.7, willUseAI: 11.0 },
  { period: "Jun '25", usedAI: 9.2, willUseAI: 11.6 },
  { period: "Jun '25", usedAI: 9.2, willUseAI: 11.6 },
  { period: "Jul '25", usedAI: 9.3, willUseAI: 11.7 },
  { period: "Jul '25", usedAI: 9.3, willUseAI: 12.3 },
  { period: "Aug '25", usedAI: 9.4, willUseAI: 13.5 },
  { period: "Aug '25", usedAI: 8.8, willUseAI: 13.0 },
  { period: "Sep '25", usedAI: 9.7, willUseAI: 13.7 },
  { period: "Sep '25", usedAI: 9.1, willUseAI: 13.8 },
  { period: "Oct '25", usedAI: 9.9, willUseAI: 14.0 },
]

const chartConfig = {
  usedAI: {
    label: "Used AI (Last 2 Weeks)",
    color: "#0A0A0A",
  },
  willUseAI: {
    label: "Will Use AI (Next 6 Months)",
    color: "#737373",
  },
} satisfies ChartConfig

export function AIAdoptionChart() {
  return (
    <Card className="w-full max-w-3xl mx-auto border-none shadow-xl bg-white/95 backdrop-blur-sm">
      <CardHeader className="space-y-1 pb-2">
        <CardTitle className="text-xl font-bold font-saira text-stardust-a0">
          AI Adoption is Accelerating
        </CardTitle>
        <CardDescription className="text-xs text-stardust-a10">
          Federal Reserve data shows rapid growth in business AI adoption from March to October 2025
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <ChartContainer config={chartConfig} className="min-h-[180px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
              right: 12,
              left: 12,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="fillUsedAI" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-usedAI)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-usedAI)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillWillUseAI" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-willUseAI)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-willUseAI)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
            <XAxis
              dataKey="period"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={2}
              className="text-sm"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}%`}
              className="text-sm"
            />
            <ChartTooltip
              cursor={{ strokeDasharray: '3 3' }}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  formatter={(value, name, item, _index) => {
                    const label = chartConfig[name as keyof typeof chartConfig]?.label || name
                    const color = item.color || item.fill

                    return (
                      <div className="flex w-full items-center gap-2">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-muted-foreground text-xs flex-1">
                          {label}
                        </span>
                        <span className="text-foreground font-mono font-medium tabular-nums text-xs">
                          {value}%
                        </span>
                      </div>
                    )
                  }}
                />
              }
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              dataKey="willUseAI"
              type="monotone"
              fill="url(#fillWillUseAI)"
              fillOpacity={0.4}
              stroke="var(--color-willUseAI)"
              strokeWidth={2}
            />
            <Area
              dataKey="usedAI"
              type="monotone"
              fill="url(#fillUsedAI)"
              fillOpacity={0.4}
              stroke="var(--color-usedAI)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
        <p className="mt-3 text-[10px] text-stardust-a10 text-center italic">
          Source: U.S. Census Bureau, Business Trends and Outlook Survey (BTOS) 2025.
        </p>
      </CardContent>
    </Card>
  )
}
