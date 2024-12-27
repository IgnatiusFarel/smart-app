"use client"
import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

const chartData = [
  { month: "January", oilGas: 120, spbg: 60, pipeline: 90, mechanical: 70, electrical: 80},
  { month: "February", oilGas: 150, spbg: 75, pipeline: 100, mechanical: 90, electrical: 95},
  { month: "March", oilGas: 180, spbg: 95, pipeline: 110, mechanical: 100, electrical: 120},
  { month: "April", oilGas: 110, spbg: 55, pipeline: 80, mechanical: 60, electrical: 70},
  { month: "May", oilGas: 140, spbg: 65, pipeline: 90, mechanical: 75, electrical: 85},
  { month: "June", oilGas: 160, spbg: 85, pipeline: 95, mechanical: 85, electrical: 100},
  { month: "July", oilGas: 170, spbg: 90, pipeline: 100, mechanical: 90, electrical: 110},
  { month: "August", oilGas: 150, spbg: 80, pipeline: 90, mechanical: 80, electrical: 95},
  { month: "September", oilGas: 140, spbg: 75, pipeline: 85, mechanical: 70, electrical: 90},
  { month: "October", oilGas: 130, spbg: 70, pipeline: 80, mechanical: 65, electrical: 85},
  { month: "November", oilGas: 120, spbg: 65, pipeline: 75, mechanical: 60, electrical: 80},
  { month: "December", oilGas: 110, spbg: 60, pipeline: 70, mechanical: 55, electrical: 75},
];

const chartConfig = {
  oilGas: { label: "Oil & Gas Plant Facilities (Onshore)", color: "#1A90CA" },
  spbg: { label: "SPBG", color: "#238BCB" },
  pipeline: { label: "Oil and Gas Pipeline Transmission and Distribution", color: "#2B84CC" },
  mechanical: { label: "Mechanical (Static and Rotating Equipment) and Piping", color: "#337DCD" },
  electrical: { label: "Electrical, Instrumentation, and Fire Fighting System", color: "#3B76CE" },
} 

type ChartKey = keyof typeof chartConfig;

export function BarGraph() {
  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center items-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle className='text-2xl'>Total Persediaan</CardTitle>
          <CardDescription>
          Engineering, Procurement, and Construction
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={0}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                />
              }
            />
           {Object.keys(chartConfig).map((key) => (
            <Bar key={key} dataKey={key} fill={chartConfig[key as ChartKey].color} name={chartConfig[key as ChartKey].label} />
           ))} 
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
