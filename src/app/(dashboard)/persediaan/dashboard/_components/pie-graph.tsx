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

const chartData1 = [
  { name: "A", value: 350, fill: "#730fc3" },
  { name: "B", value: 350, fill: "#730fc3" },
  { name: "C", value: 350, fill: "#730fc3" },
];

const chartData2 = [
  { name: "X", value: 500, fill: "#e8833a" },
  { name: "Y", value: 400, fill: "#e8833a" },
  { name: "Z", value: 300, fill: "#e8833a" },
];

const chartData3 = [
  { name: "P", value: 700, fill: "#d3455b" },
  { name: "Q", value: 500, fill: "#d3455b" },
  { name: "R", value: 300, fill: "#d3455b" },
];

const chartConfig1 = {
  A: { label: "Category A", color: "#730fc3" },
  B: { label: "Category B", color: "#730fc3" },
  C: { label: "Category C", color: "#730fc3" },
};

const chartConfig2 = {
  X: { label: "Category X", color: "#e8833a" },
  Y: { label: "Category Y", color: "#e8833a" },
  Z: { label: "Category Z", color: "#e8833a" },
};

const chartConfig3 = {
  P: { label: "Category P", color: "#d3455b" },
  Q: { label: "Category Q", color: "#d3455b" },
  R: { label: "Category R", color: "#d3455b" },
};

export function PieGraph() {
  return (
    <Card className="flex flex-col items-center">
      <CardHeader className="pb-4">
        <CardTitle>Total Nilai Persediaan (Rp.)</CardTitle>
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
              data={chartData1}
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

        <ChartContainer
          config={chartConfig2}
          className="mx-auto aspect-square max-h-[180px] min-h-[180px] min-w-[180px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData2}
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
                          2000
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        <ChartContainer
          config={chartConfig3}
          className="mx-auto aspect-square max-h-[180px] min-h-[180px] min-w-[180px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData3}
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
                        3000
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
      <CardFooter className="text-sm font-medium w-full">
        <div className="flex justify-between w-full">
          <div className="pl-20 text-[#730fc3]">Kelompok Material</div>
          <div className="text-[#e8833a]">Lokasi Gudang</div>
          <div className="pr-20 text-[#d3455b]">Kategori Material</div>
        </div>
      </CardFooter>
    </Card>
  );
}
