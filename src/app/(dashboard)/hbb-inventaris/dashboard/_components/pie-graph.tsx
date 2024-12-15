"use client";
import * as React from "react";
import { PieChart, Pie, Label, Tooltip } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartDataTingkatOptimalisasiPemakaian = [
  { name: "HBB", value: 350, fill: "#f7c325" },
  { name: "Inventaris", value: 350, fill: "#f7c325" },
  { name: "Lain-Lain", value: 350, fill: "#f7c325" },
];

const chartConfig1 = {
  A: { label: "HBB ", color: "#f7c325" },
  B: { label: "Inventaris ", color: "#f7c325" },
  C: { label: "Lain - Lain", color: "#f7c325" },
};

export function PieGraph() {
  return (
    <Card className="flex flex-col items-center">
      <CardHeader className="pb-4">
        <CardTitle> Tingkat Optimalisasi Pemakaian</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-around w-full gap-4">
        <ChartContainer
          config={chartConfig1}
          className="mx-auto aspect-square max-h-[180px] min-h-[180px] min-w-[180px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartDataTingkatOptimalisasiPemakaian}
              dataKey="value"
              nameKey="name"
              innerRadius={40}
              outerRadius={70}
              strokeWidth={3}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-xl font-bold"
                        >
                          1000
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="text-sm font-medium justify-center">
        <div className="text-[#f7c325]"> Text Description </div>
      </CardFooter>
    </Card>
  );
}
